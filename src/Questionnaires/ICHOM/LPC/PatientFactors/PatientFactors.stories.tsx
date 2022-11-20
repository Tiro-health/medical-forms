import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "../../../QuestionnaireResponse"
import { PatientFactors, IPatientFactorsQuestionnaireResponse } from "./PatientFactors"
import { convertRecordToQRItems } from "FHIR/validate"
import { modelRecord } from "./consts"
import { create, object } from "superstruct"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/PatientFactors",
    argTypes: { onSubmit: { action: "submitted" } },
    component: PatientFactors,
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>
const Q = PatientFactors
export const Default: Story<IQuestionnaireProps<IPatientFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IPatientFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
export const FilledOut: Story<IQuestionnaireProps<IPatientFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-factors|0.1",
        item: convertRecordToQRItems(create({
            "AGE": "1952-10-13",
            "COMORB": [3, 4, 5],
        }, object(modelRecord)))
    }
}
