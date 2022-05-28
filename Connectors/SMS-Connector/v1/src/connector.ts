/* based on ORSCF StudyManagement Contract v1.8.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-studymanagement-contract';
import * as Models from 'orscf-studymanagement-contract';
import * as Interfaces from 'orscf-studymanagement-contract';

/**
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class InstituteMgmtClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
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
  public getInstituteUidByTitle(instituteTitle: string): Promise<string> {
    
    let requestWrapper : DTOs.GetInstituteUidByTitleRequest = {
      instituteTitle: instituteTitle
    };
    
    let url = this.getEndpointUrl() + 'getInstituteUidByTitle';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetInstituteUidByTitleResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * GetInstituteTitleByUid
   */
  public getInstituteTitleByUid(instituteUid: string): Promise<string> {
    
    let requestWrapper : DTOs.GetInstituteTitleByUidRequest = {
      instituteUid: instituteUid
    };
    
    let url = this.getEndpointUrl() + 'getInstituteTitleByUid';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetInstituteTitleByUidResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * ArchiveInstitute
   */
  public archiveInstitute(instituteUid: string): Promise<string> {
    
    let requestWrapper : DTOs.ArchiveInstituteRequest = {
      instituteUid: instituteUid
    };
    
    let url = this.getEndpointUrl() + 'archiveInstitute';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ArchiveInstituteResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * GetInstituteInfos
   */
  public getInstituteInfos(instituteUid: string): Promise<string> {
    
    let requestWrapper : DTOs.GetInstituteInfosRequest = {
      instituteUid: instituteUid
    };
    
    let url = this.getEndpointUrl() + 'getInstituteInfos';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetInstituteInfosResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * ensures, that an institute with the given Uid exists and returns true, if it has been newly created
   */
  public createInstituteIfMissing(instituteUid: string): Promise<boolean> {
    
    let requestWrapper : DTOs.CreateInstituteIfMissingRequest = {
      instituteUid: instituteUid
    };
    
    let url = this.getEndpointUrl() + 'createInstituteIfMissing';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.CreateInstituteIfMissingResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * updated the title of the the institute or returns false, if there is no record for the given instituteUid
   */
  public updateInstitueTitle(instituteUid: string, newTitle: string): Promise<boolean> {
    
    let requestWrapper : DTOs.UpdateInstitueTitleRequest = {
      instituteUid: instituteUid,
      newTitle: newTitle
    };
    
    let url = this.getEndpointUrl() + 'updateInstitueTitle';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UpdateInstitueTitleResponse);
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
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class SiteParticipationClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
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
export class SmsApiInfoClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
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
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'InstituteMgmt', 'StudySetup', 'StudyAccess', 'SiteParticipation'
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
   * returns a list of available capabilities ("API:StudyAccess") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
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
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class StudyAccessClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
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
  public subscribeStudyStateChangedEvents(eventQueueId: string): Promise<boolean> {
    
    let requestWrapper : DTOs.SubscribeStudyStateChangedEventsRequest = {
      eventQueueId: eventQueueId
    };
    
    let url = this.getEndpointUrl() + 'subscribeStudyStateChangedEvents';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SubscribeStudyStateChangedEventsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Unsubscribes the Event when the State of a Study was changed for the given "EventQueue"
   */
  public unsubscribeStudyStateChangedEvents(eventQueueId: string): Promise<boolean> {
    
    let requestWrapper : DTOs.UnsubscribeStudyStateChangedEventsRequest = {
      eventQueueId: eventQueueId
    };
    
    let url = this.getEndpointUrl() + 'unsubscribeStudyStateChangedEvents';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UnsubscribeStudyStateChangedEventsResponse);
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
 * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
 */
export class StudySetupClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
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
  public getStudyTitleByIdentifier(studyIdentifier: string): Promise<string> {
    
    let requestWrapper : DTOs.GetStudyTitleByIdentifierRequest = {
      studyIdentifier: studyIdentifier
    };
    
    let url = this.getEndpointUrl() + 'getStudyTitleByIdentifier';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetStudyTitleByIdentifierResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
}

export class SmsConnector {
  
  private instituteMgmtClient: InstituteMgmtClient;
  
  private siteParticipationClient: SiteParticipationClient;
  
  private smsApiInfoClient: SmsApiInfoClient;
  
  private studyAccessClient: StudyAccessClient;
  
  private studySetupClient: StudySetupClient;
  
  private axiosHttpApi?: AxiosInstance;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){
  
    if (this.httpPostMethod == null) {
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
    
    this.instituteMgmtClient = new InstituteMgmtClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.siteParticipationClient = new SiteParticipationClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.smsApiInfoClient = new SmsApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.studyAccessClient = new StudyAccessClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.studySetupClient = new StudySetupClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
  get instituteMgmt(): InstituteMgmtClient { return this.instituteMgmtClient }
  
  /**
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get siteParticipation(): SiteParticipationClient { return this.siteParticipationClient }
  
  /**
   * Provides interoperability information for the current implementation
   */
  get smsApiInfo(): SmsApiInfoClient { return this.smsApiInfoClient }
  
  /**
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get studyAccess(): StudyAccessClient { return this.studyAccessClient }
  
  /**
   * Provides an workflow-level API for interating with a 'StudyManagementSystem' (SMS)
   */
  get studySetup(): StudySetupClient { return this.studySetupClient }
  
}
