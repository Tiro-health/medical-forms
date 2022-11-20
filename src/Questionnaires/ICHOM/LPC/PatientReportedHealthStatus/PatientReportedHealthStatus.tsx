import React, { useMemo } from "react"
import { IPatientReference, IPractitionerReference, IQuestionnaireResponse, IQuestionnaireResponseItem } from "FHIR/types"
import { Field, Formik, FormikHelpers } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps } from "Questionnaires/QuestionnaireResponse"
import { FormikContainer } from "../FormContainer"
import { QuestionWrapper } from "../QuestionWrapper"
import { modelRecord } from "./consts"
import { create, object } from "superstruct"
import { convertQRItemsToRecord, convertRecordToQRItems } from "FHIR/validate"
const QUESTIONNAIRE_ID = "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1"

type PatientReportedHealthStatusField = keyof typeof modelRecord
type PatientReportedhealthStatusRecord = Record<PatientReportedHealthStatusField, string | string[]>


export interface IPatientReportedHealthStatusQuestionnaireResponse extends IQuestionnaireResponse {
    resourceType: "QuestionnaireResponse"
    subject?: IPatientReference
    author?: IPractitionerReference
    questionnaire: typeof QUESTIONNAIRE_ID
    item: IQuestionnaireResponseItem[]
}

export const initPatientReportedHealthStatus = (): IPatientReportedHealthStatusQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: QUESTIONNAIRE_ID,
    item: [
        { linkId: "EPIC26_Q01", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q02", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q03", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q04a", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q04b", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q04c", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q04d", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q04e", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q05", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q06a", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q06b", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q06c", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q06d", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q06e", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q07", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q08a", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q08b", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q09", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q10", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q11", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q12", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q13a", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q13b", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q13c", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q13d", answer: [{ valueInteger: undefined }] },
        { linkId: "EPIC26_Q13e", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q01", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q02", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q03a", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q03b", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q03c", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q03d", answer: [{ valueInteger: undefined }] },
        // { linkId: "LIBID_Q03e", answer: [{ valueInteger: undefined }] },
    ]
})
const MultipleChoiceQuestion = ({ question, extraInfo, answerOptions, name }: { question: string, extraInfo?: string, answerOptions: { [label: string]: string }, name: string }) => {
    return (
        <>
            <div>
                <div
                    className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                >
                    {question}
                </div>
            </div>
            <div className="sm:col-span-2" >
                <div className="max-w-lg">
                    {extraInfo && (<p className="text-sm text-gray-500">{extraInfo}</p>)}
                    <div className="mt-4 space-y-4">
                        {Object.entries(answerOptions).map(
                            ([text, value]) => (
                                <div className="flex items-center" key={text}>
                                    <Field
                                        id={`${name}-${value}`}
                                        name={name}
                                        value={value}
                                        type="radio"
                                        className="radio"
                                    />
                                    <label htmlFor={`${name}-${value}`} className="ml-3 block text-sm font-medium text-gray-700">
                                        {text}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
const initPatientReportedHealthStatusRecord = (): PatientReportedhealthStatusRecord => {
    const record = {} as PatientReportedhealthStatusRecord
    Object.keys(modelRecord).forEach(key => { record[key as keyof PatientReportedhealthStatusRecord] = "" })
    return record as PatientReportedhealthStatusRecord
}

export const PatientReportedHealthStatus = ({ initQuestionnaireResponse, onSubmit, disabled, title = "Patient-Reported Health Status", hideTitle, author, subject }: IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author }, type: "Practitioner" } as IPractitionerReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject }, type: "Patient" } as IPatientReference : subject
    const handleSubmit = (values: PatientReportedhealthStatusRecord, helpers: FormikHelpers<PatientReportedhealthStatusRecord>) => {
        console.debug("📥 Received TreatmentVariables form values:", values)
        const qr: IPatientReportedHealthStatusQuestionnaireResponse = {
            ...initPatientReportedHealthStatus(),
            author: authorReference && { ...authorReference, type: "Practitioner" },
            subject: subjectReference && { ...subjectReference, type: "Patient" },
        }
        const record = create(values, object(modelRecord))
        console.log("✅ TreatmentVariables form is valid")
        qr.item = convertRecordToQRItems(record) as IPatientReportedHealthStatusQuestionnaireResponse["item"]
        console.debug(" ⚙️️ Converted TreatmentVariables to a FHIR QuestionnaireReponse", qr)
        onSubmit && onSubmit(qr)
        helpers.resetForm({ values })
    } // onSubmit(values)
    const initialValues = useMemo(() => {
        let values: PatientReportedhealthStatusRecord = initPatientReportedHealthStatusRecord()
        if (initQuestionnaireResponse) {
            values = convertQRItemsToRecord(initQuestionnaireResponse.item) as PatientReportedhealthStatusRecord
        }
        console.debug("📤 initialValues", values)
        return values
    }, [initQuestionnaireResponse, initPatientReportedHealthStatusRecord])
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <FormikContainer id={QUESTIONNAIRE_ID} title={title} hideTitle={hideTitle} disabled={disabled}>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Hoe vaak verloor u, in de afgelopen 4 weken, urine zonder dat u dat wilde?"
                        answerOptions={{
                            "Meer dan één keer per dag": "1",
                            "Ongeveer één keer per dag": "2",
                            "Meer dan één keer per week": "3",
                            "Ongeveer één keer per week": "4",
                            "Zelden of nooit": "5"
                        }}
                        name="EPIC26_Q01"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Hoe goed kon u, in de afgelopen 4 weken, de urine ophouden?"
                        answerOptions={{
                            "Kon de urine helemaal niet ophouden": "1",
                            "Vaak ongewild verlies van druppels urine": "2",
                            "Af en toe ongewild verlies van druppels urine": "3",
                            "Geen ongewild urineverlies": "4",
                        }}
                        name="EPIC26_Q02"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="In de afgelopen 4 weken, hoeveel verbanden of luiers gebruikte u per dag om ongewild urineverlies op
                        te vangen?"
                        answerOptions={{
                            "Geen": "0",
                            "1 verband per dag": "1",
                            "2 verband per dag": "2",
                            "3 of meer verbanden per dag": "3",
                        }}
                        name="EPIC26_Q03"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4 col-span-full">
                        <h6>In hoeverre heeft u de volgende plasklachten, in de afgelopen 4 weken, als een probleem ervaren?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Ongewild urineverlies"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q04a"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Pijn of branderig gevoel bij het plassen"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q04b"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Bloed bij de urine"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q04c"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Slappe straal of niet goed uitplassen"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q04d"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Vaak plassen overdag"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q04e"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Alles overziend, in hoeverre heeft u het plassen en eventueel ongewild urineverlies als een probleem
                        ervaren, in de afgelopen 4 weken?"
                        answerOptions={{
                            "Geen probleem": "1",
                            "Zeer klein probleem": "2",
                            "Klein probleem": "3",
                            "Nogal een probleem": "4",
                            "Groot probleem": "5"
                        }}
                        name="EPIC26_Q05"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4 col-span-full">
                        <h6>In hoeverre heeft u de volgende ontlastingsklachten, in de afgelopen 4 weken, als een probleem
                            ervaren?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Loze aandrang, zonder dat er iets kwam"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q06a"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Vaker ontlasting"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q06b"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Verlies van ontlasting"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q06c"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Bloed bij de ontlasting"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q06d"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Pijn in de buik of het rectum"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q06e"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Alles overziend, in hoeverre heeft u de ontlasting (stoelgang) als een probleem ervaren, in de afgelopen
                        4 weken?"
                        answerOptions={{
                            "Geen probleem": "1",
                            "Zeer klein probleem": "2",
                            "Klein probleem": "3",
                            "Nogal een probleem": "4",
                            "Groot probleem": "5"
                        }}
                        name="EPIC26_Q07"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4 col-span-full">
                        <h6>In de afgelopen 4 weken, hoe zou u voor uzelf de volgende zaken beoordelen?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Uw vermogen om een erectie te krijgen"
                        answerOptions={{
                            "Zeer slecht tot geen": "0",
                            "Slecht": "1",
                            "Redelijk": "2",
                            "Goed": "3",
                            "Zeer goed": "4"
                        }}
                        name="EPIC26_Q08a"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Uw vermogen om een orgasme te krijgen"
                        answerOptions={{
                            "Zeer slecht tot geen": "0",
                            "Slecht": "1",
                            "Redelijk": "2",
                            "Goed": "3",
                            "Zeer goed": "4"
                        }}
                        name="EPIC26_Q08b"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Hoe zou u de kwaliteit van uw erecties omschrijven in de afgelopen 4 weken?"
                        answerOptions={{
                            "Helemaal geen": "1",
                            "Niet stevig genoeg vor enige seksuele activiteit": "2",
                            "Alleen stevig genoeg voor masturbatie en voorspel": "3",
                            "Stevig genoeg voor gemeenschap": "4"
                        }}
                        name="EPIC26_Q9"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="In de afgelopen 4 weken, hoe vaak had u een erectie wanneer u dat wenste?"
                        answerOptions={{
                            "Ik had nooit een erectie wanneer ik dat wenste": "1",
                            "Ik had een erectie minder dan de helft van de keren": "2",
                            "Ik had een erectie ongeveer de helft van de keren": "3",
                            "Ik had een erectie meer dan de helft van de keren": "4",
                            "Ik had altijd een erectie wanneer ik dat wenste": "5"
                        }}
                        name="EPIC26_Q10"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Over het geheel, hoe zou u uw seksuele functioneren omschrijven in de afgelopen 4 weken?"
                        answerOptions={{
                            "Zeer slecht": "1",
                            "Slecht": "2",
                            "Redelijk": "3",
                            "Goed": "4",
                            "Zeer goed": "5"
                        }}
                        name="EPIC26_Q11"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Alles overziend, heeft u uw seksueel functioneren in de afgelopen 4 weken als een probleem ervaren?"
                        answerOptions={{
                            "Geen probleem": "1",
                            "Zeer klein probleem": "2",
                            "Klein probleem": "3",
                            "Nogal een probleem": "4",
                            "Groot probleem": "5"
                        }}
                        name="EPIC26_Q12"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4 col-span-full">
                        <h6>In hoeverre heeft u, in de afgelopen 4 weken, de volgende zaken als een probleem ervaren?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Opvliegers"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q13a"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Borstverandering/gevoeligheid"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q13b"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Sombere buien"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q13c"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Gebrek aan energie"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q13d"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Gewichtsverandering"
                        answerOptions={{
                            "Geen probleem": "0",
                            "Zeer klein probleem": "1",
                            "Klein probleem": "2",
                            "Nogal een probleem": "3",
                            "Groot probleem": "4"
                        }}
                        name="EPIC26_Q13e"
                    />
                </QuestionWrapper>
                {/**<QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="During the last 4 weeks, to what extent were you interested in sex?"
                        answerOptions={{
                            "Not at all": "0",
                            "A little": "1",
                            "Quite a bit": "2",
                            "Very much": "3"
                        }}
                        name="LIBID_Q01"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Have you used any medications or devices to aid or improve erections"
                        answerOptions={{
                            "No": "0",
                            "Yes": "1"
                        }}
                        name="LIBID_Q02"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4 col-span-full">
                        <h6>
                            For each of the following medicines or devices, please indicate whether or not you
                            have tried or currently use it to improve your erections
                        </h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Viagra or another pill"
                        answerOptions={{
                            "Have not tried it": "0",
                            "Tried it but was not helpful": "1",
                            "It helped but I am not using it now": "2",
                            "It helped and I use it sometimes": "3",
                            "It helped and I use it always": "4",
                        }}
                        name="LIBID_Q03a"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Muse (intra-urethral alprostadil suppository)"
                        answerOptions={{
                            "Have not tried it": "0",
                            "Tried it but was not helpful": "1",
                            "It helped but I am not using it now": "2",
                            "It helped and I use it sometimes": "3",
                            "It helped and I use it always": "4",
                        }}
                        name="LIBID_Q03b"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Penile injection therapy (such as caverject)"
                        answerOptions={{
                            "Have not tried it": "0",
                            "Tried it but was not helpful": "1",
                            "It helped but I am not using it now": "2",
                            "It helped and I use it sometimes": "3",
                            "It helped and I use it always": "4",
                        }}
                        name="LIBID_Q03c"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Vacuum erection device (such as erect-aid)"
                        answerOptions={{
                            "Have not tried it": "0",
                            "Tried it but was not helpful": "1",
                            "It helped but I am not using it now": "2",
                            "It helped and I use it sometimes": "3",
                            "It helped and I use it always": "4",
                        }}
                        name="LIBID_Q03d"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Other medication/device"
                        answerOptions={{
                            "Have not tried it": "0",
                            "Tried it but was not helpful": "1",
                            "It helped but I am not using it now": "2",
                            "It helped and I use it sometimes": "3",
                            "It helped and I use it always": "4",
                        }}
                        name="LIBID_Q03e"
                    />
                </QuestionWrapper>
                **/}
            </FormikContainer>
        </Formik>
    )
}

