/* based on ORSCF BillingData Contract v1.6.0.11538 */

import MedicalResearch.BillingData.Model;

namespace MedicalResearch.BillingData.StoreAccess {
  
  public class BillableTask {
    
    /**
     * a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public taskGuid : string { get; set; }
    
    /**
     * a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public visitGuid : string { get; set; }
    
    /**
     * unique invariant name of ths task-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public taskName : string { get; set; }
    
    /**
     * title of the task execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public taskExecutionTitle : string { get; set; }
    
  }
  
  public class BillableVisit {
    
    /**
     * a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    public visitGuid : string { get; set; }
    
    /**
     * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    public studyExecutionIdentifier : string { get; set; }
    
    /**
     * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50
     */
    public participantIdentifier : string { get; set; }
    
    /**
     * unique invariant name of the visit-procedure as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public visitProdecureName : string { get; set; }
    
    /**
     * title of the visit execution as defined in the 'StudyWorkflowDefinition' (originated from the sponsor)
     */
    public visitExecutionTitle : string { get; set; }
    
    /**
     * *this field is optional
     */
    public billingDemandId : string? { get; set; }
    
    /**
     * *this field is optional
     */
    public invoiceId : string? { get; set; }
    
    /**
     * *this field is optional
     */
    public executionEndDateUtc : date? { get; set; }
    
    /**
     * indicates, that the visit is ready to get assigned to a 'BillingDemand' (usually this state is managed by the sponsor) This can only be set after there is a valid 'ExecutionEndDateUtc' *this field is optional
     */
    public sponsorValidationDateUtc : date? { get; set; }
    
    /**
     * indicates, that the visit is ready to get assigned to a 'Invoice' (usually this state is managed by the executor) This can only be set after either the 'SponsorValidationDateUtc' is set (and there is a Demand) nor the states are only managed by the executor, so that the demand-part is completely skipped. *this field is optional
     */
    public executorValidationDateUtc : date? { get; set; }
    
  }
  
  /**
   * created by the sponsor
   */
  public class BillingDemand {
    
    public id : string { get; set; }
    
    public officialNumber : string { get; set; }
    
    public studyExecutionIdentifier : string { get; set; }
    
    /**
     * *this field is optional
     */
    public transmissionDateUtc : date? { get; set; }
    
    public creationDateUtc : date { get; set; }
    
    public createdByPerson : string { get; set; }
    
  }
  
  /**
   * created by the executor-company
   */
  public class Invoice {
    
    public id : string { get; set; }
    
    /**
     * the invoice number
     */
    public officialNumber : string { get; set; }
    
    public studyExecutionIdentifier : string { get; set; }
    
    public offcialInvoiceDate : date { get; set; }
    
    /**
     * *this field is optional
     */
    public transmissionDateUtc : date? { get; set; }
    
    public creationDateUtc : date { get; set; }
    
    public createdByPerson : string { get; set; }
    
    /**
     * *this field is optional
     */
    public paymentSubmittedDateUtc : date? { get; set; }
    
    /**
     * *this field is optional
     */
    public paymentReceivedDateUtc : date? { get; set; }
    
  }
  
  public class StudyExecutionScope {
    
    /**
     * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    public studyExecutionIdentifier : string { get; set; }
    
    /**
     * the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)
     */
    public executingInstituteIdentifier : string { get; set; }
    
    /**
     * the official invariant name of the study as given by the sponsor *this field has a max length of 100
     */
    public studyWorkflowName : string { get; set; }
    
    /**
     * version of the workflow *this field has a max length of 20
     */
    public studyWorkflowVersion : string { get; set; }
    
    /**
     * optional structure (in JSON-format) containing additional metadata regarding this record, which can be used by 'StudyExecutionSystems' to extend the schema *this field is optional (use null as value)
     */
    public extendedMetaData : string { get; set; }
    
  }
  
}
