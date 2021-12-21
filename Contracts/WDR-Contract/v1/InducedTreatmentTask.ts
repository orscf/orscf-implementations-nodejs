
export interface InducedTreatmentTask { 
  Id: string;
  TaskScheduleId: string;
  TaskDefinitionName: string;
  SchedulingOffset: number;
  SchedulingOffsetUnit: string;
  SchedulingVariabilityBefore: string;
  SchedulingVariabilityAfter: string;
  SchedulingVariabilityUnit: string;
  UniqueExecutionName: string;
  Skipable: boolean;
  EventOnSkip: string;
  EventOnLost: string;
  Position: number;
  SchedulingOffsetFixpoint: number;
  SchedulingByEstimate: boolean;
  DedicatedToSubstudy: string;
  TaskNumber: number;

// Navigation Properties
}