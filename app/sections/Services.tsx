import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  SpeakerWaveIcon,
  LanguageIcon,
  PencilIcon,
  GlobeAsiaAustraliaIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white text-center font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-lugha-navy mb-4">Our Services</h2>
      <p className="text-lugha-ink max-w-2xl mx-auto mb-12 text-base">
        We specialize in African and Asian languages, offering expert solutions across sectors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        <ServiceCard icon={<DocumentTextIcon className="h-8 w-8 text-white" />} title="Document Translation" desc="Accurate, timely translations for legal, medical, business and more." />
        <ServiceCard icon={<ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />} title="Interpretation" desc="Real-time interpretation for conferences, interviews, healthcare, and NGOs." />
        <ServiceCard icon={<SpeakerWaveIcon className="h-8 w-8 text-white" />} title="Voiceover" desc="Multilingual voiceover for e-learning, media, and marketing materials." />
        <ServiceCard icon={<LanguageIcon className="h-8 w-8 text-white" />} title="Subtitling" desc="Subtitles for training videos, public campaigns, and regional films." />
        <ServiceCard icon={<PencilIcon className="h-8 w-8 text-white" />} title="Transcription" desc="Clean and time-coded transcripts from interviews, calls, and audio." />
        <ServiceCard icon={<GlobeAsiaAustraliaIcon className="h-8 w-8 text-white" />} title="Localization" desc="Tailoring apps, websites, and content to African and Asian markets." />
        <ServiceCard icon={<AcademicCapIcon className="h-8 w-8 text-white" />} title="Language Training" desc="Learn Swahili, Hindi, Bengali, Gujarati and more through live training." />
        <ServiceCard icon={<ClipboardDocumentListIcon className="h-8 w-8 text-white" />} title="Cultural Consulting" desc="Guiding brands on respectful and relevant cultural communication." />
      </div>
    </section>
  );
}

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <div className="bg-lugha-mist p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-lugha-teal p-3 rounded-full shadow">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-lugha-navy mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
