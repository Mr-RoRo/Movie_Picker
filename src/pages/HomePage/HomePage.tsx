import { useSearchParams } from "react-router-dom";
import FreeModeSlider from "../../components/FreeModeSlider";
import SectionTitle from "../../components/SectionTitle";
import Slider from "../../components/Slider";
import { Genres, MovieAndTVshow } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { FetchResponse } from "../../services/ApiClient";
import DividerSectionTitle from "../../components/DividerSectionTitle";
import { useGenreStore } from "../../store";

const HomePage = () => {
  //get genres list
  getGenres();

  const [searchParams] = useSearchParams();

  //get trending movies and tv shows
  const { data: trendingMovies } = useGet<FetchResponse<MovieAndTVshow>>(
    "trending/movie/day",
    ["trendingMovies"],
    24 * 10 * 10 * 1000
  );
  const { data: trendingTVshows } = useGet<FetchResponse<MovieAndTVshow>>(
    "trending/tv/day",
    ["trendingTVshows"],
    24 * 10 * 10 * 1000
  );

  //get popular movies and tv shows
  const { data: popular, isLoading: popularLoading } = useGet<
    FetchResponse<MovieAndTVshow>
  >(
    `${searchParams.get("Popular") === "TVshows" ? "tv" : "movie"}/popular`,
    [
      "popular",
      searchParams.get("Popular") === "TVshows" ? "TVshows" : "Movies",
    ],
    24 * 10 * 10 * 1000
  );

  //get topRated movies and tv shows
  const { data: topRated, isLoading: topRatedLoading } = useGet<
    FetchResponse<MovieAndTVshow>
  >(
    `${searchParams.get("TopRated") === "TVshows" ? "tv" : "movie"}/top_rated`,
    [
      "topRated",
      searchParams.get("TopRated") === "TVshows" ? "TVshows" : "Movies",
    ],
    48 * 10 * 10 * 1000
  );

  return (
    <div>
      <DividerSectionTitle Title={"Trending Movies"} className="mb-10 mt-0" />
      <Slider data={trendingMovies?.results} />
      <SectionTitle Title="Popular" />
      <FreeModeSlider
        data={popular?.results}
        isLoading={popularLoading}
        typeSlider={
          searchParams.get("Popular") === "TVshows" ? "TVshows" : "Movies"
        }
      />
      <DividerSectionTitle Title={"Trending TVshows"} className="my-10" />
      <Slider data={trendingTVshows?.results} />
      <SectionTitle Title="TopRated" />
      <FreeModeSlider
        data={topRated?.results}
        isLoading={topRatedLoading}
        typeSlider={
          searchParams.get("Popular") === "TVshows" ? "TVshows" : "Movies"
        }
      />
    </div>
  );
};

export default HomePage;

const getGenres = () => {
  const setGenres = useGenreStore((s) => s.setGenres);
  setGenres([]); // clear initial genres
  const { data: moviesGenres, isFetched: isMoviesGenreFetched } = useGet<{
    genres: Genres[];
  }>("genre/movie/list", ["moviesGenres"]);
  const { data: tvshowsGenres, isFetched: isTVshowsGenreFetched } = useGet<{
    genres: Genres[];
  }>("genre/tv/list", ["tvshowsGenres"]);

  if (isMoviesGenreFetched) setGenres(moviesGenres?.genres!);

  if (isTVshowsGenreFetched) setGenres(tvshowsGenres?.genres!);
};
