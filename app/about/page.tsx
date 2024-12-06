"use client";

import AboutHero from "@/app/ui/AboutHero";

import AboutMain from "@/app/ui/AboutMain";
import { Metadata } from 'next';
 
 const metadata: Metadata = {
  title: 'About ',
};

export default function AboutPage() {
  
  return (
    <section className="w-full  ">
  < AboutHero />
  <AboutMain />
    </section>
  );
}
