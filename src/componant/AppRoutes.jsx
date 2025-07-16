import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Hero } from '../componant/Hero';
import { Hero2 } from '../componant/Hero2';
import { Hero3 } from '../componant/Hero3';
import { Hero4 } from '../componant/Hero4';
import { Hero5 } from './Hero5';
import { Hero6 } from './Hero6';
import { SectionOne } from '../componant/SectionOne';
import { SectionTwo } from '../componant/SectionTwo';
import { Hero4Section1 } from '../componant/Hero4Section1';
import { Hero4Section2 } from '../componant/Hero4Section2';
import { Home } from '../pages/Home';
import { HomeLandingPage } from '../pages/HomeLandingPage';
import { Hero7 } from './Hero7';
import { Hero8 } from './Hero8';
import { Footer } from './Footer';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomeLandingPage />} />

        <Route path="hero" element={<Hero />}>
          <Route index element={<Navigate to="section1" replace />} />
          <Route path="section1" element={<SectionOne />} />
          <Route path="section2" element={<SectionTwo />} />
        </Route>

        <Route path="hero2" element={<Hero2 />} />
        <Route path="hero3" element={<Hero3 />} />

        <Route path="hero4" element={<Hero4 />}>
        <Route index element={<Navigate to="section3" replace />} />
          <Route path="section3" element={<Hero4Section1 />} />
          <Route path="section4" element={<Hero4Section2 />} />
        </Route>
        <Route path='hero5' element={<Hero5/>}></Route>
        <Route path='hero6' element={<Hero6/>}></Route>
        <Route path='hero7' element={<Hero7/>}></Route>
        <Route path='hero8' element={<Hero8/>}></Route>
        <Route path='hero8' element={<Footer/>}></Route>    
      </Route>
    </Routes>
  );
};
