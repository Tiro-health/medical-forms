import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { create, object, validate } from "superstruct";
import { modelRecord } from "./consts";
import { initPatientFactors } from "./PatientFactors";

test("Expected filled out form record, tranformed to QuestionnaireResponse, and back to a form record to validate", () => {
    const initQR = initPatientFactors();
    const initFormValues = convertQRItemsToRecord(initQR.item);
    Object.assign(initFormValues, create({
        "AGE": "1952-10-13",
        "COMORB": [3, 4, 5],
    }, object(modelRecord)));
    const qrItems = convertRecordToQRItems(initFormValues);
    const formValues = convertQRItemsToRecord(qrItems);
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true });
    error && console.log(error);
    expect(result).toEqual((initFormValues));
});