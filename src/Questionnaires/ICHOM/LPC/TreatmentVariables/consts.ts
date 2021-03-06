import { dateFromString, integerFromString, quantityWithFixedUnitFromString } from "FHIR/validate"
import { array, coerce, date, string } from "superstruct"

export const modelRecord = {
    "COMPLRADDOMGRA": coerce(array(integerFromString), string(), s=>[]),
    "COMPLRADDOMOTHER": string(),
    "PRIMARYTX": coerce(array(integerFromString), string(), s=>[]),
    "PRWATCHDATE": dateFromString,
    "PRACTIVEDATE": dateFromString,
    "PRRADPROTXDATE": dateFromString,
    "PRNERVESPARE": integerFromString,
    "PREBRTTOTDOSE": quantityWithFixedUnitFromString("Gray"),
    "PREBRTDOSEPERFRACT": quantityWithFixedUnitFromString("Gray"),
    "PREBRTTXSTARTDATE": dateFromString,
    "PREBRTTXSTOPDATE": dateFromString,
    "PREBRTTXONGOING": integerFromString,
    "PRBRACHYTXSTARTDATE": dateFromString,
    "PRBRACHYTXSTOPDATE": dateFromString,
    "PRBRACHYTXONGOING": integerFromString,
    "PRBRACHYDOSERATE": integerFromString,
    "PRADTTXSTARTDATE": dateFromString,
    "PRADTTXSTOPDATE": dateFromString,
    "PRADTTXONGOING": integerFromString,
    "PRIMARYTXFT": string(),
    "PRFOCTXSTARTDATE": dateFromString,
    "PRFOCTXSTOPDATE": dateFromString,
    "PRFOCTXONGOING": integerFromString,
    "PRIMARYTXOTHER": string(),
    "PROTHERTXSTARTDATE": dateFromString,
    "PROTHERTXSTOPDATE": dateFromString,
    "PROTHERTXONGOING": integerFromString,
    "SALVAGETXINI": integerFromString,
    "SALVAGETX": integerFromString,
    "SALVAGETXOTHER": string(),
    "SVRADPROTXDATE": dateFromString,
    "SVNERVESPARE": integerFromString,
    "SVEBRTTOTDOSE": quantityWithFixedUnitFromString("Gray"),
    "SVEBRTDOSEPERFRACT": quantityWithFixedUnitFromString("Gray"),
    "SVEBRTTXSTARTDATE": dateFromString,
    "SVEBRTTXSTOPDATE": dateFromString,
    "SVEBRTTXONGOING": integerFromString,
    "SVBRACHYTXSTARTDATE": dateFromString,
    "SVBRACHYTXSTOPDATE": dateFromString,
    "SVBRACHYTXONGOING": integerFromString,
    "SVBRACHYDOSERATE": quantityWithFixedUnitFromString("Gray"),
    "SVADTTXSTARTDATE": dateFromString,
    "SVADTTXSTOPDATE": dateFromString,
    "SVADTTXONGOING": integerFromString,
    "SVFOCTXSTARTDATE": dateFromString,
    "SVFOCTXSTOPDATE": dateFromString,
    "SVFOCTXONGOING": integerFromString,
    "SVOTHERTXSTARTDATE": dateFromString,
    "SVOTHERTXSTOPDATE": dateFromString,
    "SVOTHERTXONGOING": integerFromString,
}
