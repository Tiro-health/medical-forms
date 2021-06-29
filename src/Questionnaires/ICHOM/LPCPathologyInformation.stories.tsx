import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse} from "../QuestionnaireResponse"
import {PathologyInformation} from "./LPC"

export default {
    title:"components/Questionnaires/ICHOMLocalisedProstateCancer/PathologyInformation",
    component: PathologyInformation,
    argTypes:{onSubmit: {action: "submitted"}}
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>


const Q = PathologyInformation 
export const Default: Story<IQuestionnaireProps<TiroQuestionnaireResponse>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor:Story<IQuestionnaireProps<TiroQuestionnaireResponse>> = (args)=><Q {...args} />
WithSubjectAndAuthor.args ={author: "clinicianId123", subject:"patientId1234"}
WithSubjectAndAuthor.storyName="Specify author and subject using string identifiers."
