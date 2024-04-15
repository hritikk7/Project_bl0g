import React from "react";
import { Link } from "react-router-dom";

function PostItem({ postId, thumbnail, category, title, desc, authorId }) {
  // console.log(postId, thumbnail, category, title, desc, authorId);
  const shortDesc = desc.length > 145 ? desc.substr(0, 145) + ". . . " : desc;
  const shortPost = title.length > 30 ? desc.substr(0, 30) + ". . ." : title;
  return (
    <>
      <div class="w-full md:w-1/2 lg:w-1/4 px-4 ">
        <div class="max-w-[370px] mx-auto mb-10 bg-white rounded-xl px-3 py-3">
          <div class="rounded-xl  overflow-hidden mb-4">
            <img src={thumbnail} alt="image" class="w-full object-cover h-52" />
          </div>
          <div>
            <h5>
              <Link
                to={`/posts/${postId}`}
                class="
                    font-bold
                    text-xl
                    sm:text-2xl
                    lg:text-xl
                    xl:text-2xl
                    mb-1
                    inline-block
                    text-dark
                    hover:text-primary
                    "
              >
                {shortPost}
              </Link>
            </h5>
            <p class="text-sm text-body-color">{shortDesc}</p>
          </div>
          <div className="flex items-center font-bold justify-between text-sm my-2 mt-3">
            <Link to={`/posts/users/asdfasdf`}>By : Author</Link>

            <Link
              to={`/posts/categories/${category}`}
              class="px-5 py-1 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            >
              Category
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
