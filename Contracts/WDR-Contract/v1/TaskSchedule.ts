import {InducedDataRecordingTask} from "./InducedDataRecordingTask";
import {InducedDrugApplymentTask} from "./InducedDrugApplymentTask";
import {InducedSubTaskSchedule} from "./InducedSubTaskSchedule";
import {InducedTreatmentTask} from "./InducedTreatmentTask";
import {ProcedureDefinition} from "./ProcedureDefinition";
import {TaskCycleDefinition} from "./TaskCycleDefinition";

export interface TaskSchedule { 
  TaskScheduleId: string;
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  ScheduleWorkflowName: string;
  MaxSkipsBeforeLost: string;
  MaxSubsequentSkipsBeforeLost: string;
  MaxLostsBeforeLtfuAbort: string;
  MaxSubsequentLostsBeforeLtfuAbort: string;
  EventOnLtfuAbort: string;
  EventOnCycleEnded: string;
  EventOnAllCyclesEnded: string;
  InducingEvents: string;
  AbortCausingEvents: string;

// Navigation Properties
  InducedDataRecordingTasks: InducedDataRecordingTask[]
  InducedDrugApplymentTasks: InducedDrugApplymentTask[]
  InducedSubTaskSchedules: InducedSubTaskSchedule[]
  InducingTaskSchedules: InducedSubTaskSchedule[]
  InducedTreatmentTasks: InducedTreatmentTask[]
  EntryProdecureDefinitions: ProcedureDefinition[]
  CycleDefinition: TaskCycleDefinition
}