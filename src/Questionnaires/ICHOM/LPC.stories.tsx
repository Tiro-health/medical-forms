import React from "react"
import { Meta, Story } from "@storybook/react"
import { IQuestionnaireProps, TiroQuestionnaireResponse} from "../QuestionnaireResponse"
import * as LPC from "./LPC"

export default {
    title:"components/Questionnaires/ICHOMLocalisedProstateCancer",
    argTypes:{onSubmit: {action: "submitted"}}
} as Meta<IQuestionnaireProps<TiroQuestionnaireResponse>>

export const BaselineTumorFactors:Story<IQuestionnaireProps<LPC.IBaselineTumorFactorsQR>> = (args)=>{
    return <LPC.BaselineTumorFactors {...args} />
}
export const PathologyInformation = ()=>{
    return <LPC.PathologyInformation/>
}
export const ThreatmentVaraibles = ()=>{
    return <LPC.TreatmentVariables/>
}