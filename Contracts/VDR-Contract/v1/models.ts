/* based on ORSCF VisitData Contract v1.6.0.11538 */

import MedicalResearch.VisitData.Model;

namespace MedicalResearch.VisitData.StoreAccess {
  
  public class DataRecording {
    
    /**
     * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public taskGuid : string { get; set; }
    
    /**
     * the guid of the visit in which this task was executed
     */
    public visitGuid : string { get; set; }
    
    /**
     * unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public dataRecordingName : string { get; set; }
    
    /**
     * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public taskExecutionTitle : string { get; set; }
    
    /**
     * the estimated date when the visit is scheduled *this field is optional
     */
    public scheduledDateTimeUtc : date? { get; set; }
    
    /**
     * the real time, when the data was recorded *this field is optional
     */
    public executionDateTimeUtc : date? { get; set; }
    
    /**
     * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
     */
    public executionState : number { get; set; }
    
    /**
     * schema-url of the data which were stored inside of the 'RecordedData' field
     */
    public dataSchemaUrl : string { get; set; }
    
    /**
     * RAW data, in the schema as defined at the 'DataSchemaUrl'
     */
    public recordedData : string { get; set; }
    
    /**
     * additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)
     */
    public notesRegardingOutcome : string { get; set; }
    
    /**
     * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema
     */
    public extendedMetaData : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public executingPerson : string { get; set; }
    
  }
  
  public class DrugApplyment {
    
    /**
     * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public taskGuid : string { get; set; }
    
    /**
     * the guid of the visit in which this task was executed
     */
    public visitGuid : string { get; set; }
    
    /**
     * unique invariant name of the study itself as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public drugApplymentName : string { get; set; }
    
    /**
     * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public taskExecutionTitle : string { get; set; }
    
    /**
     * the estimated time when the drug applyment is scheduled *this field is optional
     */
    public scheduledDateTimeUtc : date? { get; set; }
    
    /**
     * the real date, when the visits was executed *this field is optional
     */
    public executionDateTimeUtc : date? { get; set; }
    
    /**
     * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
     */
    public executionState : number { get; set; }
    
    /**
     * name of the drug
     */
    public drugName : string { get; set; }
    
    /**
     * dose (mg) which is inside of one unit
     */
    public drugDoseMgPerUnitMg : number { get; set; }
    
    /**
     * amount of applied units
     */
    public appliedUnits : number { get; set; }
    
    /**
     * additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)
     */
    public notesRegardingOutcome : string { get; set; }
    
    /**
     * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema
     */
    public extendedMetaData : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public executingPerson : string { get; set; }
    
  }
  
  public class StudyEvent {
    
    /**
     * a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
     */
    public eventGuid : string { get; set; }
    
    /**
     * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study)
     */
    public participantIdentifier : string { get; set; }
    
    /**
     * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    public studyExecutionIdentifier : string { get; set; }
    
    /**
     * unique invariant name of the event as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public studyEventName : string { get; set; }
    
    /**
     * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
     */
    public extendedMetaData : string { get; set; }
    
    public occourrenceDateTimeUtc : date { get; set; }
    
    public causeInfo : string { get; set; }
    
    /**
     * additional notes (supplied by the execution person) *this field is optional (use null as value)
     */
    public additionalNotes : string { get; set; }
    
  }
  
  public class StudyExecutionScope {
    
    /**
     * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    public studyExecutionIdentifier : string { get; set; }
    
    /**
     * the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)
     */
    public executingInstituteIdentifier : string { get; set; }
    
    /**
     * the official invariant name of the study as given by the sponsor *this field has a max length of 100
     */
    public studyWorkflowName : string { get; set; }
    
    /**
     * version of the workflow *this field has a max length of 20
     */
    public studyWorkflowVersion : string { get; set; }
    
    /**
     * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
     */
    public extendedMetaData : string { get; set; }
    
  }
  
  public class Treatment {
    
    /**
     * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public taskGuid : string { get; set; }
    
    /**
     * the guid of the visit in which this task was executed
     */
    public visitGuid : string { get; set; }
    
    /**
     * unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public treatmentName : string { get; set; }
    
    /**
     * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public taskExecutionTitle : string { get; set; }
    
    /**
     * the estimated time when the treatment is scheduled *this field is optional
     */
    public scheduledDateTimeUtc : date? { get; set; }
    
    /**
     * the real time, when the treatment was executed *this field is optional
     */
    public executionDateTimeUtc : date? { get; set; }
    
    /**
     * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
     */
    public executionState : number { get; set; }
    
    /**
     * additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)
     */
    public notesRegardingOutcome : string { get; set; }
    
    /**
     * optional structure of additional metadata regarding this record in JSON-format, which can be used by study execution systems to extend the schema
     */
    public extendedMetaData : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public executingPerson : string { get; set; }
    
  }
  
  public class Visit {
    
    /**
     * a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public visitGuid : string { get; set; }
    
    /**
     * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50
     */
    public participantIdentifier : string { get; set; }
    
    /**
     * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    public studyExecutionIdentifier : string { get; set; }
    
    /**
     * unique invariant name of the visit-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public visitProdecureName : string { get; set; }
    
    /**
     * unique title of the visit execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public visitExecutionTitle : string { get; set; }
    
    /**
     * the estimated date when the visit is scheduled for execution *this field is optional
     */
    public scheduledDateUtc : date? { get; set; }
    
    /**
     * the real date, when the visits was executed *this field is optional
     */
    public executionDateUtc : date? { get; set; }
    
    /**
     * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
     */
    public executionState : number { get; set; }
    
    /**
     * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
     */
    public extendedMetaData : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public executingPerson : string { get; set; }
    
  }
  
}
