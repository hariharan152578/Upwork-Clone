import React from 'react'

export const Hero4Section2 = () => {
  return (
    <div className='flex p-5 relative justify-around gap-12 mt-5 mb-10'>
       <div className=' relative group mb-10 '>
         <video src="src\assets\hiw-freelancer.mp4" loop  autoPlay  muted className='w-2xl rounded-3xl'></video>
           <p className='text-2xl mt-5 font-[500]'>Posting jobs is always free</p> 
           <div className={` group-hover:block hidden  absolute hover:transition-all ease-in-out duration-300 `}>
          <div className='mt-5 grid gap-3'>
             <p className='text-gray-700 text-[0.9rem]'>Generate a job post with AI or create your own and filter talent matches.</p>
             <button className='bg-green-700  pt-2 pb-2 rounded-[10px] text-white'>Create Job</button>
           </div>
          </div>
      </div>
     <div className=' relative group mb-10 '>
          <img className=" rounded-3xl w-[650px]" src="src\assets\for_finding_work_1.webp" alt="" />
           <p className='text-2xl mt-5 font-[500]'>Submit proposals for work</p> 
           <div className={` group-hover:block hidden  absolute hover:transition-all ease-in-out duration-300 `}>
          <div className='mt-5 grid gap-3'>
             <p className='text-gray-700 text-[0.9rem]'>Negotiate rates for the projects you want or reply to invites from clients.</p>
             <button className='bg-green-700  pt-2 pb-2 rounded-[10px] text-white'>Search jobs</button>
           </div>
          </div>
      </div>
      <div className=' relative group mb-10 transition-all ease-in-out duration-300'>
         <img className=" rounded-3xl w-[600px]" src="src\assets\for_finding_work_2.webp" alt="" />
           <p className='text-2xl mt-5 font-[500]'>Get paid as you deliver work</p> 
           <div className={` group-hover:block absolute hidden hover:transition-all ease-in-out duration-300`}>
           <div className='mt-5 grid gap-3'>
             <p className='text-gray-700 text-[0.9rem]'>Land a contract, do the work you love, and get paid on time.</p>
             <button className='bg-green-700 mt-5 pt-2 pb-2 rounded-[10px] text-white'>Estimate earnings</button>
           </div>
          </div>
      </div>
    </div>
  )
}