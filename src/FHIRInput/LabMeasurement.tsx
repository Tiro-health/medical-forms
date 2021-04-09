import React, { useEffect, useState } from "react";
import { object, array, string, optional, union, Infer } from "superstruct";
import { Input } from "Base/Input";
import { Observation } from "./models";
import { useFHIRResource } from "./ResourceCollector";
import moment from "moment";
import UUID from "uuidjs";
import "moment/locale/nl-be";
import { useSubject } from "./SubjectContext";
import { useEncounter } from "./EncounterContext";

const CodingStruct = object({
  code: string(),
  displayText: string(),
});
const CodeableConceptStruct = object({
  text: string(),
  code: optional(union([array(CodingStruct), CodingStruct])),
});
type CodeableConcept = Infer<typeof CodeableConceptStruct>;

export interface ILabMeasurementProps {
  code: CodeableConcept;
  unit: string;
  className: string;
}

export const LabMeasurement = ({
  code,
  unit,
  className,
}: ILabMeasurementProps) => {
  const [uri, resource, update] = useFHIRResource();
  const subject = useSubject();
  const encounter = useEncounter();
  const [value, setValue] = useState<string>("");
  const [dateVisible, setDateVisible] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    try {
      const resource: Observation = {
        resourceType: "Observation",
        id: uri,
        effectiveDateTime: moment(date).format("DD-MM-YYYY").toString(),
        code,
        encounter: encounter ? { reference: encounter.id, resourceType: "Reference", id: UUID.genV4().urn} : undefined,
        subject: {
          reference: subject.id,
          resourceType: "Reference",
          id: UUID.genV4().urn,
        },
        valueQuantity: { value: parseFloat(value), unit },
      };
      update(resource);
    } catch (e) {
      console.log("invalid", e);
    }
  }, [date, encounter, subject, uri, value, update, code, unit]);

  return (
    <div className={className}>
      <div className="flex flex-row items-end flex-1">
        <Input
          type="number"
          label={code.text}
          min={0}
          suffix={unit}
          value={value}
          className="w-full"
          onChange={(event) =>
            setValue((event.target as HTMLInputElement).value)
          }
        />
        {!!dateVisible && (
          <Input
            type="date"
            className="ml-2 w-full"
            value={date}
            onChange={(event) =>
              setDate((event.target as HTMLInputElement).value)
            }
          />
        )}
      </div>
      {!dateVisible && (
        <button
          className="mt-2 text-blue-900 underline underline-style-solid"
          type="button"
          onClick={() => setDateVisible(true)}
        >
          Voeg datum toe
        </button>
      )}
    </div>
  );
};
