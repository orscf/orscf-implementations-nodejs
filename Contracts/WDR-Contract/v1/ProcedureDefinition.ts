import {InducedProcedure} from "./InducedProcedure";

export interface ProcedureDefinition { 
  ProdecureDefinitionName: string;
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  RootTaskScheduleId: string;
  BillablePriceOnAbortedExecution: number;
  BillablePriceOnCompletedExecution: number;
  VisitSpecificDocumentationUrl: string;

// Navigation Properties
  Inducements: InducedProcedure[]
}