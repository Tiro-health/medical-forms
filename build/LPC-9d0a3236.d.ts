/// <reference types="react" />
import React from "react";
import { FormEventHandler } from "react";
import { IQuestionnaireProps, ISingleValuedQRItem, TiroQuestionnaireResponse } from "./Questionnaire-467ff968";
import { IAnswerValueCoding, IAnswerValueDate, IAnswerValueQuantity } from "./types-2048d93c";
interface IBaselineTumorFactorsQR extends TiroQuestionnaireResponse {
    item: [
        ISingleValuedQRItem<IAnswerValueDate>,
        ISingleValuedQRItem<IAnswerValueQuantity>,
        ISingleValuedQRItem<IAnswerValueCoding>,
        ISingleValuedQRItem<IAnswerValueCoding>,
        ISingleValuedQRItem<IAnswerValueQuantity>,
        ISingleValuedQRItem<IAnswerValueQuantity>,
        ISingleValuedQRItem<IAnswerValueQuantity>,
        ISingleValuedQRItem<IAnswerValueCoding>,
        ISingleValuedQRItem<IAnswerValueCoding>
    ];
}
declare const initBaselineTumorFactors: () => IBaselineTumorFactorsQR;
declare const initPathologicalInformation: () => TiroQuestionnaireResponse;
declare const initTreatmentVariables: () => TiroQuestionnaireResponse;
declare const Form: ({ children, title, hideTitle, handleSubmit, handleClear }: React.PropsWithChildren<{
    title: string;
    hideTitle?: boolean | undefined;
    handleSubmit: FormEventHandler;
    handleClear: () => any;
}>) => JSX.Element;
declare const BaselineTumorFactors: ({ author, subject, onSubmit, hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<IBaselineTumorFactorsQR>) => JSX.Element;
declare const PathologyInformation: ({ author, subject, onSubmit, initQuestionnaireResponse }: IQuestionnaireProps<TiroQuestionnaireResponse>) => JSX.Element;
declare const TreatmentVariables: ({ author, subject, onSubmit, hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<TiroQuestionnaireResponse>) => JSX.Element;
export { IBaselineTumorFactorsQR, initBaselineTumorFactors, initPathologicalInformation, initTreatmentVariables, Form, BaselineTumorFactors, PathologyInformation, TreatmentVariables };
