import { ChoiceInput } from "Controlled/ChoiceInput"
import { ICoding } from "FHIR"
import { Quantity } from "FHIR/Quantity"
import { AnswerValueCodingModel, AnswerValueDateModel, AnswerValueIntegerModel, AnswerValueQuantityModel, createSingleValuedQuestionnaireResponseItemModel, IAnswerValueCoding, IAnswerValueDate, IAnswerValueInteger, IAnswerValueQuantity, IReference, PractitionerReferenceModel, PatientReferenceModel } from "FHIR/types"
import { initQuestionnaireResponse, IQuestionnaireProps, QuestionnaireResponse, QuestionnaireResponseItem, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { Infer, literal, object, optional, tuple } from "superstruct"
import { reduceSetStateAction } from "util/dispatch"
import { FormContainer } from "./FormContainer"

export const BaselineTumorFactorsModel = object({
    resourceType: literal("QuestionnaireResponse"),
    subject: optional(PatientReferenceModel),
    author: optional(PractitionerReferenceModel),
    questionnaire: literal("http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1"),
    item: tuple([
        createSingleValuedQuestionnaireResponseItemModel("DIAGDATE", AnswerValueDateModel),
        createSingleValuedQuestionnaireResponseItemModel("PSA",AnswerValueQuantityModel),
        createSingleValuedQuestionnaireResponseItemModel("TNMCT",AnswerValueCodingModel),
        createSingleValuedQuestionnaireResponseItemModel("TNMCN",AnswerValueCodingModel),
        createSingleValuedQuestionnaireResponseItemModel("BIOPCORE",AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("BIOPPOS",AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("BIOPINVOL",AnswerValueQuantityModel),
        createSingleValuedQuestionnaireResponseItemModel("GLEASONBIOP1",AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("GLEASONBIOP2",AnswerValueIntegerModel),

    ])
})
export type IBaselineTumorFactorsQuestionnaireResponse = Infer<typeof BaselineTumorFactorsModel>

export const initBaselineTumorFactors = (): IBaselineTumorFactorsQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    item: [
        { linkId: "DIAGDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PSA", answer: [{ valueQuantity: { unit: "ng/ml", value: undefined } }] },
        { linkId: "TNMCT", answer: [{ valueCoding: undefined, }] },
        { linkId: "TNMCN", answer: [{ valueCoding: undefined }] },
        { linkId: "BIOPCORE", answer: [{ valueInteger: undefined}] },
        { linkId: "BIOPPOS", answer: [{ valueInteger: undefined}] },
        { linkId: "BIOPINVOL", answer: [{ valueQuantity: { value: undefined, unit: "%" } }] },
        { linkId: "GLEASONBIOP1", answer: [{ valueInteger: undefined }] },
        { linkId: "GLEASONBIOP2", answer: [{ valueInteger: undefined }] },
    ]
})


export const BaselineTumorFactors = ({ author, subject, onSubmit, hideTitle, title = "Baseline Tumor Factors", initQuestionnaireResponse }: IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject
    const init = { ...initQuestionnaireResponse ?? initBaselineTumorFactors(), author: authorReference, subject: subjectReference } as IBaselineTumorFactorsQuestionnaireResponse
    const cTOptions: ICoding[] = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT0", display: "cT0" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1", display: "cT1" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1a", display: "cT1a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1b", display: "cT1b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT1c", display: "cT1c" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2", display: "cT2" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2a", display: "cT2a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2b", display: "cT2b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT2c", display: "cT2c" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT3", display: "cT3" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT3a", display: "cT3a" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT3b", display: "cT3b" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cT4", display: "cT4" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCT/cTX", display: "cTX" },
    ]
    const cNOptions: ICoding[] = [
        { system: "http://tiro.health/fhir/ichom", code: "TNMCN/cN0", display: "cN0" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCN/cN1", display: "cN1" },
        { system: "http://tiro.health/fhir/ichom", code: "TNMCN/cNX", display: "cNX" },
    ]

    const [qr, setQR] = useState<IBaselineTumorFactorsQuestionnaireResponse>(init)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit && onSubmit(qr)
    }
    return (
        <QuestionnaireResponse questionnaireResponse={qr} onQuestionnaireResponseChange={setQR} >
            <FormContainer title={title} hideTitle={hideTitle} handleSubmit={handleSubmit} handleClear={() => setQR(initBaselineTumorFactors)}>
                <QuestionnaireResponseItem linkId="DIAGDATE">
                    {({ answer, setAnswer }: { answer: [IAnswerValueDate], setAnswer: Dispatch<SetStateAction<[IAnswerValueDate]>> }) => (
                        <>
                            <label
                                htmlFor="DIAGDATE"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Histological diagnosis date
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                    <input
                                        name="DIAGDATE"
                                        type="date"
                                        placeholder="dd/mm/yyyy"
                                        value={answer[0].valueDate}
                                        onChange={(event) => setAnswer([{ valueDate: event.target.value }])}
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows"
                                    />
                                </div>
                            </div>
                        </>
                    )}

                </QuestionnaireResponseItem>
                <QuestionnaireResponseItem linkId="PSA">
                    {({ answer, setAnswer }) => (
                        <>
                            <label
                                htmlFor="PSA"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                PSA level at histological diagnosis
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <Quantity
                                    quantity={(answer[0] as IAnswerValueQuantity).valueQuantity}
                                    onQuantityChange={(q) => setAnswer((a) => [{ valueQuantity: reduceSetStateAction((a[0] as IAnswerValueQuantity).valueQuantity, q) }])}>
                                    {({ value, unit, onValueChange }) => (
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <input
                                                name="PSA"
                                                type="number"
                                                min={0}
                                                step={0.01}
                                                value={value}
                                                onChange={(event) => onValueChange(parseFloat(event.target.value))}
                                                placeholder="0.00"
                                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm bg-white">{unit}</span>
                                            </div>
                                        </div>
                                    )}
                                </Quantity>
                            </div>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Clinical stage</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 w-full relative flex border border-gray-300  bg-white rounded-md">
                            <QuestionnaireResponseItem linkId="TNMCT">
                                {({ answer, setAnswer }) => (
                                    <>
                                        <label
                                            htmlFor="TNMCT"
                                            className="sr-only"
                                        >
                                            Clinical tumor stage
                                        </label>
                                        <ChoiceInput
                                            name="TNMCT"
                                            options={cTOptions}
                                            placeholder="cT..."
                                            className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-l-md"
                                            value={(answer as [IAnswerValueCoding])[0].valueCoding}
                                            onValueChange={(coding) => setAnswer([{ valueCoding: coding }])}
                                        />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                            <QuestionnaireResponseItem linkId="TNMCN">
                                {({ answer, setAnswer }) => (
                                    <>
                                        <label
                                            htmlFor="TNMCN"
                                            className="sr-only"
                                        >
                                            Clinical nodal stage
                                        </label>
                                        <ChoiceInput
                                            name="TNMCN"
                                            placeholder="cN..."
                                            options={cNOptions}
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
                <>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Ratio of positive biopsy cores</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <fieldset name="BIOCORERATIO" className="mt-1 w-full relative flex border border-gray-300 bg-white rounded-md shadow-sm ">
                            <QuestionnaireResponseItem linkId="BIOPCORE">
                                {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                                    <>
                                        <label
                                            htmlFor="BIOPCORE"
                                            className="sr-only"
                                        >
                                            Number of biopsy cores taken
                                        </label>
                                        <input
                                            type="number"
                                            value={answer[0].valueInteger?.toString() ?? ""}
                                            onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                            min={0}
                                            step={1}
                                            placeholder="..."
                                            size={4}
                                            name="BIOPCORE"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md"
                                        />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                <span>/</span>
                            </div>
                            <QuestionnaireResponseItem linkId="BIOPPOS">
                                {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                                    <>
                                        <label
                                            htmlFor="BIOPPOS"
                                            className="sr-only"
                                        >
                                            Number of biopsy cores positive
                                        </label>
                                        <input
                                            type="number"
                                            value={answer[0].valueInteger?.toString() ?? ""}
                                            onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                            min={0}
                                            step={1}
                                            size={4}
                                            placeholder="..."
                                            name="BIOPPOS"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md"
                                        />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                        </fieldset>
                    </div>
                </>
                <>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Gleason score</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <fieldset className="mt-1 relative flex rounded-md w-full shadow-sm border border-gray-300 bg-white">
                            <QuestionnaireResponseItem linkId="GLEASONBIOP1">
                                {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                                    <>
                                        <label
                                            htmlFor="GLEASONBIOP1"
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
                                            name="GLEASONBIOP1"
                                            className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                <span>+</span>
                            </div>
                            <QuestionnaireResponseItem linkId="GLEASONBIOP2">
                                {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                                    <>
                                        <label
                                            htmlFor="GLEASONBIOP2"
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
                                            name="GLEASONBIOP2"
                                            className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md" />
                                    </>
                                )}
                            </QuestionnaireResponseItem>
                        </fieldset>
                    </div>
                </>
            </FormContainer>
        </QuestionnaireResponse >
    )
}