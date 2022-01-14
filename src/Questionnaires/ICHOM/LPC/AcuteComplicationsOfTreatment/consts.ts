import { booleanFromString, integerFromString } from "FHIR/validate"
import { array, coerce, string } from "superstruct"

export const modelRecord = {
    "COMPLSURG": integerFromString,
    "COMPLRAD": booleanFromString,
    "COMPLRADDOMGRA": coerce(array(integerFromString), string(), s=>[]),
    "COMPLRADDOMOTHER": string(),
}