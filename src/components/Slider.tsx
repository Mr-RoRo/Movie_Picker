import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Movie } from "../hooks/useTrendingMovies";
import { Genres } from "../hooks/useMoviesGenres";

interface Props {
  Movies?: Movie[];
  MoviesGenres?: Genres;
}

const Slider = ({ Movies, MoviesGenres }: Props) => {
  return (
    <Swiper
      pagination
      navigation
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      className="h-[20rem] sm:h-[23rem] lg:h-[25rem] xl:h-[31rem] rounded-3xl"
    >
      {Movies?.map((movie) => (
        <SwiperSlide>
          <div className="w-[100%] h-[100%] relative text-white text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
              className="w-[100%] h-[100%] object-cover "
            />
            <span className="bg-black opacity-25 w-[100%] h-[100%] absolute top-0" />
            <h1 className="absolute top-8 left-6 font-extrabold text-xl sm:text-3xl lg:text-4xl xl:text-5xl">
              {movie.title}
            </h1>
            <h2 className="absolute bottom-8 left-6 font-semibold">
              {Number(movie.vote_average).toFixed(1)}
            </h2>
            <div className="flex flex-col absolute bottom-8 right-6 font-semibold">
              {
                MoviesGenres?.genres.find((gen) =>
                  movie.genre_ids.includes(gen.id)
                )?.name
              }
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
