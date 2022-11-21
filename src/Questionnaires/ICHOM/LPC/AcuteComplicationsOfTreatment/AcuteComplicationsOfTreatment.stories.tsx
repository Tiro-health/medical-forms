import React from "react"
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps } from "../../../QuestionnaireResponse"
import { AcuteComplicationsOfTreatment, IAcuteComplicationsOfTreatmentQuestionnaireResponse } from "./AcuteComplicationsOfTreatment"
import { convertRecordToQRItems } from "../../../../FHIR/validate"
import { IBaselineTumorFactorsQuestionnaireResponse } from "../BaselineTumorFactors";

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/AcuteComplicationsOfTreatment",
    argTypes: { onSubmit: { action: "submitted" } },
    component: AcuteComplicationsOfTreatment,
} as Meta<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>>
const Q = AcuteComplicationsOfTreatment
const submit = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
}
export const Empty: Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args) => <Q {...args} />
Empty.play = submit
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
WithSubjectAndAuthor.play = submit
export const FilledOut: Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1",
        item: convertRecordToQRItems({
            "COMPLSURG": "2",
            "COMPLRAD": "1",
            "COMPLRADDOMGRA": ["12", "13", "20"],
            "COMPLRADDOMOTHER": "Some text",
        }) as IAcuteComplicationsOfTreatmentQuestionnaireResponse["item"]
    }
}
FilledOut.play = submit


