import { Linkage_ItemTypeKind } from "@ahryman40k/ts-fhir-types/lib/R4"
import { any, array, boolean, coerce, date, defaulted, integer, is, literal, number, object, string, Struct, union } from "superstruct"
import { CodingModel, IAnswerValue, ICoding, IQuestionnaireResponseItem, QuantityModel } from "./types"


const STRING_TO_BOOLEAN_MAP = {
    "true": true,
    "1": true,
    "false": false,
    "0": false,
}
type int = number
export const dateFromString = coerce(date(), string(), s => s === "" ? undefined : new Date(s))
export const integerFromString = coerce(integer(), string(), s => s === "" ? undefined : parseInt(s))
export const integerFromStringWithDefault = (d:number)=>coerce(integer(), string(), s => s === "" ? d: parseInt(s))

export const booleanFromString = coerce(boolean(), string(), s => s === "1")
export const codingWithDefault = (c: ICoding) => coerce(defaulted(CodingModel, c), string(), () => undefined)
export const quantityWithFixedUnitFromString = (unit: string) => coerce(object({ value: number(), unit: literal(unit) }), number(), v => ({ value: v, unit }))

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

export function convertRecordToQRItems(o: Record<string, any>) {
    const items = []
    for (const [key, value] of Object.entries(o)) {
        let item = { linkId: key, answer: [] as IAnswerValue[] }
        if (is(value, array(any()))) {
            for (const v in value) {
                var field = mapToFHIRValueField(v)
                item.answer.push({ [field]: v })
            }
        } else {
            const field = mapToFHIRValueField(value)
            item.answer.push({ [field]: value })
        }
        items.push(item)
    }
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
                record = { ...record, [item.linkId]: value }
            }
        }
        if ((item.answer.length > 1)) {
            let valueArray: any[] = []
            record = { ...record, [item.linkId]: valueArray }
            for (const answer of item.answer) {
                for (const value of Object.values(answer)) {
                    valueArray.push(value)
                }
            }
        }
    }
    return record
}