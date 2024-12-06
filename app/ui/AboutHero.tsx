'use client';
import Link from "next/link";
import Image from 'next/image'

export default function AboutHero() {
  

  return (
    <header
      
      className="w-full h-[25rem] relative "
    >
      <Image 
      src='/3d-view-personal-computer-with-vegetation.jpg'
      priority={true}
      fill={true}
      style={{ objectFit:"cover" }}
      alt="about us image"
      />
        <div className=' absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 py-[12rem] max-w-[20rem] mx-auto mt-0'>
        <nav className="flex gap-2  items-center text-2xl text-black font-semibold">
            <Link href="/" className="font-semibold">Home&rarr;</Link>
            <span>About</span>     
               </nav>
            
        </div>
         
 
    </header>
  );
}
