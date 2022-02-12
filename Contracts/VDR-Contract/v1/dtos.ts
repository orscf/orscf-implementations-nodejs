/* based on ORSCF VisitData Contract v1.7.0.11747 */

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
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetApiVersion' (String)
  public return : string;
  
}

/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'VdrEventSubscription',
 * 'VisitConsume',
 * 'VisitSubmission',
 * 'VisitHL7Export',
 * 'VisitHL7Import',
 * 'DataRecordingSubmission'
 */
export class GetCapabilitiesRequest {
  
}

/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'VdrEventSubscription',
 * 'VisitConsume',
 * 'VisitSubmission',
 * 'VisitHL7Export',
 * 'VisitHL7Import',
 * 'DataRecordingSubmission'
 */
export class GetCapabilitiesResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetCapabilities' (String[])
  public return : string[];
  
}

/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:VisitDataConsume") and/or
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
 * Method: returns a list of available capabilities ("API:VisitDataConsume") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesResponse {
  
  // Out-Argument of 'GetPermittedAuthScopes' (number)
  public authState : number;
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetPermittedAuthScopes' (String[])
  public return : string[];
  
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
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetOAuthTokenRequestUrl' (String)
  public return : string;
  
}

/**
 * Contains arguments for calling 'SubscribeForChangedVisits'.
 * Method: Creates a subscription for changes which are affecting Visits.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedVisits'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export class SubscribeForChangedVisitsRequest {
  
  // Required Argument for 'SubscribeForChangedVisits' (string): the root-url of the subscriber which needs to provide at least the methods '/ConfirmAsSubscriber' and '/NoticeChangedVisits'
  public subscriberUrl : string;
  
  // Optional Argument for 'SubscribeForChangedVisits' (Models.VisitFilter): if provided, the subscription will only publish events for records matching to the given filter
  public filter? : Models.VisitFilter;
  
}

/**
 * Contains results from calling 'SubscribeForChangedVisits'.
 * Method: Creates a subscription for changes which are affecting Visits.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedVisits'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export class SubscribeForChangedVisitsResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'SubscribeForChangedVisits' (Guid)
  public return : string;
  
}

/**
 * Contains arguments for calling 'NoticeChangedVisits'.
 * Method: Receives notifications about changes which are affecting Visits.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export class NoticeChangedVisitsRequest {
  
  // Required Argument for 'NoticeChangedVisits' (string): a UUID which identifies the current event message
  public eventUid : string;
  
  // Required Argument for 'NoticeChangedVisits' (string): a SHA256 Hash of SubscriptionSecret + EventUid (in lower string representation, without '-' characters!) Sample: SHA256('ThEs3Cr3T'+'c997dfb1c445fea84afe995307713b59') = 'a320ef5b0f563e8dcb16d759961739977afc98b90628d9dc3be519fb20701490'
  public eventSignature : string;
  
  // Required Argument for 'NoticeChangedVisits' (string): a UUID which identifies the subscription for which this event is published
  public subscriptionUid : string;
  
  // Required Argument for 'NoticeChangedVisits' (string): root-URL of the VDR-Service which is publishing this event
  public publisherUrl : string;
  
  // Required Argument for 'NoticeChangedVisits' (Models.VisitMetaRecord[])
  public createdRecords : Models.VisitMetaRecord[];
  
  // Required Argument for 'NoticeChangedVisits' (Models.VisitMetaRecord[])
  public modifiedRecords : Models.VisitMetaRecord[];
  
  // Required Argument for 'NoticeChangedVisits' (Models.VisitMetaRecord[])
  public archivedRecords : Models.VisitMetaRecord[];
  
}

/**
 * Contains results from calling 'NoticeChangedVisits'.
 * Method: Receives notifications about changes which are affecting Visits.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export class NoticeChangedVisitsResponse {
  
  // Out-Argument of 'NoticeChangedVisits' (boolean): an array, which contains one element per changed visit
  public terminateSubscription : boolean;
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
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
  
  // Required Argument for 'ConfirmAsSubscriber' (string): root-URL of the VDR-Service on which the subscription was requested
  public publisherUrl : string;
  
  // Required Argument for 'ConfirmAsSubscriber' (string): the Uid of the subscription which should be confirmed
  public subscriptionUid : string;
  
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
  
  // Out-Argument of 'ConfirmAsSubscriber' (string): A secret which is generated by the subscriber and used to provide additional security. It will be required for the 'TerminateSubscription' method and it is used to generate SHA256 hashes for signing the delivered event messages. The secret should: have a minimum length of 32 characters. A null or empty string has the semantics that the subscriber refuses to confirm and cancels the subscription setup.
  public secret : string;
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export class TerminateSubscriptionRequest {
  
  // Required Argument for 'TerminateSubscription' (string): the Uid of the subscription which should be terminated
  public subscriptionUid : string;
  
  // Required Argument for 'TerminateSubscription' (string): the (same) secret, which was given by the subscriber during the subscription setup
  public secret : string;
  
}

/**
 * Contains results from calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export class TerminateSubscriptionResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'TerminateSubscription' (Boolean)
  public return : boolean;
  
}

/**
 * Contains arguments for calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export class GetSubsriptionsBySubscriberUrlRequest {
  
  // Required Argument for 'GetSubsriptionsBySubscriberUrl' (string)
  public subscriberUrl : string;
  
  // Required Argument for 'GetSubsriptionsBySubscriberUrl' (string): the (same) secret, which was given by the subscriber during the subscription setup
  public secret : string;
  
}

/**
 * Contains results from calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export class GetSubsriptionsBySubscriberUrlResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetSubsriptionsBySubscriberUrl' (Guid[])
  public return : string[];
  
}

/**
 * Contains arguments for calling 'ImportDataRecordings'.
 */
export class ImportDataRecordingsRequest {
  
  // Required Argument for 'ImportDataRecordings' (Models.DataRecordingStructure[])
  public dataRecordings : Models.DataRecordingStructure[];
  
}

/**
 * Contains results from calling 'ImportDataRecordings'.
 */
export class ImportDataRecordingsResponse {
  
  // Out-Argument of 'ImportDataRecordings' (string[])
  public createdDataRecordingUids : string[];
  
  // Out-Argument of 'ImportDataRecordings' (string[])
  public updatedDataRecordingUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'SearchVisits'.
 * Method: Searches Visits by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of VisitUids for the matching records.
 */
export class SearchVisitsRequest {
  
  // Optional Argument for 'SearchVisits' (string): A fieldname, which should be used to sort the result (can also be a 'CustomField'). If not provided, the result will be sorted by the creation date of the records
  public sortingField? : string;
  
  // Optional Argument for 'SearchVisits' (boolean): toggles the sorting direction
  public sortDescending? : boolean = null;
  
  // Optional Argument for 'SearchVisits' (Models.VisitFilter): values by field name (can also be a 'CustomField') which will used as AND-linked filter
  public filter? : Models.VisitFilter;
  
  // Optional Argument for 'SearchVisits' (boolean): includes archived records in the result
  public includeArchivedRecords? : boolean = null;
  
  // Optional Argument for 'SearchVisits' (number): a value greather than zero will represent a maximum count of results, that sould be returned
  public limitResults? : number = null;
  
}

/**
 * Contains results from calling 'SearchVisits'.
 * Method: Searches Visits by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of VisitUids for the matching records.
 */
export class SearchVisitsResponse {
  
  // Out-Argument of 'SearchVisits' (Models.VisitMetaRecord[])
  public result : Models.VisitMetaRecord[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'SearchChangedVisits'.
 * Method: Searches Visits which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export class SearchChangedVisitsRequest {
  
  // Required Argument for 'SearchChangedVisits' (number): start of the timespan to search (as UNIX-Timestamp)
  public minTimestampUtc : number;
  
  // Optional Argument for 'SearchChangedVisits' (Models.VisitFilter): values by field name (can also be a 'CustomField') which will used as AND-linked filter
  public filter? : Models.VisitFilter;
  
}

/**
 * Contains results from calling 'SearchChangedVisits'.
 * Method: Searches Visits which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export class SearchChangedVisitsResponse {
  
  // Out-Argument of 'SearchChangedVisits' (number): the exact timestamp of the search (as UNIX-Timestamp)
  public latestTimestampUtc : number;
  
  // Out-Argument of 'SearchChangedVisits' (Models.VisitMetaRecord[])
  public createdRecords : Models.VisitMetaRecord[];
  
  // Out-Argument of 'SearchChangedVisits' (Models.VisitMetaRecord[])
  public modifiedRecords : Models.VisitMetaRecord[];
  
  // Out-Argument of 'SearchChangedVisits' (Models.VisitMetaRecord[])
  public archivedRecords : Models.VisitMetaRecord[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'GetCustomFieldDescriptorsForVisit'.
 */
export class GetCustomFieldDescriptorsForVisitRequest {
  
  // Optional Argument for 'GetCustomFieldDescriptorsForVisit' (string): Preferred language for the 'DisplayLabel' and 'InputDescription' fields of the returned descriptors. The default is 'EN'.
  public languagePref? : string;
  
}

/**
 * Contains results from calling 'GetCustomFieldDescriptorsForVisit'.
 */
export class GetCustomFieldDescriptorsForVisitResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetCustomFieldDescriptorsForVisit' (CustomFieldDescriptor[])
  public return : Models.CustomFieldDescriptor[];
  
}

/**
 * Contains arguments for calling 'CheckVisitExisitence'.
 * Method: Checks the existence of 'Visits' for a given list of visitUids
 */
export class CheckVisitExisitenceRequest {
  
  // Required Argument for 'CheckVisitExisitence' (string[])
  public visitUids : string[];
  
}

/**
 * Contains results from calling 'CheckVisitExisitence'.
 * Method: Checks the existence of 'Visits' for a given list of visitUids
 */
export class CheckVisitExisitenceResponse {
  
  // Out-Argument of 'CheckVisitExisitence' (string[])
  public unavailableVisitUids : string[];
  
  // Out-Argument of 'CheckVisitExisitence' (string[])
  public availableVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'GetVisitFields'.
 * Method: loads the requested visits and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export class GetVisitFieldsRequest {
  
  // Required Argument for 'GetVisitFields' (string[])
  public visitUids : string[];
  
}

/**
 * Contains results from calling 'GetVisitFields'.
 * Method: loads the requested visits and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export class GetVisitFieldsResponse {
  
  // Out-Argument of 'GetVisitFields' (string[])
  public unavailableVisitUids : string[];
  
  // Out-Argument of 'GetVisitFields' (Models.VisitFields[])
  public result : Models.VisitFields[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'ExportVisits'.
 * Method: exports full 'VisitStructures'
 */
export class ExportVisitsRequest {
  
  // Required Argument for 'ExportVisits' (string[])
  public visitUids : string[];
  
}

/**
 * Contains results from calling 'ExportVisits'.
 * Method: exports full 'VisitStructures'
 */
export class ExportVisitsResponse {
  
  // Out-Argument of 'ExportVisits' (string[])
  public unavailableVisitUids : string[];
  
  // Out-Argument of 'ExportVisits' (Models.VisitStructure[])
  public result : Models.VisitStructure[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'ExportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ExportVisitFhirRessourcesRequest {
  
  // Required Argument for 'ExportVisitFhirRessources' (string)
  public visitUid : string;
  
}

/**
 * Contains results from calling 'ExportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ExportVisitFhirRessourcesResponse {
  
  // Out-Argument of 'ExportVisitFhirRessources' (Models.VisitFhirRessourceContainer[])
  public visitFhirRessources : Models.VisitFhirRessourceContainer[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'ExportVisitFhirRessources' (Boolean)
  public return : boolean;
  
}

/**
 * Contains arguments for calling 'ImportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ImportVisitFhirRessourcesRequest {
  
  // Required Argument for 'ImportVisitFhirRessources' (Models.VisitFhirRessourceContainer[]): A structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
  public visitFhirRessources : Models.VisitFhirRessourceContainer[];
  
}

/**
 * Contains results from calling 'ImportVisitFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export class ImportVisitFhirRessourcesResponse {
  
  // Out-Argument of 'ImportVisitFhirRessources' (string[])
  public createdVisitUids : string[];
  
  // Out-Argument of 'ImportVisitFhirRessources' (string[])
  public updatedVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'ArchiveVisits'.
 */
export class ArchiveVisitsRequest {
  
  // Required Argument for 'ArchiveVisits' (string[])
  public visitUids : string[];
  
}

/**
 * Contains results from calling 'ArchiveVisits'.
 */
export class ArchiveVisitsResponse {
  
  // Out-Argument of 'ArchiveVisits' (string[]): also including the Uids of already archived records
  public archivedVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'UnarchiveVisits'.
 */
export class UnarchiveVisitsRequest {
  
  // Required Argument for 'UnarchiveVisits' (string[])
  public visitUids : string[];
  
}

/**
 * Contains results from calling 'UnarchiveVisits'.
 */
export class UnarchiveVisitsResponse {
  
  // Out-Argument of 'UnarchiveVisits' (string[])
  public unarchivedVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'ApplyVisitMutations'.
 */
export class ApplyVisitMutationsRequest {
  
  // Required Argument for 'ApplyVisitMutations' (Object)
  public mutationsByVisitUid : Object;
  
}

/**
 * Contains results from calling 'ApplyVisitMutations'.
 */
export class ApplyVisitMutationsResponse {
  
  // Out-Argument of 'ApplyVisitMutations' (string[])
  public updatedVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'ApplyVisitBatchMutation'.
 */
export class ApplyVisitBatchMutationRequest {
  
  // Required Argument for 'ApplyVisitBatchMutation' (string[])
  public visitUids : string[];
  
  // Required Argument for 'ApplyVisitBatchMutation' (Models.BatchableVisitMutation)
  public mutation : Models.BatchableVisitMutation;
  
}

/**
 * Contains results from calling 'ApplyVisitBatchMutation'.
 */
export class ApplyVisitBatchMutationResponse {
  
  // Out-Argument of 'ApplyVisitBatchMutation' (string[])
  public updatedVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}

/**
 * Contains arguments for calling 'ImportVisits'.
 */
export class ImportVisitsRequest {
  
  // Required Argument for 'ImportVisits' (Models.VisitStructure[])
  public visits : Models.VisitStructure[];
  
}

/**
 * Contains results from calling 'ImportVisits'.
 */
export class ImportVisitsResponse {
  
  // Out-Argument of 'ImportVisits' (string[])
  public createdVisitUids : string[];
  
  // Out-Argument of 'ImportVisits' (string[])
  public updatedVisitUids : string[];
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
}
