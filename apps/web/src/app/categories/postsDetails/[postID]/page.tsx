import { posts } from "@repo/db/data";

export default function PostDetailsPage({ params }: any) {
  const { postID } = params;

  const post = posts.find((p) => p.urlId === postID);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.date.toDateString()}</p>
      <img src={post.imageUrl} alt={post.title} width={300} />

      <p>{post.description}</p>
      <div>{post.content}</div>
    </div>
  );
}
