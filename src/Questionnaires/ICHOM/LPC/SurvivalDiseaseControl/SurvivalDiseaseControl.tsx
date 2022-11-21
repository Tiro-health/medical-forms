import React, { useMemo } from "react"
import { AnswerValueBooleanModel, AnswerValueDateModel, AnswerValueIntegerModel, AnswerValueQuantityModel, IPatientReference, IPractitionerReference, IQuestionnaireResponse, IQuestionnaireResponseItem, IReference } from "FHIR/types"
import { Field, Formik, FormikHelpers } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import { FormikContainer } from "../FormContainer"
import { literal, object, tuple, Infer, create } from "superstruct"
import { QuestionWrapper } from "../QuestionWrapper"
import { IAbsractQuestionnaireResponse } from "../types"
import { modelRecord } from "./consts"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"

export const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1"
type SurvivalDiseaseControlField = keyof typeof modelRecord
type SurvivalDiseaseControlRecord = Record<SurvivalDiseaseControlField, any>

export const SurvivalDiseaseControlModel = object({
    resourceType: literal("QuestionnaireResponse"),
    questionnaire: literal("http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1"),
    item: tuple([
        object({ linkId: literal("DEATH"), answer: tuple([AnswerValueBooleanModel]) }),
        object({ linkId: literal("DEATHDATE"), answer: tuple([AnswerValueDateModel]) }),
        object({ linkId: literal("DEATHLPC"), answer: tuple([AnswerValueIntegerModel]) }),
        object({ linkId: literal("METADEV"), answer: tuple([AnswerValueBooleanModel]) }),
        object({ linkId: literal("METADATE"), answer: tuple([AnswerValueDateModel]) }),
        object({ linkId: literal("BIOCHEM"), answer: tuple([AnswerValueBooleanModel]) }),
        object({ linkId: literal("BIOCHEMDATE"), answer: tuple([AnswerValueDateModel]) }),
        object({ linkId: literal("BIOCHEMPSA"), answer: tuple([AnswerValueQuantityModel]) })
    ])
})
export interface ISurvivalDiseaseControlQuestionnaireReponse extends IAbsractQuestionnaireResponse<typeof QUESTIONNAIRE_ID> {
    resourceType: "QuestionnaireResponse",
    subject?: IPatientReference
    author?: IPractitionerReference
    questionnaire: typeof QUESTIONNAIRE_ID,
    item: IQuestionnaireResponseItem[]
}

export const initSurvivalDiseaseControl = (): ISurvivalDiseaseControlQuestionnaireReponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: QUESTIONNAIRE_ID,
    item: [
        { linkId: "DEATH", answer: [{ valueBoolean: false }] },
        { linkId: "DEATHDATE", answer: [{ valueDate: "" }] },
        { linkId: "DEATHLPC", answer: [{ valueInteger: 2 }] },
        { linkId: "METADEV", answer: [{ valueBoolean: false }] },
        { linkId: "METADATE", answer: [{ valueDate: "" }] },
        { linkId: "BIOCHEM", answer: [{ valueBoolean: false }] },
        { linkId: "BIOCHEMDATE", answer: [{ valueDate: "" }] },
        { linkId: "BIOCHEMPSA", answer: [{ valueQuantity: { value: undefined, unit: "ng/ml" } }] }
    ]
})

export const initSurvivalDiseaseControlRecord = () => {
    const record: Partial<SurvivalDiseaseControlRecord> = {}
    Object.keys(modelRecord).forEach((key) => {
        record[key as keyof SurvivalDiseaseControlRecord] = ""
    })
    return record as SurvivalDiseaseControlRecord
}

export const SurvivalDiseaseControl = ({ author, subject, disabled, onSubmit, title = "Survival and Disease Control", hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject

    const handleSubmit = (values: SurvivalDiseaseControlRecord, helpers: FormikHelpers<SurvivalDiseaseControlRecord>) => {
        console.debug("📥 Received SurvivalDiseaseControl form values:", values)
        const qr: ISurvivalDiseaseControlQuestionnaireReponse = {
            ...initSurvivalDiseaseControl(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" },
        }
        console.debug("SurvivalDiseaseControl handleSubmit", values)
        const record = create(values, object(modelRecord))
        console.log("✅ SurvivalDiseaseControl form is valid")
        qr.item = convertRecordToQRItems(record) as ISurvivalDiseaseControlQuestionnaireReponse["item"]
        console.debug(" ⚙️️ Converted SurvivalDiseaseControl to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        console.debug("SurvivalDiseaseControl handleSubmit", qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        let record: SurvivalDiseaseControlRecord = initSurvivalDiseaseControlRecord()
        if (initQuestionnaireResponse) {
            record = convertQRItemsToRecord(initQuestionnaireResponse.item) as SurvivalDiseaseControlRecord
        }
        console.debug("📤 initialValues", record)
        return record
    }, [initQuestionnaireResponse, initSurvivalDiseaseControlRecord])
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            {({
                values,
            }) => (
                <FormikContainer title={title} hideTitle={hideTitle} disabled={disabled}>
                    <QuestionWrapper>
                        <label
                            htmlFor="DEATH"
                            className="block text-base font-normal text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Patient died
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="checkbox"
                                className="checkbox mt-3"
                                id="DEATH"
                                name="DEATH"
                            />
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper>
                        <label
                            htmlFor="DEATHDATE"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of death
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="date"
                                id="DEATHDATE"
                                disabled={!values.DEATH}
                                name="DEATHDATE"
                                className="field"
                                required={values.DEATH}
                            />
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper>
                        <label
                            htmlFor="DEATHLPC"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Death attributable to localized prostate cancer
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            {Object.entries({ "yes": "0", "no": "2", "unkown": "999" }).map(
                                ([text, value]) => (
                                    <div className="flex items-center" key={text}>
                                        <Field
                                            id={`DEATHLPC-${value}`}
                                            name="DEATHLPC"
                                            value={value}
                                            disabled={!values.DEATH}
                                            type="radio"
                                            className="radio"
                                            required={values.DEATH}
                                        />
                                        <label htmlFor={`DEATHLPC-${value}`} className="ml-3 block text-sm font-medium text-gray-700">
                                            {text}
                                        </label>
                                    </div>
                                ))}
                            <Field
                                type="checkbox"
                                id="DEATHLPC"
                                disabled={!values.DEATH}
                                name="DEATHLPC"
                                className="hidden"
                            />
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper className="sm:pt-6">
                        <label
                            htmlFor="METADEV"
                            className="block text-base font-normal text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Metastasis
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="checkbox"
                                id="METADEV"
                                name="METADEV"
                                className="checkbox mt-3"
                            />
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper>
                        <label
                            htmlFor="METADATE"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of metastasis
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="date"
                                id="METADATE"
                                disabled={!values.METADEV}
                                required={values.METADEV}
                                name="METADATE"
                                className="field"
                            />
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper className="sm:pt-6">
                        <label
                            htmlFor="BIOCHEM"
                            className="block text-base font-normal text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Biochemical recurrence
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="checkbox"
                                id="BIOCHEM"
                                name="BIOCHEM"
                                className="checkbox mt-3"
                            />

                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper>
                        <label
                            htmlFor="BIOCHEMDATE"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of biochemical recurrence:
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="date"
                                id="BIOCHEMDATE"
                                disabled={!values.BIOCHEM}
                                required={values.BIOCHEM}
                                name="BIOCHEMDATE"
                                className="field"
                            />
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper>
                        <label
                            htmlFor="BIOCHEMPSA"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            PSA at biochemical recurrence
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                <Field
                                    id="BIOCHEMPSA"
                                    name="BIOCHEMPSA"
                                    disabled={!values.BIOCHEM}
                                    required={values.BIOCHEM}
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    placeholder="0.00"
                                    className="field hide-arrows placeholder-gray-300"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">ng/ml</span>
                                </div>
                            </div>
                        </div>
                    </QuestionWrapper>
                </FormikContainer>
            )}
        </Formik >
    )
}