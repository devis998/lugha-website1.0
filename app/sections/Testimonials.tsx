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
    <section id="testimonials" className="py-20 bg-white text-center font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-lugha-navy mb-10">What Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-lugha-mist p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-lugha-teal"
              />
              <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-lugha-teal mx-auto mb-3" />
              <p className="text-lugha-ink italic mb-3">“{t.quote}”</p>
              <h4 className="font-semibold text-lugha-navy">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
