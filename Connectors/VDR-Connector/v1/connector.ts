/* based on ORSCF VisitData Contract v1.7.0.0 */

import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as DTOs from 'orscf-visitdata-contract/dtos';
import * as Models from 'orscf-visitdata-contract/models';
import * as Interfaces from 'orscf-visitdata-contract/interfaces';


/**
 * Provides interoperability information for the current implementation
 */
export class VdrApiInfoServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public getApiVersion(): Observable<string> {
    
    let requestWrapper : DTOs.GetApiVersionRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getApiVersion';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetApiVersionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'VdrEventSubscription', 'VisitConsume', 'VisitSubmission', 'VisitHL7Export', 'VisitHL7Import', 'DataRecordingSubmission'
   */
  public getCapabilities(): Observable<string[]> {
    
    let requestWrapper : DTOs.GetCapabilitiesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getCapabilities';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetCapabilitiesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * returns a list of available capabilities ("API:VisitDataConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  public getPermittedAuthScopes(): Observable<{authState: number, return: string[]}> {
    
    let requestWrapper : DTOs.GetPermittedAuthScopesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getPermittedAuthScopes';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetPermittedAuthScopesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {authState: responseWrapper.authState, return: responseWrapper.return};
      }
    ));
  }
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  public getOAuthTokenRequestUrl(): Observable<string> {
    
    let requestWrapper : DTOs.GetOAuthTokenRequestUrlRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getOAuthTokenRequestUrl';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetOAuthTokenRequestUrlResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VdrEventSubscriptionServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public subscribeForChangedVisits(): Observable<string> {
    
    let requestWrapper : DTOs.SubscribeForChangedVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'subscribeForChangedVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.SubscribeForChangedVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Receives notifications about changes which are affecting Visits. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   */
  public noticeChangedVisits(): Observable<{terminateSubscription: boolean}> {
    
    let requestWrapper : DTOs.NoticeChangedVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'noticeChangedVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.NoticeChangedVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {terminateSubscription: responseWrapper.terminateSubscription};
      }
    ));
  }
  
  /**
   * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
   */
  public confirmAsSubscriber(): Observable<{secret: string}> {
    
    let requestWrapper : DTOs.ConfirmAsSubscriberRequest = {
    };
    
    let url = this.getEndpointUrl() + 'confirmAsSubscriber';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ConfirmAsSubscriberResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {secret: responseWrapper.secret};
      }
    ));
  }
  
  /**
   * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
   */
  public terminateSubscription(): Observable<boolean> {
    
    let requestWrapper : DTOs.TerminateSubscriptionRequest = {
    };
    
    let url = this.getEndpointUrl() + 'terminateSubscription';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.TerminateSubscriptionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
   */
  public getSubsriptionsBySubscriberUrl(): Observable<string[]> {
    
    let requestWrapper : DTOs.GetSubsriptionsBySubscriberUrlRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getSubsriptionsBySubscriberUrl';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetSubsriptionsBySubscriberUrlResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class DataRecordingSubmissionServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public importDataRecordings(): Observable<{createdDataRecordingUids: string[], updatedDataRecordingUids: string[]}> {
    
    let requestWrapper : DTOs.ImportDataRecordingsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'importDataRecordings';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ImportDataRecordingsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdDataRecordingUids: responseWrapper.createdDataRecordingUids, updatedDataRecordingUids: responseWrapper.updatedDataRecordingUids};
      }
    ));
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitConsumeServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public searchVisits(): Observable<{result: Models.VisitMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'searchVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.SearchVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {result: responseWrapper.result};
      }
    ));
  }
  
  /**
   * Searches Visits which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
   */
  public searchChangedVisits(): Observable<{latestTimestampUtc: number, createdRecords: Models.VisitMetaRecord[], modifiedRecords: Models.VisitMetaRecord[], archivedRecords: Models.VisitMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchChangedVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'searchChangedVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.SearchChangedVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {latestTimestampUtc: responseWrapper.latestTimestampUtc, createdRecords: responseWrapper.createdRecords, modifiedRecords: responseWrapper.modifiedRecords, archivedRecords: responseWrapper.archivedRecords};
      }
    ));
  }
  
  /**
   * GetCustomFieldDescriptorsForVisit
   */
  public getCustomFieldDescriptorsForVisit(): Observable<Models.CustomFieldDescriptor[]> {
    
    let requestWrapper : DTOs.GetCustomFieldDescriptorsForVisitRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getCustomFieldDescriptorsForVisit';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetCustomFieldDescriptorsForVisitResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Checks the existence of 'Visits' for a given list of visitUids
   */
  public checkVisitExisitence(): Observable<{unavailableVisitUids: string[], availableVisitUids: string[]}> {
    
    let requestWrapper : DTOs.CheckVisitExisitenceRequest = {
    };
    
    let url = this.getEndpointUrl() + 'checkVisitExisitence';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.CheckVisitExisitenceResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableVisitUids: responseWrapper.unavailableVisitUids, availableVisitUids: responseWrapper.availableVisitUids};
      }
    ));
  }
  
  /**
   * loads the requested visits and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
   */
  public getVisitFields(): Observable<{unavailableVisitUids: string[], result: Models.VisitFields[]}> {
    
    let requestWrapper : DTOs.GetVisitFieldsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getVisitFields';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetVisitFieldsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableVisitUids: responseWrapper.unavailableVisitUids, result: responseWrapper.result};
      }
    ));
  }
  
  /**
   * exports full 'VisitStructures'
   */
  public exportVisits(): Observable<{unavailableVisitUids: string[], result: Models.VisitStructure[]}> {
    
    let requestWrapper : DTOs.ExportVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'exportVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ExportVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unavailableVisitUids: responseWrapper.unavailableVisitUids, result: responseWrapper.result};
      }
    ));
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitHL7ExportServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public exportVisitFhirRessources(): Observable<{visitFhirRessources: Models.VisitFhirRessourceContainer[], return: boolean}> {
    
    let requestWrapper : DTOs.ExportVisitFhirRessourcesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'exportVisitFhirRessources';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ExportVisitFhirRessourcesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {visitFhirRessources: responseWrapper.visitFhirRessources, return: responseWrapper.return};
      }
    ));
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitHL7ImportServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public importVisitFhirRessources(): Observable<{createdVisitUids: string[], updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ImportVisitFhirRessourcesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'importVisitFhirRessources';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ImportVisitFhirRessourcesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdVisitUids: responseWrapper.createdVisitUids, updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    ));
  }
  
}

/**
 * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
 */
export class VisitSubmissionServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
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
  public archiveVisits(): Observable<{archivedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ArchiveVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'archiveVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ArchiveVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {archivedVisitUids: responseWrapper.archivedVisitUids};
      }
    ));
  }
  
  /**
   * UnarchiveVisits
   */
  public unarchiveVisits(): Observable<{unarchivedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.UnarchiveVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'unarchiveVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.UnarchiveVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {unarchivedVisitUids: responseWrapper.unarchivedVisitUids};
      }
    ));
  }
  
  /**
   * ApplyVisitMutations
   */
  public applyVisitMutations(): Observable<{updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ApplyVisitMutationsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'applyVisitMutations';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ApplyVisitMutationsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    ));
  }
  
  /**
   * ApplyVisitBatchMutation
   */
  public applyVisitBatchMutation(): Observable<{updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ApplyVisitBatchMutationRequest = {
    };
    
    let url = this.getEndpointUrl() + 'applyVisitBatchMutation';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ApplyVisitBatchMutationResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    ));
  }
  
  /**
   * ImportVisits
   */
  public importVisits(): Observable<{createdVisitUids: string[], updatedVisitUids: string[]}> {
    
    let requestWrapper : DTOs.ImportVisitsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'importVisits';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ImportVisitsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {createdVisitUids: responseWrapper.createdVisitUids, updatedVisitUids: responseWrapper.updatedVisitUids};
      }
    ));
  }
  
}

export class VdrConnector {
  
  private vdrApiInfoServiceClient: VdrApiInfoServiceClient;
  
  private vdrEventSubscriptionServiceClient: VdrEventSubscriptionServiceClient;
  
  private dataRecordingSubmissionServiceClient: DataRecordingSubmissionServiceClient;
  
  private visitConsumeServiceClient: VisitConsumeServiceClient;
  
  private visitHL7ExportServiceClient: VisitHL7ExportServiceClient;
  
  private visitHL7ImportServiceClient: VisitHL7ImportServiceClient;
  
  private visitSubmissionServiceClient: VisitSubmissionServiceClient;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){
  
    this.vdrApiInfoServiceClient = new VdrApiInfoServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.vdrEventSubscriptionServiceClient = new VdrEventSubscriptionServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.dataRecordingSubmissionServiceClient = new DataRecordingSubmissionServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitConsumeServiceClient = new VisitConsumeServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitHL7ExportServiceClient = new VisitHL7ExportServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitHL7ImportServiceClient = new VisitHL7ImportServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.visitSubmissionServiceClient = new VisitSubmissionServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
  get vdrApiInfoService(): VdrApiInfoServiceClient { return this.vdrApiInfoServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get vdrEventSubscriptionService(): VdrEventSubscriptionServiceClient { return this.vdrEventSubscriptionServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get dataRecordingSubmissionService(): DataRecordingSubmissionServiceClient { return this.dataRecordingSubmissionServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitConsumeService(): VisitConsumeServiceClient { return this.visitConsumeServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitHL7ExportService(): VisitHL7ExportServiceClient { return this.visitHL7ExportServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitHL7ImportService(): VisitHL7ImportServiceClient { return this.visitHL7ImportServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'VisitDataRepository' (VDR)
   */
  get visitSubmissionService(): VisitSubmissionServiceClient { return this.visitSubmissionServiceClient }
  
}
