/* based on ORSCF IdentityManagement Contract v1.8.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-identitymanagement-contract/dtos';
import * as Models from 'orscf-identitymanagement-contract/models';
import * as Interfaces from 'orscf-identitymanagement-contract/interfaces';

/**
 * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
 */
export class IdentityUnblindingClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'identityUnblinding/';
    }
    else{
      return rootUrl + '/identityUnblinding/';
    }
  }
  
  /**
   * returns an unblindingToken which is not activated
   */
  public requestUnblindingToken(researchStudyName: string, subjectId: string, reason: string, requestingPerson: string): Promise<string> {
    
    let requestWrapper : DTOs.RequestUnblindingTokenRequest = {
      researchStudyName: researchStudyName,
      subjectId: subjectId,
      reason: reason,
      requestingPerson: requestingPerson
    };
    
    let url = this.getEndpointUrl() + 'requestUnblindingToken';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.RequestUnblindingTokenResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
   */
  public getUnblindingTokenState(unblindingToken: string): Promise<number> {
    
    let requestWrapper : DTOs.GetUnblindingTokenStateRequest = {
      unblindingToken: unblindingToken
    };
    
    let url = this.getEndpointUrl() + 'getUnblindingTokenState';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetUnblindingTokenStateResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * (only works with an activated unblindingOtp )
   */
  public unblindSubject(researchStudyName: string, subjectId: string, unblindingToken: string): Promise<Models.IdentityDetails> {
    
    let requestWrapper : DTOs.UnblindSubjectRequest = {
      researchStudyName: researchStudyName,
      subjectId: subjectId,
      unblindingToken: unblindingToken
    };
    
    let url = this.getEndpointUrl() + 'unblindSubject';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UnblindSubjectResponse);
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
 * Provides interoperability information for the current implementation
 */
export class ImsApiInfoClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'imsApiInfo/';
    }
    else{
      return rootUrl + '/imsApiInfo/';
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
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'Pseudonymization', 'IdentityUnblinding',
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
   * returns a list of available capabilities ("API:Pseudonymization") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
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
 * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
 */
export class PseudonymizationClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'pseudonymization/';
    }
    else{
      return rootUrl + '/pseudonymization/';
    }
  }
  
  /**
   * GetExtendedFieldDescriptors
   */
  public getExtendedFieldDescriptors(languagePref: string = 'EN'): Promise<Models.ExtendedFieldDescriptor[]> {
    
    let requestWrapper : DTOs.GetExtendedFieldDescriptorsRequest = {
      languagePref: languagePref
    };
    
    let url = this.getEndpointUrl() + 'getExtendedFieldDescriptors';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetExtendedFieldDescriptorsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * GetOrCreatePseudonym
   */
  public getOrCreatePseudonym(researchStudyUid: string, givenName: string, familyName: string, birthDate: string, extendedFields: Object, siteUid: string): Promise<{pseudonym: string, wasCreatedNewly: boolean, return: boolean}> {
    
    let requestWrapper : DTOs.GetOrCreatePseudonymRequest = {
      researchStudyUid: researchStudyUid,
      givenName: givenName,
      familyName: familyName,
      birthDate: birthDate,
      extendedFields: extendedFields,
      siteUid: siteUid,
    };
    
    let url = this.getEndpointUrl() + 'getOrCreatePseudonym';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetOrCreatePseudonymResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {pseudonym: responseWrapper.pseudonym, wasCreatedNewly: responseWrapper.wasCreatedNewly, return: responseWrapper.return};
      }
    );
  }
  
  /**
   * GetExisitingPseudonym
   */
  public getExisitingPseudonym(researchStudyUid: string, givenName: string, familyName: string, birthDate: string, extendedFields: Object): Promise<{pseudonym: string, return: boolean}> {
    
    let requestWrapper : DTOs.GetExisitingPseudonymRequest = {
      researchStudyUid: researchStudyUid,
      givenName: givenName,
      familyName: familyName,
      birthDate: birthDate,
      extendedFields: extendedFields,
    };
    
    let url = this.getEndpointUrl() + 'getExisitingPseudonym';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetExisitingPseudonymResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {pseudonym: responseWrapper.pseudonym, return: responseWrapper.return};
      }
    );
  }
  
}

export class ImsConnector {
  
  private identityUnblindingClient: IdentityUnblindingClient;
  
  private imsApiInfoClient: ImsApiInfoClient;
  
  private pseudonymizationClient: PseudonymizationClient;
  
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
    
    this.identityUnblindingClient = new IdentityUnblindingClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.imsApiInfoClient = new ImsApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.pseudonymizationClient = new PseudonymizationClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
   * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
   */
  get identityUnblinding(): IdentityUnblindingClient { return this.identityUnblindingClient }
  
  /**
   * Provides interoperability information for the current implementation
   */
  get imsApiInfo(): ImsApiInfoClient { return this.imsApiInfoClient }
  
  /**
   * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
   */
  get pseudonymization(): PseudonymizationClient { return this.pseudonymizationClient }
  
}
