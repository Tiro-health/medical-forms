import React, { useMemo } from "react"
import { IAnswerValueCoding, IAnswerValueDate, IAnswerValueInteger, IAnswerValueQuantity, IAnswerValueString, ICoding, IReference } from "FHIR/types";
import { Field, Formik, FormikHelpers } from "formik";
import { initQuestionnaireResponse, IQuestionnaireProps, TiroQuestionnaireResponse } from "Questionnaires/QuestionnaireResponse";
import { FormikContainer } from "../FormContainer";
import { modelRecord } from "./consts";
import { create, object } from "superstruct";
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate";
import { QuestionWrapper } from "../QuestionWrapper";

const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1"
type TreatmentVariablesField = keyof typeof modelRecord
type TreatmentVariablesRecord = Record<TreatmentVariablesField, string>

export interface ITreatmentVariablesQuestionnaireResponse extends TiroQuestionnaireResponse {
    questionnaire: typeof QUESTIONNAIRE_ID
    item: [
        { linkId: "PRIMARYTX", answer: [IAnswerValueCoding] },
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
        { linkId: "SALVAGETXINI", answer: [IAnswerValueInteger] },
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
        { linkId: "SVBRACHYDOSERATE", answer: [IAnswerValueQuantity] },
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

const initBaselineTumorFactorsRecord = () => {
    const record: Partial<TreatmentVariablesRecord> = {}
    Object.keys(modelRecord).forEach((k) => { record[k as keyof TreatmentVariablesRecord] = "" })
    return record as TreatmentVariablesRecord
}


export const TreatmentVariables = ({ author, subject, onSubmit, title = "Threatment variables", hideTitle, disabled, initQuestionnaireResponse }: IQuestionnaireProps<ITreatmentVariablesQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author } } as IReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject } } as IReference : subject

    const handleSubmit = (values: TreatmentVariablesRecord, helpers: FormikHelpers<TreatmentVariablesRecord>) => {
        const qr: ITreatmentVariablesQuestionnaireResponse = {
            ...initTreatmentVariables(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" }
        }
        const record = create(values, object(modelRecord))
        console.log(record)
        qr.item = convertRecordToQRItems(record) as ITreatmentVariablesQuestionnaireResponse["item"]
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    }
    const initialValues = useMemo(() => {
        if (initQuestionnaireResponse) {
            return convertQRItemsToRecord(initQuestionnaireResponse.item) as TreatmentVariablesRecord
        } else {
            return initBaselineTumorFactorsRecord()
        }
    },
        [initQuestionnaireResponse, initBaselineTumorFactorsRecord])
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
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("6")}
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
                                                            disabled={values.PRIMARYTX === "" || !values.PRIMARYTX.includes("5")}
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
                                <div className="sm:col-span-2 col-start-2" >
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
                                                className="field hide-arrows placeholder-gray-300"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm bg-white">Gray</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-2 col-start-2">
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
                                                type="text"
                                                className="field"
                                            />
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
