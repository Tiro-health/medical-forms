import React from "react";
import { Meta, Story } from "@storybook/react";
import { FieldSet, IFieldSetRefProps } from "./FieldSet";
import { Radio, IRadioProps} from "./Radio";

export default {
  title: "Base/Radio",
  component: Radio
} as Meta<IRadioProps>;

const RadioTemplate: Story<IRadioProps> = (args) => (
  <Radio {...args} />
);
export const Single = RadioTemplate.bind({});
Single.args = {
  label: "Label",
  name: "name",
  size: "small",
};

const RadioGroupTemplate: Story<IFieldSetRefProps> = (args) => (
  <FieldSet {...args}>
    <Radio
      name="options"
      label="Option A"
    />
    <Radio
      name="options"
      label="Option B"
    />
    <Radio
      name="options"
      label="Option C"
    />
  </FieldSet>
);
export const Group = RadioGroupTemplate.bind({});
Group.args = { label: "Radio Group Title", description: "Description of the purpose of these option."};
