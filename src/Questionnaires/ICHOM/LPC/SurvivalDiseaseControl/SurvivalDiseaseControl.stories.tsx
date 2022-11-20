import React from "react"
import { Meta, Story } from "@storybook/react"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { IQuestionnaireProps } from "../../../QuestionnaireResponse"
import { SurvivalDiseaseControl, ISurvivalDiseaseControlQuestionnaireReponse } from ".."
import { create, object } from "superstruct"
import { modelRecord } from "./consts"

export default {
    title: "components/Questionnaires/ICHOMLocalisedProstateCancer/SurvivalDiseaseControl",
    argTypes: { onSubmit: { action: "submitted" } },
    component: SurvivalDiseaseControl,
} as Meta<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>>
const Q = SurvivalDiseaseControl
export const Default: Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args) => <Q {...args} />
export const WithSubjectAndAuthor: Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args) => <Q {...args} />
WithSubjectAndAuthor.args = { author: "clinicianId123", subject: "patientId1234" }
WithSubjectAndAuthor.storyName = "Specify author and subject using string identifiers."
export const FilledOut: Story<IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>> = (args) => <Q {...args} />
FilledOut.args = {
    initQuestionnaireResponse: {
        resourceType: "QuestionnaireResponse",
        questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1",
        item: convertRecordToQRItems(create({
            "DEATH": true,
            "DEATHDATE": "2020-01-01",
            "DEATHLPC": "",
            "METADEV": true,
            "METADATE": "",
            "BIOCHEM": true,
            "BIOCHEMDATE": "",
            "BIOCHEMPSA": 2,
        }, object(modelRecord)))
    }
}
