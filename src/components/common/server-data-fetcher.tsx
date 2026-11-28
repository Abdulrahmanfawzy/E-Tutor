import type { ReactNode } from "react";

interface ServerDataFetcherProps<T> {
  fetcherFn: () => Promise<T>;
  children: (payload: T) => ReactNode;
  errorFallback?: (error: unknown) => ReactNode;
}

type FetchResult<T> =
  | { success: true; payload: T }
  | { success: false; error: unknown };

export default async function ServerDataFetcher<T>({
  fetcherFn,
  children,
  errorFallback,
}: ServerDataFetcherProps<T>) {
  let result: FetchResult<T>;

  try {
    result = {
      success: true,
      payload: await fetcherFn(),
    };
  } catch (error) {
    result = {
      success: false,
      error,
    };
  }

  if (!result.success) {
    if (errorFallback) {
      return <>{errorFallback(result.error)}</>;
    }

    throw result.error;
  }

  return <>{children(result.payload)}</>;
}
