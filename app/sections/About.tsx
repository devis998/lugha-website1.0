"use client";

import Image from 'next/image'
import { UsersIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function About() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="about" className="py-20 bg-blue-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* LEFT: IMAGE */}
        <div
          className={`relative w-full md:w-1/2 max-w-md h-[550px] rounded-xl overflow-hidden shadow-md transition-opacity duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Image
            src="/team.jpeg" // use a real team-related image here
            alt="Lugha Team"
            fill
            className="object-cover object top"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div
          className={`w-full md:w-1/2 text-center md:text-left transition-opacity duration-1000 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <UsersIcon className="h-10 w-10 text-[#A1B6DA] mx-auto md:mx-0 mb-4" />
          <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-xl leading-relaxed mb-4">
            Lugha is a diverse team of language experts from East Africa and South Asia.
            We’re passionate about helping organizations connect across cultures through
            quality language services.
          </p>
          <p className="text-sm text-gray-600">
            Our team brings together native speakers, translators, interpreters, and educators
            who deeply understand the cultural and linguistic context of the regions we serve.
          </p>
        </div>
      </div>
    </section>
  )
}
