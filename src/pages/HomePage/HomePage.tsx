import FreeModeSlider from "../../components/FreeModeSlider";
import Slider from "../../components/Slider";
import useMoviesGenres from "../../hooks/useMoviesGenres";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useUpcomingMovies from "../../hooks/useTopRatedMovies";

const HomePage = () => {
  const { data: trendingMovies } = useTrendingMovies();
  const { data: moviesGenres } = useMoviesGenres();
  const { data: popularMovie } = usePopularMovies();
  const { data: upcomingMovies } = useUpcomingMovies();
  return (
    <div>
      <Slider Movies={trendingMovies?.results} MoviesGenres={moviesGenres} />
      <FreeModeSlider
        Movies={popularMovie?.results}
        MoviesGenres={moviesGenres}
      />
      <FreeModeSlider
        Movies={upcomingMovies?.results}
        MoviesGenres={moviesGenres}
      />
    </div>
  );
};

export default HomePage;
