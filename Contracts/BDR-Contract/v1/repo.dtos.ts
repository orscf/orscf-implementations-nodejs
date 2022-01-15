/* based on ORSCF BillingData Contract v1.7.0.0 */

import MedicalResearch.BillingData.Model;

namespace MedicalResearch.BillingData.StoreAccess {
  
  /**
   * Contains arguments for calling 'GetBillableTaskByTaskGuid'.
   * Method: Loads a specific BillableTask addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetBillableTaskByTaskGuidRequest {
    
    // Required Argument for 'GetBillableTaskByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetBillableTaskByTaskGuid'.
   * Method: Loads a specific BillableTask addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetBillableTaskByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetBillableTaskByTaskGuid' (BillableTask)
    public return : BillableTask;
    
  }
  
  /**
   * Contains arguments for calling 'GetBillableTasks'.
   * Method: Loads BillableTasks.
   */
  export class GetBillableTasksRequest {
    
    // Optional Argument for 'GetBillableTasks' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetBillableTasks' (number): Max count of BillableTasks which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetBillableTasks'.
   * Method: Loads BillableTasks.
   */
  export class GetBillableTasksResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetBillableTasks' (BillableTask[])
    public return : BillableTask[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchBillableTasks'.
   * Method: Loads BillableTasks where values matching to the given filterExpression
   */
  export class SearchBillableTasksRequest {
    
    // Required Argument for 'SearchBillableTasks' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchBillableTasks' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchBillableTasks' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchBillableTasks' (number): Max count of BillableTasks which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchBillableTasks'.
   * Method: Loads BillableTasks where values matching to the given filterExpression
   */
  export class SearchBillableTasksResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchBillableTasks' (BillableTask[])
    public return : BillableTask[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewBillableTask'.
   * Method: Adds a new BillableTask and returns its primary identifier (or null on failure).
   */
  export class AddNewBillableTaskRequest {
    
    // Required Argument for 'AddNewBillableTask' (BillableTask): BillableTask containing the new values
    public billableTask : BillableTask;
    
  }
  
  /**
   * Contains results from calling 'AddNewBillableTask'.
   * Method: Adds a new BillableTask and returns its primary identifier (or null on failure).
   */
  export class AddNewBillableTaskResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewBillableTask' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateBillableTask'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableTask addressed by the primary identifier fields within the given BillableTask. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableTaskRequest {
    
    // Required Argument for 'UpdateBillableTask' (BillableTask): BillableTask containing the new values (the primary identifier fields within the given BillableTask will be used to address the target record)
    public billableTask : BillableTask;
    
  }
  
  /**
   * Contains results from calling 'UpdateBillableTask'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableTask addressed by the primary identifier fields within the given BillableTask. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableTaskResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateBillableTask' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateBillableTaskByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableTask addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableTaskByTaskGuidRequest {
    
    // Required Argument for 'UpdateBillableTaskByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
    // Required Argument for 'UpdateBillableTaskByTaskGuid' (BillableTask): BillableTask containing the new values (the primary identifier fields within the given BillableTask will be ignored)
    public billableTask : BillableTask;
    
  }
  
  /**
   * Contains results from calling 'UpdateBillableTaskByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableTask addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableTaskByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateBillableTaskByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteBillableTaskByTaskGuid'.
   * Method: Deletes a specific BillableTask addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteBillableTaskByTaskGuidRequest {
    
    // Required Argument for 'DeleteBillableTaskByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteBillableTaskByTaskGuid'.
   * Method: Deletes a specific BillableTask addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteBillableTaskByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteBillableTaskByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetBillableVisitByVisitGuid'.
   * Method: Loads a specific BillableVisit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetBillableVisitByVisitGuidRequest {
    
    // Required Argument for 'GetBillableVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    public visitGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetBillableVisitByVisitGuid'.
   * Method: Loads a specific BillableVisit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetBillableVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetBillableVisitByVisitGuid' (BillableVisit)
    public return : BillableVisit;
    
  }
  
  /**
   * Contains arguments for calling 'GetBillableVisits'.
   * Method: Loads BillableVisits.
   */
  export class GetBillableVisitsRequest {
    
    // Optional Argument for 'GetBillableVisits' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetBillableVisits' (number): Max count of BillableVisits which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetBillableVisits'.
   * Method: Loads BillableVisits.
   */
  export class GetBillableVisitsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetBillableVisits' (BillableVisit[])
    public return : BillableVisit[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchBillableVisits'.
   * Method: Loads BillableVisits where values matching to the given filterExpression
   */
  export class SearchBillableVisitsRequest {
    
    // Required Argument for 'SearchBillableVisits' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchBillableVisits' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchBillableVisits' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchBillableVisits' (number): Max count of BillableVisits which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchBillableVisits'.
   * Method: Loads BillableVisits where values matching to the given filterExpression
   */
  export class SearchBillableVisitsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchBillableVisits' (BillableVisit[])
    public return : BillableVisit[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewBillableVisit'.
   * Method: Adds a new BillableVisit and returns its primary identifier (or null on failure).
   */
  export class AddNewBillableVisitRequest {
    
    // Required Argument for 'AddNewBillableVisit' (BillableVisit): BillableVisit containing the new values
    public billableVisit : BillableVisit;
    
  }
  
  /**
   * Contains results from calling 'AddNewBillableVisit'.
   * Method: Adds a new BillableVisit and returns its primary identifier (or null on failure).
   */
  export class AddNewBillableVisitResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewBillableVisit' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateBillableVisit'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableVisit addressed by the primary identifier fields within the given BillableVisit. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableVisitRequest {
    
    // Required Argument for 'UpdateBillableVisit' (BillableVisit): BillableVisit containing the new values (the primary identifier fields within the given BillableVisit will be used to address the target record)
    public billableVisit : BillableVisit;
    
  }
  
  /**
   * Contains results from calling 'UpdateBillableVisit'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableVisit addressed by the primary identifier fields within the given BillableVisit. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableVisitResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateBillableVisit' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateBillableVisitByVisitGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableVisit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableVisitByVisitGuidRequest {
    
    // Required Argument for 'UpdateBillableVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    public visitGuid : string;
    
    // Required Argument for 'UpdateBillableVisitByVisitGuid' (BillableVisit): BillableVisit containing the new values (the primary identifier fields within the given BillableVisit will be ignored)
    public billableVisit : BillableVisit;
    
  }
  
  /**
   * Contains results from calling 'UpdateBillableVisitByVisitGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillableVisit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillableVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateBillableVisitByVisitGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteBillableVisitByVisitGuid'.
   * Method: Deletes a specific BillableVisit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteBillableVisitByVisitGuidRequest {
    
    // Required Argument for 'DeleteBillableVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    public visitGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteBillableVisitByVisitGuid'.
   * Method: Deletes a specific BillableVisit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteBillableVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteBillableVisitByVisitGuid' (Boolean)
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
   * Contains arguments for calling 'GetBillingDemandById'.
   * Method: Loads a specific BillingDemand addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetBillingDemandByIdRequest {
    
    // Required Argument for 'GetBillingDemandById' (string): Represents the primary identity of a BillingDemand
    public id : string;
    
  }
  
  /**
   * Contains results from calling 'GetBillingDemandById'.
   * Method: Loads a specific BillingDemand addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetBillingDemandByIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetBillingDemandById' (BillingDemand): created by the sponsor
    public return : BillingDemand;
    
  }
  
  /**
   * Contains arguments for calling 'GetBillingDemands'.
   * Method: Loads BillingDemands.
   */
  export class GetBillingDemandsRequest {
    
    // Optional Argument for 'GetBillingDemands' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetBillingDemands' (number): Max count of BillingDemands which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetBillingDemands'.
   * Method: Loads BillingDemands.
   */
  export class GetBillingDemandsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetBillingDemands' (BillingDemand[]): created by the sponsor
    public return : BillingDemand[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchBillingDemands'.
   * Method: Loads BillingDemands where values matching to the given filterExpression
   */
  export class SearchBillingDemandsRequest {
    
    // Required Argument for 'SearchBillingDemands' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchBillingDemands' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchBillingDemands' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchBillingDemands' (number): Max count of BillingDemands which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchBillingDemands'.
   * Method: Loads BillingDemands where values matching to the given filterExpression
   */
  export class SearchBillingDemandsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchBillingDemands' (BillingDemand[]): created by the sponsor
    public return : BillingDemand[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewBillingDemand'.
   * Method: Adds a new BillingDemand and returns its primary identifier (or null on failure).
   */
  export class AddNewBillingDemandRequest {
    
    // Required Argument for 'AddNewBillingDemand' (BillingDemand): BillingDemand containing the new values
    public billingDemand : BillingDemand;
    
  }
  
  /**
   * Contains results from calling 'AddNewBillingDemand'.
   * Method: Adds a new BillingDemand and returns its primary identifier (or null on failure).
   */
  export class AddNewBillingDemandResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewBillingDemand' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateBillingDemand'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillingDemand addressed by the primary identifier fields within the given BillingDemand. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillingDemandRequest {
    
    // Required Argument for 'UpdateBillingDemand' (BillingDemand): BillingDemand containing the new values (the primary identifier fields within the given BillingDemand will be used to address the target record)
    public billingDemand : BillingDemand;
    
  }
  
  /**
   * Contains results from calling 'UpdateBillingDemand'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillingDemand addressed by the primary identifier fields within the given BillingDemand. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillingDemandResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateBillingDemand' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateBillingDemandById'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillingDemand addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillingDemandByIdRequest {
    
    // Required Argument for 'UpdateBillingDemandById' (string): Represents the primary identity of a BillingDemand
    public id : string;
    
    // Required Argument for 'UpdateBillingDemandById' (BillingDemand): BillingDemand containing the new values (the primary identifier fields within the given BillingDemand will be ignored)
    public billingDemand : BillingDemand;
    
  }
  
  /**
   * Contains results from calling 'UpdateBillingDemandById'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given BillingDemand addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateBillingDemandByIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateBillingDemandById' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteBillingDemandById'.
   * Method: Deletes a specific BillingDemand addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteBillingDemandByIdRequest {
    
    // Required Argument for 'DeleteBillingDemandById' (string): Represents the primary identity of a BillingDemand
    public id : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteBillingDemandById'.
   * Method: Deletes a specific BillingDemand addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteBillingDemandByIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteBillingDemandById' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetInvoiceById'.
   * Method: Loads a specific Invoice addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetInvoiceByIdRequest {
    
    // Required Argument for 'GetInvoiceById' (string): Represents the primary identity of a Invoice
    public id : string;
    
  }
  
  /**
   * Contains results from calling 'GetInvoiceById'.
   * Method: Loads a specific Invoice addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetInvoiceByIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetInvoiceById' (Invoice): created by the executor-company
    public return : Invoice;
    
  }
  
  /**
   * Contains arguments for calling 'GetInvoices'.
   * Method: Loads Invoices.
   */
  export class GetInvoicesRequest {
    
    // Optional Argument for 'GetInvoices' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetInvoices' (number): Max count of Invoices which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetInvoices'.
   * Method: Loads Invoices.
   */
  export class GetInvoicesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetInvoices' (Invoice[]): created by the executor-company
    public return : Invoice[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchInvoices'.
   * Method: Loads Invoices where values matching to the given filterExpression
   */
  export class SearchInvoicesRequest {
    
    // Required Argument for 'SearchInvoices' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchInvoices' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchInvoices' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchInvoices' (number): Max count of Invoices which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchInvoices'.
   * Method: Loads Invoices where values matching to the given filterExpression
   */
  export class SearchInvoicesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchInvoices' (Invoice[]): created by the executor-company
    public return : Invoice[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewInvoice'.
   * Method: Adds a new Invoice and returns its primary identifier (or null on failure).
   */
  export class AddNewInvoiceRequest {
    
    // Required Argument for 'AddNewInvoice' (Invoice): Invoice containing the new values
    public invoice : Invoice;
    
  }
  
  /**
   * Contains results from calling 'AddNewInvoice'.
   * Method: Adds a new Invoice and returns its primary identifier (or null on failure).
   */
  export class AddNewInvoiceResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewInvoice' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateInvoice'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Invoice addressed by the primary identifier fields within the given Invoice. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateInvoiceRequest {
    
    // Required Argument for 'UpdateInvoice' (Invoice): Invoice containing the new values (the primary identifier fields within the given Invoice will be used to address the target record)
    public invoice : Invoice;
    
  }
  
  /**
   * Contains results from calling 'UpdateInvoice'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Invoice addressed by the primary identifier fields within the given Invoice. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateInvoiceResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateInvoice' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateInvoiceById'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Invoice addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateInvoiceByIdRequest {
    
    // Required Argument for 'UpdateInvoiceById' (string): Represents the primary identity of a Invoice
    public id : string;
    
    // Required Argument for 'UpdateInvoiceById' (Invoice): Invoice containing the new values (the primary identifier fields within the given Invoice will be ignored)
    public invoice : Invoice;
    
  }
  
  /**
   * Contains results from calling 'UpdateInvoiceById'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Invoice addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateInvoiceByIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateInvoiceById' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteInvoiceById'.
   * Method: Deletes a specific Invoice addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteInvoiceByIdRequest {
    
    // Required Argument for 'DeleteInvoiceById' (string): Represents the primary identity of a Invoice
    public id : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteInvoiceById'.
   * Method: Deletes a specific Invoice addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteInvoiceByIdResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteInvoiceById' (Boolean)
    public return : boolean;
    
  }
  
}
