import { IAnswerValueBoolean, IAnswerValueInteger, IAnswerValueString, IReference } from "FHIR/types"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { Field, Formik, FormikHelpers } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import React, { useMemo } from "react"
import { create, object } from "superstruct"
import { FormikContainer } from "../FormContainer"
import { QuestionWrapper } from "../QuestionWrapper"
import { modelRecord } from "./consts"

const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-acute-complications-of-treatment|0.1"

type AcuteComplicationsOfTreatmentField = keyof typeof modelRecord
type AcuteComplicationsOfTreatmentRecord = Record<AcuteComplicationsOfTreatmentField, any>

export interface IAcuteComplicationsOfTreatmentQuestionnaireResponse extends TiroQuestionnaireResponse {
    resourceType: "QuestionnaireResponse"
    questionnaire: typeof QUESTIONNAIRE_ID
    item: [
        { linkId: "COMPLSURG", answer: [IAnswerValueInteger] },
        { linkId: "COMPLRAD", answer: [IAnswerValueBoolean] },
        { linkId: "COMPLRADDOMGRA", answer: IAnswerValueInteger[] },
        { linkId: "COMPLRADDOMOTHER", answer: [IAnswerValueString] },
    ]
}

export const initAcuteComplicationsOfTreatment = (): IAcuteComplicationsOfTreatmentQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: QUESTIONNAIRE_ID,
    item: [
        { linkId: "COMPLSURG", answer: [{ valueInteger: 0 }] },
        { linkId: "COMPLRAD", answer: [{ valueBoolean: false }] },
        { linkId: "COMPLRADDOMGRA", answer: [] },
        { linkId: "COMPLRADDOMOTHER", answer: [{ valueString: "" }] }
    ]
})

const initAcuteComplicationsOfTreatmentRecord = () => {
    const record = convertQRItemsToRecord(initAcuteComplicationsOfTreatment().item)
    return record as AcuteComplicationsOfTreatmentRecord
}
export const AcuteComplicationsOfTreatment = ({ author, subject, onSubmit, title = "Acute Complications of Treatment", hideTitle, disabled, initQuestionnaireResponse }: IQuestionnaireProps<IAcuteComplicationsOfTreatmentQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject
    const handleSubmit = (values: AcuteComplicationsOfTreatmentRecord, helpers: FormikHelpers<AcuteComplicationsOfTreatmentRecord>) => {
        console.debug("📥 Received AcuteComplicationsOfTreatment form values:", values)
        const qr: IAcuteComplicationsOfTreatmentQuestionnaireResponse = {
            ...initAcuteComplicationsOfTreatment(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" }
        }
        // coerce values to correct types
        const record = create(values, object(modelRecord))
        console.log("✅ AcuteComplicationsOfTreatment form is valid")
        qr.item = convertRecordToQRItems(record) as IAcuteComplicationsOfTreatmentQuestionnaireResponse["item"]
        console.debug(" ⚙️️ Converted AcuteComplicationsOfTreatment to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        let values: AcuteComplicationsOfTreatmentRecord = initAcuteComplicationsOfTreatmentRecord()
        if (initQuestionnaireResponse) {
            values = convertQRItemsToRecord(initQuestionnaireResponse.item) as AcuteComplicationsOfTreatmentRecord
        }
        console.debug("📤 initialValues", values)
        return values
    },
        [initQuestionnaireResponse, initAcuteComplicationsOfTreatment])

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values }) => (
                <FormikContainer title={title} hideTitle={hideTitle} disabled={disabled}>
                    <QuestionWrapper>
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
                                            id="COMPLSURG-0"
                                            name="COMPLSURG"
                                            value="0"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="COMPLSURG-0" className="ml-3 block text-sm font-medium text-gray-700">
                                            no
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <Field
                                            id="COMPLSURG-1"
                                            name="COMPLSURG"
                                            value="1"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="COMPLSURG-1" className="ml-3 block text-sm font-medium text-gray-700">
                                            yes, grade 3
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <Field
                                            id="COMPLSURG-2"
                                            name="COMPLSURG"
                                            value="2"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="COMPLSURG-2" className="ml-3 block text-sm font-medium text-gray-700">
                                            yes, grade 4
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </QuestionWrapper>
                    <QuestionWrapper>
                        <div>
                            <label className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700">
                                CTCAE grade 3 or 4 complication during treatment or within 6 months after completing treatment
                            </label>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <p className="text-sm text-gray-500">Indicate whether the patient experienced a CTCAE grade 3 or 4 complication during treatment with radiation therapy or within the first 6 months following the completion of radiation therapy</p>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <Field
                                            id="COMPLRAD-1"
                                            name="COMPLRAD"
                                            value="1"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="COMPLRAD-1" className="ml-3 block text-sm font-medium text-gray-700">
                                            yes
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <Field
                                            id="COMPLRAD-0"
                                            name="COMPLRAD"
                                            value="0"
                                            type="radio"
                                            className="radio"
                                        />
                                        <label htmlFor="COMPLRAD-0" className="ml-3 block text-sm font-medium text-gray-700">
                                            no
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </QuestionWrapper>
                    {values.COMPLRAD === "1" && (
                        <QuestionWrapper>
                            <legend className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                If yes, note domain and grade
                            </legend>
                            <div className="mt-1 sm:mt-0 sm:col-span-1">
                                <table>
                                    <thead>
                                        <tr>
                                            <td width="25%"></td>
                                            <th>Grade 3</th>
                                            <th>Grade 4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Fatigue
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="1"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="2"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Dermatitis
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="3"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="4"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Diarrhea
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="5"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="6"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Abdominal pain
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="7"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="8"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Rectal muscositis
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="9"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="10"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Prosctitis grade
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="11"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="12"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Hot flashes grade
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="13"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="14"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Cystitis non-infective
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="15"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="16"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                Urinary retention grace
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="17"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="18"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label>
                                                    Other, please fill in
                                                </label>
                                                <Field name="COMPLRADDOMOTHER" type="text" className="border border-gray-200 rounded-md" />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="19"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    name="COMPLRADDOMGRA"
                                                    value="20"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </QuestionWrapper>)}
                </FormikContainer>
            )}
        </Formik >
    )
}