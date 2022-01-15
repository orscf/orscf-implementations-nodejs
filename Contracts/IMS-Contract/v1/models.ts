/* based on ORSCF IdentityManagement Contract v1.7.0.0 */

import MedicalResearch.IdentityManagement.Model;
import MedicalResearch.IdentityManagement.StoreAccess;

namespace MedicalResearch.IdentityManagement.StoreAccess {
  
  export class AdditionalSubjectParticipationIdentifier {
    
    /**
     * *this field has a max length of 50
     */
    public participantIdentifier : string;
    
    /**
     * *this field has a max length of 30
     */
    public identifierName : string;
    
    public identifierValue : string;
    
    public researchStudyUid : string;
    
  }
  
  /**
   * Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
   */
  export class AdditionalSubjectParticipationIdentifierIdentity {
    
  }
  
  export class StudyExecutionScope {
    
    /**
     * a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')
     */
    public studyExecutionIdentifier : string;
    
    /**
     * the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)
     */
    public siteUid : string;
    
    public researchStudyUid : string;
    
  }
  
  export class StudyScope {
    
    /**
     * the official invariant name of the study as given by the sponsor
     */
    public researchStudyUid : string;
    
    /**
     * for example "Screening-Number" or "Randomization-Number"
     */
    public participantIdentifierSemantic : string;
    
    /**
     * *this field has a max length of 100
     */
    public studyWorkflowName : string;
    
    /**
     * *this field has a max length of 20
     */
    public studyWorkflowVersion : string;
    
  }
  
  export class SubjectAddress {
    
    public internalRecordId : string;
    
    public street : string;
    
    public houseNumber : string;
    
    public postCode : string;
    
    public city : string;
    
    public state : string;
    
    public country : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public phoneNumber : string;
    
  }
  
  export class SubjectIdentity {
    
    public recordId : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public firstName : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public lastName : string;
    
    /**
     * 0=Male / 1=Female / 2=Other *this field is optional
     */
    public gender : number;
    
    /**
     * *this field is optional
     */
    public dateOfBirth : date;
    
    /**
     * *this field is optional
     */
    public dateOfDeath : date;
    
    /**
     * can be used to specify the full salutation including all academic grades by a string containing the placeholders: "{G}"=Gender {F}="FirstName" {L}="LastName". If not specified, a generic fallback can be used *this field is optional (use null as value)
     */
    public fullNamePattern : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public language : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public notes : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public email : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public mobileNumber : string;
    
    /**
     * *this field is optional
     */
    public residentAddressId : string;
    
  }
  
  export class SubjectParticipation {
    
    /**
     * pseudonym of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50
     */
    public participantIdentifier : string;
    
    public researchStudyUid : string;
    
    public creationDateUtc : date;
    
    public createdForStudyExecutionIdentifier : string;
    
    /**
     * *this field is optional
     */
    public subjectIdentityRecordId : string;
    
  }
  
  /**
   * Composite Key, which represents the primary identity of a SubjectParticipation
   */
  export class SubjectParticipationIdentity {
    
  }
  
}
