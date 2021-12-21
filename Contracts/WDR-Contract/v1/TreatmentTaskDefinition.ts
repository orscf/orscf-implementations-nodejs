import {InducedTreatmentTask} from "./InducedTreatmentTask";

export interface TreatmentTaskDefinition { 
  TaskDefinitionName: string;
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  BillablePriceOnCompletedExecution: number;
  ShortDescription: string;
  TaskSpecificDocumentationUrl: string;
  TreatmentDescription: string;
  ImportantNotices: string;

// Navigation Properties
  Inducements: InducedTreatmentTask[]
}