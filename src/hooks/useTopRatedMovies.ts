import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";
import { Movie } from "./useTrendingMovies";

const apiClient = new ApiClient<FetchResponse<Movie>>("movie/top_rated");

const useTopRatedMovies = () =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["upcomingMovies"],
    queryFn: apiClient.get,
  });

export default useTopRatedMovies;
