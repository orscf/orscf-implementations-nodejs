/* based on ORSCF StudyWorkflowDefinition Contract v1.8.0.0 */

import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as DTOs from 'orscf-studyworkflowdefinition-contract/dtos';
import * as Models from 'orscf-studyworkflowdefinition-contract/models';
import * as Interfaces from 'orscf-studyworkflowdefinition-contract/interfaces';


/**
 * Provides CRUD access to stored ResearchStudyDefinitions (based on schema version '1.5.0')
 */
export class ResearchStudyDefinitionsClient {
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){}
  
  private getEndpointUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl + 'researchStudyDefinitions/';
    }
    else{
      return rootUrl + '/researchStudyDefinitions/';
    }
  }
  
  
  /**
   * Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public getResearchStudyDefinitionByResearchStudyDefinitionIdentity(): Observable<Models.ResearchStudyDefinition> {
    
    let requestWrapper : DTOs.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getResearchStudyDefinitionByResearchStudyDefinitionIdentity';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Loads ResearchStudyDefinitions.
   */
  public getResearchStudyDefinitions(): Observable<Models.ResearchStudyDefinition[]> {
    
    let requestWrapper : DTOs.GetResearchStudyDefinitionsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'getResearchStudyDefinitions';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.GetResearchStudyDefinitionsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Loads ResearchStudyDefinitions where values matching to the given filterExpression
   */
  public searchResearchStudyDefinitions(): Observable<Models.ResearchStudyDefinition[]> {
    
    let requestWrapper : DTOs.SearchResearchStudyDefinitionsRequest = {
    };
    
    let url = this.getEndpointUrl() + 'searchResearchStudyDefinitions';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.SearchResearchStudyDefinitionsResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
   */
  public addNewResearchStudyDefinition(): Observable<boolean> {
    
    let requestWrapper : DTOs.AddNewResearchStudyDefinitionRequest = {
    };
    
    let url = this.getEndpointUrl() + 'addNewResearchStudyDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.AddNewResearchStudyDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
   */
  public updateResearchStudyDefinition(): Observable<boolean> {
    
    let requestWrapper : DTOs.UpdateResearchStudyDefinitionRequest = {
    };
    
    let url = this.getEndpointUrl() + 'updateResearchStudyDefinition';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.UpdateResearchStudyDefinitionResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public updateResearchStudyDefinitionByResearchStudyDefinitionIdentity(): Observable<boolean> {
    
    let requestWrapper : DTOs.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = {
    };
    
    let url = this.getEndpointUrl() + 'updateResearchStudyDefinitionByResearchStudyDefinitionIdentity';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
  /**
   * Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity(): Observable<boolean> {
    
    let requestWrapper : DTOs.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest = {
    };
    
    let url = this.getEndpointUrl() + 'deleteResearchStudyDefinitionByResearchStudyDefinitionIdentity';
    return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).pipe(map(
      (r) => {
        let responseWrapper = (r as DTOs.DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse);
        if(responseWrapper.fault){
          console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
          throw {message: responseWrapper.fault};
        }
        return responseWrapper.return;
      }
    ));
  }
  
}

export class WdrConnector {
  
  private researchStudyDefinitionsClient: ResearchStudyDefinitionsClient;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Observable<any>
  ){
  
    this.researchStudyDefinitionsClient = new ResearchStudyDefinitionsClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    
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
  get researchStudyDefinitions(): ResearchStudyDefinitionsClient { return this.researchStudyDefinitionsClient }
  
}
