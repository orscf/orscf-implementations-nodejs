import {Arm} from "./Arm";
import {InducedProcedure} from "./InducedProcedure";
import {InducedSubProcedureSchedule} from "./InducedSubProcedureSchedule";
import {ProcedureCycleDefinition} from "./ProcedureCycleDefinition";

export interface ProcedureSchedule { 
  ProcedureScheduleId: string;
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
  EntryArms: Arm[]
  InducedProcedures: InducedProcedure[]
  InducedSubProcedureSchedules: InducedSubProcedureSchedule[]
  InducingSubProcedureSchedules: InducedSubProcedureSchedule[]
  CycleDefinition: ProcedureCycleDefinition
}