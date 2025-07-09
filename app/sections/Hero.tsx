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
    <section className="relative min-h-screen bg-lugha-navy text-white flex flex-col items-center justify-center px-6 md:px-16 pt-32 pb-20 text-center overflow-hidden">
      
      {/* Background Globe */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/globe-bg.avif"
          alt="Background globe"
          fill
          className="object-cover"
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lugha-coral/30 via-transparent to-transparent blur-3xl opacity-40 z-0 pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Bridging Worlds Through Language
        </h1>
        <p className="text-lg md:text-xl text-lugha-mist max-w-2xl mx-auto mb-8">
          Seamless translation & interpretation across cultures. From Swahili to Gujarati and beyond.
        </p>
        <a
          href="#quote"
          className="inline-block bg-lugha-teal hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition duration-300"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
