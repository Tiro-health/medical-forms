import React, { useMemo } from "react"
import { initQuestionnaireResponse, IQuestionnaireProps } from "Questionnaires/QuestionnaireResponse"
import { IQuestionnaireResponseItem, IReference } from "FHIR/types"
import { FormikContainer } from "../FormContainer"
import { object, create } from "superstruct"
import { modelRecord } from "./consts"
import { IAbstractQuestionnaireResponse } from "../types"
import { Field, Formik, FormikHelpers } from "formik"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { PN_OPTIONS, PT_OPTIONS } from "./consts"
import { ChoiceField } from "Controlled/ChoiceField"
import { QuestionWrapper } from "../QuestionWrapper"
const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1"

type PathologyInformationField = keyof typeof modelRecord
type PathologyInformationRecord = Record<PathologyInformationField, string>

export interface IPathologyInformationQuestionnaireResponse extends IAbstractQuestionnaireResponse<typeof QUESTIONNAIRE_ID> {
    questionnaire: typeof QUESTIONNAIRE_ID
    item: IQuestionnaireResponseItem[]
}

export const initPathologicalInformation = (): IPathologyInformationQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1",
    item: [
        { linkId: "TNMPT", answer: [{ valueCoding: undefined }] },
        { linkId: "TNMPN", answer: [{ valueCoding: undefined }] },
        { linkId: "MARGIN", answer: [{ valueInteger: undefined }] },
        { linkId: "MARGINFOC", answer: [{ valueInteger: undefined }] },
        { linkId: "GLEASONPATH1", answer: [{ valueInteger: undefined }] },
        { linkId: "GLEASONPATH2", answer: [{ valueInteger: undefined }] },
    ]
})

const initPatientInformationRecord = () => {
    const record: Partial<PathologyInformationRecord> = {}
    Object.keys(modelRecord).forEach((k) => { record[k as keyof PathologyInformationRecord] = "" })
    return record as PathologyInformationRecord
}

export const PathologyInformation = ({ author, subject, disabled, onSubmit, initQuestionnaireResponse, title = "Pathological information", hideTitle }: IQuestionnaireProps<IPathologyInformationQuestionnaireResponse>) => {

    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject

    const handleSubmit = (values: PathologyInformationRecord, helpers: FormikHelpers<PathologyInformationRecord>) => {
        console.debug("📥 Received PathologyInformation form values:", values)
        const qr: IPathologyInformationQuestionnaireResponse = {
            ...initPathologicalInformation(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" }
        }
        const record = create(values, object(modelRecord))
        console.log("✅ PathologyInformation form is valid")
        qr.item = convertRecordToQRItems(record) as IPathologyInformationQuestionnaireResponse["item"]
        console.debug(" ⚙️️ Converted PathologyInformation to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        let values: PathologyInformationRecord = initPatientInformationRecord()
        if (initQuestionnaireResponse)
            values = convertQRItemsToRecord(initQuestionnaireResponse.item) as PathologyInformationRecord
        console.debug("📤 initialValues", values)
        return values
    },
        [initQuestionnaireResponse, initPathologicalInformation])

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            <FormikContainer title={title} hideTitle={hideTitle} disabled={disabled}>
                <QuestionWrapper>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Clinical stage</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 w-full relative flex border border-gray-300  bg-white rounded-md">
                            <label
                                htmlFor="TNMPT"
                                className="sr-only"
                            >
                                Clinical tumor stage
                            </label>
                            <ChoiceField
                                required
                                id="TNMPT"
                                name="TNMPT"
                                options={PT_OPTIONS}
                                placeholder="pT..."
                                className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-l-md"
                            />
                            <label
                                htmlFor="TNMPN"
                                className="sr-only"
                            >
                                Clinical nodal stage
                            </label>
                            <ChoiceField
                                required
                                id="TNMPN"
                                name="TNMPN"
                                placeholder="cN..."
                                options={PN_OPTIONS}
                                className="focus:ring-blue-500 focus:border-blue-500 relative focus:z-10 block flex-1 sm:text-sm border-transparent rounded-r-md"
                            />
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <legend
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                        Margin status
                    </legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center">
                            <Field
                                required
                                id="margin-positive"
                                type="radio"
                                name="MARGIN"
                                value="1"
                                className="radio"
                            />
                            <label htmlFor="margin-positive" className="ml-3 block text-sm font-medium text-gray-700">positive</label>
                        </div>
                        <div className="flex items-center">
                            <Field
                                required
                                id="margin-negative"
                                type="radio"
                                name="MARGIN"
                                className="radio"
                                value="0"
                            />
                            <label htmlFor="margin-negative" className="ml-3 block text-sm font-medium text-gray-700">negative</label>
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper >
                    <legend
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                        Margin status focality
                    </legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center">
                            <Field
                                required
                                id="marging-focality-focal"
                                type="radio"
                                name="MARGINFOC"
                                value="1"
                                className="radio"
                            />
                            <label htmlFor="marging-focality-focal" className="ml-3 block text-sm font-medium text-gray-700">focal</label>
                        </div>
                        <div className="flex items-center">
                            <Field
                                required
                                id="margin-focality-multi"
                                type="radio"
                                name="MARGINFOC"
                                value="2"
                                className="radio"
                            />
                            <label htmlFor="margin-focality-multi" className="ml-3 block text-sm font-medium text-gray-700">multi-focal</label>
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Gleason score</legend>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 relative flex rounded-md w-full shadow-sm border border-gray-300 bg-white">
                            <label
                                htmlFor="GLEASONPATH1"
                                className="sr-only"
                            >
                                Primary Gleason score
                            </label>
                            <Field
                                required
                                id="GLEASONPATH1"
                                type="number"
                                step={1}
                                min={1}
                                max={5}
                                name="GLEASONPATH1"
                                className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md"
                            />
                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                <span>+</span>
                            </div>
                            <label
                                htmlFor="GLEASONPATH2"
                                className="sr-only"
                            >
                                Secondary Gleason score
                            </label>
                            <Field
                                required
                                id="GLEASONPATH2"
                                type="number"
                                step={1}
                                min={1}
                                max={5}
                                name="GLEASONPATH2"
                                className="focus:ring-blue-500 focus:border-blue-500 focus:z-10 block w-full flex-1 pl-7 sm:text-sm border-transparent rounded-md"
                            />
                        </div>
                    </div>
                </QuestionWrapper>
            </FormikContainer>
        </Formik>
    )
}