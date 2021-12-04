/* based on ORSCF VisitData Contract v1.6.0.0 */

import MedicalResearch.VisitData.Model;

namespace MedicalResearch.VisitData.StoreAccess {
  
  /**
   * Contains arguments for calling 'GetDataRecordingByTaskGuid'.
   * Method: Loads a specific DataRecording addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetDataRecordingByTaskGuidRequest {
    
    // Required Argument for 'GetDataRecordingByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetDataRecordingByTaskGuid'.
   * Method: Loads a specific DataRecording addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetDataRecordingByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetDataRecordingByTaskGuid' (DataRecording)
    public @return : DataRecording { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetDataRecordings'.
   * Method: Loads DataRecordings.
   */
  public class GetDataRecordingsRequest {
    
    // Optional Argument for 'GetDataRecordings' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetDataRecordings' (number?): Max count of DataRecordings which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetDataRecordings'.
   * Method: Loads DataRecordings.
   */
  public class GetDataRecordingsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetDataRecordings' (DataRecording[])
    public @return : DataRecording[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchDataRecordings'.
   * Method: Loads DataRecordings where values matching to the given filterExpression
   */
  public class SearchDataRecordingsRequest {
    
    // Required Argument for 'SearchDataRecordings' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchDataRecordings' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchDataRecordings' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchDataRecordings' (number?): Max count of DataRecordings which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchDataRecordings'.
   * Method: Loads DataRecordings where values matching to the given filterExpression
   */
  public class SearchDataRecordingsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchDataRecordings' (DataRecording[])
    public @return : DataRecording[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewDataRecording'.
   * Method: Adds a new DataRecording and returns its primary identifier (or null on failure).
   */
  public class AddNewDataRecordingRequest {
    
    // Required Argument for 'AddNewDataRecording' (DataRecording): DataRecording containing the new values
    [Required]
    public dataRecording : DataRecording { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewDataRecording'.
   * Method: Adds a new DataRecording and returns its primary identifier (or null on failure).
   */
  public class AddNewDataRecordingResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewDataRecording' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDataRecording'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the primary identifier fields within the given DataRecording. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDataRecordingRequest {
    
    // Required Argument for 'UpdateDataRecording' (DataRecording): DataRecording containing the new values (the primary identifier fields within the given DataRecording will be used to address the target record)
    [Required]
    public dataRecording : DataRecording { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateDataRecording'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the primary identifier fields within the given DataRecording. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDataRecordingResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateDataRecording' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDataRecordingByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDataRecordingByTaskGuidRequest {
    
    // Required Argument for 'UpdateDataRecordingByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
    // Required Argument for 'UpdateDataRecordingByTaskGuid' (DataRecording): DataRecording containing the new values (the primary identifier fields within the given DataRecording will be ignored)
    [Required]
    public dataRecording : DataRecording { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateDataRecordingByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDataRecordingByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateDataRecordingByTaskGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteDataRecordingByTaskGuid'.
   * Method: Deletes a specific DataRecording addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteDataRecordingByTaskGuidRequest {
    
    // Required Argument for 'DeleteDataRecordingByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteDataRecordingByTaskGuid'.
   * Method: Deletes a specific DataRecording addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteDataRecordingByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteDataRecordingByTaskGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetVisitByVisitGuid'.
   * Method: Loads a specific Visit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetVisitByVisitGuidRequest {
    
    // Required Argument for 'GetVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public visitGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetVisitByVisitGuid'.
   * Method: Loads a specific Visit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetVisitByVisitGuid' (Visit)
    public @return : Visit { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetVisits'.
   * Method: Loads Visits.
   */
  public class GetVisitsRequest {
    
    // Optional Argument for 'GetVisits' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetVisits' (number?): Max count of Visits which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetVisits'.
   * Method: Loads Visits.
   */
  public class GetVisitsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetVisits' (Visit[])
    public @return : Visit[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchVisits'.
   * Method: Loads Visits where values matching to the given filterExpression
   */
  public class SearchVisitsRequest {
    
    // Required Argument for 'SearchVisits' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchVisits' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchVisits' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchVisits' (number?): Max count of Visits which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchVisits'.
   * Method: Loads Visits where values matching to the given filterExpression
   */
  public class SearchVisitsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchVisits' (Visit[])
    public @return : Visit[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewVisit'.
   * Method: Adds a new Visit and returns its primary identifier (or null on failure).
   */
  public class AddNewVisitRequest {
    
    // Required Argument for 'AddNewVisit' (Visit): Visit containing the new values
    [Required]
    public visit : Visit { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewVisit'.
   * Method: Adds a new Visit and returns its primary identifier (or null on failure).
   */
  public class AddNewVisitResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewVisit' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateVisit'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the primary identifier fields within the given Visit. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateVisitRequest {
    
    // Required Argument for 'UpdateVisit' (Visit): Visit containing the new values (the primary identifier fields within the given Visit will be used to address the target record)
    [Required]
    public visit : Visit { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateVisit'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the primary identifier fields within the given Visit. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateVisitResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateVisit' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateVisitByVisitGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateVisitByVisitGuidRequest {
    
    // Required Argument for 'UpdateVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public visitGuid : string { get; set; }
    
    // Required Argument for 'UpdateVisitByVisitGuid' (Visit): Visit containing the new values (the primary identifier fields within the given Visit will be ignored)
    [Required]
    public visit : Visit { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateVisitByVisitGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateVisitByVisitGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteVisitByVisitGuid'.
   * Method: Deletes a specific Visit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteVisitByVisitGuidRequest {
    
    // Required Argument for 'DeleteVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public visitGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteVisitByVisitGuid'.
   * Method: Deletes a specific Visit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteVisitByVisitGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetDrugApplymentByTaskGuid'.
   * Method: Loads a specific DrugApplyment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetDrugApplymentByTaskGuidRequest {
    
    // Required Argument for 'GetDrugApplymentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetDrugApplymentByTaskGuid'.
   * Method: Loads a specific DrugApplyment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetDrugApplymentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetDrugApplymentByTaskGuid' (DrugApplyment)
    public @return : DrugApplyment { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetDrugApplyments'.
   * Method: Loads DrugApplyments.
   */
  public class GetDrugApplymentsRequest {
    
    // Optional Argument for 'GetDrugApplyments' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetDrugApplyments' (number?): Max count of DrugApplyments which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetDrugApplyments'.
   * Method: Loads DrugApplyments.
   */
  public class GetDrugApplymentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetDrugApplyments' (DrugApplyment[])
    public @return : DrugApplyment[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchDrugApplyments'.
   * Method: Loads DrugApplyments where values matching to the given filterExpression
   */
  public class SearchDrugApplymentsRequest {
    
    // Required Argument for 'SearchDrugApplyments' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchDrugApplyments' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchDrugApplyments' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchDrugApplyments' (number?): Max count of DrugApplyments which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchDrugApplyments'.
   * Method: Loads DrugApplyments where values matching to the given filterExpression
   */
  public class SearchDrugApplymentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchDrugApplyments' (DrugApplyment[])
    public @return : DrugApplyment[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewDrugApplyment'.
   * Method: Adds a new DrugApplyment and returns its primary identifier (or null on failure).
   */
  public class AddNewDrugApplymentRequest {
    
    // Required Argument for 'AddNewDrugApplyment' (DrugApplyment): DrugApplyment containing the new values
    [Required]
    public drugApplyment : DrugApplyment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewDrugApplyment'.
   * Method: Adds a new DrugApplyment and returns its primary identifier (or null on failure).
   */
  public class AddNewDrugApplymentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewDrugApplyment' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDrugApplyment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the primary identifier fields within the given DrugApplyment. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDrugApplymentRequest {
    
    // Required Argument for 'UpdateDrugApplyment' (DrugApplyment): DrugApplyment containing the new values (the primary identifier fields within the given DrugApplyment will be used to address the target record)
    [Required]
    public drugApplyment : DrugApplyment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateDrugApplyment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the primary identifier fields within the given DrugApplyment. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDrugApplymentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateDrugApplyment' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDrugApplymentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDrugApplymentByTaskGuidRequest {
    
    // Required Argument for 'UpdateDrugApplymentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
    // Required Argument for 'UpdateDrugApplymentByTaskGuid' (DrugApplyment): DrugApplyment containing the new values (the primary identifier fields within the given DrugApplyment will be ignored)
    [Required]
    public drugApplyment : DrugApplyment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateDrugApplymentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateDrugApplymentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateDrugApplymentByTaskGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteDrugApplymentByTaskGuid'.
   * Method: Deletes a specific DrugApplyment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteDrugApplymentByTaskGuidRequest {
    
    // Required Argument for 'DeleteDrugApplymentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteDrugApplymentByTaskGuid'.
   * Method: Deletes a specific DrugApplyment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteDrugApplymentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteDrugApplymentByTaskGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyEventByEventGuid'.
   * Method: Loads a specific StudyEvent addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetStudyEventByEventGuidRequest {
    
    // Required Argument for 'GetStudyEventByEventGuid' (string): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public eventGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetStudyEventByEventGuid'.
   * Method: Loads a specific StudyEvent addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetStudyEventByEventGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetStudyEventByEventGuid' (StudyEvent)
    public @return : StudyEvent { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyEvents'.
   * Method: Loads StudyEvents.
   */
  public class GetStudyEventsRequest {
    
    // Optional Argument for 'GetStudyEvents' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetStudyEvents' (number?): Max count of StudyEvents which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetStudyEvents'.
   * Method: Loads StudyEvents.
   */
  public class GetStudyEventsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetStudyEvents' (StudyEvent[])
    public @return : StudyEvent[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchStudyEvents'.
   * Method: Loads StudyEvents where values matching to the given filterExpression
   */
  public class SearchStudyEventsRequest {
    
    // Required Argument for 'SearchStudyEvents' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchStudyEvents' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchStudyEvents' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchStudyEvents' (number?): Max count of StudyEvents which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchStudyEvents'.
   * Method: Loads StudyEvents where values matching to the given filterExpression
   */
  public class SearchStudyEventsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchStudyEvents' (StudyEvent[])
    public @return : StudyEvent[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewStudyEvent'.
   * Method: Adds a new StudyEvent and returns its primary identifier (or null on failure).
   */
  public class AddNewStudyEventRequest {
    
    // Required Argument for 'AddNewStudyEvent' (StudyEvent): StudyEvent containing the new values
    [Required]
    public studyEvent : StudyEvent { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewStudyEvent'.
   * Method: Adds a new StudyEvent and returns its primary identifier (or null on failure).
   */
  public class AddNewStudyEventResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewStudyEvent' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyEvent'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the primary identifier fields within the given StudyEvent. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyEventRequest {
    
    // Required Argument for 'UpdateStudyEvent' (StudyEvent): StudyEvent containing the new values (the primary identifier fields within the given StudyEvent will be used to address the target record)
    [Required]
    public studyEvent : StudyEvent { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyEvent'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the primary identifier fields within the given StudyEvent. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyEventResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateStudyEvent' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyEventByEventGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyEventByEventGuidRequest {
    
    // Required Argument for 'UpdateStudyEventByEventGuid' (string): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public eventGuid : string { get; set; }
    
    // Required Argument for 'UpdateStudyEventByEventGuid' (StudyEvent): StudyEvent containing the new values (the primary identifier fields within the given StudyEvent will be ignored)
    [Required]
    public studyEvent : StudyEvent { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyEventByEventGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyEventByEventGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateStudyEventByEventGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteStudyEventByEventGuid'.
   * Method: Deletes a specific StudyEvent addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteStudyEventByEventGuidRequest {
    
    // Required Argument for 'DeleteStudyEventByEventGuid' (string): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public eventGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteStudyEventByEventGuid'.
   * Method: Deletes a specific StudyEvent addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteStudyEventByEventGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteStudyEventByEventGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Loads a specific StudyExecutionScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetStudyExecutionScopeByStudyExecutionIdentifierRequest {
    
    // Required Argument for 'GetStudyExecutionScopeByStudyExecutionIdentifier' (string): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public studyExecutionIdentifier : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Loads a specific StudyExecutionScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetStudyExecutionScopeByStudyExecutionIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetStudyExecutionScopeByStudyExecutionIdentifier' (StudyExecutionScope)
    public @return : StudyExecutionScope { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes.
   */
  public class GetStudyExecutionScopesRequest {
    
    // Optional Argument for 'GetStudyExecutionScopes' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetStudyExecutionScopes' (number?): Max count of StudyExecutionScopes which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes.
   */
  public class GetStudyExecutionScopesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetStudyExecutionScopes' (StudyExecutionScope[])
    public @return : StudyExecutionScope[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes where values matching to the given filterExpression
   */
  public class SearchStudyExecutionScopesRequest {
    
    // Required Argument for 'SearchStudyExecutionScopes' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchStudyExecutionScopes' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchStudyExecutionScopes' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchStudyExecutionScopes' (number?): Max count of StudyExecutionScopes which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchStudyExecutionScopes'.
   * Method: Loads StudyExecutionScopes where values matching to the given filterExpression
   */
  public class SearchStudyExecutionScopesResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchStudyExecutionScopes' (StudyExecutionScope[])
    public @return : StudyExecutionScope[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewStudyExecutionScope'.
   * Method: Adds a new StudyExecutionScope and returns its primary identifier (or null on failure).
   */
  public class AddNewStudyExecutionScopeRequest {
    
    // Required Argument for 'AddNewStudyExecutionScope' (StudyExecutionScope): StudyExecutionScope containing the new values
    [Required]
    public studyExecutionScope : StudyExecutionScope { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewStudyExecutionScope'.
   * Method: Adds a new StudyExecutionScope and returns its primary identifier (or null on failure).
   */
  public class AddNewStudyExecutionScopeResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewStudyExecutionScope' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyExecutionScope'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the primary identifier fields within the given StudyExecutionScope. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyExecutionScopeRequest {
    
    // Required Argument for 'UpdateStudyExecutionScope' (StudyExecutionScope): StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be used to address the target record)
    [Required]
    public studyExecutionScope : StudyExecutionScope { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyExecutionScope'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the primary identifier fields within the given StudyExecutionScope. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyExecutionScopeResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateStudyExecutionScope' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyExecutionScopeByStudyExecutionIdentifierRequest {
    
    // Required Argument for 'UpdateStudyExecutionScopeByStudyExecutionIdentifier' (string): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public studyExecutionIdentifier : string { get; set; }
    
    // Required Argument for 'UpdateStudyExecutionScopeByStudyExecutionIdentifier' (StudyExecutionScope): StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be ignored)
    [Required]
    public studyExecutionScope : StudyExecutionScope { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateStudyExecutionScopeByStudyExecutionIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateStudyExecutionScopeByStudyExecutionIdentifier' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Deletes a specific StudyExecutionScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteStudyExecutionScopeByStudyExecutionIdentifierRequest {
    
    // Required Argument for 'DeleteStudyExecutionScopeByStudyExecutionIdentifier' (string): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public studyExecutionIdentifier : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteStudyExecutionScopeByStudyExecutionIdentifier'.
   * Method: Deletes a specific StudyExecutionScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteStudyExecutionScopeByStudyExecutionIdentifierResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteStudyExecutionScopeByStudyExecutionIdentifier' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetTreatmentByTaskGuid'.
   * Method: Loads a specific Treatment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetTreatmentByTaskGuidRequest {
    
    // Required Argument for 'GetTreatmentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetTreatmentByTaskGuid'.
   * Method: Loads a specific Treatment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetTreatmentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetTreatmentByTaskGuid' (Treatment)
    public @return : Treatment { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetTreatments'.
   * Method: Loads Treatments.
   */
  public class GetTreatmentsRequest {
    
    // Optional Argument for 'GetTreatments' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetTreatments' (number?): Max count of Treatments which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetTreatments'.
   * Method: Loads Treatments.
   */
  public class GetTreatmentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetTreatments' (Treatment[])
    public @return : Treatment[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchTreatments'.
   * Method: Loads Treatments where values matching to the given filterExpression
   */
  public class SearchTreatmentsRequest {
    
    // Required Argument for 'SearchTreatments' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchTreatments' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchTreatments' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchTreatments' (number?): Max count of Treatments which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchTreatments'.
   * Method: Loads Treatments where values matching to the given filterExpression
   */
  public class SearchTreatmentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchTreatments' (Treatment[])
    public @return : Treatment[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewTreatment'.
   * Method: Adds a new Treatment and returns its primary identifier (or null on failure).
   */
  public class AddNewTreatmentRequest {
    
    // Required Argument for 'AddNewTreatment' (Treatment): Treatment containing the new values
    [Required]
    public treatment : Treatment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewTreatment'.
   * Method: Adds a new Treatment and returns its primary identifier (or null on failure).
   */
  public class AddNewTreatmentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewTreatment' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateTreatment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the primary identifier fields within the given Treatment. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateTreatmentRequest {
    
    // Required Argument for 'UpdateTreatment' (Treatment): Treatment containing the new values (the primary identifier fields within the given Treatment will be used to address the target record)
    [Required]
    public treatment : Treatment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateTreatment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the primary identifier fields within the given Treatment. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateTreatmentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateTreatment' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateTreatmentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateTreatmentByTaskGuidRequest {
    
    // Required Argument for 'UpdateTreatmentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
    // Required Argument for 'UpdateTreatmentByTaskGuid' (Treatment): Treatment containing the new values (the primary identifier fields within the given Treatment will be ignored)
    [Required]
    public treatment : Treatment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateTreatmentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateTreatmentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateTreatmentByTaskGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteTreatmentByTaskGuid'.
   * Method: Deletes a specific Treatment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteTreatmentByTaskGuidRequest {
    
    // Required Argument for 'DeleteTreatmentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    [Required]
    public taskGuid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteTreatmentByTaskGuid'.
   * Method: Deletes a specific Treatment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteTreatmentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteTreatmentByTaskGuid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
}
