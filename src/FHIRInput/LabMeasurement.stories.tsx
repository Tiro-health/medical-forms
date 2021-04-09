import React from "react";
import { Meta, Story } from "@storybook/react";
import { ILabMeasurementProps, LabMeasurement } from "./LabMeasurement";
import {
  ResourceMapContext,
  useFHIRResourceCollector,
} from "./ResourceCollector";
import { StoryFHIRContext } from "./.stories/utils";
type ValidationStatus = "valid" | "invalid" | "required";

type StoryArgs = ILabMeasurementProps;
export default {
  title: "Components/FHIRInput/LabMeasurements",
  component: LabMeasurement,
  argTypes: { onResourceChange: { action: "onResourceChange" } },
} as Meta<StoryArgs>;

const Template: Story<StoryArgs> = (args) => {
  return (
    <StoryFHIRContext>
      <LabMeasurement {...args} />
    </StoryFHIRContext>
  );
};

export const PSA = Template.bind({});
PSA.args = { code: { text: "PSA" }, unit: "ng/ml" };
