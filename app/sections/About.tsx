<section id="about" className="py-24 bg-lugha-mist font-sans overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 lg:px-20">

    {/* LEFT IMAGE */}
    <div
      className={`relative w-full md:w-1/2 max-w-md h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Image
        src="/team.jpeg"
        alt="Lugha Team"
        fill
        className="object-cover object-top"
      />
    </div>

    {/* RIGHT TEXT */}
    <div
      className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 delay-150 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <UsersIcon className="h-10 w-10 text-lugha-teal mx-auto md:mx-0 mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold text-lugha-navy mb-4">Who We Are</h2>
      <p className="text-lg text-lugha-ink max-w-xl leading-relaxed mb-4">
        Lugha is a culturally diverse team of language experts across East Africa and South Asia, helping organizations connect meaningfully through expert translation and localization.
      </p>
      <p className="text-sm text-gray-500">
        Our team blends native speakers, translators, and educators who understand regional context, tone, and culture.
      </p>
    </div>
  </div>
</section>
