/* based on ORSCF BillingData Contract v1.6.0.0 */

import MedicalResearch.BillingData.Model;

namespace MedicalResearch.BillingData.StoreAccess {
  
  public interface IBillableTasks {
    
    /**
     * Loads a specific BillableTask addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetBillableTaskByTaskGuid(taskGuid : string) : GetBillableTaskByTaskGuidResponse;
    
    /**
     * Loads BillableTasks.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of BillableTasks which should be returned
     */
    GetBillableTasks(page : number, pageSize : number) : GetBillableTasksResponse;
    
    /**
     * Loads BillableTasks where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of BillableTasks which should be returned
     */
    SearchBillableTasks(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchBillableTasksResponse;
    
    /**
     * Adds a new BillableTask and returns its primary identifier (or null on failure).
     *
     * @param billableTask BillableTask containing the new values
     */
    AddNewBillableTask(billableTask : BillableTask) : AddNewBillableTaskResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given BillableTask addressed by the primary identifier fields within the given BillableTask. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param billableTask BillableTask containing the new values (the primary identifier fields within the given BillableTask will be used to address the target record)
     */
    UpdateBillableTask(billableTask : BillableTask) : UpdateBillableTaskResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given BillableTask addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     * @param billableTask BillableTask containing the new values (the primary identifier fields within the given BillableTask will be ignored)
     */
    UpdateBillableTaskByTaskGuid(taskGuid : string, billableTask : BillableTask) : UpdateBillableTaskByTaskGuidResponse;
    
    /**
     * Deletes a specific BillableTask addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param taskGuid a global unique id of a concrete study-task execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteBillableTaskByTaskGuid(taskGuid : string) : DeleteBillableTaskByTaskGuidResponse;
    
  }
  
  public interface IBillableVisits {
    
    /**
     * Loads a specific BillableVisit addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param visitGuid a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetBillableVisitByVisitGuid(visitGuid : string) : GetBillableVisitByVisitGuidResponse;
    
    /**
     * Loads BillableVisits.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of BillableVisits which should be returned
     */
    GetBillableVisits(page : number, pageSize : number) : GetBillableVisitsResponse;
    
    /**
     * Loads BillableVisits where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of BillableVisits which should be returned
     */
    SearchBillableVisits(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchBillableVisitsResponse;
    
    /**
     * Adds a new BillableVisit and returns its primary identifier (or null on failure).
     *
     * @param billableVisit BillableVisit containing the new values
     */
    AddNewBillableVisit(billableVisit : BillableVisit) : AddNewBillableVisitResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given BillableVisit addressed by the primary identifier fields within the given BillableVisit. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param billableVisit BillableVisit containing the new values (the primary identifier fields within the given BillableVisit will be used to address the target record)
     */
    UpdateBillableVisit(billableVisit : BillableVisit) : UpdateBillableVisitResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given BillableVisit addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param visitGuid a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     * @param billableVisit BillableVisit containing the new values (the primary identifier fields within the given BillableVisit will be ignored)
     */
    UpdateBillableVisitByVisitGuid(visitGuid : string, billableVisit : BillableVisit) : UpdateBillableVisitByVisitGuidResponse;
    
    /**
     * Deletes a specific BillableVisit addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param visitGuid a global unique id of a concrete study-visit execution which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteBillableVisitByVisitGuid(visitGuid : string) : DeleteBillableVisitByVisitGuidResponse;
    
  }
  
  public interface IStudyExecutionScopes {
    
    /**
     * Loads a specific StudyExecutionScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param studyExecutionIdentifier a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    GetStudyExecutionScopeByStudyExecutionIdentifier(studyExecutionIdentifier : string) : GetStudyExecutionScopeByStudyExecutionIdentifierResponse;
    
    /**
     * Loads StudyExecutionScopes.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyExecutionScopes which should be returned
     */
    GetStudyExecutionScopes(page : number, pageSize : number) : GetStudyExecutionScopesResponse;
    
    /**
     * Loads StudyExecutionScopes where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyExecutionScopes which should be returned
     */
    SearchStudyExecutionScopes(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchStudyExecutionScopesResponse;
    
    /**
     * Adds a new StudyExecutionScope and returns its primary identifier (or null on failure).
     *
     * @param studyExecutionScope StudyExecutionScope containing the new values
     */
    AddNewStudyExecutionScope(studyExecutionScope : StudyExecutionScope) : AddNewStudyExecutionScopeResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the primary identifier fields within the given StudyExecutionScope. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyExecutionScope StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be used to address the target record)
     */
    UpdateStudyExecutionScope(studyExecutionScope : StudyExecutionScope) : UpdateStudyExecutionScopeResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyExecutionScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyExecutionIdentifier a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     * @param studyExecutionScope StudyExecutionScope containing the new values (the primary identifier fields within the given StudyExecutionScope will be ignored)
     */
    UpdateStudyExecutionScopeByStudyExecutionIdentifier(studyExecutionIdentifier : string, studyExecutionScope : StudyExecutionScope) : UpdateStudyExecutionScopeByStudyExecutionIdentifierResponse;
    
    /**
     * Deletes a specific StudyExecutionScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyExecutionIdentifier a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    DeleteStudyExecutionScopeByStudyExecutionIdentifier(studyExecutionIdentifier : string) : DeleteStudyExecutionScopeByStudyExecutionIdentifierResponse;
    
  }
  
  public interface IBillingDemands {
    
    /**
     * Loads a specific BillingDemand addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param id Represents the primary identity of a BillingDemand
     */
    GetBillingDemandById(id : string) : GetBillingDemandByIdResponse;
    
    /**
     * Loads BillingDemands.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of BillingDemands which should be returned
     */
    GetBillingDemands(page : number, pageSize : number) : GetBillingDemandsResponse;
    
    /**
     * Loads BillingDemands where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of BillingDemands which should be returned
     */
    SearchBillingDemands(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchBillingDemandsResponse;
    
    /**
     * Adds a new BillingDemand and returns its primary identifier (or null on failure).
     *
     * @param billingDemand BillingDemand containing the new values
     */
    AddNewBillingDemand(billingDemand : BillingDemand) : AddNewBillingDemandResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given BillingDemand addressed by the primary identifier fields within the given BillingDemand. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param billingDemand BillingDemand containing the new values (the primary identifier fields within the given BillingDemand will be used to address the target record)
     */
    UpdateBillingDemand(billingDemand : BillingDemand) : UpdateBillingDemandResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given BillingDemand addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param id Represents the primary identity of a BillingDemand
     * @param billingDemand BillingDemand containing the new values (the primary identifier fields within the given BillingDemand will be ignored)
     */
    UpdateBillingDemandById(id : string, billingDemand : BillingDemand) : UpdateBillingDemandByIdResponse;
    
    /**
     * Deletes a specific BillingDemand addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param id Represents the primary identity of a BillingDemand
     */
    DeleteBillingDemandById(id : string) : DeleteBillingDemandByIdResponse;
    
  }
  
  public interface IInvoices {
    
    /**
     * Loads a specific Invoice addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param id Represents the primary identity of a Invoice
     */
    GetInvoiceById(id : string) : GetInvoiceByIdResponse;
    
    /**
     * Loads Invoices.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Invoices which should be returned
     */
    GetInvoices(page : number, pageSize : number) : GetInvoicesResponse;
    
    /**
     * Loads Invoices where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Invoices which should be returned
     */
    SearchInvoices(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchInvoicesResponse;
    
    /**
     * Adds a new Invoice and returns its primary identifier (or null on failure).
     *
     * @param invoice Invoice containing the new values
     */
    AddNewInvoice(invoice : Invoice) : AddNewInvoiceResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Invoice addressed by the primary identifier fields within the given Invoice. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param invoice Invoice containing the new values (the primary identifier fields within the given Invoice will be used to address the target record)
     */
    UpdateInvoice(invoice : Invoice) : UpdateInvoiceResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Invoice addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param id Represents the primary identity of a Invoice
     * @param invoice Invoice containing the new values (the primary identifier fields within the given Invoice will be ignored)
     */
    UpdateInvoiceById(id : string, invoice : Invoice) : UpdateInvoiceByIdResponse;
    
    /**
     * Deletes a specific Invoice addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param id Represents the primary identity of a Invoice
     */
    DeleteInvoiceById(id : string) : DeleteInvoiceByIdResponse;
    
  }
  
}
