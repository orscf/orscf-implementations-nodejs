/* based on ORSCF IdentityManagement Contract v1.9.0.11852 */

import * as Models from './models';

/**
 * Contains arguments for calling 'GrantClearanceForUnblinding'.
 */
export class GrantClearanceForUnblindingRequest {
  
  /** Required Argument for 'GrantClearanceForUnblinding' (string) */
  public unblindingToken: string = '';
  
  /** Required Argument for 'GrantClearanceForUnblinding' (string[]) */
  public pseudonymsToUnblind: string[] = [];
  
  /** Required Argument for 'GrantClearanceForUnblinding' (Date) */
  public grantedUnitl: Date = new Date();
  
}

/**
 * Contains results from calling 'GrantClearanceForUnblinding'.
 */
export class GrantClearanceForUnblindingResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
}

/**
 * Contains arguments for calling 'HasClearanceForUnblinding'.
 * Method: Returns:
 * 1: if clearance granted /
 * 0: if no realtime response is possible (delayed approval)
 * -1: if a new unblindingToken is required (because the current has expired or has been repressed) /
 * -2: if the access is denied for addressed scope of data
 */
export class HasClearanceForUnblindingRequest {
  
  /** Required Argument for 'HasClearanceForUnblinding' (string) */
  public unblindingToken: string = '';
  
  /** Required Argument for 'HasClearanceForUnblinding' (string[]) */
  public pseudonymsToUnblind: string[] = [];
  
  /** Required Argument for 'HasClearanceForUnblinding' (Object): an optional container that can contain for example the ipadress or JWT token of the accessor or some MFA related information */
  public accessRelatedDetails: Object = new Object();
  
}

/**
 * Contains results from calling 'HasClearanceForUnblinding'.
 * Method: Returns:
 * 1: if clearance granted /
 * 0: if no realtime response is possible (delayed approval)
 * -1: if a new unblindingToken is required (because the current has expired or has been repressed) /
 * -2: if the access is denied for addressed scope of data
 */
export class HasClearanceForUnblindingResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'HasClearanceForUnblinding' (Int32) */
  public return?: number;
  
}

/**
 * Contains arguments for calling 'EvaluateAge'.
 * Method: Calculates the age (only the integer Year) of several persons for a given date.
 * This is supporting the very common usecase to evaluate inclusion criteria for research studies where the date of birth is not present alongside of the medical data.
 * It allows for minimalist access disclosing the date of birth information (as happening when unblinding).
 */
export class EvaluateAgeRequest {
  
  /** Required Argument for 'EvaluateAge' (Date) */
  public momentOfValuation: Date = new Date();
  
  /** Required Argument for 'EvaluateAge' (string[]) */
  public pseudonymesToEvaluate: string[] = [];
  
}

/**
 * Contains results from calling 'EvaluateAge'.
 * Method: Calculates the age (only the integer Year) of several persons for a given date.
 * This is supporting the very common usecase to evaluate inclusion criteria for research studies where the date of birth is not present alongside of the medical data.
 * It allows for minimalist access disclosing the date of birth information (as happening when unblinding).
 */
export class EvaluateAgeResponse {
  
  /** Out-Argument of 'EvaluateAge' (number[]): Returns an array with the same amount of fields as the given 'pseudonymesToEvaluate'-array. If it was not possible to evalute the age beacuse of not present data, then the corresponding array-field will contain a value of -1! */
  public ages: number[] = [];
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
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
 * 'ImsApiInfo',
 * 'Pseudonymization',
 * 'AgeEvaluation',
 * 'Unblinding',
 * 'UnblindingClearanceAwaiter'  (backend workflow for "PASSIVE-APPROVAL"),
 * 'UnblindingClearanceGranting' (backend workflow for "ACTIVE-APPROVAL")
 */
export class GetCapabilitiesRequest {
  
}

/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'ImsApiInfo',
 * 'Pseudonymization',
 * 'AgeEvaluation',
 * 'Unblinding',
 * 'UnblindingClearanceAwaiter'  (backend workflow for "PASSIVE-APPROVAL"),
 * 'UnblindingClearanceGranting' (backend workflow for "ACTIVE-APPROVAL")
 */
export class GetCapabilitiesResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetCapabilities' (String[]) */
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
 * Contains arguments for calling 'GetExtendedFieldDescriptors'.
 */
export class GetExtendedFieldDescriptorsRequest {
  
  /** Optional Argument for 'GetExtendedFieldDescriptors' (string): Preferred language for the 'DisplayLabel' and 'InputDescription' fields of the returned descriptors. ONLY RELEVANT FOR THE UI! */
  public languagePref?: string;
  
}

/**
 * Contains results from calling 'GetExtendedFieldDescriptors'.
 */
export class GetExtendedFieldDescriptorsResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetExtendedFieldDescriptors' (ExtendedFieldDescriptor[]) */
  public return?: Models.ExtendedFieldDescriptor[];
  
}

/**
 * Contains arguments for calling 'GetOrCreatePseudonym'.
 */
export class GetOrCreatePseudonymRequest {
  
  /** Required Argument for 'GetOrCreatePseudonym' (string): the Firstname a person (named as in the HL7 standard) */
  public givenName: string = '';
  
  /** Required Argument for 'GetOrCreatePseudonym' (string) */
  public familyName: string = '';
  
  /** Required Argument for 'GetOrCreatePseudonym' (string): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!) */
  public birthDate: string = '';
  
  /** Required Argument for 'GetOrCreatePseudonym' (Object): additional values for each 'extendedField' that is mandatory within (and specific to) the current IMS-System. To retrieve the declarations for such fields call 'GetExtendedFieldDescriptors' */
  public extendedFields: Object = new Object();
  
}

/**
 * Contains results from calling 'GetOrCreatePseudonym'.
 */
export class GetOrCreatePseudonymResponse {
  
  /** Out-Argument of 'GetOrCreatePseudonym' (string) */
  public pseudonym: string = '';
  
  /** Out-Argument of 'GetOrCreatePseudonym' (boolean) */
  public wasCreatedNewly: boolean = false;
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetOrCreatePseudonym' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'GetExisitingPseudonym'.
 */
export class GetExisitingPseudonymRequest {
  
  /** Required Argument for 'GetExisitingPseudonym' (string) */
  public givenName: string = '';
  
  /** Required Argument for 'GetExisitingPseudonym' (string) */
  public familyName: string = '';
  
  /** Required Argument for 'GetExisitingPseudonym' (string): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!) */
  public birthDate: string = '';
  
  /** Required Argument for 'GetExisitingPseudonym' (Object): additional values for each 'extendedField' that is mandatory within (and specific to) the current IMS-System. To retrieve the declarations for such fields call 'GetExtendedFieldDescriptors' */
  public extendedFields: Object = new Object();
  
}

/**
 * Contains results from calling 'GetExisitingPseudonym'.
 */
export class GetExisitingPseudonymResponse {
  
  /** Out-Argument of 'GetExisitingPseudonym' (string) */
  public pseudonym: string = '';
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'GetExisitingPseudonym' (Boolean) */
  public return?: boolean;
  
}

/**
 * Contains arguments for calling 'RequestUnblindingToken'.
 * Method: Returns:
 * 1: if clearance granted (token can be DIRECTLY used to call 'TryUnblind') /
 * 0: if no realtime response is possible (delayed approval is outstanding)
 * -1: if a new unblindingToken is required (because the current has expired or has been repressed) /
 * -2: if the access is denied for addressed scope of data
 */
export class RequestUnblindingTokenRequest {
  
  /** Required Argument for 'RequestUnblindingToken' (string[]) */
  public pseudonymsToUnblind: string[] = [];
  
  /** Required Argument for 'RequestUnblindingToken' (string) */
  public requestReason: string = '';
  
  /** Required Argument for 'RequestUnblindingToken' (string) */
  public requestBy: string = '';
  
}

/**
 * Contains results from calling 'RequestUnblindingToken'.
 * Method: Returns:
 * 1: if clearance granted (token can be DIRECTLY used to call 'TryUnblind') /
 * 0: if no realtime response is possible (delayed approval is outstanding)
 * -1: if a new unblindingToken is required (because the current has expired or has been repressed) /
 * -2: if the access is denied for addressed scope of data
 */
export class RequestUnblindingTokenResponse {
  
  /** Out-Argument of 'RequestUnblindingToken' (string) */
  public unblindingToken: string = '';
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'RequestUnblindingToken' (Int32) */
  public return?: number;
  
}

/**
 * Contains arguments for calling 'TryUnblind'.
 * Method: Returns:
 * 1: on SUCCESS (unblindedIdentities should contain data) /
 * 0: if no realtime response is possible (delayed approval is outstanding)
 * -1: if a new unblindingToken is required (because the current has expired or has been repressed) /
 * -2: if the access is denied for addressed scope of data
 */
export class TryUnblindRequest {
  
  /** Required Argument for 'TryUnblind' (string) */
  public unblindingToken: string = '';
  
  /** Required Argument for 'TryUnblind' (string[]) */
  public pseudonymsToUnblind: string[] = [];
  
  /** Required Argument for 'TryUnblind' (Models.IdentityDetails[]) */
  public unblindedIdentities: Models.IdentityDetails[] = [];
  
}

/**
 * Contains results from calling 'TryUnblind'.
 * Method: Returns:
 * 1: on SUCCESS (unblindedIdentities should contain data) /
 * 0: if no realtime response is possible (delayed approval is outstanding)
 * -1: if a new unblindingToken is required (because the current has expired or has been repressed) /
 * -2: if the access is denied for addressed scope of data
 */
export class TryUnblindResponse {
  
  /** This field contains error text equivalent to an Exception message! (note that only 'fault' XOR 'return' can have a value != null) */
  public fault?: string;
  
  /** Return-Value of 'TryUnblind' (Int32) */
  public return?: number;
  
}
