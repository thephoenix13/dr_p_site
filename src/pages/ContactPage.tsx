import { Phone, Mail, MessageCircle, MapPin, Clock, Calendar, Linkedin, Sparkles, ArrowUpRight } from 'lucide-react';
import { ContactChannelCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ScrollReveal } from '../components/ui/Animations';
import { CONTACT, BUSINESS_HOURS } from '../data/content';

export function ContactPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24 overflow-hidden noise">
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/2c94a2c9-a609-4ad0-8041-ecb667c3f760/_result.png" 
            alt="" 
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-600/90" />
          <div className="absolute inset-0 gradient-mesh-dark" />
        </div>
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/90 font-medium">We're here to help</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 tracking-tight">
              Get in Touch with{' '}
              <span className="text-gradient">Dr P</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Ready to discuss your workforce health needs? Reach out through any of the channels below. Our team typically responds within 2 business hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Choose Your Preferred Channel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ContactChannelCard
              icon={<Phone className="w-6 h-6" />}
              title="Call Us"
              description="Speak directly with our occupational health consultants"
              href={CONTACT.phoneHref}
              actionLabel={CONTACT.phone}
            />
            <ContactChannelCard
              icon={<Mail className="w-6 h-6" />}
              title="Email Us"
              description="Send us a detailed inquiry and we'll respond promptly"
              href={CONTACT.emailHref}
              actionLabel={CONTACT.email}
            />
            <ContactChannelCard
              icon={<MessageCircle className="w-6 h-6" />}
              title="WhatsApp"
              description="Quick questions? Chat with us on WhatsApp"
              href={CONTACT.whatsappHref}
              actionLabel="Chat on WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 md:py-20 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Badge variant="accent">Schedule a Meeting</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-4 mb-2 tracking-tight">Book a Demo or Consultation</h2>
              <p className="text-neutral-500 max-w-xl mx-auto">Pick a time that works for you. Our team will prepare a personalized walkthrough of how Dr P can support your organization.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm card-hover">
                <div className="p-8 md:p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Schedule via Calendar</h3>
                  <p className="text-neutral-500 mb-8 max-w-md mx-auto">Click below to view available time slots and book your meeting with our team.</p>
                  <a
                    href={CONTACT.calendar}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5" />
                    Open Calendar
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Office & Hours */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address & Map */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" />
                Our Office
              </h2>
              <p className="text-neutral-700 mb-6">{CONTACT.address}</p>
              <div className="rounded-xl overflow-hidden border border-neutral-200 h-64 relative">
                <img 
                  src="https://image.qwenlm.ai/generated-images/2c94a2c9-a609-4ad0-8041-ecb667c3f760/_result.png" 
                  alt="Dr P office building in Gurugram" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Dr P Office, Gurugram</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Business Hours
              </h2>
              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mb-8">
                {BUSINESS_HOURS.map((bh, i) => (
                  <div key={bh.day} className={`flex items-center justify-between px-6 py-4 ${i !== BUSINESS_HOURS.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                    <span className="font-medium text-neutral-700">{bh.day}</span>
                    <span className="text-neutral-500">{bh.hours}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Linkedin className="w-6 h-6 text-accent" />
                Connect With Us
              </h2>
              <a
                href={CONTACT.linkedin}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
