import React from 'react';
import { IButtonProps, Button } from "./Button";
import { Meta, Story } from "@storybook/react";

export default {
    title: "Base/Button",
    component: Button
} as Meta<IButtonProps>

const Template:Story<IButtonProps> = (args) => (<div className="max-w-md"><Button {...args}/></div>)

export const Default = Template.bind({});