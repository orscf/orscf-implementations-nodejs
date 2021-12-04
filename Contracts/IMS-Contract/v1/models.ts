/* based on ORSCF IdentityManagement Contract v1.6.0.0 */

import MedicalResearch.IdentityManagement.Model;
import MedicalResearch.IdentityManagement.StoreAccess;

namespace MedicalResearch.IdentityManagement.StoreAccess {
  
  public class AdditionalSubjectParticipationIdentifier {
    
    /**
     * *this field has a max length of 50
     */
    public participantIdentifier : string { get; set; }
    
    /**
     * *this field has a max length of 30
     */
    public identifierName : string { get; set; }
    
    public identifierValue : string { get; set; }
    
  }
  
  /**
   * Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
   */
  public class AdditionalSubjectParticipationIdentifierIdentity {
    
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
     * *this field has a max length of 100
     */
    public studyWorkflowName : string { get; set; }
    
    /**
     * *this field has a max length of 20
     */
    public studyWorkflowVersion : string { get; set; }
    
  }
  
  public class StudyScope {
    
    /**
     * the official invariant name of the study as given by the sponsor *this field has a max length of 100
     */
    public studyWorkflowName : string { get; set; }
    
    /**
     * version of the workflow *this field has a max length of 20
     */
    public studyWorkflowVersion : string { get; set; }
    
    /**
     * for example "Screening-Number" or "Randomization-Number"
     */
    public participantIdentifierSemantic : string { get; set; }
    
  }
  
  /**
   * Composite Key, which represents the primary identity of a StudyScope
   */
  public class StudyScopeIdentity {
    
  }
  
  public class SubjectAddress {
    
    public internalRecordId : string { get; set; }
    
    public street : string { get; set; }
    
    public houseNumber : string { get; set; }
    
    public postCode : string { get; set; }
    
    public city : string { get; set; }
    
    public state : string { get; set; }
    
    public country : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public phoneNumber : string { get; set; }
    
  }
  
  public class SubjectIdentity {
    
    public recordId : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public firstName : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public lastName : string { get; set; }
    
    /**
     * 0=Male / 1=Female / 2=Other *this field is optional
     */
    public gender : number? { get; set; }
    
    /**
     * *this field is optional
     */
    public dateOfBirth : date? { get; set; }
    
    /**
     * *this field is optional
     */
    public dateOfDeath : date? { get; set; }
    
    /**
     * can be used to specify the full salutation including all academic grades by a string containing the placeholders: "{G}"=Gender {F}="FirstName" {L}="LastName". If not specified, a generic fallback can be used *this field is optional (use null as value)
     */
    public fullNamePattern : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public language : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public notes : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public email : string { get; set; }
    
    /**
     * *this field is optional (use null as value)
     */
    public mobileNumber : string { get; set; }
    
    /**
     * *this field is optional
     */
    public residentAddressId : string? { get; set; }
    
  }
  
  public class SubjectParticipation {
    
    /**
     * identity of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50
     */
    public participantIdentifier : string { get; set; }
    
    /**
     * *this field has a max length of 100
     */
    public studyWorkflowName : string { get; set; }
    
    /**
     * *this field has a max length of 20
     */
    public studyWorkflowVersion : string { get; set; }
    
    public creationDateUtc : date { get; set; }
    
    public createdForStudyExecutionIdentifier : string { get; set; }
    
    /**
     * *this field is optional
     */
    public subjectIdentityRecordId : string? { get; set; }
    
  }
  
}
