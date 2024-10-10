import React, { useState } from 'react';
import img from "../assets/icons/icons8-github.svg"
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="text-white flex justify-between font-bold items-center p-5 mb-7">
      <h1 className="cursor-pointer text-2xl">Sid ali dendenne</h1>
      <div className="flex items-center space-x-4">
        {!matches && (
        <>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className={`fixed top-0 left-0 w-64 h-full bg-zinc-900 p-4 transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul className="space-y-4 list-none p-0 flex flex-col items-center">
              <a href="https://github.com/alilo113" className="block mt-4">
                <img src={img} alt="GitHub" className="bg-white rounded-full" />
              </a>
            </ul>
          </div>
        </>
        )}
        {matches && (
          <div className="flex items-center space-x-4">
            <a href="https://github.com/alilo113">
              <img src={img} alt="GitHub" className="bg-white rounded-full" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}