import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiClient = new ApiClient<FetchResponse<Movie>>("trending/movie/day");

const useTrendingMovies = () =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["trendingMovies"],
    queryFn: apiClient.get,
    staleTime: 24 * 10 * 10 * 1000, //24h,
  });

export default useTrendingMovies;
