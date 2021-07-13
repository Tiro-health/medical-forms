/// <reference types="react" />
import { IQuestionnaire } from "./types-2048d93c";
import { IQuestionnaireProps, TiroQuestionnaireResponse } from "./Questionnaire-467ff968";
declare const questionnaires: readonly ["http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1", "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1", "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1"];
type TiroQuestionnaireCanonical = typeof questionnaires[number];
declare const getQuestionnaireIDs: () => readonly ["http://tiro.health/fhir/Questionnaire/ichom-lpc-baseline-tumor-factors|0.1", "http://tiro.health/fhir/Questionnaire/ichom-lpc-pathology-info|0.1", "http://tiro.health/fhir/Questionnaire/ichom-lpc-treatment-variables|0.1"];
interface TiroQuestionnaire extends IQuestionnaire {
    id: TiroQuestionnaireCanonical;
    title: string;
}
declare const getQuestionnaire: (id: TiroQuestionnaireCanonical) => IQuestionnaire;
declare const DynamicQuestionnaire: ({ questionnaire, ...props }: IQuestionnaireProps<TiroQuestionnaireResponse> & {
    questionnaire: TiroQuestionnaireCanonical;
}) => JSX.Element;
export { questionnaires, TiroQuestionnaireCanonical, getQuestionnaireIDs, TiroQuestionnaire, getQuestionnaire, DynamicQuestionnaire };
