import React from 'react'

export const Hero5 = () => {
  return (
    <div className='mt-10 mb-10 rounded-3xl m-auto bg-[#181818] gap-15 text-white flex p-5 '>
      <div className=" w-[50%] p-10 rounded-3xl items-center bg-[url('src/assets/Hero5Image1.jpg')]">
        <p className=' text-5xl w-[90%]  font-[500]'>Get insights into freelancer pricing</p>
        <p className='text-1xl mt-10 mb-10 w-[90%]'>We’ll calculate the average cost for freelancers with the skills you need.</p>
        <textarea placeholder='To start,describe what you need done.'  className='bg-white p-2 overflow-hidden text-gray-700 w-[90%] h-20 rounded-3xl focus:outline-none focus:border-none'></textarea>
        <button className='translate-x-[340px] translate-y-[-50px] bg-gradient-to-r from-black to-[#303615] px-2 py-2 rounded-[2rem] z-10 flex items-center gap-2 cursor-pointer'>Next <span className='material-symbols-outlined'>double_arrow</span></button>
     </div>
      <div className='m-10'>
          <video src="src/assets/Hero5Video.mp4"  muted loop autoPlay className='rounded-3xl w-[400px]' ></video>
      </div>
    </div>
  )
}
 