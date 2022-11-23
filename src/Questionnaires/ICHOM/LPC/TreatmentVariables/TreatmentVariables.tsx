import React, { useMemo } from "react"
import { IAnswerValueBoolean, IAnswerValueCoding, IAnswerValueDate, IAnswerValueInteger, IAnswerValueQuantity, IAnswerValueString, ICoding, IReference } from "FHIR/types";
import { Field, Formik, FormikHelpers } from "formik";
import { initQuestionnaireResponse, IQuestionnaireProps } from "Questionnaires/QuestionnaireResponse";
import { FormikContainer } from "../FormContainer";
import { modelRecord } from "./consts";
import { create, object } from "superstruct";
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { QuestionWrapper } from "../QuestionWrapper";
import { IAbsractQuestionnaireResponse } from "../types";

const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1"
type TreatmentVariablesField = keyof typeof modelRecord
type TreatmentVariablesRecord = Record<TreatmentVariablesField, string>

export interface ITreatmentVariablesQuestionnaireResponse extends IAbsractQuestionnaireResponse<typeof QUESTIONNAIRE_ID> {
    resourceType: "QuestionnaireResponse"
    questionnaire: typeof QUESTIONNAIRE_ID
    item: [
        { linkId: "PRIMARYTX", answer: [IAnswerValueInteger] },
        { linkId: "PRWATCHDATE", answer: [IAnswerValueDate] },
        { linkId: "PRACTIVEDATE", answer: [IAnswerValueDate] },
        { linkId: "PRRADPROTXDATE", answer: [IAnswerValueDate] },
        { linkId: "PRNERVESPARE", answer: [IAnswerValueInteger] },
        { linkId: "PREBRTTOTDOSE", answer: [IAnswerValueQuantity] },
        { linkId: "PREBRTDOSEPERFRACT", answer: [IAnswerValueQuantity] },
        { linkId: "PREBRTTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "PREBRTTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "PREBRTTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "PRBRACHYTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "PRBRACHYTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "PRBRACHYTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "PRBRACHYDOSERATE", answer: [IAnswerValueInteger] },
        { linkId: "PRADTTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "PRADTTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "PRADTTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "PRIMARYTXFT", answer: [IAnswerValueString] },
        { linkId: "PRFOCTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "PRFOCTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "PRFOCTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "PRIMARYTXOTHER", answer: [IAnswerValueString] },
        { linkId: "PROTHERTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "PROTHERTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "PROTHERTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "SALVAGETXINI", answer: [IAnswerValueBoolean] },
        { linkId: "SALVAGETX", answer: [IAnswerValueInteger] },
        { linkId: "SALVAGETXOTHER", answer: [IAnswerValueString] },
        { linkId: "SVRADPROTXDATE", answer: [IAnswerValueDate] },
        { linkId: "SVNERVESPARE", answer: [IAnswerValueInteger] },
        { linkId: "SVEBRTTOTDOSE", answer: [IAnswerValueQuantity] },
        { linkId: "SVEBRTDOSEPERFRACT", answer: [IAnswerValueQuantity] },
        { linkId: "SVEBRTTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "SVEBRTTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "SVEBRTTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "SVBRACHYTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "SVBRACHYTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "SVBRACHYTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "SVBRACHYDOSERATE", answer: [IAnswerValueInteger] },
        { linkId: "SVADTTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "SVADTTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "SVADTTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "SVFOCTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "SVFOCTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "SVFOCTXONGOING", answer: [IAnswerValueInteger] },
        { linkId: "SVOTHERTXSTARTDATE", answer: [IAnswerValueDate] },
        { linkId: "SVOTHERTXSTOPDATE", answer: [IAnswerValueDate] },
        { linkId: "SVOTHERTXONGOING", answer: [IAnswerValueInteger] },

    ]
}


export const initTreatmentVariables = (): ITreatmentVariablesQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: QUESTIONNAIRE_ID,
    item: [
        { linkId: "PRIMARYTX", answer: [{ valueInteger: undefined }] },
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
        { linkId: "SALVAGETXINI", answer: [{ valueBoolean: undefined }] },
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
        { linkId: "SVBRACHYDOSERATE", answer: [{ valueInteger: undefined }] },
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

const initBaselineTumorFactorsRecord = () => {
    const record: Partial<TreatmentVariablesRecord> = {}
    Object.keys(modelRecord).forEach((k) => { record[k as keyof TreatmentVariablesRecord] = "" })
    return record as TreatmentVariablesRecord
}


export const TreatmentVariables = ({ author, subject, onSubmit, title = "Threatment variables", hideTitle, disabled, initQuestionnaireResponse }: IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject

    const handleSubmit = (values: TreatmentVariablesRecord, helpers: FormikHelpers<TreatmentVariablesRecord>) => {
        console.debug("📥 Received TreatmentVariables form values:", values)
        const qr: ITreatmentVariablesQuestionnaireResponse = {
            ...initTreatmentVariables(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" }
        }
        const record = create(values, object(modelRecord))
        console.log("✅ TreatmentVariables form is valid")
        qr.item = convertRecordToQRItems(record) as ITreatmentVariablesQuestionnaireResponse["item"]
        console.debug(" ⚙️️ Converted TreatmentVariables to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        let values: TreatmentVariablesRecord = initBaselineTumorFactorsRecord()
        if (initQuestionnaireResponse) {
            values = convertQRItemsToRecord(initQuestionnaireResponse.item) as TreatmentVariablesRecord
        }
        console.debug("📤 initialValues", values)
        return values
    },
        [initQuestionnaireResponse, initBaselineTumorFactorsRecord])

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values }) => {
                return (
                    <FormikContainer title={title} hideTitle={hideTitle} disabled={disabled}>
                        <QuestionWrapper>
                            <div className="mt-1 sm:mt-0 col-span-full">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <td width="25%"></td>
                                            <th>
                                                Primary treatment modality?
                                            </th>
                                            <th>
                                                Start - End / Ongoing
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-1">Watchfull waiting</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-1"
                                                    name="PRIMARYTX"
                                                    value="1"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td width="50%">
                                                <Field
                                                    name="PRWATCHDATE"
                                                    type="date"
                                                    className="field"
                                                    disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("1")}
                                                />
                                            </td>
                                        </tr>
                                        <tr className="my-1 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-2">Active surveillance</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-2"
                                                    name="PRIMARYTX"
                                                    value="2"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td width="50%">
                                                <Field
                                                    name="PRACTIVEDATE"
                                                    type="date"
                                                    className="field"
                                                    disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("2")}
                                                />
                                            </td>
                                        </tr>
                                        <tr className="mt-3 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-3">Radical prostatectomy</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-3"
                                                    name="PRIMARYTX"
                                                    value="3"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td width="50%">
                                                <Field
                                                    name="PRRADPROTXDATE"
                                                    type="date"
                                                    className="field"
                                                    disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("3")}
                                                />
                                            </td>
                                        </tr>
                                        <tr className="mt-3 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-4">External beam radiation therapy</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-4"
                                                    name="PRIMARYTX"
                                                    value="4"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td>
                                                <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                    <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                        <Field
                                                            name="PREBRTTXSTARTDATE"
                                                            type="date"
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("4")}

                                                        />
                                                        <div className="mx-3 flex items-center text-lg text-gray-400">
                                                            <span>&rarr;</span>
                                                        </div>
                                                        <Field
                                                            name="PREBRTTXSTOPDATE"
                                                            type="date"
                                                            disabled={values.PREBRTTXONGOING || values.PRIMARYTX === "" || !values.PRIMARYTX.includes("4")}
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                        <Field
                                                            id="PREBRTTXONGOING"
                                                            type="checkbox"
                                                            name="PREBRTTXONGOING"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("4")}
                                                            className="checkbox"
                                                        />
                                                        <label htmlFor="PREBRTTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="mt-3 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-5">Brachytherapy</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-5"
                                                    name="PRIMARYTX"
                                                    value="5"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td>
                                                <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                    <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                        <Field
                                                            name="PRBRACHYTXSTARTDATE"
                                                            type="date"
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("5")}

                                                        />
                                                        <div className="mx-3 flex items-center text-lg text-gray-400">
                                                            <span>&rarr;</span>
                                                        </div>
                                                        <Field
                                                            name="PRBRACHYTXSTOPDATE"
                                                            type="date"
                                                            disabled={values.PRBRACHYTXONGOING || values.PRIMARYTX === "" || !values.PRIMARYTX.includes("5")}
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                        <Field
                                                            type="checkbox"
                                                            id="PRBRACHYTXONGOING"
                                                            name="PRBRACHYTXONGOING"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("5")}
                                                            className="checkbox"
                                                        />
                                                        <label htmlFor="PRBRACHYTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="mt-3 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-6">Androgen Deprivation Therapy</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-6"
                                                    name="PRIMARYTX"
                                                    value="6"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td>
                                                <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                    <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                        <Field
                                                            name="PRADTTXSTARTDATE"
                                                            type="date"
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("6")}

                                                        />
                                                        <div className="mx-3 flex items-center text-lg text-gray-400">
                                                            <span>&rarr;</span>
                                                        </div>
                                                        <Field
                                                            name="PRADTTXSTOPDATE"
                                                            type="date"
                                                            disabled={values.PRADTTXONGOING || values.PRIMARYTX === "" || !values.PRIMARYTX.includes("6")}
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                        <Field
                                                            id="PRADTTXONGOING"
                                                            type="checkbox"
                                                            name="PRADTTXONGOING"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("6")}
                                                            className="checkbox"
                                                        />
                                                        <label htmlFor="PRADTTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="mt-3 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-7">Focal therapy</label>
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-7"
                                                    name="PRIMARYTX"
                                                    value="7"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td>
                                                <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                    <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                        <Field
                                                            name="PRFOCTXSTARTDATE"
                                                            type="date"
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("7")}

                                                        />
                                                        <div className="mx-3 flex items-center text-lg text-gray-400">
                                                            <span>&rarr;</span>
                                                        </div>
                                                        <Field
                                                            name="PRFOCTXSTOPDATE"
                                                            type="date"
                                                            disabled={values.PRFOCTXONGOING || values.PRIMARYTX === "" || !values.PRIMARYTX.includes("7")}
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                        <Field
                                                            type="checkbox"
                                                            id="PRFOCTXONGOING"
                                                            name="PRFOCTXONGOING"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("7")}
                                                            className="checkbox"
                                                        />
                                                        <label htmlFor="PRFOCTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="mt-3 hover:bg-gray-50">
                                            <td className="text-sm font-medium text-gray-700">
                                                <label htmlFor="PRIMARYTX-888">Other</label>
                                                <Field name="PRIMARYTXOTHER" type="text" className="field" />
                                            </td>
                                            <td className="text-center">
                                                <Field
                                                    id="PRIMARYTX-888"
                                                    name="PRIMARYTX"
                                                    value="888"
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                            </td>
                                            <td>
                                                <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                    <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                        <Field
                                                            name="PROTHERTXSTARTDATE"
                                                            type="date"
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("888")}

                                                        />
                                                        <div className="mx-3 flex items-center text-lg text-gray-400">
                                                            <span>&rarr;</span>
                                                        </div>
                                                        <Field
                                                            name="PROTHERTXSTOPDATE"
                                                            type="date"
                                                            disabled={values.PROTHERTXONGOING || values.PRIMARYTX === "" || !values.PRIMARYTX.includes("888")}
                                                            placeholder="dd/mm/yyyy"
                                                            className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                        />
                                                    </div>
                                                    <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                        <Field
                                                            type="checkbox"
                                                            name="PROTHERTXONGOING"
                                                            id="PROTHERTXONGOING"
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("888")}
                                                            className="checkbox"
                                                        />
                                                        <label htmlFor="PROTHERTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </QuestionWrapper>
                        {values.PRIMARYTX !== "" && values.PRIMARYTX.includes("3") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details radical prostectomy</legend>
                                </div>
                                <div className="sm:col-span-2" >
                                    <div className="max-w-lg">
                                        <p className="text-sm text-gray-500">Primary nerve sparing status</p>
                                        <div className="mt-4 space-y-4">
                                            {Object.entries({ "non nerve-sparing": "1", "nerve-sparing": "2" }).map(
                                                ([text, value]) => (
                                                    <div className="flex items-center" key={text}>
                                                        <Field
                                                            id={`PRNERVESPARE-${value}`}
                                                            name="PRNERVESPARE"
                                                            value={value}
                                                            type="radio"
                                                            className="radio"
                                                            required={values.PRIMARYTX.includes("3")}
                                                        />
                                                        <label htmlFor={`PRNERVESPARE-${value}`} className="ml-3 block text-sm font-medium text-gray-700">
                                                            {text}
                                                        </label>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                        {values.PRIMARYTX !== "" && values.PRIMARYTX.includes("4") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details EBRT</legend>
                                </div>
                                <div className="col-start-2 sm:col-start-2 sm:col-span-2" >
                                    <label
                                        htmlFor="PREBRTTOTDOSE"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Primary EBRT dose
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <Field
                                                id="PREBRTTOTDOSE"
                                                name="PREBRTTOTDOSE"
                                                type="number"
                                                min={0}
                                                required={values.PRIMARYTX.includes("4")}
                                                className="field hide-arrows placeholder-gray-300"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm bg-white">Gray</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-start-2 sm:col-start-2 sm:col-span-2">
                                    <label
                                        htmlFor="PREBRTDOSEPERFRACT"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Average dose per fraction
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <Field
                                                id="PREBRTDOSEPERFRACT"
                                                name="PREBRTDOSEPERFRACT"
                                                type="number"
                                                min={0}
                                                className="field hide-arrows placeholder-gray-300"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm bg-white">Gray</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                        {values.PRIMARYTX !== "" && values.PRIMARYTX.includes("5") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details brachytherapy</legend>
                                </div>
                                <div className="sm:col-span-2" >
                                    <div className="max-w-lg">
                                        <p className="text-sm text-gray-500">Primary branchytherapy dose</p>
                                        <div className="mt-4 space-y-4">
                                            {Object.entries({ "low dose": "1", "high dose": "2", "unkown": "999" }).map(
                                                ([text, value]) => (
                                                    <div className="flex items-center" key={text}>
                                                        <Field
                                                            id={`PRBRACHYDOSERATE-${value}`}
                                                            name="PRBRACHYDOSERATE"
                                                            value={value}
                                                            required={values.PRIMARYTX.includes("5")}
                                                            type="radio"
                                                            className="radio"
                                                        />
                                                        <label htmlFor={`PRBRACHYDOSERATE-${value}`} className="ml-3 block text-sm font-medium text-gray-700">
                                                            {text}
                                                        </label>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                        {values.PRIMARYTX !== "" && values.PRIMARYTX.includes("7") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details focal therapy</legend>
                                </div>
                                <div className="sm:col-span-2" >
                                    <div className="max-w-lg">
                                        <p className="text-sm text-gray-500">Indicate the type of focal therapy used for this patient.</p>
                                        <div className="mt-4 space-y-4">
                                            <Field
                                                name="PRIMARYTXFT"
                                                required={values.PRIMARYTX.includes("7")}
                                                type="text"
                                                className="field"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                        <QuestionWrapper>
                            <div>
                                <div
                                    className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                                >
                                    Salvage treatment initiated (within last year?)
                                </div>
                            </div>
                            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                <Field
                                    type="checkbox"
                                    id="SALVAGETXINI"
                                    name="SALVAGETXINI"
                                    className="checkbox"
                                />
                            </div>
                        </QuestionWrapper>
                        {values.SALVAGETXINI && (
                            <QuestionWrapper>
                                <div className="mt-1 sm:mt-0 col-span-full">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <td width="25%"></td>
                                                <th>
                                                    Salvage treatment modality?
                                                </th>
                                                <th>
                                                    Start - End / Ongoing
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="mt-3 hover:bg-gray-50">
                                                <td className="text-sm font-medium text-gray-700">
                                                    <label htmlFor="SALVAGETX-1">Radical prostatectomy</label>
                                                </td>
                                                <td className="text-center">
                                                    <Field
                                                        id="SALVAGETX-1"
                                                        name="SALVAGETX"
                                                        value="1"
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </td>
                                                <td width="50%">
                                                    <Field
                                                        name="SVRADPROTXDATE"
                                                        type="date"
                                                        className="field"
                                                        disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("1")}
                                                    />
                                                </td>
                                            </tr>
                                            <tr className="mt-3 hover:bg-gray-50">
                                                <td className="text-sm font-medium text-gray-700">
                                                    <label htmlFor="SALVAGETX-2">External beam radiation therapy</label>
                                                </td>
                                                <td className="text-center">
                                                    <Field
                                                        id="SALVAGETX-2"
                                                        name="SALVAGETX"
                                                        value="2"
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </td>
                                                <td>
                                                    <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                        <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                            <Field
                                                                name="SVEBRTTXSTARTDATE"
                                                                type="date"
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("2")}

                                                            />
                                                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                                                <span>&rarr;</span>
                                                            </div>
                                                            <Field
                                                                name="SVEBRTTXSTOPDATE"
                                                                type="date"
                                                                disabled={values.SVEBRTTXONGOING || values.SALVAGETX === "" || !values.SALVAGETX.includes("2")}
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                            <Field
                                                                id="SVEBRTTXONGOING"
                                                                type="checkbox"
                                                                name="SVEBRTTXONGOING"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("2")}
                                                                className="checkbox"
                                                            />
                                                            <label htmlFor="SVEBRTTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="mt-3 hover:bg-gray-50">
                                                <td className="text-sm font-medium text-gray-700">
                                                    <label htmlFor="SALVAGETX-3">Brachytherapy</label>
                                                </td>
                                                <td className="text-center">
                                                    <Field
                                                        id="SALVAGETX-3"
                                                        name="SALVAGETX"
                                                        value="3"
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </td>
                                                <td>
                                                    <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                        <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                            <Field
                                                                name="SVBRACHYTXSTARTDATE"
                                                                type="date"
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("3")}

                                                            />
                                                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                                                <span>&rarr;</span>
                                                            </div>
                                                            <Field
                                                                name="SVBRACHYTXSTOPDATE"
                                                                type="date"
                                                                disabled={values.SVBRACHYTXONGOING || values.SALVAGETX === "" || !values.SALVAGETX.includes("3")}
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                            <Field
                                                                type="checkbox"
                                                                id="SVBRACHYTXONGOING"
                                                                name="SVBRACHYTXONGOING"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("3")}
                                                                className="checkbox"
                                                            />
                                                            <label htmlFor="SVBRACHYTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="mt-3 hover:bg-gray-50">
                                                <td className="text-sm font-medium text-gray-700">
                                                    <label htmlFor="SALVAGETX-4">Androgen Deprivation Therapy</label>
                                                </td>
                                                <td className="text-center">
                                                    <Field
                                                        id="SALVAGETX-4"
                                                        name="SALVAGETX"
                                                        value="4"
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </td>
                                                <td>
                                                    <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                        <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                            <Field
                                                                name="SVADTTXSTARTDATE"
                                                                type="date"
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("4")}

                                                            />
                                                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                                                <span>&rarr;</span>
                                                            </div>
                                                            <Field
                                                                name="SVADTTXSTOPDATE"
                                                                type="date"
                                                                disabled={values.SVADTTXONGOING || values.SALVAGETX === "" || !values.SALVAGETX.includes("4")}
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                            <Field
                                                                id="SVADTTXONGOING"
                                                                type="checkbox"
                                                                name="SVADTTXONGOING"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("4")}
                                                                className="checkbox"
                                                            />
                                                            <label htmlFor="SVADTTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="mt-3 hover:bg-gray-50">
                                                <td className="text-sm font-medium text-gray-700">
                                                    <label htmlFor="SALVAGETX-5">Focal therapy</label>
                                                </td>
                                                <td className="text-center">
                                                    <Field
                                                        id="SALVAGETX-5"
                                                        name="SALVAGETX"
                                                        value="5"
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </td>
                                                <td>
                                                    <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                        <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                            <Field
                                                                name="SVFOCTXSTARTDATE"
                                                                type="date"
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("5")}

                                                            />
                                                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                                                <span>&rarr;</span>
                                                            </div>
                                                            <Field
                                                                name="SVFOCTXSTOPDATE"
                                                                type="date"
                                                                disabled={values.SVFOCTXONGOING || values.SALVAGETX === "" || !values.SALVAGETX.includes("5")}
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                            <Field
                                                                type="checkbox"
                                                                id="SVFOCTXONGOING"
                                                                name="SVFOCTXONGOING"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("5")}
                                                                className="checkbox"
                                                            />
                                                            <label htmlFor="SVFOCTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="mt-3 hover:bg-gray-50">
                                                <td className="text-sm font-medium text-gray-700">
                                                    <label htmlFor="SALVAGETX-888">Other</label>
                                                    <Field name="SALVAGETXOTHER" type="text" className="field" />
                                                </td>
                                                <td className="text-center">
                                                    <Field
                                                        id="SALVAGETX-888"
                                                        name="SALVAGETX"
                                                        value="888"
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </td>
                                                <td>
                                                    <div className="mt-1 sm:mt-0 w-full grid gap-2 grid-cols-2 lg:grid-cols-3">
                                                        <div className="col-span-2 mt-1 relative rounded-md w-full flex shadow-sm border border-gray-300 bg-white">
                                                            <Field
                                                                name="SVOTHERTXSTARTDATE"
                                                                type="date"
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("888")}

                                                            />
                                                            <div className="mx-3 flex items-center text-lg text-gray-400">
                                                                <span>&rarr;</span>
                                                            </div>
                                                            <Field
                                                                name="SVOTHERTXSTOPDATE"
                                                                type="date"
                                                                disabled={values.SVOTHERTXONGOING || values.SALVAGETX === "" || !values.SALVAGETX.includes("888")}
                                                                placeholder="dd/mm/yyyy"
                                                                className="focus:ring-blue-500 focus:border-blue-500 block pl-7 w-0.5 flex-1 sm:text-sm border-transparent rounded-md"
                                                            />
                                                        </div>
                                                        <div className="col-span-1 mt-1 self-center relative w-full flex">
                                                            <Field
                                                                type="checkbox"
                                                                name="SVOTHERTXONGOING"
                                                                id="SVOTHERTXONGOING"
                                                                disabled={values.SALVAGETX === "" || !values.SALVAGETX.includes("888")}
                                                                className="checkbox"
                                                            />
                                                            <label htmlFor="SVOTHERTXONGOING" className="ml-3 block text-sm font-medium text-gray-700">ongoing</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </QuestionWrapper>)}
                        {values.SALVAGETX !== "" && values.SALVAGETX.includes("1") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details radical prostectomy</legend>
                                </div>
                                <div className="sm:col-span-2" >
                                    <div className="max-w-lg">
                                        <p className="text-sm text-gray-500">Nerve sparing status</p>
                                        <div className="mt-4 space-y-4">
                                            {Object.entries({ "non nerve-sparing": "1", "nerve-sparing": "2" }).map(
                                                ([text, value]) => (
                                                    <div className="flex items-center" key={text}>
                                                        <Field
                                                            id={`SVNERVESPARE-${value}`}
                                                            name="SVNERVESPARE"
                                                            value={value}
                                                            type="radio"
                                                            className="radio"
                                                            required={values.SALVAGETX.includes("1")}
                                                        />
                                                        <label htmlFor={`SVNERVESPARE-${value}`} className="ml-3 block text-sm font-medium text-gray-700">
                                                            {text}
                                                        </label>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                        {values.SALVAGETX !== "" && values.SALVAGETX.includes("2") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details EBRT</legend>
                                </div>
                                <div className="col-start-2 sm:col-start-2 sm:col-span-2" >
                                    <label
                                        htmlFor="SVEBRTTOTDOSE"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        EBRT dose
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <Field
                                                id="SVEBRTTOTDOSE"
                                                name="SVEBRTTOTDOSE"
                                                type="number"
                                                min={0}
                                                required={values.SALVAGETX.includes("2")}
                                                className="field hide-arrows placeholder-gray-300"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm bg-white">Gray</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-start-2 sm:col-start-2 sm:col-span-2">
                                    <label
                                        htmlFor="SVEBRTDOSEPERFRACT"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Average dose per fraction
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                                        <div className="mt-1 relative rounded-md w-full shadow-sm ">
                                            <Field
                                                id="SVEBRTDOSEPERFRACT"
                                                name="SVEBRTDOSEPERFRACT"
                                                type="number"
                                                min={0}
                                                className="field hide-arrows placeholder-gray-300"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm bg-white">Gray</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                        {values.SALVAGETX !== "" && values.SALVAGETX.includes("3") && (
                            <QuestionWrapper>
                                <div className="col-span-1">
                                    <legend className="block text-base font-semibold text-gray-700 sm:mt-px sm:pt-2">Details brachytherapy</legend>
                                </div>
                                <div className="sm:col-span-2" >
                                    <div className="max-w-lg">
                                        <p className="text-sm text-gray-500">Branchytherapy dose</p>
                                        <div className="mt-4 space-y-4">
                                            {Object.entries({ "low dose": "1", "high dose": "2", "unkown": "999" }).map(
                                                ([text, value]) => (
                                                    <div className="flex items-center" key={text}>
                                                        <Field
                                                            id={`SVBRACHYDOSERATE-${value}`}
                                                            name="SVBRACHYDOSERATE"
                                                            value={value}
                                                            required={values.SALVAGETX.includes("3")}
                                                            type="radio"
                                                            className="radio"
                                                        />
                                                        <label htmlFor={`SVBRACHYDOSERATE-${value}`} className="ml-3 block text-sm font-medium text-gray-700">
                                                            {text}
                                                        </label>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </QuestionWrapper>)}
                    </FormikContainer >
                )
            }}
        </Formik >
    )
}
