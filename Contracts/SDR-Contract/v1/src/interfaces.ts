/* based on ORSCF SubjectData Contract v1.9.1.11852 */

import * as Models from './models';

export interface ISdrApiInfoService {
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  GetApiVersion() : Promise<string>;
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'SdrEventSubscription', 'SubjectConsume', 'SubjectSubmission', 'SubjectHL7Export' 'SubjectHL7Import'
   */
  GetCapabilities() : Promise<string[]>;
  
  /**
   * returns a list of available capabilities ("API:SubjectOverview") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  GetPermittedAuthScopes() : Promise<{authState: number, return: string[]}>;
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  GetOAuthTokenRequestUrl() : Promise<string>;
  
}

export interface ISdrEventSubscriptionService {
  
  /**
   * Creates a subscription for changes which are affecting Subjects. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedSubjects' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
   *
   * @param subscriberUrl the root-url of the subscriber which needs to provide at least the methods
   '/ConfirmAsSubscriber' and '/NoticeChangedSubjects'
   * @param filter if provided, the subscription will only publish events for
   records matching to the given filter
   */
  SubscribeForChangedSubjects(subscriberUrl : string, filter? : Models.SubjectFilter) : Promise<string>;
  
  /**
   * Receives notifications about changes which are affecting Subjects. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   *
   * @param eventUid a UUID which identifies the current event message
   * @param eventSignature a SHA256 Hash of SubscriptionSecret + EventUid
   (in lower string representation, without '-' characters!)
   Sample: SHA256('ThEs3Cr3T'+'c997dfb1c445fea84afe995307713b59')
   = 'a320ef5b0f563e8dcb16d759961739977afc98b90628d9dc3be519fb20701490'
   * @param subscriptionUid a UUID which identifies the subscription for which this event is published
   * @param publisherUrl root-URL of the VDR-Service which is publishing this event
   * @param createdRecords an array, which contains one element per changed record
   * @param modifiedRecords an array, which contains one element per modified record
   * @param archivedRecords an array, which contains one element per archived record
   */
  NoticeChangedSubjects(eventUid : string, eventSignature : string, subscriptionUid : string, publisherUrl : string, createdRecords : Models.SubjectMetaRecord[], modifiedRecords : Models.SubjectMetaRecord[], archivedRecords : Models.SubjectMetaRecord[]) : Promise<{terminateSubscription: boolean}>;
  
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

export interface ISubjectConsumeService {
  
  /**
   * Searches Subjects by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of SubjectUids for the matching records.
   *
   * @param sortingField A fieldname, which should be used to sort the result (can also be a 'CustomField').
   If not provided, the result will be sorted by the creation date of the records
   * @param sortDescending toggles the sorting direction
   * @param filter values by field name (can also be a 'CustomField') which will used as AND-linked filter
   * @param includeArchivedRecords includes archived records in the result
   * @param limitResults a value greather than zero will represent a maximum count of results, that sould be returned
   */
  SearchSubjects(sortingField? : string, sortDescending? : boolean, filter? : Models.SubjectFilter, includeArchivedRecords? : boolean, limitResults? : number) : Promise<{result: Models.SubjectMetaRecord[]}>;
  
  /**
   * Searches Subjects which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
   *
   * @param minTimestampUtc start of the timespan to search (as UNIX-Timestamp)
   * @param filter values by field name (can also be a 'CustomField') which will used as AND-linked filter
   */
  SearchChangedSubjects(minTimestampUtc : number, filter? : Models.SubjectFilter) : Promise<{latestTimestampUtc: number, createdRecords: Models.SubjectMetaRecord[], modifiedRecords: Models.SubjectMetaRecord[], archivedRecords: Models.SubjectMetaRecord[]}>;
  
  /**
   * GetCustomFieldDescriptorsForSubject
   *
   * @param languagePref Preferred language for the 'DisplayLabel' and 'InputDescription'
   fields of the returned descriptors. The default is 'EN'.
   */
  GetCustomFieldDescriptorsForSubject(languagePref? : string) : Promise<Models.CustomFieldDescriptor[]>;
  
  /**
   * Checks the existence of 'Subjects' for a given list of subjectUids
   *
   * @param subjectUids
   */
  CheckSubjectExisitence(subjectUids : string[]) : Promise<{unavailableSubjectUids: string[], availableSubjectUids: string[]}>;
  
  /**
   * loads the requested Subjects and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
   *
   * @param subjectUids
   */
  GetSubjectFields(subjectUids : string[]) : Promise<{unavailableSubjectUids: string[], result: Models.SubjectFields[]}>;
  
  /**
   * exports full 'SubjectStructures'
   *
   * @param subjectUids
   */
  ExportSubjects(subjectUids : string[]) : Promise<{unavailableSubjectUids: string[], result: Models.SubjectStructure[]}>;
  
}

export interface ISubjectHL7ExportService {
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   *
   * @param subjectUid
   */
  ExportSubjectFhirRessources(subjectUid : string) : Promise<{subjectFhirRessources: Models.SubjectFhirRessourceContainer[], return: boolean}>;
  
}

export interface ISubjectHL7ImportService {
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   *
   * @param subjectFhirRessources
   */
  ImportSubjectFhirRessources(subjectFhirRessources : Models.SubjectFhirRessourceContainer[]) : Promise<{createdSubjectUids: string[], updatedSubjectUids: string[]}>;
  
}

export interface ISubjectSubmissionService {
  
  /**
   * ArchiveSubjects
   *
   * @param subjectUids
   */
  ArchiveSubjects(subjectUids : string[]) : Promise<{archivedSubjectUids: string[]}>;
  
  /**
   * UnarchiveSubjects
   *
   * @param subjectUids
   */
  UnarchiveSubjects(subjectUids : string[]) : Promise<{unarchivedSubjectUids: string[]}>;
  
  /**
   * ApplySubjectMutations
   *
   * @param mutationsBySubjecttUid
   */
  ApplySubjectMutations(mutationsBySubjecttUid : Object) : Promise<{updatedSubjectUids: string[]}>;
  
  /**
   * ApplySubjectBatchMutation
   *
   * @param subjectUids
   * @param mutation
   */
  ApplySubjectBatchMutation(subjectUids : string[], mutation : Models.BatchableSubjectMutation) : Promise<{updatedSubjectUids: string[]}>;
  
  /**
   * ImportSubjects
   *
   * @param subjects
   */
  ImportSubjects(subjects : Models.SubjectStructure[]) : Promise<{createdSubjectUids: string[], updatedSubjectUids: string[]}>;
  
}
