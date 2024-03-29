import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { AsyncImage } from "loadable-image";
import { MovieAndTVshow } from "../hooks/types";
import { useGenreStore } from "../store";
import { Link } from "react-router-dom";

interface Props {
  data?: MovieAndTVshow[];
  isLoading?: boolean;
  typeSlider: string | null;
}

const FreeModeSlider = ({ data, isLoading, typeSlider }: Props) => {
  const genres = useGenreStore((s) => s.genres);
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        478: {
          slidesPerView: 2,
        },
        560: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      freeMode
      navigation
      modules={[FreeMode, Navigation]}
      className="h-[18.5rem]"
    >
      {isLoading &&
        [1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <div className="skeleton w-full h-[19rem]"></div>
          </SwiperSlide>
        ))}
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-full h-full relative text-white  rounded-3xl overflow-hidden text-lg">
            <AsyncImage
              src={"https://image.tmdb.org/t/p/w300" + item.poster_path}
              loader={<div className="skeleton " />}
              className="w-full h-full"
              style={{ objectFit: "fill" }}
            />
            <span className="bg-black opacity-25 w-full h-full absolute top-0" />
            <h1 className="absolute top-3 left-2 font-extrabold text-lg sm:text-xl lg:text-1xl xl:text-2xl">
              {item.title || item.name}
            </h1>

            <span className="badge badge-lg glass absolute bottom-2 left-2 font-semibold">
              {genres.find((gen) => item.genre_ids.includes(gen.id))?.name}
            </span>
            <span className="badge badge-lg glass absolute bottom-9 left-2 font-semibold">
              {Number(item.vote_average).toFixed(1)}
            </span>
            <Link to={`${typeSlider}/${item.id}`}>
              <button className="btn glass absolute bottom-2.5 right-2">
                Show Details
              </button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FreeModeSlider;
