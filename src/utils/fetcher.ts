import {
  FetchRequest,
  FetchResponse,
  FetchSuccess,
} from "~/models/FetchRequest";

export const fetcher = async <T = undefined>({
  path,
  method,
  body,
}: FetchRequest): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_HOST}${path}`, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 200 || response.status > 399) {
      return {
        success: false,
      };
    } 
    
    return {
      success: true,
      data: await response.json(),
    }; 
  } catch {
    return {
      success: false,
    };
  }
};

export const isSuccessResponse = <T extends unknown>(
  res: FetchResponse<T>
): res is FetchSuccess<T> => res.success === true;
