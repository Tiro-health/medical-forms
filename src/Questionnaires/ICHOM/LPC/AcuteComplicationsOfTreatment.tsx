import { Label } from "Base/Label"
import { IAnswerValueBoolean, IAnswerValueCoding, IAnswerValueInteger, IAnswerValueString, IReference } from "FHIR/types"
import { Field, Formik } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import React from "react"
import { FormContainer } from "./FormContainer"

export interface IAcuteComplicationsOfTreatmentQuestionnaireResponse extends TiroQuestionnaireResponse {
    resourceType: "QuestionnaireResponse"
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1"
    item: [
        { linkId: "COMPLSURG", answer: [IAnswerValueInteger] },
        { linkId: "COMPLRAD", answer: [IAnswerValueBoolean] },
        { linkId: "COMPLRADDOMGRA", answer: [IAnswerValueCoding] },
        { linkId: "COMPLRADDOMOTHER", answer: [IAnswerValueString] },
    ]
}

export const initAcuteComplicationsOfTreatment = (): IAcuteComplicationsOfTreatmentQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1",
    item: [
        { linkId: "COMPLSURG", answer: [{ valueInteger: 0 }] },
        { linkId: "COMPLRAD", answer: [{ valueBoolean: false }] },
        { linkId: "COMPLRADDOMGRA", answer: [{ valueCoding: undefined }] },
        { linkId: "COMPLRADDOMOTHER", answer: [{ valueString: "" }] }
    ]
})

export const AcuteComplicationsOfTreatment = ({ author, subject, onSubmit, title = "Acute Complications of Treatment", hideTitle, initQuestionnaireResponse }: IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>) => {
    const authorReference = typeof author  === "string" ? {identifier: {value: author}} as IReference : author
    const subjectReference  = typeof subject === "string" ? {identifier: {value: subject}} as IReference : subject
    const init = {...initQuestionnaireResponse ?? initAcuteComplicationsOfTreatment() as IAcuteComplicationsOfTreatmentQuestionnaireResponse, author:authorReference, subject:subjectReference}
    return (
        <Formik initialValues={init} onSubmit={(values) => onSubmit && onSubmit(values)}>
            {({
                handleSubmit,
                handleReset,
            }) => (
                <FormContainer title={title} hideTitle={hideTitle} handleSubmit={handleSubmit} handleClear={handleReset}>
                    <>
                        <div>
                            <div
                                className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                            >
                                Clavien complication (maximum grade)
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <p className="text-sm text-gray-500">Indicate whether patient experienced a Clavien grade III-V complication </p>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <Field
                                            name="item[0].answer[0].valueInteger"
                                            value="0"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="item[0].answer[0].valueInteger" className="ml-3 block text-sm font-medium text-gray-700">
                                            no
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <Field
                                            name="item[0].answer[0].valueInteger"
                                            value="1"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="item[0].answer[0].valueInteger" className="ml-3 block text-sm font-medium text-gray-700">
                                            yes, grade 3
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <Field
                                            name="item[0].answer[0].valueInteger"
                                            value="2"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="item[0].answer[0].valueInteger" className="ml-3 block text-sm font-medium text-gray-700">
                                            yes, grade 4
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    <>
                        <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            CTCAE grade 3 or 4 complication during treatment or within 6 months after completing treatment
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                            <Field type="checkbox" name="item[1].answer[0].valueBoolean" className="checkbox" />
                        </div>
                    </>
                    <>
                        <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            If yes, note domain and grade
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-1">
                            <Field type="checkbox" name="item[2].answer[0].valueBoolean" className="checkbox" />
                        </div>
                        <div className="mt-1 sm:mt-0 sm:col-span-1">
                            <Field type="checkbox" name="item[2].answer[0].valueBoolean" className="checkbox" />
                        </div>
                    </>
                </FormContainer>
            )}
        </Formik >
    )
}