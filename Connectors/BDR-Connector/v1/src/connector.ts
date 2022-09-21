/* based on ORSCF BillingData Contract v1.8.0.0 */

import axios, { AxiosInstance } from 'axios';

import * as DTOs from 'orscf-billingdata-contract';
import * as Models from 'orscf-billingdata-contract';
import * as Interfaces from 'orscf-billingdata-contract';

export class BdrConnector {
  
  private axiosHttpApi?: AxiosInstance;
  
  constructor(
    private rootUrlResolver: () => string,
    private apiTokenResolver: () => string,
    private httpPostMethod?: (url: string, requestObject: any, apiToken: string) => Promise<any>
  ){
  
    if (!this.httpPostMethod) {
      this.axiosHttpApi = axios.create({ baseURL: this.rootUrlResolver() });
      this.httpPostMethod = (url, requestObject, apiToken) => {
        if(!this.axiosHttpApi) {
          this.axiosHttpApi = axios.create({ baseURL: this.rootUrlResolver() });
        }
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
