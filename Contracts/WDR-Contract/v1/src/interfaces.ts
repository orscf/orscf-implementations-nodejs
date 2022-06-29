/* based on ORSCF StudyWorkflowDefinition Contract v1.9.0.0 */

import * as Models from './models';

export interface IFhirQuestionaireConsumeService {
  
  /**
   * Lists all FHIR Questionaires
   */
  SearchFhirQuestionaires() : Promise<{result: Models.QuestionaireMetaRecord[]}>;
  
  /**
   * Exports a FHIR Questionaire by its given 'questionaireIdentifyingUrl' and 'questionaireVersion'
   *
   * @param questionaireIdentifyingUrl
   * @param questionaireVersion
   */
  ExportFhirQuestionaire(questionaireIdentifyingUrl : string, questionaireVersion : string) : Promise<{wasFound: boolean, fhirContent: string}>;
  
}

export interface IFhirQuestionaireSubmissionService {
  
  /**
   * Imports a FHIR Questionaire into the Repository The 'questionaireIdentifyingUrl' and 'questionaireVersion' will be taken from the 'fhirContent'
   *
   * @param fhirContent
   */
  ImportFhirQuestionaire(fhirContent : string) : Promise<{wasNew: boolean}>;
  
  /**
   * Deletes a FHIR Questionaire by its given 'questionaireIdentifyingUrl' and 'questionaireVersion'
   *
   * @param questionaireIdentifyingUrl
   * @param questionaireVersion
   */
  DeleteFhirQuestionaire(questionaireIdentifyingUrl : string, questionaireVersion : string) : Promise<{wasDeleted: boolean}>;
  
}

export interface IWdrApiInfoService {
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  GetApiVersion() : Promise<string>;
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'WorkflowConsume', 'WorkflowSubmission', 'FhirQuestionaireConsume', 'FhirQuestionaireSubmission'
   */
  GetCapabilities() : Promise<string[]>;
  
  /**
   * returns a list of available capabilities ("API:WorkflowConsume") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  GetPermittedAuthScopes() : Promise<{authState: number, return: string[]}>;
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  GetOAuthTokenRequestUrl() : Promise<string>;
  
}

export interface IWorkflowConsumeService {
  
  /**
   * Lists all ORSCF 'ResearchStudyDefinitions'
   */
  SearchWorkflowDefinitions() : Promise<{result: Models.ResearchStudyDefinitionMetaRecord[]}>;
  
  /**
   * Exports a ORSCF 'ResearchStudyDefinition' by its given 'workflowDefinitionName' and 'workflowVersion'
   *
   * @param workflowDefinitionName
   * @param workflowVersion
   */
  ExportWorkflowDefinition(workflowDefinitionName : string, workflowVersion : string) : Promise<{wasFound: boolean, result: Models.ResearchStudyDefinition}>;
  
}

export interface IWorkflowSubmissionService {
  
  /**
   * Imports a ORSCF 'ResearchStudyDefinition' into the Repository The 'workflowDefinitionName' and 'workflowVersion' will be taken from the definition itself
   *
   * @param workflowDefinition
   */
  ImportWorkflowDefinition(workflowDefinition : Models.ResearchStudyDefinition) : Promise<{wasNew: boolean}>;
  
  /**
   * Deletes a ORSCF 'ResearchStudyDefinition' by its given 'workflowDefinitionName' and 'workflowVersion'
   *
   * @param workflowDefinitionName
   * @param workflowVersion
   */
  DeleteWorkflowDefinition(workflowDefinitionName : string, workflowVersion : string) : Promise<{wasDeleted: boolean}>;
  
}
