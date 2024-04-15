import React, { useState } from "react";
import PostItem from "./PostItem";

// import Thumbnial1 from '../assets/images/10.png'
// import Thumbnial1 from '../assets/images/11.png'
import DUMMY_POSTS from "../data";

export default function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 lg:px-32 md:px-20 sm:px-4 bg-slate-100 ">
        {posts.length > 0 ? (
          <div class="flex flex-wrap -mx-4">
            {posts.map(({ id, thumbnail, category, title, desc, authorId }) => (
              <PostItem
                key={id}
                postId={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                desc={desc}
                authorId={authorId}
              />
            ))}
          </div>
        ) : (
          <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 lg:px-32 md:px-20 sm:px-4 bg-slate-100 ">
            <div class="flex flex-wrap -mx-4">
              <h4 className="text-5xl"> No Posts Found</h4>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
