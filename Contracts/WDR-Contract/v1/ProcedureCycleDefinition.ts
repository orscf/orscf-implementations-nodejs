
export interface ProcedureCycleDefinition { 
  ProcedureScheduleId: string;
  ReschedulingOffsetFixpoint: number;
  ReschedulingOffset: number;
  ReschedulingOffsetUnit: string;
  CycleLimit: number;
  SharedSkipCounters: boolean;
  SharedLostCounters: boolean;
  ReschedulingByEstimate: boolean;
  IncreaseVisitNumberBasePerCycle: number;

// Navigation Properties
}