"use client";

import React, { useState, useRef } from "react";
import Image from "next/legacy/image";

const heartSvg2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Like"
    className="_8-yf5"
    fill="#ffffff"
    height="24"
    viewBox="0 0 48 48"
    width="24"
    version="1.1"
    id="svg82"
    data-name="Layer 1"
  >
    <path
      clipRule="evenodd"
      d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
      fillRule="evenodd"
    />
  </svg>
);

const SelectedImageModal = ({
  selectedImage,
  likesCount,
  setLikesCount,
  handleLikeClick,
  isLiked,
  heartSvg,
  selectedImageRef,
}) => {
  return (
    selectedImage && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 cursor-default">
        <div
          className="md:max-w-4xl mx-auto p-5 bg-opacity-75 w-screen "
          ref={selectedImageRef}
        >
          <div className="relative">
            <div className="image-container h-[400px] aspect-h-1">
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                layout="fill"
                objectFit="contain"
                className="image-content"
              />
            </div>
          </div>
          <div className="text-white mt-4 text-left flex-col flex md:flex-row items-center justify-between md:max-w-[100%] mx-auto">
            <h3 className="text-3xl text-center md:text-left  text-gray-200 font-medium font-['Playfair_Display'] w-full">
              {/* {selectedImage.name} */}
            </h3>
            {/* <p className="text-gray-400">{selectedImage.href}</p> */}
            <div
              onClick={handleLikeClick}
              className={`like-button mt-2 p-4 rounded-lg  justify-center items-center  transition-all flex gap-4 cursor-pointer max-w-48   ${
                isLiked ? "bg-red-500 bg-opacity-60" : "bg-white bg-opacity-20"
              } text-white`}
            >
              {heartSvg2}
              <p className="text-gray-400 text-base">{likesCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SelectedImageModal;
