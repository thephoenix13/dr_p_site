import { Link } from 'react-router-dom';
import { Factory, Monitor, Pill, Car, FlaskConical, Mountain, Truck, CheckCircle2, AlertTriangle, Shield, Calendar, Phone } from 'lucide-react';
import { Card, IndustryCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CTABand } from '../components/layout/CTABand';
import { INDUSTRIES, CONTACT } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Pill: <Pill className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};

export function IndustriesOverview() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Industries We Serve</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Occupational Health Solutions for Every Industry
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Dr P understands that each industry has unique health risks and compliance requirements. Our programs are tailored to address sector-specific challenges.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.slug}
                title={industry.title}
                icon={iconMap[industry.icon]}
                painPoints={industry.painPoints}
                href={`/industries/${industry.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Don't See Your Industry?" description="Dr P serves organizations across all sectors. Contact us to discuss how we can address your industry-specific workforce health challenges." />
    </main>
  );
}

interface IndustryDetailProps {
  slug: string;
}

export function IndustryDetail({ slug }: IndustryDetailProps) {
  const industry = INDUSTRIES.find(i => i.slug === slug);
  if (!industry) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-2xl font-bold text-primary">Industry not found</h1>
        <Link to="/industries" className="text-accent hover:underline mt-4 inline-block">← Back to Industries</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/industries" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            ← All Industries
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
              {iconMap[industry.icon]}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {industry.title}
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            Tailored occupational health solutions for the {industry.title.toLowerCase()} sector, addressing industry-specific risks and regulatory requirements.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <Badge variant="warning">Key Health Risks</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                Common Occupational Health Challenges
              </h2>
              <ul className="space-y-3">
                {industry.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-warning shrink-0 mt-1" />
                    <span className="text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-accent" />
                <Badge variant="accent">Compliance Requirements</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                Regulatory Framework
              </h2>
              <ul className="space-y-3">
                {industry.compliance.map((reg) => (
                  <li key={reg} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span className="text-neutral-700">{reg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Dr P Helps */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
            How Dr P Supports {industry.title} Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-semibold text-primary mb-2">Industry-Specific Screening</h3>
              <p className="text-sm text-neutral-500">Health assessments designed around the specific hazards and exposure risks common in {industry.title.toLowerCase()} workplaces.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-primary mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-neutral-500">Full compliance management for {industry.compliance.join(', ')} and other applicable regulations.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-primary mb-2">Onsite Services</h3>
              <p className="text-sm text-neutral-500">Occupational health centers and camps at your facilities, minimizing workforce disruption and ensuring consistent care.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-primary mb-2">Emergency Preparedness</h3>
              <p className="text-sm text-neutral-500">Emergency response protocols, first aid training, and crisis medical support tailored to your operational risks.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-primary mb-2">Health Surveillance</h3>
              <p className="text-sm text-neutral-500">Ongoing monitoring programs to detect early signs of occupational illness specific to your industry exposures.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-primary mb-2">Data & Reporting</h3>
              <p className="text-sm text-neutral-500">Comprehensive health analytics, compliance dashboards, and trend reporting for management decision-making.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Protect Your {industry.title} Workforce
          </h2>
          <p className="text-white/70 mb-8">
            Let Dr P design an occupational health program tailored to your {industry.title.toLowerCase()} operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT.calendar} className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </a>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors">
              <Phone className="w-5 h-5" />
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
