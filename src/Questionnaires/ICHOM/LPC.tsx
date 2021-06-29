import React, { Dispatch, FormEvent, FormEventHandler, SetStateAction, useState } from "react"
import { IQuestionnaireProps, ISingleValuedQRItem, QuestionnaireResponse, QuestionnaireResponseItem, SingleValuedAnswerChildrenProps, TiroQuestionnaireResponse } from "../QuestionnaireResponse"
import { Quantity } from "FHIR/Quantity"
import { IAnswerValueCoding, IAnswerValueDate, IAnswerValueInteger, IAnswerValueQuantity, IAnswerValueString, ICoding, IQuestionnaireResponse } from "FHIR/types"
import { reduceSetStateAction } from "util/dispatch"
import { ChoiceInput } from "Controlled/ChoiceInput"


export interface IBaselineTumorFactorsQR extends TiroQuestionnaireResponse {
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
    ]
}

export const initBaselineTumorFactors = (): IBaselineTumorFactorsQR => ({
    resourceType: "QuestionnaireResponse",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1",
    item: [
        { linkId: "DIAGDATE", answer: [{ valueDate: "23/03/1999" }] },
        { linkId: "PSA", answer: [{ valueQuantity: { unit: "ng/ml", value: undefined } }] },
        { linkId: "TNMCT", answer: [{ valueCoding: undefined, }] },
        { linkId: "TNMCN", answer: [{ valueCoding: undefined }] },
        { linkId: "BIOPCORE", answer: [{ valueQuantity: { value: undefined } }] },
        { linkId: "BIOPPOS", answer: [{ valueQuantity: { value: undefined } }] },
        { linkId: "BIOPINVOL", answer: [{ valueQuantity: { value: undefined, unit: "%" } }] },
        { linkId: "GLEASONBIOP1", answer: [{ valueCoding: undefined }] },
        { linkId: "GLEASONBIOP2", answer: [{ valueCoding: undefined }] },
    ]
})
export const initPathologicalInformation = (): TiroQuestionnaireResponse => ({
    resourceType: "QuestionnaireResponse",
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
export const initTreatmentVariables = (): TiroQuestionnaireResponse => ({
    resourceType: "QuestionnaireResponse",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1",
    item: [
        { linkId: "PRIMARYTX", answer: [{ valueCoding: undefined }] },
        { linkId: "PRWATCHDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRACTIVEDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRRADPROTXDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRNERVESPARE", answer: [{ valueInteger: undefined }] },
        { linkId: "PREBRTTOTDOSE", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "PREBRTDOSEPERFRACT", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "PREBRTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PREBRTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PREBRTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRBRACHYTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRBRACHYTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRBRACHYTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRBRACHYDOSERATE", answer: [{ valueInteger: undefined }] },
        { linkId: "PRADTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRADTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRADTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRIMARYTXFT", answer: [{ valueString: undefined }] },
        { linkId: "PRFOCTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRFOCTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PRFOCTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "PRIMARYTXOTHER", answer: [{ valueString: undefined }] },
        { linkId: "PROTHERTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PROTHERTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PROTHERTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SALVAGETXINI", answer: [{ valueInteger: undefined }] },
        { linkId: "SALVAGETX", answer: [{ valueInteger: undefined }] },
        { linkId: "SALVAGETXOTHER", answer: [{ valueString: undefined }] },
        { linkId: "SVRADPROTXDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVNERVESPARE", answer: [{ valueInteger: undefined }] },
        { linkId: "SVEBRTTOTDOSE", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "SVEBRTDOSEPERFRACT", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "SVEBRTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVEBRTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVEBRTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVBRACHYTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVBRACHYTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVBRACHYTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVBRACHYDOSERATE", answer: [{ valueQuantity: { value: undefined, unit: "Gray" } }] },
        { linkId: "SVADTTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVADTTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVADTTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVFOCTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVFOCTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVFOCTXONGOING", answer: [{ valueInteger: undefined }] },
        { linkId: "SVOTHERTXSTARTDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVOTHERTXSTOPDATE", answer: [{ valueDate: undefined }] },
        { linkId: "SVOTHERTXONGOING", answer: [{ valueInteger: undefined }] },

    ]
})

const Footer = ({ clear }: React.PropsWithChildren<{ clear: () => any }>) => (
    <div className="pt-5">
        <div className="flex justify-end">
            <button
                type="button"
                onClick={clear}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Clear
            </button>
            <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
    </div>
)

export const Form = ({ children, title, hideTitle, handleSubmit, handleClear }: React.PropsWithChildren<{ title: string, hideTitle?: boolean, handleSubmit: FormEventHandler, handleClear: () => any }>) => (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
                {!hideTitle && (
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {title}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                    </div>
                )}
                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    {React.Children.map(children, (c) => (
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer clear={handleClear} />
    </form>
)

export const BaselineTumorFactors = ({ author, subject, onSubmit, hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<IBaselineTumorFactorsQR>) => {
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

    const [qr, setQR] = useState<IBaselineTumorFactorsQR>(initQuestionnaireResponse ?? initBaselineTumorFactors)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit && onSubmit(qr)
    }
    return (
        <QuestionnaireResponse questionnaireResponse={qr} onQuestionnaireResponseChange={setQR} >
            <Form title="Baseline Tumor Factors" handleSubmit={handleSubmit} handleClear={() => setQR(initBaselineTumorFactors)}>
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
            </Form>
        </QuestionnaireResponse >
    )
}

export const PathologyInformation = ({ author, subject, onSubmit, initQuestionnaireResponse }: IQuestionnaireProps<TiroQuestionnaireResponse>) => {
    const [qr, setQR] = useState<TiroQuestionnaireResponse>(initQuestionnaireResponse ?? initPathologicalInformation)
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
            <Form title="Pathological information" handleSubmit={handleSubmit} handleClear={() => setQR(initPathologicalInformation())}>
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
            </Form >
        </QuestionnaireResponse >
    )
}
const QuestionStartStopOngoing = ({ startVariableID, stopVariableId, ongoingVariableId, label }: { startVariableID: string, stopVariableId: string, ongoingVariableId: string, label: string }) => (
    <>
        <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{label}</legend>
        <fieldset>
            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                <div className="mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                    <QuestionnaireResponseItem linkId={startVariableID}>
                        {({ answer, setAnswer }: { answer: [IAnswerValueDate], setAnswer: Dispatch<SetStateAction<[IAnswerValueDate]>> }) => (
                            <input
                                name={startVariableID}
                                type="date"
                                placeholder="dd/mm/yyyy"
                                value={answer[0].valueDate}
                                onChange={(event) => setAnswer([{ valueDate: event.target.value }])}
                                className="focus:ring-blue-500 focus:border-blue-500 block w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                            />
                        )}
                    </QuestionnaireResponseItem>
                    <div className="mx-3 flex items-center text-lg text-gray-400">
                        <span>&rarr;</span>
                    </div>
                    <QuestionnaireResponseItem linkId={stopVariableId}>
                        {({ answer, setAnswer }: { answer: [IAnswerValueDate], setAnswer: Dispatch<SetStateAction<[IAnswerValueDate]>> }) => (
                            <input
                                name={stopVariableId}
                                type="date"
                                placeholder="dd/mm/yyyy"
                                value={answer[0].valueDate}
                                onChange={(event) => setAnswer([{ valueDate: event.target.value }])}
                                className="focus:ring-blue-500 focus:border-blue-500 block w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                            />
                        )}
                    </QuestionnaireResponseItem>
                </div>
                <QuestionnaireResponseItem linkId={ongoingVariableId}>
                    {({ answer, setAnswer }: { answer: [IAnswerValueInteger], setAnswer: Dispatch<SetStateAction<[IAnswerValueInteger]>> }) => (
                        <div className="mt-2 relative w-full flex">
                            <input
                                type="checkbox"
                                name={ongoingVariableId}
                                checked={answer[0].valueInteger === 0}
                                value="0"
                                onChange={(event) => setAnswer([{ valueInteger: !!answer[0].valueInteger ? 1 - answer[0].valueInteger : 1 }])}
                                className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                            />
                            <label htmlFor="margin-negative" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                        </div>
                    )}
                </QuestionnaireResponseItem>
            </div>
        </fieldset>
    </>
)
const QuestionDate = ({ label, variableID }: { label: string, variableID: string }) => (
    <QuestionnaireResponseItem linkId={variableID}>
        {({ answer, setAnswer }: { answer: [IAnswerValueDate], setAnswer: Dispatch<SetStateAction<[IAnswerValueDate]>> }) => (
            <>
                <label
                    htmlFor={variableID}
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                    {label}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                    <input
                        name={variableID}
                        type="date"
                        placeholder="dd/mm/yyyy"
                        value={answer[0].valueDate}
                        onChange={(event) => setAnswer([{ valueDate: event.target.value }])}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </>
        )}
    </QuestionnaireResponseItem>

)

export const TreatmentVariables = ({ author, subject, onSubmit, hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<TiroQuestionnaireResponse>) => {

    const [qr, setQR] = useState<TiroQuestionnaireResponse>(initQuestionnaireResponse ?? initTreatmentVariables)
    const primaryTherapyOptions: ICoding[] = [
        { display: "Watchful waiting", code: "PRIMARYTX/1", system: "" },
        { display: "Active surveillance", code: "PRIMARYTX/2", system: "" },
        { display: "Radical prostatectomy", code: "PRIMARYTX/3", system: "" },
        { display: "External beam radiation therapy", code: "PRIMARYTX/4", system: "" },
        { display: "Brachytherapy", code: "PRIMARYTX/5", system: "" },
        { display: "Androgen deprivation therapy", code: "PRIMARYTX/6", system: "" },
        { display: "Focal therapy", code: "PRIMARYTX/7", system: "" },
        { display: "Other", code: "PRIMARYTX/888", system: "" }
    ]
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSubmit && onSubmit(qr)
    }
    return (
        <QuestionnaireResponse questionnaireResponse={qr} onQuestionnaireResponseChange={setQR}>
            <Form title="Threatment variables" handleSubmit={handleSubmit} handleClear={() => setQR(initTreatmentVariables())}>
                <QuestionnaireResponseItem linkId="PRIMARYTX">
                    {({ answer, setAnswer }: SingleValuedAnswerChildrenProps<IAnswerValueCoding>) => (
                        <>
                            <label
                                htmlFor="PRIMARYTX"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Treatment modalities used
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <ChoiceInput
                                    value={answer[0].valueCoding}
                                    onValueChange={(q) => setAnswer((a) => [{ valueCoding: answer[0].valueCoding }])}
                                    name="PRIMARYTX"
                                    options={primaryTherapyOptions}
                                    placeholder="..."
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full flex-grow pl-7 sm:text-sm border-gray-300 rounded-md shadow-sm placeholder-gray-300"
                                />
                            </div>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <QuestionDate variableID="PRWATCHDATE" label="Date watchful waiting initiated" />
                <QuestionDate variableID="PRACTIVEDATE" label="Date active surveillance initiated" />
                <QuestionDate variableID="PRRADPROTXDATE" label="Date of primary pradical prostatectomy" />
                <QuestionnaireResponseItem linkId="PRNERVESPARE">
                    {({ answer, setAnswer }: SingleValuedAnswerChildrenProps<IAnswerValueInteger>) => (
                        <>
                            <legend
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Primary nerve sparing status
                            </legend>
                            <fieldset className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <div className="flex items-center">
                                    <input
                                        id="PRNERVESPARE-non-nerve-sparing"
                                        type="radio"
                                        name="PRNERVESPARE"
                                        checked={answer[0].valueInteger === 1}
                                        value="1"
                                        onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                        className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                                    />
                                    <label htmlFor="margin-focality-focal" className="ml-3 block text-sm font-medium text-gray-700">non nerve-sparing</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="PRNERVESPARE-nerve-sparing"
                                        type="radio"
                                        name="PRNERVESPARE"
                                        checked={answer[0].valueInteger === 2}
                                        value="2"
                                        onChange={(event) => setAnswer([{ valueInteger: parseInt(event.target.value) }])}
                                        className="focus:ring-blue-500 text-blue-600 border-gray-300 h-4 w-4 rounded-md"
                                    />
                                    <label htmlFor="margin-focality-multi" className="ml-3 block text-sm font-medium text-gray-700">nerve-sparing</label>
                                </div>
                            </fieldset>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <QuestionnaireResponseItem linkId="PREBRTTOTDOSE">
                    {({ answer, setAnswer }) => (
                        <>
                            <label
                                htmlFor="PREBRTTOTDOSE"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Primary EBRT dose
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <Quantity
                                    quantity={(answer[0] as IAnswerValueQuantity).valueQuantity}
                                    onQuantityChange={(q) => setAnswer((a) => [{ valueQuantity: reduceSetStateAction((a[0] as IAnswerValueQuantity).valueQuantity, q) }])}>
                                    {({ value, unit, onValueChange }) => (
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <input
                                                name="PREBRTTOTDOSE"
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
                <QuestionnaireResponseItem linkId="PREBRTDOSEPERFRACT">
                    {({ answer, setAnswer }) => (
                        <>
                            <label
                                htmlFor="PREBRTDOSEPERFRACT"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Primary EBRT average dose per fraction
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <Quantity
                                    quantity={(answer[0] as IAnswerValueQuantity).valueQuantity}
                                    onQuantityChange={(q) => setAnswer((a) => [{ valueQuantity: reduceSetStateAction((a[0] as IAnswerValueQuantity).valueQuantity, q) }])}>
                                    {({ value, unit, onValueChange }) => (
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <input
                                                name="PREBRTDOSEPERFRACT"
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
                <QuestionStartStopOngoing startVariableID="PREBRTTXSTARTDATE" stopVariableId="PREBRTTXSTOPDATE" ongoingVariableId="PREBRTTXONGOING" label="Period of primary EBRT" />
                <QuestionStartStopOngoing startVariableID="PRBRACHYTXSTARTDATE" stopVariableId="PRBRACHYTXSTOPDATE" ongoingVariableId="PRBRACHYTXONGOING" label="Period of primary brachytherapy" />
                <QuestionnaireResponseItem linkId="PRBRACHYDOSERATE">
                    {({ answer, setAnswer }) => (
                        <>
                            <label
                                htmlFor="PRBRACHYDOSERATE"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Primary branchytherapy dose:
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <Quantity
                                    quantity={(answer[0] as IAnswerValueQuantity).valueQuantity}
                                    onQuantityChange={(q) => setAnswer((a) => [{ valueQuantity: reduceSetStateAction((a[0] as IAnswerValueQuantity).valueQuantity, q) }])}>
                                    {({ value, unit, onValueChange }) => (
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <input
                                                name="PRBRACHYDOSERATE"
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
                <QuestionStartStopOngoing startVariableID="PRADTTXSTARTDATE" stopVariableId="PRADTTXSTOPDATE" ongoingVariableId="PRADTTXONGOING" label="Period of primary ADT" />
                <QuestionStartStopOngoing startVariableID="PRBRACHYTXSTARTDATE" stopVariableId="PRBRACHYTXSTOPDATE" ongoingVariableId="PRBRACHYTXONGOING" label="Period of primary brachytherapy" />
                <QuestionnaireResponseItem linkId="PRIMARYTXFT">
                    {({ answer, setAnswer }: SingleValuedAnswerChildrenProps<IAnswerValueString>) => (
                        <>
                            <label
                                htmlFor="PRIMARYTXFT"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Indicate the type of focal therapy used for this patient</label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                 <textarea
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300"
                                    value={answer[0].valueString}
                                    onChange={(event) => setAnswer([{ valueString: event.target.value }])}
                                />
                            </div>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <QuestionStartStopOngoing startVariableID="PRFOCTXSTARTDATE" stopVariableId="PRFOCTXSTOPDATE" ongoingVariableId="PRFOCTXONGOING" label="Period of primary focal therapy" />
                <QuestionnaireResponseItem linkId="PRIMARYTXOTHER">
                    {({ answer, setAnswer }: SingleValuedAnswerChildrenProps<IAnswerValueString>) => (
                        <>
                            <label
                                htmlFor="PRIMARYTXOTHER"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Indicate the other primary treatment modality used                               </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <textarea
                                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300"
                                    value={answer[0].valueString}
                                    onChange={(event) => setAnswer([{ valueString: event.target.value }])}
                                />
                            </div>
                        </>
                    )}
                </QuestionnaireResponseItem>
                <QuestionStartStopOngoing startVariableID="PROTHERTXSTARTDATE" stopVariableId="PROTHERTXSTOPDATE" ongoingVariableId="PROTHERTXONGOING" label="Period of primary other therapy" />


            </Form >
        </QuestionnaireResponse >
    )
}
