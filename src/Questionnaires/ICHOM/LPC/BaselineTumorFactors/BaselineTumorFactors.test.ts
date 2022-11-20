import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { create, object, validate } from "superstruct"
import { initBaselineTumorFactors } from "./BaselineTumorFactors"
import { modelRecord, CTOPTIONS, CNOPTIONS } from "./consts"
import moment from "moment"

test("Expect a filled out form record, tranformed to QuestionnaireResponse, and back to a form record to validate", () => {
    const initQR = initBaselineTumorFactors()
    const initFormValues = convertQRItemsToRecord(initQR.item) as any

    Object.assign(initFormValues, create({
        "DIAGDATE": "1970-01-01",
        "PSA": { value: 1.2, unit: "ng/ml" },
        "TNMCT": CTOPTIONS[1],
        "TNMCN": CNOPTIONS[2],
        "BIOPCORE": 2,
        "BIOPPOS": 3,
        "BIOPINVOL": { value: 23, unit: "%" },
        "GLEASONBIOP1": 2,
        "GLEASONBIOP2": 2,
    }, object(modelRecord)))

    const qrItems = convertRecordToQRItems(initFormValues)
    const formValues = convertQRItemsToRecord(qrItems)
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true })
    error && console.log(error)
    expect(result).toEqual((initFormValues))
})

