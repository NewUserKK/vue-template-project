import { AxiosResponse } from "axios";
import Result from "@/common/Result";
import { leftOf, rightOf } from "@/common/Either";

export async function handle<ResultType, ResponseType = object | any[]>(
  call: Promise<AxiosResponse<ResponseType>>,
  onSuccess: (result: ResponseType) => Result<ResultType>,
  onFailure: (error: Error) => Result<ResultType> = error => {
    return leftOf(error);
  }
): Promise<Result<ResultType>> {
  try {
    const result = await call;
    return onSuccess(result.data);
  } catch (e) {
    return onFailure(e as Error);
  }
}

export async function handleAsync<ResultType, ResponseType = object | any[]>(
  call: Promise<AxiosResponse<ResponseType>>,
  onSuccess: (result: ResponseType) => Promise<Result<ResultType>>,
  onFailure: (error: Error) => Promise<Result<ResultType>> = async error => {
    return leftOf(error);
  }
): Promise<Result<ResultType>> {
  try {
    const result = await call;
    return await onSuccess(result.data);
  } catch (e) {
    return await onFailure(e as Error);
  }
}

export async function handleSuccess<T>(
  call: Promise<AxiosResponse<T>>
): Promise<Result<T>> {
  return handle(call, result => rightOf(result));
}
