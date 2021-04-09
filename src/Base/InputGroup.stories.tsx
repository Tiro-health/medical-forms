import React from "react";
import { Meta, Story } from "@storybook/react";
import { InputGroup, IInputGroupProps } from "./InputGroup";

export default {
  title: "Base/InputGroup",
} as Meta;

const Template: Story<IInputGroupProps> = (args) => <InputGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <select
        id="currency"
        name="currency"
      >
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
      <select
        id="currency"
        name="currency"
      >
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </>
  ),
};
