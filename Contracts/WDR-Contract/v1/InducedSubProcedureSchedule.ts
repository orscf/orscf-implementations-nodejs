
export interface InducedSubProcedureSchedule { 
  Id: string;
  ParentProcedureScheduleId: string;
  InducedProcedureScheduleId: string;
  SchedulingOffset: number;
  SchedulingOffsetUnit: string;
  SharedSkipCounters: boolean;
  SharedLostCounters: boolean;
  Position: number;
  SchedulingOffsetFixpoint: number;
  SchedulingByEstimate: boolean;
  DedicatedToSubstudy: string;
  IncreaseVisitNumberBase: number;
  InheritVisitNumberBase: boolean;

// Navigation Properties
}