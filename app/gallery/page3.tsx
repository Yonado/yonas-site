"use client";

import Image from "next/legacy/image";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import supabase from "./../utils/supabase";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  created_at: string;
};

async function fetchData() {
  const { data, error } = await supabaseAdmin.from("images").select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return;
  }

  console.log("Fetched data:", data);
  return data;
}
export default function Gallery({ images }: { images: Image[] }) {
  const [fetchedImages, setFetchedImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const selectedImageRef = useRef<HTMLDivElement>(null);

  const handleClickImage = (image: Image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    async function fetchDataFromSupabase() {
      const fetchedImages = await fetchData();
      setFetchedImages(fetchedImages);
    }
    fetchDataFromSupabase();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedImageRef.current &&
        !selectedImageRef.current.contains(event.target as Node) &&
        event.target !== selectedImageRef.current
      ) {
        setSelectedImage(null);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="max-w-2xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols 2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {fetchedImages?.map((image) => (
          <div key={image.id} onClick={() => handleClickImage(image)}>
            <BlurImage image={image} />
          </div>
        ))}

        {/* onClick={() => handleClickImage(image)} */}

        {selectedImage && (
          <div className="hidden sm:flex fixed inset-0  items-center justify-center bg-black bg-opacity-75">
            <div
              ref={selectedImageRef}
              className=" md:max-w-4xl mx-auto p-5 bg-opacity-75"
            >
              <div className="relative aspect-h-1 overflow-hidden w-full">
                <div className="image-container md:w-[512px] md:h-[512px] aspect-w-1 aspect-h-1">
                  <Image
                    src={selectedImage.imageSrc}
                    alt={selectedImage.name}
                    layout="fill"
                    objectFit="contain"
                    className="image-content w-[100%] h-[100%]"
                  />
                </div>
              </div>
              <div className="text-white mt-4 text-left">
                <h3 className="text-lg font-medium uppercase">
                  {selectedImage.name}
                </h3>
                <p className="text-gray-400">{selectedImage.href}</p>
              </div>
              {/* Additional content or buttons */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <a href="#" className="group bg-black m-4">
      <div className="aspect-w-1 aspect-h-1	w-full overflow-hidden rounded-lg bg-gray-900">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          //   className="group-hover:opacity-75"

          className={cn(
            "md:group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-200">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-400">{image.href}</p>
    </a>
  );
}
