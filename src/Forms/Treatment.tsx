import React from "react";
import { FormSection } from "Base/FormSection";
import { Select } from "Base/Select";
import { SectionPanel } from "Layout/SectionPanel";
import { IFormProps } from "./types";

export const TreatmentForm: React.FunctionComponent<IFormProps> = ({
  subject,
  encounter,
  onSubmitData,
}) => {
  const description = (
    <>
      <h3>Behandelingskarakteristieken</h3>
      <p>Omschrijving van doel van dit formulier.</p>
    </>
  );

  return (
    <SectionPanel description={description}>
      <FormSection onSubmit={onSubmitData}>
        <Select
          label="zenuwsparend"
          options={[
            "rechts zenuwsparend",
            "links zenuwsparend",
            "bilateraal zenuwsparend",
            "niet zenuwsparend",
          ]}
        ></Select>
      </FormSection>
    </SectionPanel>
  );
};
