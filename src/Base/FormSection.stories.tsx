import { Meta, Story} from "@storybook/react";
import React from "react";
import { FileInput } from "./FileInput";
import { Input } from "./Input";
import { FormSection, IFormSectionProps } from "./FormSection";
import { TextArea } from "./TextArea";

export default {
  title: "Base/FormSection",
} as Meta;

const Template:Story<IFormSectionProps> = (args) => (
  <FormSection {...args}>
    <div className="grid grid-cols-3 gap-6">
      <Input
        type="text"
        name="company_website"
        id="company_website"
        label="Website"
        placeholder="www.example.com"
        className="col-span-3 sm:col-span-2"
      />
      <TextArea
        className="col-span-3"
        label="About"
        name="about"
        placeholder="you@example.com"
        description="Brief description for your profile. URLs are hyperlinked."
      />

      <FileInput />
   </div>
  </FormSection>
);

export const Default = Template.bind({});
