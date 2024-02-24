import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

export interface Genres {
  genres: {
    id: number;
    name: string;
  }[];
}

const apiClient = new ApiClient<Genres>("genre/movie/list");

const useMoviesGenres = () =>
  useQuery<Genres, Error>({
    queryKey: ["Genres"],
    queryFn: apiClient.get,
    staleTime: 48 * 10 * 10 * 1000, //48h,
  });

export default useMoviesGenres;
