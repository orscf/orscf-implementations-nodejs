/* based on ORSCF VisitData Contract v1.7.0.0 */

import MedicalResearch.VisitData.Model;

namespace MedicalResearch.VisitData.StoreAccess {
  
  /**
   * Contains arguments for calling 'GetDataRecordingByTaskGuid'.
   * Method: Loads a specific DataRecording addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetDataRecordingByTaskGuidRequest {
    
    // Required Argument for 'GetDataRecordingByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetDataRecordingByTaskGuid'.
   * Method: Loads a specific DataRecording addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetDataRecordingByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetDataRecordingByTaskGuid' (DataRecording)
    public return : DataRecording;
    
  }
  
  /**
   * Contains arguments for calling 'GetDataRecordings'.
   * Method: Loads DataRecordings.
   */
  export class GetDataRecordingsRequest {
    
    // Optional Argument for 'GetDataRecordings' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetDataRecordings' (number): Max count of DataRecordings which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetDataRecordings'.
   * Method: Loads DataRecordings.
   */
  export class GetDataRecordingsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetDataRecordings' (DataRecording[])
    public return : DataRecording[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchDataRecordings'.
   * Method: Loads DataRecordings where values matching to the given filterExpression
   */
  export class SearchDataRecordingsRequest {
    
    // Required Argument for 'SearchDataRecordings' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchDataRecordings' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchDataRecordings' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchDataRecordings' (number): Max count of DataRecordings which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchDataRecordings'.
   * Method: Loads DataRecordings where values matching to the given filterExpression
   */
  export class SearchDataRecordingsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchDataRecordings' (DataRecording[])
    public return : DataRecording[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewDataRecording'.
   * Method: Adds a new DataRecording and returns its primary identifier (or null on failure).
   */
  export class AddNewDataRecordingRequest {
    
    // Required Argument for 'AddNewDataRecording' (DataRecording): DataRecording containing the new values
    public dataRecording : DataRecording;
    
  }
  
  /**
   * Contains results from calling 'AddNewDataRecording'.
   * Method: Adds a new DataRecording and returns its primary identifier (or null on failure).
   */
  export class AddNewDataRecordingResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewDataRecording' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDataRecording'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the primary identifier fields within the given DataRecording. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDataRecordingRequest {
    
    // Required Argument for 'UpdateDataRecording' (DataRecording): DataRecording containing the new values (the primary identifier fields within the given DataRecording will be used to address the target record)
    public dataRecording : DataRecording;
    
  }
  
  /**
   * Contains results from calling 'UpdateDataRecording'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the primary identifier fields within the given DataRecording. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDataRecordingResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateDataRecording' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDataRecordingByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDataRecordingByTaskGuidRequest {
    
    // Required Argument for 'UpdateDataRecordingByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
    // Required Argument for 'UpdateDataRecordingByTaskGuid' (DataRecording): DataRecording containing the new values (the primary identifier fields within the given DataRecording will be ignored)
    public dataRecording : DataRecording;
    
  }
  
  /**
   * Contains results from calling 'UpdateDataRecordingByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDataRecordingByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateDataRecordingByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteDataRecordingByTaskGuid'.
   * Method: Deletes a specific DataRecording addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteDataRecordingByTaskGuidRequest {
    
    // Required Argument for 'DeleteDataRecordingByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteDataRecordingByTaskGuid'.
   * Method: Deletes a specific DataRecording addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteDataRecordingByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteDataRecordingByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetVisitByVisitGuid'.
   * Method: Loads a specific Visit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetVisitByVisitGuidRequest {
    
    // Required Argument for 'GetVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    public visitGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetVisitByVisitGuid'.
   * Method: Loads a specific Visit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetVisitByVisitGuid' (Visit)
    public return : Visit;
    
  }
  
  /**
   * Contains arguments for calling 'GetVisits'.
   * Method: Loads Visits.
   */
  export class GetVisitsRequest {
    
    // Optional Argument for 'GetVisits' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetVisits' (number): Max count of Visits which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetVisits'.
   * Method: Loads Visits.
   */
  export class GetVisitsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetVisits' (Visit[])
    public return : Visit[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchVisits'.
   * Method: Loads Visits where values matching to the given filterExpression
   */
  export class SearchVisitsRequest {
    
    // Required Argument for 'SearchVisits' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchVisits' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchVisits' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchVisits' (number): Max count of Visits which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchVisits'.
   * Method: Loads Visits where values matching to the given filterExpression
   */
  export class SearchVisitsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchVisits' (Visit[])
    public return : Visit[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewVisit'.
   * Method: Adds a new Visit and returns its primary identifier (or null on failure).
   */
  export class AddNewVisitRequest {
    
    // Required Argument for 'AddNewVisit' (Visit): Visit containing the new values
    public visit : Visit;
    
  }
  
  /**
   * Contains results from calling 'AddNewVisit'.
   * Method: Adds a new Visit and returns its primary identifier (or null on failure).
   */
  export class AddNewVisitResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewVisit' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateVisit'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the primary identifier fields within the given Visit. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateVisitRequest {
    
    // Required Argument for 'UpdateVisit' (Visit): Visit containing the new values (the primary identifier fields within the given Visit will be used to address the target record)
    public visit : Visit;
    
  }
  
  /**
   * Contains results from calling 'UpdateVisit'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the primary identifier fields within the given Visit. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateVisitResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateVisit' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateVisitByVisitGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateVisitByVisitGuidRequest {
    
    // Required Argument for 'UpdateVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    public visitGuid : string;
    
    // Required Argument for 'UpdateVisitByVisitGuid' (Visit): Visit containing the new values (the primary identifier fields within the given Visit will be ignored)
    public visit : Visit;
    
  }
  
  /**
   * Contains results from calling 'UpdateVisitByVisitGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateVisitByVisitGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteVisitByVisitGuid'.
   * Method: Deletes a specific Visit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteVisitByVisitGuidRequest {
    
    // Required Argument for 'DeleteVisitByVisitGuid' (string): a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
    public visitGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteVisitByVisitGuid'.
   * Method: Deletes a specific Visit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteVisitByVisitGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteVisitByVisitGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetDrugApplymentByTaskGuid'.
   * Method: Loads a specific DrugApplyment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetDrugApplymentByTaskGuidRequest {
    
    // Required Argument for 'GetDrugApplymentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetDrugApplymentByTaskGuid'.
   * Method: Loads a specific DrugApplyment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetDrugApplymentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetDrugApplymentByTaskGuid' (DrugApplyment)
    public return : DrugApplyment;
    
  }
  
  /**
   * Contains arguments for calling 'GetDrugApplyments'.
   * Method: Loads DrugApplyments.
   */
  export class GetDrugApplymentsRequest {
    
    // Optional Argument for 'GetDrugApplyments' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetDrugApplyments' (number): Max count of DrugApplyments which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetDrugApplyments'.
   * Method: Loads DrugApplyments.
   */
  export class GetDrugApplymentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetDrugApplyments' (DrugApplyment[])
    public return : DrugApplyment[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchDrugApplyments'.
   * Method: Loads DrugApplyments where values matching to the given filterExpression
   */
  export class SearchDrugApplymentsRequest {
    
    // Required Argument for 'SearchDrugApplyments' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchDrugApplyments' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchDrugApplyments' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchDrugApplyments' (number): Max count of DrugApplyments which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchDrugApplyments'.
   * Method: Loads DrugApplyments where values matching to the given filterExpression
   */
  export class SearchDrugApplymentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchDrugApplyments' (DrugApplyment[])
    public return : DrugApplyment[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewDrugApplyment'.
   * Method: Adds a new DrugApplyment and returns its primary identifier (or null on failure).
   */
  export class AddNewDrugApplymentRequest {
    
    // Required Argument for 'AddNewDrugApplyment' (DrugApplyment): DrugApplyment containing the new values
    public drugApplyment : DrugApplyment;
    
  }
  
  /**
   * Contains results from calling 'AddNewDrugApplyment'.
   * Method: Adds a new DrugApplyment and returns its primary identifier (or null on failure).
   */
  export class AddNewDrugApplymentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewDrugApplyment' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDrugApplyment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the primary identifier fields within the given DrugApplyment. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDrugApplymentRequest {
    
    // Required Argument for 'UpdateDrugApplyment' (DrugApplyment): DrugApplyment containing the new values (the primary identifier fields within the given DrugApplyment will be used to address the target record)
    public drugApplyment : DrugApplyment;
    
  }
  
  /**
   * Contains results from calling 'UpdateDrugApplyment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the primary identifier fields within the given DrugApplyment. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDrugApplymentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateDrugApplyment' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateDrugApplymentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDrugApplymentByTaskGuidRequest {
    
    // Required Argument for 'UpdateDrugApplymentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
    // Required Argument for 'UpdateDrugApplymentByTaskGuid' (DrugApplyment): DrugApplyment containing the new values (the primary identifier fields within the given DrugApplyment will be ignored)
    public drugApplyment : DrugApplyment;
    
  }
  
  /**
   * Contains results from calling 'UpdateDrugApplymentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateDrugApplymentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateDrugApplymentByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteDrugApplymentByTaskGuid'.
   * Method: Deletes a specific DrugApplyment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteDrugApplymentByTaskGuidRequest {
    
    // Required Argument for 'DeleteDrugApplymentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteDrugApplymentByTaskGuid'.
   * Method: Deletes a specific DrugApplyment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteDrugApplymentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteDrugApplymentByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyEventByEventGuid'.
   * Method: Loads a specific StudyEvent addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetStudyEventByEventGuidRequest {
    
    // Required Argument for 'GetStudyEventByEventGuid' (string): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
    public eventGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetStudyEventByEventGuid'.
   * Method: Loads a specific StudyEvent addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetStudyEventByEventGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetStudyEventByEventGuid' (StudyEvent)
    public return : StudyEvent;
    
  }
  
  /**
   * Contains arguments for calling 'GetStudyEvents'.
   * Method: Loads StudyEvents.
   */
  export class GetStudyEventsRequest {
    
    // Optional Argument for 'GetStudyEvents' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetStudyEvents' (number): Max count of StudyEvents which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetStudyEvents'.
   * Method: Loads StudyEvents.
   */
  export class GetStudyEventsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetStudyEvents' (StudyEvent[])
    public return : StudyEvent[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchStudyEvents'.
   * Method: Loads StudyEvents where values matching to the given filterExpression
   */
  export class SearchStudyEventsRequest {
    
    // Required Argument for 'SearchStudyEvents' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchStudyEvents' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchStudyEvents' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchStudyEvents' (number): Max count of StudyEvents which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchStudyEvents'.
   * Method: Loads StudyEvents where values matching to the given filterExpression
   */
  export class SearchStudyEventsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchStudyEvents' (StudyEvent[])
    public return : StudyEvent[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewStudyEvent'.
   * Method: Adds a new StudyEvent and returns its primary identifier (or null on failure).
   */
  export class AddNewStudyEventRequest {
    
    // Required Argument for 'AddNewStudyEvent' (StudyEvent): StudyEvent containing the new values
    public studyEvent : StudyEvent;
    
  }
  
  /**
   * Contains results from calling 'AddNewStudyEvent'.
   * Method: Adds a new StudyEvent and returns its primary identifier (or null on failure).
   */
  export class AddNewStudyEventResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewStudyEvent' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyEvent'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the primary identifier fields within the given StudyEvent. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyEventRequest {
    
    // Required Argument for 'UpdateStudyEvent' (StudyEvent): StudyEvent containing the new values (the primary identifier fields within the given StudyEvent will be used to address the target record)
    public studyEvent : StudyEvent;
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyEvent'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the primary identifier fields within the given StudyEvent. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyEventResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateStudyEvent' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateStudyEventByEventGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyEventByEventGuidRequest {
    
    // Required Argument for 'UpdateStudyEventByEventGuid' (string): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
    public eventGuid : string;
    
    // Required Argument for 'UpdateStudyEventByEventGuid' (StudyEvent): StudyEvent containing the new values (the primary identifier fields within the given StudyEvent will be ignored)
    public studyEvent : StudyEvent;
    
  }
  
  /**
   * Contains results from calling 'UpdateStudyEventByEventGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateStudyEventByEventGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateStudyEventByEventGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteStudyEventByEventGuid'.
   * Method: Deletes a specific StudyEvent addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteStudyEventByEventGuidRequest {
    
    // Required Argument for 'DeleteStudyEventByEventGuid' (string): a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
    public eventGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteStudyEventByEventGuid'.
   * Method: Deletes a specific StudyEvent addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteStudyEventByEventGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteStudyEventByEventGuid' (Boolean)
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
   * Contains arguments for calling 'GetTreatmentByTaskGuid'.
   * Method: Loads a specific Treatment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetTreatmentByTaskGuidRequest {
    
    // Required Argument for 'GetTreatmentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'GetTreatmentByTaskGuid'.
   * Method: Loads a specific Treatment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  export class GetTreatmentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetTreatmentByTaskGuid' (Treatment)
    public return : Treatment;
    
  }
  
  /**
   * Contains arguments for calling 'GetTreatments'.
   * Method: Loads Treatments.
   */
  export class GetTreatmentsRequest {
    
    // Optional Argument for 'GetTreatments' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'GetTreatments' (number): Max count of Treatments which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'GetTreatments'.
   * Method: Loads Treatments.
   */
  export class GetTreatmentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'GetTreatments' (Treatment[])
    public return : Treatment[];
    
  }
  
  /**
   * Contains arguments for calling 'SearchTreatments'.
   * Method: Loads Treatments where values matching to the given filterExpression
   */
  export class SearchTreatmentsRequest {
    
    // Required Argument for 'SearchTreatments' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    public filterExpression : string;
    
    // Optional Argument for 'SearchTreatments' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression? : string;
    
    // Optional Argument for 'SearchTreatments' (number): Number of the page, which should be returned
    public page? : number = null;
    
    // Optional Argument for 'SearchTreatments' (number): Max count of Treatments which should be returned
    public pageSize? : number = null;
    
  }
  
  /**
   * Contains results from calling 'SearchTreatments'.
   * Method: Loads Treatments where values matching to the given filterExpression
   */
  export class SearchTreatmentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'SearchTreatments' (Treatment[])
    public return : Treatment[];
    
  }
  
  /**
   * Contains arguments for calling 'AddNewTreatment'.
   * Method: Adds a new Treatment and returns its primary identifier (or null on failure).
   */
  export class AddNewTreatmentRequest {
    
    // Required Argument for 'AddNewTreatment' (Treatment): Treatment containing the new values
    public treatment : Treatment;
    
  }
  
  /**
   * Contains results from calling 'AddNewTreatment'.
   * Method: Adds a new Treatment and returns its primary identifier (or null on failure).
   */
  export class AddNewTreatmentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'AddNewTreatment' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateTreatment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the primary identifier fields within the given Treatment. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateTreatmentRequest {
    
    // Required Argument for 'UpdateTreatment' (Treatment): Treatment containing the new values (the primary identifier fields within the given Treatment will be used to address the target record)
    public treatment : Treatment;
    
  }
  
  /**
   * Contains results from calling 'UpdateTreatment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the primary identifier fields within the given Treatment. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateTreatmentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateTreatment' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'UpdateTreatmentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateTreatmentByTaskGuidRequest {
    
    // Required Argument for 'UpdateTreatmentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
    // Required Argument for 'UpdateTreatmentByTaskGuid' (Treatment): Treatment containing the new values (the primary identifier fields within the given Treatment will be ignored)
    public treatment : Treatment;
    
  }
  
  /**
   * Contains results from calling 'UpdateTreatmentByTaskGuid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class UpdateTreatmentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'UpdateTreatmentByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
  /**
   * Contains arguments for calling 'DeleteTreatmentByTaskGuid'.
   * Method: Deletes a specific Treatment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteTreatmentByTaskGuidRequest {
    
    // Required Argument for 'DeleteTreatmentByTaskGuid' (string): a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
    public taskGuid : string;
    
  }
  
  /**
   * Contains results from calling 'DeleteTreatmentByTaskGuid'.
   * Method: Deletes a specific Treatment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  export class DeleteTreatmentByTaskGuidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string = null;
    
    // Return-Value of 'DeleteTreatmentByTaskGuid' (Boolean)
    public return : boolean;
    
  }
  
}
