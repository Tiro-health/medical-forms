export interface Resource {
  resourceType: string;
  id: string;
  [key: string]: any;
}

export interface Reference extends Resource{
    resourceType: "Reference";
    reference: string
}

export interface HumanName{
    use?: string;
    text?: string;
}

export interface Identifier{
    value: string;
    type: "ead" | "rijksregister"
}

export interface Patient extends Resource{
    resourceType: "Patient"
    name: HumanName[]
}

export interface Observation extends Resource{
    resourceType: "Observation",
    code: any,
    subject: Reference,
    encounter?: Reference
}
export interface Period {
    start?: string,
    end?: string
}
export interface Encounter extends Resource{
    resourceType: "Encounter",
    subject?: Reference
    status: "planned" | "arrived" | "in-progress" | "finished"
    period?: Period

}

