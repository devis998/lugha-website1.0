export default function Careers() {
  const roles = [
    {
      title: "Freelance Translator (Gujarati)",
      details: "Remote · Flexible · Paid per project",
    },
    {
      title: "Swahili Interpreter",
      details: "Remote or On-site · Nairobi or Dar es Salaam",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center font-sans" id="careers">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">Join Our Team</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        At Lugha, we’re building a collective of passionate linguists, cultural connectors, and project leaders shaping global conversations.
        If you believe in the power of language, we want to hear from you.
      </p>

      <div className="max-w-2xl mx-auto space-y-4 px-4">
        {roles.map((role, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl text-left shadow-sm border border-blue-100 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-[#2C3E70] mb-1">{role.title}</h3>
            <p className="text-sm text-gray-600">{role.details}</p>
          </div>
        ))}
      </div>

      {/* Optional CTA */} 
     {/* <a
        href="#contact"
        className="mt-10 inline-block bg-[#2C3E70] text-white px-6 py-3 rounded-md font-medium hover:bg-[#A1B6DA] transition"
      > 
        Send Your CV
      </a> */}
    </section>
  );
}
