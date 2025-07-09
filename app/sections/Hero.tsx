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
    <section className="relative min-h-screen bg-lugha-navy flex flex-col items-center justify-center px-6 md:px-20 pt-28 pb-20 text-center font-sans overflow-hidden">

      {/* 🔵 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-lugha-navy via-[#1E2A55] to-black opacity-90" />

      {/* 🔮 CENTER GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lugha-coral/30 via-transparent to-transparent blur-3xl opacity-40 pointer-events-none z-0" />

      {/* 🌍 GLOBE OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/globe-bg.avif"
          alt="Background globe"
          fill
          className="object-cover"
        />
      </div>

      {/* 🔤 HERO CONTENT */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
          Bridging Worlds Through Language
        </h1>

        <p className="text-lg md:text-xl text-lugha-mist max-w-2xl mx-auto leading-relaxed mb-8">
          Seamless translation & interpretation across cultures. From Swahili to Gujarati and beyond.
        </p>

        <a
          href="#quote"
          className="inline-block bg-lugha-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition duration-300 shadow-md"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
