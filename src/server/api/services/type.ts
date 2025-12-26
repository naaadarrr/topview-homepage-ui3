/* eslint-disable */

export interface ITRPCReturn {
    status: string;
    message: string;
    errorMsg?: any;
  }
  
  export type Headers = Record<string, string>;
  
  export interface UidHeaders {
    uid: string;
  }
  
  export interface RequestOptions {
    url?: string;
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
    headers?: Headers;
    data?: any;
    params?: any;
    timeout?: number;
  }
  