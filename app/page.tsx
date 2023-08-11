import Image from "next/legacy/image";
import Carousel from "./components/Carousel";
import VideoHeader from "./components/VideoHeader";
import GridCarousel from "./components/GridCarousel";
import React, { Suspense } from "react";
import Loading from "./loading";
import "./swiper-bundle.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <VideoHeader />

      <div className="flex flex-col md:flex-row w-full md:p-24 font-['Playfair_Display'] md:gap-10 ">
        <div className="md:w-[250px]  md:break-all md:text-[250px] text-center md:leading-[190px] text-[80px] tracking-widest md:tracking-none ">
          CODE
        </div>
        <div className="grid grid-cols-2 md:flex flex-col md:gap-10 md:max-w-[80%]">
          <div className="md:text-[70px] md:leading-[80%] md:tracking-tighter md:w-[344px] text-[24px] leading-[90%] pl-4">
            First, solve the problem.
          </div>
          <div className="text-[16px] leading-[140%] md:text-[32px] md:leading-[90%] font-sans font-thin">
            As an enthusiast of AI and design, I embrace the opportunity to find
            clever solutions. With a sprinkle of creativity and a knack for
            problem-solving, I delve into the world of coding, determined to
            conquer any challenge. Carefully crafting each line, I merge the
            beauty of design with the potential of AI, creating a solution that
            seamlessly combines functionality and visual appeal. So, rest
            assured, my friend, together we'll embark on this coding adventure,
            transforming obstacles into exciting opportunities for innovation.
          </div>
          <div className="w-[100%] flex col-span-2 p-4 md:p-0 mb-10">
            <GridCarousel />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <a href="/gallery" className="">
            <Carousel />
          </a>
        </div>
        <div className="mt-[-160px] md:m-0 font-['Playfair_Display'] text-[100px] leading-[80px] lg:text-[180px] lg:leading-[140px] lg:ml-[-130px] lg:mt-[-140px] z-50 md:text-[#ffffff85] md:hover:text-[#ffffff] transition-all transform duration-200  group">
          <a href="/gallery" className="">
            D<br></br>ESIGN
          </a>
        </div>
      </div>
    </div>
  );
}
