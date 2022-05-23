/* based on ORSCF SubjectData Contract v1.8.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-subjectdata-contract/dtos';
import * as Models from 'orscf-subjectdata-contract/models';
import * as Interfaces from 'orscf-subjectdata-contract/interfaces';

/**
 * Provides interoperability information for the current implementation
 */
export class SdrApiInfoClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'sdrApiInfo/';
    }
    else{
      return rootUrl + '/sdrApiInfo/';
    }
  }
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  public getApiVersion(): Promise<string> {
    
    let requestWrapper : DTOs.GetApiVersionRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getApiVersion';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetApiVersionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'SdrEventSubscription', 'SubjectConsume', 'SubjectSubmission', 'SubjectHL7Export' 'SubjectHL7Import'
   */
  public getCapabilities(): Promise<string[]> {
    
    let requestWrapper : DTOs.GetCapabilitiesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getCapabilities';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetCapabilitiesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * returns a list of available capabilities ("API:SubjectOverview") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  public getPermittedAuthScopes(): Promise<{authState: number, return: string[]}> {
    
    let requestWrapper : DTOs.GetPermittedAuthScopesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getPermittedAuthScopes';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetPermittedAuthScopesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {authState: responseWrapper.authState, return: responseWrapper.return};
      }
    );
  }
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  public getOAuthTokenRequestUrl(): Promise<string> {
    
    let requestWrapper : DTOs.GetOAuthTokenRequestUrlRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getOAuthTokenRequestUrl';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetOAuthTokenRequestUrlResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export class SdrEventSubscriptionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'sdrEventSubscription/';
    }
    else{
      return rootUrl + '/sdrEventSubscription/';
    }
  }
  
  /**
   * Creates a subscription for changes which are affecting Subjects. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedSubjects' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
   */
  public subscribeForChangedSubjects(subscriberUrl: string, filter: Models.SubjectFilter = null): Promise<string> {
    
    let requestWrapper : DTOs.SubscribeForChangedSubjectsRequest = {
      subscriberUrl: subscriberUrl,
      filter: filter
    };
    
    let url = this.getEndpointUrl() + 'subscribeForChangedSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SubscribeForChangedSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Receives notifications about changes which are affecting Subjects. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   */
  public noticeChangedSubjects(eventUid: string, eventSignature: string, subscriptionUid: string, publisherUrl: string, createdRecords: Models.SubjectMetaRecord[], modifiedRecords: Models.SubjectMetaRecord[], archivedRecords: Models.SubjectMetaRecord[]): Promise<{terminateSubscription: boolean}> {
    
    let requestWrapper : DTOs.NoticeChangedSubjectsRequest = {
      eventUid: eventUid,
      eventSignature: eventSignature,
      subscriptionUid: subscriptionUid,
      publisherUrl: publisherUrl,
      createdRecords: createdRecords,
      modifiedRecords: modifiedRecords,
      archivedRecords: archivedRecords,
    };
    
    let url = this.getEndpointUrl() + 'noticeChangedSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.NoticeChangedSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {terminateSubscription: responseWrapper.terminateSubscription};
      }
    );
  }
  
  /**
   * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   */
  public confirmAsSubscriber(publisherUrl: string, subscriptionUid: string): Promise<{secret: string}> {
    
    let requestWrapper : DTOs.ConfirmAsSubscriberRequest = {
      publisherUrl: publisherUrl,
      subscriptionUid: subscriptionUid,
    };
    
    let url = this.getEndpointUrl() + 'confirmAsSubscriber';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ConfirmAsSubscriberResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {secret: responseWrapper.secret};
      }
    );
  }
  
  /**
   * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
   */
  public terminateSubscription(subscriptionUid: string, secret: string): Promise<boolean> {
    
    let requestWrapper : DTOs.TerminateSubscriptionRequest = {
      subscriptionUid: subscriptionUid,
      secret: secret
    };
    
    let url = this.getEndpointUrl() + 'terminateSubscription';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.TerminateSubscriptionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
   */
  public getSubsriptionsBySubscriberUrl(subscriberUrl: string, secret: string): Promise<string[]> {
    
    let requestWrapper : DTOs.GetSubsriptionsBySubscriberUrlRequest = {
      subscriberUrl: subscriberUrl,
      secret: secret
    };
    
    let url = this.getEndpointUrl() + 'getSubsriptionsBySubscriberUrl';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetSubsriptionsBySubscriberUrlResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export class SubjectConsumeClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'subjectConsume/';
    }
    else{
      return rootUrl + '/subjectConsume/';
    }
  }
  
  /**
   * Searches Subjects by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of SubjectUids for the matching records.
   */
  public searchSubjects(sortingField: string = null, sortDescending: boolean = false, filter: Models.SubjectFilter = null, includeArchivedRecords: boolean = false, limitResults: number = 0): Promise<{result: Models.SubjectMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchSubjectsRequest = {
      sortingField: sortingField,
      sortDescending: sortDescending,
      filter: filter,
      includeArchivedRecords: includeArchivedRecords,
      limitResults: limitResults,
    };
    
    let url = this.getEndpointUrl() + 'searchSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {result: responseWrapper.result};
      }
    );
  }
  
  /**
   * Searches Subjects which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
   */
  public searchChangedSubjects(minTimestampUtc: number, filter: Models.SubjectFilter = null): Promise<{latestTimestampUtc: number, createdRecords: Models.SubjectMetaRecord[], modifiedRecords: Models.SubjectMetaRecord[], archivedRecords: Models.SubjectMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchChangedSubjectsRequest = {
      minTimestampUtc: minTimestampUtc,
      filter: filter,
    };
    
    let url = this.getEndpointUrl() + 'searchChangedSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchChangedSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {latestTimestampUtc: responseWrapper.latestTimestampUtc, createdRecords: responseWrapper.createdRecords, modifiedRecords: responseWrapper.modifiedRecords, archivedRecords: responseWrapper.archivedRecords};
      }
    );
  }
  
  /**
   * GetCustomFieldDescriptorsForSubject
   */
  public getCustomFieldDescriptorsForSubject(languagePref: string = 'EN'): Promise<Models.CustomFieldDescriptor[]> {
    
    let requestWrapper : DTOs.GetCustomFieldDescriptorsForSubjectRequest = {
      languagePref: languagePref
    };
    
    let url = this.getEndpointUrl() + 'getCustomFieldDescriptorsForSubject';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetCustomFieldDescriptorsForSubjectResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Checks the existence of 'Subjects' for a given list of subjectUids
   */
  public checkSubjectExisitence(subjectUids: string[]): Promise<{unavailableSubjectUids: string[], availableSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.CheckSubjectExisitenceRequest = {
      subjectUids: subjectUids,
    };
    
    let url = this.getEndpointUrl() + 'checkSubjectExisitence';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.CheckSubjectExisitenceResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableSubjectUids: responseWrapper.unavailableSubjectUids, availableSubjectUids: responseWrapper.availableSubjectUids};
      }
    );
  }
  
  /**
   * loads the requested Subjects and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
   */
  public getSubjectFields(subjectUids: string[]): Promise<{unavailableSubjectUids: string[], result: Models.SubjectFields[]}> {
    
    let requestWrapper : DTOs.GetSubjectFieldsRequest = {
      subjectUids: subjectUids,
    };
    
    let url = this.getEndpointUrl() + 'getSubjectFields';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetSubjectFieldsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableSubjectUids: responseWrapper.unavailableSubjectUids, result: responseWrapper.result};
      }
    );
  }
  
  /**
   * exports full 'SubjectStructures'
   */
  public exportSubjects(subjectUids: string[]): Promise<{unavailableSubjectUids: string[], result: Models.SubjectStructure[]}> {
    
    let requestWrapper : DTOs.ExportSubjectsRequest = {
      subjectUids: subjectUids,
    };
    
    let url = this.getEndpointUrl() + 'exportSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ExportSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableSubjectUids: responseWrapper.unavailableSubjectUids, result: responseWrapper.result};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export class SubjectHL7ExportClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'subjectHL7Export/';
    }
    else{
      return rootUrl + '/subjectHL7Export/';
    }
  }
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   */
  public exportSubjectFhirRessources(subjectUid: string): Promise<{subjectFhirRessources: Models.SubjectFhirRessourceContainer[], return: boolean}> {
    
    let requestWrapper : DTOs.ExportSubjectFhirRessourcesRequest = {
      subjectUid: subjectUid,
    };
    
    let url = this.getEndpointUrl() + 'exportSubjectFhirRessources';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ExportSubjectFhirRessourcesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {subjectFhirRessources: responseWrapper.subjectFhirRessources, return: responseWrapper.return};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export class SubjectHL7ImportClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'subjectHL7Import/';
    }
    else{
      return rootUrl + '/subjectHL7Import/';
    }
  }
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   */
  public importSubjectFhirRessources(subjectFhirRessources: Models.SubjectFhirRessourceContainer[]): Promise<{createdSubjectUids: string[], updatedSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.ImportSubjectFhirRessourcesRequest = {
      subjectFhirRessources: subjectFhirRessources,
    };
    
    let url = this.getEndpointUrl() + 'importSubjectFhirRessources';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportSubjectFhirRessourcesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdSubjectUids: responseWrapper.createdSubjectUids, updatedSubjectUids: responseWrapper.updatedSubjectUids};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export class SubjectSubmissionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'subjectSubmission/';
    }
    else{
      return rootUrl + '/subjectSubmission/';
    }
  }
  
  /**
   * ArchiveSubjects
   */
  public archiveSubjects(subjectUids: string[]): Promise<{archivedSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.ArchiveSubjectsRequest = {
      subjectUids: subjectUids,
    };
    
    let url = this.getEndpointUrl() + 'archiveSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ArchiveSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {archivedSubjectUids: responseWrapper.archivedSubjectUids};
      }
    );
  }
  
  /**
   * UnarchiveSubjects
   */
  public unarchiveSubjects(subjectUids: string[]): Promise<{unarchivedSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.UnarchiveSubjectsRequest = {
      subjectUids: subjectUids,
    };
    
    let url = this.getEndpointUrl() + 'unarchiveSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UnarchiveSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unarchivedSubjectUids: responseWrapper.unarchivedSubjectUids};
      }
    );
  }
  
  /**
   * ApplySubjectMutations
   */
  public applySubjectMutations(mutationsBySubjecttUid: Object): Promise<{updatedSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.ApplySubjectMutationsRequest = {
      mutationsBySubjecttUid: mutationsBySubjecttUid,
    };
    
    let url = this.getEndpointUrl() + 'applySubjectMutations';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ApplySubjectMutationsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {updatedSubjectUids: responseWrapper.updatedSubjectUids};
      }
    );
  }
  
  /**
   * ApplySubjectBatchMutation
   */
  public applySubjectBatchMutation(subjectUids: string[], mutation: Models.BatchableSubjectMutation): Promise<{updatedSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.ApplySubjectBatchMutationRequest = {
      subjectUids: subjectUids,
      mutation: mutation,
    };
    
    let url = this.getEndpointUrl() + 'applySubjectBatchMutation';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ApplySubjectBatchMutationResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {updatedSubjectUids: responseWrapper.updatedSubjectUids};
      }
    );
  }
  
  /**
   * ImportSubjects
   */
  public importSubjects(subjects: Models.SubjectStructure[]): Promise<{createdSubjectUids: string[], updatedSubjectUids: string[]}> {
    
    let requestWrapper : DTOs.ImportSubjectsRequest = {
      subjects: subjects,
    };
    
    let url = this.getEndpointUrl() + 'importSubjects';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportSubjectsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdSubjectUids: responseWrapper.createdSubjectUids, updatedSubjectUids: responseWrapper.updatedSubjectUids};
      }
    );
  }
  
}

export class SdrConnector {
  
  private sdrApiInfoClient: SdrApiInfoClient;
  
  private sdrEventSubscriptionClient: SdrEventSubscriptionClient;
  
  private subjectConsumeClient: SubjectConsumeClient;
  
  private subjectHL7ExportClient: SubjectHL7ExportClient;
  
  private subjectHL7ImportClient: SubjectHL7ImportClient;
  
  private subjectSubmissionClient: SubjectSubmissionClient;
  
  private axiosHttpApi: AxiosInstance;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){
  
    if (this.httpPostMethod == null) {
      this.axiosHttpApi = axios.create({ baseURL: this.rootUrlResolver() });
      this.httpPostMethod = (url, requestObject, apiToken) => {
        return this.axiosHttpApi.post(url, requestObject, {
          headers: {
            Authorization: apiToken
          }
        });
      };
    }
    
    this.sdrApiInfoClient = new SdrApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.sdrEventSubscriptionClient = new SdrEventSubscriptionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.subjectConsumeClient = new SubjectConsumeClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.subjectHL7ExportClient = new SubjectHL7ExportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.subjectHL7ImportClient = new SubjectHL7ImportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.subjectSubmissionClient = new SubjectSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
  }
  
  private getRootUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl;
    }
    else{
      return rootUrl + '/';
    }
  }
  
  /**
   * Provides interoperability information for the current implementation
   */
  get sdrApiInfo(): SdrApiInfoClient { return this.sdrApiInfoClient }
  
  /**
   * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
   */
  get sdrEventSubscription(): SdrEventSubscriptionClient { return this.sdrEventSubscriptionClient }
  
  /**
   * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
   */
  get subjectConsume(): SubjectConsumeClient { return this.subjectConsumeClient }
  
  /**
   * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
   */
  get subjectHL7Export(): SubjectHL7ExportClient { return this.subjectHL7ExportClient }
  
  /**
   * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
   */
  get subjectHL7Import(): SubjectHL7ImportClient { return this.subjectHL7ImportClient }
  
  /**
   * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
   */
  get subjectSubmission(): SubjectSubmissionClient { return this.subjectSubmissionClient }
  
}
