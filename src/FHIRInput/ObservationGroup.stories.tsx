import React from 'react';
import { Meta, Story } from "@storybook/react";
import { IObservationGroupProps, ObservationGroup } from "./ObservationGroup";

type StoryArgs = IObservationGroupProps;
export default {
  title: "Components/FHIRInput/ObservationGroup",
  component: ObservationGroup,
  argTypes: { onResourceChange: { action: "onResourceChange" } },
} as Meta<StoryArgs>;

export const cTNM:Story<StoryArgs> = (args) => (
  <ObservationGroup {...args}>
    <ObservationGroup.Select
      options={[
        "cT1a",
        "cT1b",
        "cT1c",
        "cT2a",
        "cT2b",
        "cT2c",
        "cT3a",
        "cT3b",
        "cT4",
        "NA",
      ]}
    />
    <ObservationGroup.Select options={["cN0", "cN1", "cNx", "NA"]} />
    <ObservationGroup.Select options={["M0", "M1a", "M1b", "M1c"]} />
  </ObservationGroup>
);
