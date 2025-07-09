'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-6 py-3 bg-white/80 text-[#2C3E70] backdrop-blur-md rounded-full shadow-lg font-sans">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image
            src="/lugha-logo.png"
            alt="Lugha Logo"
            width={100}
            height={32}
            className="rounded bg-white p-1"
          />
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
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

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#2C3E70] focus:outline-none">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center text-sm font-medium">
          {[
            'services', 'about', 'testimonials', 'clients', 'partners',
            'languages', 'careers', 'blog', 'contact'
          ].map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="block text-[#2C3E70] hover:text-lugha-coral transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
