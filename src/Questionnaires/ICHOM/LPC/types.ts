import { IPatientReference, IPractitionerReference, IQuestionnaireResponseItem } from "FHIR/types";

export interface IAbsractQuestionnaireResponse<QId, QR extends IQuestionnaireResponseItem[] = IQuestionnaireResponseItem[]> {
    resourceType: "QuestionnaireResponse"
    subject?: IPatientReference
    author?: IPractitionerReference
    questionnaire: QId
    item: QR
}