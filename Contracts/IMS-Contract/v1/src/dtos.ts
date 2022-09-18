/* based on ORSCF IdentityManagement Contract v1.8.0.11833 */

import * as Models from './models';

/**
 * Contains arguments for calling 'RequestUnblindingToken'.
 * Method: returns an unblindingToken which is not activated
 */
export class RequestUnblindingTokenRequest {
  
  // Required Argument for 'RequestUnblindingToken' (string)
  public researchStudyName: string = '';
  
  // Required Argument for 'RequestUnblindingToken' (string)
  public subjectId: string = '';
  
  // Required Argument for 'RequestUnblindingToken' (string)
  public reason: string = '';
  
  // Required Argument for 'RequestUnblindingToken' (string)
  public requestingPerson: string = '';
  
}

/**
 * Contains results from calling 'RequestUnblindingToken'.
 * Method: returns an unblindingToken which is not activated
 */
export class RequestUnblindingTokenResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'RequestUnblindingToken' (String)
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetUnblindingTokenState'.
 * Method: 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
 */
export class GetUnblindingTokenStateRequest {
  
  // Required Argument for 'GetUnblindingTokenState' (string)
  public unblindingToken: string = '';
  
}

/**
 * Contains results from calling 'GetUnblindingTokenState'.
 * Method: 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
 */
export class GetUnblindingTokenStateResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetUnblindingTokenState' (Int32)
  public return?: number;
  
}

/**
 * Contains arguments for calling 'UnblindSubject'.
 * Method: (only works with an activated unblindingOtp )
 */
export class UnblindSubjectRequest {
  
  // Required Argument for 'UnblindSubject' (string)
  public researchStudyName: string = '';
  
  // Required Argument for 'UnblindSubject' (string)
  public subjectId: string = '';
  
  // Required Argument for 'UnblindSubject' (string)
  public unblindingToken: string = '';
  
}

/**
 * Contains results from calling 'UnblindSubject'.
 * Method: (only works with an activated unblindingOtp )
 */
export class UnblindSubjectResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'UnblindSubject' (IdentityDetails)
  public return?: Models.IdentityDetails;
  
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
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetApiVersion' (String)
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'Pseudonymization', 'IdentityUnblinding',
 */
export class GetCapabilitiesRequest {
  
}

/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'Pseudonymization', 'IdentityUnblinding',
 */
export class GetCapabilitiesResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetCapabilities' (String[])
  public return?: string[];
  
}

/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:Pseudonymization") and/or
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
 * Method: returns a list of available capabilities ("API:Pseudonymization") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export class GetPermittedAuthScopesResponse {
  
  // Out-Argument of 'GetPermittedAuthScopes' (number)
  public authState: number = 0;
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetPermittedAuthScopes' (String[])
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
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetOAuthTokenRequestUrl' (String)
  public return?: string;
  
}

/**
 * Contains arguments for calling 'GetExtendedFieldDescriptors'.
 */
export class GetExtendedFieldDescriptorsRequest {
  
  // Optional Argument for 'GetExtendedFieldDescriptors' (string): Preferred language for the 'DisplayLabel' and 'InputDescription' fields of the returned descriptors.
  public languagePref?: string;
  
}

/**
 * Contains results from calling 'GetExtendedFieldDescriptors'.
 */
export class GetExtendedFieldDescriptorsResponse {
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetExtendedFieldDescriptors' (ExtendedFieldDescriptor[])
  public return?: Models.ExtendedFieldDescriptor[];
  
}

/**
 * Contains arguments for calling 'GetOrCreatePseudonym'.
 */
export class GetOrCreatePseudonymRequest {
  
  // Required Argument for 'GetOrCreatePseudonym' (string): A UUID
  public researchStudyUid: string = '';
  
  // Required Argument for 'GetOrCreatePseudonym' (string): the Firstname a the paticipant (named as in the HL7 standard)
  public givenName: string = '';
  
  // Required Argument for 'GetOrCreatePseudonym' (string)
  public familyName: string = '';
  
  // Required Argument for 'GetOrCreatePseudonym' (string): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
  public birthDate: string = '';
  
  // Required Argument for 'GetOrCreatePseudonym' (Object)
  public extendedFields: Object = new Object();
  
  // Required Argument for 'GetOrCreatePseudonym' (string): A UUID
  public siteUid: string = '';
  
}

/**
 * Contains results from calling 'GetOrCreatePseudonym'.
 */
export class GetOrCreatePseudonymResponse {
  
  // Out-Argument of 'GetOrCreatePseudonym' (string)
  public pseudonym: string = '';
  
  // Out-Argument of 'GetOrCreatePseudonym' (boolean)
  public wasCreatedNewly: boolean = false;
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetOrCreatePseudonym' (Boolean)
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'GetExisitingPseudonym'.
 */
export class GetExisitingPseudonymRequest {
  
  // Required Argument for 'GetExisitingPseudonym' (string): A UUID
  public researchStudyUid: string = '';
  
  // Required Argument for 'GetExisitingPseudonym' (string)
  public givenName: string = '';
  
  // Required Argument for 'GetExisitingPseudonym' (string)
  public familyName: string = '';
  
  // Required Argument for 'GetExisitingPseudonym' (string): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
  public birthDate: string = '';
  
  // Required Argument for 'GetExisitingPseudonym' (Object)
  public extendedFields: Object = new Object();
  
}

/**
 * Contains results from calling 'GetExisitingPseudonym'.
 */
export class GetExisitingPseudonymResponse {
  
  // Out-Argument of 'GetExisitingPseudonym' (string)
  public pseudonym: string = '';
  
  // This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null)
  public fault?: string;
  
  // Return-Value of 'GetExisitingPseudonym' (Boolean)
  public return?: boolean;
  
}
