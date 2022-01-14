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
                                        name={name}
                                        value={value}
                                        type="radio"
                                        className="radio"
                                    />
                                    <label htmlFor={name} className="ml-3 block text-sm font-medium text-gray-700">
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
        <Formik initialValues={init} onSubmit={(values) => onSubmit && onSubmit(values)} validate={createFormikValidatorFromStruct(PatientReportedHealthStatusQuestionnaireResponseModel)}>
            <FormikContainer title={title} hideTitle={hideTitle} disabled={disabled}>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Over the past 4 weeks, how often have you leaked urine?"
                        answerOptions={{
                            "More than once a day": "1",
                            "About once a day": "2",
                            "More than once a week": "3",
                            "About once a week": "4",
                            "Rarely or never": "5"
                        }}
                        name="item[0].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Which of the following best describes your urinary control during the last 4 weeks"
                        answerOptions={{
                            "No urinary control whatsoever": "1",
                            "Frequent dribbling": "2",
                            "Occassional dribbling": "3",
                            "Total control": "4",
                        }}
                        name="item[1].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="How many pads or adult diapers per day did you usually use to control during the last 4 weeks"
                        answerOptions={{
                            "None": "0",
                            "1 pad per day": "1",
                            "2 pads per day": "2",
                            "3 or more pads per day": "3",
                        }}
                        name="item[2].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
                        <h6>How big a problem, if any, has the following been for you during the last 4 weeks?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Dripping or leaking urine?"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[3].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Pain or burining on urination"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[4].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Bleeding with urination"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[5].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Weak urine stream or incomplete emptying"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[6].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Need to urinate frequently during the day "
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[7].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Overall, how big a problem has your urinary function been for you during the last 4 weeks?"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[8].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
                        <h6>How big a problem, if any, has the following been for you?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Urgency to have a bowel movement"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[9].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Increased frequency of bowel movements"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[10].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Losing control of your stools"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[11].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Bloody stools"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[12].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Overall, how big a problem have your bowel habits been for you during the last 4 weeks?"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[13].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
                        <h6>How would you rate the follwing during th elast 4 weeks</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Your ability to have an erection?"
                        answerOptions={{
                            "Very poor to none": "1",
                            "Poor": "2",
                            "Fair": "3",
                        }}
                        name="item[14].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Your ability to reach orgasm (climax)?"
                        answerOptions={{
                            "Very poor to none": "1",
                            "Poor": "2",
                            "Fair": "3",
                            "Good": "4",
                            "Very good": "5"
                        }}
                        name="item[13].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="How would you describe the usual QUALITY of your erections during the last 4 weeks? "
                        answerOptions={{
                            "None at all": "1",
                            "Not firm enought for any sexual activity": "2",
                            "Firm enough for mastrubtation and foreplay only": "3",
                            "Firm enough for intercourse": "4"
                        }}
                        name="item[14].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="How would you describe the FREQUENCY of your erections during the last 4?"
                        answerOptions={{
                            "I NEVER had an erection when I wanted one": "1",
                            "I had an erection LESS THAN HALF the time I wanted one": "2",
                            "I had an erection ABOUT HALF the time I wanted one": "3",
                            "I had an erection MORE THAN HALF the time I wanted one": "4",
                            "I had an erection WHENEVER I wanted one": "5"
                        }}
                        name="item[15].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Overall, how would you rate your ability to function sexually during the last 4 weeks?"
                        answerOptions={{
                            "Very poor to none": "1",
                            "Poor": "2",
                            "Fair": "3",
                            "Good": "4",
                            "Very good": "5"
                        }}
                        name="item[16].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Overall, how big a problem has your sexual function or lack of sexual function been for you during the last 4 weeks? "
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[17].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
                        <h6>How big a problem during the last 4 weeks, if any, has the following been for you?</h6>
                    </div>
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Hot flashes"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[18].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Breast tenderness/enlargement"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[19].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Feeling depressed"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[20].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Lack of energy"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[21].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Change in body weight"
                        answerOptions={{
                            "No problem": "0",
                            "Very small problem": "1",
                            "Small problem": "2",
                            "Moderate problem": "3",
                            "Big problem": "4"
                        }}
                        name="item[22].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="During the last 4 weeks, to what extent were you interested in sex?"
                        answerOptions={{
                            "Not at all": "0",
                            "A little": "1",
                            "Quite a bit": "2",
                            "Very much": "3",
                        }}
                        name="item[23].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <MultipleChoiceQuestion
                        question="Have you used any medications or devices to aid or improve erections? "
                        answerOptions={{
                            "No": "0",
                            "Yes": "1",
                        }}
                        name="item[24].answer[0].valueInteger"
                    />
                </QuestionWrapper>
                <QuestionWrapper>
                    <div className="mt-4">
                        <h6>How big a problem during the last 4 weeks, if any, has the following been for you?</h6>
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
                            "It helped and I use it always": "4"
                        }}
                        name="item[25].answer[0].valueInteger"
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
                            "It helped and I use it always": "4"
                        }}
                        name="item[26].answer[0].valueInteger"
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
                            "It helped and I use it always": "4"
                        }}
                        name="item[27].answer[0].valueInteger"
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
                            "It helped and I use it always": "4"
                        }}
                        name="item[28].answer[0].valueInteger"
                    />
                </QuestionWrapper>
            </FormikContainer>
        </Formik>
    )
}

