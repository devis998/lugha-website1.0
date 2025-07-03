import Image from 'next/image';

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-lg font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by leading organizations
        </h2>

        {/* Scrolling Logo Row */}
        <div className="overflow-hidden relative">
          <div
            className="flex gap-12 animate-scroll whitespace-nowrap items-center px-4 hover:[animation-play-state:paused]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {[
              '/client1.svg',
              '/client2.svg',
              '/client3.svg',
              '/client4.svg',
              '/client5.svg',
              '/client6.svg',
              '/client7.svg',
              '/client8.svg',
            ].map((src, i) => (
              <div key={i} className="flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
                <Image
                  src={src}
                  alt={`Client ${i + 1}`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
