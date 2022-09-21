/* based on ORSCF StudyWorkflowDefinition Contract v1.9.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-studyworkflowdefinition-contract';
import * as Models from 'orscf-studyworkflowdefinition-contract';
import * as Interfaces from 'orscf-studyworkflowdefinition-contract';

/**
 * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to consume FHIR Questionaires
 */
export class FhirQuestionaireConsumeClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'fhirQuestionaireConsume/';
    }
    else{
      return rootUrl + '/fhirQuestionaireConsume/';
    }
  }
  
  /**
   * Lists all FHIR Questionaires
   */
  public searchFhirQuestionaires(): Promise<{result: Models.QuestionaireMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchFhirQuestionairesRequest = {
    };
    
    let url = this.getEndpointUrl() + 'searchFhirQuestionaires';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchFhirQuestionairesResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {result: responseWrapper.result};
      }
    );
  }
  
  /**
   * Exports a FHIR Questionaire by its given 'questionaireIdentifyingUrl' and 'questionaireVersion'
   */
  public exportFhirQuestionaire(questionaireIdentifyingUrl: string, questionaireVersion: string): Promise<{wasFound: boolean, fhirContent: string}> {
    
    let requestWrapper : DTOs.ExportFhirQuestionaireRequest = {
      questionaireIdentifyingUrl: questionaireIdentifyingUrl,
      questionaireVersion: questionaireVersion,
    };
    
    let url = this.getEndpointUrl() + 'exportFhirQuestionaire';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ExportFhirQuestionaireResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {wasFound: responseWrapper.wasFound, fhirContent: responseWrapper.fhirContent};
      }
    );
  }
  
}

/**
 * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to manage FHIR Questionaires
 */
export class FhirQuestionaireSubmissionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'fhirQuestionaireSubmission/';
    }
    else{
      return rootUrl + '/fhirQuestionaireSubmission/';
    }
  }
  
  /**
   * Imports a FHIR Questionaire into the Repository The 'questionaireIdentifyingUrl' and 'questionaireVersion' will be taken from the 'fhirContent'
   */
  public importFhirQuestionaire(fhirContent: string): Promise<{wasNew: boolean}> {
    
    let requestWrapper : DTOs.ImportFhirQuestionaireRequest = {
      fhirContent: fhirContent,
    };
    
    let url = this.getEndpointUrl() + 'importFhirQuestionaire';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportFhirQuestionaireResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {wasNew: responseWrapper.wasNew};
      }
    );
  }
  
  /**
   * Deletes a FHIR Questionaire by its given 'questionaireIdentifyingUrl' and 'questionaireVersion'
   */
  public deleteFhirQuestionaire(questionaireIdentifyingUrl: string, questionaireVersion: string): Promise<{wasDeleted: boolean}> {
    
    let requestWrapper : DTOs.DeleteFhirQuestionaireRequest = {
      questionaireIdentifyingUrl: questionaireIdentifyingUrl,
      questionaireVersion: questionaireVersion,
    };
    
    let url = this.getEndpointUrl() + 'deleteFhirQuestionaire';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.DeleteFhirQuestionaireResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {wasDeleted: responseWrapper.wasDeleted};
      }
    );
  }
  
}

/**
 * Provides interoperability information for the current implementation
 */
export class WdrApiInfoClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'wdrApiInfo/';
    }
    else{
      return rootUrl + '/wdrApiInfo/';
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
        if (responseWrapper.return == undefined){
          throw { message: 'response dto contains no "return" value!'};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'WorkflowConsume', 'WorkflowSubmission', 'FhirQuestionaireConsume', 'FhirQuestionaireSubmission'
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
        if (responseWrapper.return == undefined){
          throw { message: 'response dto contains no "return" value!'};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * returns a list of available capabilities ("API:WorkflowConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
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
        if (responseWrapper.return == undefined){
          throw { message: 'response dto contains no "return" value!'};
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
        if (responseWrapper.return == undefined){
          throw { message: 'response dto contains no "return" value!'};
        }
        return responseWrapper.return;
      }
    );
  }
  
}

/**
 * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to consume ORSCF 'ResearchStudyDefinitions'
 */
export class WorkflowConsumeClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'workflowConsume/';
    }
    else{
      return rootUrl + '/workflowConsume/';
    }
  }
  
  /**
   * Lists all ORSCF 'ResearchStudyDefinitions'
   */
  public searchWorkflowDefinitions(): Promise<{result: Models.ResearchStudyDefinitionMetaRecord[]}> {
    
    let requestWrapper : DTOs.SearchWorkflowDefinitionsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'searchWorkflowDefinitions';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchWorkflowDefinitionsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {result: responseWrapper.result};
      }
    );
  }
  
  /**
   * Exports a ORSCF 'ResearchStudyDefinition' by its given 'workflowDefinitionName' and 'workflowVersion'
   */
  public exportWorkflowDefinition(workflowDefinitionName: string, workflowVersion: string): Promise<{wasFound: boolean, result: Models.ResearchStudyDefinition}> {
    
    let requestWrapper : DTOs.ExportWorkflowDefinitionRequest = {
      workflowDefinitionName: workflowDefinitionName,
      workflowVersion: workflowVersion,
    };
    
    let url = this.getEndpointUrl() + 'exportWorkflowDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ExportWorkflowDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {wasFound: responseWrapper.wasFound, result: responseWrapper.result};
      }
    );
  }
  
}

/**
 * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to manage ORSCF 'ResearchStudyDefinitions'
 */
export class WorkflowSubmissionClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'workflowSubmission/';
    }
    else{
      return rootUrl + '/workflowSubmission/';
    }
  }
  
  /**
   * Imports a ORSCF 'ResearchStudyDefinition' into the Repository The 'workflowDefinitionName' and 'workflowVersion' will be taken from the definition itself
   */
  public importWorkflowDefinition(workflowDefinition: Models.ResearchStudyDefinition): Promise<{wasNew: boolean}> {
    
    let requestWrapper : DTOs.ImportWorkflowDefinitionRequest = {
      workflowDefinition: workflowDefinition,
    };
    
    let url = this.getEndpointUrl() + 'importWorkflowDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.ImportWorkflowDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {wasNew: responseWrapper.wasNew};
      }
    );
  }
  
  /**
   * Deletes a ORSCF 'ResearchStudyDefinition' by its given 'workflowDefinitionName' and 'workflowVersion'
   */
  public deleteWorkflowDefinition(workflowDefinitionName: string, workflowVersion: string): Promise<{wasDeleted: boolean}> {
    
    let requestWrapper : DTOs.DeleteWorkflowDefinitionRequest = {
      workflowDefinitionName: workflowDefinitionName,
      workflowVersion: workflowVersion,
    };
    
    let url = this.getEndpointUrl() + 'deleteWorkflowDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.DeleteWorkflowDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return {wasDeleted: responseWrapper.wasDeleted};
      }
    );
  }
  
}

export class WdrConnector {
  
  private fhirQuestionaireConsumeClient: FhirQuestionaireConsumeClient;
  
  private fhirQuestionaireSubmissionClient: FhirQuestionaireSubmissionClient;
  
  private wdrApiInfoClient: WdrApiInfoClient;
  
  private workflowConsumeClient: WorkflowConsumeClient;
  
  private workflowSubmissionClient: WorkflowSubmissionClient;
  
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
    
    this.fhirQuestionaireConsumeClient = new FhirQuestionaireConsumeClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.fhirQuestionaireSubmissionClient = new FhirQuestionaireSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.wdrApiInfoClient = new WdrApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.workflowConsumeClient = new WorkflowConsumeClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    this.workflowSubmissionClient = new WorkflowSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
   * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to consume FHIR Questionaires
   */
  get fhirQuestionaireConsume(): FhirQuestionaireConsumeClient { return this.fhirQuestionaireConsumeClient }
  
  /**
   * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to manage FHIR Questionaires
   */
  get fhirQuestionaireSubmission(): FhirQuestionaireSubmissionClient { return this.fhirQuestionaireSubmissionClient }
  
  /**
   * Provides interoperability information for the current implementation
   */
  get wdrApiInfo(): WdrApiInfoClient { return this.wdrApiInfoClient }
  
  /**
   * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to consume ORSCF 'ResearchStudyDefinitions'
   */
  get workflowConsume(): WorkflowConsumeClient { return this.workflowConsumeClient }
  
  /**
   * Provides an API for accessing a 'WorkflowDefinitionRepository' (WDR) in order to manage ORSCF 'ResearchStudyDefinitions'
   */
  get workflowSubmission(): WorkflowSubmissionClient { return this.workflowSubmissionClient }
  
}
