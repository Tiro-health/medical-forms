import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps} from "../../QuestionnaireResponse"
import { PatientReportedHealthStatus, IPatientReportedHealthStatusQuestionnaireResponse } from "./PatientReportedHealthStatus"

export default {
    title:"components/Questionnaires/ICHOMLocalisedProstateCancer/PatientReportedHealthStatus",
    argTypes:{onSubmit: {action: "submitted"}},
    component: PatientReportedHealthStatus,
} as Meta<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>>
const Q = PatientReportedHealthStatus 
export const Default:Story<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>> = (args)=><Q {...args} />
export const WithSubjectAndAuthor:Story<IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>> = (args)=><Q {...args} />
WithSubjectAndAuthor.args ={author: "clinicianId123", subject:"patientId1234"}
WithSubjectAndAuthor.storyName="Specify author and subject using string identifiers."
