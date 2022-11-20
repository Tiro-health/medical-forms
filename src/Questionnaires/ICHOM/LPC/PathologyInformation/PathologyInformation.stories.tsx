import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps } from "Questionnaires/QuestionnaireResponse"
import { PathologyInformation, IPathologyInformationQuestionnaireResponse } from "./PathologyInformation"
import { create, object } from "superstruct"
import { modelRecord, PN_OPTIONS, PT_OPTIONS } from "./consts"
import { convertRecordToQRItems } from "FHIR/validate"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/PathologyInformation",
    component: PathologyInformation,
    argTypes: { onSubmit: { action: "submitted" } }
} as Meta<IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>>


const Q = PathologyInformation
export const Default: Story<IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
export const FilledOut: Story<IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
        item: convertRecordToQRItems(create({
            "TNMPT": PT_OPTIONS[1],
            "TNMPN": PN_OPTIONS[2],
            "MARGIN": 1,
            "MARGINFOC": 2,
            "GLEASONPATH1": 2,
            "GLEASONPATH2": 2,
        }, object(modelRecord)))
    }
}

