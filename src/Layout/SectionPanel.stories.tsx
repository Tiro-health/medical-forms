import { Meta, Story } from "@storybook/react";
import React from "react";
import { SectionPanel, ISectionPanel } from "./SectionPanel";

export default {
  title: "Components/Layout/SectionPanel",
} as Meta<ISectionPanel>;

const Template: Story<ISectionPanel> = (args) => (
  <SectionPanel {...args}>
    <div className="bg-red-300 min-w-md h-10 flex items-center justify-center">
        <span className="text-2xl">children</span>
    </div>
  </SectionPanel>
);

export const Default = Template.bind({});
Default.args = {
  description: (
    <>
      <h3>Title</h3>
      <p>Some extra description.</p>
    </>
  ),
};
