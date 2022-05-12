import React from "react"
import { AnswerValueIntegerModel, createSingleValuedQuestionnaireResponseItemModel, PractitionerReferenceModel, PatientReferenceModel, IPatientReference, IPractitionerReference } from "FHIR/types"
import { Field, Formik } from "formik"
import { initQuestionnaireResponse, IQuestionnaireProps } from "Questionnaires/QuestionnaireResponse"
import { FormikContainer } from "./FormContainer"
import { Infer, literal, object, optional, tuple } from "superstruct"
import { createFormikValidatorFromStruct } from "util/createFormikValidatorFromStruct"
import { QuestionWrapper } from "./QuestionWrapper"

export const PatientReportedHealthStatusQuestionnaireResponseModel = object({
    resourceType: literal("QuestionnaireResponse"),
    subject: optional(PatientReferenceModel),
    author: optional(PractitionerReferenceModel),
    questionnaire: literal("http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1"),
    item: tuple([
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q01", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q02", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q03", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q04a", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q04b", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q04c", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q04d", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q04e", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q05", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q06a", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q06b", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q06c", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q07", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q08a", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q08b", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q09", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q10", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q11", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q12", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q13a", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q13b", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q13c", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q13d", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("EPIC26_Q13e", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q01", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q02", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q03a", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q03b", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q03c", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q03d", AnswerValueIntegerModel),
        createSingleValuedQuestionnaireResponseItemModel("LIBID_Q03e", AnswerValueIntegerModel)
    ])
})

export type IPatientReportedHealthStatusQuestionnaireResponse = Infer<typeof PatientReportedHealthStatusQuestionnaireResponseModel>

export const initPatientReportedHealthStatus = (): IPatientReportedHealthStatusQuestionnaireResponse => ({
    ...initQuestionnaireResponse(),
    questionnaire: "http://tiro.health/fhir/Questionnaire/ichom-lpc-patient-reported-health-status|0.1",
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
        { linkId: "LIBID_Q01", answer: [{ valueInteger: undefined }] },
        { linkId: "LIBID_Q02", answer: [{ valueInteger: undefined }] },
        { linkId: "LIBID_Q03a", answer: [{ valueInteger: undefined }] },
        { linkId: "LIBID_Q03b", answer: [{ valueInteger: undefined }] },
        { linkId: "LIBID_Q03c", answer: [{ valueInteger: undefined }] },
        { linkId: "LIBID_Q03d", answer: [{ valueInteger: undefined }] },
        { linkId: "LIBID_Q03e", answer: [{ valueInteger: undefined }] },
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

export const PatientReportedHealthStatus = ({ initQuestionnaireResponse, onSubmit, disabled, title = "Patient-Reported Health Status", hideTitle, author, subject }: IQuestionnaireProps<IPatientReportedHealthStatusQuestionnaireResponse>) => {
    const authorReference = typeof author === "string" ? { identifier: { value: author }, type: "Practitioner" } as IPractitionerReference : author
    const subjectReference = typeof subject === "string" ? { identifier: { value: subject }, type: "Patient" } as IPatientReference : subject
    const init = { ...initQuestionnaireResponse ?? initPatientReportedHealthStatus(), author: authorReference, subject: subjectReference }
    return (
        <Formik initialValues={init} onSubmit={(values) => onSubmit && onSubmit(values)}>
            <FormikContainer title={title} hideTitle={hideTitle} disabled={disabled}>
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
                        name="item[0].answer[0].valueInteger"
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
                        name="item[1].answer[0].valueInteger"
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
                        name="item[2].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
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
                        name="item[3].answer[0].valueInteger"
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
                        name="item[4].answer[0].valueInteger"
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
                        name="item[5].answer[0].valueInteger"
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
                        name="item[6].answer[0].valueInteger"
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
                        name="item[7].answer[0].valueInteger"
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
                        name="item[8].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
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
                        name="item[9].answer[0].valueInteger"
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
                        name="item[10].answer[0].valueInteger"
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
                        name="item[11].answer[0].valueInteger"
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
                        name="item[12].answer[0].valueInteger"
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
                        name="item[13].answer[0].valueInteger"
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
                        name="item[14].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
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
                        name="item[15].answer[0].valueInteger"
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
                        name="item[16].answer[0].valueInteger"
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
                        name="item[17].answer[0].valueInteger"
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
                        name="item[18].answer[0].valueInteger"
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
                        name="item[19].answer[0].valueInteger"
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
                        name="item[20].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
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
                        name="item[21].answer[0].valueInteger"
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
                        name="item[22].answer[0].valueInteger"
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
                        name="item[23].answer[0].valueInteger"
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
                        name="item[24].answer[0].valueInteger"
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
                        name="item[25].answer[0].valueInteger"
                    />
                </QuestionWrapper>
            </FormikContainer>
        </Formik>
    )
}

