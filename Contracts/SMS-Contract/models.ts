/* based on ORSCF StudyManagement Contract v1.6.0.0 */

import MedicalResearch.StudyManagement.Model;

namespace MedicalResearch.StudyManagement.StoreAccess {
  
  public class Institute {
    
    /*
    * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    */
    public instituteUid : string { get; set; }
    
    /*
    * An DisplayLabel which is dedicated for the usage within the frontend of study managent software. Note that this short name representation hat the caracter of an internal shortcurt and could be ambiguous. The usage for legal-relevant/official communication or documents is not recommended, as well as the usage for technical identification of this record. *this field has a max length of 100
    */
    public displayLabel : string { get; set; }
    
    public isArchived : bool { get; set; }
    
    public ownPatientSdrEndpointUid : string { get; set; }
    
  }
  
  public class InstituteRelatedSystemAssignemnt {
    
    public instituteRelatedSystemAssignemntUid : string { get; set; }
    
    public systemEndpointUid : string { get; set; }
    
    public instituteUid : string { get; set; }
    
    public useAsOwnPatientSdr : string { get; set; }
    
    public useAsCandidateSdr : string { get; set; }
    
    public useAsOwnWdr : string { get; set; }
    
    public useAsConsumingExternalWdr : string { get; set; }
    
  }
  
  public class InvolvedPerson {
    
    /*
    * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    */
    public involvedPersonUid : string { get; set; }
    
    /*
    * *this field is optional (use null as value)
    */
    public displayLabel : string { get; set; }
    
    /*
    * *this field is optional
    */
    public emailAddress : string? { get; set; }
    
    public isArchived : bool { get; set; }
    
  }
  
  public class InvolvementRole {
    
    /*
    * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    */
    public involvedPersonRoleUid : string { get; set; }
    
    public researchStudyUid : string { get; set; }
    
    /*
    * *this field is optional (use null as value)
    */
    public role : string { get; set; }
    
    /*
    * *this field is optional
    */
    public involvedFrom : date? { get; set; }
    
    /*
    * *this field is optional
    */
    public involvedUntil : date? { get; set; }
    
    /*
    * null indicated a site independent global role *this field is optional
    */
    public dedicatedToSiteUid : string? { get; set; }
    
    public involvedPersonUid : string { get; set; }
    
  }
  
  /*
  * entity, which relates to <see href="https://www.hl7.org/fhir/researchstudy.html">HL7.ResearchStudy</see>
  */
  public class ResearchStudy {
    
    /*
    * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    */
    public researchStudyUid : string { get; set; }
    
    /*
    * An DisplayLabel which is dedicated for the usage within the frontend of study managent software. Note that this short name representation hat the caracter of an internal shortcurt and could be ambiguous. The usage for legal-relevant/official communication or documents is not recommended, as well as the usage for technical identification of this record. *this field has a max length of 100
    */
    public displayLabel : string { get; set; }
    
    public initiatorInstituteUid : string { get; set; }
    
    public studyWorkflowName : string { get; set; }
    
    public studyWorkflowVersion : string { get; set; }
    
    /*
    * AS DECLARED BY <see href="https://www.hl7.org/fhir/valueset-research-study-phase.html">HL7.ResearchStudyPhase</see>: n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 *this field is optional (use null as value)
    */
    public phase : string { get; set; }
    
    /*
    * a estimated date in future is possible *this field is optional
    */
    public startDate : date? { get; set; }
    
    /*
    * a estimated date in future is possible *this field is optional
    */
    public terminationDate : date? { get; set; }
    
    /*
    * A title which informs about the sematic of the SubjectIdentifer (which concrete value is used): "Randomization-Number", "Screening-Number", ...
    */
    public subjectIdentifierTitle : string { get; set; }
    
    /*
    * AS DECLARED BY <see href="https://www.hl7.org/fhir/valueset-research-study-status.html">HL7.ResearchStudyStatus</see>: active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn
    */
    public status : string { get; set; }
    
    /*
    * *this field is optional (use null as value)
    */
    public terminatedReason : string { get; set; }
    
    public isArchived : bool { get; set; }
    
    /*
    * *this field is optional (use null as value)
    */
    public initiatorRelatedProjectNumber : string { get; set; }
    
    public originWdrEndpointUid : string { get; set; }
    
    public primaryImsEndpointUid : string { get; set; }
    
  }
  
  public class Site {
    
    /*
    * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    */
    public siteUid : string { get; set; }
    
    /*
    * <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the institute, which is representing this site
    */
    public representingInstituteUid : string { get; set; }
    
    /*
    * <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the related record
    */
    public researchStudyUid : string { get; set; }
    
    /*
    * a estimated date in future is possible *this field is optional
    */
    public enrollmentDate : date? { get; set; }
    
    /*
    * a estimated date in future is possible *this field is optional
    */
    public terminationDate : date? { get; set; }
    
    /*
    * *this field is optional (use null as value)
    */
    public terminatedReason : string { get; set; }
    
    /*
    * Offical 'SiteIdentifier' which is unique within the scope of the related study
    */
    public studyRelatedSiteIdentifer : string { get; set; }
    
    /*
    * An DisplayLabel which is dedicated for the usage within the frontend of study managent software. Note that this short name representation hat the caracter of an internal shortcurt and could be ambiguous. The usage for legal-relevant/official communication or documents is not recommended, as well as the usage for technical identification of this record.
    */
    public displayLabel : string { get; set; }
    
    /*
    * AS DECLARED BY HL7
    */
    public status : string { get; set; }
    
    /*
    * *this field is optional (use null as value)
    */
    public siteRelatedProjectNumber : string { get; set; }
    
  }
  
  public class SiteRelatedSystemAssignment {
    
    public siteRelatedSystemAssignmentUid : string { get; set; }
    
    public systemEndpointUid : string { get; set; }
    
    public siteUid : string { get; set; }
    
  }
  
  public class StudyRelatedSystemAssignment {
    
    public studyRelatedSystemAssignmentUid : string { get; set; }
    
    public researchStudyUid : string { get; set; }
    
    public systemEndpointUid : string { get; set; }
    
  }
  
  public class SystemConnection {
    
    public systemConnectionUid : string { get; set; }
    
    public ownerInstituteUid : string { get; set; }
    
    public hierSpäterJWTSEttings : string { get; set; }
    
    public targetSystemEndpointUid : string { get; set; }
    
    /*
    * *this field is optional
    */
    public dedicatedSiteRelatedSystemAssignmentUid : string? { get; set; }
    
  }
  
  public class SystemEndpoint {
    
    public systemEndpointUid : string { get; set; }
    
    public providerInstituteUid : string { get; set; }
    
    public availableRoles : string { get; set; }
    
    public url : string { get; set; }
    
    public approvedCert : string { get; set; }
    
    public isPublic : string { get; set; }
    
    public label : string { get; set; }
    
  }
  
}
