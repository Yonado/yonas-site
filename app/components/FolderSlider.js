import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Grid } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../globals.css";

const FolderSlider = ({ folders, fetchImages }) => {
  return (
    <Swiper
      grid={{
        rows: 2,
      }}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
      }}
      //   pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper w-full"
    >
      {folders.map((folderData) => (
        <SwiperSlide
          key={folderData.folderName}
          className="border  items-center slide justify-center flex p-4 rounded-r-md"
        >
          <a
            href={`#${folderData.folderName}`}
            className="text-xl md:text-4xl font-['Playfair_Display'] tracking-wide"
          >
            {folderData.folderName}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FolderSlider;
