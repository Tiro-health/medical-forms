import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { create, object, validate } from "superstruct";
import { modelRecord } from "./consts";
import { initTreatmentVariables } from "./TreatmentVariables";

test("Expect filled out form record, transformed to QuestionnaireResponse, and back to a form record to validate", () => {
    const initQR = initTreatmentVariables();
    const initFormValues = convertQRItemsToRecord(initQR.item);
    Object.assign(initFormValues, create({
        "PRIMARYTX": "",
        "PRWATCHDATE": "2012-06-06",
        "PRACTIVEDATE": "2012-06-06",
        "PRRADPROTXDATE": "2012-06-06",
        "PRNERVESPARE": "1",
        "PREBRTTOTDOSE": { value: 5, unit: "Gray" },
        "PREBRTDOSEPERFRACT": { value: 2, unit: "Gray" },
        "PREBRTTXSTARTDATE": "2012-06-06",
        "PREBRTTXSTOPDATE": "2012-06-06",
        "PREBRTTXONGOING": "1",
        "PRBRACHYTXSTARTDATE": "2012-06-06",
        "PRBRACHYTXSTOPDATE": "2012-06-06",
        "PRBRACHYTXONGOING": "1",
        "PRBRACHYDOSERATE": "1",
        "PRADTTXSTARTDATE": "2012-06-06",
        "PRADTTXSTOPDATE": "2012-06-06",
        "PRADTTXONGOING": "1",
        "PRIMARYTXFT": "",
        "PRFOCTXSTARTDATE": "2012-06-06",
        "PRFOCTXSTOPDATE": "2012-06-06",
        "PRFOCTXONGOING": "1",
        "PRIMARYTXOTHER": "",
        "PROTHERTXSTARTDATE": "2012-06-06",
        "PROTHERTXSTOPDATE": "2012-06-06",
        "PROTHERTXONGOING": "1",
        "SALVAGETXINI": "1",
        "SALVAGETX": ["1", "2"],
        "SALVAGETXOTHER": "",
        "SVRADPROTXDATE": "2012-06-06",
        "SVNERVESPARE": "1",
        "SVEBRTTOTDOSE": { value: 5, unit: "Gray" },
        "SVEBRTDOSEPERFRACT": { value: 2, unit: "Gray" },
        "SVEBRTTXSTARTDATE": "2012-06-06",
        "SVEBRTTXSTOPDATE": "2012-06-06",
        "SVEBRTTXONGOING": "1",
        "SVBRACHYTXSTARTDATE": "2012-06-06",
        "SVBRACHYTXSTOPDATE": "2012-06-06",
        "SVBRACHYTXONGOING": "1",
        "SVBRACHYDOSERATE": "1",
        "SVADTTXSTARTDATE": "2012-06-06",
        "SVADTTXSTOPDATE": "2012-06-06",
        "SVADTTXONGOING": "1",
        "SVFOCTXSTARTDATE": "2012-06-06",
        "SVFOCTXSTOPDATE": "2012-06-06",
        "SVFOCTXONGOING": "1",
        "SVOTHERTXSTARTDATE": "2012-06-06",
        "SVOTHERTXSTOPDATE": "2012-06-06",
        "SVOTHERTXONGOING": "1",

    }, object(modelRecord)));
    const qrItems = convertRecordToQRItems(initFormValues);
    const formValues = convertQRItemsToRecord(qrItems);
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true });
    error && console.log(error);
    expect(result).toEqual((initFormValues));
});