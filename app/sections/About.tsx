"use client";

import Image from 'next/image';
import { UsersIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-white text-lugha-ink font-sans">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-12 lg:px-20">
        <div
          className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <UsersIcon className="h-10 w-10 text-lugha-teal mx-auto md:mx-0 mb-4" />
          <h2 className="text-4xl font-bold text-lugha-navy mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-4">
            Lugha is a culturally intelligent language partner, bringing together a global team of native speakers, translators, and cultural experts. We help brands communicate with accuracy and empathy across borders.
          </p>
          <p className="text-sm text-gray-500">
            We serve businesses, NGOs, and institutions with local knowledge and global expertise.
          </p>
        </div>
        <div
          className={`relative w-full md:w-1/2 max-w-md h-[480px] rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Image src="/team.jpeg" alt="Lugha Team" fill className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
