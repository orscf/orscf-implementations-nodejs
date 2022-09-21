/* based on ORSCF SubjectData Contract v1.9.1.11838 */

import * as Models from './models';

/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export class GetApiVersionRequest {
  
}

/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export class GetApiVersionResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetApiVersion' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'SdrEventSubscription',
 * 'SubjectConsume',
 * 'SubjectSubmission',
 * 'SubjectHL7Export'
 * 'SubjectHL7Import'
 */
export class GetCapabilitiesRequest {
  
}

/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'SdrEventSubscription',
 * 'SubjectConsume',
 * 'SubjectSubmission',
 * 'SubjectHL7Export'
 * 'SubjectHL7Import'
 */
export class GetCapabilitiesResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetCapabilities' (String[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:SubjectOverview") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesRequest {
  
}

/**
 * Contains results from calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:SubjectOverview") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesResponse {
  
  /** Out-Argument of 'GetPermittedAuthScopes' (number) */
  public authState: number = 0;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetPermittedAuthScopes' (String[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export class GetOAuthTokenRequestUrlRequest {
  
}

/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export class GetOAuthTokenRequestUrlResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetOAuthTokenRequestUrl' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'SubscribeForChangedSubjects'.
 * Method: Creates a subscription for changes which are affecting Subjects.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedSubjects'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export class SubscribeForChangedSubjectsRequest {
  
  /** Required Argument for 'SubscribeForChangedSubjects' (string): the root-url of the subscriber which needs to provide at least the methods '/ConfirmAsSubscriber' and '/NoticeChangedSubjects' */
  public subscriberUrl: string = '';
  
  /** Optional Argument for 'SubscribeForChangedSubjects' (Models.SubjectFilter): if provided, the subscription will only publish events for records matching to the given filter */
  public filter?: Models.SubjectFilter;
  
}

/**
 * Contains results from calling 'SubscribeForChangedSubjects'.
 * Method: Creates a subscription for changes which are affecting Subjects.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedSubjects'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export class SubscribeForChangedSubjectsResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'SubscribeForChangedSubjects' (Guid) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'NoticeChangedSubjects'.
 * Method: Receives notifications about changes which are affecting Subjects.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export class NoticeChangedSubjectsRequest {
  
  /** Required Argument for 'NoticeChangedSubjects' (string): a UUID which identifies the current event message */
  public eventUid: string = '';
  
  /** Required Argument for 'NoticeChangedSubjects' (string): a SHA256 Hash of SubscriptionSecret + EventUid (in lower string representation, without '-' characters!) Sample: SHA256('ThEs3Cr3T'+'c997dfb1c445fea84afe995307713b59') = 'a320ef5b0f563e8dcb16d759961739977afc98b90628d9dc3be519fb20701490' */
  public eventSignature: string = '';
  
  /** Required Argument for 'NoticeChangedSubjects' (string): a UUID which identifies the subscription for which this event is published */
  public subscriptionUid: string = '';
  
  /** Required Argument for 'NoticeChangedSubjects' (string): root-URL of the VDR-Service which is publishing this event */
  public publisherUrl: string = '';
  
  /** Required Argument for 'NoticeChangedSubjects' (Models.SubjectMetaRecord[]): an array, which contains one element per changed record */
  public createdRecords: Models.SubjectMetaRecord[] = [];
  
  /** Required Argument for 'NoticeChangedSubjects' (Models.SubjectMetaRecord[]): an array, which contains one element per modified record */
  public modifiedRecords: Models.SubjectMetaRecord[] = [];
  
  /** Required Argument for 'NoticeChangedSubjects' (Models.SubjectMetaRecord[]): an array, which contains one element per archived record */
  public archivedRecords: Models.SubjectMetaRecord[] = [];
  
}

/**
 * Contains results from calling 'NoticeChangedSubjects'.
 * Method: Receives notifications about changes which are affecting Subjects.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export class NoticeChangedSubjectsResponse {
  
  /** Out-Argument of 'NoticeChangedSubjects' (boolean): an array, which contains one element per changed record */
  public terminateSubscription: boolean = false;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export class ConfirmAsSubscriberRequest {
  
  /** Required Argument for 'ConfirmAsSubscriber' (string): root-URL of the VDR-Service on which the subscription was requested */
  public publisherUrl: string = '';
  
  /** Required Argument for 'ConfirmAsSubscriber' (string): the Uid of the subscription which should be confirmed */
  public subscriptionUid: string = '';
  
}

/**
 * Contains results from calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export class ConfirmAsSubscriberResponse {
  
  /** Out-Argument of 'ConfirmAsSubscriber' (string): A secret which is generated by the subscriber and used to provide additional security. It will be required for the 'TerminateSubscription' method and it is used to generate SHA256 hashes for signing the delivered event messages. The secret should: have a minimum length of 32 characters. A null or empty string has the semantics that the subscriber refuses to confirm and cancels the subscription setup. */
  public secret: string = '';
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export class TerminateSubscriptionRequest {
  
  /** Required Argument for 'TerminateSubscription' (string): the Uid of the subscription which should be terminated */
  public subscriptionUid: string = '';
  
  /** Required Argument for 'TerminateSubscription' (string): the (same) secret, which was given by the subscriber during the subscription setup */
  public secret: string = '';
  
}

/**
 * Contains results from calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export class TerminateSubscriptionResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'TerminateSubscription' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export class GetSubsriptionsBySubscriberUrlRequest {
  
  /** Required Argument for 'GetSubsriptionsBySubscriberUrl' (string) */
  public subscriberUrl: string = '';
  
  /** Required Argument for 'GetSubsriptionsBySubscriberUrl' (string): the (same) secret, which was given by the subscriber during the subscription setup */
  public secret: string = '';
  
}

/**
 * Contains results from calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export class GetSubsriptionsBySubscriberUrlResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetSubsriptionsBySubscriberUrl' (Guid[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'SearchSubjects'.
 * Method: Searches Subjects by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of SubjectUids for the matching records.
 */
export class SearchSubjectsRequest {
  
  /** Optional Argument for 'SearchSubjects' (string): A fieldname, which should be used to sort the result (can also be a 'CustomField'). If not provided, the result will be sorted by the creation date of the records */
  public sortingField?: string;
  
  /** Optional Argument for 'SearchSubjects' (boolean): toggles the sorting direction */
  public sortDescending?: boolean;
  
  /** Optional Argument for 'SearchSubjects' (Models.SubjectFilter): values by field name (can also be a 'CustomField') which will used as AND-linked filter */
  public filter?: Models.SubjectFilter;
  
  /** Optional Argument for 'SearchSubjects' (boolean): includes archived records in the result */
  public includeArchivedRecords?: boolean;
  
  /** Optional Argument for 'SearchSubjects' (number): a value greather than zero will represent a maximum count of results, that sould be returned */
  public limitResults?: number;
  
}

/**
 * Contains results from calling 'SearchSubjects'.
 * Method: Searches Subjects by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of SubjectUids for the matching records.
 */
export class SearchSubjectsResponse {
  
  /** Out-Argument of 'SearchSubjects' (Models.SubjectMetaRecord[]) */
  public result: Models.SubjectMetaRecord[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'SearchChangedSubjects'.
 * Method: Searches Subjects which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export class SearchChangedSubjectsRequest {
  
  /** Required Argument for 'SearchChangedSubjects' (number): start of the timespan to search (as UNIX-Timestamp) */
  public minTimestampUtc: number = 0;
  
  /** Optional Argument for 'SearchChangedSubjects' (Models.SubjectFilter): values by field name (can also be a 'CustomField') which will used as AND-linked filter */
  public filter?: Models.SubjectFilter;
  
}

/**
 * Contains results from calling 'SearchChangedSubjects'.
 * Method: Searches Subjects which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export class SearchChangedSubjectsResponse {
  
  /** Out-Argument of 'SearchChangedSubjects' (number): the exact timestamp of the search (as UNIX-Timestamp) */
  public latestTimestampUtc: number = 0;
  
  /** Out-Argument of 'SearchChangedSubjects' (Models.SubjectMetaRecord[]) */
  public createdRecords: Models.SubjectMetaRecord[] = [];
  
  /** Out-Argument of 'SearchChangedSubjects' (Models.SubjectMetaRecord[]) */
  public modifiedRecords: Models.SubjectMetaRecord[] = [];
  
  /** Out-Argument of 'SearchChangedSubjects' (Models.SubjectMetaRecord[]) */
  public archivedRecords: Models.SubjectMetaRecord[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'GetCustomFieldDescriptorsForSubject'.
 */
export class GetCustomFieldDescriptorsForSubjectRequest {
  
  /** Optional Argument for 'GetCustomFieldDescriptorsForSubject' (string): Preferred language for the 'DisplayLabel' and 'InputDescription' fields of the returned descriptors. The default is 'EN'. */
  public languagePref?: string;
  
}

/**
 * Contains results from calling 'GetCustomFieldDescriptorsForSubject'.
 */
export class GetCustomFieldDescriptorsForSubjectResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetCustomFieldDescriptorsForSubject' (CustomFieldDescriptor[]) */
  public return?: Models.CustomFieldDescriptor[];
  
}

/**
 * Contains arguments for calling 'CheckSubjectExisitence'.
 * Method: Checks the existence of 'Subjects' for a given list of subjectUids
 */
export class CheckSubjectExisitenceRequest {
  
  /** Required Argument for 'CheckSubjectExisitence' (string[]) */
  public subjectUids: string[] = [];
  
}

/**
 * Contains results from calling 'CheckSubjectExisitence'.
 * Method: Checks the existence of 'Subjects' for a given list of subjectUids
 */
export class CheckSubjectExisitenceResponse {
  
  /** Out-Argument of 'CheckSubjectExisitence' (string[]) */
  public unavailableSubjectUids: string[] = [];
  
  /** Out-Argument of 'CheckSubjectExisitence' (string[]) */
  public availableSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'GetSubjectFields'.
 * Method: loads the requested Subjects and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export class GetSubjectFieldsRequest {
  
  /** Required Argument for 'GetSubjectFields' (string[]) */
  public subjectUids: string[] = [];
  
}

/**
 * Contains results from calling 'GetSubjectFields'.
 * Method: loads the requested Subjects and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export class GetSubjectFieldsResponse {
  
  /** Out-Argument of 'GetSubjectFields' (string[]) */
  public unavailableSubjectUids: string[] = [];
  
  /** Out-Argument of 'GetSubjectFields' (Models.SubjectFields[]) */
  public result: Models.SubjectFields[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ExportSubjects'.
 * Method: exports full 'SubjectStructures'
 */
export class ExportSubjectsRequest {
  
  /** Required Argument for 'ExportSubjects' (string[]) */
  public subjectUids: string[] = [];
  
}

/**
 * Contains results from calling 'ExportSubjects'.
 * Method: exports full 'SubjectStructures'
 */
export class ExportSubjectsResponse {
  
  /** Out-Argument of 'ExportSubjects' (string[]) */
  public unavailableSubjectUids: string[] = [];
  
  /** Out-Argument of 'ExportSubjects' (Models.SubjectStructure[]) */
  public result: Models.SubjectStructure[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ExportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ExportSubjectFhirRessourcesRequest {
  
  /** Required Argument for 'ExportSubjectFhirRessources' (string) */
  public subjectUid: string = '';
  
}

/**
 * Contains results from calling 'ExportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ExportSubjectFhirRessourcesResponse {
  
  /** Out-Argument of 'ExportSubjectFhirRessources' (Models.SubjectFhirRessourceContainer[]) */
  public subjectFhirRessources: Models.SubjectFhirRessourceContainer[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'ExportSubjectFhirRessources' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'ImportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ImportSubjectFhirRessourcesRequest {
  
  /** Required Argument for 'ImportSubjectFhirRessources' (Models.SubjectFhirRessourceContainer[]): A structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record. */
  public subjectFhirRessources: Models.SubjectFhirRessourceContainer[] = [];
  
}

/**
 * Contains results from calling 'ImportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ImportSubjectFhirRessourcesResponse {
  
  /** Out-Argument of 'ImportSubjectFhirRessources' (string[]) */
  public createdSubjectUids: string[] = [];
  
  /** Out-Argument of 'ImportSubjectFhirRessources' (string[]) */
  public updatedSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ArchiveSubjects'.
 */
export class ArchiveSubjectsRequest {
  
  /** Required Argument for 'ArchiveSubjects' (string[]) */
  public subjectUids: string[] = [];
  
}

/**
 * Contains results from calling 'ArchiveSubjects'.
 */
export class ArchiveSubjectsResponse {
  
  /** Out-Argument of 'ArchiveSubjects' (string[]): also including the Uids of already archived records */
  public archivedSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'UnarchiveSubjects'.
 */
export class UnarchiveSubjectsRequest {
  
  /** Required Argument for 'UnarchiveSubjects' (string[]) */
  public subjectUids: string[] = [];
  
}

/**
 * Contains results from calling 'UnarchiveSubjects'.
 */
export class UnarchiveSubjectsResponse {
  
  /** Out-Argument of 'UnarchiveSubjects' (string[]) */
  public unarchivedSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ApplySubjectMutations'.
 */
export class ApplySubjectMutationsRequest {
  
  /** Required Argument for 'ApplySubjectMutations' (Object) */
  public mutationsBySubjecttUid: Object = new Object();
  
}

/**
 * Contains results from calling 'ApplySubjectMutations'.
 */
export class ApplySubjectMutationsResponse {
  
  /** Out-Argument of 'ApplySubjectMutations' (string[]) */
  public updatedSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ApplySubjectBatchMutation'.
 */
export class ApplySubjectBatchMutationRequest {
  
  /** Required Argument for 'ApplySubjectBatchMutation' (string[]) */
  public subjectUids: string[] = [];
  
  /** Required Argument for 'ApplySubjectBatchMutation' (Models.BatchableSubjectMutation) */
  public mutation: Models.BatchableSubjectMutation = new Models.BatchableSubjectMutation();
  
}

/**
 * Contains results from calling 'ApplySubjectBatchMutation'.
 */
export class ApplySubjectBatchMutationResponse {
  
  /** Out-Argument of 'ApplySubjectBatchMutation' (string[]) */
  public updatedSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ImportSubjects'.
 */
export class ImportSubjectsRequest {
  
  /** Required Argument for 'ImportSubjects' (Models.SubjectStructure[]) */
  public subjects: Models.SubjectStructure[] = [];
  
}

/**
 * Contains results from calling 'ImportSubjects'.
 */
export class ImportSubjectsResponse {
  
  /** Out-Argument of 'ImportSubjects' (string[]) */
  public createdSubjectUids: string[] = [];
  
  /** Out-Argument of 'ImportSubjects' (string[]) */
  public updatedSubjectUids: string[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}
