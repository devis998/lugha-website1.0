export default function Partners() {
  return (
    <section className="py-20 bg-gray-50 text-center font-sans" id="partners">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">Our Partners</h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Language is the hidden thread behind every global collaboration. From bold startups to humanitarian giants,
        organizations partner with Lugha to make their message heard — clearly, accurately, and in the right language.
      </p>

      <p className="text-sm text-gray-500 max-w-lg mx-auto mb-8 italic">
        Join the growing network of purpose-driven teams shaping the world — and trust us to help you speak to it.
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-block bg-[#2C3E70] text-white px-6 py-3 rounded-md font-medium hover:bg-[#A1B6DA] transition mb-10"
      >
        Become a Partner
      </a>

      <div className="flex justify-center flex-wrap gap-6 px-4 mt-10">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition min-w-[140px]">
          Partner X
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition min-w-[140px]">
          Partner Y
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition min-w-[140px]">
          Partner Z
        </div>
      </div>
    </section>
  )
}
