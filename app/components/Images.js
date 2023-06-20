import Link from "next/link";
import supabase from "../../utils/supabase";

export default async function Posts() {
  const { data: posts } = await supabase.from("images").select("*").order("id");

  if (!images) {
    return <p>No images found.</p>;
  }

  return posts.map((post) => (
    <p key={post.id}>
      <Link href={`/static/${post.id}`}>{post.title}</Link>
    </p>
  ));
}

<div className="grid grid-cols-1 gap-y-10 sm:grid-cols 2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  {images?.map((image) => (
    <BlurImage key={image.id} image={image} />
  ))}
</div>;
