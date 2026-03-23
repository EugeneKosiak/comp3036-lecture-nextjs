// Categories Web Page

import {posts} from "@repo/db/data";
import {categories} from "@/functions/categories"; // @ is a cleaner version of ../../../../functions/categories so it is a shortcut for root of directory
import {toUrlPath} from "@repo/utils/url";
import Link from "next/link";

/*
export default function Page() {
    const postCategories = categories(posts);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {postCategories.map((category) => (
                    <li key={category.name}>
                        <Link href={`/categories/${toUrlPath(category.name)}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
*/

export default function Page() {
  const postCategories = categories(posts); // categories() returns unique category objects

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Categories</h1>
      <ul>
        {postCategories.map((category) => (
          <li key={category.name}>
            {/* Link must match /categories/[name] */}
            <Link href={`/categories/${toUrlPath(category.name)}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// change current link to /category/category-name
// keep in mind since we changed the toURLPath is lowercase, we need to match the url path to the category - it is case sensitive