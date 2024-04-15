import React, { useState } from "react";
import DUMMY_POSTS from "../data";
import Thumbnial1 from "../assets/images/5.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 lg:px-32 md:px-20 sm:px-4 bg-slate-100 ">
        {posts.length > 0 ? (
          <div class="flex flex-wrap -mx-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex w-full mx-6 my-2 h-24 bg-white rounded-lg items-center px-5 justify-start"
              >
                <div className="h-14 w-14  mr-5 rounded-lg">
                  <img
                    className="h-full w-full rounded-lg"
                    src={Thumbnial1}
                    alt=""
                  />
                </div>
                <div className="flex-1">{post.title}</div>
                <div className="">
                <Link to={`/posts/${post.id}`}>
                    <button class="inline-flex items-center mr-1  px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      View
                    </button>
                  </Link>
                  <Link to={`/posts/${post.id}/edit`}>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      Edit
                    </button>
                  </Link>
                  <Link to={`/posts/${post.id}/delete`}>
                    {" "}
                    <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
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
