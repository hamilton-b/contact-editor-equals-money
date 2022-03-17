export interface FetchRequest {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
}

export interface FetchSuccess<T> {
  success: true;
  data: T;
}

export interface FetchFailure {
  success: false;
}

export type FetchResponse<T = undefined> = FetchSuccess<T> | FetchFailure;
