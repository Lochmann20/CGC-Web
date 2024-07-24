'use client'

import React, { useState } from 'react'
import Link from 'next/link';


export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  // Toogle ændre true eller false (Menuen)
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    {/* Mobil menu */}
    <section className='flex justify-between p-5'>
      <div>
      <Link href="/" prefetch={false}>CGC-W<span className='text-xs'>ARGAMING</span></Link>
      </div>

      {/* Menu icon */}
      <button 
      className='sm:hidden ' 
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

      <ul className="hidden sm:flex gap-10">
        <li className="hidden sm:flex gap-10">
         <Link href="/Gallery" prefetch={false}>Gallery</Link>
         <Link href="/Warhammer" prefetch={false}>Warhammer</Link>
         <Link href="/Contact" prefetch={false}>Contact</Link>
         <Link href="/https://www.instagram.com/cgc_minis?igsh=OGl6MjdmcXBxbmcz" prefetch={false}>IG</Link>
         <Link href="/" prefetch={false}>Mail</Link>
        </li>
      </ul>

      <div className={`
        fixed 
        inset-0 
        bg-black 
        text-White 
        transition-transform 
        transform 
        ${openMenu ? 'translate-x-0' : 'translate-x-full'} 
        z-50 
        sm:hidden 
        flex 
        flex-col`}>

        <div className='flex justify-end p-5'>
        <button 
        className='sm:hidden' 
        onClick={toggleMenu}>
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

        <>
        <ul>
          <li className='grid text-center'>
            <Link href="/Gallery" prefetch={false} onClick={toggleMenu}>Gallery</Link>
            <Link href="/Warhammer" prefetch={false} onClick={toggleMenu}>Warhammer</Link>
            <Link href="/Contact" prefetch={false} onClick={toggleMenu}>Contact</Link>
            <Link href="https://www.instagram.com/cgc_minis?igsh=OGl6MjdmcXBxbmcz" prefetch={false} onClick={toggleMenu}>IG</Link>
            <Link href="/" prefetch={false} onClick={toggleMenu}>Mail</Link>
          </li>
        </ul>
        </>
      </div>
    </section>
    </>
  )
};