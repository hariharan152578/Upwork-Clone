import React, { useState } from 'react'
import { Hero4Section1 } from './Hero4Section1'
import { Hero4Section2 } from './Hero4Section2'
import { NavLink, Outlet } from 'react-router-dom'
export const Hero4 = () => {
  const[section,setSection]=useState('Hero4Section1')
  return (
    <div>
      <header className='flex mt-10 justify-between items-center'>
        <p className='text-3xl font-[500]'>How it Works</p>
        <nav className='flex gap-5 border-1  rounded-4xl'>
           <button   className={`px-[50px] py-[3px] rounded-4xl transition-all ease-in  duration-300 ${section === 'Hero4Section1' ?'border-2 border-black' : ''}`} onClick={() => setSection('Hero4Section1')}>Find Talent</button>
           <button   className={`px-[50px] py-[3px] rounded-4xl transition-all ease-in  duration-300 ${section === 'Hero4Section2' ?'border-2 border-black' : ''}`} onClick={() => setSection('Hero4Section2')}>Browse Jobs</button>
          </nav>
      </header>
      <div className='transistion-all ease-in-out duration-300'>
       {section === 'Hero4Section1' &&<Hero4Section1/>}
       {section === 'Hero4Section2' &&<Hero4Section2/>}
      </div>
    </div>
  )
}
