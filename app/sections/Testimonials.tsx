import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50 text-center font-sans" id="testimonials">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-10">What Clients Say</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {[
          {
            name: "NGO Director",
            country: "Kenya",
            quote: "Lugha has been an incredible partner in our Swahili campaigns.",
            img: "/images.jfif",
          },
          {
            name: "HR Lead",
            country: "India",
            quote: "Professional and fast turnaround. Highly recommended.",
            img: "/1827+Marketing+-+Business+Benefits+of+LinkedIn+Profiles+for+Your+Team.jfif",
          },
          {
            name: "Project Manager",
            country: "Tanzania",
            quote: "Timely and culturally accurate translations that helped our mission succeed.",
            img: "/images.jfif",
          },
          {
            name: "Program Officer",
            country: "Bangladesh",
            quote: "Lugha’s interpreters made our multilingual events smooth and inclusive.",
            img: "/1827+Marketing+-+Business+Benefits+of+LinkedIn+Profiles+for+Your+Team.jfif",
          },
        ].map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-[#A1B6DA]"
            />
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-[#2C3E70] mx-auto mb-3" />
            <p className="text-gray-700 italic mb-3">“{t.quote}”</p>
            <h4 className="font-semibold text-[#2C3E70]">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.country}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
