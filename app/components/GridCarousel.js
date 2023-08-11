// "use client";

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper";

// const GridCarousel = () => {
//   return (
//     <>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={2}
//         className="mySwiper text-white font-mono"
//       >
//         <SwiperSlide className="border-2 relative flex justify-center items-center">
//           Slide
//           <div className="absolute bottom-0 left-0 w-full text-center  p-3 bg-gray-800 bg-opacity-75">
//             Title
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="border-2 relative flex justify-center items-center">
//           Slide
//           <div className="absolute bottom-0 left-0 w-full text-center  p-3 bg-gray-800 bg-opacity-75">
//             Title
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="border-2 relative flex justify-center items-center">
//           Slide
//           <div className="absolute bottom-0 left-0 w-full text-center  p-3 bg-gray-800 bg-opacity-75">
//             Title
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="border-2 relative flex justify-center items-center">
//           Slide
//           <div className="absolute bottom-0 left-0 w-full text-center  p-3 bg-gray-800 bg-opacity-75">
//             Title
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default GridCarousel;

"use client";

import React, { useRef, useState } from "react";
import Link from "next/link"; // Import the Link component from Next.js

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "../swiper-bundle.css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const GridCarousel = () => {
  const projects = [
    // Define an array of projects with their respective data
    {
      slug: "project-1",
      title: "Colgate Demo Site",
      objectives: "Experting CSS and a style of a company.",
      thoughts: "Exploring the style of Colgate.",
      mainImage: "/mockups/colgate1.png",
    },
    {
      slug: "project-2",
      title: "Reroom",
      objectives: "Exploring the AI and it's possibilities.",
      thoughts:
        "The AI revolution will change the world. But how? This might be one way.",
      mainImage: "",
    },
    {
      slug: "project-3",
      title: "The Jewish Project",
      objectives: "Exploring the AI and it's possibilities.",
      thoughts: "How would an AI Rabbi answer?",
      mainImage: "/mockups/jewish1.png",
    },
    {
      slug: "project-4",
      title: "Segal Demo Site",
      objectives:
        "Using a database to display different items, making a responsive design.",
      thoughts: "From wine to design, an exploration of Segal.",
      mainImage: "/mockups/segal1.png",
    },

    // Add more projects as needed
  ];

  return (
    <>
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
            className={`border-2 relative flex justify-center items-center overflow-hidden group hover:bg-[#272727] transition-all transform bg-blend-overlay  slide-height `}
            style={{ backgroundImage: `url(${project.mainImage})` }}
          >
            <Link href={`/projects/${project.slug}`} projects={projects}>
              {/* Wrap the content inside the SwiperSlide with the Link component */}
              <div className="p-4">{project.title}</div>
              <div className="absolute bottom-0 md:translate-y-10 md:group-hover:translate-y-0 transform duration-100 left-0 w-full text-center p-3 bg-gray-800 bg-opacity-75">
                {project.thoughts}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GridCarousel;
