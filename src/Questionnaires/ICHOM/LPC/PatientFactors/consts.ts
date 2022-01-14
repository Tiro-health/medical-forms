import { dateFromString, integerFromString } from "FHIR/validate";
import { array, coerce, string } from "superstruct";

export const modelRecord = {
    "AGE": dateFromString,
    "COMORB": coerce(array(integerFromString), string(), s=>[]),
}