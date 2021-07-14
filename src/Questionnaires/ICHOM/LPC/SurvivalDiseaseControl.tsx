import React from "react"
import { IAnswerValueBoolean, IAnswerValueDate, IAnswerValueQuantity, IReference } from "FHIR/types"
import { Field, Formik } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import { FormContainer } from "."

export interface ISurvivalDiseaseControlQuestionnaireReponse extends TiroQuestionnaireResponse {
    resourceType: "QuestionnaireResponse",
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1",
    item: [
        { linkId: "DEATH", answer: [IAnswerValueBoolean]},
        { linkId: "DEATHDATE", answer: [IAnswerValueDate] },
        { linkId: "DEATHLPC", answer: [IAnswerValueBoolean]},
        { linkId: "METADEV", answer:  [IAnswerValueBoolean]},
        { linkId: "METADATE", answer: [IAnswerValueDate] },
        { linkId: "BIOCHEM", answer:  [IAnswerValueBoolean]},
        { linkId: "BIOCHEMDATE", answer: [IAnswerValueDate] },
        { linkId: "BIOCHEMPSA", answer: [IAnswerValueQuantity] }
    ]
}

const initSurvivalDiseaseControl = (): ISurvivalDiseaseControlQuestionnaireReponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-survival-disease-control|0.1",
    item: [
        { linkId: "DEATH", answer: [{ valueBoolean: false }] },
        { linkId: "DEATHDATE", answer: [{ valueDate: "" }] },
        { linkId: "DEATHLPC", answer: [{valueBoolean: false}]},
        { linkId: "METADEV", answer: [{valueBoolean: false}]},
        { linkId: "METADATE", answer: [{ valueDate: ""}] },
        { linkId: "BIOCHEM", answer: [{valueBoolean: false}]},
        { linkId: "BIOCHEMDATE", answer: [{ valueDate: ""}] },
        { linkId: "BIOCHEMPSA", answer: [{ valueQuantity: {value: undefined, unit: "ng/ml"} }] }
    ]
})
export const SurvivalDiseaseControl = ({ author, subject, onSubmit, title="Survival and Disease Control", hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<ISurvivalDiseaseControlQuestionnaireReponse>) => {
    const authorReference = typeof author  === "string" ? {identifier: {value: author}} as IReference : author
    const subjectReference  = typeof subject === "string" ? {identifier: {value: subject}} as IReference : subject
    const init =  {...initQuestionnaireResponse ?? initSurvivalDiseaseControl() as ISurvivalDiseaseControlQuestionnaireReponse, author: authorReference, subject:subjectReference}
    return (
        <Formik initialValues={init} onSubmit={(values) => onSubmit && onSubmit(values)}>
            {({
                values,
                handleSubmit,
                handleReset,
                /* and other goodies */
            }) => (
                <FormContainer title={title} hideTitle={hideTitle} handleSubmit={handleSubmit} handleClear={handleReset}>
                    <>
                        <label
                            htmlFor="item[0].answer[0].valueBoolean"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Patient died
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field
                                type="checkbox"
                                name="item[0].answer[0].valueBoolean"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[1].answer[0].valueDate"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of death
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="date" name="item[1].answer[0].valueDate" className="field" />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[2].answer[0].valueBoolean"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Death attributable to localized prostate cancer
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="checkbox" name="item[2].answer[0].valueBoolean" className="checkbox" />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[3].answer[0].valueBoolean"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Metastasis
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="checkbox" name="item[3].answer[0].valueBoolean" className="checkbox" />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[4].answer[0].valueDate"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of metastasis
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="date" name="item[4].answer[0].valueDate" className="field" />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[5].answer[0].valueBoolean"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Biochemical recurrence
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="checkbox" name="item[5].answer[0].valueBoolean" className="checkbox" />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[6].answer[0].valueDate"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Date of biochemical recurrence:
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="date" name="item[6].answer[0].valueDate" className="field" />
                        </div>
                    </>
                    <>
                        <label
                            htmlFor="item[7].answer[0].valueQuantity.value"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            PSA at biochemical recurrence
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                <Field
                                    name="item[7].answer[0].valueQuantity.value"
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    placeholder="0.00"
                                    className="field hide-arrows placeholder-gray-300"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm bg-white">{values.item[7].answer[0].valueQuantity.unit}</span>
                                </div>
                            </div>
                        </div>
                    </>
                </FormContainer>
            )}
        </Formik >
    )
}