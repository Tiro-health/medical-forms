import React, { Dispatch, useCallback } from "react"
import { useContext } from "react"
import { SetStateAction } from "react"
import { reduceSetStateAction } from "util/dispatch"
import { IAnswer, IAnswerValue, IQuestionnaireResponse, IQuestionnaireResponseItem, IReference, IPatientReference, IPractitionerReference } from "FHIR/types"
import { questionnaires, TiroQuestionnaireCanonical } from "./Questionnaire"
import uuid from "uuidjs"

export interface ISingleValuedQRItem<A extends IAnswerValue> extends IQuestionnaireResponseItem {
    answer: [A]
}

export interface TiroQuestionnaireResponse extends IQuestionnaireResponse {
    resourceType: "QuestionnaireResponse"
    questionnaire: TiroQuestionnaireCanonical
}

export const initQuestionnaireResponse = (): Pick<TiroQuestionnaireResponse, "identifier" | "resourceType"> => (
    {
        identifier: { value: uuid.genV4().urn },
        resourceType: "QuestionnaireResponse",
    })

type StateContext<T> = [T, Dispatch<SetStateAction<T>>]

const QRContext = React.createContext<StateContext<IQuestionnaireResponse> | null>(null)
export const useQuestionnaireResponse = () => {
    const qrContext = useContext(QRContext)
    if (!qrContext) {
        throw Error("Please use 'useQuestionnaireResponse' only inside '<QuestionnaireResponse>'.")
    }
    return qrContext
}

export const QuestionnaireResponse = <QR extends IQuestionnaireResponse>({ children, questionnaireResponse: qr, onQuestionnaireResponseChange: onQRChange }: React.PropsWithChildren<{ questionnaireResponse: QR, onQuestionnaireResponseChange: Dispatch<SetStateAction<QR>> }>) => {
    return (
        <QRContext.Provider value={[qr, onQRChange as Dispatch<SetStateAction<IQuestionnaireResponse>>]}>
            {children}
        </QRContext.Provider>
    )
}

const QRItemContext = React.createContext<StateContext<IQuestionnaireResponseItem> | null>(null)

type IQuestionnaireResponseReturnType = { answer: IAnswer, setAnswer: (anser: SetStateAction<IAnswer>) => void }
interface IQuestionnaireResponseItemProps {
    linkId: string,
    text?: string,
    children: React.ReactNode | ((props: IQuestionnaireResponseReturnType) => React.ReactNode)
}
export const QuestionnaireResponseItem = ({ children, linkId, text }: IQuestionnaireResponseItemProps) => {
    const [qr, onQRChange] = useQuestionnaireResponse()
    const qrItemIndex = qr.item.findIndex(i => i.linkId === linkId)
    const qrItem = (qrItemIndex > -1) ? qr.item[qrItemIndex] as IQuestionnaireResponseItem : undefined
    if (!qrItem) {
        throw Error(`Can't find QuestionnaireResponse item with linkId: ${linkId}`)
    }

    const onQRItemChange = useCallback((item: SetStateAction<IQuestionnaireResponseItem | undefined>) =>
        onQRChange((qr) => (
            {
                ...qr,
                item: [
                    ...qr.item.slice(0, qrItemIndex),
                    reduceSetStateAction(qrItem, item),
                    ...qr.item.slice(qrItemIndex + 1)
                ]
            } as IQuestionnaireResponse
        )), [linkId, text, onQRChange])

    const setAnswer = useCallback((answer: SetStateAction<IAnswer>) => {
        onQRItemChange(qrItem => {
            if (!qrItem) {
                return
            }
            return { ...qrItem, answer: reduceSetStateAction(qrItem.answer, answer) }
        })
    }, [])

    // return a children renderer with props: answer, appendAnswer, setAnswer, clearAnswers, 
    if (typeof children === "function") {
        return children({ answer: qrItem.answer, setAnswer } as IQuestionnaireResponseReturnType)
    }
    return (
        <QRItemContext.Provider value={[{ ...qrItem, linkId, text }, onQRItemChange as any]}>
            {children}
        </QRItemContext.Provider>
    )
}

export const useQuestionnaireResponseItem = <T extends {}>() => {
    const qrContextItem = useContext(QRItemContext)
    if (!qrContextItem) {
        throw Error("Please use 'useQuestionnaireResponseItem' only inside <QuestionnaireResponse /> or <QuestionnaireResponse.Item />")
    }
    return qrContextItem as unknown as StateContext<IQuestionnaireResponseItem>

}

export interface IQuestionnaireProps<QR extends IQuestionnaireResponse> {
    title?: string
    hideTitle?: boolean
    disabled?: boolean
    subject?: string | IPatientReference
    author?: string | IPractitionerReference,
    initQuestionnaireResponse?: QR
    onSubmit?: (qr: QR) => any
}

export interface SingleValuedAnswerChildrenProps<T extends IAnswerValue> {
    answer: [T]
    setAnswer: Dispatch<SetStateAction<[T]>>
}