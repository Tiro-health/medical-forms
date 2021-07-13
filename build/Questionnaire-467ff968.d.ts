/// <reference types="react" />
import React from "react";
import { SetStateAction, Dispatch, RefObject } from "react";
import { IQuantity, IAnswer, IAnswerValue, IQuestionnaireResponse, IQuestionnaireResponseItem, IReference, ICoding } from "./types-2048d93c";
import { TiroQuestionnaireCanonical } from "./Questionnaire-0910600c";
declare const QuantityContext: React.Context<[
    IQuantity,
    React.Dispatch<React.SetStateAction<IQuantity>>
] | null>;
interface IQuantityReturnType {
    value: number | undefined;
    unit?: string;
    onValueChange: Dispatch<SetStateAction<number | undefined>>;
    onUnitChange: Dispatch<SetStateAction<string | undefined>>;
}
declare const Quantity: ({ quantity, onQuantityChange, children }: {
    quantity: IQuantity;
    onQuantityChange: Dispatch<SetStateAction<IQuantity>>;
    children?: React.ReactNode | React.FunctionComponent<IQuantityReturnType>;
}) => JSX.Element;
interface ISingleValuedQRItem<A extends IAnswerValue> extends IQuestionnaireResponseItem {
    answer: [
        A
    ];
}
interface TiroQuestionnaireResponse extends IQuestionnaireResponse {
    resourceType: "QuestionnaireResponse";
    questionnaire: TiroQuestionnaireCanonical;
}
type StateContext<T> = [
    T,
    Dispatch<SetStateAction<T>>
];
declare const useQuestionnaireResponse: () => StateContext<IQuestionnaireResponse>;
declare const QuestionnaireResponse: <QR extends IQuestionnaireResponse>({ children, questionnaireResponse: qr, onQuestionnaireResponseChange: onQRChange }: React.PropsWithChildren<{
    questionnaireResponse: QR;
    onQuestionnaireResponseChange: React.Dispatch<React.SetStateAction<QR>>;
}>) => JSX.Element;
type IQuestionnaireResponseReturnType = {
    answer: IAnswer;
    setAnswer: (anser: SetStateAction<IAnswer>) => void;
};
interface IQuestionnaireResponseItemProps {
    linkId: string;
    text?: string;
    children: React.ReactNode | ((props: IQuestionnaireResponseReturnType) => React.ReactNode);
}
declare const QuestionnaireResponseItem: ({ children, linkId, text }: IQuestionnaireResponseItemProps) => any;
declare const useQuestionnaireResponseItem: <T extends {}>() => StateContext<IQuestionnaireResponseItem>;
interface IQuestionnaireProps<QR extends IQuestionnaireResponse> {
    title?: string;
    hideTitle?: boolean;
    subject?: string | IReference;
    author?: string | IReference;
    initQuestionnaireResponse?: QR;
    onSubmit?: (qr: QR) => any;
}
interface SingleValuedAnswerChildrenProps<T extends IAnswerValue> {
    answer: [
        T
    ];
    setAnswer: Dispatch<SetStateAction<[
        T
    ]>>;
}
interface DataElementInputProps {
    editable?: boolean;
    name?: string;
    date?: string;
    enabled?: boolean;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}
interface ChoiceSelectProps extends Omit<DataElementInputProps, "editing" | "disabled" | "enabled"> {
    value: ICoding | undefined;
    options: ICoding[];
    onValueChange: Dispatch<ICoding | undefined>;
    containerRef?: RefObject<HTMLElement> | null;
}
declare const ChoiceInput: ({ value, name, className, options: initOptions, placeholder, onValueChange, containerRef, }: ChoiceSelectProps) => JSX.Element;
export { QuantityContext, IQuantityReturnType, Quantity, ISingleValuedQRItem, TiroQuestionnaireResponse, useQuestionnaireResponse, QuestionnaireResponse, QuestionnaireResponseItem, useQuestionnaireResponseItem, IQuestionnaireProps, SingleValuedAnswerChildrenProps, DataElementInputProps, ChoiceInput };
