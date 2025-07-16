import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Navbar from '../componant/Navbar';
import { Footer } from '../componant/Footer';
export const Home = () => {
  const location = useLocation(); 
  return (
    <div className='w-[100%]'>
      <Navbar />
      <div className="flex flex-col m-auto mt-20 w-[1150px]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
