import Discover from "../../components/Discover";
import { Genres } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { sortedItemsMovies } from "../../store";

const MoviesPage = () => {
  const { data: MoviesGenres } = useGet<{ genres: Genres[] }>(
    "genre/movie/list",
    ["MoviesGenres"]
  );
  return (
    <Discover
      discoverType="movie"
      discoverGenres={MoviesGenres?.genres}
      sortedItems={sortedItemsMovies}
    />
  );
};

export default MoviesPage;
