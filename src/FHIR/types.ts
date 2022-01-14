import React, { Dispatch, SetStateAction } from "react";
import { R4 } from "@ahryman40k/ts-fhir-types"
import { boolean, Describe, Infer, integer, number, object, optional, string, union, array, literal, Struct, tuple, is, date } from "superstruct";
import { IQuestionnaireResponse_Item } from "@ahryman40k/ts-fhir-types/lib/R4";

export const QuantityModel = object({ value: optional(number()), unit: optional(string()) })
//export interface IQuantity {
//value: number | undefined;
//unit?: string;
//}
export type IQuantity = Infer<typeof QuantityModel>

export const CodingModel = object({ system: string(), code: string(), display: string() })

export const AnswerValueQuantityModel = object({ valueQuantity: QuantityModel })
export const AnswerValueDateModel = object({ valueDate: optional(string()) })
export const AnswerValueBooleanModel = object({ valueBoolean: optional(boolean()) })
export const AnswerValueCodingModel = object({ valueCoding: optional(CodingModel) })
export const AnswerValueIntegerModel = object({ valueInteger: optional(integer()) })
export const AnswerValueDecimalModel = object({ valueDecimal: optional(number()) })
export const AnswerValueStringModel = object({ valueString: optional(string()) })
export type IAnswerValueQuantity = Infer<typeof AnswerValueQuantityModel>//{ valueQuantity: IQuantity }
export type IAnswerValueDate = Infer<typeof AnswerValueDateModel>//{ valueDate: string | undefined }
export type IAnswerValueCoding = Infer<typeof AnswerValueCodingModel> //{ valueCoding: ICoding | undefined }
export type IAnswerValueInteger = Infer<typeof AnswerValueIntegerModel> // { valueInteger: number| undefined }
export type IAnswerValueDecimal = Infer<typeof AnswerValueDecimalModel> //{ valueDecimal: number| undefined }
export type IAnswerValueString = Infer<typeof AnswerValueStringModel>//{ valueString: string | undefined }
export type IAnswerValueBoolean = Infer<typeof AnswerValueBooleanModel> //{valueBoolean: boolean | undefined}

export type IAnswerValue = IAnswerValueCoding | IAnswerValueQuantity | IAnswerValueDate | IAnswerValueInteger | IAnswerValueDecimal | IAnswerValueString | IAnswerValueBoolean
export type IAnswer = IAnswerValue[]
export const createSingleValuedQuestionnaireResponseItemModel = <T extends IAnswerValue>(linkId: string, model: Describe<T>) => object({ linkId: literal(linkId), answer: tuple([model]) })

export interface IQuestionnaire extends R4.IQuestionnaire {

}

export interface IQuestionnaireResponseItem extends R4.IQuestionnaireResponse_Item {
  linkId: string
  definition?: string
  text?: string
  answer: IAnswerValue[]
}
export const QuestionnaireResponseItemModel: Describe<IQuestionnaireResponseItem> = object({
  linkId: string(),
  definition: optional(string()),
  text: optional(string()),
  answer: array(union([AnswerValueBooleanModel, AnswerValueCodingModel, AnswerValueDateModel, AnswerValueDecimalModel, AnswerValueIntegerModel, AnswerValueQuantityModel, AnswerValueStringModel])),
})

export interface IQuestionnaireResponse extends R4.IQuestionnaireResponse {
  resourceType: "QuestionnaireResponse"
  questionnaire: string
  item: IQuestionnaireResponseItem[]
}

export interface IConcept {
  system: string;
  code: string;
  display?: string;
  designation?: {
    use?: {
      system: string;
      code: string;
      display: string;
    };
    value: string;
    language?: string;
  };
}
export interface ICoding extends Omit<IConcept, "designation"> {
  display: string
}

export interface IReference extends R4.IReference {
  identifier: { value: string }
}

export const PatientReferenceModel = object({
  identifier: object({ value: string() }),
  type: literal("Patient")
})

export type IPatientReference = Infer<typeof PatientReferenceModel>

export const PractitionerReferenceModel = object({
  identifier: object({ value: string() }),
  type: literal("Practitioner")
})

export type IPractitionerReference = Infer<typeof PractitionerReferenceModel>

