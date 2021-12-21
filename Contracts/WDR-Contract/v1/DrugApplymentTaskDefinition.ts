import {InducedDrugApplymentTask} from "./InducedDrugApplymentTask";

export interface DrugApplymentTaskDefinition { 
  TaskDefinitionName: string;
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  BillablePriceOnCompletedExecution: number;
  ShortDescription: string;
  TaskSpecificDocumentationUrl: string;
  DrugName: string;
  DrugDoseMgPerUnitMg: number;
  UnitsToApply: number;
  ApplymentRoute: string;
  ImportantNotices: string;

// Navigation Properties
  Inducements: InducedDrugApplymentTask[]
}