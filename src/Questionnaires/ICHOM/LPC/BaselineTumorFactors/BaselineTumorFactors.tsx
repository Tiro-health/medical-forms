import { ChoiceField } from "Controlled/ChoiceField"
import { IReference, IPatientReference, IPractitionerReference, IQuestionnaireResponseItem } from "FHIR/types"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { Field, Formik, FormikHelpers } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import React, { HTMLAttributes, useMemo } from "react"
import { create, object } from "superstruct"
import { FormikContainer } from "../FormContainer"
import _ from "lodash"
import { CNOPTIONS, CTOPTIONS, modelRecord } from "./consts"
import { QuestionWrapper } from "../QuestionWrapper"
import { IAbsractQuestionnaireResponse } from "../types"
const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1"


type BaselineTumorFactorField = keyof typeof modelRecord
type BaselineTumorFactorRecord = Record<BaselineTumorFactorField, string>

export interface IBaselineTumorFactorsQuestionnaireResponse extends IAbsractQuestionnaireResponse<typeof QUESTIONNAIRE_ID> {
    resourceType: "QuestionnaireResponse"
    subject?: IPatientReference
    author?: IPractitionerReference
    questionnaire: typeof QUESTIONNAIRE_ID
    item: IQuestionnaireResponseItem[]
}

export const initBaselineTumorFactors = (): IBaselineTumorFactorsQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: QUESTIONNAIRE_ID,
    item: [
        { linkId: "DIAGDATE", answer: [{ valueDate: undefined }] },
        { linkId: "PSA", answer: [{ valueQuantity: { unit: "ng/ml", value: undefined } }] },
        { linkId: "TNMCT", answer: [{ valueCoding: undefined, }] },
        { linkId: "TNMCN", answer: [{ valueCoding: undefined }] },
        { linkId: "BIOPCORE", answer: [{ valueInteger: undefined }] },
        { linkId: "BIOPPOS", answer: [{ valueInteger: undefined }] },
        { linkId: "BIOPINVOL", answer: [{ valueQuantity: { value: undefined, unit: "%" } }] },
        { linkId: "GLEASONBIOP1", answer: [{ valueInteger: undefined }] },
        { linkId: "GLEASONBIOP2", answer: [{ valueInteger: undefined }] },
    ]
})

const initBaselineTumorFactorsRecord = () => {
    const record: Partial<BaselineTumorFactorRecord> = {}
    Object.keys(modelRecord).forEach((k) => { record[k as keyof BaselineTumorFactorRecord] = "" })
    return record as BaselineTumorFactorRecord
}

export const BaselineTumorFactors = ({ author, subject, onSubmit, hideTitle, disabled, title = "Baseline Tumor Factors", initQuestionnaireResponse }: IQuestionnaireProps<IBaselineTumorFactorsQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject

    const handleSubmit = (values: BaselineTumorFactorRecord, helpers: FormikHelpers<BaselineTumorFactorRecord>) => {
        console.debug("📥 Received BaselineTumorFactor form values:", values)
        const qr: IBaselineTumorFactorsQuestionnaireResponse = {
            ...initBaselineTumorFactors(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" }
        }
        const record = create(values, object(modelRecord))
        console.log("✅ BaselineTumorFactor form is valid")
        qr.item = convertRecordToQRItems(record) as IBaselineTumorFactorsQuestionnaireResponse["item"]
        console.debug(" ⚙️️ Converted BaselineTumorFactor to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        let values: BaselineTumorFactorRecord = initBaselineTumorFactorsRecord()
        if (initQuestionnaireResponse) {
            values = convertQRItemsToRecord(initQuestionnaireResponse.item) as BaselineTumorFactorRecord
        }
        console.debug("📤 initialValues", values)
        return values
    },
        [initQuestionnaireResponse, initBaselineTumorFactorsRecord])
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            <FormikContainer id={QUESTIONNAIRE_ID} title={title} hideTitle={hideTitle} disabled={disabled}>
                <QuestionWrapper>
                    <label
                        htmlFor="DIAGDATE"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                        Histological diagnosis date
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                            <Field
                                name="DIAGDATE"
                                type="date"
                                placeholder="dd/mm/yyyy"
                                required
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300 disabled:bg-gray-50"
                            />
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <label
                        htmlFor="PSA"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                        PSA level at histological diagnosis
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                            <Field
                                name="PSA"
                                type="number"
                                min={0}
                                step={0.01}
                                placeholder="0.00"
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300 disabled:bg-gray-50"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm bg-white">ng/ml</span>
                            </div>
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Clinical stage</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 w-full relative flex border border-gray-300  bg-white rounded-md">
                            <label
                                htmlFor="TNMCT"
                                className="sr-only"
                            >
                                Clinical tumor stage
                            </label>
                            <ChoiceField
                                name="TNMCT"
                                options={CTOPTIONS}
                                placeholder="cT..."
                                className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 pl-7 sm:text-sm border-transparent rounded-l-md placeholder-gray-300 disabled:bg-gray-50"
                            />
                            <label
                                htmlFor="TNMCN"
                                className="sr-only"
                            >
                                Clinical nodal stage
                            </label>
                            <ChoiceField
                                name="TNMCN"
                                placeholder="cN..."
                                options={CNOPTIONS}
                                className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 pl-7 sm:text-sm border-transparent rounded-r-md placeholder-gray-300 disabled:bg-gray-50"
                            />
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Ratio of positive biopsy cores</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 w-full relative flex border border-gray-300 bg-white rounded-md shadow-sm ">
                            <label
                                htmlFor="BIOPCORE"
                                className="sr-only"
                            >
                                Number of biopsy cores taken
                            </label>
                            <Field
                                type="number"
                                min={0}
                                step={1}
                                placeholder="..."
                                size={4}
                                name="BIOPCORE"
                                required
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md placeholder-gray-300 disabled:bg-gray-50"
                            />
                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                <span>/</span>
                            </div>
                            <label
                                htmlFor="BIOPPOS"
                                className="sr-only"
                            >
                                Number of biopsy cores positive
                            </label>
                            <Field
                                type="number"
                                min={0}
                                step={1}
                                size={4}
                                placeholder="..."
                                name="BIOPPOS"
                                required
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md placeholder-gray-300 disabled:bg-gray-50"
                            />
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <label
                        htmlFor="BIOPINVOL"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                        Greatest percentage involvement
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                            <Field
                                name="BIOPINVOL"
                                type="number"
                                min={0}
                                step={0.01}
                                placeholder="0.00"
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300 disabled:bg-gray-50"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm bg-white">%</span>
                            </div>
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Gleason score</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 relative flex rounded-md w-full shadow-sm border border-gray-300 bg-white">
                            <label
                                htmlFor="GLEASONBIOP1"
                                className="sr-only"
                            >
                                Primary Gleason score
                            </label>
                            <Field
                                type="number"
                                step={1}
                                min={1}
                                max={5}
                                name="GLEASONBIOP1"
                                required
                                className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md placeholder-gray-300 disabled:bg-gray-50" />
                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                <span>+</span>
                            </div>
                            <label
                                htmlFor="GLEASONBIOP2"
                                className="sr-only"
                            >
                                Secondary Gleason score
                            </label>
                            <Field
                                type="number"
                                step={1}
                                min={1}
                                max={5}
                                name="GLEASONBIOP2"
                                required
                                className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md placeholder-gray-300 disabled:bg-gray-50" />
                        </div>
                    </div>
                </QuestionWrapper>
            </FormikContainer>
        </Formik >
    )
}