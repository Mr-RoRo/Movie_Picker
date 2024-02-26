import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import { MovieAndTVshow } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { FetchResponse } from "../../services/ApiClient";
import { useGenreStore, useSearch } from "../../store";

const MoviesPage = () => {
  const search = useSearch((s) => s.search);

  const { data: movies } = useGet<FetchResponse<MovieAndTVshow>>(
    "discover/movie",
    ["movies"]
  );

  const { data: SearchedMovies, isLoading } = useGet<
    FetchResponse<MovieAndTVshow>
  >(`search/movie`, ["SearchedMovies", search], 60 * 1000, {
    params: {
      query: search,
    },
  });

  const genres = useGenreStore((s) => s.genres);
  return (
    <div className="flex flex-col gap-5">
      <SearchBar />
      {isLoading ? (
        <span className="loading loading-infinity loading-lg self-center"></span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7">
          <Card
            movies={search ? SearchedMovies?.results : movies?.results}
            MoviesGenres={genres}
            className="w-60 h-[18.5rem] mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
