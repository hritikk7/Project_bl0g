import React from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnial1 from "../assets/images/1.png";
function PostDetail() {
  console.log("indise asdfasdfasdf");
  return (
    <div className="bg-slate-100  flex justify-center items-center lg:pt[120px] xl:pb-20 pb-10 xl:px-96 lg:px-24 md:px-16 sm:px-8 pt-5 my-3">
      <div className="bg-white pt-10  rounded-3xl mt-24 px-10    ">
        <div className="flex flex-1 justify-between ">
          <PostAuthor />
          <div className="">
            <Link to={`/posts/asdf/edit`} >
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
            <Link to={`/posts/asdf/delete`}>
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
        <div className="block font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl py-5 ">
          <h3>
            Title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            sit beatae aspernatur rerum
          </h3>
        </div>
        <div className="lg:w[400px] lg:h[200px]  pb-5">
          <img src={Thumbnial1} alt="" />
        </div>
        <div className="">
          <article className="block pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            voluptatibus ad veniam quo id aut, suscipit esse eveniet ipsam vel
            iure quos, repellat praesentium! Perspiciatis adipisci, quo nemo,
            odio, unde id tenetur voluptatibus expedita neque iure quaerat esse
            porro aperiam? Quam ut non quod amet, fuga explicabo consequuntur
            molestias illum facere architecto incidunt ducimus laudantium totam
            fugiat libero labore laboriosam quas provident reiciendis debitis
            saepe necessitatibus. Cumque vel maxime quis eligendi reprehenderit
            similique, magnam optio minus ipsa porro pariatur ad libero atque
            expedita adipisci, quo culpa quas distinctio soluta necessitatibus
            ratione nam dicta! Deserunt modi veniam corrupti neque doloribus
            provident! Ipsam cumque error fugiat! Qui itaque, eos porro
            perspiciatis in magnam exercitationem nostrum incidunt explicabo
            dolor quos sint accusantium pariatur fugit sit rerum tempora,
            adipisci suscipit error tenetur, consectetur aspernatur ipsa iusto!
            Ad aliquid inventore provident omnis dolorum dolorem non quisquam
            fuga porro. At officiis, minus nostrum soluta nobis deserunt eius
            laudantium assumenda! Ratione laborum aut atque laboriosam qui nam
            est recusandae ab quos reprehenderit eveniet, provident odit saepe
            excepturi ducimus reiciendis aperiam fugiat culpa amet voluptatum!
            Veritatis voluptatibus maxime vitae esse impedit, ipsam provident
            ullam fugiat non minus expedita consequuntur amet inventore enim
            dignissimos cum suscipit corrupti error similique natus iure. In
            expedita suscipit et possimus vitae esse tempore aliquid veniam
            repudiandae! Beatae in aspernatur magnam, suscipit eos quaerat
            doloremque voluptatem? Numquam ipsam molestiae beatae consequuntur
            porro non odit voluptatibus saepe tenetur harum quae, asperiores,
            perferendis ipsum nulla dolores sapiente dicta magni dolor eos
            mollitia alias enim earum laborum. Soluta distinctio delectus ad
            numquam! Accusamus laborum possimus praesentium blanditiis libero
            quidem nobis tempore, repellendus at fuga obcaecati exercitationem
            delectus in numquam ipsa deserunt dolorem facilis. Totam nulla
            praesentium expedita! Est expedita veritatis voluptates id,
            voluptatem quisquam aut voluptatibus labore unde vero! Iusto,
            consequuntur! Iusto unde voluptatibus consequatur incidunt adipisci?
          </article>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
