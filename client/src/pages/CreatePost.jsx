import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.core.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbanil, setThumbnail] = useState("");
  const [value, setValue] = useState("");
  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncatagorized",
    "Weather",
  ];
  return (
    <div className="h-screen bg-slate-100 flex-col flex-1 justify-center items-center">
      <div className="w-full flex justify-center items-center mt-4 ">
        <h3 className="mt-20 text-3xl font-extrabold block">
          Create your Post
        </h3>
      </div>
      <div class=" mt-6 flex flex-col justify-center items-center -mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Post Title
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border h-10 border-red rounded py-1 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="Example : How AI is turing the world upsideDown"
            name="postTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="md:w-1/2 px-3 mb-2">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Post Category
          </label>
          <select
            class="appearance-none block w-full bg-grey-lighter h-10 text-grey-darker border border-grey-lighter rounded py-1 px-4"
            id="grid-last-name"
            type="text"
            placeholder="select"
            name="postCategory"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {POST_CATEGORIES.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div class="md:w-1/2 px-3 mb-2">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Post Thumbnail
          </label>
          <input
            class="appearance-none block bg-white  w-full bg-grey-lighter h-10 text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-2"
            id="grid-last-name"
            type="file"
            placeholder="Click to upload thumbnail"
            name="postThumbnail"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>
        <div className="md:w-1/2 px-3 ">
          <button
            class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            // onClick={handleUserInput}
          >
            Create Post
          </button>
        </div>
      </div>
      <div className="w-full mt-2 flex justify-center items-center">
        <div className=" -mx-3 md:flex mb-6 w-auto max-w-7xl">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
}
