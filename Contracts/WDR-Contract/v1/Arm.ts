
export interface Arm { 
  StudyArmName: string;
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  RootProcedureScheduleId: string;
  BillablePriceOnFailedInclusion: number;
  BillablePriceOnSuccessfullInclusion: number;
  BillablePriceOnAbortedParticipation: number;
  BillablePriceOnCompletedParticipation: number;
  ArmSpecificDocumentationUrl: string;
  InclusionCriteria: string;
  AllowedSubstudies: string;

// Navigation Properties
}