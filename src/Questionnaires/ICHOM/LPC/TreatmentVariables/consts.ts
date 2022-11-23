import { booleanFromString, optionalBooleanFromString, optionalDateFromString, optionalIntegerFromString, optionalQuantityWithFixedUnitFromString } from "FHIR/validate"
import { array, coerce, string } from "superstruct"

export const modelRecord = {
    "PRIMARYTX": coerce(array(optionalIntegerFromString), string(), s => []),
    "PRWATCHDATE": optionalDateFromString,
    "PRACTIVEDATE": optionalDateFromString,
    "PRRADPROTXDATE": optionalDateFromString,
    "PRNERVESPARE": optionalIntegerFromString,
    "PREBRTTOTDOSE": optionalQuantityWithFixedUnitFromString("Gray"),
    "PREBRTDOSEPERFRACT": optionalQuantityWithFixedUnitFromString("Gray"),
    "PREBRTTXSTARTDATE": optionalDateFromString,
    "PREBRTTXSTOPDATE": optionalDateFromString,
    "PREBRTTXONGOING": optionalBooleanFromString,
    "PRBRACHYTXSTARTDATE": optionalDateFromString,
    "PRBRACHYTXSTOPDATE": optionalDateFromString,
    "PRBRACHYTXONGOING": optionalBooleanFromString,
    "PRBRACHYDOSERATE": optionalIntegerFromString,
    "PRADTTXSTARTDATE": optionalDateFromString,
    "PRADTTXSTOPDATE": optionalDateFromString,
    "PRADTTXONGOING": optionalBooleanFromString,
    "PRIMARYTXFT": string(),
    "PRFOCTXSTARTDATE": optionalDateFromString,
    "PRFOCTXSTOPDATE": optionalDateFromString,
    "PRFOCTXONGOING": optionalBooleanFromString,
    "PRIMARYTXOTHER": string(),
    "PROTHERTXSTARTDATE": optionalDateFromString,
    "PROTHERTXSTOPDATE": optionalDateFromString,
    "PROTHERTXONGOING": optionalBooleanFromString,
    "SALVAGETXINI": booleanFromString,
    "SALVAGETX": coerce(array(optionalIntegerFromString), string(), s => []),
    "SALVAGETXOTHER": string(),
    "SVRADPROTXDATE": optionalDateFromString,
    "SVNERVESPARE": optionalIntegerFromString,
    "SVEBRTTOTDOSE": optionalQuantityWithFixedUnitFromString("Gray"),
    "SVEBRTDOSEPERFRACT": optionalQuantityWithFixedUnitFromString("Gray"),
    "SVEBRTTXSTARTDATE": optionalDateFromString,
    "SVEBRTTXSTOPDATE": optionalDateFromString,
    "SVEBRTTXONGOING": optionalBooleanFromString,
    "SVBRACHYTXSTARTDATE": optionalDateFromString,
    "SVBRACHYTXSTOPDATE": optionalDateFromString,
    "SVBRACHYTXONGOING": optionalBooleanFromString,
    "SVBRACHYDOSERATE": optionalIntegerFromString,
    "SVADTTXSTARTDATE": optionalDateFromString,
    "SVADTTXSTOPDATE": optionalDateFromString,
    "SVADTTXONGOING": optionalBooleanFromString,
    "SVFOCTXSTARTDATE": optionalDateFromString,
    "SVFOCTXSTOPDATE": optionalDateFromString,
    "SVFOCTXONGOING": optionalBooleanFromString,
    "SVOTHERTXSTARTDATE": optionalDateFromString,
    "SVOTHERTXSTOPDATE": optionalDateFromString,
    "SVOTHERTXONGOING": optionalBooleanFromString,
}
