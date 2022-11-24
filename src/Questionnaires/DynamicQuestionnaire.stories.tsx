import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "./QuestionnaireResponse"
import { DynamicQuestionnaire, TiroQuestionnaireCanonical } from "./Questionnaire"

export default {
    title: "components/Questionnaires/DynamicQuestionnaire",
    argTypes: { onSubmit: { action: "submitted" } },
    component: DynamicQuestionnaire,
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>

const Q = DynamicQuestionnaire
type StoryArgs = IQuestionnaireProps<TiroQuestionnaireResponse> & { questionnaire: TiroQuestionnaireCanonical }
export const Default: Story<StoryArgs> = (args) => <Q {...args} />
Default.args = { questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1" }
export const WithSubjectAndAuthor: Story<StoryArgs> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234", questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."

export const Prefilled: Story<StoryArgs> = (args) => <Q {...args} />
Prefilled.storyName = "Pas a previous QuestionnaireResponse to prefill answers."

Prefilled.args =
{
    author: "clinicianId123",
    subject: "patientId1234",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    initQuestionnaireResponse:
        {
            "resourceType": "QuestionnaireResponse",
            "questionnaire": "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
            "item": [
                {
                    "linkId": "DIAGDATE",
                    "answer": [
                        {
                            "valueDate": "2021-06-20"
                        }
                    ]
                },
                {
                    "linkId": "PSA",
                    "answer": [
                        {
                            "valueQuantity": { unit: "ng/ml", value: 21.2 }
                        }
                    ]
                },
                {
                    "linkId": "TNMCT",
                    "answer": [
                        {
                            "valueCoding": { code: "TNMCT/cT1c", display: "cT1c", system: "http://tiro.health/fhir/ichom" }
                        }
                    ]
                },
                {
                    "linkId": "TNMCN",
                    "answer": [
                        {
                            "valueCoding": { code: "TNMCN/cN0", display: "cN0", system: "http://tiro.health/fhir/ichom" }
                        }
                    ]
                },
                {
                    "linkId": "BIOPCORE",
                    "answer": [
                        {
                            "valueInteger": 3
                        }
                    ]
                },
                {
                    "linkId": "BIOPPOS",
                    "answer": [
                        {
                            "valueInteger": 5
                        }
                    ]
                },
                {
                    "linkId": "BIOPINVOL",
                    "answer": [{ valueQuantity: undefined }]
                },
                {
                    "linkId": "GLEASONBIOP1",
                    "answer": [
                        {
                            valueInteger: 3
                        }
                    ]
                },
                {
                    "linkId": "GLEASONBIOP2",
                    "answer": [
                        {
                            valueInteger: 4
                        }
                    ]
                }
            ]
        } as TiroQuestionnaireResponse
}