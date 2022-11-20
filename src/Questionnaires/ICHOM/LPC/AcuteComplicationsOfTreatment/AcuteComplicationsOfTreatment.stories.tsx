import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps } from "../../../QuestionnaireResponse"
import { AcuteComplicationsOfTreatment, IAcuteComplicationsOfTreatmentQuestionnaireResponse } from "./AcuteComplicationsOfTreatment"
import { convertRecordToQRItems } from "FHIR/validate"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/AcuteComplicationsOfTreatment",
    argTypes: { onSubmit: { action: "submitted" } },
    component: AcuteComplicationsOfTreatment,
} as Meta<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>>
const Q = AcuteComplicationsOfTreatment
export const Empty: Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
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
        })
    }
}

