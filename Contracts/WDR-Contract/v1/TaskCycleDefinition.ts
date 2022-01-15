
export interface TaskCycleDefinition { 
  TaskScheduleId: string;
  ReschedulingOffsetFixpoint: number;
  ReschedulingOffset: number;
  ReschedulingOffsetUnit: string;
  CycleLimit: number;
  SharedSkipCounters: boolean;
  SharedLostCounters: boolean;
  ReschedulingByEstimate: boolean;
  IncreaseTaskNumberBasePerCycle: number;

// Navigation Properties
}