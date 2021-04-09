/// <reference types="react" />
declare namespace Forms {
    import React from "react";
    interface Resource {
        resourceType: string;
        id: string;
        [key: string]: any;
    }
    interface Reference extends Resource {
        resourceType: "Reference";
        reference: string;
    }
    interface HumanName {
        use?: string;
        text?: string;
    }
    interface Identifier {
        value: string;
        type: "ead" | "rijksregister";
    }
    interface Patient extends Resource {
        resourceType: "Patient";
        name: HumanName[];
    }
    interface Observation extends Resource {
        resourceType: "Observation";
        code: any;
        subject: Reference;
        encounter?: Reference;
    }
    interface Period {
        start?: string;
        end?: string;
    }
    interface Encounter extends Resource {
        resourceType: "Encounter";
        subject?: Reference;
        status: "planned" | "arrived" | "in-progress" | "finished";
        period?: Period;
    }
    interface IFormProps {
        onSubmitData?: (data: any) => void;
        subject: Patient;
        encounter: Encounter;
    }
    const DiagnosisForm: React.FunctionComponent<IFormProps>;
    const TreatmentForm: React.FunctionComponent<IFormProps>;
}
export { Forms };
