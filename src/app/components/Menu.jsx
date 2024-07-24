"use client"
 
import Link from 'next/link';
import { useState } from 'react';

 
/* menuOpen er sat til false, da den først skal åbne når man trykker på kanppen*/
export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <>    
    <nav>
      <div>
        <Link href="/" prefetch={false}>CGC</Link>
      </div>  

      <button
      className=''
      onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
      </button>
    </nav>  
    </>
  );
}