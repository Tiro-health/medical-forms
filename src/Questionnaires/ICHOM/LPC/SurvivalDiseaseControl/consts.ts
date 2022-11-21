import { booleanFromString, optionalIntegerFromString, optionalDateFromString, optionalQuantityWithFixedUnitFromString } from "FHIR/validate"

export const modelRecord = {
    "DEATH": booleanFromString,
    "DEATHDATE": optionalDateFromString,
    "DEATHLPC": optionalIntegerFromString,
    "METADEV": booleanFromString,
    "METADATE": optionalDateFromString,
    "BIOCHEM": booleanFromString,
    "BIOCHEMDATE": optionalDateFromString,
    "BIOCHEMPSA": optionalQuantityWithFixedUnitFromString("ng/ml")
}