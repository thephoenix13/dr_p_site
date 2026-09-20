import { Phone, Mail, MessageCircle, MapPin, Clock, Calendar, Linkedin } from 'lucide-react';
import { ContactChannelCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CONTACT, BUSINESS_HOURS } from '../data/content';

export function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Contact Us</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch with Dr P
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Ready to discuss your workforce health needs? Reach out through any of the channels below. Our team typically responds within 2 business hours.
          </p>
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
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="accent">Schedule a Meeting</Badge>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-4 mb-2">Book a Demo or Consultation</h2>
            <p className="text-neutral-500">Pick a time that works for you. Our team will prepare a personalized walkthrough of how Dr P can support your organization.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <div className="p-8 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Schedule via Calendar</h3>
                <p className="text-neutral-500 mb-6">Click below to view available time slots and book your meeting.</p>
                <a
                  href={CONTACT.calendar}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5" />
                  Open Calendar
                </a>
              </div>
            </div>
          </div>
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
              <div className="rounded-xl overflow-hidden border border-neutral-200 h-64 bg-neutral-100 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Map loads with actual address</p>
                  <p className="text-xs mt-1">Gurugram, Haryana</p>
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
