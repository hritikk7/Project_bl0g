import React from "react";
import Thumbnial1 from "../assets/images/1.png";
import { Link } from "react-router-dom";
function PostAuthor() {
  return (
    <Link className="flex" to={`/posts/users/asdfasdf`} >
      <div className="h-14 w-14  mr-5 rounded-lg">
        <img  className="h-full w-full rounded-lg" src={Thumbnial1} alt="" />
      </div>
      <div className="">
        <h3 className="font-bold text-lg"> By: Author name</h3>
        <h5 className="text-sm">2 Days ago</h5>
      </div>
    </Link>
  );
}

export default PostAuthor;
