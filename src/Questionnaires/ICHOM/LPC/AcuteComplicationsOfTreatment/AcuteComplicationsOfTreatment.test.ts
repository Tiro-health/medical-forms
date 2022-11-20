import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { object, validate } from "superstruct"
import { initAcuteComplicationsOfTreatment } from "./AcuteComplicationsOfTreatment"
import { modelRecord } from "./consts"

const EMTPY_RECORD = {
    "COMPLSURG": 0,
    "COMPLRAD": false,
    "COMPLRADDOMGRA": [],
    "COMPLRADDOMOTHER": "",
}

test("Expect an empty form record to validate", () => {
    const [error, result] = validate(EMTPY_RECORD, object(modelRecord), { coerce: true })
    error && console.log(error)
    expect(result).toEqual(EMTPY_RECORD)
})

test("Expect a transformed empty QuestionnaireReponse to validate", () => {
    const initQR = initAcuteComplicationsOfTreatment()
    const initFormValues = convertQRItemsToRecord(initQR.item)
    const [error, result] = validate(initFormValues, object(modelRecord), { coerce: true })
    error && console.log(error)
    expect(result).toEqual(EMTPY_RECORD)
})

test("Expect a filled out form record, tranformed to QuestionnaireResponse, and back to a form record to validate", () => {
    const initQR = initAcuteComplicationsOfTreatment()
    const initFormValues = convertQRItemsToRecord(initQR.item) as any
    initFormValues.COMPLSURG = 1
    initFormValues.COMPLRAD = true
    initFormValues.COMPLRADDOMGRA = [12, 20]
    initFormValues.COMPLRADDOMOTHER = "Some tekst"

    const qrItems = convertRecordToQRItems(initFormValues)
    const formValues = convertQRItemsToRecord(qrItems)
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true })
    error && console.log(error)
    expect(result).toEqual((initFormValues))
})
