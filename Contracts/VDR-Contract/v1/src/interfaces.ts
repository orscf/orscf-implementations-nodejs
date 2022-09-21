/* based on ORSCF VisitData Contract v1.9.1.11838 */

import * as Models from './models';

export interface IVdrApiInfoService {
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  GetApiVersion() : Promise<string>;
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'VdrEventSubscription', 'VisitConsume', 'VisitSubmission', 'VisitHL7Export', 'VisitHL7Import', 'DataRecordingSubmission'
   */
  GetCapabilities() : Promise<string[]>;
  
  /**
   * returns a list of available capabilities ("API:VisitDataConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  GetPermittedAuthScopes() : Promise<{authState: number, return: string[]}>;
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  GetOAuthTokenRequestUrl() : Promise<string>;
  
}

export interface IVdrEventSubscriptionService {
  
  /**
   * Creates a subscription for changes which are affecting Visits. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedVisits' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
   *
   * @param subscriberUrl the root-url of the subscriber which needs to provide at least the methods
   '/ConfirmAsSubscriber' and '/NoticeChangedVisits'
   * @param filter if provided, the subscription will only publish events for
   records matching to the given filter
   */
  SubscribeForChangedVisits(subscriberUrl : string, filter? : Models.VisitFilter) : Promise<string>;
  
  /**
   * Receives notifications about changes which are affecting Visits. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   *
   * @param eventUid a UUID which identifies the current event message
   * @param eventSignature a SHA256 Hash of SubscriptionSecret + EventUid
   (in lower string representation, without '-' characters!)
   Sample: SHA256('ThEs3Cr3T'+'c997dfb1c445fea84afe995307713b59')
   = 'a320ef5b0f563e8dcb16d759961739977afc98b90628d9dc3be519fb20701490'
   * @param subscriptionUid a UUID which identifies the subscription for which this event is published
   * @param publisherUrl root-URL of the VDR-Service which is publishing this event
   * @param createdRecords
   * @param modifiedRecords
   * @param archivedRecords
   */
  NoticeChangedVisits(eventUid : string, eventSignature : string, subscriptionUid : string, publisherUrl : string, createdRecords : Models.VisitMetaRecord[], modifiedRecords : Models.VisitMetaRecord[], archivedRecords : Models.VisitMetaRecord[]) : Promise<{terminateSubscription: boolean}>;
  
  /**
   * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   *
   * @param publisherUrl root-URL of the VDR-Service on which the subscription was requested
   * @param subscriptionUid the Uid of the subscription which should be confirmed
   */
  ConfirmAsSubscriber(publisherUrl : string, subscriptionUid : string) : Promise<{secret: string}>;
  
  /**
   * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
   *
   * @param subscriptionUid the Uid of the subscription which should be terminated
   * @param secret the (same) secret, which was given by the subscriber during the subscription setup
   */
  TerminateSubscription(subscriptionUid : string, secret : string) : Promise<boolean>;
  
  /**
   * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
   *
   * @param subscriberUrl
   * @param secret the (same) secret, which was given by the subscriber during the subscription setup
   */
  GetSubsriptionsBySubscriberUrl(subscriberUrl : string, secret : string) : Promise<string[]>;
  
}

export interface IDataEnrollmentService {
  
  /**
   * Enrolls recorded data to be stored as 'DataRecording'-Record related to a explicitly addressed Visit inside of this repository. This goes ahead with an validation process for each enrollment, therefore a dataEnrollmentUid will be returned which can be used to query the state of this process via 'GetValidationState'.
   *
   * @param targetvisitUid the ORSCF-Visit-UID to address the parent visit for which the given data should be submitted
   * @param taskExecutionTitle title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   * @param executionDateTimeUtc the time, when the data was recorded
   * @param dataSchemaKind 'FhirQuestionaire' / 'XML' / 'CSV' / 'Custom'
   * @param dataSchemaUrl the schema-url of the data which were stored inside of the 'RecordedData' field
   * @param dataSchemaVersion version of schema, which is addressed by the 'DataSchemaUrl'
   * @param dataLanguage Language of free-text information inside of the data content
   * @param recordedData RAW data, in the schema as defined at the 'DataSchemaUrl'
   */
  EnrollDataForVisitExplicit(targetvisitUid : string, taskExecutionTitle : string, executionDateTimeUtc : Date, dataSchemaKind : string, dataSchemaUrl : string, dataSchemaVersion : string, dataLanguage : string, recordedData : string) : Promise<string>;
  
  /**
   * Enrolls recorded data to be stored as 'DataRecording'-Record related to a visit inside of this repository (which is implicitely resolved using the given 'visitExecutionTitle' and 'subjectIdentifier') . This goes ahead with an validation process for each enrollment, therefore a dataEnrollmentUid will be returned which can be used to query the state of this process via 'GetValidationState'.
   *
   * @param studyUid the ORSCF-Study-UID which is used to lookup for the target visit for which the given data should be submitted
   * @param subjectIdentifier the study related identity of the patient (usually a pseudonym) which is used to lookup for the target visit for which the given data should be submitted
   * @param visitExecutionTitle unique title of the visit execution as defined in the 'StudyWorkflowDefinition' which is used to lookup for the target visit for which the given data should be submitted
   * @param taskExecutionTitle title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   * @param executionDateTimeUtc the time, when the data was recorded
   * @param dataSchemaKind 'FhirQuestionaire' / 'XML' / 'CSV' / 'Custom'
   * @param dataSchemaUrl the schema-url of the data which were stored inside of the 'RecordedData' field
   * @param dataSchemaVersion version of schema, which is addressed by the 'DataSchemaUrl'
   * @param dataLanguage Language of free-text information inside of the data content
   * @param recordedData RAW data, in the schema as defined at the 'DataSchemaUrl'
   */
  EnrollDataForVisitImplicit(studyUid : string, subjectIdentifier : string, visitExecutionTitle : string, taskExecutionTitle : string, executionDateTimeUtc : Date, dataSchemaKind : string, dataSchemaUrl : string, dataSchemaVersion : string, dataLanguage : string, recordedData : string) : Promise<string>;
  
  /**
   * Providing the current validation state for a given data enrollment process
   *
   * @param dataEnrollmentUid
   */
  GetValidationState(dataEnrollmentUid : string) : Promise<Models.DataEnrollmentValidationState>;
  
}

export interface IDataRecordingSubmissionService {
  
  /**
   * ImportDataRecordings
   *
   * @param dataRecordings
   */
  ImportDataRecordings(dataRecordings : Models.DataRecordingStructure[]) : Promise<{createdDataRecordingUids: string[], updatedDataRecordingUids: string[]}>;
  
}

export interface IVisitConsumeService {
  
  /**
   * Searches Visits by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of VisitUids for the matching records.
   *
   * @param sortingField A fieldname, which should be used to sort the result (can also be a 'CustomField').
   If not provided, the result will be sorted by the creation date of the records
   * @param sortDescending toggles the sorting direction
   * @param filter values by field name (can also be a 'CustomField') which will used as AND-linked filter
   * @param includeArchivedRecords includes archived records in the result
   * @param limitResults a value greather than zero will represent a maximum count of results, that sould be returned
   */
  SearchVisits(sortingField? : string, sortDescending? : boolean, filter? : Models.VisitFilter, includeArchivedRecords? : boolean, limitResults? : number) : Promise<{result: Models.VisitMetaRecord[]}>;
  
  /**
   * Searches Visits which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
   *
   * @param minTimestampUtc start of the timespan to search (as UNIX-Timestamp)
   * @param filter values by field name (can also be a 'CustomField') which will used as AND-linked filter
   */
  SearchChangedVisits(minTimestampUtc : number, filter? : Models.VisitFilter) : Promise<{latestTimestampUtc: number, createdRecords: Models.VisitMetaRecord[], modifiedRecords: Models.VisitMetaRecord[], archivedRecords: Models.VisitMetaRecord[]}>;
  
  /**
   * GetCustomFieldDescriptorsForVisit
   *
   * @param languagePref Preferred language for the 'DisplayLabel' and 'InputDescription'
   fields of the returned descriptors. The default is 'EN'.
   */
  GetCustomFieldDescriptorsForVisit(languagePref? : string) : Promise<Models.CustomFieldDescriptor[]>;
  
  /**
   * Checks the existence of 'Visits' for a given list of visitUids
   *
   * @param visitUids
   */
  CheckVisitExisitence(visitUids : string[]) : Promise<{unavailableVisitUids: string[], availableVisitUids: string[]}>;
  
  /**
   * loads the requested visits and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
   *
   * @param visitUids
   */
  GetVisitFields(visitUids : string[]) : Promise<{unavailableVisitUids: string[], result: Models.VisitFields[]}>;
  
  /**
   * exports full 'VisitStructures'
   *
   * @param visitUids
   */
  ExportVisits(visitUids : string[]) : Promise<{unavailableVisitUids: string[], result: Models.VisitStructure[]}>;
  
}

export interface IVisitHL7ExportService {
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   *
   * @param visitUid
   */
  ExportVisitFhirRessources(visitUid : string) : Promise<{visitFhirRessources: Models.VisitFhirRessourceContainer[], return: boolean}>;
  
}

export interface IVisitHL7ImportService {
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   *
   * @param visitFhirRessources
   */
  ImportVisitFhirRessources(visitFhirRessources : Models.VisitFhirRessourceContainer[]) : Promise<{createdVisitUids: string[], updatedVisitUids: string[]}>;
  
}

export interface IVisitSubmissionService {
  
  /**
   * ArchiveVisits
   *
   * @param visitUids
   */
  ArchiveVisits(visitUids : string[]) : Promise<{archivedVisitUids: string[]}>;
  
  /**
   * UnarchiveVisits
   *
   * @param visitUids
   */
  UnarchiveVisits(visitUids : string[]) : Promise<{unarchivedVisitUids: string[]}>;
  
  /**
   * ApplyVisitMutations
   *
   * @param mutationsByVisitUid
   */
  ApplyVisitMutations(mutationsByVisitUid : Object) : Promise<{updatedVisitUids: string[]}>;
  
  /**
   * ApplyVisitBatchMutation
   *
   * @param visitUids
   * @param mutation
   */
  ApplyVisitBatchMutation(visitUids : string[], mutation : Models.BatchableVisitMutation) : Promise<{updatedVisitUids: string[]}>;
  
  /**
   * ImportVisits
   *
   * @param visits
   */
  ImportVisits(visits : Models.VisitStructure[]) : Promise<{createdVisitUids: string[], updatedVisitUids: string[]}>;
  
}
