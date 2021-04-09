import React from 'react';
import { Meta, Story } from "@storybook/react";
import { Encounter, Patient } from "FHIRInput/models";
import { TreatmentForm } from "./Treatment";
import { IFormProps } from "./types";
import UUID from "uuidjs"
type StoryArgs = IFormProps
export default {
    title:"Components/DeTroyer/Treatment",
    component: TreatmentForm,
    argTypes: {onSubmitData: {action: "onSubmitData"} }
} as Meta<StoryArgs>

export const Default: Story<StoryArgs> = (args)=><TreatmentForm {...args}/>
const subject: Patient = {resourceType: "Patient", id: UUID.genV4().urn, name:[{text: "Luc Wallays"}]}
const encounter: Encounter = {resourceType: "Encounter", id: UUID.genV4().urn, status: "finished", subject: {reference: subject.id, resourceType: "Reference", id: UUID.genV4().urn}}
Default.args = {subject, encounter}