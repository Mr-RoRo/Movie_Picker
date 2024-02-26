import Card from "../../components/Card";
import { MovieAndTVshow } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { FetchResponse } from "../../services/ApiClient";
import useGenreStore from "../../store";

const MoviesPage = () => {
  const { data: movies } = useGet<FetchResponse<MovieAndTVshow>>(
    "discover/movie",
    ["movies"]
  );
  const genres = useGenreStore((s) => s.genres);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7">
      <Card
        movies={movies?.results}
        MoviesGenres={genres}
        className="w-60 h-[18.5rem] mx-auto"
      />
    </div>
  );
};

export default MoviesPage;
