import { initSurvivalDiseaseControl } from "./SurvivalDiseaseControl"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { create, object, validate } from "superstruct";
import { modelRecord } from "./consts";

test("Expect filled out form record, transformed to QuestionnaireResponse, to be equal to the original QuestionnaireResponse", () => {
    const initQR = initSurvivalDiseaseControl();
    const initFormValues = convertQRItemsToRecord(initQR.item);
    Object.assign(initFormValues, create(
        {
            "DEATH": true,
            "DEATHDATE": "2020-01-01",
            "DEATHLPC": "",
            "METADEV": true,
            "METADATE": "",
            "BIOCHEM": true,
            "BIOCHEMDATE": "",
            "BIOCHEMPSA": 2,
        }, object(modelRecord)));
    const qrItems = convertRecordToQRItems(initFormValues)
    const formValues = convertQRItemsToRecord(qrItems)
    const [error, result] = validate(formValues, object(modelRecord), { coerce: true })
    error && console.log(error)
    expect(result).toEqual(initFormValues)
});