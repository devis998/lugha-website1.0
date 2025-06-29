'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-screen bg-blue-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-12 overflow-hidden">
      
      {/* 🌍 Background Globe or Flags */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <Image
          src="/globe-bg.avif" // or /flags-bg.png
          alt="Decorative background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* LEFT: IMAGE */}
      <div
        className={`relative w-full md:w-1/2 flex justify-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="relative w-full max-w-md h-[400px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-lg z-10">
          <Image
            src="/Heroimage.jpeg"
            alt="Global communication"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT: TEXT + CTA */}
      <div
        className={`w-full md:w-1/2 text-center md:text-left transition-opacity duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } z-10`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E70] mb-6 font-sans">
          Welcome to Lugha
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed mb-6">
          Bridging cultures through expert translation and interpretation —<br />
          from Swahili to Gujarati and beyond.
        </p>

        {/* CTA Button */}
        <a
          href="#quote"
          className="inline-block bg-[#2C3E70] text-white px-6 py-3 rounded-md font-medium hover:bg-[#A1B6DA] transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
