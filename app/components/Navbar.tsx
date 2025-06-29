'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30 font-sans">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
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
        <div className="hidden md:flex items-center flex-1 justify-center space-x-6 text-lugha-primary font-medium text-sm tracking-wide">
          <a href="#services" className="hover:text-lugha-accent transition">Services</a>
          <a href="#about" className="hover:text-lugha-accent transition">About</a>
          <a href="#testimonials" className="hover:text-lugha-accent transition">Testimonials</a>
          <a href="#clients" className="hover:text-lugha-accent transition">Clients</a>
          <a href="#partners" className="hover:text-lugha-accent transition">Partners</a>
          <a href="#languages" className="hover:text-lugha-accent transition">Languages</a>
          <a href="#careers" className="hover:text-lugha-accent transition">Careers</a>
          <a href="#blog" className="hover:text-lugha-accent transition">Blog</a>
          <a href="#contact" className="hover:text-lugha-accent transition">Contact</a>
        </div>

        {/* HAMBURGER / CLOSE ICON (MOBILE) */}
        <div className="md:hidden pr-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-lugha-primary focus:outline-none">
            {isOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-lugha-accent/10 px-4 pb-4 pt-2 flex flex-col space-y-2 text-center text-lugha-primary font-medium">
          <a href="#services" className="hover:text-lugha-accent transition">Services</a>
          <a href="#about" className="hover:text-lugha-accent transition">About</a>
          <a href="#testimonials" className="hover:text-lugha-accent transition">Testimonials</a>
          <a href="#clients" className="hover:text-lugha-accent transition">Clients</a>
          <a href="#partners" className="hover:text-lugha-accent transition">Partners</a>
          <a href="#languages" className="hover:text-lugha-accent transition">Languages</a>
          <a href="#careers" className="hover:text-lugha-accent transition">Careers</a>
          <a href="#blog" className="hover:text-lugha-accent transition">Blog</a>
          <a href="#contact" className="hover:text-lugha-accent transition">Contact</a>
        </div>
      )}
    </nav>
  )
}
