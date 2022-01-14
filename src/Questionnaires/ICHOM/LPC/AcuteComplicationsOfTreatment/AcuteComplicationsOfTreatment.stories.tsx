import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps} from "../../../QuestionnaireResponse"
import { AcuteComplicationsOfTreatment, IAcuteComplicationsOfTreatmentQuestionnaireResponse } from "./AcuteComplicationsOfTreatment"

export default {
    title:"components/Questionnaires/ICHOMLocalisedProstateCancer/AcuteComplicationsOfTreatment",
    argTypes:{onSubmit: {action: "submitted"}},
    component: AcuteComplicationsOfTreatment,
} as Meta<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>>
const Q = AcuteComplicationsOfTreatment
export const Default:Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args)=><Q {...args} />
export const WithSubjectAndAuthor:Story<IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>> = (args)=><Q {...args} />
WithSubjectAndAuthor.args ={author: "clinicianId123", subject:"patientId1234"}
WithSubjectAndAuthor.storyName="Specify author and subject using string identifiers."
