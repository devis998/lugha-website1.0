export default function Blog() {
  return (
    <section className="py-20 bg-white text-center font-sans" id="blog">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">From the Blog</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore how Lugha supports organizations across continents with impactful language and cultural solutions.
      </p>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto px-4">
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md text-left transition">
          <h3 className="text-lg font-semibold text-[#2C3E70]">The Importance of Culturally Accurate Translation</h3>
          <p className="text-sm text-gray-600 mt-2">
            Learn how translation goes beyond words in cross-cultural settings.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md text-left transition">
          <h3 className="text-lg font-semibold text-[#2C3E70]">How Lugha Helped a Health NGO Reach Rural Tanzania</h3>
          <p className="text-sm text-gray-600 mt-2">
            Case study on translation & voiceover in Swahili.
          </p>
        </div>
      </div>
    </section>
  );
}
