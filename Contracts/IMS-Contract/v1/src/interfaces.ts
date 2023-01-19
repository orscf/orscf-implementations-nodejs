/* based on ORSCF IdentityManagement Contract v1.9.0.11852 */

import * as Models from './models';

export interface IUnblindingClearanceAwaiterService {
  
  /**
   * GrantClearanceForUnblinding
   *
   * @param unblindingToken
   * @param pseudonymsToUnblind
   * @param grantedUnitl
   */
  GrantClearanceForUnblinding(unblindingToken : string, pseudonymsToUnblind : string[], grantedUnitl : Date) : Promise<void>;
  
}

export interface IUnblindingClearanceGrantingService {
  
  /**
   * Returns: 1: if clearance granted / 0: if no realtime response is possible (delayed approval) -1: if a new unblindingToken is required (because the current has expired or has been repressed) / -2: if the access is denied for addressed scope of data
   *
   * @param unblindingToken
   * @param pseudonymsToUnblind
   * @param accessRelatedDetails an optional container that can contain for example the ipadress
   or JWT token of the accessor or some MFA related information
   */
  HasClearanceForUnblinding(unblindingToken : string, pseudonymsToUnblind : string[], accessRelatedDetails : Object) : Promise<number>;
  
}

export interface IAgeEvaluationService {
  
  /**
   * Calculates the age (only the integer Year) of several persons for a given date. This is supporting the very common usecase to evaluate inclusion criteria for research studies where the date of birth is not present alongside of the medical data. It allows for minimalist access disclosing the date of birth information (as happening when unblinding).
   *
   * @param momentOfValuation
   * @param pseudonymesToEvaluate
   */
  EvaluateAge(momentOfValuation : Date, pseudonymesToEvaluate : string[]) : Promise<{ages: number[]}>;
  
}

export interface IImsApiInfoService {
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  GetApiVersion() : Promise<string>;
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'ImsApiInfo', 'Pseudonymization', 'AgeEvaluation', 'Unblinding', 'UnblindingClearanceAwaiter'  (backend workflow for "PASSIVE-APPROVAL"), 'UnblindingClearanceGranting' (backend workflow for "ACTIVE-APPROVAL")
   */
  GetCapabilities() : Promise<string[]>;
  
  /**
   * returns a list of available capabilities ("API:Pseudonymization") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  GetPermittedAuthScopes() : Promise<{authState: number, return: string[]}>;
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  GetOAuthTokenRequestUrl() : Promise<string>;
  
  /**
   * GetExtendedFieldDescriptors
   *
   * @param languagePref Preferred language for the 'DisplayLabel' and 'InputDescription' fields of the returned descriptors.
   ONLY RELEVANT FOR THE UI!
   */
  GetExtendedFieldDescriptors(languagePref? : string) : Promise<Models.ExtendedFieldDescriptor[]>;
  
}

export interface IPseudonymizationService {
  
  /**
   * GetOrCreatePseudonym
   *
   * @param givenName the Firstname a person (named as in the HL7 standard)
   * @param familyName
   * @param birthDate date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
   * @param extendedFields additional values for each 'extendedField' that is mandatory within (and specific to) the current IMS-System. To retrieve the declarations for such fields call 'GetExtendedFieldDescriptors'
   */
  GetOrCreatePseudonym(givenName : string, familyName : string, birthDate : string, extendedFields : Object) : Promise<{pseudonym: string, wasCreatedNewly: boolean, return: boolean}>;
  
  /**
   * GetExisitingPseudonym
   *
   * @param givenName
   * @param familyName
   * @param birthDate date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
   * @param extendedFields additional values for each 'extendedField' that is mandatory within (and specific to) the current IMS-System. To retrieve the declarations for such fields call 'GetExtendedFieldDescriptors'
   */
  GetExisitingPseudonym(givenName : string, familyName : string, birthDate : string, extendedFields : Object) : Promise<{pseudonym: string, return: boolean}>;
  
}

export interface IUnblindingService {
  
  /**
   * Returns: 1: if clearance granted (token can be DIRECTLY used to call 'TryUnblind') / 0: if no realtime response is possible (delayed approval is outstanding) -1: if a new unblindingToken is required (because the current has expired or has been repressed) / -2: if the access is denied for addressed scope of data
   *
   * @param pseudonymsToUnblind
   * @param requestReason
   * @param requestBy
   */
  RequestUnblindingToken(pseudonymsToUnblind : string[], requestReason : string, requestBy : string) : Promise<{unblindingToken: string, return: number}>;
  
  /**
   * Returns: 1: on SUCCESS (unblindedIdentities should contain data) / 0: if no realtime response is possible (delayed approval is outstanding) -1: if a new unblindingToken is required (because the current has expired or has been repressed) / -2: if the access is denied for addressed scope of data
   *
   * @param unblindingToken
   * @param pseudonymsToUnblind
   * @param unblindedIdentities
   */
  TryUnblind(unblindingToken : string, pseudonymsToUnblind : string[], unblindedIdentities : Models.IdentityDetails[]) : Promise<number>;
  
}
