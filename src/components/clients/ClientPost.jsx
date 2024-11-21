/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";

export const ClientPost = () => {

  const posts = useLoaderData();
  console.log("Posts data:", posts);

  return (
    <section>
      <div className="grid grid-cols-1  gap-5 mt-5 max-w-screen-sm mx-auto py-20">
        <div className="border shadow rounded-md  p-8 ">
          <div className="flex flex-col gap-4">
            <section>
              <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
                {posts?.title}
              </p>
            </section>

            <section>
              <p className="flex gap-2 items-center">
                <span className="text-sm text-gray-900 font-normal">
                  {posts?.body}
                </span>
              </p>
            
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
