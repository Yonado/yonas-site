"use client";

import Image from "next/legacy/image";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import supabase from "./../utils/supabase";
import SelectedImageModal from "../components/SelectedImageModal";
import Loading from "../components/loadingComponent";
import { Grid } from "react-loader-spinner";

const heartSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Like"
    className="_8-yf5"
    fill="#262626"
    height="18"
    viewBox="0 0 48 48"
    width="18"
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

const supabaseAdmin = createClient(
  process.env["NEXT_PUBLIC_SUPABASE_URL"] || "",
  process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] || ""
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
  src: string;
  likesCount: number;
};

interface GalleryProps {
  images: Image[];
}

async function fetchLikesForImage(imageId: number): Promise<number | null> {
  try {
    const { data, error } = await supabase
      .from("image_likes")
      .select("likes", { count: "exact" })
      .eq("image_id", imageId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching likes count:", error);
      return null;
    }

    if (data) {
      return data.likes;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching likes count:", error);
    return null;
  }
}

async function fetchData() {
  const { data: imageMetadata, error: storageError } =
    await supabaseAdmin.storage.from("yona-images").list();

  if (storageError) {
    console.error("Error fetching image metadata:", storageError);
    return [];
  }

  const url = supabaseAdmin.storage.from("yona-images");

  const images = imageMetadata
    .filter((item) => item.name !== ".emptyFolderPlaceholder")
    .map(async (item) => {
      const imageUrl = await url.getPublicUrl(item.name);
      const likesCount = await fetchLikesForImage(parseInt(item.id, 10));
      return {
        id: item.id,
        name: item.name,
        src: imageUrl.data.publicUrl,
        likesCount: likesCount || 0,
      };
    });

  // Wait for all the Promises to resolve
  const fetchedImages = await Promise.all(images);

  // Sort the fetched images by likesCount in descending order
  fetchedImages.sort((a, b) => b.likesCount - a.likesCount);

  console.log("Fetched images:", fetchedImages);
  return fetchedImages;
}

export default function Gallery() {
  const [fetchedImages, setFetchedImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const selectedImageRef = useRef<HTMLDivElement>(null);
  const [selectedImageLikes, setSelectedImageLikes] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Change the delay time (in milliseconds) as per your requirement
  // }, []);

  // Call the fetchData function directly when the component is rendered
  useEffect(() => {
    fetchData().then((fetchedImages) => {
      setLoading(true);
      const transformedImages = fetchedImages.map((item) => ({
        id: parseInt(item.id, 10), // Convert id to a number using parseInt
        name: item.name,
        src: item.src,
        likesCount: item.likesCount,
        href: "", // Add href property if applicable
        imageSrc: "", // Add imageSrc property if applicable
        created_at: "", // Add created_at property if applicable
      }));
      setFetchedImages(transformedImages);
      setLoading(false);
    });
  }, []);

  const handleClickImage = async (image: Image) => {
    setSelectedImage(image);
  };

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
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {loading ? (
        <div className="flex items-center justify-center">
          <Grid
            height="80"
            width="80"
            color="#ffffff"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 select-none">
          {fetchedImages.map((image) => (
            <div key={image.id} className="cursor-pointer">
              <BlurImage
                image={image}
                // onLikeUpdate={handleLikeUpdate}
                handleClickImage={handleClickImage}
                selectedImageLikes={selectedImageLikes}
                setSelectedImageLikes={setSelectedImageLikes}
                likesCount={image.likesCount}
                selectedImageRef={selectedImageRef}
                selectedImage={selectedImage}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
type BlurImageProps = {
  image: Image;
  // onLikeUpdate: (newLikesCount: number) => void;
  handleClickImage: (image: Image, event: React.MouseEvent) => Promise<void>;
  selectedImageLikes: number;
  setSelectedImageLikes: (likesCount: number) => void;
  likesCount: number;
  selectedImageRef: React.RefObject<any>;
  selectedImage: Image;
};

function BlurImage({
  image,
  // onLikeUpdate,
  handleClickImage,
  selectedImageLikes,
  selectedImage,
  setSelectedImageLikes,
  selectedImageRef,
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [likesCount, setLikesCount] = useState<number>(
    (image as { likesCount?: number }).likesCount || 0
  );
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetchLikesCount();
  }, [image.id]);

  useEffect(() => {
    const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
    setIsLiked(likedImages.includes(image.id));
  }, []);

  const fetchLikesCount = async () => {
    try {
      const { data, error } = await supabase
        .from("image_likes")
        .select("likes")
        .eq("image_id", image.id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching likes count:", error);
      } else {
        const newLikesCount = data?.likes || 0;
        // onLikeUpdate(newLikesCount); // Update the likes count using the prop
      }
    } catch (error) {
      console.error("Error fetching likes count:", error);
    }
  };

  const handleLikeClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    try {
      const newLikesCount = isLiked ? likesCount - 1 : likesCount + 1;

      const { error } = await supabase.from("image_likes").upsert(
        [
          {
            image_id: image.id,
            likes: newLikesCount,
          },
        ],
        { onConflict: "image_id", count: "exact" }
      );

      if (error) {
        console.error("Error updating likes count:", error);
      } else {
        setLikesCount(newLikesCount);
        setIsLiked(!isLiked);
        // if (typeof onLikeUpdate === "function") {
        //   onLikeUpdate(newLikesCount);
        // }

        const likedImages =
          JSON.parse(localStorage.getItem("likedImages")) || [];
        const updatedLikedImages = isLiked
          ? likedImages.filter((id) => id !== image.id)
          : [...likedImages, image.id];
        localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));

        setSelectedImageLikes(newLikesCount); // Update selected image likes in Gallery component
      }
    } catch (error) {
      console.error("Error updating likes count:", error);
    }
  };

  return (
    <div className="group bg-black m-4 select-none relative">
      <div
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-900 relative"
        onClick={(event) => handleClickImage(image, event)}
      >
        <div className="absolute inset-0">
          <Image
            alt=""
            src={image.src}
            layout="fill"
            objectFit="cover"
            className={cn(
              "md:group-hover:opacity-75 duration-700 ease-in-out",
              isLoading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            )}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center">
        {/* <h3 className="text-sm text-gray-200">{image.name}</h3> */}
        <p className="text-lg font-medium text-gray-400">{image.href}</p>
        <div
          onClick={handleLikeClick}
          className={`like-button mt-2 p-2 rounded-full justify-center items-center absolute top-2 left-2 transition-all   ${
            isLiked ? "bg-red-500 bg-opacity-60" : "bg-white bg-opacity-20"
          } text-white`}
        >
          {heartSvg}
        </div>
        <p className="text-sm font-medium text-gray-400">{likesCount}</p>
      </div>
      {selectedImage === image && ( // Only render if the current image is the selected image
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <SelectedImageModal
            selectedImage={selectedImage}
            likesCount={likesCount}
            setLikesCount={setLikesCount}
            handleLikeClick={handleLikeClick}
            isLiked={isLiked}
            heartSvg={heartSvg}
            selectedImageRef={selectedImageRef}
          />
        </div>
      )}
    </div>
  );
}
export type { GalleryProps };
export type { Image };
