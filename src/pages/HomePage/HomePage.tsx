import FreeModeSlider from "../../components/FreeModeSlider";
import SectionTitle from "../../components/SectionTitle";
import Slider from "../../components/Slider";
import { Genres, Movie } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { FetchResponse } from "../../services/ApiClient";

const HomePage = () => {
  const { data: moviesGenres } = useGet<Genres>("genre/movie/list", [
    "moviesGenres",
  ]);
  const { data: trendingMovies } = useGet<FetchResponse<Movie>>(
    "trending/movie/day",
    ["trendingMovies"]
  );
  const { data: popularMovie } = useGet<FetchResponse<Movie>>("movie/popular", [
    "popularMovies",
  ]);
  const { data: topRatedMovies } = useGet<FetchResponse<Movie>>(
    "movie/top_rated",
    ["topRatedMovies"]
  );
  return (
    <div>
      <Slider Movies={trendingMovies?.results} MoviesGenres={moviesGenres} />
      <SectionTitle Title="Popular" />
      <FreeModeSlider
        Movies={popularMovie?.results}
        MoviesGenres={moviesGenres}
      />
      <SectionTitle Title="TopRated" />
      <FreeModeSlider
        Movies={topRatedMovies?.results}
        MoviesGenres={moviesGenres}
      />
    </div>
  );
};

export default HomePage;
