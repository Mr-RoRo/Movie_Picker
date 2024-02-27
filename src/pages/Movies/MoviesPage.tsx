import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import { MovieAndTVshow } from "../../hooks/types";
import useInfiniteGet from "../../hooks/useInfiniteGet";
import { useFilter, useGenreStore, useSearch } from "../../store";

const MoviesPage = () => {
  const search = useSearch((s) => s.search);
  const genres = useGenreStore((s) => s.genres);
  const { releaseYear, scoreDown, scoreUp, genre, sortBy, submit } =
    useFilter();

  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteGet<MovieAndTVshow>(
    `discover/movie?primary_release_year=${releaseYear}&vote_average.lte=${scoreDown}&vote_average.gte=${scoreUp}&with_genres=${genre}&sort_by=${sortBy}`,
    ["movies", submit]
  );

  const {
    data: searchedMovies,
    isLoading,
    hasNextPage: searchedMoviesHasNextPage,
    fetchNextPage: searchedMoviesNextPage,
  } = useInfiniteGet<MovieAndTVshow>(`search/movie?query=${search}`, [
    "SearchedMovies",
    search,
  ]);

  return (
    <div className="flex flex-col gap-5">
      <SearchBar />
      {isLoading ? (
        <span className="loading loading-infinity loading-lg self-center"></span>
      ) : (
        <InfiniteScroll
          dataLength={
            searchedMovies?.pages[0].total_results
              ? searchedMovies.pages.length || 1
              : movies?.pages.length || 1
          }
          hasMore={
            searchedMovies?.pages[0].total_results
              ? searchedMoviesHasNextPage
              : hasNextPage
          }
          next={
            searchedMovies?.pages[0].total_results
              ? searchedMoviesNextPage
              : fetchNextPage
          }
          loader={
            <span className="loading loading-infinity loading-lg self-center"></span>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7 mt-3">
            {(searchedMovies?.pages[0].total_results
              ? searchedMovies
              : movies
            )?.pages.map((movie) => (
              <Card
                movies={movie.results}
                MoviesGenres={genres}
                className="w-60 h-[18.5rem] mx-auto"
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default MoviesPage;
