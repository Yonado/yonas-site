"use client";

import { useEffect, useState } from "react";

const VideoHeader = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoSources = [
      "bluesmoke (1).mp4",
      "fire2 (1) (1).mp4",
      "jellyfish (1) (1).mp4",
    ];
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    const randomSource = videoSources[randomIndex];
    setVideoSrc(randomSource);
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative z-50">
      {videoSrc && (
        <video
          className={`w-full h-full ${videoLoaded ? "" : "hidden"}`}
          src={videoSrc}
          autoPlay
          loop
          muted
          preload="none"
          onLoadedData={handleVideoLoaded}
        ></video>
      )}
      <div
        className={`main-text absolute top-0 left-0 mix-blend-multiply bg-black w-full h-full lg:leading-[600px] sm:leading-[300px] lg:text-[600px] md:text-[350px] sm:text-[240px] text-[140px] m-0 break-normal select-none text-center ${
          videoLoaded ? "" : "hidden"
        }`}
      >
        YONA
      </div>
    </div>
  );
};

export default VideoHeader;
