import React, { Dispatch } from "react"
import { initQuestionnaireResponse, IQuestionnaireProps, QuestionnaireResponse, QuestionnaireResponseItem, SingleValuedAnswerChildrenProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import { AnswerValueCodingModel, AnswerValueIntegerModel, createSingleValuedQuestionnaireResponseItemModel, IAnswerValueCoding, IAnswerValueInteger, ICoding, IQuestionnaireResponse, IReference, PractitionerReferenceModel, PatientReferenceModel } from "FHIR/types"
import { SetStateAction, useState, FormEvent} from "react"
import { FormContainer } from "./FormContainer"
import { ChoiceInput } from "Controlled/ChoiceInput"
import { Infer,literal, object, tuple, optional } from "superstruct"

export const PathologyInformationQuestionnaireResponseModel = object({
    resourceType: literal("QuestionnaireResponse"),
    subject: optional(PatientReferenceModel),
    author: optional(PractitionerReferenceModel),
    questionnaire: literal("http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1"),
    item: tuple([
        createSingleValuedQuestionnaireResponseItemModel("TNMPT", AnswerValueCodingModel),
        createSingleValuedQuestionnaireResponseItemModel("TNMPN", AnswerValueCodingModel),
        createSingleValuedQuestionnaireResponseItemModel("MARGIN", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("MARGINFOC", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("GLEASONPATH1",AnswerValueCodingModel),
        createSingleValuedQuestionnaireResponseItemModel("GLEASONPATH2",AnswerValueCodingModel),
    ])
})

type IPathologyInformationQuestionnaireResponse = Infer<typeof PathologyInformationQuestionnaireResponseModel>

export const initPathologicalInformation = (): IPathologyInformationQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
    item: [
        { linkId: "TNMPT", answer: [{ valueCoding: undefined }] },
        { linkId: "TNMPN", answer: [{ valueCoding: undefined }] },
        { linkId: "MARGIN", answer: [{ valueInteger: undefined }] },
        { linkId: "MARGINFOC", answer: [{ valueInteger: undefined }] },
        { linkId: "GLEASONPATH1", answer: [{ valueCoding: undefined }] },
        { linkId: "GLEASONPATH2", answer: [{ valueCoding: undefined }] },
    ]
})

export const PathologyInformation = ({ author, subject, onSubmit, initQuestionnaireResponse, title="Pathological information", hideTitle }: IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>) => {
    
    const authorReference = typeof author  === "string" ? {identifier: {value: author}} as IReference : author
    const subjectReference  = typeof subject === "string" ? {identifier: {value: subject}} as IReference : subject
    const init = { ...initQuestionnaireResponse ?? initPathologicalInformation(), author:authorReference, subject:subjectReference } as IPathologyInformationQuestionnaireResponse

    const [qr, setQR] = useState<IPathologyInformationQuestionnaireResponse>(init)
    const pNOptions: ICoding[] = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMPN/pN0", display: "pN0" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPN/pN1", display: "pN1" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPN/pNX", display: "pNX" },
    ]


    const pTOptions: ICoding[] = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2", display: "pT2" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2a", display: "pT2a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2b", display: "pT2b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT2c", display: "pT2c" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT3", display: "pT3" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT3a", display: "pT3a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT3b", display: "pT3b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cT4", display: "pT4" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMPT/cTX", display: "pTX" },
    ]

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit && onSubmit(qr)
    }
    return (
        <QuestionnaireResponse questionnaireResponse={qr} onQuestionnaireResponseChange={setQR} >
            <FormContainer title={title} hideTitle={hideTitle} handleSubmit={handleSubmit} handleClear={() => setQR(initPathologicalInformation())}>
                <>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Clinical stage</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 w-full relative flex border border-gray-300  bg-white rounded-md">
                            <QuestionnaireResponseItem linkId="TNMPT">
                                {({ answer, setAnswer }) => (
                                    <>
                                        <label
                                            htmlFor="TNMPT"
                                            className="sr-only"
                                        >
                                            Clinical tumor stage
                                        </label>
                                        <ChoiceInput
                                            name="TNMPT"
                                            options={pTOptions}
                                            placeholder="pT..."
                                            className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-l-md"
                                            value={(answer as [IAnswerValueCoding])[0].valueCoding}
                                            onValueChange={(coding) => setAnswer([{ valueCoding: coding }])}
                                        />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                            <QuestionnaireResponseItem linkId="TNMPN">
                                {({ answer, setAnswer }) => (
                                    <>
                                        <label
                                            htmlFor="TNMPN"
                                            className="sr-only"
                                        >
                                            Clinical nodal stage
                                        </label>
                                        <ChoiceInput
                                            name="TNMPN"
                                            placeholder="cN..."
                                            options={pNOptions}
                                            className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-r-md"
                                            value={(answer as [IAnswerValueCoding])[0].valueCoding}
                                            onValueChange={(coding) => setAnswer([{ valueCoding: coding }])}
                                        />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                        </div>
                    </div>
                </>
                <QuestionnaireResponseItem linkId="MARGIN">
                    {({ answer, setAnswer }: SingleValuedAnswerChildrenProps<IAnswerValueInteger>) => (
                        <>
                            <legend
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Margin status
                            </legend>
                            <fieldset className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <div className="flex items-center">
                                    <input
                                        id="marging-positive"
                                        type="radio"
                                        name="MARGIN"
                                        checked={answer[0].valueInteger === 1}
                                        value="1"
                                        onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                        className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                                    />
                                    <label htmlFor="margin-positive" className="ml-3 block text-sm font-medium text-gray-700">positive</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="margin-negative"
                                        type="radio"
                                        name="MARGIN"
                                        checked={answer[0].valueInteger === 0}
                                        value="0"
                                        onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                        className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                                    />
                                    <label htmlFor="margin-negative" className="ml-3 block text-sm font-medium text-gray-700">negative</label>
                                </div>
                            </fieldset>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <QuestionnaireResponseItem linkId="MARGINFOC">
                    {({ answer, setAnswer }: SingleValuedAnswerChildrenProps<IAnswerValueInteger>) => (
                        <>
                            <legend
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Margin status focality
                            </legend>
                            <fieldset className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <div className="flex items-center">
                                    <input
                                        id="marging-focality-focal"
                                        type="radio"
                                        name="MARGINFOC"
                                        checked={answer[0].valueInteger === 1}
                                        value="1"
                                        onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                        className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                                    />
                                    <label htmlFor="margin-focality-focal" className="ml-3 block text-sm font-medium text-gray-700">focal</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="margin-focality-focal"
                                        type="radio"
                                        name="MARGINFOC"
                                        checked={answer[0].valueInteger === 2}
                                        value="2"
                                        onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                        className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                                    />
                                    <label htmlFor="margin-focality-multi" className="ml-3 block text-sm font-medium text-gray-700">multi-focal</label>
                                </div>
                            </fieldset>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Gleason score</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <fieldset className="mt-1 relative flex rounded-md w-full shadow-sm border border-gray-300 bg-white">
                            <QuestionnaireResponseItem linkId="GLEASONPATH1">
                                {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                                    <>
                                        <label
                                            htmlFor="GLEASONPATH1"
                                            className="sr-only"
                                        >
                                            Primary Gleason score
                                        </label>
                                        <input
                                            type="number"
                                            step={1}
                                            min={1}
                                            max={5}
                                            value={answer[0].valueInteger}
                                            onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                            name="GLEASONPATH1"
                                            className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                <span>+</span>
                            </div>
                            <QuestionnaireResponseItem linkId="GLEASONPATH2">
                                {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                                    <>
                                        <label
                                            htmlFor="GLEASONPATH2"
                                            className="sr-only"
                                        >
                                            Secondary Gleason score
                                        </label>
                                        <input
                                            type="number"
                                            step={1}
                                            min={1}
                                            max={5}
                                            value={answer[0].valueInteger}
                                            onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                            name="GLEASONPATH2"
                                            className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                        </fieldset>
                    </div>
                </>
            </FormContainer >
        </QuestionnaireResponse >
    )
}