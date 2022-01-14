import { ICoding } from "FHIR"
import { codingWithDefault, dateFromString, integerFromString, quantityWithFixedUnitFromString } from "FHIR/validate"

export const TNMCT_DEFAULT = {system: "http://tiro.health/fhir/ichom-lpc-baseline-tumor-factors/TNMCT", code: "999", display: "unknown"}
export const TNMCN_DEFAULT = {system: "http://tiro.health/fhir/ichom-lpc-baseline-tumor-factors/TNMCN", code: "999", display: "unknown"}

export const CTOPTIONS: ICoding[] = [
    { system:TNMCT_DEFAULT.system, code: "0", display: "cT0" },
    { system:TNMCT_DEFAULT.system, code: "1", display: "cT1" },
    { system:TNMCT_DEFAULT.system, code: "2", display: "cT1a" },
    { system:TNMCT_DEFAULT.system, code: "3", display: "cT1b" },
    { system:TNMCT_DEFAULT.system, code: "4", display: "cT1c" },
    { system:TNMCT_DEFAULT.system, code: "5", display: "cT2" },
    { system:TNMCT_DEFAULT.system, code: "6", display: "cT2a" },
    { system:TNMCT_DEFAULT.system, code: "7", display: "cT2b" },
    { system:TNMCT_DEFAULT.system, code: "8", display: "cT2c" },
    { system:TNMCT_DEFAULT.system, code: "9", display: "cT3" },
    { system:TNMCT_DEFAULT.system, code: "10", display: "cT3a" },
    { system:TNMCT_DEFAULT.system, code: "11", display: "cT3b" },
    { system:TNMCT_DEFAULT.system, code: "12", display: "cT4" },
    { system:TNMCT_DEFAULT.system, code: "13", display: "cTX" },
]
export const CNOPTIONS: ICoding[] = [
    { system:TNMCT_DEFAULT.system, code: "0", display: "cN0" },
    { system:TNMCT_DEFAULT.system, code: "1", display: "cN1" },
    { system:TNMCT_DEFAULT.system, code: "2", display: "cNX" },
]

export const modelRecord = {
    "DIAGDATE": dateFromString,
    "PSA": quantityWithFixedUnitFromString("ng/ml"),
    "TNMCT": codingWithDefault(TNMCT_DEFAULT),
    "TNMCN": codingWithDefault(TNMCN_DEFAULT),
    "BIOPCORE": integerFromString,
    "BIOPPOS": integerFromString,
    "BIOPINVOL": quantityWithFixedUnitFromString("%"),
    "GLEASONBIOP1": integerFromString,
    "GLEASONBIOP2": integerFromString
}