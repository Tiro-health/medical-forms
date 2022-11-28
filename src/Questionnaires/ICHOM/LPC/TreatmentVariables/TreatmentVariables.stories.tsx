import React from "react"
import { Meta, Story } from "@storybook/react"
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest"
import { IQuestionnaireProps } from "../../../QuestionnaireResponse"
import { ITreatmentVariablesQuestionnaireResponse, TreatmentVariables } from "./TreatmentVariables"
import { convertRecordToQRItems } from "../../../../FHIR/validate";
import { create, object } from "superstruct";
import { modelRecord } from "./consts";


export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/TreatmentVariables",
    argTypes: { onSubmit: { action: "submitted" } },
    component: TreatmentVariables,
} as Meta<IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>>
const Q = TreatmentVariables
const submit = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
}
export const Empty: Story<IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>> = (args) => <Q {...args} />
Empty.play = submit
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
WithSubjectAndAuthor.play = submit
export const FilledOut: Story<IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1",
        item: convertRecordToQRItems(create({
            "PRIMARYTX": [1, 2, 3],
            "PRWATCHDATE": "2012-06-06",
            "PRACTIVEDATE": "2012-06-06",
            "PRRADPROTXDATE": "2012-06-06",
            "PRNERVESPARE": "1",
            "PREBRTTOTDOSE": { value: 12, unit: "Gray" },
            "PREBRTDOSEPERFRACT": { value: 11, unit: "Gray" },
            "PREBRTTXSTARTDATE": "2012-06-06",
            "PREBRTTXSTOPDATE": "2012-06-06",
            "PREBRTTXONGOING": "1",
            "PRBRACHYTXSTARTDATE": "2012-06-06",
            "PRBRACHYTXSTOPDATE": "2012-06-06",
            "PRBRACHYTXONGOING": true,
            "PRBRACHYDOSERATE": "1",
            "PRADTTXSTARTDATE": "2012-06-06",
            "PRADTTXSTOPDATE": "2012-06-06",
            "PRADTTXONGOING": "true",
            "PRIMARYTXFT": "",
            "PRFOCTXSTARTDATE": "2012-06-06",
            "PRFOCTXSTOPDATE": "2012-06-06",
            "PRFOCTXONGOING": true,
            "PRIMARYTXOTHER": "",
            "PROTHERTXSTARTDATE": "2012-06-06",
            "PROTHERTXSTOPDATE": "2012-06-06",
            "PROTHERTXONGOING": true,
            "SALVAGETXINI": "1",
            "SALVAGETX": [1, 2, 3],
            "SALVAGETXOTHER": "",
            "SVRADPROTXDATE": "2012-06-06",
            "SVNERVESPARE": "1",
            "SVEBRTTOTDOSE": { value: 10, unit: "Gray" },
            "SVEBRTDOSEPERFRACT": { value: 5, unit: "Gray" },
            "SVEBRTTXSTARTDATE": "2012-06-06",
            "SVEBRTTXSTOPDATE": "2012-06-06",
            "SVEBRTTXONGOING": true,
            "SVBRACHYTXSTARTDATE": "2012-06-06",
            "SVBRACHYTXSTOPDATE": "2012-06-06",
            "SVBRACHYTXONGOING": "1",
            "SVBRACHYDOSERATE": "1",
            "SVADTTXSTARTDATE": "2012-06-06",
            "SVADTTXSTOPDATE": "2012-06-06",
            "SVADTTXONGOING": true,
            "SVFOCTXSTARTDATE": "2012-06-06",
            "SVFOCTXSTOPDATE": "2012-06-06",
            "SVFOCTXONGOING": true,
            "SVOTHERTXSTARTDATE": "2012-06-06",
            "SVOTHERTXSTOPDATE": "2012-06-06",
            "SVOTHERTXONGOING": true,

        }, object(modelRecord))) as ITreatmentVariablesQuestionnaireResponse["item"]
    }
}
FilledOut.play = submit

export const ValidateBugFix20221123: Story<IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>> = (args) => <Q {...args} />
ValidateBugFix20221123.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1",
        item: convertRecordToQRItems(create({
            "PRIMARYTX": [1, 2, 3],
            "PRWATCHDATE": "2012-06-06",
            "PRACTIVEDATE": "2012-06-06",
            "PRRADPROTXDATE": "2012-06-06",
            "PRNERVESPARE": "1",
            "PREBRTTOTDOSE": { value: 12, unit: "Gray" },
            "PREBRTDOSEPERFRACT": { value: 11, unit: "Gray" },
            "PREBRTTXSTARTDATE": "2012-06-06",
            "PREBRTTXSTOPDATE": "2012-06-06",
            "PREBRTTXONGOING": "1",
            "PRBRACHYTXSTARTDATE": "2012-06-06",
            "PRBRACHYTXSTOPDATE": "2012-06-06",
            "PRBRACHYTXONGOING": true,
            "PRBRACHYDOSERATE": "1",
            "PRADTTXSTARTDATE": "2012-06-06",
            "PRADTTXSTOPDATE": "2012-06-06",
            "PRADTTXONGOING": "true",
            "PRIMARYTXFT": "",
            "PRFOCTXSTARTDATE": "2012-06-06",
            "PRFOCTXSTOPDATE": "2012-06-06",
            "PRFOCTXONGOING": true,
            "PRIMARYTXOTHER": "",
            "PROTHERTXSTARTDATE": "2012-06-06",
            "PROTHERTXSTOPDATE": "2012-06-06",
            "PROTHERTXONGOING": true,
            "SALVAGETXINI": false,
            "SALVAGETX": [1, 2, 3],
            "SALVAGETXOTHER": "",
            "SVRADPROTXDATE": "2012-06-06",
            "SVNERVESPARE": "1",
            "SVEBRTTOTDOSE": { value: 10, unit: "Gray" },
            "SVEBRTDOSEPERFRACT": { value: 5, unit: "Gray" },
            "SVEBRTTXSTARTDATE": "2012-06-06",
            "SVEBRTTXSTOPDATE": "2012-06-06",
            "SVEBRTTXONGOING": true,
            "SVBRACHYTXSTARTDATE": "2012-06-06",
            "SVBRACHYTXSTOPDATE": "2012-06-06",
            "SVBRACHYTXONGOING": "1",
            "SVBRACHYDOSERATE": "1",
            "SVADTTXSTARTDATE": "2012-06-06",
            "SVADTTXSTOPDATE": "2012-06-06",
            "SVADTTXONGOING": true,
            "SVFOCTXSTARTDATE": "2012-06-06",
            "SVFOCTXSTOPDATE": "2012-06-06",
            "SVFOCTXONGOING": true,
            "SVOTHERTXSTARTDATE": "2012-06-06",
            "SVOTHERTXSTOPDATE": "2012-06-06",
            "SVOTHERTXONGOING": true,

        }, object(modelRecord))) as ITreatmentVariablesQuestionnaireResponse["item"]
    }
}
ValidateBugFix20221123.play = submit

export const CustomFilledOut: Story<IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>> = (args) => <Q {...args} />
CustomFilledOut.args = {
    initQuestionnaireResponse: {
        "resourceType": "QuestionnaireResponse",
        "questionnaire": "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1",
        "item": [
            {
                "linkId": "PRIMARYTX",
                "answer": [
                    {
                        "valueInteger": 1
                    },
                    {
                        "valueInteger": 2
                    },
                    {
                        "valueInteger": 3
                    },
                    {
                        "valueInteger": 4
                    },
                    {
                        "valueInteger": 7
                    }
                ]
            },
            {
                "linkId": "PRWATCHDATE",
                "answer": [
                    {
                        "valueDate": "2022-11-23T00:00:00.000Z"
                    }
                ]
            },
            {
                "linkId": "PRACTIVEDATE",
                "answer": [
                    {
                        "valueDate": "2022-11-12T00:00:00.000Z"
                    }
                ]
            },
            {
                "linkId": "PRRADPROTXDATE",
                "answer": [
                    {
                        "valueDate": "2022-11-25T00:00:00.000Z"
                    }
                ]
            },
            {
                "linkId": "PRNERVESPARE",
                "answer": [
                    {
                        "valueInteger": 1
                    }
                ]
            },
            {
                "linkId": "PREBRTTOTDOSE",
                "answer": [
                    {
                        "valueQuantity": {
                            "value": 23,
                            "unit": "Gray"
                        }
                    }
                ]
            },
            {
                "linkId": "PREBRTDOSEPERFRACT",
                "answer": [
                    {
                        "valueQuantity": {
                            "value": 50,
                            "unit": "Gray"
                        }
                    }
                ]
            },
            {
                "linkId": "PREBRTTXSTARTDATE",
                "answer": [
                    {
                        "valueDate": "2022-11-23T00:00:00.000Z"
                    }
                ]
            },
            {
                "linkId": "PREBRTTXSTOPDATE",
                "answer": [
                    {
                        "valueDate": "2022-11-28T00:00:00.000Z"
                    }
                ]
            },
            {
                "linkId": "PREBRTTXONGOING",
                "answer": []
            },
            {
                "linkId": "PRBRACHYTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "PRBRACHYTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "PRBRACHYTXONGOING",
                "answer": []
            },
            {
                "linkId": "PRBRACHYDOSERATE",
                "answer": []
            },
            {
                "linkId": "PRADTTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "PRADTTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "PRADTTXONGOING",
                "answer": []
            },
            {
                "linkId": "PRIMARYTXFT",
                "answer": [
                    {
                        "valueString": "test"
                    }
                ]
            },
            {
                "linkId": "PRFOCTXSTARTDATE",
                "answer": [
                    {
                        "valueDate": "2022-10-31T00:00:00.000Z"
                    }
                ]
            },
            {
                "linkId": "PRFOCTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "PRFOCTXONGOING",
                "answer": [
                    {
                        "valueBoolean": true
                    }
                ]
            },
            {
                "linkId": "PRIMARYTXOTHER",
                "answer": [
                    {
                        "valueString": ""
                    }
                ]
            },
            {
                "linkId": "PROTHERTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "PROTHERTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "PROTHERTXONGOING",
                "answer": []
            },
            {
                "linkId": "SALVAGETXINI",
                "answer": [
                    {
                        "valueBoolean": false
                    }
                ]
            },
            {
                "linkId": "SALVAGETX",
                "answer": []
            },
            {
                "linkId": "SALVAGETXOTHER",
                "answer": [
                    {
                        "valueString": ""
                    }
                ]
            },
            {
                "linkId": "SVRADPROTXDATE",
                "answer": []
            },
            {
                "linkId": "SVNERVESPARE",
                "answer": []
            },
            {
                "linkId": "SVEBRTTOTDOSE",
                "answer": []
            },
            {
                "linkId": "SVEBRTDOSEPERFRACT",
                "answer": []
            },
            {
                "linkId": "SVEBRTTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "SVEBRTTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "SVEBRTTXONGOING",
                "answer": []
            },
            {
                "linkId": "SVBRACHYTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "SVBRACHYTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "SVBRACHYTXONGOING",
                "answer": []
            },
            {
                "linkId": "SVBRACHYDOSERATE",
                "answer": []
            },
            {
                "linkId": "SVADTTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "SVADTTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "SVADTTXONGOING",
                "answer": []
            },
            {
                "linkId": "SVFOCTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "SVFOCTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "SVFOCTXONGOING",
                "answer": []
            },
            {
                "linkId": "SVOTHERTXSTARTDATE",
                "answer": []
            },
            {
                "linkId": "SVOTHERTXSTOPDATE",
                "answer": []
            },
            {
                "linkId": "SVOTHERTXONGOING",
                "answer": []
            }
        ]
    }
}

