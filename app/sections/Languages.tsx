const languages = [
  {
    name: "Swahili",
    translators: 71,
    words: "465,790",
    flag: "/flags/swahil.jpeg",
  },
  {
    name: "Gujarati",
    translators: 67,
    words: "838,421",
    flag: "/flags/hindi.jpeg",
  },
  {
    name: "Hindi",
    translators: 52,
    words: "914,218",
    flag: "/flags/hindi.jpeg",
  },
  {
    name: "Tamil",
    translators: 46,
    words: "734,314",
    flag: "/flags/tamil.png",
  },
  {
    name: "Kinyarwanda",
    translators: 54,
    words: "886,942",
    flag: "/flags/kinyarwanda.jpeg",
  },
  {
    name: "Amharic",
    translators: 16,
    words: "218,587",
    flag: "/flags/amharic.png",
  },
  {
    name: "Arabic",
    translators: 22,
    words: "504,354",
    flag: "/flags/arabic.png",
  },
  {
    name: "French",
    translators: 46,
    words: "843,978",
    flag: "/flags/french.png",
  },
];

export default function Languages() {
  return (
    <section className="py-20 bg-white text-center font-sans" id="languages">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">Languages We Cover</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        From African heartlands to South Asian cities, Lugha bridges language gaps with culturally fluent experts —
        helping organizations connect, educate, and serve with clarity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {languages.map((lang, i) => (
          <div key={i} className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={lang.flag}
                alt={`${lang.name} flag`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-[#2C3E70]">{lang.name}</h3>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{lang.translators}</span> professional translators
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{lang.words}</span> words translated
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
