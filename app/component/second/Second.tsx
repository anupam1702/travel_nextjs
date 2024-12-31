import Image from 'next/image';
import React from 'react';
import { FaPlay } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Second = () => {
  return (
    <div className="flex flex-col lg:flex-row my-5 gap-5">
      {/* Left Section */}
      <div className="lg:w-1/3 flex flex-col mb-8 mx-2 lg:h-[428px]">
        <div className="text-xl">
          <span className="text-orange-200 text-2xl"> About</span>
          <br />
          My Journey
        </div>
        <p className="text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem laboriosam facere necessitatibus aspernatur numquam, quo officia veniam veritatis repellat deserunt.
          Enim dolorem nam architecto deserunt dignissimos, sapiente dolor rerum. Culpa odit reprehenderit voluptate beatae!
        </p>

        <p className="flex bg-black text-orange-500 text-xl mx-auto my-4 py-2 px-4 rounded-md w-max cursor-pointer">
          <span className="mx-2">VIEW MY VIDEOS</span>
          <span className="mx-2"><FaLocationArrow /></span>
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <article
            key={index}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                alt="University of Southern California"
                fill
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>

            {/* Play Icon */}
            <h3 className="z-10 mx-auto my-auto text-3xl font-bold text-white">
              <FaPlay />
            </h3>
            <div className="z-10 mx-auto my-2 text-center text-white text-lg">
              Whitsunday Islands
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Second;
