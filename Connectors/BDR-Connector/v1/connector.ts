/* based on ORSCF BillingData Contract v1.8.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-billingdata-contract/dtos';
import * as Models from 'orscf-billingdata-contract/models';
import * as Interfaces from 'orscf-billingdata-contract/interfaces';

export class BdrConnector {
  
  private axiosHttpApi: AxiosInstance;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){
  
    if (this.httpPostMethod == null) {
      this.axiosHttpApi = axios.create({ baseURL: this.rootUrlResolver() });
      this.httpPostMethod = (url, requestObject, apiToken) => {
        return this.axiosHttpApi.post(url, requestObject, {
          headers: {
            Authorization: apiToken
          }
        });
      };
    }
    
    
  }
  
  private getRootUrl(): string {
    let rootUrl = this.rootUrlResolver();
    if(rootUrl.endsWith('/')){
      return rootUrl;
    }
    else{
      return rootUrl + '/';
    }
  }
  
}
