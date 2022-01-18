/* based on ORSCF BillingData Contract v1.7.0.0 */


export class BillableTask {
  
  /**
   * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public taskGuid : string;
  
  /**
   * a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public visitGuid : string;
  
  /**
   * unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public taskName : string;
  
  /**
   * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public taskExecutionTitle : string;
  
}

export class BillableVisit {
  
  /**
   * a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
   */
  public visitGuid : string;
  
  /**
   * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
   */
  public studyExecutionIdentifier : string;
  
  /**
   * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50
   */
  public participantIdentifier : string;
  
  /**
   * unique invariant name of the visit-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public visitProdecureName : string;
  
  /**
   * title of the visit execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
   */
  public visitExecutionTitle : string;
  
  /**
   * *this field is optional
   */
  public billingDemandId : string;
  
  /**
   * *this field is optional
   */
  public invoiceId : string;
  
  /**
   * *this field is optional
   */
  public executionEndDateUtc : Date;
  
  /**
   * indicates, that the visit is ready to get assigned to a 'BillingDemand' (usually this state is managed by the sponsor) This can only be set after there is a valid 'ExecutionEndDateUtc' *this field is optional
   */
  public sponsorValidationDateUtc : Date;
  
  /**
   * indicates, that the visit is ready to get assigned to a 'Invoice' (usually this state is managed by the executor) This can only be set after either the 'SponsorValidationDateUtc' is set (and there is a Demand) nor the states are only managed by the executor, so that the demand-part is completely skipped. *this field is optional
   */
  public executorValidationDateUtc : Date;
  
}

/**
 * created by the sponsor
 */
export class BillingDemand {
  
  public id : string;
  
  public officialNumber : string;
  
  public studyExecutionIdentifier : string;
  
  /**
   * *this field is optional
   */
  public transmissionDateUtc : Date;
  
  public creationDateUtc : Date;
  
  public createdByPerson : string;
  
}

/**
 * created by the executor-company
 */
export class Invoice {
  
  public id : string;
  
  /**
   * the invoice number
   */
  public officialNumber : string;
  
  public studyExecutionIdentifier : string;
  
  public offcialInvoiceDate : Date;
  
  /**
   * *this field is optional
   */
  public transmissionDateUtc : Date;
  
  public creationDateUtc : Date;
  
  public createdByPerson : string;
  
  /**
   * *this field is optional
   */
  public paymentSubmittedDateUtc : Date;
  
  /**
   * *this field is optional
   */
  public paymentReceivedDateUtc : Date;
  
}

export class StudyExecutionScope {
  
  /**
   * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
   */
  public studyExecutionIdentifier : string;
  
  /**
   * the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)
   */
  public executingInstituteIdentifier : string;
  
  /**
   * the official invariant name of the study as given by the sponsor *this field has a max length of 100
   */
  public studyWorkflowName : string;
  
  /**
   * version of the workflow *this field has a max length of 20
   */
  public studyWorkflowVersion : string;
  
  /**
   * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
   */
  public extendedMetaData : string;
  
}
