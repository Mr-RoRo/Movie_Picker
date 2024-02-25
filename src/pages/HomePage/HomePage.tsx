import { useSearchParams } from "react-router-dom";
import FreeModeSlider from "../../components/FreeModeSlider";
import SectionTitle from "../../components/SectionTitle";
import Slider from "../../components/Slider";
import { Genres, MovieAndTVshow } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { FetchResponse } from "../../services/ApiClient";
import DividerSectionTitle from "../../components/DividerSectionTitle";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const { data: moviesGenres } = useGet<Genres>("genre/movie/list", [
    "moviesGenres",
  ]);
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
      <DividerSectionTitle Title={"Trending Movies"} />
      <Slider data={trendingMovies?.results} MoviesGenres={moviesGenres} />
      <SectionTitle Title="Popular" />
      <FreeModeSlider
        data={popular?.results}
        MoviesGenres={moviesGenres}
        isLoading={popularLoading}
      />
      <DividerSectionTitle Title={"Trending TVshows"} />
      <Slider data={trendingTVshows?.results} MoviesGenres={moviesGenres} />
      <SectionTitle Title="TopRated" />
      <FreeModeSlider
        data={topRated?.results}
        MoviesGenres={moviesGenres}
        isLoading={topRatedLoading}
      />
    </div>
  );
};

export default HomePage;
