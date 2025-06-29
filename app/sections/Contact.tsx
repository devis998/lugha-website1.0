import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-blue-50 text-center font-sans">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-6">Get in Touch</h2>

      <div className="space-y-4 text-[#2C3E70] mb-6">
        <div className="flex items-center justify-center space-x-2">
          <EnvelopeIcon className="h-5 w-5 text-[#2C3E70]" />
          <span>info@lugha.org</span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <PhoneIcon className="h-5 w-5 text-[#2C3E70]" />
          <span>+91 123 456 7890</span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-[#2C3E70]" />
          <span>Dar es Salaam, Tanzania | Delhi, India</span>
        </div>
      </div>

      <p className="mb-6 text-gray-700">Have a project or question? Let’s talk!</p>

      <a
        href="mailto:hello@lugha.agency"
        className="inline-block bg-[#2C3E70] text-white px-6 py-3 rounded hover:bg-[#A1B6DA] transition"
      >
        Message Us
      </a>
    </section>
  );
}
