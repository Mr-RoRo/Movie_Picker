import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      pagination
      navigation
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      className="h-96 rounded-3xl"
    >
      <SwiperSlide className="bg-red-200"></SwiperSlide>
      <SwiperSlide className="bg-red-300"></SwiperSlide>
      <SwiperSlide className="bg-red-400"></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
