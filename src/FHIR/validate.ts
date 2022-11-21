import { any, array, boolean, coerce, date, defaulted, empty, integer, is, literal, number, object, optional, string, Struct, union } from "superstruct"
import { CodingModel, IAnswerValue, ICoding, IQuestionnaireResponseItem, QuantityModel } from "./types"

export const dateFromString = coerce(date(), string(), s => s === "" ? undefined : new Date(s))
export const dateFromStringWithDefault = defaulted(dateFromString, () => new Date())
export const optionalDateFromString = coerce(optional(date()), string(), s => s === "" ? undefined : new Date(s))
export const integerFromString = coerce(integer(), string(), s => s === "" ? undefined : parseInt(s))
export const integerFromStringWithDefault = (d: number) => coerce(integer(), string(), s => s === "" ? d : parseInt(s))
export const optionalIntegerFromString = coerce(optional(integer()), string(), s => s === "" ? undefined : parseInt(s))

export const booleanFromString = coerce(boolean(), string(), s => s === "1")
export const optionalBooleanFromString = coerce(optional(boolean()), string(), s => s === "" ? undefined : s === "1")
export const codingWithDefault = (c: ICoding) => coerce(defaulted(CodingModel, c), string(), () => undefined)
export const quantityWithFixedUnitFromString = (unit: string) => coerce(object({ value: number(), unit: literal(unit) }), number(), v => ({ value: v, unit }))
export const optionalQuantityWithFixedUnitFromString = (unit: string) => coerce(optional(object({ value: number(), unit: literal(unit) })), optional(union([number(), empty(string())])), v => (v === undefined || v === "") ? undefined : ({ value: v, unit }))

const MODEL_FHIR_FIELD_MAP: Record<string, Struct<any, any>> = {
    "valueInteger": integer(),
    "valueCoding": CodingModel,
    "valueQuantity": QuantityModel,
    "valueDate": date(),
    "valueBoolean": boolean(),
    "valueString": string()
}

export function mapToFHIRValueField(o: any) {
    for (const [field, model] of Object.entries(MODEL_FHIR_FIELD_MAP)) {
        if (is(o, model)) return field
    }
    throw Error("Couldn't map the value to a supported FHIR type. Received: " + JSON.stringify(o))
}

export function mapToRecordValueField(o: unknown) {
    if (is(o, integer())) return o.toString()
    if (is(o, boolean())) return o
    if (is(o, string())) return o
    if (is(o, date())) return o.toISOString().split("T")[0]
    if (is(o, QuantityModel)) return o.value ?? ""
    return o
}

export function convertRecordToQRItems(o: Record<string, unknown>, initQrItems: IQuestionnaireResponseItem[] = []): IQuestionnaireResponseItem[] {
    const items: IQuestionnaireResponseItem[] = []
    Object.entries(o).forEach(([key, value], index) => {
        let item = { linkId: key, answer: [] as IAnswerValue[] }
        try {
            if (is(value, array(any()))) {
                value.forEach((v, i) => {
                    var field = mapToFHIRValueField(v)
                    const initAnswerValue = initQrItems[index]?.answer[i]
                    item.answer.push({ ...initAnswerValue, [field]: v })
                })
            } else {

                const initItem = initQrItems.find(i => i.linkId === key)
                const field = mapToFHIRValueField(value)
                item.answer.push({ ...initItem?.answer[0], [field]: value, })
            }

        } catch (e) {
            console.debug("ℹ️ Couldn't convert " + key + " to a FHIR value field. Received: " + JSON.stringify(value))
        }
        items.push(item)
    })
    return items
}

export function convertQRItemsToRecord(items: IQuestionnaireResponseItem[]) {
    let record = {}
    for (const item of items) {
        if (item.answer.length === 0) {
            record = { ...record, [item.linkId]: "" }
        }
        if ((item.answer.length === 1)) {
            for (const value of Object.values(item.answer[0])) {
                record = { ...record, [item.linkId]: mapToRecordValueField(value) }
            }
        }
        if ((item.answer.length > 1)) {
            let valueArray: any[] = []
            record = { ...record, [item.linkId]: valueArray }
            for (const answer of item.answer) {
                for (const value of Object.values(answer)) {
                    valueArray.push(mapToRecordValueField(value))
                }
            }
        }
    }
    return record
}