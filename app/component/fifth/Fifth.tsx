import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationCrosshairs, FaArrowRightArrowLeft } from "react-icons/fa6";

const Fifth = () => {
  return (
    <div>
      <div className='w-full bg-orange-500 text-black flex flex-col justify-center items-center my-10'>
        <div className='text-3xl my-10'>
            Sailor&apos;s Journey Map
        </div>
        <div className='text-xl my-8'>
            TRACK THE SAILOR&apos;S JOURNEY THROUGH AUSTRALIA&apos;S COASTAL GEMS AND EXTRAORDINARY ADVENTURES
        </div>
        <div className='my-10 flex justify-between'>
           <div className='mx-10 flex flex-col items-center'>
           <IoLocationSharp className='cursor text-4xl' />
           <p className='text-xl'>Places Visited</p>
           <p>13</p>
           </div>
           <div className='mx-10 flex flex-col items-center'>
           <FaArrowRightArrowLeft className='cursor text-4xl' />
           <p className='text-xl'>Miles Covered</p>
           <p>3,500</p>
           </div>
           <div className='mx-10 flex flex-col items-center'>
           <FaLocationCrosshairs className='cursor text-4xl' />
           <p className='text-xl'>Top Spots</p>
           <p>10</p>
           </div >
        </div>
      </div>
    </div>
  )
}

export default Fifth;
