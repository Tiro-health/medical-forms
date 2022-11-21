import React from "react"
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "../../../QuestionnaireResponse"
import { BaselineTumorFactors, IBaselineTumorFactorsQuestionnaireResponse } from ".."
import { convertRecordToQRItems } from "../../../../FHIR/validate"
import { CNOPTIONS, CTOPTIONS, modelRecord } from "./consts"
import { create, object } from "superstruct";

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/BaselineFactors",
    argTypes: { onSubmit: { action: "submitted" } },
    component: BaselineTumorFactors,
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>
const Q = BaselineTumorFactors
const submitInvalid = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    const psaDateInput = canvas.getByLabelText("Histological diagnosis date")
    await waitFor(() => expect(psaDateInput).toBeInvalid())
}
const submitValid = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
}
export const Empty: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
Empty.play = submitInvalid
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
WithSubjectAndAuthor.play = submitInvalid
export const FilledOut: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
        item: convertRecordToQRItems(create({
            "DIAGDATE": "2021-02-10",
            "PSA": 291,
            "TNMCT": CNOPTIONS[1],
            "TNMCN": CTOPTIONS[2],
            "BIOPCORE": 3,
            "BIOPPOS": 4,
            "BIOPINVOL": 30,
            "GLEASONBIOP1": 1,
            "GLEASONBIOP2": 4,
        }, object(modelRecord)))
    }
}
FilledOut.play = submitValid
