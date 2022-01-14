import { codingWithDefault, integerFromString, integerFromStringWithDefault } from "FHIR/validate"
export const TNMCT_DEFAULT = {system: "http://tiro.health/fhir/ichom-pathology-information/TNMPT", code: "999", display: "unknown"}
export const TNMCN_DEFAULT = {system: "http://tiro.health/fhir/ichom-pathology-information/TNMPN", code: "999", display: "unknown"}

export const PN_OPTIONS = [
    { system: TNMCT_DEFAULT.system, code: "0", display: "pN0" },
    { system: TNMCT_DEFAULT.system, code: "1", display: "pN1" },
    { system: TNMCT_DEFAULT.system, code: "2", display: "pNX" },
]
export const PT_OPTIONS = [
    { system: TNMCN_DEFAULT.system, code: "1", display: "pT2" },
    { system: TNMCN_DEFAULT.system, code: "2", display: "pT2a" },
    { system: TNMCN_DEFAULT.system, code: "3", display: "pT2b" },
    { system: TNMCN_DEFAULT.system, code: "4", display: "pT2c" },
    { system: TNMCN_DEFAULT.system, code: "5", display: "pT3" },
    { system: TNMCN_DEFAULT.system, code: "6", display: "pT3a" },
    { system: TNMCN_DEFAULT.system, code: "7", display: "pT3b" },
    { system: TNMCN_DEFAULT.system, code: "8", display: "pT4" },
    { system: TNMCN_DEFAULT.system, code: "9", display: "pTX" },
]

export const modelRecord = {
    "TNMPT": codingWithDefault(TNMCT_DEFAULT),
    "TNMPN": codingWithDefault(TNMCT_DEFAULT),
    "MARGIN": integerFromStringWithDefault(999),
    "MARGINFOC": integerFromStringWithDefault(999),
    "GLEASONPATH1": integerFromString,
    "GLEASONPATH2": integerFromString
}