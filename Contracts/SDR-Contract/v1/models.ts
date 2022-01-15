/* based on ORSCF SubjectData Contract v1.7.0.0 */

import MedicalResearch.SubjectData.Model;

namespace MedicalResearch.SubjectData.StoreAccess {
  
  /**
   * entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>
   */
  export class Subject {
    
    /**
     * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    public subjectUid : string;
    
    public actualSiteIdentifier : string;
    
    public enrollingSiteIdentifier : string;
    
    /**
     * *this field is optional
     */
    public enrollmentDate : date;
    
    /**
     * *this field is optional
     */
    public terminationDate : date;
    
    /**
     * *this field is optional (use null as value)
     */
    public terminatedReason : string;
    
    /**
     * *this field is optional (use null as value)
     */
    public subjectIdentifier : string;
    
    /**
     * AS DECLARED BY <see href="https://www.hl7.org/fhir/valueset-research-subject-status.html">HL7.ResearchSubjectStatus</see>: candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
     */
    public status : string;
    
    public researchStudyUid : string;
    
  }
  
  export class SubjectSiteAssignment {
    
    /**
     * An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    public subjectSiteAssignmentUid : string;
    
    public validFrom : date;
    
    /**
     * <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the target Site
     */
    public siteUid : string;
    
    /**
     * <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the target Subject
     */
    public subjectUid : string;
    
    /**
     * This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient! *this field is optional (use null as value)
     */
    public siteRelatedPatientIdentifier : string;
    
    /**
     * *this field is optional
     */
    public byInvolvedPersonUid : string;
    
  }
  
}
