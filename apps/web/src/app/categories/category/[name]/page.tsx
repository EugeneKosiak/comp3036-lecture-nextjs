import { posts } from "@repo/db/data";
import { toUrlPath } from "@repo/utils/url";
import Link from "next/link";
/*
export default function CategoryPage({ params }: { params: { name: string } }) {
  const filteredPosts = posts.filter(
    (p) => toUrlPath(p.category) === params.name
  );

  return (
    <div>
      <h1>Posts in {params.name}</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/categories/posts/${post.urlId}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/
export default function CategoryPage({ params }: any) {
  const { name } = params;

  // match category (convert back from URL format if needed)
  const filteredPosts = posts.filter(
    (p) => p.category.toLowerCase() === name
  );

  return (
    <div>
      <h1>Posts in {name}</h1>

      {filteredPosts.map((post) => (
        <div key={post.id}>
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