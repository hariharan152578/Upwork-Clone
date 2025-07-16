import React, { useState } from 'react'
import { flushSync } from 'react-dom'

export const Hero4Section1 = () => {
  return (
    <div className='flex p-5 relative justify-around gap-12  m-5'>
        <div className=' relative group mb-10 '>
         <video src="src\assets\HowUpworkWorks_30_0826_mnlc62.mp4" loop  autoPlay  muted className='w-5xl rounded-3xl'></video>
           <p className='text-2xl mt-5 font-[500]'>Posting jobs is always free</p> 
           <div className={` group-hover:block hidden  absolute hover:transition-all ease-in-out duration-300 `}>
          <div className='mt-5 grid gap-3'>
             <p className='text-gray-700 text-[0.9rem]'>Generate a job post with AI or create your own and filter talent matches.</p>
             <button className='bg-green-700  pt-2 pb-2 rounded-[10px] text-white'>Create Job</button>
           </div>
          </div>
      </div>
     <div className=' relative group mb-10 '>
          <img className=" rounded-3xl w-3xl" src="src\assets\for_hiring_1.webp" alt="" />
           <p className='text-2xl mt-5 font-[500]'>Get proposals and hire</p> 
           <div className={` group-hover:block hidden  absolute hover:transition-all ease-in-out duration-300 `}>
          <div className='mt-5 grid gap-3'>
             <p className='text-gray-700 text-[0.9rem]'>Screen, interview, or book a consult with an expert before hiring.</p>
             <button className='bg-green-700  pt-2 pb-2 rounded-[10px] text-white'>Create Job</button>
           </div>
          </div>
      </div>
      <div className=' relative group mb-10 transition-all ease-in-out duration-300'>
         <img className=" rounded-3xl w-3xl" src="src\assets\for_hiring_2.webp" alt="" />
           <p className='text-2xl mt-5 font-[500]'>Pay when work is done</p> 
           <div className={` group-hover:block absolute hidden hover:transition-all ease-in-out duration-300`}>
           <div className='mt-5 grid gap-3'>
             <p className='text-gray-700 text-[0.9rem]'>Release payments after approving work, by milestone or upon project completion.</p>
             <button className='bg-green-700 mt-5 pt-2 pb-2 rounded-[10px] text-white'>Create Job</button>
           </div>
          </div>
      </div>
    </div>
  )
}
