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

