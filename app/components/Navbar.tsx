'use client';
// ./components/Navbar.js or Navbar.tsx
import { useState } from 'react'
import Link from 'next/link';
import { NavLinks } from '@/app/components/NavLinks';

import Mobile from '@/app/components/Mobile';
import { usePathname } from 'next/navigation';
// import { FaSun, FaMoon } from 'react-icons/fa';
import ModeToggle from '@/app/ui/ModeToggle'
import {
    FaBars,
  FaTimes,
} from "@/app/ui/Icons";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section className="w-full fixed top-0 h-[10rem] z-50 pb-10 ">
    <header className="  max-w-[1400px]  flex mx-auto mt-6  bg-[#211F21]   justify-between items-center rounded-md p-3">
      <nav className="text-4xl font-bold">
        <Link href="/" className=" text-gray-400   font-customFont">Ha<span className='text-softRed'>nzo</span></Link>
      </nav>
      <nav>
        <ul className="hidden sm:flex gap-6 items-center">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={ `text-[1.15rem] font-medium text-white hover:text-gray-500 ${pathname === link.path ? ' dark:text-white font-semibold':" font-medium dark:text-white"}` 
          }>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className='flex gap-2 items-center '>
        
   
          {/* Dark Mode Toggle Button */}
          <nav className='bg-gray-600 p-3 rounded-sm'>
          <ModeToggle />
          </nav>
          
        
        <nav className="flex sm:hidden">
        {/* Sidebar for mobile view */}
         {/* Toggle sidebar */}
         <button type='button' onClick={() => setIsOpen(!isOpen)}>
            {
              isOpen? (
                <FaTimes className="text-black text-2xl" />
                
              ) : (
                <FaBars className="text-black text-2xl" />
              )
            }
           
          </button>


        </nav>

      </nav>
    </header>
    
      {/* Sidebar for mobile view */}
      {isOpen && <Mobile isOpen={isOpen} toggleOpen={() => setIsOpen(false)} />} 
  
    </section>
  );
}
