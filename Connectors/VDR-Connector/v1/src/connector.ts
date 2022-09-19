/* based on ORSCF VisitData Contract v1.9.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-visitdata-contract/dtos';
import * as Models from 'orscf-visitdata-contract/models';
import * as Interfaces from 'orscf-visitdata-contract/interfaces';

/**
 * Provides interoperability information for the current implementation
 */
export class VdrApiInfoClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'vdrApiInfo/';
    }
    else{
      return rootUrl + '/vdrApiInfo/';
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
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'VdrEventSubscription', 'VisitConsume', 'VisitSubmission', 'VisitHL7Export', 'VisitHL7Import', 'DataRecordingSubmission'
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
   * returns a list of available capabilities ("API:VisitDataConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
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
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VdrEventSubscriptionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'vdrEventSubscription/';
    }
    else{
      return rootUrl + '/vdrEventSubscription/';
    }
  }
  
  /**
   * Creates a subscription for changes which are affecting Visits. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedVisits' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
   */
  public subscribeForChangedVisits(subscriberUrl: string, filter: Models.VisitFilter): Promise<string> {
    
    let requestWrapper : DTOs.SubscribeForChangedVisitsRequest = {
      subscriberUrl: subscriberUrl,
      filter: filter
    };
    
    let url = this.getEndpointUrl() + 'subscribeForChangedVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SubscribeForChangedVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Receives notifications about changes which are affecting Visits. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   */
  public noticeChangedVisits(eventUid: string, eventSignature: string, subscriptionUid: string, publisherUrl: string, createdRecords: Models.VisitMetaRecord[], modifiedRecords: Models.VisitMetaRecord[], archivedRecords: Models.VisitMetaRecord[]): Promise<{terminateSubscription: boolean}> {
    
    let requestWrapper : DTOs.NoticeChangedVisitsRequest = {
      eventUid: eventUid,
      eventSignature: eventSignature,
      subscriptionUid: subscriptionUid,
      publisherUrl: publisherUrl,
      createdRecords: createdRecords,
      modifiedRecords: modifiedRecords,
      archivedRecords: archivedRecords,
    };
    
    let url = this.getEndpointUrl() + 'noticeChangedVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.NoticeChangedVisitsResponse);
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
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class DataRecordingSubmissionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'dataRecordingSubmission/';
    }
    else{
      return rootUrl + '/dataRecordingSubmission/';
    }
  }
  
  /**
   * ImportDataRecordings
   */
  public importDataRecordings(dataRecordings: Models.DataRecordingStructure[]): Promise<{createdDataRecordingUids: string[], updatedDataRecordingUids: string[]}> {
    
    let requestWrapper : DTOs.ImportDataRecordingsRequest = {
      dataRecordings: dataRecordings,
    };
    
    let url = this.getEndpointUrl() + 'importDataRecordings';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportDataRecordingsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdDataRecordingUids: responseWrapper.createdDataRecordingUids, updatedDataRecordingUids: responseWrapper.updatedDataRecordingUids};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitConsumeClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'visitConsume/';
    }
    else{
      return rootUrl + '/visitConsume/';
    }
  }
  
  /**
   * Searches Visits by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of VisitUids for the matching records.
   */
  public searchVisits(sortingField: string, sortDescending: boolean = false, filter: Models.VisitFilter, includeArchivedRecords: boolean = false, limitResults: number = 0): Promise<{result: Models.VisitMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchVisitsRequest = {
      sortingField: sortingField,
      sortDescending: sortDescending,
      filter: filter,
      includeArchivedRecords: includeArchivedRecords,
      limitResults: limitResults,
    };
    
    let url = this.getEndpointUrl() + 'searchVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {result: responseWrapper.result};
      }
    );
  }
  
  /**
   * Searches Visits which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
   */
  public searchChangedVisits(minTimestampUtc: number, filter: Models.VisitFilter): Promise<{latestTimestampUtc: number, createdRecords: Models.VisitMetaRecord[], modifiedRecords: Models.VisitMetaRecord[], archivedRecords: Models.VisitMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchChangedVisitsRequest = {
      minTimestampUtc: minTimestampUtc,
      filter: filter,
    };
    
    let url = this.getEndpointUrl() + 'searchChangedVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchChangedVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {latestTimestampUtc: responseWrapper.latestTimestampUtc, createdRecords: responseWrapper.createdRecords, modifiedRecords: responseWrapper.modifiedRecords, archivedRecords: responseWrapper.archivedRecords};
      }
    );
  }
  
  /**
   * GetCustomFieldDescriptorsForVisit
   */
  public getCustomFieldDescriptorsForVisit(languagePref: string = 'EN'): Promise<Models.CustomFieldDescriptor[]> {
    
    let requestWrapper : DTOs.GetCustomFieldDescriptorsForVisitRequest = {
      languagePref: languagePref
    };
    
    let url = this.getEndpointUrl() + 'getCustomFieldDescriptorsForVisit';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetCustomFieldDescriptorsForVisitResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Checks the existence of 'Visits' for a given list of visitUids
   */
  public checkVisitExisitence(visitUids: string[]): Promise<{unavailableVisitUids: string[], availableVisitUids: string[]}> {
    
    let requestWrapper : DTOs.CheckVisitExisitenceRequest = {
      visitUids: visitUids,
    };
    
    let url = this.getEndpointUrl() + 'checkVisitExisitence';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.CheckVisitExisitenceResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableVisitUids: responseWrapper.unavailableVisitUids, availableVisitUids: responseWrapper.availableVisitUids};
      }
    );
  }
  
  /**
   * loads the requested visits and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
   */
  public getVisitFields(visitUids: string[]): Promise<{unavailableVisitUids: string[], result: Models.VisitFields[]}> {
    
    let requestWrapper : DTOs.GetVisitFieldsRequest = {
      visitUids: visitUids,
    };
    
    let url = this.getEndpointUrl() + 'getVisitFields';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetVisitFieldsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableVisitUids: responseWrapper.unavailableVisitUids, result: responseWrapper.result};
      }
    );
  }
  
  /**
   * exports full 'VisitStructures'
   */
  public exportVisits(visitUids: string[]): Promise<{unavailableVisitUids: string[], result: Models.VisitStructure[]}> {
    
    let requestWrapper : DTOs.ExportVisitsRequest = {
      visitUids: visitUids,
    };
    
    let url = this.getEndpointUrl() + 'exportVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ExportVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableVisitUids: responseWrapper.unavailableVisitUids, result: responseWrapper.result};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitHL7ExportClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'visitHL7Export/';
    }
    else{
      return rootUrl + '/visitHL7Export/';
    }
  }
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   */
  public exportVisitFhirRessources(visitUid: string): Promise<{visitFhirRessources: Models.VisitFhirRessourceContainer[], return: boolean}> {
    
    let requestWrapper : DTOs.ExportVisitFhirRessourcesRequest = {
      visitUid: visitUid,
    };
    
    let url = this.getEndpointUrl() + 'exportVisitFhirRessources';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ExportVisitFhirRessourcesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {visitFhirRessources: responseWrapper.visitFhirRessources, return: responseWrapper.return};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitHL7ImportClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'visitHL7Import/';
    }
    else{
      return rootUrl + '/visitHL7Import/';
    }
  }
  
  /**
   * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
   */
  public importVisitFhirRessources(visitFhirRessources: Models.VisitFhirRessourceContainer[]): Promise<{createdVisitUids: string[], updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ImportVisitFhirRessourcesRequest = {
      visitFhirRessources: visitFhirRessources,
    };
    
    let url = this.getEndpointUrl() + 'importVisitFhirRessources';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportVisitFhirRessourcesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdVisitUids: responseWrapper.createdVisitUids, updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    );
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitSubmissionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'visitSubmission/';
    }
    else{
      return rootUrl + '/visitSubmission/';
    }
  }
  
  /**
   * ArchiveVisits
   */
  public archiveVisits(visitUids: string[]): Promise<{archivedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ArchiveVisitsRequest = {
      visitUids: visitUids,
    };
    
    let url = this.getEndpointUrl() + 'archiveVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ArchiveVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {archivedVisitUids: responseWrapper.archivedVisitUids};
      }
    );
  }
  
  /**
   * UnarchiveVisits
   */
  public unarchiveVisits(visitUids: string[]): Promise<{unarchivedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.UnarchiveVisitsRequest = {
      visitUids: visitUids,
    };
    
    let url = this.getEndpointUrl() + 'unarchiveVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UnarchiveVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unarchivedVisitUids: responseWrapper.unarchivedVisitUids};
      }
    );
  }
  
  /**
   * ApplyVisitMutations
   */
  public applyVisitMutations(mutationsByVisitUid: Object): Promise<{updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ApplyVisitMutationsRequest = {
      mutationsByVisitUid: mutationsByVisitUid,
    };
    
    let url = this.getEndpointUrl() + 'applyVisitMutations';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ApplyVisitMutationsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    );
  }
  
  /**
   * ApplyVisitBatchMutation
   */
  public applyVisitBatchMutation(visitUids: string[], mutation: Models.BatchableVisitMutation): Promise<{updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ApplyVisitBatchMutationRequest = {
      visitUids: visitUids,
      mutation: mutation,
    };
    
    let url = this.getEndpointUrl() + 'applyVisitBatchMutation';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ApplyVisitBatchMutationResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    );
  }
  
  /**
   * ImportVisits
   */
  public importVisits(visits: Models.VisitStructure[]): Promise<{createdVisitUids: string[], updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ImportVisitsRequest = {
      visits: visits,
    };
    
    let url = this.getEndpointUrl() + 'importVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdVisitUids: responseWrapper.createdVisitUids, updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    );
  }
  
}

export class VdrConnector {
  
  private vdrApiInfoClient: VdrApiInfoClient;
  
  private vdrEventSubscriptionClient: VdrEventSubscriptionClient;
  
  private dataRecordingSubmissionClient: DataRecordingSubmissionClient;
  
  private visitConsumeClient: VisitConsumeClient;
  
  private visitHL7ExportClient: VisitHL7ExportClient;
  
  private visitHL7ImportClient: VisitHL7ImportClient;
  
  private visitSubmissionClient: VisitSubmissionClient;
  
  private axiosHttpApi?: AxiosInstance;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod?: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){
  
    if (!this.httpPostMethod) {
      this.axiosHttpApi = axios.create({ baseURL: this.rootUrlResolver() });
      this.httpPostMethod = (url, requestObject, apiToken) => {
        if(!this.axiosHttpApi) {
          this.axiosHttpApi = axios.create({ baseURL: this.rootUrlResolver() });
        }
        return this.axiosHttpApi.post(url, requestObject, {
          headers: {
            Authorization: apiToken
          }
        });
      };
    }
    
    this.vdrApiInfoClient = new VdrApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.vdrEventSubscriptionClient = new VdrEventSubscriptionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.dataRecordingSubmissionClient = new DataRecordingSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitConsumeClient = new VisitConsumeClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitHL7ExportClient = new VisitHL7ExportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitHL7ImportClient = new VisitHL7ImportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitSubmissionClient = new VisitSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
  get vdrApiInfo(): VdrApiInfoClient { return this.vdrApiInfoClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get vdrEventSubscription(): VdrEventSubscriptionClient { return this.vdrEventSubscriptionClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get dataRecordingSubmission(): DataRecordingSubmissionClient { return this.dataRecordingSubmissionClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitConsume(): VisitConsumeClient { return this.visitConsumeClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitHL7Export(): VisitHL7ExportClient { return this.visitHL7ExportClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitHL7Import(): VisitHL7ImportClient { return this.visitHL7ImportClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitSubmission(): VisitSubmissionClient { return this.visitSubmissionClient }
  
}
