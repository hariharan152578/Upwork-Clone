import React, { useEffect, useState } from 'react'

export const Hero3 = () => {
    const[jobs,Setjobs]=useState([]);
      useEffect(()=>{
        fetch('http://localhost:3000/jobCategories ')
        .then((data)=>data.json())
        .then((data)=>Setjobs(data))
        .catch((err)=>console.log(err));
      },[])
  return (
   <div className='mt-10'>
          <h1 className='text-5xl font-[400] mb-10'>Explore millions of props</h1>
         <div>   
          {jobs.length>0?(
            <div className='grid grid-cols-5'>
              {jobs.map((job)=>(
                <div key={job.id} className='shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:border-2 hover:border-b-green-700 hover:shadow-[0_0_10px_#00ff00] p-3 w-[200px] h-[170px] grid rounded-3xl m-5 transition-shadow duration-300'>
                  <span  style={{ fontSize: "40px"}} className="material-symbols-outlined text-green-500">{job.icon}</span>
                  <p className='text-[20px]'>{job.name}</p>
                </div>
              ))}
            </div>
          ):(
            <div><p>Loading...</p></div>
          )}
          </div>
        </div>
  )
}
