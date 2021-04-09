import { Meta } from "@storybook/react";
import React from "react";
import { FileInput } from "./FileInput";

export default {
    title: "Base/FileInput"
} as Meta

const Template = (args:any)=><FileInput/>

export const Default = Template.bind({})