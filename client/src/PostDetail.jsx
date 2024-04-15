import React from "react";
import PostAuthor from "./Components/PostAuthor";
export default function PostDetail() {
  console.log("inside post details");
  return (
    //   <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 lg:px-32 md:px-20 sm:px-4 bg-slate-100 ">
    //   <div class="flex flex-wrap -mx-4">

    //   </div>
    // </section>
    <div className="flex lg:pb-20 lg:pt[120px] ">
      <div className="topbar">
        <PostAuthor />
        <div className="">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <h3>PostTitle</h3>
        <div className="">
          <img src="" alt="" />
        </div>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel
          pariatur reiciendis earum perferendis explicabo error laboriosam? Eius
          velit totam, asperiores, consectetur culpa dicta quia, quod aut esse
          omnis ad nisi voluptatibus labore accusamus iusto. Tempore architecto
          labore, doloremque accusamus voluptatibus est porro ullam ipsum odit
          ratione magni eius culpa ipsa nulla consequatur cum earum quia itaque
          a veniam vitae. Voluptatem voluptas totam, dolor eligendi adipisci
          saepe, doloribus qui maxime atque illum magnam. Maxime enim voluptas
          eaque, totam minus magni natus est ducimus assumenda quidem? Sint
          nesciunt quibusdam debitis expedita, ducimus hic. Inventore, ipsam
          distinctio provident ex necessitatibus tempora? Reprehenderit,
          inventore vel! At quasi itaque neque numquam et ad deserunt ipsa
          perferendis reprehenderit perspiciatis dolorum nemo ducimus excepturi
          rem repellendus nostrum, illum quod a, illo eum est autem esse? Eaque
          obcaecati temporibus vero recusandae, pariatur alias earum minima
          cupiditate ea quas eum vitae rerum voluptatum illum ratione laboriosam
          dolores nostrum fuga sed a voluptatem omnis similique ipsam deleniti?
          Cumque harum libero vitae recusandae cupiditate qui placeat. Doloribus
          eum, saepe ad provident sed, fugit accusamus suscipit dicta facilis
          eos temporibus, esse ducimus porro iste eaque non! Laudantium
          voluptatibus inventore fuga nihil, sequi iure ad omnis voluptates,
          consequuntur, blanditiis at facere quo!
        </article>
      </div>
    </div>
  );
}
