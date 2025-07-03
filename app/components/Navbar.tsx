'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="pl-2">
          <Image
            src="/lugha-logo.png"
            alt="Lugha Logo"
            width={110}
            height={36}
            className="rounded"
          />
        </a>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center flex-1 justify-center space-x-6 text-lugha-navy font-medium text-sm tracking-wide">
          {[
            'services', 'about', 'testimonials', 'clients', 'partners',
            'languages', 'careers', 'blog', 'contact'
          ].map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="relative hover:text-lugha-coral transition duration-200 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-lugha-coral after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* HAMBURGER ICON (MOBILE) */}
        <div className="md:hidden pr-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-lugha-navy focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-lugha-mist px-6 pb-4 pt-2 flex flex-col space-y-2 text-center text-lugha-navy font-medium">
          {[
            'services', 'about', 'testimonials', 'clients', 'partners',
            'languages', 'careers', 'blog', 'contact'
          ].map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-lugha-coral transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
