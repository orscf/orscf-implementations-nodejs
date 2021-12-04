/* based on ORSCF StudyManagement Contract v1.6.1.11538 */

import MedicalResearch.StudyManagement.Model;

namespace MedicalResearch.StudyManagement.StoreAccess {
  
  public interface IInstitutes {
    
    /**
     * Loads a specific Institute addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param instituteUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    GetInstituteByInstituteUid(instituteUid : string) : GetInstituteByInstituteUidResponse;
    
    /**
     * Loads Institutes.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Institutes which should be returned
     */
    GetInstitutes(page : number, pageSize : number) : GetInstitutesResponse;
    
    /**
     * Loads Institutes where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Institutes which should be returned
     */
    SearchInstitutes(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchInstitutesResponse;
    
    /**
     * Adds a new Institute and returns its primary identifier (or null on failure).
     *
     * @param institute Institute containing the new values
     */
    AddNewInstitute(institute : Institute) : AddNewInstituteResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Institute addressed by the primary identifier fields within the given Institute. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param institute Institute containing the new values (the primary identifier fields within the given Institute will be used to address the target record)
     */
    UpdateInstitute(institute : Institute) : UpdateInstituteResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Institute addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param instituteUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     * @param institute Institute containing the new values (the primary identifier fields within the given Institute will be ignored)
     */
    UpdateInstituteByInstituteUid(instituteUid : string, institute : Institute) : UpdateInstituteByInstituteUidResponse;
    
    /**
     * Deletes a specific Institute addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param instituteUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    DeleteInstituteByInstituteUid(instituteUid : string) : DeleteInstituteByInstituteUidResponse;
    
  }
  
  public interface IResearchStudies {
    
    /**
     * Loads a specific ResearchStudy addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param researchStudyUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    GetResearchStudyByResearchStudyUid(researchStudyUid : string) : GetResearchStudyByResearchStudyUidResponse;
    
    /**
     * Loads ResearchStudies.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of ResearchStudies which should be returned
     */
    GetResearchStudies(page : number, pageSize : number) : GetResearchStudiesResponse;
    
    /**
     * Loads ResearchStudies where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of ResearchStudies which should be returned
     */
    SearchResearchStudies(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchResearchStudiesResponse;
    
    /**
     * Adds a new ResearchStudy and returns its primary identifier (or null on failure).
     *
     * @param researchStudy ResearchStudy containing the new values
     */
    AddNewResearchStudy(researchStudy : ResearchStudy) : AddNewResearchStudyResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudy addressed by the primary identifier fields within the given ResearchStudy. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param researchStudy ResearchStudy containing the new values (the primary identifier fields within the given ResearchStudy will be used to address the target record)
     */
    UpdateResearchStudy(researchStudy : ResearchStudy) : UpdateResearchStudyResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given ResearchStudy addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param researchStudyUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     * @param researchStudy ResearchStudy containing the new values (the primary identifier fields within the given ResearchStudy will be ignored)
     */
    UpdateResearchStudyByResearchStudyUid(researchStudyUid : string, researchStudy : ResearchStudy) : UpdateResearchStudyByResearchStudyUidResponse;
    
    /**
     * Deletes a specific ResearchStudy addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param researchStudyUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    DeleteResearchStudyByResearchStudyUid(researchStudyUid : string) : DeleteResearchStudyByResearchStudyUidResponse;
    
  }
  
  public interface ISites {
    
    /**
     * Loads a specific Site addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param siteUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    GetSiteBySiteUid(siteUid : string) : GetSiteBySiteUidResponse;
    
    /**
     * Loads Sites.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Sites which should be returned
     */
    GetSites(page : number, pageSize : number) : GetSitesResponse;
    
    /**
     * Loads Sites where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of Sites which should be returned
     */
    SearchSites(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSitesResponse;
    
    /**
     * Adds a new Site and returns its primary identifier (or null on failure).
     *
     * @param site Site containing the new values
     */
    AddNewSite(site : Site) : AddNewSiteResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Site addressed by the primary identifier fields within the given Site. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param site Site containing the new values (the primary identifier fields within the given Site will be used to address the target record)
     */
    UpdateSite(site : Site) : UpdateSiteResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given Site addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param siteUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     * @param site Site containing the new values (the primary identifier fields within the given Site will be ignored)
     */
    UpdateSiteBySiteUid(siteUid : string, site : Site) : UpdateSiteBySiteUidResponse;
    
    /**
     * Deletes a specific Site addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param siteUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    DeleteSiteBySiteUid(siteUid : string) : DeleteSiteBySiteUidResponse;
    
  }
  
  public interface ISystemEndpoints {
    
    /**
     * Loads a specific SystemEndpoint addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param systemEndpointUid Represents the primary identity of a SystemEndpoint
     */
    GetSystemEndpointBySystemEndpointUid(systemEndpointUid : string) : GetSystemEndpointBySystemEndpointUidResponse;
    
    /**
     * Loads SystemEndpoints.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SystemEndpoints which should be returned
     */
    GetSystemEndpoints(page : number, pageSize : number) : GetSystemEndpointsResponse;
    
    /**
     * Loads SystemEndpoints where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SystemEndpoints which should be returned
     */
    SearchSystemEndpoints(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSystemEndpointsResponse;
    
    /**
     * Adds a new SystemEndpoint and returns its primary identifier (or null on failure).
     *
     * @param systemEndpoint SystemEndpoint containing the new values
     */
    AddNewSystemEndpoint(systemEndpoint : SystemEndpoint) : AddNewSystemEndpointResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SystemEndpoint addressed by the primary identifier fields within the given SystemEndpoint. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param systemEndpoint SystemEndpoint containing the new values (the primary identifier fields within the given SystemEndpoint will be used to address the target record)
     */
    UpdateSystemEndpoint(systemEndpoint : SystemEndpoint) : UpdateSystemEndpointResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SystemEndpoint addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param systemEndpointUid Represents the primary identity of a SystemEndpoint
     * @param systemEndpoint SystemEndpoint containing the new values (the primary identifier fields within the given SystemEndpoint will be ignored)
     */
    UpdateSystemEndpointBySystemEndpointUid(systemEndpointUid : string, systemEndpoint : SystemEndpoint) : UpdateSystemEndpointBySystemEndpointUidResponse;
    
    /**
     * Deletes a specific SystemEndpoint addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param systemEndpointUid Represents the primary identity of a SystemEndpoint
     */
    DeleteSystemEndpointBySystemEndpointUid(systemEndpointUid : string) : DeleteSystemEndpointBySystemEndpointUidResponse;
    
  }
  
  public interface IInstituteRelatedSystemAssignments {
    
    /**
     * Loads a specific InstituteRelatedSystemAssignment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param instituteRelatedSystemAssignemntUid Represents the primary identity of a InstituteRelatedSystemAssignment
     */
    GetInstituteRelatedSystemAssignmentByInstituteRelatedSystemAssignemntUid(instituteRelatedSystemAssignemntUid : string) : GetInstituteRelatedSystemAssignmentByInstituteRelatedSystemAssignemntUidResponse;
    
    /**
     * Loads InstituteRelatedSystemAssignments.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of InstituteRelatedSystemAssignments which should be returned
     */
    GetInstituteRelatedSystemAssignments(page : number, pageSize : number) : GetInstituteRelatedSystemAssignmentsResponse;
    
    /**
     * Loads InstituteRelatedSystemAssignments where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of InstituteRelatedSystemAssignments which should be returned
     */
    SearchInstituteRelatedSystemAssignments(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchInstituteRelatedSystemAssignmentsResponse;
    
    /**
     * Adds a new InstituteRelatedSystemAssignment and returns its primary identifier (or null on failure).
     *
     * @param instituteRelatedSystemAssignment InstituteRelatedSystemAssignment containing the new values
     */
    AddNewInstituteRelatedSystemAssignment(instituteRelatedSystemAssignment : InstituteRelatedSystemAssignment) : AddNewInstituteRelatedSystemAssignmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given InstituteRelatedSystemAssignment addressed by the primary identifier fields within the given InstituteRelatedSystemAssignment. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param instituteRelatedSystemAssignment InstituteRelatedSystemAssignment containing the new values (the primary identifier fields within the given InstituteRelatedSystemAssignment will be used to address the target record)
     */
    UpdateInstituteRelatedSystemAssignment(instituteRelatedSystemAssignment : InstituteRelatedSystemAssignment) : UpdateInstituteRelatedSystemAssignmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given InstituteRelatedSystemAssignment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param instituteRelatedSystemAssignemntUid Represents the primary identity of a InstituteRelatedSystemAssignment
     * @param instituteRelatedSystemAssignment InstituteRelatedSystemAssignment containing the new values (the primary identifier fields within the given InstituteRelatedSystemAssignment will be ignored)
     */
    UpdateInstituteRelatedSystemAssignmentByInstituteRelatedSystemAssignemntUid(instituteRelatedSystemAssignemntUid : string, instituteRelatedSystemAssignment : InstituteRelatedSystemAssignment) : UpdateInstituteRelatedSystemAssignmentByInstituteRelatedSystemAssignemntUidResponse;
    
    /**
     * Deletes a specific InstituteRelatedSystemAssignment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param instituteRelatedSystemAssignemntUid Represents the primary identity of a InstituteRelatedSystemAssignment
     */
    DeleteInstituteRelatedSystemAssignmentByInstituteRelatedSystemAssignemntUid(instituteRelatedSystemAssignemntUid : string) : DeleteInstituteRelatedSystemAssignmentByInstituteRelatedSystemAssignemntUidResponse;
    
  }
  
  public interface ISystemConnections {
    
    /**
     * Loads a specific SystemConnection addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param systemConnectionUid Represents the primary identity of a SystemConnection
     */
    GetSystemConnectionBySystemConnectionUid(systemConnectionUid : string) : GetSystemConnectionBySystemConnectionUidResponse;
    
    /**
     * Loads SystemConnections.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SystemConnections which should be returned
     */
    GetSystemConnections(page : number, pageSize : number) : GetSystemConnectionsResponse;
    
    /**
     * Loads SystemConnections where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SystemConnections which should be returned
     */
    SearchSystemConnections(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSystemConnectionsResponse;
    
    /**
     * Adds a new SystemConnection and returns its primary identifier (or null on failure).
     *
     * @param systemConnection SystemConnection containing the new values
     */
    AddNewSystemConnection(systemConnection : SystemConnection) : AddNewSystemConnectionResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SystemConnection addressed by the primary identifier fields within the given SystemConnection. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param systemConnection SystemConnection containing the new values (the primary identifier fields within the given SystemConnection will be used to address the target record)
     */
    UpdateSystemConnection(systemConnection : SystemConnection) : UpdateSystemConnectionResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SystemConnection addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param systemConnectionUid Represents the primary identity of a SystemConnection
     * @param systemConnection SystemConnection containing the new values (the primary identifier fields within the given SystemConnection will be ignored)
     */
    UpdateSystemConnectionBySystemConnectionUid(systemConnectionUid : string, systemConnection : SystemConnection) : UpdateSystemConnectionBySystemConnectionUidResponse;
    
    /**
     * Deletes a specific SystemConnection addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param systemConnectionUid Represents the primary identity of a SystemConnection
     */
    DeleteSystemConnectionBySystemConnectionUid(systemConnectionUid : string) : DeleteSystemConnectionBySystemConnectionUidResponse;
    
  }
  
  public interface IInvolvedPersons {
    
    /**
     * Loads a specific InvolvedPerson addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param involvedPersonUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    GetInvolvedPersonByInvolvedPersonUid(involvedPersonUid : string) : GetInvolvedPersonByInvolvedPersonUidResponse;
    
    /**
     * Loads InvolvedPersons.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of InvolvedPersons which should be returned
     */
    GetInvolvedPersons(page : number, pageSize : number) : GetInvolvedPersonsResponse;
    
    /**
     * Loads InvolvedPersons where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of InvolvedPersons which should be returned
     */
    SearchInvolvedPersons(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchInvolvedPersonsResponse;
    
    /**
     * Adds a new InvolvedPerson and returns its primary identifier (or null on failure).
     *
     * @param involvedPerson InvolvedPerson containing the new values
     */
    AddNewInvolvedPerson(involvedPerson : InvolvedPerson) : AddNewInvolvedPersonResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given InvolvedPerson addressed by the primary identifier fields within the given InvolvedPerson. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param involvedPerson InvolvedPerson containing the new values (the primary identifier fields within the given InvolvedPerson will be used to address the target record)
     */
    UpdateInvolvedPerson(involvedPerson : InvolvedPerson) : UpdateInvolvedPersonResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given InvolvedPerson addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param involvedPersonUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     * @param involvedPerson InvolvedPerson containing the new values (the primary identifier fields within the given InvolvedPerson will be ignored)
     */
    UpdateInvolvedPersonByInvolvedPersonUid(involvedPersonUid : string, involvedPerson : InvolvedPerson) : UpdateInvolvedPersonByInvolvedPersonUidResponse;
    
    /**
     * Deletes a specific InvolvedPerson addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param involvedPersonUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    DeleteInvolvedPersonByInvolvedPersonUid(involvedPersonUid : string) : DeleteInvolvedPersonByInvolvedPersonUidResponse;
    
  }
  
  public interface IInvolvementRoles {
    
    /**
     * Loads a specific InvolvementRole addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param involvedPersonRoleUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    GetInvolvementRoleByInvolvedPersonRoleUid(involvedPersonRoleUid : string) : GetInvolvementRoleByInvolvedPersonRoleUidResponse;
    
    /**
     * Loads InvolvementRoles.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of InvolvementRoles which should be returned
     */
    GetInvolvementRoles(page : number, pageSize : number) : GetInvolvementRolesResponse;
    
    /**
     * Loads InvolvementRoles where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of InvolvementRoles which should be returned
     */
    SearchInvolvementRoles(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchInvolvementRolesResponse;
    
    /**
     * Adds a new InvolvementRole and returns its primary identifier (or null on failure).
     *
     * @param involvementRole InvolvementRole containing the new values
     */
    AddNewInvolvementRole(involvementRole : InvolvementRole) : AddNewInvolvementRoleResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given InvolvementRole addressed by the primary identifier fields within the given InvolvementRole. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param involvementRole InvolvementRole containing the new values (the primary identifier fields within the given InvolvementRole will be used to address the target record)
     */
    UpdateInvolvementRole(involvementRole : InvolvementRole) : UpdateInvolvementRoleResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given InvolvementRole addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param involvedPersonRoleUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     * @param involvementRole InvolvementRole containing the new values (the primary identifier fields within the given InvolvementRole will be ignored)
     */
    UpdateInvolvementRoleByInvolvedPersonRoleUid(involvedPersonRoleUid : string, involvementRole : InvolvementRole) : UpdateInvolvementRoleByInvolvedPersonRoleUidResponse;
    
    /**
     * Deletes a specific InvolvementRole addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param involvedPersonRoleUid An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    DeleteInvolvementRoleByInvolvedPersonRoleUid(involvedPersonRoleUid : string) : DeleteInvolvementRoleByInvolvedPersonRoleUidResponse;
    
  }
  
  public interface IStudyRelatedSystemAssignments {
    
    /**
     * Loads a specific StudyRelatedSystemAssignment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param studyRelatedSystemAssignmentUid Represents the primary identity of a StudyRelatedSystemAssignment
     */
    GetStudyRelatedSystemAssignmentByStudyRelatedSystemAssignmentUid(studyRelatedSystemAssignmentUid : string) : GetStudyRelatedSystemAssignmentByStudyRelatedSystemAssignmentUidResponse;
    
    /**
     * Loads StudyRelatedSystemAssignments.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyRelatedSystemAssignments which should be returned
     */
    GetStudyRelatedSystemAssignments(page : number, pageSize : number) : GetStudyRelatedSystemAssignmentsResponse;
    
    /**
     * Loads StudyRelatedSystemAssignments where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of StudyRelatedSystemAssignments which should be returned
     */
    SearchStudyRelatedSystemAssignments(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchStudyRelatedSystemAssignmentsResponse;
    
    /**
     * Adds a new StudyRelatedSystemAssignment and returns its primary identifier (or null on failure).
     *
     * @param studyRelatedSystemAssignment StudyRelatedSystemAssignment containing the new values
     */
    AddNewStudyRelatedSystemAssignment(studyRelatedSystemAssignment : StudyRelatedSystemAssignment) : AddNewStudyRelatedSystemAssignmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyRelatedSystemAssignment addressed by the primary identifier fields within the given StudyRelatedSystemAssignment. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyRelatedSystemAssignment StudyRelatedSystemAssignment containing the new values (the primary identifier fields within the given StudyRelatedSystemAssignment will be used to address the target record)
     */
    UpdateStudyRelatedSystemAssignment(studyRelatedSystemAssignment : StudyRelatedSystemAssignment) : UpdateStudyRelatedSystemAssignmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given StudyRelatedSystemAssignment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyRelatedSystemAssignmentUid Represents the primary identity of a StudyRelatedSystemAssignment
     * @param studyRelatedSystemAssignment StudyRelatedSystemAssignment containing the new values (the primary identifier fields within the given StudyRelatedSystemAssignment will be ignored)
     */
    UpdateStudyRelatedSystemAssignmentByStudyRelatedSystemAssignmentUid(studyRelatedSystemAssignmentUid : string, studyRelatedSystemAssignment : StudyRelatedSystemAssignment) : UpdateStudyRelatedSystemAssignmentByStudyRelatedSystemAssignmentUidResponse;
    
    /**
     * Deletes a specific StudyRelatedSystemAssignment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param studyRelatedSystemAssignmentUid Represents the primary identity of a StudyRelatedSystemAssignment
     */
    DeleteStudyRelatedSystemAssignmentByStudyRelatedSystemAssignmentUid(studyRelatedSystemAssignmentUid : string) : DeleteStudyRelatedSystemAssignmentByStudyRelatedSystemAssignmentUidResponse;
    
  }
  
  public interface ISiteRelatedSystemAssignments {
    
    /**
     * Loads a specific SiteRelatedSystemAssignment addressed by the given primary identifier. Returns null on failure, or if no record exists with the given identity.
     *
     * @param siteRelatedSystemAssignmentUid Represents the primary identity of a SiteRelatedSystemAssignment
     */
    GetSiteRelatedSystemAssignmentBySiteRelatedSystemAssignmentUid(siteRelatedSystemAssignmentUid : string) : GetSiteRelatedSystemAssignmentBySiteRelatedSystemAssignmentUidResponse;
    
    /**
     * Loads SiteRelatedSystemAssignments.
     *
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SiteRelatedSystemAssignments which should be returned
     */
    GetSiteRelatedSystemAssignments(page : number, pageSize : number) : GetSiteRelatedSystemAssignmentsResponse;
    
    /**
     * Loads SiteRelatedSystemAssignments where values matching to the given filterExpression
     *
     * @param filterExpression a filter expression like '((FieldName1 == "ABC" &amp;&amp; FieldName2 &gt; 12) || FieldName2 != "")'
     * @param sortingExpression one or more property names which are used as sort order (before pagination)
     * @param page Number of the page, which should be returned
     * @param pageSize Max count of SiteRelatedSystemAssignments which should be returned
     */
    SearchSiteRelatedSystemAssignments(filterExpression : string, sortingExpression : string, page : number, pageSize : number) : SearchSiteRelatedSystemAssignmentsResponse;
    
    /**
     * Adds a new SiteRelatedSystemAssignment and returns its primary identifier (or null on failure).
     *
     * @param siteRelatedSystemAssignment SiteRelatedSystemAssignment containing the new values
     */
    AddNewSiteRelatedSystemAssignment(siteRelatedSystemAssignment : SiteRelatedSystemAssignment) : AddNewSiteRelatedSystemAssignmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SiteRelatedSystemAssignment addressed by the primary identifier fields within the given SiteRelatedSystemAssignment. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param siteRelatedSystemAssignment SiteRelatedSystemAssignment containing the new values (the primary identifier fields within the given SiteRelatedSystemAssignment will be used to address the target record)
     */
    UpdateSiteRelatedSystemAssignment(siteRelatedSystemAssignment : SiteRelatedSystemAssignment) : UpdateSiteRelatedSystemAssignmentResponse;
    
    /**
     * Updates all values (which are not "FixedAfterCreation") of the given SiteRelatedSystemAssignment addressed by the supplementary given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param siteRelatedSystemAssignmentUid Represents the primary identity of a SiteRelatedSystemAssignment
     * @param siteRelatedSystemAssignment SiteRelatedSystemAssignment containing the new values (the primary identifier fields within the given SiteRelatedSystemAssignment will be ignored)
     */
    UpdateSiteRelatedSystemAssignmentBySiteRelatedSystemAssignmentUid(siteRelatedSystemAssignmentUid : string, siteRelatedSystemAssignment : SiteRelatedSystemAssignment) : UpdateSiteRelatedSystemAssignmentBySiteRelatedSystemAssignmentUidResponse;
    
    /**
     * Deletes a specific SiteRelatedSystemAssignment addressed by the given primary identifier. Returns false on failure or if no target record was found, otherwise true.
     *
     * @param siteRelatedSystemAssignmentUid Represents the primary identity of a SiteRelatedSystemAssignment
     */
    DeleteSiteRelatedSystemAssignmentBySiteRelatedSystemAssignmentUid(siteRelatedSystemAssignmentUid : string) : DeleteSiteRelatedSystemAssignmentBySiteRelatedSystemAssignmentUidResponse;
    
  }
  
}
