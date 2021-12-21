import {Arm} from "./Arm";
import {DataRecordingTaskDefinition} from "./DataRecordingTaskDefinition";
import {DrugApplymentTaskDefinition} from "./DrugApplymentTaskDefinition";
import {ProcedureDefinition} from "./ProcedureDefinition";
import {ProcedureSchedule} from "./ProcedureSchedule";
import {TreatmentTaskDefinition} from "./TreatmentTaskDefinition";
import {TaskSchedule} from "./TaskSchedule";
import {StudyEvent} from "./StudyEvent";
import {SubStudy} from "./SubStudy";

export interface ResearchStudyDefinition { 
  StudyWorkflowName: string;
  StudyWorkflowVersion: string;
  OfficialLabel: string;
  DefinitionOwner: string;
  DocumentationUrl: string;
  LogoImage: string;
  Description: string;
  VersionIdentity: string;
  LastChangeUtc: Date;
  DraftState: number;
  BillingCurrency: string;
  BillablePriceForGeneralPreparation: number;
  StudyDocumentationUrl: string;
  CaseReportFormUrl: string;

// Navigation Properties
  Arms: Arm[]
  DataRecordingTasks: DataRecordingTaskDefinition[]
  DrugApplymentTasks: DrugApplymentTaskDefinition[]
  ProcedureDefinitions: ProcedureDefinition[]
  ProcedureSchedules: ProcedureSchedule[]
  TreatmentTasks: TreatmentTaskDefinition[]
  TaskSchedules: TaskSchedule[]
  Events: StudyEvent[]
  SubStudies: SubStudy[]
}