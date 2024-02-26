import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AsyncImage } from "loadable-image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MovieAndTVshow } from "../hooks/types";
import useGenreStore from "../store";

const Slider = ({ data }: { data?: MovieAndTVshow[] }) => {
  const genres = useGenreStore((s) => s.genres);
  return (
    <Swiper
      pagination
      navigation
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      className="h-[15rem] sm:h-[23rem] lg:h-[25rem] xl:h-[31rem] rounded-3xl"
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-[100%] h-[100%] flex flex-col- gap-12  text-white sm:text-2xl lg:text-3xl xl:text-4xl">
            <AsyncImage
              src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
              loader={<div className="skeleton " />}
              className="w-full h-full"
            />
            <span className="bg-black opacity-25 w-[100%] h-[100%] absolute top-0" />
            <div className="w-full h-full absolute flex flex-col gap-2 p-6 justify-end">
              <div className="  flex gap-6">
                <div className="flex gap-1 items-center font-semibold">
                  <FaStar className="text-primary" />
                  {Number(item.vote_average).toFixed(1)}
                </div>
                <div className="flex gap-1 items-center font-semibold">
                  <BiSolidCategory className="text-primary" />
                  {genres.find((gen) => item.genre_ids.includes(gen.id))?.name}
                </div>
                <div className="flex gap-1 items-center font-semibold">
                  <MdDateRange className="text-primary" />
                  {item.release_date || item.first_air_date}
                </div>
              </div>
              <h1 className=" font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl">
                {item.title || item.name}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
