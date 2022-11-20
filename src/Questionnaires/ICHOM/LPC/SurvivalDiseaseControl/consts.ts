import { booleanFromString, optionalDateFromString, optionalQuantityWithFixedUnitFromString } from "FHIR/validate"

export const modelRecord = {
    "DEATH": booleanFromString,
    "DEATHDATE": optionalDateFromString,
    "DEATHLPC": booleanFromString,
    "METADEV": booleanFromString,
    "METADATE": optionalDateFromString,
    "BIOCHEM": booleanFromString,
    "BIOCHEMDATE": optionalDateFromString,
    "BIOCHEMPSA": optionalQuantityWithFixedUnitFromString("ng/ml")
}