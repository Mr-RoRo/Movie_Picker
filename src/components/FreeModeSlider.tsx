import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Movie } from "../hooks/useTrendingMovies";
import { Genres } from "../hooks/useMoviesGenres";

interface Props {
  Movies?: Movie[];
  MoviesGenres?: Genres;
}

const FreeModeSlider = ({ Movies, MoviesGenres }: Props) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        560: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      freeMode
      navigation
      modules={[FreeMode, Navigation]}
      className="h-[19rem] my-7"
    >
      {Movies?.map((movie) => (
        <SwiperSlide>
          <div className="w-full h-full relative text-white  rounded-3xl overflow-hidden text-lg">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              className=" "
            />
            <span className="bg-black opacity-45 w-full h-full absolute top-0" />
            <h1 className="absolute top-3 left-2 font-extrabold text-lg sm:text-xl lg:text-1xl xl:text-2xl">
              {movie.title}
            </h1>

            <span className="badge badge-lg glass absolute bottom-2 left-2 font-semibold">
              {
                MoviesGenres?.genres.find((gen) =>
                  movie.genre_ids.includes(gen.id)
                )?.name
              }
            </span>
            <span className="badge badge-lg glass absolute bottom-9 left-2 font-semibold">
              {Number(movie.vote_average).toFixed(1)}
            </span>
            <button className="btn btn-primary absolute bottom-2.5 right-2">
              Show Details
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FreeModeSlider;
