import React from 'react';
import { Meta, Story } from "@storybook/react";
import { Input, IInputProps } from "./Input";

type StoryArgs = IInputProps & {ref: React.ForwardedRef<HTMLInputElement>};
export default {
  title: "Base/Input",
  component: Input,
} as Meta<StoryArgs>;

const Template: Story<StoryArgs> = (args) => (
  <div className="max-w-md">
    <Input {...args} />
  </div>
);
export const Default = Template.bind({});
export const PSA = Template.bind({});
PSA.args = {
  label:"PSA:",
  suffix:"ng/ml",
  type: "number",
  min: 0,
}

