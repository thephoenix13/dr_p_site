import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { CONTACT } from '../../data/content';

interface CTABandProps {
  title?: string;
  description?: string;
}

export function CTABand({ title = 'Ready to Protect Your Workforce?', description = 'Talk to our occupational health experts and discover how Dr P can streamline your compliance and improve employee wellbeing.' }: CTABandProps) {
  return (
    <section className="relative bg-primary py-16 md:py-20 overflow-hidden noise" aria-label="Call to action">
      <div className="absolute inset-0 gradient-mesh-dark" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONTACT.calendar}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
