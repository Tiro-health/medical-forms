import React, { useCallback, useEffect, useState } from "react";
import { SectionPanel } from "Layout/SectionPanel";
import { Input } from "Base/Input";
import { Select } from "Base/Select";
import { FormSection } from "Base/FormSection";
import { LabMeasurement } from "FHIRInput/LabMeasurement";
import {
  ResourceMapContext,
  useFHIRResourceCollector,
} from "FHIRInput/ResourceCollector";
import { EncounterContext } from "FHIRInput/EncounterContext";
import { SubjectContext } from "FHIRInput/SubjectContext";
import { ObservationGroup } from "FHIRInput/ObservationGroup";
import { IFormProps } from "./types";

const PSA = { text: "PSA" };
export const DiagnosisForm: React.FunctionComponent<IFormProps> = ({
  onSubmitData: handleSubmit,
  subject,
  encounter,
}) => {
  const [bundle, dispatch] = useFHIRResourceCollector();
  useEffect(() => {
    dispatch({ operation: "create", uri: encounter.id, resource: encounter });
  }, [encounter, dispatch]);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit && handleSubmit(Array.from(bundle.values()));
    },
    [handleSubmit, bundle]
  );

  const [date, setDate] = useState<string>("null");
  useEffect(() => {}, [date]);

  const description = (
    <>
      <h3>Tumor diagnose</h3>
      <p>Omschrijving van doel van dit formulier.</p>
    </>
  );
  return (
    <SectionPanel description={description}>
      <FormSection onSubmit={onSubmit}>
        <SubjectContext.Provider value={subject}>
          <EncounterContext.Provider value={encounter}>
            <ResourceMapContext.Provider value={[bundle, dispatch]}>
              <Input
                label="Datum van diagnosestelling"
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                type="date"
                value={date}
                onChange={(event) =>
                  setDate((event.target as HTMLInputElement).value)
                }
              />
              <div className="grid grid-cols-6 gap-10">
                <LabMeasurement
                  className="col-span-6 sm:col-span-4"
                  code={PSA}
                  unit="ng/ml"
                />
                <ObservationGroup
                  className="col-span-6 sm:col-span-2"
                  label="TNM classificatie"
                  description="AJCC cancer staging"
                >
                  <ObservationGroup.Select
                    defaultEmpty
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
                      "N/A",
                    ]}
                  />
                  <ObservationGroup.Select
                    defaultEmpty
                    options={["cN0", "cN1", "cNx", "N/A"]}
                  />
                  <ObservationGroup.Select
                    defaultEmpty
                    options={["M0", "M1a", "M1b", "M1c"]}
                  />
                </ObservationGroup>
                <Select
                  className="col-span-6"
                  label="EAU Risk"
                  options={["low", "intermediate", "high"]}
                />
                <Input
                  className="col-span-2 "
                  label="Aantal biopsies"
                  type="number"
                  step={1}
                  min={0}
                />
                <Input
                  className="col-span-2"
                  label="Aantal positieve biopsies"
                  type="number"
                  step={1}
                  min={0}
                />
              </div>
            </ResourceMapContext.Provider>
          </EncounterContext.Provider>
        </SubjectContext.Provider>
      </FormSection>
    </SectionPanel>
  );
};
