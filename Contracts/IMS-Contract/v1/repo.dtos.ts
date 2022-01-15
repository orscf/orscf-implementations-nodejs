/* based on ORSCF IdentityManagement Contract v1.7.0.0 */

import MedicalResearch.IdentityManagement.Model;
import MedicalResearch.IdentityManagement.StoreAccess;

namespace MedicalResearch.IdentityManagement.StoreAccess {
  
  /**
   * Contains arguments for calling 'GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity'.
   * Method: Loads a specific AdditionalSubjectParticipationIdentifier addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityRequest {
    
    // Required Argument for 'GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (AdditionalSubjectParticipationIdentifierIdentity): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
    public additionalSubjectParticipationIdentifierIdentity : AdditionalSubjectParticipationIdentifierIdentity;
    
  }
  
  /**
   * Contains results from calling 'GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity'.
   * Method: Loads a specific AdditionalSubjectParticipationIdentifier addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (AdditionalSubjectParticipationIdentifier)
    public return : AdditionalSubjectParticipationIdentifier;
    
  }
  
  /**
   * Contains arguments for calling 'GetAdditionalSubjectParticipationIdentifiers'.
   * Method: Loads AdditionalSubjectParticipationIdentifiers.
   */
  export class GetAdditionalSubjectParticipationIdentifiersRequest {
    
    // Optional Argument for 'GetAdditionalSubjectParticipationIdentifiers' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetAdditionalSubjectParticipationIdentifiers' (number): Max count of AdditionalSubjectParticipationIdentifiers which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetAdditionalSubjectParticipationIdentifiers'.
   * Method: Loads AdditionalSubjectParticipationIdentifiers.
   */
  export class GetAdditionalSubjectParticipationIdentifiersResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetAdditionalSubjectParticipationIdentifiers' (AdditionalSubjectParticipationIdentifier[])
    public return : AdditionalSubjectParticipationIdentifier[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchAdditionalSubjectParticipationIdentifiers'.
   * Method: Loads AdditionalSubjectParticipationIdentifiers where values matching to the given filterExpression
   */
  export class SearchAdditionalSubjectParticipationIdentifiersRequest {
    
    // Required Argument for 'SearchAdditionalSubjectParticipationIdentifiers' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchAdditionalSubjectParticipationIdentifiers' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchAdditionalSubjectParticipationIdentifiers' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchAdditionalSubjectParticipationIdentifiers' (number): Max count of AdditionalSubjectParticipationIdentifiers which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchAdditionalSubjectParticipationIdentifiers'.
   * Method: Loads AdditionalSubjectParticipationIdentifiers where values matching to the given filterExpression
   */
  export class SearchAdditionalSubjectParticipationIdentifiersResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchAdditionalSubjectParticipationIdentifiers' (AdditionalSubjectParticipationIdentifier[])
    public return : AdditionalSubjectParticipationIdentifier[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewAdditionalSubjectParticipationIdentifier'.
   * Method: Adds a new AdditionalSubjectParticipationIdentifier and returns its primary identifier (or null on failure).
   */
  export class AddNewAdditionalSubjectParticipationIdentifierRequest {
    
    // Required Argument for 'AddNewAdditionalSubjectParticipationIdentifier' (AdditionalSubjectParticipationIdentifier): AdditionalSubjectParticipationIdentifier containing the new values
    public additionalSubjectParticipationIdentifier : AdditionalSubjectParticipationIdentifier;
    
  }
  
  /**
   * Contains results from calling 'AddNewAdditionalSubjectParticipationIdentifier'.
   * Method: Adds a new AdditionalSubjectParticipationIdentifier and returns its primary identifier (or null on failure).
   */
  export class AddNewAdditionalSubjectParticipationIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewAdditionalSubjectParticipationIdentifier' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateAdditionalSubjectParticipationIdentifier'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given AdditionalSubjectParticipationIdentifier addressed by the primary identifier fields within the given AdditionalSubjectParticipationIdentifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateAdditionalSubjectParticipationIdentifierRequest {
    
    // Required Argument for 'UpdateAdditionalSubjectParticipationIdentifier' (AdditionalSubjectParticipationIdentifier): AdditionalSubjectParticipationIdentifier containing the new values (the primary identifier fields within the given AdditionalSubjectParticipationIdentifier will be used to address the target record)
    public additionalSubjectParticipationIdentifier : AdditionalSubjectParticipationIdentifier;
    
  }
  
  /**
   * Contains results from calling 'UpdateAdditionalSubjectParticipationIdentifier'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given AdditionalSubjectParticipationIdentifier addressed by the primary identifier fields within the given AdditionalSubjectParticipationIdentifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateAdditionalSubjectParticipationIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateAdditionalSubjectParticipationIdentifier' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given AdditionalSubjectParticipationIdentifier addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityRequest {
    
    // Required Argument for 'UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (AdditionalSubjectParticipationIdentifierIdentity): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
    public additionalSubjectParticipationIdentifierIdentity : AdditionalSubjectParticipationIdentifierIdentity;
    
    // Required Argument for 'UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (AdditionalSubjectParticipationIdentifier): AdditionalSubjectParticipationIdentifier containing the new values (the primary identifier fields within the given AdditionalSubjectParticipationIdentifier will be ignored)
    public additionalSubjectParticipationIdentifier : AdditionalSubjectParticipationIdentifier;
    
  }
  
  /**
   * Contains results from calling 'UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given AdditionalSubjectParticipationIdentifier addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity'.
   * Method: Deletes a specific AdditionalSubjectParticipationIdentifier addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityRequest {
    
    // Required Argument for 'DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (AdditionalSubjectParticipationIdentifierIdentity): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
    public additionalSubjectParticipationIdentifierIdentity : AdditionalSubjectParticipationIdentifierIdentity;
    
  }
  
  /**
   * Contains results from calling 'DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity'.
   * Method: Deletes a specific AdditionalSubjectParticipationIdentifier addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectParticipationBySubjectParticipationIdentity'.
   * Method: Loads a specific SubjectParticipation addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetSubjectParticipationBySubjectParticipationIdentityRequest {
    
    // Required Argument for 'GetSubjectParticipationBySubjectParticipationIdentity' (SubjectParticipationIdentity): Composite Key, which represents the primary identity of a SubjectParticipation
    public subjectParticipationIdentity : SubjectParticipationIdentity;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectParticipationBySubjectParticipationIdentity'.
   * Method: Loads a specific SubjectParticipation addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetSubjectParticipationBySubjectParticipationIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetSubjectParticipationBySubjectParticipationIdentity' (SubjectParticipation)
    public return : SubjectParticipation;
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectParticipations'.
   * Method: Loads SubjectParticipations.
   */
  export class GetSubjectParticipationsRequest {
    
    // Optional Argument for 'GetSubjectParticipations' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetSubjectParticipations' (number): Max count of SubjectParticipations which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectParticipations'.
   * Method: Loads SubjectParticipations.
   */
  export class GetSubjectParticipationsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetSubjectParticipations' (SubjectParticipation[])
    public return : SubjectParticipation[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchSubjectParticipations'.
   * Method: Loads SubjectParticipations where values matching to the given filterExpression
   */
  export class SearchSubjectParticipationsRequest {
    
    // Required Argument for 'SearchSubjectParticipations' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchSubjectParticipations' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchSubjectParticipations' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchSubjectParticipations' (number): Max count of SubjectParticipations which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchSubjectParticipations'.
   * Method: Loads SubjectParticipations where values matching to the given filterExpression
   */
  export class SearchSubjectParticipationsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchSubjectParticipations' (SubjectParticipation[])
    public return : SubjectParticipation[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewSubjectParticipation'.
   * Method: Adds a new SubjectParticipation and returns its primary identifier (or null on failure).
   */
  export class AddNewSubjectParticipationRequest {
    
    // Required Argument for 'AddNewSubjectParticipation' (SubjectParticipation): SubjectParticipation containing the new values
    public subjectParticipation : SubjectParticipation;
    
  }
  
  /**
   * Contains results from calling 'AddNewSubjectParticipation'.
   * Method: Adds a new SubjectParticipation and returns its primary identifier (or null on failure).
   */
  export class AddNewSubjectParticipationResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewSubjectParticipation' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectParticipation'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectParticipation addressed by the primary identifier fields within the given SubjectParticipation. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectParticipationRequest {
    
    // Required Argument for 'UpdateSubjectParticipation' (SubjectParticipation): SubjectParticipation containing the new values (the primary identifier fields within the given SubjectParticipation will be used to address the target record)
    public subjectParticipation : SubjectParticipation;
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectParticipation'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectParticipation addressed by the primary identifier fields within the given SubjectParticipation. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectParticipationResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateSubjectParticipation' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectParticipationBySubjectParticipationIdentity'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectParticipation addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectParticipationBySubjectParticipationIdentityRequest {
    
    // Required Argument for 'UpdateSubjectParticipationBySubjectParticipationIdentity' (SubjectParticipationIdentity): Composite Key, which represents the primary identity of a SubjectParticipation
    public subjectParticipationIdentity : SubjectParticipationIdentity;
    
    // Required Argument for 'UpdateSubjectParticipationBySubjectParticipationIdentity' (SubjectParticipation): SubjectParticipation containing the new values (the primary identifier fields within the given SubjectParticipation will be ignored)
    public subjectParticipation : SubjectParticipation;
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectParticipationBySubjectParticipationIdentity'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectParticipation addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectParticipationBySubjectParticipationIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateSubjectParticipationBySubjectParticipationIdentity' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteSubjectParticipationBySubjectParticipationIdentity'.
   * Method: Deletes a specific SubjectParticipation addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteSubjectParticipationBySubjectParticipationIdentityRequest {
    
    // Required Argument for 'DeleteSubjectParticipationBySubjectParticipationIdentity' (SubjectParticipationIdentity): Composite Key, which represents the primary identity of a SubjectParticipation
    public subjectParticipationIdentity : SubjectParticipationIdentity;
    
  }
  
  /**
   * Contains results from calling 'DeleteSubjectParticipationBySubjectParticipationIdentity'.
   * Method: Deletes a specific SubjectParticipation addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteSubjectParticipationBySubjectParticipationIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteSubjectParticipationBySubjectParticipationIdentity' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Loads a specific StudyExecutionScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetStudyExecutionScopeByStudyExecutionIdentifierRequest {
    
    // Required Argument for 'GetStudyExecutionScopeByStudyExecutionIdentifier' (string): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
    public studyExecutionIdentifier : string;
    
  }
  
  /**
   * Contains results from calling 'GetStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Loads a specific StudyExecutionScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetStudyExecutionScopeByStudyExecutionIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetStudyExecutionScopeByStudyExecutionIdentifier' (StudyExecutionScope)
    public return : StudyExecutionScope;
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes.
   */
  export class GetStudyExecutionScopesRequest {
    
    // Optional Argument for 'GetStudyExecutionScopes' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetStudyExecutionScopes' (number): Max count of StudyExecutionScopes which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes.
   */
  export class GetStudyExecutionScopesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetStudyExecutionScopes' (StudyExecutionScope[])
    public return : StudyExecutionScope[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes where values matching to the given filterExpression
   */
  export class SearchStudyExecutionScopesRequest {
    
    // Required Argument for 'SearchStudyExecutionScopes' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchStudyExecutionScopes' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchStudyExecutionScopes' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchStudyExecutionScopes' (number): Max count of StudyExecutionScopes which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes where values matching to the given filterExpression
   */
  export class SearchStudyExecutionScopesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchStudyExecutionScopes' (StudyExecutionScope[])
    public return : StudyExecutionScope[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewStudyExecutionScope'.
   * Method: Adds a new StudyExecutionScope and returns its primary identifier (or null on failure).
   */
  export class AddNewStudyExecutionScopeRequest {
    
    // Required Argument for 'AddNewStudyExecutionScope' (StudyExecutionScope): StudyExecutionScope containing the new values
    public studyExecutionScope : StudyExecutionScope;
    
  }
  
  /**
   * Contains results from calling 'AddNewStudyExecutionScope'.
   * Method: Adds a new StudyExecutionScope and returns its primary identifier (or null on failure).
   */
  export class AddNewStudyExecutionScopeResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewStudyExecutionScope' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyExecutionScope'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the primary identifier fields within the given StudyExecutionScope. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyExecutionScopeRequest {
    
    // Required Argument for 'UpdateStudyExecutionScope' (StudyExecutionScope): StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be used to address the target record)
    public studyExecutionScope : StudyExecutionScope;
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyExecutionScope'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the primary identifier fields within the given StudyExecutionScope. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyExecutionScopeResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateStudyExecutionScope' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyExecutionScopeByStudyExecutionIdentifierRequest {
    
    // Required Argument for 'UpdateStudyExecutionScopeByStudyExecutionIdentifier' (string): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
    public studyExecutionIdentifier : string;
    
    // Required Argument for 'UpdateStudyExecutionScopeByStudyExecutionIdentifier' (StudyExecutionScope): StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be ignored)
    public studyExecutionScope : StudyExecutionScope;
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyExecutionScopeByStudyExecutionIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateStudyExecutionScopeByStudyExecutionIdentifier' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Deletes a specific StudyExecutionScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteStudyExecutionScopeByStudyExecutionIdentifierRequest {
    
    // Required Argument for 'DeleteStudyExecutionScopeByStudyExecutionIdentifier' (string): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
    public studyExecutionIdentifier : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Deletes a specific StudyExecutionScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteStudyExecutionScopeByStudyExecutionIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteStudyExecutionScopeByStudyExecutionIdentifier' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyScopeByResearchStudyUid'.
   * Method: Loads a specific StudyScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetStudyScopeByResearchStudyUidRequest {
    
    // Required Argument for 'GetStudyScopeByResearchStudyUid' (string): the official invariant name of the study as given by the sponsor
    public researchStudyUid : string;
    
  }
  
  /**
   * Contains results from calling 'GetStudyScopeByResearchStudyUid'.
   * Method: Loads a specific StudyScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetStudyScopeByResearchStudyUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetStudyScopeByResearchStudyUid' (StudyScope)
    public return : StudyScope;
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyScopes'.
   * Method: Loads StudyScopes.
   */
  export class GetStudyScopesRequest {
    
    // Optional Argument for 'GetStudyScopes' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetStudyScopes' (number): Max count of StudyScopes which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetStudyScopes'.
   * Method: Loads StudyScopes.
   */
  export class GetStudyScopesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetStudyScopes' (StudyScope[])
    public return : StudyScope[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchStudyScopes'.
   * Method: Loads StudyScopes where values matching to the given filterExpression
   */
  export class SearchStudyScopesRequest {
    
    // Required Argument for 'SearchStudyScopes' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchStudyScopes' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchStudyScopes' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchStudyScopes' (number): Max count of StudyScopes which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchStudyScopes'.
   * Method: Loads StudyScopes where values matching to the given filterExpression
   */
  export class SearchStudyScopesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchStudyScopes' (StudyScope[])
    public return : StudyScope[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewStudyScope'.
   * Method: Adds a new StudyScope and returns its primary identifier (or null on failure).
   */
  export class AddNewStudyScopeRequest {
    
    // Required Argument for 'AddNewStudyScope' (StudyScope): StudyScope containing the new values
    public studyScope : StudyScope;
    
  }
  
  /**
   * Contains results from calling 'AddNewStudyScope'.
   * Method: Adds a new StudyScope and returns its primary identifier (or null on failure).
   */
  export class AddNewStudyScopeResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewStudyScope' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyScope'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyScope addressed by the primary identifier fields within the given StudyScope. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyScopeRequest {
    
    // Required Argument for 'UpdateStudyScope' (StudyScope): StudyScope containing the new values (the primary identifier fields within the given StudyScope will be used to address the target record)
    public studyScope : StudyScope;
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyScope'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyScope addressed by the primary identifier fields within the given StudyScope. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyScopeResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateStudyScope' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyScopeByResearchStudyUid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyScopeByResearchStudyUidRequest {
    
    // Required Argument for 'UpdateStudyScopeByResearchStudyUid' (string): the official invariant name of the study as given by the sponsor
    public researchStudyUid : string;
    
    // Required Argument for 'UpdateStudyScopeByResearchStudyUid' (StudyScope): StudyScope containing the new values (the primary identifier fields within the given StudyScope will be ignored)
    public studyScope : StudyScope;
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyScopeByResearchStudyUid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyScopeByResearchStudyUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateStudyScopeByResearchStudyUid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteStudyScopeByResearchStudyUid'.
   * Method: Deletes a specific StudyScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteStudyScopeByResearchStudyUidRequest {
    
    // Required Argument for 'DeleteStudyScopeByResearchStudyUid' (string): the official invariant name of the study as given by the sponsor
    public researchStudyUid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteStudyScopeByResearchStudyUid'.
   * Method: Deletes a specific StudyScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteStudyScopeByResearchStudyUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteStudyScopeByResearchStudyUid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectAddressByInternalRecordId'.
   * Method: Loads a specific SubjectAddress addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetSubjectAddressByInternalRecordIdRequest {
    
    // Required Argument for 'GetSubjectAddressByInternalRecordId' (string): Represents the primary identity of a SubjectAddress
    public internalRecordId : string;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectAddressByInternalRecordId'.
   * Method: Loads a specific SubjectAddress addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetSubjectAddressByInternalRecordIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetSubjectAddressByInternalRecordId' (SubjectAddress)
    public return : SubjectAddress;
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectAddresses'.
   * Method: Loads SubjectAddresses.
   */
  export class GetSubjectAddressesRequest {
    
    // Optional Argument for 'GetSubjectAddresses' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetSubjectAddresses' (number): Max count of SubjectAddresses which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectAddresses'.
   * Method: Loads SubjectAddresses.
   */
  export class GetSubjectAddressesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetSubjectAddresses' (SubjectAddress[])
    public return : SubjectAddress[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchSubjectAddresses'.
   * Method: Loads SubjectAddresses where values matching to the given filterExpression
   */
  export class SearchSubjectAddressesRequest {
    
    // Required Argument for 'SearchSubjectAddresses' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchSubjectAddresses' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchSubjectAddresses' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchSubjectAddresses' (number): Max count of SubjectAddresses which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchSubjectAddresses'.
   * Method: Loads SubjectAddresses where values matching to the given filterExpression
   */
  export class SearchSubjectAddressesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchSubjectAddresses' (SubjectAddress[])
    public return : SubjectAddress[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewSubjectAddress'.
   * Method: Adds a new SubjectAddress and returns its primary identifier (or null on failure).
   */
  export class AddNewSubjectAddressRequest {
    
    // Required Argument for 'AddNewSubjectAddress' (SubjectAddress): SubjectAddress containing the new values
    public subjectAddress : SubjectAddress;
    
  }
  
  /**
   * Contains results from calling 'AddNewSubjectAddress'.
   * Method: Adds a new SubjectAddress and returns its primary identifier (or null on failure).
   */
  export class AddNewSubjectAddressResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewSubjectAddress' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectAddress'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectAddress addressed by the primary identifier fields within the given SubjectAddress. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectAddressRequest {
    
    // Required Argument for 'UpdateSubjectAddress' (SubjectAddress): SubjectAddress containing the new values (the primary identifier fields within the given SubjectAddress will be used to address the target record)
    public subjectAddress : SubjectAddress;
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectAddress'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectAddress addressed by the primary identifier fields within the given SubjectAddress. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectAddressResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateSubjectAddress' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectAddressByInternalRecordId'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectAddress addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectAddressByInternalRecordIdRequest {
    
    // Required Argument for 'UpdateSubjectAddressByInternalRecordId' (string): Represents the primary identity of a SubjectAddress
    public internalRecordId : string;
    
    // Required Argument for 'UpdateSubjectAddressByInternalRecordId' (SubjectAddress): SubjectAddress containing the new values (the primary identifier fields within the given SubjectAddress will be ignored)
    public subjectAddress : SubjectAddress;
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectAddressByInternalRecordId'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectAddress addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectAddressByInternalRecordIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateSubjectAddressByInternalRecordId' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteSubjectAddressByInternalRecordId'.
   * Method: Deletes a specific SubjectAddress addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteSubjectAddressByInternalRecordIdRequest {
    
    // Required Argument for 'DeleteSubjectAddressByInternalRecordId' (string): Represents the primary identity of a SubjectAddress
    public internalRecordId : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteSubjectAddressByInternalRecordId'.
   * Method: Deletes a specific SubjectAddress addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteSubjectAddressByInternalRecordIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteSubjectAddressByInternalRecordId' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectIdentityByRecordId'.
   * Method: Loads a specific SubjectIdentity addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetSubjectIdentityByRecordIdRequest {
    
    // Required Argument for 'GetSubjectIdentityByRecordId' (string): Represents the primary identity of a SubjectIdentity
    public recordId : string;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectIdentityByRecordId'.
   * Method: Loads a specific SubjectIdentity addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetSubjectIdentityByRecordIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetSubjectIdentityByRecordId' (SubjectIdentity)
    public return : SubjectIdentity;
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectIdentities'.
   * Method: Loads SubjectIdentities.
   */
  export class GetSubjectIdentitiesRequest {
    
    // Optional Argument for 'GetSubjectIdentities' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetSubjectIdentities' (number): Max count of SubjectIdentities which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectIdentities'.
   * Method: Loads SubjectIdentities.
   */
  export class GetSubjectIdentitiesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetSubjectIdentities' (SubjectIdentity[])
    public return : SubjectIdentity[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchSubjectIdentities'.
   * Method: Loads SubjectIdentities where values matching to the given filterExpression
   */
  export class SearchSubjectIdentitiesRequest {
    
    // Required Argument for 'SearchSubjectIdentities' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchSubjectIdentities' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchSubjectIdentities' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchSubjectIdentities' (number): Max count of SubjectIdentities which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchSubjectIdentities'.
   * Method: Loads SubjectIdentities where values matching to the given filterExpression
   */
  export class SearchSubjectIdentitiesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchSubjectIdentities' (SubjectIdentity[])
    public return : SubjectIdentity[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewSubjectIdentity'.
   * Method: Adds a new SubjectIdentity and returns its primary identifier (or null on failure).
   */
  export class AddNewSubjectIdentityRequest {
    
    // Required Argument for 'AddNewSubjectIdentity' (SubjectIdentity): SubjectIdentity containing the new values
    public subjectIdentity : SubjectIdentity;
    
  }
  
  /**
   * Contains results from calling 'AddNewSubjectIdentity'.
   * Method: Adds a new SubjectIdentity and returns its primary identifier (or null on failure).
   */
  export class AddNewSubjectIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewSubjectIdentity' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectIdentity'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectIdentity addressed by the primary identifier fields within the given SubjectIdentity. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectIdentityRequest {
    
    // Required Argument for 'UpdateSubjectIdentity' (SubjectIdentity): SubjectIdentity containing the new values (the primary identifier fields within the given SubjectIdentity will be used to address the target record)
    public subjectIdentity : SubjectIdentity;
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectIdentity'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectIdentity addressed by the primary identifier fields within the given SubjectIdentity. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectIdentityResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateSubjectIdentity' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectIdentityByRecordId'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectIdentity addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectIdentityByRecordIdRequest {
    
    // Required Argument for 'UpdateSubjectIdentityByRecordId' (string): Represents the primary identity of a SubjectIdentity
    public recordId : string;
    
    // Required Argument for 'UpdateSubjectIdentityByRecordId' (SubjectIdentity): SubjectIdentity containing the new values (the primary identifier fields within the given SubjectIdentity will be ignored)
    public subjectIdentity : SubjectIdentity;
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectIdentityByRecordId'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectIdentity addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateSubjectIdentityByRecordIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateSubjectIdentityByRecordId' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteSubjectIdentityByRecordId'.
   * Method: Deletes a specific SubjectIdentity addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteSubjectIdentityByRecordIdRequest {
    
    // Required Argument for 'DeleteSubjectIdentityByRecordId' (string): Represents the primary identity of a SubjectIdentity
    public recordId : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteSubjectIdentityByRecordId'.
   * Method: Deletes a specific SubjectIdentity addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteSubjectIdentityByRecordIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteSubjectIdentityByRecordId' (Boolean)
    public return : boolean;
    
  }
  
}
