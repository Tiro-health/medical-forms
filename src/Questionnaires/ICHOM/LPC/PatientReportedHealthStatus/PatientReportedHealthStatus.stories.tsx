import React from "react"
import { Meta, Story } from "@storybook/react"
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest"
import { IQuestionnaireProps } from "../../../QuestionnaireResponse"
import { PatientReportedHealthStatus, IPatientReportedHealthStatusQuestionnaireResponse } from "./PatientReportedHealthStatus"
import { create, object } from "superstruct"
import { modelRecord } from "./consts"
import { convertRecordToQRItems } from "../../../../FHIR/validate"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/PatientReportedHealthStatus",
    argTypes: { onSubmit: { action: "submitted" } },
    component: PatientReportedHealthStatus,
} as Meta<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>>
const Q = PatientReportedHealthStatus
const submit = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
}
export const Empty: Story<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>> = (args) => <Q {...args} />
Empty.play = submit
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
WithSubjectAndAuthor.play = submit
export const FilledOut: Story<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1",
        item: convertRecordToQRItems(create({
            "EPIC26_Q01": 1,
            "EPIC26_Q02": 1,
            "EPIC26_Q03": 1,
            "EPIC26_Q04a": 1,
            "EPIC26_Q04b": 1,
            "EPIC26_Q04c": 1,
            "EPIC26_Q04d": 1,
            "EPIC26_Q04e": 1,
            "EPIC26_Q05": 1,
            "EPIC26_Q06a": 1,
            "EPIC26_Q06b": 1,
            "EPIC26_Q06c": 1,
            "EPIC26_Q06d": 1,
            "EPIC26_Q06e": 1,
            "EPIC26_Q07": 1,
            "EPIC26_Q08a": 1,
            "EPIC26_Q08b": 1,
            "EPIC26_Q09": 1,
            "EPIC26_Q10": 1,
            "EPIC26_Q11": 1,
            "EPIC26_Q12": 1,
            "EPIC26_Q13a": 1,
            "EPIC26_Q13b": 1,
            "EPIC26_Q13c": 1,
            "EPIC26_Q13d": 1,
            "EPIC26_Q13e": 1,
            //These are excluded from the modelRecord since UZ Leuven doesn't use them.
            //"LIBID_Q01": 1,
            //"LIBID_Q02": 1,
            //"LIBID_Q03a": 1,
            //"LIBID_Q03b": 1,
            //"LIBID_Q03c": 1,
            //"LIBID_Q03d": 1,
            //"LIBID_Q03e": 1,
        }, object(modelRecord)))
    }
}
FilledOut.play = submit