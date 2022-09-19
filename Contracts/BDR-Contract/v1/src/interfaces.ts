/* based on ORSCF BillingData Contract v1.8.0.0 */

import * as Models from './models';

export interface IBdrApiInfoService {
  
  /**
   * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
   */
  GetApiVersion() : Promise<string>;
  
  /**
   * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'ExecutorBilling', 'SponsorBilling'
   */
  GetCapabilities() : Promise<string[]>;
  
  /**
   * returns a list of available capabilities ("API:ExecutorBilling") and/or data-scopes ("Site:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
   */
  GetPermittedAuthScopes() : Promise<{authState: number, return: string[]}>;
  
  /**
   * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
   */
  GetOAuthTokenRequestUrl() : Promise<string>;
  
}

export interface IExecutorBillingService {
  
}

export interface ISponsorBillingService {
  
}
