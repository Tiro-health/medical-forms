import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  CheckBox,
  ICheckBoxProps,
} from "./CheckBox";
import { FieldSet, IFieldSetRefProps } from "./FieldSet";

export default {
  title: "Base/CheckBox",
} as Meta<ICheckBoxProps>;

const CheckBoxTemplate: Story<ICheckBoxProps> = (args) => (
  <CheckBox {...args} />
);
export const Single = CheckBoxTemplate.bind({});
Single.args = {
  label: "Label",
  name: "name",
  description: "Description text.",
  size: "small",
};

const CheckBoxGroupTemplate: Story<IFieldSetRefProps> = (args) => (
  <FieldSet {...args} >
    <CheckBox
      name="comments"
      label="Comments"
      description="Get notified when someones posts a comment on a posting."
    />
    <CheckBox
      name="candidates"
      label="Candidates"
      description="Get notified when a candidate applies for a job."
    />
    <CheckBox
      name="offers"
      label="Offers"
      description="Get notified when a candidate accepts or rejects an offer."
    />
  </FieldSet>
);
export const Group = CheckBoxGroupTemplate.bind({});
Group.args = { label: "CheckBox Group Title" , description: "Description of the purpose of these options."};
