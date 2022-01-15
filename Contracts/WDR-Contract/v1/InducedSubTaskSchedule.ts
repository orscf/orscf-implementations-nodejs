
export interface InducedSubTaskSchedule { 
  Id: string;
  ParentTaskScheduleId: string;
  InducedTaskScheduleId: string;
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