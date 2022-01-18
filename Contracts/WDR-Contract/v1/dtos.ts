/* based on ORSCF StudyWorkflowDefinition Contract v1.7.0.0 */

import * as Models from './models';

/**
 * Contains arguments for calling 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
 */
export class GetResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest {
  
  // Required Argument for 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinitionIdentity): Composite Key, which represents the primary identity of a ResearchStudyDefinition
  public researchStudyDefinitionIdentity : Models.ResearchStudyDefinitionIdentity;
  
}

/**
 * Contains results from calling 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Loads a specific ResearchStudyDefinition addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
 */
export class GetResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetResearchStudyDefinitionByResearchStudyDefinitionIdentity' (ResearchStudyDefinition)
  public return : Models.ResearchStudyDefinition;
  
}

/**
 * Contains arguments for calling 'GetResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions.
 */
export class GetResearchStudyDefinitionsRequest {
  
  // Optional Argument for 'GetResearchStudyDefinitions' (number): Number of the page, which should be returned
  public page? : number = null;
  
  // Optional Argument for 'GetResearchStudyDefinitions' (number): Max count of ResearchStudyDefinitions which should be returned
  public pageSize? : number = null;
  
}

/**
 * Contains results from calling 'GetResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions.
 */
export class GetResearchStudyDefinitionsResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'GetResearchStudyDefinitions' (ResearchStudyDefinition[])
  public return : Models.ResearchStudyDefinition[];
  
}

/**
 * Contains arguments for calling 'SearchResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions where values matching to the given filterExpression
 */
export class SearchResearchStudyDefinitionsRequest {
  
  // Required Argument for 'SearchResearchStudyDefinitions' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
  public filterExpression : string;
  
  // Optional Argument for 'SearchResearchStudyDefinitions' (string): one or more property names which are used as sort order (before pagination)
  public sortingExpression? : string;
  
  // Optional Argument for 'SearchResearchStudyDefinitions' (number): Number of the page, which should be returned
  public page? : number = null;
  
  // Optional Argument for 'SearchResearchStudyDefinitions' (number): Max count of ResearchStudyDefinitions which should be returned
  public pageSize? : number = null;
  
}

/**
 * Contains results from calling 'SearchResearchStudyDefinitions'.
 * Method: Loads ResearchStudyDefinitions where values matching to the given filterExpression
 */
export class SearchResearchStudyDefinitionsResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'SearchResearchStudyDefinitions' (ResearchStudyDefinition[])
  public return : Models.ResearchStudyDefinition[];
  
}

/**
 * Contains arguments for calling 'AddNewResearchStudyDefinition'.
 * Method: Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
 */
export class AddNewResearchStudyDefinitionRequest {
  
  // Required Argument for 'AddNewResearchStudyDefinition' (Models.ResearchStudyDefinition): ResearchStudyDefinition containing the new values
  public researchStudyDefinition : Models.ResearchStudyDefinition;
  
}

/**
 * Contains results from calling 'AddNewResearchStudyDefinition'.
 * Method: Adds a new ResearchStudyDefinition and returns its primary identifier (or null on failure).
 */
export class AddNewResearchStudyDefinitionResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'AddNewResearchStudyDefinition' (Boolean)
  public return : boolean;
  
}

/**
 * Contains arguments for calling 'UpdateResearchStudyDefinition'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
 */
export class UpdateResearchStudyDefinitionRequest {
  
  // Required Argument for 'UpdateResearchStudyDefinition' (Models.ResearchStudyDefinition): ResearchStudyDefinition containing the new values (the primary identifier fields within the given ResearchStudyDefinition will be used to address the target record)
  public researchStudyDefinition : Models.ResearchStudyDefinition;
  
}

/**
 * Contains results from calling 'UpdateResearchStudyDefinition'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the primary identifier fields within the given ResearchStudyDefinition. Returns false on failure or if no target record was found, otherwise true.
 */
export class UpdateResearchStudyDefinitionResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'UpdateResearchStudyDefinition' (Boolean)
  public return : boolean;
  
}

/**
 * Contains arguments for calling 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export class UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest {
  
  // Required Argument for 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinitionIdentity): Composite Key, which represents the primary identity of a ResearchStudyDefinition
  public researchStudyDefinitionIdentity : Models.ResearchStudyDefinitionIdentity;
  
  // Required Argument for 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinition): ResearchStudyDefinition containing the new values (the primary identifier fields within the given ResearchStudyDefinition will be ignored)
  public researchStudyDefinition : Models.ResearchStudyDefinition;
  
}

/**
 * Contains results from calling 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Updates all values (which are not "FixedAfterCreation") of the given ResearchStudyDefinition addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export class UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'UpdateResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Boolean)
  public return : boolean;
  
}

/**
 * Contains arguments for calling 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export class DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityRequest {
  
  // Required Argument for 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Models.ResearchStudyDefinitionIdentity): Composite Key, which represents the primary identity of a ResearchStudyDefinition
  public researchStudyDefinitionIdentity : Models.ResearchStudyDefinitionIdentity;
  
}

/**
 * Contains results from calling 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity'.
 * Method: Deletes a specific ResearchStudyDefinition addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
 */
export class DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentityResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault : string = null;
  
  // Return-Value of 'DeleteResearchStudyDefinitionByResearchStudyDefinitionIdentity' (Boolean)
  public return : boolean;
  
}
