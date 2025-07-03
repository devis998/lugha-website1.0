import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

const testimonials = [
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
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-lugha-mist text-center font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-lugha-navy mb-10">What Clients Say</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-12">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-lugha-teal"
            />
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-lugha-teal mx-auto mb-3" />
            <p className="text-lugha-ink italic mb-3">“{t.quote}”</p>
            <h4 className="font-semibold text-lugha-navy">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.country}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
