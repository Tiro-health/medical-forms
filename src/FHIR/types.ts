import React, { Dispatch, SetStateAction } from "react";
import { R4 } from "@ahryman40k/ts-fhir-types"

export interface IQuantity {
    value: number | undefined;
    unit?: string;
}

export type IAnswerValueQuantity = { valueQuantity: IQuantity }
export type IAnswerValueDate = { valueDate: string | undefined }
export type IAnswerValueCoding = { valueCoding: ICoding | undefined }
export type IAnswerValueInteger = { valueInteger: number| undefined }
export type IAnswerValueDecimal = { valueDecimal: number| undefined }
export type IAnswerValueString = { valueString: string | undefined }
export type IAnswerValueBoolean = {valueBoolean: boolean | undefined}

export type IAnswerValue = IAnswerValueCoding | IAnswerValueQuantity | IAnswerValueDate | IAnswerValueInteger | IAnswerValueDecimal | IAnswerValueString | IAnswerValueBoolean
export type IAnswer = IAnswerValue[]

export interface IQuestionnaire extends R4.IQuestionnaire{

}

export interface IQuestionnaireResponseItem extends R4.IQuestionnaireResponse_Item {
    linkId: string
    definition?: string
    text?: string
    answer: IAnswerValue[]
}

export interface IQuestionnaireResponse extends R4.IQuestionnaireResponse {
    resourceType: "QuestionnaireResponse"
    questionnaire: string
    item: IQuestionnaireResponseItem[]
}

export interface IAbstractRatio<T> {
    numerator: T;
    denominator: T;
  }
  export type IRatio = IAbstractRatio<IQuantity>;
  
  const RatioContext = React.createContext<[IRatio, Dispatch<SetStateAction<IRatio>>] | null>(null)

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

export interface IReference extends R4.IReference{
  identifier: {value: string}
}
