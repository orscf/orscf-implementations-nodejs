/* based on ORSCF IdentityManagement Contract v1.6.0.11538 */

import MedicalResearch.IdentityManagement.Model;
import MedicalResearch.IdentityManagement.StoreAccess;

namespace MedicalResearch.IdentityManagement.StoreAccess {
  
  public interface IAdditionalSubjectParticipationIdentifiers {
    
    /**
     * Loads a specific AdditionalSubjectParticipationIdentifier addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param additionalSubjectParticipationIdentifierIdentity Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
     */
    GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity(additionalSubjectParticipationIdentifierIdentity : AdditionalSubjectParticipationIdentifierIdentity) : GetAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityResponse;
    
    /**
     * Loads AdditionalSubjectParticipationIdentifiers.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of AdditionalSubjectParticipationIdentifiers which should be returned
     */
    GetAdditionalSubjectParticipationIdentifiers(page : number, pageSize : number) : GetAdditionalSubjectParticipationIdentifiersResponse;
    
    /**
     * Loads AdditionalSubjectParticipationIdentifiers where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of AdditionalSubjectParticipationIdentifiers which should be returned
     */
    SearchAdditionalSubjectParticipationIdentifiers(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchAdditionalSubjectParticipationIdentifiersResponse;
    
    /**
     * Adds a new AdditionalSubjectParticipationIdentifier and returns its primary identifier (or null on failure).
     *
     * @param additionalSubjectParticipationIdentifier AdditionalSubjectParticipationIdentifier containing the new values
     */
    AddNewAdditionalSubjectParticipationIdentifier(additionalSubjectParticipationIdentifier : AdditionalSubjectParticipationIdentifier) : AddNewAdditionalSubjectParticipationIdentifierResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given AdditionalSubjectParticipationIdentifier addressed by the primary identifier fields within the given AdditionalSubjectParticipationIdentifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param additionalSubjectParticipationIdentifier AdditionalSubjectParticipationIdentifier containing the new values (the primary identifier fields within the given AdditionalSubjectParticipationIdentifier will be used to address the target record)
     */
    UpdateAdditionalSubjectParticipationIdentifier(additionalSubjectParticipationIdentifier : AdditionalSubjectParticipationIdentifier) : UpdateAdditionalSubjectParticipationIdentifierResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given AdditionalSubjectParticipationIdentifier addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param additionalSubjectParticipationIdentifierIdentity Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
     * @param additionalSubjectParticipationIdentifier AdditionalSubjectParticipationIdentifier containing the new values (the primary identifier fields within the given AdditionalSubjectParticipationIdentifier will be ignored)
     */
    UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity(additionalSubjectParticipationIdentifierIdentity : AdditionalSubjectParticipationIdentifierIdentity, additionalSubjectParticipationIdentifier : AdditionalSubjectParticipationIdentifier) : UpdateAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityResponse;
    
    /**
     * Deletes a specific AdditionalSubjectParticipationIdentifier addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param additionalSubjectParticipationIdentifierIdentity Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
     */
    DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentity(additionalSubjectParticipationIdentifierIdentity : AdditionalSubjectParticipationIdentifierIdentity) : DeleteAdditionalSubjectParticipationIdentifierByAdditionalSubjectParticipationIdentifierIdentityResponse;
    
  }
  
  public interface ISubjectParticipations {
    
    /**
     * Loads a specific SubjectParticipation addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param participantIdentifier identity of the patient which can be a randomization or screening number (the exact semantic is defined per study)
     */
    GetSubjectParticipationByParticipantIdentifier(participantIdentifier : string) : GetSubjectParticipationByParticipantIdentifierResponse;
    
    /**
     * Loads SubjectParticipations.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SubjectParticipations which should be returned
     */
    GetSubjectParticipations(page : number, pageSize : number) : GetSubjectParticipationsResponse;
    
    /**
     * Loads SubjectParticipations where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SubjectParticipations which should be returned
     */
    SearchSubjectParticipations(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSubjectParticipationsResponse;
    
    /**
     * Adds a new SubjectParticipation and returns its primary identifier (or null on failure).
     *
     * @param subjectParticipation SubjectParticipation containing the new values
     */
    AddNewSubjectParticipation(subjectParticipation : SubjectParticipation) : AddNewSubjectParticipationResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SubjectParticipation addressed by the primary identifier fields within the given SubjectParticipation. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param subjectParticipation SubjectParticipation containing the new values (the primary identifier fields within the given SubjectParticipation will be used to address the target record)
     */
    UpdateSubjectParticipation(subjectParticipation : SubjectParticipation) : UpdateSubjectParticipationResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SubjectParticipation addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param participantIdentifier identity of the patient which can be a randomization or screening number (the exact semantic is defined per study)
     * @param subjectParticipation SubjectParticipation containing the new values (the primary identifier fields within the given SubjectParticipation will be ignored)
     */
    UpdateSubjectParticipationByParticipantIdentifier(participantIdentifier : string, subjectParticipation : SubjectParticipation) : UpdateSubjectParticipationByParticipantIdentifierResponse;
    
    /**
     * Deletes a specific SubjectParticipation addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param participantIdentifier identity of the patient which can be a randomization or screening number (the exact semantic is defined per study)
     */
    DeleteSubjectParticipationByParticipantIdentifier(participantIdentifier : string) : DeleteSubjectParticipationByParticipantIdentifierResponse;
    
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
  
  public interface IStudyScopes {
    
    /**
     * Loads a specific StudyScope addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param studyScopeIdentity Composite Key, which represents the primary identity of a StudyScope
     */
    GetStudyScopeByStudyScopeIdentity(studyScopeIdentity : StudyScopeIdentity) : GetStudyScopeByStudyScopeIdentityResponse;
    
    /**
     * Loads StudyScopes.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyScopes which should be returned
     */
    GetStudyScopes(page : number, pageSize : number) : GetStudyScopesResponse;
    
    /**
     * Loads StudyScopes where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyScopes which should be returned
     */
    SearchStudyScopes(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchStudyScopesResponse;
    
    /**
     * Adds a new StudyScope and returns its primary identifier (or null on failure).
     *
     * @param studyScope StudyScope containing the new values
     */
    AddNewStudyScope(studyScope : StudyScope) : AddNewStudyScopeResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyScope addressed by the primary identifier fields within the given StudyScope. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyScope StudyScope containing the new values (the primary identifier fields within the given StudyScope will be used to address the target record)
     */
    UpdateStudyScope(studyScope : StudyScope) : UpdateStudyScopeResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyScope addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyScopeIdentity Composite Key, which represents the primary identity of a StudyScope
     * @param studyScope StudyScope containing the new values (the primary identifier fields within the given StudyScope will be ignored)
     */
    UpdateStudyScopeByStudyScopeIdentity(studyScopeIdentity : StudyScopeIdentity, studyScope : StudyScope) : UpdateStudyScopeByStudyScopeIdentityResponse;
    
    /**
     * Deletes a specific StudyScope addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyScopeIdentity Composite Key, which represents the primary identity of a StudyScope
     */
    DeleteStudyScopeByStudyScopeIdentity(studyScopeIdentity : StudyScopeIdentity) : DeleteStudyScopeByStudyScopeIdentityResponse;
    
  }
  
  public interface ISubjectAddresses {
    
    /**
     * Loads a specific SubjectAddress addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param internalRecordId Represents the primary identity of a SubjectAddress
     */
    GetSubjectAddressByInternalRecordId(internalRecordId : string) : GetSubjectAddressByInternalRecordIdResponse;
    
    /**
     * Loads SubjectAddresses.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SubjectAddresses which should be returned
     */
    GetSubjectAddresses(page : number, pageSize : number) : GetSubjectAddressesResponse;
    
    /**
     * Loads SubjectAddresses where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SubjectAddresses which should be returned
     */
    SearchSubjectAddresses(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSubjectAddressesResponse;
    
    /**
     * Adds a new SubjectAddress and returns its primary identifier (or null on failure).
     *
     * @param subjectAddress SubjectAddress containing the new values
     */
    AddNewSubjectAddress(subjectAddress : SubjectAddress) : AddNewSubjectAddressResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SubjectAddress addressed by the primary identifier fields within the given SubjectAddress. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param subjectAddress SubjectAddress containing the new values (the primary identifier fields within the given SubjectAddress will be used to address the target record)
     */
    UpdateSubjectAddress(subjectAddress : SubjectAddress) : UpdateSubjectAddressResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SubjectAddress addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param internalRecordId Represents the primary identity of a SubjectAddress
     * @param subjectAddress SubjectAddress containing the new values (the primary identifier fields within the given SubjectAddress will be ignored)
     */
    UpdateSubjectAddressByInternalRecordId(internalRecordId : string, subjectAddress : SubjectAddress) : UpdateSubjectAddressByInternalRecordIdResponse;
    
    /**
     * Deletes a specific SubjectAddress addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param internalRecordId Represents the primary identity of a SubjectAddress
     */
    DeleteSubjectAddressByInternalRecordId(internalRecordId : string) : DeleteSubjectAddressByInternalRecordIdResponse;
    
  }
  
  public interface ISubjectIdentities {
    
    /**
     * Loads a specific SubjectIdentity addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param recordId Represents the primary identity of a SubjectIdentity
     */
    GetSubjectIdentityByRecordId(recordId : string) : GetSubjectIdentityByRecordIdResponse;
    
    /**
     * Loads SubjectIdentities.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SubjectIdentities which should be returned
     */
    GetSubjectIdentities(page : number, pageSize : number) : GetSubjectIdentitiesResponse;
    
    /**
     * Loads SubjectIdentities where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SubjectIdentities which should be returned
     */
    SearchSubjectIdentities(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSubjectIdentitiesResponse;
    
    /**
     * Adds a new SubjectIdentity and returns its primary identifier (or null on failure).
     *
     * @param subjectIdentity SubjectIdentity containing the new values
     */
    AddNewSubjectIdentity(subjectIdentity : SubjectIdentity) : AddNewSubjectIdentityResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SubjectIdentity addressed by the primary identifier fields within the given SubjectIdentity. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param subjectIdentity SubjectIdentity containing the new values (the primary identifier fields within the given SubjectIdentity will be used to address the target record)
     */
    UpdateSubjectIdentity(subjectIdentity : SubjectIdentity) : UpdateSubjectIdentityResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SubjectIdentity addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param recordId Represents the primary identity of a SubjectIdentity
     * @param subjectIdentity SubjectIdentity containing the new values (the primary identifier fields within the given SubjectIdentity will be ignored)
     */
    UpdateSubjectIdentityByRecordId(recordId : string, subjectIdentity : SubjectIdentity) : UpdateSubjectIdentityByRecordIdResponse;
    
    /**
     * Deletes a specific SubjectIdentity addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param recordId Represents the primary identity of a SubjectIdentity
     */
    DeleteSubjectIdentityByRecordId(recordId : string) : DeleteSubjectIdentityByRecordIdResponse;
    
  }
  
}
