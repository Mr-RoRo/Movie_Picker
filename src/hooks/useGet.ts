import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import { AxiosRequestConfig } from "axios";

const useGet = <T>(
  endpoint: string,
  queryKey: string[],
  staleTime?: number,
  config?: AxiosRequestConfig
) => {
  const apiClient = new ApiClient<T>(endpoint);
  return useQuery<T, Error>({
    queryKey: queryKey,
    queryFn: () => {
      return apiClient.get(config);
    },
    staleTime: staleTime,
  });
};

export default useGet;
