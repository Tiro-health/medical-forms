import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { create, object, validate } from "superstruct"
import { modelRecord, PN_OPTIONS, PT_OPTIONS } from "./consts"
import { initPathologicalInformation } from "./PathologyInformation"

test("Expect a filled out form record, tranformed to QuestionnaireResponse, and back to a form record to validate", () => {
    const initQR = initPathologicalInformation()
    const initFormValues = convertQRItemsToRecord(initQR.item) as any

    Object.assign(initFormValues, create({
        "TNMPT": PT_OPTIONS[1],
        "TNMPN": PN_OPTIONS[2],
        "MARGIN": 1,
        "MARGINFOC": 2,
        "GLEASONPATH1": 2,
        "GLEASONPATH2": 2,
    }, object(modelRecord)))

    const qrItems = convertRecordToQRItems(initFormValues)
    const formValues = convertQRItemsToRecord(qrItems)
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true })
    error && console.log(error)
    expect(result).toEqual((initFormValues))
})