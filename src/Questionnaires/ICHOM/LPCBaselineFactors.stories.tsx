import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "../QuestionnaireResponse"
import { BaselineTumorFactors, IBaselineTumorFactorsQR } from "./LPC"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/BaselineFactors",
    argTypes: { onSubmit: { action: "submitted" } },
    component: BaselineTumorFactors,
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>
const Q = BaselineTumorFactors
export const Default: Story<IQuestionnaireProps<IBaselineTumorFactorsQR>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor:Story<IQuestionnaireProps<IBaselineTumorFactorsQR>> = (args)=><Q {...args} />
WithSubjectAndAuthor.args ={author: "clinicianId123", subject:"patientId1234"}
WithSubjectAndAuthor.storyName="Specify author and subject using string identifiers."
