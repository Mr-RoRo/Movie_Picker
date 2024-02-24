import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";


const useGet = <T>(endpoint: string, queryKey: string[]) => {
  const apiClient = new ApiClient<T>(endpoint);
  return useQuery<T, Error>({
    queryKey: queryKey,
    queryFn: apiClient.get,
  });
};

export default useGet;
