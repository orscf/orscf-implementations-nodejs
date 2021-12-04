/* based on ORSCF SubjectData Contract v0.1.0.0 */

import MedicalResearch.SubjectData.Model;

namespace MedicalResearch.SubjectData.StoreAccess {
  
  /**
   * Contains arguments for calling 'GetSubjectBySubjectUid'.
   * Method: Loads a specific Subject addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetSubjectBySubjectUidRequest {
    
    // Required Argument for 'GetSubjectBySubjectUid' (string): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    [Required]
    public subjectUid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetSubjectBySubjectUid'.
   * Method: Loads a specific Subject addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetSubjectBySubjectUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetSubjectBySubjectUid' (Subject): entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>
    public @return : Subject { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjects'.
   * Method: Loads Subjects.
   */
  public class GetSubjectsRequest {
    
    // Optional Argument for 'GetSubjects' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetSubjects' (number?): Max count of Subjects which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetSubjects'.
   * Method: Loads Subjects.
   */
  public class GetSubjectsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetSubjects' (Subject[]): entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>
    public @return : Subject[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchSubjects'.
   * Method: Loads Subjects where values matching to the given filterExpression
   */
  public class SearchSubjectsRequest {
    
    // Required Argument for 'SearchSubjects' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchSubjects' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchSubjects' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchSubjects' (number?): Max count of Subjects which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchSubjects'.
   * Method: Loads Subjects where values matching to the given filterExpression
   */
  public class SearchSubjectsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchSubjects' (Subject[]): entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>
    public @return : Subject[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewSubject'.
   * Method: Adds a new Subject and returns its primary identifier (or null on failure).
   */
  public class AddNewSubjectRequest {
    
    // Required Argument for 'AddNewSubject' (Subject): Subject containing the new values
    [Required]
    public subject : Subject { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewSubject'.
   * Method: Adds a new Subject and returns its primary identifier (or null on failure).
   */
  public class AddNewSubjectResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewSubject' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubject'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Subject addressed by the primary identifier fields within the given Subject. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectRequest {
    
    // Required Argument for 'UpdateSubject' (Subject): Subject containing the new values (the primary identifier fields within the given Subject will be used to address the target record)
    [Required]
    public subject : Subject { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateSubject'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Subject addressed by the primary identifier fields within the given Subject. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateSubject' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectBySubjectUid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Subject addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectBySubjectUidRequest {
    
    // Required Argument for 'UpdateSubjectBySubjectUid' (string): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    [Required]
    public subjectUid : string { get; set; }
    
    // Required Argument for 'UpdateSubjectBySubjectUid' (Subject): Subject containing the new values (the primary identifier fields within the given Subject will be ignored)
    [Required]
    public subject : Subject { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectBySubjectUid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given Subject addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectBySubjectUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateSubjectBySubjectUid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteSubjectBySubjectUid'.
   * Method: Deletes a specific Subject addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteSubjectBySubjectUidRequest {
    
    // Required Argument for 'DeleteSubjectBySubjectUid' (string): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    [Required]
    public subjectUid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteSubjectBySubjectUid'.
   * Method: Deletes a specific Subject addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteSubjectBySubjectUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteSubjectBySubjectUid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectSiteAssignmentBySubjectSiteAssignmentUid'.
   * Method: Loads a specific SubjectSiteAssignment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetSubjectSiteAssignmentBySubjectSiteAssignmentUidRequest {
    
    // Required Argument for 'GetSubjectSiteAssignmentBySubjectSiteAssignmentUid' (string): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    [Required]
    public subjectSiteAssignmentUid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'GetSubjectSiteAssignmentBySubjectSiteAssignmentUid'.
   * Method: Loads a specific SubjectSiteAssignment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
   */
  public class GetSubjectSiteAssignmentBySubjectSiteAssignmentUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetSubjectSiteAssignmentBySubjectSiteAssignmentUid' (SubjectSiteAssignment)
    public @return : SubjectSiteAssignment { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'GetSubjectSiteAssignments'.
   * Method: Loads SubjectSiteAssignments.
   */
  public class GetSubjectSiteAssignmentsRequest {
    
    // Optional Argument for 'GetSubjectSiteAssignments' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'GetSubjectSiteAssignments' (number?): Max count of SubjectSiteAssignments which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'GetSubjectSiteAssignments'.
   * Method: Loads SubjectSiteAssignments.
   */
  public class GetSubjectSiteAssignmentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'GetSubjectSiteAssignments' (SubjectSiteAssignment[])
    public @return : SubjectSiteAssignment[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'SearchSubjectSiteAssignments'.
   * Method: Loads SubjectSiteAssignments where values matching to the given filterExpression
   */
  public class SearchSubjectSiteAssignmentsRequest {
    
    // Required Argument for 'SearchSubjectSiteAssignments' (string): a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
    [Required]
    public filterExpression : string { get; set; }
    
    // Optional Argument for 'SearchSubjectSiteAssignments' (string): one or more property names which are used as sort order (before pagination)
    public sortingExpression : string { get; set; }
    
    // Optional Argument for 'SearchSubjectSiteAssignments' (number?): Number of the page, which should be returned
    public page : number? { get; set; } = null;
    
    // Optional Argument for 'SearchSubjectSiteAssignments' (number?): Max count of SubjectSiteAssignments which should be returned
    public pageSize : number? { get; set; } = null;
    
  }
  
  /**
   * Contains results from calling 'SearchSubjectSiteAssignments'.
   * Method: Loads SubjectSiteAssignments where values matching to the given filterExpression
   */
  public class SearchSubjectSiteAssignmentsResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'SearchSubjectSiteAssignments' (SubjectSiteAssignment[])
    public @return : SubjectSiteAssignment[] { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'AddNewSubjectSiteAssignment'.
   * Method: Adds a new SubjectSiteAssignment and returns its primary identifier (or null on failure).
   */
  public class AddNewSubjectSiteAssignmentRequest {
    
    // Required Argument for 'AddNewSubjectSiteAssignment' (SubjectSiteAssignment): SubjectSiteAssignment containing the new values
    [Required]
    public subjectSiteAssignment : SubjectSiteAssignment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'AddNewSubjectSiteAssignment'.
   * Method: Adds a new SubjectSiteAssignment and returns its primary identifier (or null on failure).
   */
  public class AddNewSubjectSiteAssignmentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'AddNewSubjectSiteAssignment' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectSiteAssignment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectSiteAssignment addressed by the primary identifier fields within the given SubjectSiteAssignment. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectSiteAssignmentRequest {
    
    // Required Argument for 'UpdateSubjectSiteAssignment' (SubjectSiteAssignment): SubjectSiteAssignment containing the new values (the primary identifier fields within the given SubjectSiteAssignment will be used to address the target record)
    [Required]
    public subjectSiteAssignment : SubjectSiteAssignment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectSiteAssignment'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectSiteAssignment addressed by the primary identifier fields within the given SubjectSiteAssignment. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectSiteAssignmentResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateSubjectSiteAssignment' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectSiteAssignment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUidRequest {
    
    // Required Argument for 'UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUid' (string): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    [Required]
    public subjectSiteAssignmentUid : string { get; set; }
    
    // Required Argument for 'UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUid' (SubjectSiteAssignment): SubjectSiteAssignment containing the new values (the primary identifier fields within the given SubjectSiteAssignment will be ignored)
    [Required]
    public subjectSiteAssignment : SubjectSiteAssignment { get; set; }
    
  }
  
  /**
   * Contains results from calling 'UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUid'.
   * Method: Updates all values (which are not "FixedAfterCreation") of the given SubjectSiteAssignment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'UpdateSubjectSiteAssignmentBySubjectSiteAssignmentUid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
  /**
   * Contains arguments for calling 'DeleteSubjectSiteAssignmentBySubjectSiteAssignmentUid'.
   * Method: Deletes a specific SubjectSiteAssignment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteSubjectSiteAssignmentBySubjectSiteAssignmentUidRequest {
    
    // Required Argument for 'DeleteSubjectSiteAssignmentBySubjectSiteAssignmentUid' (string): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
    [Required]
    public subjectSiteAssignmentUid : string { get; set; }
    
  }
  
  /**
   * Contains results from calling 'DeleteSubjectSiteAssignmentBySubjectSiteAssignmentUid'.
   * Method: Deletes a specific SubjectSiteAssignment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
   */
  public class DeleteSubjectSiteAssignmentBySubjectSiteAssignmentUidResponse {
    
    // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
    public fault : string { get; set; } = null;
    
    // Return-Value of 'DeleteSubjectSiteAssignmentBySubjectSiteAssignmentUid' (Boolean)
    public @return : bool { get; set; }
    
  }
  
}