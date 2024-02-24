import Slider from "../../components/Slider";
import useMoviesGenres from "../../hooks/useMoviesGenres";
import useTrendingMovies from "../../hooks/useTrendingMovies";

const HomePage = () => {
  const { data: trendingMovies } = useTrendingMovies();
  const { data: moviesGenres } = useMoviesGenres();
  return (
    <div>
      <Slider Movies={trendingMovies?.results} MoviesGenres={moviesGenres} />
    </div>
  );
};

export default HomePage;
