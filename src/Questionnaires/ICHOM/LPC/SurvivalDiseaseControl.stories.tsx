import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps} from "../../QuestionnaireResponse"
import {SurvivalDiseaseControl, ISurvivalDiseaseControlQuestionnaireReponse} from "."

export default {
    title:"components/Questionnaires/ICHOMLocalisedProstateCancer/SurvivalDiseaseControl",
    argTypes:{onSubmit: {action: "submitted"}},
    component: SurvivalDiseaseControl,
} as Meta<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>>
const Q = SurvivalDiseaseControl 
export const Default:Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args)=><Q {...args} />
export const WithSubjectAndAuthor:Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args)=><Q {...args} />
WithSubjectAndAuthor.args ={author: "clinicianId123", subject:"patientId1234"}
WithSubjectAndAuthor.storyName="Specify author and subject using string identifiers."
