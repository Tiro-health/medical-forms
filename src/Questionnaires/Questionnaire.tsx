import React from "react"
import { IQuestionnaire } from "FHIR/types";
import { AcuteComplicationsOfTreatment, IAcuteComplicationsOfTreatmentQuestionnaireResponse, BaselineTumorFactors, IBaselineTumorFactorsQuestionnaireResponse, PathologyInformation, PatientReportedHealthStatus, SurvivalDiseaseControl, ISurvivalDiseaseControlQuestionnaireReponse, TreatmentVariables, IPatientReportedHealthStatusQuestionnaireResponse, ITreatmentVariablesQuestionnaireResponse, IPathologyInformationQuestionnaireResponse } from "./ICHOM/LPC";
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "./QuestionnaireResponse";
import { IPatientFactorsQuestionnaireResponse, PatientFactors } from "./ICHOM/LPC/PatientFactors";

export const questionnaires = [
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-factors|0.1",
    "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1"
] as const

export type TiroQuestionnaireCanonical = typeof questionnaires[number]

export const getQuestionnaireIDs = () => questionnaires

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
                description: "Questionnaire following the ICHOM standard set for localised prostate cancer. This questionnaire captures the treatment decision after clincial staging."
            }
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Patient-Reported Health Status",
                description: "Questionnaire following hte ICHOM standard set for localised prostate cancer. This questionnaires captures the patient reported outcomes at different moments before and during the treatment."
            }
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Acute Complications Of Treatment",
                description: "Questionnaire following hte ICHOM standard set for localised prostate cancer. This questionnaires captures acute complications during the treatment."
            }
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1":
            return {
                resourceType: "Questionnaire",
                title: "ICHOM LPC Survival and Disease Control",
                description: "Questionnaire following hte ICHOM standard set for localised prostate cancer. This questionnaires captures survival infromation and disease progression."
            }
        default:
            throw Error(`Invalid questionnaire id: ${id}`)
    }
}
export const DynamicQuestionnaire = ({ questionnaire, ...props }: IQuestionnaireProps<TiroQuestionnaireResponse> & { questionnaire: TiroQuestionnaireCanonical }) => {
    switch (questionnaire) {
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1":
            return <BaselineTumorFactors {...props as IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1":
            return <PathologyInformation {...props as IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1":
            return <TreatmentVariables {...props as IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1":
            return <AcuteComplicationsOfTreatment {...props as IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1":
            return <SurvivalDiseaseControl {...props as IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1":
            return <PatientReportedHealthStatus {...props as IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>} />
        case "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-factors|0.1":
            return <PatientFactors {...props as IQuestionnaireProps<IPatientFactorsQuestionnaireResponse>} />
    }
}