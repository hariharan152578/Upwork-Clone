
import React from 'react';
import { Hero } from '../componant/Hero';
import { Hero2 } from '../componant/Hero2';
import { Hero3 } from '../componant/Hero3';
import { Hero4 } from '../componant/Hero4';
import { Hero5 } from '../componant/Hero5';
import { Hero6 } from '../componant/Hero6';
import { Hero7 } from '../componant/Hero7';
import { Hero8 } from '../componant/Hero8';
export const HomeLandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Hero7/>
      <Hero8/>
    </div>
  );
};
