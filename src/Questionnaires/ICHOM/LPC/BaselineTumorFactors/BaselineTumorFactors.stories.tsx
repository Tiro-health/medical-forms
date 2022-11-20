import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "../../../QuestionnaireResponse"
import { BaselineTumorFactors, IBaselineTumorFactorsQuestionnaireResponse } from ".."
import { convertRecordToQRItems } from "FHIR/validate"
import { CNOPTIONS, CTOPTIONS } from "./consts"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/BaselineFactors",
    argTypes: { onSubmit: { action: "submitted" } },
    component: BaselineTumorFactors,
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>
const Q = BaselineTumorFactors
export const Default: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
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
