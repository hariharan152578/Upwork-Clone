import React, { useState } from 'react'
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';

export const Hero = () => {
  const [section, setSection] = useState('section1');

  return (
    <div className="bg-[url('/src/assets/Section_1.jpg')] bg-cover mt-5 mb-5  rounded-3xl">
      <div className="w-[65%] flex flex-col m-18">
        <div className="text-white font-[500] text-7xl">
          <h1>Connecting clients in need to freelancers who deliver</h1>
        </div>

        <div className="mt-20 bg-gradient-to-r from-[rgba(22,23,24,0.85)] to-[rgba(77,74,84,0.75)] p-7 w-[80%] rounded-2xl">
          <nav className="bg-gradient-to-r from-[#48494b] to-[#6c676f] w-full text-[1rem] justify-around text-white rounded-4xl flex items-center gap-10">
            <button
              className={`px-[82px] py-[10px] rounded-4xl ${section === 'section1' ? 'border-2 border-white' : ''}`}
              onClick={() => setSection('section1')}
            >
              Find Talent
            </button>
            <button
              className={`px-[82px] py-[10px] rounded-4xl ${section === 'section2' ? 'border-2 border-white' : ''}`}
              onClick={() => setSection('section2')}
            >
              Browse Jobs
            </button>
          </nav>

          <div className="mt-5 text-white">
            {section === 'section1' && <SectionOne />}
            {section === 'section2' && <SectionTwo />}
          </div>
        </div>
      </div>
    </div>
  );
};
