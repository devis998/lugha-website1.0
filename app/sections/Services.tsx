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
    <section id="services" className="py-20 bg-lugha-mist text-center font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-lugha-navy mb-4">What We Do</h2>
        <p className="text-lugha-ink max-w-2xl mx-auto mb-12">
          We deliver expert translation, interpretation, and localization services in African and Asian languages — empowering cross-cultural success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard icon={<DocumentTextIcon className="h-7 w-7 text-white" />} title="Document Translation" desc="Precise and professional translation for legal, medical, business, and academic content." />
          <ServiceCard icon={<ChatBubbleLeftRightIcon className="h-7 w-7 text-white" />} title="Interpretation" desc="Live interpretation for virtual meetings, events, interviews, and healthcare services." />
          <ServiceCard icon={<SpeakerWaveIcon className="h-7 w-7 text-white" />} title="Voiceover" desc="Culturally accurate voiceover recordings for training, ads, and digital content." />
          <ServiceCard icon={<LanguageIcon className="h-7 w-7 text-white" />} title="Subtitling" desc="Professional subtitles for regional films, NGO campaigns, training materials and more." />
          <ServiceCard icon={<PencilIcon className="h-7 w-7 text-white" />} title="Transcription" desc="Clean transcripts and time-coded scripts for audio, video, and multi-speaker formats." />
          <ServiceCard icon={<GlobeAsiaAustraliaIcon className="h-7 w-7 text-white" />} title="Localization" desc="Adapting websites, apps, and messages for African and Asian audiences." />
          <ServiceCard icon={<AcademicCapIcon className="h-7 w-7 text-white" />} title="Language Training" desc="Personalized language training in Swahili, Hindi, Bengali, and more." />
          <ServiceCard icon={<ClipboardDocumentListIcon className="h-7 w-7 text-white" />} title="Cultural Consulting" desc="Guidance to ensure respectful and effective multilingual communication." />
        </div>
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
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-lugha-teal p-3 rounded-full shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-lugha-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
