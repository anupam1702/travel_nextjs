import Image from 'next/image'
import React from 'react'
import { FaPlay } from "react-icons/fa";

const Sixth = () => {
  return (
    <div className='w-full flex flex-col justify-centeritems-center my-2'>
        <div className='text-6xl text-center my-4'>
            @ Follow me
            <br />
            <span className='text-3xl my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Error doloremque quod expedita ab eaque officiis
                  quia nostrum laudantium adipisci nobis.</span>
        </div>

        
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <article
                  key={index}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-[400px]"
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
                  <h3 className="z-10 absolute top-0 left-0 mx-2 my-2  text-3xl font-bold bg-black text-white">
                    <FaPlay />
                  </h3>
                  
                </article>
              ))}
            </div>
    </div>
  )
}

export default Sixth
