import React from "react";
import { EncounterContext } from "../EncounterContext";
import { Encounter, Patient } from "../models";
import {
  ResourceMapContext,
  useFHIRResourceCollector,
} from "../ResourceCollector";
import { SubjectContext } from "../SubjectContext";
import UUID from "uuidjs";
const SUBJECT: Patient = {
  resourceType: "Patient",
  id: UUID.genV4().urn,
  name: [{ text: "Luc Wallays" }],
};
const ENCOUNTER: Encounter = {
  resourceType: "Encounter",
  id: UUID.genV4().urn,
  status: "finished",
  subject: {
    reference: SUBJECT.id,
    resourceType: "Reference",
    id: UUID.genV4().urn,
  },
};

export const StoryFHIRContext = ({ children }) => {
  const [bundle, dispatch] = useFHIRResourceCollector();
  return (
    <SubjectContext.Provider value={SUBJECT}>
      <EncounterContext.Provider value={ENCOUNTER}>
        <ResourceMapContext.Provider value={[bundle, dispatch]}>
          {children}
        </ResourceMapContext.Provider>
      </EncounterContext.Provider>
    </SubjectContext.Provider>
  );
};
