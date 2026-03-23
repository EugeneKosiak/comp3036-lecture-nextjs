import Link from "next/link";
import { posts } from "@repo/db/data";

export default function PostsPage() {
  return (
    <div>
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post.urlId}>
          <Link href={`/postsDetails/${post.urlId}`}>
            <h2 style={{ cursor: "pointer" }}>
              {post.title}
            </h2>
          </Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}