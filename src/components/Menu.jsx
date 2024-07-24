"use client"
 
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

 
/* menuOpen er sat til false, da den først skal åbne når man trykker på kanppen*/
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <>      
 
      {/* nav bar */}
 
      <nav className="sticky top-0 z-50 bg-BlackBlack text-White px-4 py-4 2xl:py-5 flex justify-between items-center md:px-10">
        <div>
        <Link
              className="font-bold text-xl sm:text-2xl 2xl:text-2xl hover:text-Hotpink"
              href="/"
              prefetch={false}
            >
              CGC Wargaming
            </Link>
        </div>
 
        {/* billede af burger menu symbol - åben*/}
        <button
          className="sm:hidden"
          onClick={toggleMenu}
        >
        </button>
 
        {/* de tre links til højre i web størrelse */}
        {/* skjult (hidden) på små skærme, men synlige på større skærme */}
        <ul className="hidden sm:flex items-center gap-4 md:gap-10">
            <li>
            <Link href="/" prefetch={false}>About</Link>
            <Link href="/" prefetch={false}>About</Link>
            <Link href="/" prefetch={false}>About</Link>
            </li>
        </ul>
      </nav>
 
      {/* burger menu */}
      {/* bliver synlig når menuOpen er sat til true */}
      {/* Når menuOpen er true er menuen synlig med translate-x-0. Når mmenuOpen er false bruges translate-x-full og burgermenuen er skjult   */}
 
      <div className={`fixed inset-0 bg-BlackBlack text-White transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 sm:hidden flex flex-col`}>
        <div className="flex justify-between items-center p-4">
          <div>
            <Link
              className="font-bold text-xl sm:text-2xl 2xl:text-2xl hover:text-Hotpink"
              href="/"
              prefetch={false}
            >
              CGC Wargaming
            </Link>
          </div>
 
          {/* billede af burger menu symbol - luk */}
 
          <button
            className="text-White"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
 
        {/* burger menu elementer */}
        <>
        <ul className='flex flex-col items-center h-full space-y-12 overflow-y-auto bg-Black pt-32'>
            <li>
                <Link href="/" prefetch={false}>About</Link>
                <Link href="/" prefetch={false}>About</Link>
                <Link href="/" prefetch={false}>About</Link>
            </li>
        </ul>
        </>
 
      </div>
    </>
  );
}