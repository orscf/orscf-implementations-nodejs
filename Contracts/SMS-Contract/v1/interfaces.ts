/* based on ORSCF StudyManagement Contract v1.8.0.11747 */

import * as Models from './models';

export interface IInstituteMgmtService {
  
  /**
   * GetInstituteUidByTitle
   *
   * @param instituteTitle
   */
  GetInstituteUidByTitle(instituteTitle : string) : string;
  
  /**
   * GetInstituteTitleByUid
   *
   * @param instituteUid
   */
  GetInstituteTitleByUid(instituteUid : string) : string;
  
  /**
   * ArchiveInstitute
   *
   * @param instituteUid
   */
  ArchiveInstitute(instituteUid : string) : string;
  
  /**
   * GetInstituteInfos
   *
   * @param instituteUid
   */
  GetInstituteInfos(instituteUid : string) : string;
  
  /**
   * ensures, that an institute with the given Uid exists and returns true, if it has been newly created
   *
   * @param instituteUid
   */
  CreateInstituteIfMissing(instituteUid : string) : boolean;
  
  /**
   * updated the title of the the institute or returns false, if there is no record for the given instituteUid
   *
   * @param instituteUid
   * @param newTitle
   */
  UpdateInstitueTitle(instituteUid : string, newTitle : string) : boolean;
  
}

export interface ISiteParticipationService {
  
}

export interface ISmsApiInfoService {
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  GetApiVersion() : string;
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'InstituteMgmt', 'StudySetup', 'StudyAccess', 'SiteParticipation'
   */
  GetCapabilities() : string[];
  
  /**
   * returns a list of available capabilities ("API:StudyAccess") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   *
   * @param authState
   */
  GetPermittedAuthScopes(authState : (out: number) => void) : string[];
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  GetOAuthTokenRequestUrl() : string;
  
}

export interface IStudyAccessService {
  
  /**
   * Subscribes the Event when the State of a Study was changed to the given "EventQueue" which is accessable via "EventQueueService" (including http notifications)
   *
   * @param eventQueueId
   */
  SubscribeStudyStateChangedEvents(eventQueueId : string) : boolean;
  
  /**
   * Unsubscribes the Event when the State of a Study was changed for the given "EventQueue"
   *
   * @param eventQueueId
   */
  UnsubscribeStudyStateChangedEvents(eventQueueId : string) : boolean;
  
}

export interface IStudySetupService {
  
  /**
   * returns null, if there is no matching record
   *
   * @param studyIdentifier
   */
  GetStudyTitleByIdentifier(studyIdentifier : string) : string;
  
}
