import { Link } from 'react-router-dom';
import { Calendar, Phone, HeartPulse, ClipboardCheck, CalendarCheck, Building2, ShieldCheck, Video, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { Card, ServiceCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { CTABand } from '../components/layout/CTABand';
import { SERVICES, STATS, TESTIMONIALS, LOGO_CLOUD, FAQ_HOME, CONTACT } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
};

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-6 bg-white/10 text-white border border-white/20">
              Trusted by 500+ Enterprises
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Workforce Health Solutions That Drive Compliance & Productivity
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Dr P delivers comprehensive occupational health services — from pre-employment screenings to onsite health centers — helping enterprises protect their workforce and meet regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONTACT.calendar} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-lg">
                <Calendar className="w-5 h-5" />
                Book a Demo
              </a>
              <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-lg">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 md:py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-neutral-500 mb-8 uppercase tracking-wide">Trusted by leading organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {LOGO_CLOUD.map((name) => (
              <div key={name} className="text-lg md:text-xl font-bold text-neutral-300 hover:text-neutral-500 transition-colors">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="warning">The Challenge</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4 mb-4">
              Workplace Health Risks Are Costing Your Business More Than You Think
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Non-compliance penalties, absenteeism, reduced productivity, and workforce health issues create a compounding cost that most enterprises underestimate until it's too late.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '₹2.5L+', desc: 'Average penalty per compliance violation under the Factories Act' },
              { stat: '18%', desc: 'Productivity loss from untreated occupational health conditions' },
              { stat: '3.2x', desc: 'Higher employee turnover in companies without health programs' },
            ].map((item) => (
              <Card key={item.stat} className="text-center">
                <div className="text-3xl font-bold text-danger mb-2">{item.stat}</div>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent">Our Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4 mb-6">
                One Partner for All Your Occupational Health Needs
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                Dr P combines medical expertise with technology to deliver end-to-end workforce health management. From regulatory compliance to employee wellness, we handle everything so you can focus on your business.
              </p>
              <ul className="space-y-3">
                {['Pan-India network of 200+ medical professionals', 'Digital health records with real-time compliance dashboards', 'Customized programs for your industry and workforce size', 'Dedicated account management and 24/7 support'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">100% Compliance</h3>
                    <p className="text-sm text-neutral-500">Stay ahead of regulatory requirements</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Healthier Workforce</h3>
                    <p className="text-sm text-neutral-500">Early detection and preventive care</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Zero Downtime</h3>
                    <p className="text-sm text-neutral-500">Onsite services minimize disruption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4 mb-4">
              Comprehensive Occupational Health Services
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Tailored solutions for every stage of workforce health management, from hiring to ongoing wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDesc}
                icon={iconMap[service.icon]}
                href={`/solutions/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4 mb-4">
              Getting Started with Dr P Is Simple
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your workforce size, industry risks, and compliance needs.' },
              { step: '02', title: 'Custom Plan', desc: 'Our team designs a tailored occupational health program for your organization.' },
              { step: '03', title: 'Deployment', desc: 'We deploy resources — onsite or offsite — and begin health assessments.' },
              { step: '04', title: 'Ongoing Support', desc: 'Continuous monitoring, reporting, and compliance management.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <Card key={t.author} className="flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-primary text-sm">{t.author}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="accent">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={FAQ_HOME} />
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />
    </main>
  );
}
