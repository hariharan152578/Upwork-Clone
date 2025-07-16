import React from 'react';
import howItWorksVideo from '../assets/HowUpworkWorks_30_0826_mnlc62.mp4'; // ✅ Import video correctly

export const Hero2 = () => {
  return (
    <div className='flex mt-10 justify-around items-center gap-15'>
      <div>
        <video
          src={howItWorksVideo}
          controls
          loop
          muted
          autoPlay
          className="w-150 rounded-xl"
        ></video>
      </div>
      <div className='grid gap-3'>
        <section>
          <h1 className='text-4xl font-medium mb-3'>Up your work game</h1>
        </section>
        <section className='flex gap-5'>
          <i className="bi bi-arrow-return-right text-2xl"></i>
          <div>
            <h1 className='text-[1.2rem] font-[500]'>No cost to join</h1>
            <p className='text-gray-600 text-[.9rem]'>
              Browse professionals, fixed-price projects, or even book a consultation.
            </p>
          </div>
        </section>
        <section className='flex gap-5'>
          <i className="bi bi-pin-angle text-2xl"></i>
          <div>
            <h1 className='text-[1.2rem] font-[500]'>Post a job and hire top talent</h1>
            <p className='text-gray-600 text-[.9rem]'>
              Finding talent doesn't have to be a chore. Post a job or we can search for you!
            </p>
          </div>
        </section>
        <section className='flex gap-5'>
          <i className="bi bi-peace text-2xl"></i>
          <div>
            <h1 className='text-[1.2rem] font-[500]'>Afford to work with the best</h1>
            <p className='text-gray-600 text-[.9rem]'>
              It's affordable to up your work game with low transaction rates on top talent.
            </p>
          </div>
        </section>
        <div className='flex gap-5'>
          <button className='bg-green-700 pl-8 pr-8 pt-2 pb-2 rounded-[10px] text-white'>
            Sign up for free
          </button>
          <button className='pl-8 pr-8 pt-2 pb-2 rounded-[10px] text-green-700 border-2 border-green-700'>
            Learn how to hire
          </button>
        </div>
      </div>
    </div>
  );
};
