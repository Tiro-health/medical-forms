import { Encounter, Patient } from "FHIRInput/models";

export interface IFormProps {
    onSubmitData?: (data: any) => void;
    subject: Patient;
    encounter: Encounter;
  }
  