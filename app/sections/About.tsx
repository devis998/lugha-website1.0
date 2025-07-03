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
    <section id="about" className="py-20 bg-white text-lugha-ink font-sans">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <UsersIcon className="h-10 w-10 text-lugha-teal mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-lugha-navy mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-4">
          Lugha is a culturally intelligent language partner, made up of a global team of native speakers, translators, and cultural experts. 
          We help brands communicate with clarity and empathy across borders.
        </p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Our specialists bring human context to every translation — ensuring accurate, relevant, and respectful communication from East Africa to South Asia.
        </p>
      </div>
    </section>
  );
}
