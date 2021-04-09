import React from 'react';
import { Meta, Story } from "@storybook/react";
import { DiagnosisForm} from "./Diagnosis";
import UUID from "uuidjs"
import { Encounter, Patient } from "FHIRInput/models";
import { IFormProps } from "./types";
type StoryArgs = IFormProps
export default {
    title: "Components/DeTroyer/Diagnosis",
    component: DiagnosisForm,
    argTypes: {onSubmitData: {action: "onSubmitData"} }
} as Meta<StoryArgs>;

export const Default:Story<StoryArgs> = (args)=><DiagnosisForm {...args}/>
const subject: Patient = {resourceType: "Patient", id: UUID.genV4().urn, name:[{text: "Luc Wallays"}]}
const encounter: Encounter = {resourceType: "Encounter", id: UUID.genV4().urn, status: "finished", subject: {reference: subject.id, resourceType: "Reference", id: UUID.genV4().urn}}
Default.args = {subject, encounter}