"use client";

import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMare = () => {
    setIsOpen(prev => !prev);
  };

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const [visible, setVisible] = useState(true);

  const onOpenSidebar = () => {
    if (sidebarIsOpen) {
      setVisible(false);
      setTimeout(() => setSidebarOpen(false), 300);
    } else {
      setSidebarOpen(true);
      setVisible(true);
    }
  };

  return (
    <>
    {!sidebarIsOpen && (

    <button className="w-8 h-8 text-amber-950 rounded-sm shadow-lg flex items-center justify-center cursor-pointer hover:bg-amber-200 transition-colors" onClick={onOpenSidebar}>
          <i className='bx bx-right-arrow-alt text-xl'></i>
    </button>
    )}
    { sidebarIsOpen && (
      <div className="h-full min-h-screen w-42 md:w-64 p-5 bg-amber-100 text-white" style={{
        transition: 'opacity 300ms ease, transform 300ms ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
      }}>
      <div className="flex gap-2">
        <button className="w-8 h-8 text-amber-950 rounded-sm shadow-lg flex items-center justify-center cursor-pointer hover:bg-amber-200 transition-colors" onClick={onOpenSidebar}>
          <i className='bx bx-left-arrow-alt text-xl'></i>
        </button>
        <h1 className='text-center text-amber-950 text-2xl md:text-3xl md:ml-2'>Equigest</h1>
      </div>

      <hr className='w-32 md:w-55 h-1 mt-4 bg-amber-800 border-0 rounded transition-all' />

      <div className='flex flex-col gap-4 mt-4'>
        <div className='flex items-center gap-2 text-lg text-amber-950 ml-2 px-3 py-2 rounded-lg shadow-sm hover:bg-amber-200 cursor-pointer transition-colors'>
          <i className='bx bx-home'></i>
          Início
        </div>

        <div
          className='flex items-center gap-2 text-lg text-amber-950 ml-2 px-3 py-2 rounded-lg shadow-sm hover:bg-amber-200 cursor-pointer transition-colors'
          onClick={onOpenMare}
        >
          <i className={`bx ${isOpen ? 'bx-chevron-down' : 'bx-chevron-right'} transition-all`}></i>
          Éguas
        </div>

        {isOpen && (
          <div className='relative ml-2 md:ml-6 mt-1 transition-opacity'>
            <div className="absolute top-0 left-2 h-full w-0.5 bg-amber-800"></div>

            <div className='flex items-center gap-2 text-lg text-amber-950 ml-4 px-3 py-2 rounded-lg shadow-sm hover:bg-amber-200 cursor-pointer transition-colors relative z-10'>
              <i className='bx bx-dna'></i>
              Matrizes
            </div>

            <div className='flex items-center gap-2 text-lg text-amber-950 ml-4 px-3 py-2 rounded-lg shadow-sm hover:bg-amber-200 cursor-pointer transition-colors relative z-10'>
              <i className='bx bx-injection'></i>
              Receptoras
            </div>
          </div>
        )}
      </div>
    </div>
    )
    
    }
    </>
    
  );
}
