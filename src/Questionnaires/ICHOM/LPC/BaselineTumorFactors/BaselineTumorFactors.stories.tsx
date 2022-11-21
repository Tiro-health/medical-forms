import React from "react"
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "../../../QuestionnaireResponse"
import { BaselineTumorFactors, IBaselineTumorFactorsQuestionnaireResponse } from ".."
import { convertRecordToQRItems } from "../../../../FHIR/validate"
import { CNOPTIONS, CTOPTIONS } from "./consts"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/BaselineFactors",
    argTypes: { onSubmit: { action: "submitted" } },
    component: BaselineTumorFactors,
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>
const Q = BaselineTumorFactors
const submit = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
}
export const Empty: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
Empty.play = submit
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
WithSubjectAndAuthor.play = submit
export const FilledOut: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
        item: convertRecordToQRItems({
            "DIAGDATE": "2021-02-10",
            "PSA": 291,
            "TNMCT": CNOPTIONS[1],
            "TNMCN": CTOPTIONS[2],
            "BIOPCORE": 3,
            "BIOPPOS": 4,
            "BIOPINVOL": 30,
            "GLEASONBIOP1": 1,
            "GLEASONBIOP2": 4,
        })
    }
}
FilledOut.play = submit
