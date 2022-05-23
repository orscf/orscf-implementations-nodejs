/* based on ORSCF StudyWorkflowDefinition Contract v1.8.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-studyworkflowdefinition-contract/dtos';
import * as Models from 'orscf-studyworkflowdefinition-contract/models';
import * as Interfaces from 'orscf-studyworkflowdefinition-contract/interfaces';

/**
 * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
 */
export class ResearchStudyDefiClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'researchStudyDefi/';
    }
    else{
      return rootUrl + '/researchStudyDefi/';
    }
  }
  
  /**
   * Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public getResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity): Promise<Models.ResearchStudyDefinition> {
    
    let requestWrapper : DTOs.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = {
      researchStudyDefinitionIdentity: researchStudyDefinitionIdentity
    };
    
    let url = this.getEndpointUrl() + 'getResearchStudyDefinitionByResearchStudyDefinitionIdentity';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Loads ResearchStudyDefinitions.
   */
  public getResearchStudyDefinitions(page: number = 1, pageSize: number = 20): Promise<Models.ResearchStudyDefinition[]> {
    
    let requestWrapper : DTOs.GetResearchStudyDefinitionsRequest = {
      page: page,
      pageSize: pageSize
    };
    
    let url = this.getEndpointUrl() + 'getResearchStudyDefinitions';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.GetResearchStudyDefinitionsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Loads ResearchStudyDefinitions where values matching to the given filterExpression
   */
  public searchResearchStudyDefinitions(filterExpression: string, sortingExpression: string = null, page: number = 1, pageSize: number = 20): Promise<Models.ResearchStudyDefinition[]> {
    
    let requestWrapper : DTOs.SearchResearchStudyDefinitionsRequest = {
      filterExpression: filterExpression,
      sortingExpression: sortingExpression,
      page: page,
      pageSize: pageSize
    };
    
    let url = this.getEndpointUrl() + 'searchResearchStudyDefinitions';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.SearchResearchStudyDefinitionsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
   */
  public addNewResearchStudyDefinition(researchStudyDefinition: Models.ResearchStudyDefinition): Promise<boolean> {
    
    let requestWrapper : DTOs.AddNewResearchStudyDefinitionRequest = {
      researchStudyDefinition: researchStudyDefinition
    };
    
    let url = this.getEndpointUrl() + 'addNewResearchStudyDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.AddNewResearchStudyDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
   */
  public updateResearchStudyDefinition(researchStudyDefinition: Models.ResearchStudyDefinition): Promise<boolean> {
    
    let requestWrapper : DTOs.UpdateResearchStudyDefinitionRequest = {
      researchStudyDefinition: researchStudyDefinition
    };
    
    let url = this.getEndpointUrl() + 'updateResearchStudyDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UpdateResearchStudyDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public updateResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity, researchStudyDefinition: Models.ResearchStudyDefinition): Promise<boolean> {
    
    let requestWrapper : DTOs.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = {
      researchStudyDefinitionIdentity: researchStudyDefinitionIdentity,
      researchStudyDefinition: researchStudyDefinition
    };
    
    let url = this.getEndpointUrl() + 'updateResearchStudyDefinitionByResearchStudyDefinitionIdentity';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
  /**
   * Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity(researchStudyDefinitionIdentity: Models.ResearchStudyDefinitionIdentity): Promise<boolean> {
    
    let requestWrapper : DTOs.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = {
      researchStudyDefinitionIdentity: researchStudyDefinitionIdentity
    };
    
    let url = this.getEndpointUrl() + 'deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then(
      (r) => {
        let responseWrapper = (r as DTOs.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    );
  }
  
}

export class WdrConnector {
  
  private researchStudyDefiClient: ResearchStudyDefiClient;
  
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
    
    this.researchStudyDefiClient = new ResearchStudyDefiClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
   * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
   */
  get researchStudyDefi(): ResearchStudyDefiClient { return this.researchStudyDefiClient }
  
}
