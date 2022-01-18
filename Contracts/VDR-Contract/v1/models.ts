/* based on ORSCF VisitData Contract v1.7.0.0 */


export class DataRecording {
  
  /**
   * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public taskGuid : string;
  
  /**
   * the guid of the visit in which this task was executed
   */
  public visitGuid : string;
  
  /**
   * unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public dataRecordingName : string;
  
  /**
   * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public taskExecutionTitle : string;
  
  /**
   * the estimated date when the visit is scheduled *this field is optional
   */
  public scheduledDateTimeUtc : Date;
  
  /**
   * the real time, when the data was recorded *this field is optional
   */
  public executionDateTimeUtc : Date;
  
  /**
   * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
   */
  public executionState : number;
  
  /**
   * schema-url of the data which were stored inside of the 'RecordedData' field
   */
  public dataSchemaUrl : string;
  
  /**
   * RAW data, in the schema as defined at the 'DataSchemaUrl'
   */
  public recordedData : string;
  
  /**
   * additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)
   */
  public notesRegardingOutcome : string;
  
  /**
   * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema
   */
  public extendedMetaData : string;
  
  /**
   * *this field is optional (use null as value)
   */
  public executingPerson : string;
  
}

export class DrugApplyment {
  
  /**
   * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public taskGuid : string;
  
  /**
   * the guid of the visit in which this task was executed
   */
  public visitGuid : string;
  
  /**
   * unique invariant name of the study itself as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public drugApplymentName : string;
  
  /**
   * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public taskExecutionTitle : string;
  
  /**
   * the estimated time when the drug applyment is scheduled *this field is optional
   */
  public scheduledDateTimeUtc : Date;
  
  /**
   * the real date, when the visits was executed *this field is optional
   */
  public executionDateTimeUtc : Date;
  
  /**
   * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
   */
  public executionState : number;
  
  /**
   * name of the drug
   */
  public drugName : string;
  
  /**
   * dose (mg) which is inside of one unit
   */
  public drugDoseMgPerUnitMg : number;
  
  /**
   * amount of applied units
   */
  public appliedUnits : number;
  
  /**
   * additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)
   */
  public notesRegardingOutcome : string;
  
  /**
   * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema
   */
  public extendedMetaData : string;
  
  /**
   * *this field is optional (use null as value)
   */
  public executingPerson : string;
  
}

export class StudyEvent {
  
  /**
   * a global unique id of a concrete study-event occurrence which is usually originated at the primary CRF or study management system ('SMS')
   */
  public eventGuid : string;
  
  /**
   * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study)
   */
  public participantIdentifier : string;
  
  /**
   * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
   */
  public studyExecutionIdentifier : string;
  
  /**
   * unique invariant name of the event as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public studyEventName : string;
  
  /**
   * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
   */
  public extendedMetaData : string;
  
  public occourrenceDateTimeUtc : Date;
  
  public causeInfo : string;
  
  /**
   * additional notes (supplied by the execution person) *this field is optional (use null as value)
   */
  public additionalNotes : string;
  
}

export class StudyExecutionScope {
  
  /**
   * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
   */
  public studyExecutionIdentifier : string;
  
  /**
   * the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)
   */
  public executingInstituteIdentifier : string;
  
  /**
   * the official invariant name of the study as given by the sponsor *this field has a max length of 100
   */
  public studyWorkflowName : string;
  
  /**
   * version of the workflow *this field has a max length of 20
   */
  public studyWorkflowVersion : string;
  
  /**
   * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
   */
  public extendedMetaData : string;
  
}

export class Treatment {
  
  /**
   * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public taskGuid : string;
  
  /**
   * the guid of the visit in which this task was executed
   */
  public visitGuid : string;
  
  /**
   * unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public treatmentName : string;
  
  /**
   * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public taskExecutionTitle : string;
  
  /**
   * the estimated time when the treatment is scheduled *this field is optional
   */
  public scheduledDateTimeUtc : Date;
  
  /**
   * the real time, when the treatment was executed *this field is optional
   */
  public executionDateTimeUtc : Date;
  
  /**
   * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
   */
  public executionState : number;
  
  /**
   * additional notes regarding this dedcated execution (supplied by the execution person) *this field is optional (use null as value)
   */
  public notesRegardingOutcome : string;
  
  /**
   * optional structure of additional metadata regarding this record in JSON-format, which can be used by study execution systems to extend the schema
   */
  public extendedMetaData : string;
  
  /**
   * *this field is optional (use null as value)
   */
  public executingPerson : string;
  
}

export class Visit {
  
  /**
   * a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public visitGuid : string;
  
  /**
   * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50
   */
  public participantIdentifier : string;
  
  /**
   * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
   */
  public studyExecutionIdentifier : string;
  
  /**
   * unique invariant name of the visit-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public visitProdecureName : string;
  
  /**
   * unique title of the visit execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public visitExecutionTitle : string;
  
  /**
   * the estimated date when the visit is scheduled for execution *this field is optional
   */
  public scheduledDateUtc : Date;
  
  /**
   * the real date, when the visits was executed *this field is optional
   */
  public executionDateUtc : Date;
  
  /**
   * 0=Unscheduled / 1=Sheduled / 2=Executed / 3=AbortDuringExecution / 4=Skipped / 5=Removed
   */
  public executionState : number;
  
  /**
   * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
   */
  public extendedMetaData : string;
  
  /**
   * *this field is optional (use null as value)
   */
  public executingPerson : string;
  
}
