import React from "react"
import { IQuestionnaire } from "FHIR/types";
import { BaselineTumorFactors, IBaselineTumorFactorsQR, PathologyInformation, TreatmentVariables } from "./ICHOM/LPC";
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "./QuestionnaireResponse";

export const questionnaires = [
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1"] as const

export type TiroQuestionnaireCanonical = typeof questionnaires[number]

export const getQuestionnaireIDs=()=>questionnaires

export interface TiroQuestionnaire extends IQuestionnaire {
    id: TiroQuestionnaireCanonical,
    title: string
}

export const getQuestionnaire = (id: TiroQuestionnaireCanonical): IQuestionnaire => {
    switch (id) {
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Baseline Tumor Factors",
                description: "Questionnaire following the ICHOM standard set for localised prostate cancer. This questionnaire captures the baseline histological and clinical staging information about the tumor."
            }
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Pathology Information",
                description: "Questionnaire following the ICHOM standard set for localised prostate cancer. This questionnaire captures the pathology results after surgery."
            }
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Treatment Variables",
                description: "Questionnaire followin teh ICHOM standard set for localised prostate cancer. This questionnaire captures the treatment decision after clincial staging."
            }
        default:
            throw Error(`Invalid questionnaire id: ${id}`)
    }
}
export const DynamicQuestionnaire = ({ questionnaire, ...props }: IQuestionnaireProps<TiroQuestionnaireResponse> & { questionnaire: TiroQuestionnaireCanonical }) => {
    switch (questionnaire) {
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1":
            return <BaselineTumorFactors {...props as IQuestionnaireProps<IBaselineTumorFactorsQR>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1":
            return <PathologyInformation {...props} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1":
            return <TreatmentVariables {...props} />
    }
}