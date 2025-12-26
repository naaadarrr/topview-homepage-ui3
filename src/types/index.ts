export interface RequestOptions {
  url?: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  headers?: Headers;
  data?: any;
  params?: any;
  timeout?: number;
}

export interface Headers {
  [header: string]: string;
}


