
export interface InducedProcedure { 
  Id: string;
  ProcedureScheduleId: string;
  SchedulingOffset: number;
  SchedulingOffsetUnit: string;
  SchedulingVariabilityBefore: number;
  SchedulingVariabilityAfter: number;
  SchedulingVariabilityUnit: string;
  ProdecureDefinitionName: string;
  UniqueExecutionName: string;
  Skipable: boolean;
  EventOnSkip: string;
  EventOnLost: string;
  Position: number;
  SchedulingOffsetFixpoint: number;
  SchedulingByEstimate: boolean;
  DedicatedToSubstudy: string;
  VisitNumber: number;

// Navigation Properties
}