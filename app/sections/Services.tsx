import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  SpeakerWaveIcon,
  LanguageIcon,
  PencilIcon,
  GlobeAsiaAustraliaIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-center font-sans">
      <h2 className="text-3xl font-bold text-[#2C3E70] mb-4">Our Services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        We specialize in African and Asian languages, offering expert solutions across sectors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {/* Document Translation */}
        <ServiceCard
          icon={<DocumentTextIcon className="h-8 w-8 text-white" />}
          title="Document Translation"
          desc="Accurate, timely translations for legal, medical, business and more."
        />

        {/* Interpretation */}
        <ServiceCard
          icon={<ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />}
          title="Interpretation"
          desc="Real-time interpretation for conferences, interviews, healthcare, and NGOs."
        />

        {/* Voiceover */}
        <ServiceCard
          icon={<SpeakerWaveIcon className="h-8 w-8 text-white" />}
          title="Voiceover"
          desc="Multilingual voiceover for e-learning, media, and marketing materials."
        />

        {/* Subtitling */}
        <ServiceCard
          icon={<LanguageIcon className="h-8 w-8 text-white" />}
          title="Subtitling"
          desc="Subtitles for training videos, public campaigns, and regional films."
        />

        {/* Transcription */}
        <ServiceCard
          icon={<PencilIcon className="h-8 w-8 text-white" />}
          title="Transcription"
          desc="Clean and time-coded transcripts from interviews, calls, and audio."
        />

        {/* Localization */}
        <ServiceCard
          icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-white" />}
          title="Localization"
          desc="Tailoring apps, websites, and content to African and Asian markets."
        />

        {/* Language Training */}
        <ServiceCard
          icon={<AcademicCapIcon className="h-8 w-8 text-white" />}
          title="Language Training"
          desc="Learn Swahili, Hindi, Bengali, Gujarati and more through live training."
        />

        {/* Cultural Consulting */}
        <ServiceCard
          icon={<ClipboardDocumentListIcon className="h-8 w-8 text-white" />}
          title="Cultural Consulting"
          desc="Guiding brands on respectful and relevant cultural communication."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-[#A1B6DA] p-3 rounded-full">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-[#2C3E70] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  )
}
