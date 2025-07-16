import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const [hoveredItemKey, setHoveredItemKey] = useState(null); // track key of hovered item

  const navItems = [
    { label: 'Find talent', key: 'talent' },
    { label: 'Find work', key: 'work' },
    { label: 'Why Upwork', key: 'why' },
    { label: "What's new", key: 'new' },
    { label: 'Enterprise', key: 'enterprise' },
    { label: 'Pricing', key: 'pricing' },
  ];
 const hoverContentMap = {
  talent: {
    title: 'Find Talent',
    description: 'Explore a wide pool of professional freelancers tailored to your project needs.',
  },
  work: {
    title: 'Find Work',
    description: 'Discover flexible jobs and earn by doing what you love.',
  },
  why: {
    title: 'Why Upwork',
    description: 'Learn why Upwork is trusted by millions for remote hiring and job opportunities.',
  },
  new: {
    title: "What's New",
    description: 'Check out the latest platform features and updates.',
  },
  enterprise: {
    title: 'Enterprise',
    description: 'Scalable hiring solutions for large businesses and global teams.',
  },
  pricing: {
    title: 'Pricing',
    description: 'Understand our pricing structure for clients and freelancers.',
  },
};

  return (
    <div>
      <header className='flex fixed top-0 bg-white  z-10 justify-between items-center'>
        <div className='flex'>
          <button className='md:hidden' onClick={() => setIsOpen(!open)}>
            menu
          </button>

          {open && (
            <nav className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden z-50">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.key}
                    to="#"
                    onMouseEnter={() => setHoveredItemKey(item.key)}
                    onMouseLeave={() => setHoveredItemKey(null)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </ul>
              <div className="flex flex-col gap-3 mt-4">
                <button className="text-left">Log in</button>
                <button className="bg-green-700 px-5 py-2 rounded-[10px] text-white text-left">Sign up</button>
              </div>
            </nav>
          )}

          <h1 className='font-bold text-[20px] m-5 '>Upwork</h1>
        </div>

        <nav className='hidden md:flex items-center gap-5 mr-100'>
          <ul className='flex gap-5'>
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to="#"
                onMouseEnter={() => setHoveredItemKey(item.key)}
                onMouseLeave={() => setHoveredItemKey(null)}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        <nav className='flex items-center gap-5 m-2 ml-10'>
          <button className='hidden md:block'>Log in</button>
          <button className={`bg-green-700 pl-5 pr-5 pt-2 pb-2 rounded-[10px] text-white ${open ? 'hidden' : ''}`}>
            Sign up
          </button>
        </nav>    
      </header>


    </div>
  );
};
export default Navbar;