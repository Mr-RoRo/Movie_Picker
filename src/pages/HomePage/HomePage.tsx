import { useSearchParams } from "react-router-dom";
import FreeModeSlider from "../../components/FreeModeSlider";
import SectionTitle from "../../components/SectionTitle";
import Slider from "../../components/Slider";
import { Genres, MovieAndTVshow } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { FetchResponse } from "../../services/ApiClient";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const { data: moviesGenres } = useGet<Genres>("genre/movie/list", [
    "moviesGenres",
  ]);
  const { data: trendingMovies } = useGet<FetchResponse<MovieAndTVshow>>(
    "trending/movie/day",
    ["trendingMovies"]
  );
  const { data: popular } = useGet<FetchResponse<MovieAndTVshow>>(
    `${searchParams.get("Popular") === "TVshows" ? "tv" : "movie"}/popular`,
    [
      "popular",
      searchParams.get("Popular") === "TVshows" ? "TVshows" : "Movies",
    ]
  );
  const { data: topRated } = useGet<FetchResponse<MovieAndTVshow>>(
    `${searchParams.get("TopRated") === "TVshows" ? "tv" : "movie"}/top_rated`,
    [
      "topRated",
      searchParams.get("TopRated") === "TVshows" ? "TVshows" : "Movies",
    ]
  );

  return (
    <div>
      <Slider Movies={trendingMovies?.results} MoviesGenres={moviesGenres} />
      <SectionTitle Title="Popular" />
      <FreeModeSlider data={popular?.results} MoviesGenres={moviesGenres} />
      <SectionTitle Title="TopRated" />
      <FreeModeSlider data={topRated?.results} MoviesGenres={moviesGenres} />
    </div>
  );
};

export default HomePage;
