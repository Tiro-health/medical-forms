import React from "react"
import { Meta, Story } from "@storybook/react"
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest"
import { convertRecordToQRItems } from "../../../../FHIR/validate";
import { IQuestionnaireProps } from "../../../QuestionnaireResponse"
import { SurvivalDiseaseControl, ISurvivalDiseaseControlQuestionnaireReponse } from ".."
import { create, object } from "superstruct"
import { modelRecord } from "./consts"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/SurvivalDiseaseControl",
    argTypes: { onSubmit: { action: "submitted" } },
    component: SurvivalDiseaseControl,
} as Meta<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>>
const Q = SurvivalDiseaseControl
const submit = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
}
export const Empty: Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args) => <Q {...args} />
Empty.play = submit
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
WithSubjectAndAuthor.play = submit
export const FilledOut: Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1",
        item: convertRecordToQRItems(create({
            "DEATH": true,
            "DEATHDATE": "2020-01-01",
            "DEATHLPC": 2,
            "METADEV": true,
            "METADATE": "2012-01-01",
            "BIOCHEM": true,
            "BIOCHEMDATE": "1993-02-02",
            "BIOCHEMPSA": 2,
        }, object(modelRecord)))
    }
}
FilledOut.play = submit
