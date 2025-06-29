export default function Clients() {
  return (
    <section className="py-20 bg-white text-center font-sans" id="clients">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">Our Clients</h2>
      <p className="text-gray-600 mb-10">
        Trusted by NGOs, startups, health institutions, and international organizations.
      </p>

      {/* Scroll Animation Wrapper */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-12 animate-scroll whitespace-nowrap px-4 hover:[animation-play-state:paused]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {[...Array(12)].map((_, i) => (
            <img
              key={i}
              src="/lugha-logo.png"
              alt={`Client ${i + 1}`}
              className="h-16 w-auto inline-block grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
