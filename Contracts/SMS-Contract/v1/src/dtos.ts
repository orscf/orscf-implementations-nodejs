/* based on ORSCF StudyManagement Contract v1.8.0.0 */

import * as Models from './models';

/**
 * Contains arguments for calling 'GetInstituteUidByTitle'.
 */
export class GetInstituteUidByTitleRequest {
  
  /** Required Argument for 'GetInstituteUidByTitle' (string) */
  public instituteTitle: string = '';
  
}

/**
 * Contains results from calling 'GetInstituteUidByTitle'.
 */
export class GetInstituteUidByTitleResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetInstituteUidByTitle' (Guid) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetInstituteTitleByUid'.
 */
export class GetInstituteTitleByUidRequest {
  
  /** Required Argument for 'GetInstituteTitleByUid' (string) */
  public instituteUid: string = '';
  
}

/**
 * Contains results from calling 'GetInstituteTitleByUid'.
 */
export class GetInstituteTitleByUidResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetInstituteTitleByUid' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'ArchiveInstitute'.
 */
export class ArchiveInstituteRequest {
  
  /** Required Argument for 'ArchiveInstitute' (string) */
  public instituteUid: string = '';
  
}

/**
 * Contains results from calling 'ArchiveInstitute'.
 */
export class ArchiveInstituteResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'ArchiveInstitute' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetInstituteInfos'.
 */
export class GetInstituteInfosRequest {
  
  /** Required Argument for 'GetInstituteInfos' (string) */
  public instituteUid: string = '';
  
}

/**
 * Contains results from calling 'GetInstituteInfos'.
 */
export class GetInstituteInfosResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetInstituteInfos' (InstituteInfo[]) */
  public return?: Models.InstituteInfo[];
  
}

/**
 * Contains arguments for calling 'CreateInstituteIfMissing'.
 * Method: ensures, that an institute with the given Uid exists
 * and returns true, if it has been newly created
 */
export class CreateInstituteIfMissingRequest {
  
  /** Required Argument for 'CreateInstituteIfMissing' (string) */
  public instituteUid: string = '';
  
}

/**
 * Contains results from calling 'CreateInstituteIfMissing'.
 * Method: ensures, that an institute with the given Uid exists
 * and returns true, if it has been newly created
 */
export class CreateInstituteIfMissingResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'CreateInstituteIfMissing' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'UpdateInstitueTitle'.
 * Method: updated the title of the the institute or returns false,
 * if there is no record for the given instituteUid
 */
export class UpdateInstitueTitleRequest {
  
  /** Required Argument for 'UpdateInstitueTitle' (string) */
  public instituteUid: string = '';
  
  /** Required Argument for 'UpdateInstitueTitle' (string) */
  public newTitle: string = '';
  
}

/**
 * Contains results from calling 'UpdateInstitueTitle'.
 * Method: updated the title of the the institute or returns false,
 * if there is no record for the given instituteUid
 */
export class UpdateInstitueTitleResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'UpdateInstitueTitle' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export class GetApiVersionRequest {
  
}

/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export class GetApiVersionResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetApiVersion' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'InstituteMgmt', 'StudySetup', 'StudyAccess', 'SiteParticipation'
 */
export class GetCapabilitiesRequest {
  
}

/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'InstituteMgmt', 'StudySetup', 'StudyAccess', 'SiteParticipation'
 */
export class GetCapabilitiesResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetCapabilities' (String[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:StudyAccess") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesRequest {
  
}

/**
 * Contains results from calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:StudyAccess") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesResponse {
  
  /** Out-Argument of 'GetPermittedAuthScopes' (number) */
  public authState: number = 0;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetPermittedAuthScopes' (String[]) */
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export class GetOAuthTokenRequestUrlRequest {
  
}

/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export class GetOAuthTokenRequestUrlResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetOAuthTokenRequestUrl' (String) */
  public return?: string;
  
}

/**
 * Contains arguments for calling 'SubscribeStudyStateChangedEvents'.
 * Method: Subscribes the Event when the State of a Study was changed
 * to the given "EventQueue" which is accessable via "EventQueueService"
 * (including http notifications)
 */
export class SubscribeStudyStateChangedEventsRequest {
  
  /** Required Argument for 'SubscribeStudyStateChangedEvents' (string) */
  public eventQueueId: string = '';
  
}

/**
 * Contains results from calling 'SubscribeStudyStateChangedEvents'.
 * Method: Subscribes the Event when the State of a Study was changed
 * to the given "EventQueue" which is accessable via "EventQueueService"
 * (including http notifications)
 */
export class SubscribeStudyStateChangedEventsResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'SubscribeStudyStateChangedEvents' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'UnsubscribeStudyStateChangedEvents'.
 * Method: Unsubscribes the Event when the State of a Study was changed
 * for the given "EventQueue"
 */
export class UnsubscribeStudyStateChangedEventsRequest {
  
  /** Required Argument for 'UnsubscribeStudyStateChangedEvents' (string) */
  public eventQueueId: string = '';
  
}

/**
 * Contains results from calling 'UnsubscribeStudyStateChangedEvents'.
 * Method: Unsubscribes the Event when the State of a Study was changed
 * for the given "EventQueue"
 */
export class UnsubscribeStudyStateChangedEventsResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'UnsubscribeStudyStateChangedEvents' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'GetStudyTitleByIdentifier'.
 * Method: returns null, if there is no matching record
 */
export class GetStudyTitleByIdentifierRequest {
  
  /** Required Argument for 'GetStudyTitleByIdentifier' (string) */
  public studyIdentifier: string = '';
  
}

/**
 * Contains results from calling 'GetStudyTitleByIdentifier'.
 * Method: returns null, if there is no matching record
 */
export class GetStudyTitleByIdentifierResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetStudyTitleByIdentifier' (String) */
  public return?: string;
  
}
