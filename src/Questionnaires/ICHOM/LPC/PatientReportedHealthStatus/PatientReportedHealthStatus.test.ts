import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { create, object, validate } from "superstruct";
import { modelRecord } from "./consts";
import { initPatientReportedHealthStatus } from "./PatientReportedHealthStatus";

test("Expected filled out form record, tranformed to QuestionnaireResponse, and back to a form record to validate", () => {
    const initQR = initPatientReportedHealthStatus();
    const initFormValues = convertQRItemsToRecord(initQR.item);
    Object.assign(initFormValues, create({
        "EPIC26_Q01": 1,
        "EPIC26_Q02": 1,
        "EPIC26_Q03": 1,
        "EPIC26_Q04a": 1,
        "EPIC26_Q04b": 1,
        "EPIC26_Q04c": 1,
        "EPIC26_Q04d": 1,
        "EPIC26_Q04e": 1,
        "EPIC26_Q05": 1,
        "EPIC26_Q06a": 1,
        "EPIC26_Q06b": 1,
        "EPIC26_Q06c": 1,
        "EPIC26_Q06d": 1,
        "EPIC26_Q06e": 1,
        "EPIC26_Q07": 1,
        "EPIC26_Q08a": 1,
        "EPIC26_Q08b": 1,
        "EPIC26_Q09": 1,
        "EPIC26_Q10": 1,
        "EPIC26_Q11": 1,
        "EPIC26_Q12": 1,
        "EPIC26_Q13a": 1,
        "EPIC26_Q13b": 1,
        "EPIC26_Q13c": 1,
        "EPIC26_Q13d": 1,
        "EPIC26_Q13e": 1,
        //"LIBID_Q01": 1,
        //"LIBID_Q02": 1,
        //"LIBID_Q03a": 1,
        //"LIBID_Q03b": 1,
        //"LIBID_Q03c": 1,
        //"LIBID_Q03d": 1,
        //"LIBID_Q03e": 1,
    }, object(modelRecord)));
    const qrItems = convertRecordToQRItems(initFormValues);
    const formValues = convertQRItemsToRecord(qrItems);
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true });
    error && console.log(error);
    expect(result).toEqual((initFormValues));
})