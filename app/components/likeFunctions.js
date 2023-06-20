// import {useState} from

// export const handleLikeClick = async (event) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [likesCount, setLikesCount] = useState(image.likesCount);
//     const [isLiked, setIsLiked] = useState(false);

//   event.stopPropagation();
//   try {
//     const newLikesCount = isLiked ? likesCount - 1 : likesCount + 1;

//     const { error } = await supabase.from("image_likes").upsert(
//       [
//         {
//           image_id: image.id,
//           likes: newLikesCount,
//         },
//       ],
//       { onConflict: ["image_id"], count: "excluded.likes" }
//     );

//     if (error) {
//       console.error("Error updating likes count:", error);
//     } else {
//       setLikesCount(newLikesCount);
//       setIsLiked(!isLiked);
//       if (typeof onLikeUpdate === "function") {
//         onLikeUpdate(newLikesCount);
//       }

//       const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
//       const updatedLikedImages = isLiked
//         ? likedImages.filter((id) => id !== image.id)
//         : [...likedImages, image.id];
//       localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
//     }
//   } catch (error) {
//     console.error("Error updating likes count:", error);
//   }
// };
