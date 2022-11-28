import { IPatientReference, IPractitionerReference, IQuestionnaireResponseItem, IIdentifier } from "FHIR/types";

export interface IAbstractQuestionnaireResponse<QId, QR extends IQuestionnaireResponseItem[] = IQuestionnaireResponseItem[]> {
    resourceType: "QuestionnaireResponse"
    subject?: IPatientReference
    author?: IPractitionerReference
    identifier?: IIdentifier
    questionnaire: QId
    item: QR
}