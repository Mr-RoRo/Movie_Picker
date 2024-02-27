import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";

const useInfiniteGet = <T>(
  endpoint: string,
  queryKey: string[],
  staleTime?: number
) => {
  const apiClient = new ApiClient<FetchResponse<T>>(endpoint);
  return useInfiniteQuery<FetchResponse<T>, Error>({
    queryKey: queryKey,
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          page: pageParam,
        },
      }),
    staleTime: staleTime,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });
};

export default useInfiniteGet;
