import { IReference, IPatientReference, IPractitionerReference, IQuestionnaireResponseItem } from "FHIR/types"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
import { Field, Formik, FormikHelpers } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse"
import React, { useMemo } from "react"
import { create, object } from "superstruct"
import { FormikContainer } from "../FormContainer"
import _ from "lodash"
import { modelRecord } from "./consts"
import { QuestionWrapper } from "../QuestionWrapper"
import { IAbsractQuestionnaireResponse } from "../types"
const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-factors|0.1"

type PatientFactorsField = keyof typeof modelRecord
type PatientFactorsRecord = Record<PatientFactorsField, string>

export interface IPatientFactorsQuestionnaireResponse extends IAbsractQuestionnaireResponse<typeof QUESTIONNAIRE_ID> {
    resourceType: "QuestionnaireResponse"
    subject?: IPatientReference
    author?: IPractitionerReference
    questionnaire: typeof QUESTIONNAIRE_ID
    item: IQuestionnaireResponseItem[]
}

export const initPatientFactors = (): IPatientFactorsQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: QUESTIONNAIRE_ID,
    item: [
        { linkId: "AGE", answer: [{ valueDate: undefined }] },
        { linkId: "COMORB", answer: [] },
    ]
})

const initPatientFactorsRecord = () => {
    const record: Partial<PatientFactorsRecord> = {}
    Object.keys(modelRecord).forEach((k) => { record[k as keyof PatientFactorsRecord] = "" })
    return record as PatientFactorsRecord
}

export const PatientFactors = ({ author, subject, onSubmit, hideTitle, disabled, title = "Patient Tumor Factors", initQuestionnaireResponse }: IQuestionnaireProps<IPatientFactorsQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject

    const handleSubmit = (values: PatientFactorsRecord, helpers: FormikHelpers<PatientFactorsRecord>) => {
        console.debug("📥 Received PatientFactors form values:", values)
        const qr: IPatientFactorsQuestionnaireResponse = {
            ...initPatientFactors(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" }
        }
        const record = create(values, object(modelRecord))
        console.log("✅ PatientFactors form is valid")
        qr.item = convertRecordToQRItems(record) as IPatientFactorsQuestionnaireResponse["item"]
        console.debug(" ⚙️️ Converted PatientFactors to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        let values: PatientFactorsRecord = initPatientFactorsRecord()
        if (initQuestionnaireResponse)
            values = convertQRItemsToRecord(initQuestionnaireResponse.item) as PatientFactorsRecord
        console.debug("📤 initialValues", values)
        return values
    },
        [initQuestionnaireResponse, initPatientFactorsRecord])
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            <FormikContainer id={QUESTIONNAIRE_ID} title={title} hideTitle={hideTitle} disabled={disabled}>
                <QuestionWrapper>
                    <label
                        htmlFor="AGE"
                        className="block sm:text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                        Wat is jouw geboortedatum?
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                        <div className="mt-1 relative rounded-md w-full shadow-sm">
                            <Field
                                id="AGE"
                                name="AGE"
                                type="date"
                                placeholder="dd/mm/yyyy"
                                required
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md hide-arrows placeholder-gray-300 disabled:bg-gray-50"
                            />
                        </div>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <div>
                        <div
                            className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                        >
                            Heeft een arts verteld dat u één van volgende aandoeningen heeft?
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="mt-4 space-y-4">
                            {["Ik heb geen andere ziekten", "Hart ziekte (bijvoorbeeld angina, hartaanval of hartfalen)", "Hoge bloeddruk", "Pijn aan het been tijdens het lopen door een slechte bloedsomloop", "Longziekte (bijvoorbeeld astma, chronische bronchitis of emfyseem", "Diabetes", "Nierziekte"].map((label, index) => (
                                <div className="flex items-center">
                                    <Field
                                        id={`COMORB-${index}`}
                                        name="COMORB"
                                        value={`${index}`}
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                    <label htmlFor={`COMORB-${index}`} className="ml-3 block text-sm font-medium text-gray-700">
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </QuestionWrapper>
            </FormikContainer>
        </Formik >
    )
}