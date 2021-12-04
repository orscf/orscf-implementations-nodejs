/* based on ORSCF VisitData Contract v1.6.0.0 */

import MedicalResearch.VisitData.Model;

namespace MedicalResearch.VisitData.StoreAccess {
  
  public interface IDataRecordings {
    
    /**
     * Loads a specific DataRecording addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetDataRecordingByTaskGuid(taskGuid : string) : GetDataRecordingByTaskGuidResponse;
    
    /**
     * Loads DataRecordings.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of DataRecordings which should be returned
     */
    GetDataRecordings(page : number, pageSize : number) : GetDataRecordingsResponse;
    
    /**
     * Loads DataRecordings where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of DataRecordings which should be returned
     */
    SearchDataRecordings(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchDataRecordingsResponse;
    
    /**
     * Adds a new DataRecording and returns its primary identifier (or null on failure).
     *
     * @param dataRecording DataRecording containing the new values
     */
    AddNewDataRecording(dataRecording : DataRecording) : AddNewDataRecordingResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the primary identifier fields within the given DataRecording. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param dataRecording DataRecording containing the new values (the primary identifier fields within the given DataRecording will be used to address the target record)
     */
    UpdateDataRecording(dataRecording : DataRecording) : UpdateDataRecordingResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given DataRecording addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     * @param dataRecording DataRecording containing the new values (the primary identifier fields within the given DataRecording will be ignored)
     */
    UpdateDataRecordingByTaskGuid(taskGuid : string, dataRecording : DataRecording) : UpdateDataRecordingByTaskGuidResponse;
    
    /**
     * Deletes a specific DataRecording addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteDataRecordingByTaskGuid(taskGuid : string) : DeleteDataRecordingByTaskGuidResponse;
    
  }
  
  public interface IVisits {
    
    /**
     * Loads a specific Visit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param visitGuid a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetVisitByVisitGuid(visitGuid : string) : GetVisitByVisitGuidResponse;
    
    /**
     * Loads Visits.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Visits which should be returned
     */
    GetVisits(page : number, pageSize : number) : GetVisitsResponse;
    
    /**
     * Loads Visits where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Visits which should be returned
     */
    SearchVisits(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchVisitsResponse;
    
    /**
     * Adds a new Visit and returns its primary identifier (or null on failure).
     *
     * @param visit Visit containing the new values
     */
    AddNewVisit(visit : Visit) : AddNewVisitResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the primary identifier fields within the given Visit. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param visit Visit containing the new values (the primary identifier fields within the given Visit will be used to address the target record)
     */
    UpdateVisit(visit : Visit) : UpdateVisitResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Visit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param visitGuid a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     * @param visit Visit containing the new values (the primary identifier fields within the given Visit will be ignored)
     */
    UpdateVisitByVisitGuid(visitGuid : string, visit : Visit) : UpdateVisitByVisitGuidResponse;
    
    /**
     * Deletes a specific Visit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param visitGuid a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteVisitByVisitGuid(visitGuid : string) : DeleteVisitByVisitGuidResponse;
    
  }
  
  public interface IDrugApplyments {
    
    /**
     * Loads a specific DrugApplyment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetDrugApplymentByTaskGuid(taskGuid : string) : GetDrugApplymentByTaskGuidResponse;
    
    /**
     * Loads DrugApplyments.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of DrugApplyments which should be returned
     */
    GetDrugApplyments(page : number, pageSize : number) : GetDrugApplymentsResponse;
    
    /**
     * Loads DrugApplyments where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of DrugApplyments which should be returned
     */
    SearchDrugApplyments(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchDrugApplymentsResponse;
    
    /**
     * Adds a new DrugApplyment and returns its primary identifier (or null on failure).
     *
     * @param drugApplyment DrugApplyment containing the new values
     */
    AddNewDrugApplyment(drugApplyment : DrugApplyment) : AddNewDrugApplymentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the primary identifier fields within the given DrugApplyment. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param drugApplyment DrugApplyment containing the new values (the primary identifier fields within the given DrugApplyment will be used to address the target record)
     */
    UpdateDrugApplyment(drugApplyment : DrugApplyment) : UpdateDrugApplymentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given DrugApplyment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     * @param drugApplyment DrugApplyment containing the new values (the primary identifier fields within the given DrugApplyment will be ignored)
     */
    UpdateDrugApplymentByTaskGuid(taskGuid : string, drugApplyment : DrugApplyment) : UpdateDrugApplymentByTaskGuidResponse;
    
    /**
     * Deletes a specific DrugApplyment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteDrugApplymentByTaskGuid(taskGuid : string) : DeleteDrugApplymentByTaskGuidResponse;
    
  }
  
  public interface IStudyEvents {
    
    /**
     * Loads a specific StudyEvent addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param eventGuid a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetStudyEventByEventGuid(eventGuid : string) : GetStudyEventByEventGuidResponse;
    
    /**
     * Loads StudyEvents.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyEvents which should be returned
     */
    GetStudyEvents(page : number, pageSize : number) : GetStudyEventsResponse;
    
    /**
     * Loads StudyEvents where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyEvents which should be returned
     */
    SearchStudyEvents(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchStudyEventsResponse;
    
    /**
     * Adds a new StudyEvent and returns its primary identifier (or null on failure).
     *
     * @param studyEvent StudyEvent containing the new values
     */
    AddNewStudyEvent(studyEvent : StudyEvent) : AddNewStudyEventResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the primary identifier fields within the given StudyEvent. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyEvent StudyEvent containing the new values (the primary identifier fields within the given StudyEvent will be used to address the target record)
     */
    UpdateStudyEvent(studyEvent : StudyEvent) : UpdateStudyEventResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyEvent addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param eventGuid a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
     * @param studyEvent StudyEvent containing the new values (the primary identifier fields within the given StudyEvent will be ignored)
     */
    UpdateStudyEventByEventGuid(eventGuid : string, studyEvent : StudyEvent) : UpdateStudyEventByEventGuidResponse;
    
    /**
     * Deletes a specific StudyEvent addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param eventGuid a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteStudyEventByEventGuid(eventGuid : string) : DeleteStudyEventByEventGuidResponse;
    
  }
  
  public interface IStudyExecutionScopes {
    
    /**
     * Loads a specific StudyExecutionScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param studyExecutionIdentifier a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetStudyExecutionScopeByStudyExecutionIdentifier(studyExecutionIdentifier : string) : GetStudyExecutionScopeByStudyExecutionIdentifierResponse;
    
    /**
     * Loads StudyExecutionScopes.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyExecutionScopes which should be returned
     */
    GetStudyExecutionScopes(page : number, pageSize : number) : GetStudyExecutionScopesResponse;
    
    /**
     * Loads StudyExecutionScopes where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyExecutionScopes which should be returned
     */
    SearchStudyExecutionScopes(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchStudyExecutionScopesResponse;
    
    /**
     * Adds a new StudyExecutionScope and returns its primary identifier (or null on failure).
     *
     * @param studyExecutionScope StudyExecutionScope containing the new values
     */
    AddNewStudyExecutionScope(studyExecutionScope : StudyExecutionScope) : AddNewStudyExecutionScopeResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the primary identifier fields within the given StudyExecutionScope. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyExecutionScope StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be used to address the target record)
     */
    UpdateStudyExecutionScope(studyExecutionScope : StudyExecutionScope) : UpdateStudyExecutionScopeResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyExecutionIdentifier a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     * @param studyExecutionScope StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be ignored)
     */
    UpdateStudyExecutionScopeByStudyExecutionIdentifier(studyExecutionIdentifier : string, studyExecutionScope : StudyExecutionScope) : UpdateStudyExecutionScopeByStudyExecutionIdentifierResponse;
    
    /**
     * Deletes a specific StudyExecutionScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyExecutionIdentifier a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteStudyExecutionScopeByStudyExecutionIdentifier(studyExecutionIdentifier : string) : DeleteStudyExecutionScopeByStudyExecutionIdentifierResponse;
    
  }
  
  public interface ITreatments {
    
    /**
     * Loads a specific Treatment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetTreatmentByTaskGuid(taskGuid : string) : GetTreatmentByTaskGuidResponse;
    
    /**
     * Loads Treatments.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Treatments which should be returned
     */
    GetTreatments(page : number, pageSize : number) : GetTreatmentsResponse;
    
    /**
     * Loads Treatments where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Treatments which should be returned
     */
    SearchTreatments(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchTreatmentsResponse;
    
    /**
     * Adds a new Treatment and returns its primary identifier (or null on failure).
     *
     * @param treatment Treatment containing the new values
     */
    AddNewTreatment(treatment : Treatment) : AddNewTreatmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the primary identifier fields within the given Treatment. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param treatment Treatment containing the new values (the primary identifier fields within the given Treatment will be used to address the target record)
     */
    UpdateTreatment(treatment : Treatment) : UpdateTreatmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Treatment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     * @param treatment Treatment containing the new values (the primary identifier fields within the given Treatment will be ignored)
     */
    UpdateTreatmentByTaskGuid(taskGuid : string, treatment : Treatment) : UpdateTreatmentByTaskGuidResponse;
    
    /**
     * Deletes a specific Treatment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteTreatmentByTaskGuid(taskGuid : string) : DeleteTreatmentByTaskGuidResponse;
    
  }
  
}
