import { R4 } from "@ahryman40k/ts-fhir-types";
interface IQuantity {
    value: number | undefined;
    unit?: string;
}
type IAnswerValueQuantity = {
    valueQuantity: IQuantity;
};
type IAnswerValueDate = {
    valueDate: string | undefined;
};
type IAnswerValueCoding = {
    valueCoding: ICoding | undefined;
};
type IAnswerValueInteger = {
    valueInteger: number | undefined;
};
type IAnswerValueDecimal = {
    valueDecimal: number | undefined;
};
type IAnswerValueString = {
    valueString: string | undefined;
};
type IAnswerValue = IAnswerValueCoding | IAnswerValueQuantity | IAnswerValueDate | IAnswerValueInteger | IAnswerValueDecimal | IAnswerValueString;
type IAnswer = IAnswerValue[];
interface IQuestionnaire extends R4.IQuestionnaire {
}
interface IQuestionnaireResponseItem extends R4.IQuestionnaireResponse_Item {
    linkId: string;
    definition?: string;
    text?: string;
    answer: IAnswerValue[];
}
interface IQuestionnaireResponse extends R4.IQuestionnaireResponse {
    resourceType: "QuestionnaireResponse";
    questionnaire: string;
    item: IQuestionnaireResponseItem[];
}
interface IAbstractRatio<T> {
    numerator: T;
    denominator: T;
}
type IRatio = IAbstractRatio<IQuantity>;
interface IConcept {
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
interface ICoding extends Omit<IConcept, "designation"> {
    display: string;
}
interface IReference extends R4.IReference {
}
export { IQuantity, IAnswerValueQuantity, IAnswerValueDate, IAnswerValueCoding, IAnswerValueInteger, IAnswerValueDecimal, IAnswerValueString, IAnswerValue, IAnswer, IQuestionnaire, IQuestionnaireResponseItem, IQuestionnaireResponse, IAbstractRatio, IRatio, IConcept, ICoding, IReference };
