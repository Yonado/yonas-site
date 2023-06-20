"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import "../globals.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt=""
            className="w-[300px] h-auto"
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_collection_of_pop_art_illustrations_of_different_types_o_0b8f2548-b7d9-40ae-a652-bd8761029445.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_comic-style_print_of_a_hiker_on_a_mountaintop_with_a_bre_f19b223b-65cd-40d6-bd68-67b88ab39be3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_graphic_depiction_of_a_bicycle_race_with_bold_lines_and__dba0bac4-7278-429b-b5e3-3ce71423dc79.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_pop_art_still_life_of_a_bowl_of_fruit_with_bold_colors_a_941c4f3b-4841-470b-a684-d76cb311a3d6.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_comic_style_figure_of_a_scuba_diver_exploring_the_ocean__061d411f-1ece-498a-8553-d9d06608f572.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_comic-style_figure_of_a_DJ_at_a_music_festival_with_colo_22c63a5a-b1f1-43ae-aca8-69d71cf2aaad.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_pop_art_depiction_of_a_city_skyline_with_bright_lights_a_4fad2110-cf55-434a-ae27-80c578d2c09a.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_pop_art_portrait_of_a_Steve_Jobs_with_a_bold_stylized_lo_64a0308d-e9f6-45a3-b473-c2d502fee021.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            src="https://rhkixjuapchyaczxrtbs.supabase.co/storage/v1/object/public/yona-images/Yona_A_minimalist_portrait_of_a_man_with_a_mustache_and_a_fedor_4c4aeb03-93fd-45f3-8f7b-08287be4db21.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
{
  /* <>
<Swiper
  spaceBetween={50}
  slidesPerView={2}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
  }}
  className="mySwiper text-white font-mono"
>
  {projects.map((project) => (
    <SwiperSlide
      key={project.slug}
      className={`border-2 relative flex justify-center items-center overflow-hidden group hover:bg-[#272727] transition-all transform bg-blend-overlay h-[300px] slide-height `}
      style={{ backgroundImage: `url(${project.mainImage})` }}
    > */
}
