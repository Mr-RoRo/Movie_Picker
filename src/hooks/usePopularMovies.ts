import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";
import { Movie } from "./useTrendingMovies";

const apiClient = new ApiClient<FetchResponse<Movie>>("movie/popular");

const usePopularMovies = () =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["PopularMovies"],
    queryFn: apiClient.get,
  });

export default usePopularMovies;
