import React, { useState } from "react";
import { Link } from "react-router-dom";
import Thumbnial1 from "../assets/images/1.png";
import Thumbnial2 from "../assets/images/2.png";
import Thumbnial3 from "../assets/images/3.png";
function Authors() {
  const authorsData = [
    { id: 1, name: "Ritik", thumbnail: Thumbnial2, posts: 4, location: "UK" },
    {
      id: 2,
      name: "Ritik",
      thumbnail: Thumbnial1,
      posts: 4,
      location: "London",
    },
    {
      id: 3,
      name: "Anjali",
      thumbnail: Thumbnial2,

      posts: 4,
      location: "Paris",
    },
    {
      id: 4,
      name: "Kaustubh",
      thumbnail: Thumbnial3,

      posts: 4,
      location: "India",
    },
    {
      id: 5,
      name: "Bhargav",
      thumbnail: Thumbnial3,
      posts: 4,
      location: "Bangalore",
    },
    {
      id: 6,
      name: "Ritik",
      thumbnail: Thumbnial2,
      posts: 4,
      location: "Chennai",
    },
    { id: 7, name: "Ritik", thumbnail: Thumbnial1, posts: 4, location: "US" },
  ];

  const [authors, setAuthors] = useState(authorsData);

  return (
    <div className="h-screen bg-slate-100  flex-col flex-1 justify-center items-center ">
      <div
        className=" grid xl:grid-cols-6 bg-slate-100 
    lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 mt-24 px-10 "
      >
        {authors.length > 0 ? (
          authors.map((author) => (
            <Link to={`/posts/users/${author.id}`} class="m-3" key={author.id}>
              <div class="relative flex w-60 items-center overflow-hidden rounded-lg bg-white p-4 shadow hover:shadow-md">
                <div class="shrink-0 h-12 w-12 rounded-full bg-gray-100">
                  <img
                    className=" h-12 w-12  rounded-full"
                    src={author.thumbnail}
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="font-medium text-gray-800">{author.name}</p>

                  <p class="font-medium text-gray-800 text-xs ">
                    Posts : {author.posts}
                  </p>

                  <p class="text-sm text-gray-600">{author.location}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <>
            <h6 className="h-full w-full justify-center items-center text-4xl font-extrabold flex m-52">
              No Authors
            </h6>
          </>
        )}
      </div>
    </div>
  );
}

export default Authors;
