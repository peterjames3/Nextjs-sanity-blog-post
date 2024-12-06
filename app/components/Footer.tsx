'use client';
import {
    RiInstagramFill,
    RiYoutubeFill,
    RiTwitterFill,
    RiLinkedinFill,
    RiFacebookFill,
  } from "react-icons/ri";
  import { FaCameraRetro } from "react-icons/fa";
  import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full py-4  ">
            <div className="wrapper grid grid-cols-1 place-items-center py-10 md:place-content-start md:grid-cols-4 gap-16 px-4 text-gray-700 dark:text-gray-200">
                 {/* Logo and Newsletter Section */}
        <div className="flex flex-col justify-center sm:items-start">
        <Link href="/" className="   font-customFont text-2xl">Ha<span className='text-softRed'>nzo</span></Link>
          <p className="mt-4">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
         
          <p className="mt-2 text-sm">
            By subscribing, you accept our Privacy Policy and consent to receive
            updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 ">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400">
                Advertise with us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-yellow-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 ">Legal Stuff</h3>
          <ul className="space-y-2">
          
            <li>
              <Link href="/support" className="hover:text-yellow-400">
                Support
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-yellow-400">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-yellow-400">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-yellow-400">
                Privacy Notice
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 ">Stay Connected</h3>
          <div className="flex gap-4">
            
              <Link
                href="https://facebook.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiFacebookFill size="24" className="text-yellow-400" />
              </Link>
              
              <Link
                href="https://instagram.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiInstagramFill size="24" className="text-yellow-400" />
              </Link>
              

           
            
              <Link
                href="https://twitter.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiTwitterFill size="24" className="text-yellow-400" />
              </Link>
              
              
            
          </div>
        </div>
      </div>


            

        </footer>
    )
}