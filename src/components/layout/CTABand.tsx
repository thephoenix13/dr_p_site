import { Calendar, Phone } from 'lucide-react';
import { CONTACT } from '../../data/content';

interface CTABandProps {
  title?: string;
  description?: string;
}

export function CTABand({ title = 'Ready to Protect Your Workforce?', description = 'Talk to our occupational health experts and discover how Dr P can streamline your compliance and improve employee wellbeing.' }: CTABandProps) {
  return (
    <section className="bg-primary py-16 md:py-20" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONTACT.calendar}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book a Demo
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
