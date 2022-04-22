/* based on ORSCF StudyManagement Contract v1.8.0.0 */

import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as DTOs from 'orscf-studymanagement-contract/dtos';
import * as Models from 'orscf-studymanagement-contract/models';
import * as Interfaces from 'orscf-studymanagement-contract/interfaces';


/**
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class InstituteMgmtServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'instituteMgmt/';
    }
    else{
      return rootUrl + '/instituteMgmt/';
    }
  }
  
  
  /**
   * GetInstituteUidByTitle
   */
  public getInstituteUidByTitle(): Observable<string> {
    
    let requestWrapper : DTOs.GetInstituteUidByTitleRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getInstituteUidByTitle';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetInstituteUidByTitleResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * GetInstituteTitleByUid
   */
  public getInstituteTitleByUid(): Observable<string> {
    
    let requestWrapper : DTOs.GetInstituteTitleByUidRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getInstituteTitleByUid';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetInstituteTitleByUidResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * ArchiveInstitute
   */
  public archiveInstitute(): Observable<string> {
    
    let requestWrapper : DTOs.ArchiveInstituteRequest = {
    };
    
    let url = this.getEndpointUrl() + 'archiveInstitute';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.ArchiveInstituteResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * GetInstituteInfos
   */
  public getInstituteInfos(): Observable<string> {
    
    let requestWrapper : DTOs.GetInstituteInfosRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getInstituteInfos';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetInstituteInfosResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * ensures, that an institute with the given Uid exists and returns true, if it has been newly created
   */
  public createInstituteIfMissing(): Observable<boolean> {
    
    let requestWrapper : DTOs.CreateInstituteIfMissingRequest = {
    };
    
    let url = this.getEndpointUrl() + 'createInstituteIfMissing';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.CreateInstituteIfMissingResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * updated the title of the the institute or returns false, if there is no record for the given instituteUid
   */
  public updateInstitueTitle(): Observable<boolean> {
    
    let requestWrapper : DTOs.UpdateInstitueTitleRequest = {
    };
    
    let url = this.getEndpointUrl() + 'updateInstitueTitle';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.UpdateInstitueTitleResponse);
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
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class SiteParticipationServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'siteParticipation/';
    }
    else{
      return rootUrl + '/siteParticipation/';
    }
  }
  
  
}

/**
 * Provides interoperability information for the current implementation
 */
export class SmsApiInfoServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'smsApiInfo/';
    }
    else{
      return rootUrl + '/smsApiInfo/';
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
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'InstituteMgmt', 'StudySetup', 'StudyAccess', 'SiteParticipation'
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
   * returns a list of available capabilities ("API:StudyAccess") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
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
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class StudyAccessServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'studyAccess/';
    }
    else{
      return rootUrl + '/studyAccess/';
    }
  }
  
  
  /**
   * Subscribes the Event when the State of a Study was changed to the given "EventQueue" which is accessable via "EventQueueService" (including http notifications)
   */
  public subscribeStudyStateChangedEvents(): Observable<boolean> {
    
    let requestWrapper : DTOs.SubscribeStudyStateChangedEventsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'subscribeStudyStateChangedEvents';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.SubscribeStudyStateChangedEventsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Unsubscribes the Event when the State of a Study was changed for the given "EventQueue"
   */
  public unsubscribeStudyStateChangedEvents(): Observable<boolean> {
    
    let requestWrapper : DTOs.UnsubscribeStudyStateChangedEventsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'unsubscribeStudyStateChangedEvents';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.UnsubscribeStudyStateChangedEventsResponse);
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
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class StudySetupServiceClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'studySetup/';
    }
    else{
      return rootUrl + '/studySetup/';
    }
  }
  
  
  /**
   * returns null, if there is no matching record
   */
  public getStudyTitleByIdentifier(): Observable<string> {
    
    let requestWrapper : DTOs.GetStudyTitleByIdentifierRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getStudyTitleByIdentifier';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetStudyTitleByIdentifierResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
}

export class SmsConnector {
  
  private instituteMgmtServiceClient: InstituteMgmtServiceClient;
  
  private siteParticipationServiceClient: SiteParticipationServiceClient;
  
  private smsApiInfoServiceClient: SmsApiInfoServiceClient;
  
  private studyAccessServiceClient: StudyAccessServiceClient;
  
  private studySetupServiceClient: StudySetupServiceClient;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){
  
    this.instituteMgmtServiceClient = new InstituteMgmtServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.siteParticipationServiceClient = new SiteParticipationServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.smsApiInfoServiceClient = new SmsApiInfoServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.studyAccessServiceClient = new StudyAccessServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.studySetupServiceClient = new StudySetupServiceClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get instituteMgmtService(): InstituteMgmtServiceClient { return this.instituteMgmtServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get siteParticipationService(): SiteParticipationServiceClient { return this.siteParticipationServiceClient }
  
  /**
   * Provides interoperability information for the current implementation
   */
  get smsApiInfoService(): SmsApiInfoServiceClient { return this.smsApiInfoServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get studyAccessService(): StudyAccessServiceClient { return this.studyAccessServiceClient }
  
  /**
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get studySetupService(): StudySetupServiceClient { return this.studySetupServiceClient }
  
}
