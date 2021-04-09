import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextArea, ITextAreaProps } from "./TextArea";

type StoryArgs = ITextAreaProps;
export default {
  title: "Base/TextArea",
  component: TextArea,
  argTypes: { rows: {type: 'number'}}
} as Meta<StoryArgs>;

const Template: Story<StoryArgs> = (args) => (
  <div className="max-w-md">
    <TextArea {...args} />
  </div>
);
export const Default = Template.bind({});