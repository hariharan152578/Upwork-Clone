import React from 'react'

export const SectionOne = () => {
  return (
    <div className='bg-white m-2  rounded-4xl flex justify-between'>
      <input type="text" className='bg-white text-black w-[79%]  rounded-4xl  p-2 border-none focus:outline-none focus:border-none' placeholder='Search by role,skills,or keywords' />
      <button className=' rounded-4xl border-2 cursor-pointer px-4 py-1 text-white font-medium bg-black'>🔍Search</button>
    </div>
  )
}
