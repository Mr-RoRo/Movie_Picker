import FreeModeSlider from "../../components/FreeModeSlider";
import Slider from "../../components/Slider";
import useMoviesGenres from "../../hooks/useMoviesGenres";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";

const HomePage = () => {
  const { data: trendingMovies } = useTrendingMovies();
  const { data: moviesGenres } = useMoviesGenres();
  const { data: popularMovie } = usePopularMovies();
  return (
    <div>
      <Slider Movies={trendingMovies?.results} MoviesGenres={moviesGenres} />
      <FreeModeSlider
        Movies={popularMovie?.results}
        MoviesGenres={moviesGenres}
      />
    </div>
  );
};

export default HomePage;
