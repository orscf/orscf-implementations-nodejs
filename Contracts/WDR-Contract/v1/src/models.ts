/* based on ORSCF StudyWorkflowDefinition Contract v1.9.0.11838 */


export class QuestionaireMetaRecord {
  
  public questionaireUrl: string = '';
  
  public questionaireVersion: string = '';
  
}

export class ResearchStudyDefinitionMetaRecord {
  
  /**
   * the official invariant name of the study as given by the sponsor *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  public officialLabel: string = '';
  
}

export class Arm {
  
  /**
   * Name of the Arm - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
   */
  public studyArmName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * the ProcedureSchedule which is representing the primary-/entry-workflow (estimated visits) for participants of this arm *this field is optional
   */
  public rootProcedureScheduleId?: string;
  
  /**
   * *this field is optional
   */
  public billablePriceOnFailedInclusion?: number;
  
  /**
   * *this field is optional
   */
  public billablePriceOnSuccessfullInclusion?: number;
  
  /**
   * *this field is optional
   */
  public billablePriceOnAbortedParticipation?: number;
  
  /**
   * *this field is optional
   */
  public billablePriceOnCompletedParticipation?: number;
  
  /**
   * *this field is optional (use null as value)
   */
  public armSpecificDocumentationUrl?: string;
  
  /**
   * *this field is optional (use null as value)
   */
  public inclusionCriteria?: string;
  
  /**
   * comma sparated list of Sub-Study names which are allowed to be executed for this arm *this field is optional (use null as value)
   */
  public allowedSubstudies?: string;
  
}

export class DataRecordingTaskDefinition {
  
  /**
   * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
   */
  public taskDefinitionName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * *this field is optional
   */
  public billablePriceOnCompletedExecution?: number;
  
  public shortDescription: string = '';
  
  /**
   * *this field is optional (use null as value)
   */
  public taskSpecificDocumentationUrl?: string;
  
  /**
   * *this field is optional (use null as value)
   */
  public importantNotices?: string;
  
  /**
   * schema-url of the data which have to be recorded
   */
  public dataSchemaUrl: string = '';
  
  /**
   * RAW data, in the schema as defined at the 'DataSchemaUrl' *this field is optional (use null as value)
   */
  public defaultData?: string;
  
}

export class DrugApplymentTaskDefinition {
  
  /**
   * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
   */
  public taskDefinitionName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * *this field is optional
   */
  public billablePriceOnCompletedExecution?: number;
  
  public shortDescription: string = '';
  
  /**
   * *this field is optional (use null as value)
   */
  public taskSpecificDocumentationUrl?: string;
  
  public drugName: string = '';
  
  public drugDoseMgPerUnitMg: number = 0;
  
  public unitsToApply: number = 0;
  
  public applymentRoute: string = '';
  
  /**
   * *this field is optional (use null as value)
   */
  public importantNotices?: string;
  
}

export class ProcedureDefinition {
  
  /**
   * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
   */
  public prodecureDefinitionName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * the TaskSchedule which is representing the primary-/entry-workflow (estimated tasks) when executing this visit *this field is optional
   */
  public rootTaskScheduleId?: string;
  
  /**
   * *this field is optional
   */
  public billablePriceOnAbortedExecution?: number;
  
  /**
   * *this field is optional
   */
  public billablePriceOnCompletedExecution?: number;
  
  /**
   * *this field is optional (use null as value)
   */
  public visitSpecificDocumentationUrl?: string;
  
}

export class InducedProcedure {
  
  public id: string = '';
  
  public procedureScheduleId: string = '';
  
  /**
   * estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule
   */
  public schedulingOffset: number = 0;
  
  /**
   * 'M'=Months / 'W'=Weeks / 'D'=Days
   */
  public schedulingOffsetUnit: string = '';
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the EARLIEST possible date.
   */
  public schedulingVariabilityBefore: number = 0;
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling date (which is calculated from the offset), in this case the LATEST possible date.
   */
  public schedulingVariabilityAfter: number = 0;
  
  /**
   * 'M'=Months / 'W'=Weeks / 'D'=Days
   */
  public schedulingVariabilityUnit: string = '';
  
  /**
   * *this field has a max length of 50
   */
  public prodecureDefinitionName: string = '';
  
  /**
   * the name for the induced execution (=VISIT), like 'V0', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: 'C{cy}-V0') to prevent from duplicate execution names.
   */
  public uniqueExecutionName: string = '';
  
  /**
   * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
   */
  public skipable: boolean = false;
  
  public eventOnSkip: string = '';
  
  public eventOnLost: string = '';
  
  /**
   * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
   */
  public position: number = 0;
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
   */
  public schedulingOffsetFixpoint: number = 0;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public schedulingByEstimate: boolean = false;
  
  /**
   * The name of a Sub-Study for which this procedure should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)
   */
  public dedicatedToSubstudy?: string;
  
  /**
   * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
   */
  public visitNumber: number = 0;
  
}

export class InducedSubProcedureSchedule {
  
  public id: string = '';
  
  public parentProcedureScheduleId: string = '';
  
  public inducedProcedureScheduleId: string = '';
  
  /**
   * estimated scheduling date relative to the scheduling date of the parent ProcedureSchedule
   */
  public schedulingOffset: number = 0;
  
  /**
   * 'M'=Months / 'W'=Weeks / 'D'=Days
   */
  public schedulingOffsetUnit: string = '';
  
  public sharedSkipCounters: boolean = false;
  
  public sharedLostCounters: boolean = false;
  
  /**
   * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
   */
  public position: number = 0;
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor procedure or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
   */
  public schedulingOffsetFixpoint: number = 0;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public schedulingByEstimate: boolean = false;
  
  /**
   * The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)
   */
  public dedicatedToSubstudy?: string;
  
  public increaseVisitNumberBase: number = 0;
  
  public inheritVisitNumberBase: boolean = false;
  
}

export class ProcedureCycleDefinition {
  
  public procedureScheduleId: string = '';
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last procedure or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'
   */
  public reschedulingOffsetFixpoint: number = 0;
  
  /**
   * estimated scheduling date relative to the ReschedulingBase
   */
  public reschedulingOffset: number = 0;
  
  /**
   * 'M'=Months / 'W'=Weeks / 'D'=Days
   */
  public reschedulingOffsetUnit: string = '';
  
  /**
   * number of cycles (of null for a infinite number of cycles) *this field is optional
   */
  public cycleLimit?: number;
  
  public sharedSkipCounters: boolean = false;
  
  public sharedLostCounters: boolean = false;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public reschedulingByEstimate: boolean = false;
  
  /**
   * -1: automatic, based on the usage of visit numbers within the schedule
   */
  public increaseVisitNumberBasePerCycle: number = 0;
  
}

export class TreatmentTaskDefinition {
  
  /**
   * Name of the Definition - INVARIANT! because it is used to generate Identifers for induced executions! *this field has a max length of 50
   */
  public taskDefinitionName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * *this field is optional
   */
  public billablePriceOnCompletedExecution?: number;
  
  public shortDescription: string = '';
  
  /**
   * *this field is optional (use null as value)
   */
  public taskSpecificDocumentationUrl?: string;
  
  public treatmentDescription: string = '';
  
  /**
   * *this field is optional (use null as value)
   */
  public importantNotices?: string;
  
}

export class InducedDataRecordingTask {
  
  public id: string = '';
  
  public taskScheduleId: string = '';
  
  /**
   * *this field has a max length of 50
   */
  public taskDefinitionName: string = '';
  
  /**
   * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
   */
  public schedulingOffset: number = 0;
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingOffsetUnit: string = '';
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
   */
  public schedulingVariabilityBefore: string = '';
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
   */
  public schedulingVariabilityAfter: string = '';
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingVariabilityUnit: string = '';
  
  /**
   * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
   */
  public uniqueExecutionName: string = '';
  
  /**
   * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
   */
  public skipable: boolean = false;
  
  public eventOnSkip: string = '';
  
  public eventOnLost: string = '';
  
  /**
   * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
   */
  public position: number = 0;
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
   */
  public schedulingOffsetFixpoint: number = 0;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public schedulingByEstimate: boolean = false;
  
  /**
   * The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)
   */
  public dedicatedToSubstudy?: string;
  
  /**
   * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
   */
  public taskNumber: number = 0;
  
}

export class InducedDrugApplymentTask {
  
  public id: string = '';
  
  public taskScheduleId: string = '';
  
  /**
   * *this field has a max length of 50
   */
  public taskDefinitionName: string = '';
  
  /**
   * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
   */
  public schedulingOffset: number = 0;
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingOffsetUnit: string = '';
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
   */
  public schedulingVariabilityBefore: number = 0;
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
   */
  public schedulingVariabilityAfter: number = 0;
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingVariabilityUnit: string = '';
  
  /**
   * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
   */
  public uniqueExecutionName: string = '';
  
  /**
   * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
   */
  public skipable: boolean = false;
  
  public eventOnSkip: string = '';
  
  public eventOnLost: string = '';
  
  /**
   * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
   */
  public position: number = 0;
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
   */
  public schedulingOffsetFixpoint: number = 0;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public schedulingByEstimate: boolean = false;
  
  /**
   * The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)
   */
  public dedicatedToSubstudy?: string;
  
  /**
   * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
   */
  public taskNumber: number = 0;
  
}

export class InducedSubTaskSchedule {
  
  public id: string = '';
  
  public parentTaskScheduleId: string = '';
  
  public inducedTaskScheduleId: string = '';
  
  /**
   * estimated scheduling time relative to the scheduling date of the parent ProcedureSchedule
   */
  public schedulingOffset: number = 0;
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingOffsetUnit: string = '';
  
  public sharedSkipCounters: boolean = false;
  
  public sharedLostCounters: boolean = false;
  
  /**
   * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
   */
  public position: number = 0;
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
   */
  public schedulingOffsetFixpoint: number = 0;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public schedulingByEstimate: boolean = false;
  
  /**
   * The name of a Sub-Study for which this schedule should be induced or empty when its part of the current Arms regular workflow  *this field is optional (use null as value)
   */
  public dedicatedToSubstudy?: string;
  
  public increaseVisitNumberBase: number = 0;
  
  public inheritVisitNumberBase: boolean = false;
  
}

export class InducedTreatmentTask {
  
  public id: string = '';
  
  public taskScheduleId: string = '';
  
  /**
   * *this field has a max length of 50
   */
  public taskDefinitionName: string = '';
  
  /**
   * estimated scheduling time relative to the scheduling date of the parent TaskSchedule
   */
  public schedulingOffset: number = 0;
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingOffsetUnit: string = '';
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the EARLIEST possible time.
   */
  public schedulingVariabilityBefore: string = '';
  
  /**
   * defines an additional variability RELATIVE to the estimated scheduling time (which is calculated from the offset), in this case the LATEST possible time.
   */
  public schedulingVariabilityAfter: string = '';
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public schedulingVariabilityUnit: string = '';
  
  /**
   * the name for the induced execution, like 'Measurement X', which is usually defined by the study protocol. if multiple inducements are possible (for example when using cycles), the title should to contain a placeholder (example: '{vt} - Measurement X') to prevent from duplicate execution names.
   */
  public uniqueExecutionName: string = '';
  
  /**
   * defines, if the study protocol tolerates this execution to be 'skipped' (if not, a missed execution is treated as 'lost' and can cause the exclusion of the participant)
   */
  public skipable: boolean = false;
  
  public eventOnSkip: string = '';
  
  public eventOnLost: string = '';
  
  /**
   * The Position (1..x) of this inducement within the parent schedule. This value is relevant for addressing predecessors as fixpoint for the offest-calculation. Within one schedule there can only be one inducement for each position! The 0 is reserved for addressing the parent schedule itself and must not be used as well as negative values!
   */
  public position: number = 0;
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the parent Schedule (for the current cycle) was induced / -1=InducementOfPredessessor: when the direct predecessor task or subschedule (based on the 'Position') within the current schedule was induced / 1..x: when the predecessor at the Position within the current schedule, ADRESSED by the given value, was induced *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'SchedulingByEstimate'
   */
  public schedulingOffsetFixpoint: number = 0;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public schedulingByEstimate: boolean = false;
  
  /**
   * The name of a Sub-Study for which this Task should be induced or empty when its part of the current Arms regular workflow *this field is optional (use null as value)
   */
  public dedicatedToSubstudy?: string;
  
  /**
   * Number, which can be used via Placeholder {#} within the UniqueExecutionName and which will automatically increase when using cycles or sub-schedules
   */
  public taskNumber: number = 0;
  
}

export class TaskCycleDefinition {
  
  public taskScheduleId: string = '';
  
  /**
   * 0=InducementOfScheduleOrCycle: when the start of the last cycle was induced / -1=InducementOfPredessessor: when the last task or subschedule (based on the 'Position') of the previous cycle was induced. *items of sub-schedules are not relevant - when addressing a sub-schedule as predecessor, then only its entry will be used *this behaviour can be concretized via 'ReschedulingByEstimate'
   */
  public reschedulingOffsetFixpoint: number = 0;
  
  /**
   * estimated scheduling time relative to the ReschedulingBase
   */
  public reschedulingOffset: number = 0;
  
  /**
   * 'h'=Hours / 'm'=Minutes / 's'=Seconds
   */
  public reschedulingOffsetUnit: string = '';
  
  /**
   * number of cycles (of null for a infinite number of cycles) *this field is optional
   */
  public cycleLimit?: number;
  
  public sharedSkipCounters: boolean = false;
  
  public sharedLostCounters: boolean = false;
  
  /**
   * If set to true, the offset calculation will be based on the ESTIMATED completion of the predecessor (see 'Fixpoint'). Otherwise, when set to false, the offset calculation will be based on the REAL completion (if recorded execution data is available during calculation) of the predecessor. *this will not evaluated, when the 'Fixpoint' is set to 0!
   */
  public reschedulingByEstimate: boolean = false;
  
  /**
   * -1: automatic, based on the usage of task numbers within the schedule
   */
  public increaseTaskNumberBasePerCycle: number = 0;
  
}

export class StudyEvent {
  
  /**
   * *this field has a max length of 50
   */
  public studyEventName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * *this field is optional
   */
  public maxOccourrencesBeforeExclusion?: number;
  
  public allowManualTrigger: boolean = false;
  
  public description: string = '';
  
  /**
   * *this field is optional (use null as value)
   */
  public evenSpecificDocumentationUrl?: string;
  
}

export class SubStudy {
  
  /**
   * *this field has a max length of 50
   */
  public subStudyName: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
}

export class ProcedureSchedule {
  
  public procedureScheduleId: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!
   */
  public scheduleWorkflowName: string = '';
  
  public maxSkipsBeforeLost: string = '';
  
  public maxSubsequentSkipsBeforeLost: string = '';
  
  public maxLostsBeforeLtfuAbort: string = '';
  
  public maxSubsequentLostsBeforeLtfuAbort: string = '';
  
  public eventOnLtfuAbort: string = '';
  
  public eventOnCycleEnded: string = '';
  
  public eventOnAllCyclesEnded: string = '';
  
  public inducingEvents: string = '';
  
  public abortCausingEvents: string = '';
  
  public inducedProcedures?: InducedProcedure[];
  
  public inducedSubProcedureSchedules?: InducedSubProcedureSchedule[];
  
  public cycleDefinition?: ProcedureCycleDefinition;
  
}

export class TaskSchedule {
  
  public taskScheduleId: string = '';
  
  /**
   * *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  /**
   * Name of the Workflow which is represented by this schedule - INVARIANT! because it is used to generate Identifers for induced executions!
   */
  public scheduleWorkflowName: string = '';
  
  public maxSkipsBeforeLost: string = '';
  
  public maxSubsequentSkipsBeforeLost: string = '';
  
  public maxLostsBeforeLtfuAbort: string = '';
  
  public maxSubsequentLostsBeforeLtfuAbort: string = '';
  
  public eventOnLtfuAbort: string = '';
  
  public eventOnCycleEnded: string = '';
  
  public eventOnAllCyclesEnded: string = '';
  
  public inducingEvents: string = '';
  
  public abortCausingEvents: string = '';
  
  public inducedDataRecordingTasks?: InducedDataRecordingTask[];
  
  public inducedDrugApplymentTasks?: InducedDrugApplymentTask[];
  
  public inducedSubTaskSchedules?: InducedSubTaskSchedule[];
  
  public inducedTreatmentTasks?: InducedTreatmentTask[];
  
  public cycleDefinition?: TaskCycleDefinition;
  
}

export class ResearchStudyDefinition {
  
  /**
   * the official invariant name of the study as given by the sponsor *this field has a max length of 100
   */
  public studyWorkflowName: string = '';
  
  /**
   * This value follows the rules of 'Semantic Versioning' (https://semver.org) and needs to be updated exactly and only on transition to DraftState.Released! If the previously DraftState was 'DraftNewFix', then the 3. number must be increased at this time! If the previously DraftState was 'DraftNewMinor', then the 2. number must be increased, and the 3. number must be set to 0 at this time! If the previously DraftState was 'DraftNewMajor', then the 1. number must be increased, and the 2.+3. number must be set to 0 at this time! *this field has a max length of 20
   */
  public studyWorkflowVersion: string = '';
  
  public officialLabel: string = '';
  
  public definitionOwner: string = '';
  
  public documentationUrl: string = '';
  
  /**
   * Logo in base64 *this field is optional (use null as value)
   */
  public logoImage?: string;
  
  public description: string = '';
  
  /**
   * IT MUST NOT be updated on every change during Draft! Format: the Author, which is starting the new Draft (Alphanumeric, in PascalCase without blanks or other Symbols) + the current UTC-Time when setting the value (in ISO8601 format) separated by a Pipe "|" Sample: "MaxMustermann|2020-06-15T13:45:30.0000000Z".
   */
  public versionIdentity: string = '';
  
  public lastChangeUtc: Date = new Date();
  
  /**
   * 0=Released / 1=DraftNewFix / 2=DraftNewMinor / 3=DraftNewMajor
   */
  public draftState: number = 0;
  
  /**
   * *this field is optional (use null as value)
   */
  public billingCurrency?: string;
  
  /**
   * *this field is optional
   */
  public billablePriceForGeneralPreparation?: number;
  
  /**
   * *this field is optional (use null as value)
   */
  public studyDocumentationUrl?: string;
  
  /**
   * *this field is optional (use null as value)
   */
  public caseReportFormUrl?: string;
  
  public arms?: Arm[];
  
  public dataRecordingTasks?: DataRecordingTaskDefinition[];
  
  public drugApplymentTasks?: DrugApplymentTaskDefinition[];
  
  public procedureDefinitions?: ProcedureDefinition[];
  
  public procedureSchedules?: ProcedureSchedule[];
  
  public treatmentTasks?: TreatmentTaskDefinition[];
  
  public taskSchedules?: TaskSchedule[];
  
  public events?: StudyEvent[];
  
  public subStudies?: SubStudy[];
  
}
