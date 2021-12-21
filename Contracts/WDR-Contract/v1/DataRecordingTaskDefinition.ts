import {InducedDataRecordingTask} from "./InducedDataRecordingTask";

export interface DataRecordingTaskDefinition { 
  TaskDefinitionName: string;
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  BillablePriceOnCompletedExecution: number;
  ShortDescription: string;
  TaskSpecificDocumentationUrl: string;
  ImportantNotices: string;
  DataSchemaUrl: string;
  DefaultData: string;

// Navigation Properties
  Inducements: InducedDataRecordingTask[]
}