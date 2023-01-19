/* based on ORSCF StudyWorkflowDefinition Contract v1.9.0.11852 */

import * as Models from './models';

/**
 * Contains arguments for calling 'SearchFhirQuestionaires'.
 * Method: Lists all FHIR Questionaires
 */
export class SearchFhirQuestionairesRequest {
  
}

/**
 * Contains results from calling 'SearchFhirQuestionaires'.
 * Method: Lists all FHIR Questionaires
 */
export class SearchFhirQuestionairesResponse {
  
  /** Out-Argument of 'SearchFhirQuestionaires' (Models.QuestionaireMetaRecord[]) */
  public result: Models.QuestionaireMetaRecord[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ExportFhirQuestionaire'.
 * Method: Exports a FHIR Questionaire by its given
 * 'questionaireIdentifyingUrl' and 'questionaireVersion'
 */
export class ExportFhirQuestionaireRequest {
  
  /** Required Argument for 'ExportFhirQuestionaire' (string) */
  public questionaireIdentifyingUrl: string = '';
  
  /** Required Argument for 'ExportFhirQuestionaire' (string) */
  public questionaireVersion: string = '';
  
}

/**
 * Contains results from calling 'ExportFhirQuestionaire'.
 * Method: Exports a FHIR Questionaire by its given
 * 'questionaireIdentifyingUrl' and 'questionaireVersion'
 */
export class ExportFhirQuestionaireResponse {
  
  /** Out-Argument of 'ExportFhirQuestionaire' (boolean) */
  public wasFound: boolean = false;
  
  /** Out-Argument of 'ExportFhirQuestionaire' (string) */
  public fhirContent: string = '';
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ImportFhirQuestionaire'.
 * Method: Imports a FHIR Questionaire into the Repository
 * The 'questionaireIdentifyingUrl' and 'questionaireVersion'
 * will be taken from the 'fhirContent'
 */
export class ImportFhirQuestionaireRequest {
  
  /** Required Argument for 'ImportFhirQuestionaire' (string) */
  public fhirContent: string = '';
  
}

/**
 * Contains results from calling 'ImportFhirQuestionaire'.
 * Method: Imports a FHIR Questionaire into the Repository
 * The 'questionaireIdentifyingUrl' and 'questionaireVersion'
 * will be taken from the 'fhirContent'
 */
export class ImportFhirQuestionaireResponse {
  
  /** Out-Argument of 'ImportFhirQuestionaire' (boolean): returns true, if this questionare was not already exisiting before the import */
  public wasNew: boolean = false;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'DeleteFhirQuestionaire'.
 * Method: Deletes a FHIR Questionaire by its given
 * 'questionaireIdentifyingUrl' and 'questionaireVersion'
 */
export class DeleteFhirQuestionaireRequest {
  
  /** Required Argument for 'DeleteFhirQuestionaire' (string) */
  public questionaireIdentifyingUrl: string = '';
  
  /** Required Argument for 'DeleteFhirQuestionaire' (string) */
  public questionaireVersion: string = '';
  
}

/**
 * Contains results from calling 'DeleteFhirQuestionaire'.
 * Method: Deletes a FHIR Questionaire by its given
 * 'questionaireIdentifyingUrl' and 'questionaireVersion'
 */
export class DeleteFhirQuestionaireResponse {
  
  /** Out-Argument of 'DeleteFhirQuestionaire' (boolean) */
  public wasDeleted: boolean = false;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export class GetApiVersionRequest {
  
}

/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export class GetApiVersionResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetApiVersion' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'WorkflowConsume', 'WorkflowSubmission', 'FhirQuestionaireConsume', 'FhirQuestionaireSubmission'
 */
export class GetCapabilitiesRequest {
  
}

/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'WorkflowConsume', 'WorkflowSubmission', 'FhirQuestionaireConsume', 'FhirQuestionaireSubmission'
 */
export class GetCapabilitiesResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetCapabilities' (String[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:WorkflowConsume") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesRequest {
  
}

/**
 * Contains results from calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:WorkflowConsume") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesResponse {
  
  /** Out-Argument of 'GetPermittedAuthScopes' (number) */
  public authState: number = 0;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetPermittedAuthScopes' (String[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export class GetOAuthTokenRequestUrlRequest {
  
}

/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export class GetOAuthTokenRequestUrlResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetOAuthTokenRequestUrl' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'SearchWorkflowDefinitions'.
 * Method: Lists all ORSCF 'ResearchStudyDefinitions'
 */
export class SearchWorkflowDefinitionsRequest {
  
}

/**
 * Contains results from calling 'SearchWorkflowDefinitions'.
 * Method: Lists all ORSCF 'ResearchStudyDefinitions'
 */
export class SearchWorkflowDefinitionsResponse {
  
  /** Out-Argument of 'SearchWorkflowDefinitions' (Models.ResearchStudyDefinitionMetaRecord[]) */
  public result: Models.ResearchStudyDefinitionMetaRecord[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ExportWorkflowDefinition'.
 * Method: Exports a ORSCF 'ResearchStudyDefinition' by its given
 * 'workflowDefinitionName' and 'workflowVersion'
 */
export class ExportWorkflowDefinitionRequest {
  
  /** Required Argument for 'ExportWorkflowDefinition' (string) */
  public workflowDefinitionName: string = '';
  
  /** Required Argument for 'ExportWorkflowDefinition' (string) */
  public workflowVersion: string = '';
  
}

/**
 * Contains results from calling 'ExportWorkflowDefinition'.
 * Method: Exports a ORSCF 'ResearchStudyDefinition' by its given
 * 'workflowDefinitionName' and 'workflowVersion'
 */
export class ExportWorkflowDefinitionResponse {
  
  /** Out-Argument of 'ExportWorkflowDefinition' (boolean) */
  public wasFound: boolean = false;
  
  /** Out-Argument of 'ExportWorkflowDefinition' (Models.ResearchStudyDefinition) */
  public result: Models.ResearchStudyDefinition = new Models.ResearchStudyDefinition();
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'ImportWorkflowDefinition'.
 * Method: Imports a ORSCF 'ResearchStudyDefinition' into the Repository
 * The 'workflowDefinitionName' and 'workflowVersion'
 * will be taken from the definition itself
 */
export class ImportWorkflowDefinitionRequest {
  
  /** Required Argument for 'ImportWorkflowDefinition' (Models.ResearchStudyDefinition) */
  public workflowDefinition: Models.ResearchStudyDefinition = new Models.ResearchStudyDefinition();
  
}

/**
 * Contains results from calling 'ImportWorkflowDefinition'.
 * Method: Imports a ORSCF 'ResearchStudyDefinition' into the Repository
 * The 'workflowDefinitionName' and 'workflowVersion'
 * will be taken from the definition itself
 */
export class ImportWorkflowDefinitionResponse {
  
  /** Out-Argument of 'ImportWorkflowDefinition' (boolean): returns true, if this questionare was not already exisiting before the import */
  public wasNew: boolean = false;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'DeleteWorkflowDefinition'.
 * Method: Deletes a ORSCF 'ResearchStudyDefinition' by its given
 * 'workflowDefinitionName' and 'workflowVersion'
 */
export class DeleteWorkflowDefinitionRequest {
  
  /** Required Argument for 'DeleteWorkflowDefinition' (string) */
  public workflowDefinitionName: string = '';
  
  /** Required Argument for 'DeleteWorkflowDefinition' (string) */
  public workflowVersion: string = '';
  
}

/**
 * Contains results from calling 'DeleteWorkflowDefinition'.
 * Method: Deletes a ORSCF 'ResearchStudyDefinition' by its given
 * 'workflowDefinitionName' and 'workflowVersion'
 */
export class DeleteWorkflowDefinitionResponse {
  
  /** Out-Argument of 'DeleteWorkflowDefinition' (boolean) */
  public wasDeleted: boolean = false;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}
