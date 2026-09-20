import { Link } from 'react-router-dom';
import { HeartPulse, ClipboardCheck, CalendarCheck, Building2, ShieldCheck, Video, ArrowRight, CheckCircle2, Calendar, Phone } from 'lucide-react';
import { ServiceCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { CTABand } from '../components/layout/CTABand';
import { SERVICES, CONTACT } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
};

export function SolutionsOverview() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Our Solutions</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Occupational Health Services for Every Enterprise Need
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From pre-employment screening to onsite health centers, Dr P offers comprehensive workforce health solutions tailored to your industry and compliance requirements.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <CTABand title="Need a Custom Solution?" description="Every enterprise is unique. Let's discuss how Dr P can design an occupational health program that fits your specific needs." />
    </main>
  );
}

interface SolutionDetailProps {
  slug: string;
}

const solutionDetails: Record<string, {
  title: string;
  subtitle: string;
  problem: string;
  whatWeDo: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
}> = {
  'occupational-health-checkups': {
    title: 'Occupational Health Checkups',
    subtitle: 'Comprehensive health assessments tailored to workplace hazards and job roles',
    problem: 'Workplace health risks vary dramatically by industry and role. Generic health checkups miss occupation-specific hazards, leaving employees vulnerable and organizations exposed to compliance gaps.',
    whatWeDo: [
      'Role-specific health assessments based on hazard mapping',
      'Audiometry, spirometry, and vision testing for exposed workers',
      'Biological monitoring for chemical exposure',
      'Fitness-for-duty certifications with detailed medical reports',
      'Trend analysis and population health insights',
    ],
    process: [
      { step: '01', title: 'Hazard Assessment', desc: 'We map workplace hazards to determine required medical tests.' },
      { step: '02', title: 'Program Design', desc: 'Custom checkup protocols aligned with your industry standards.' },
      { step: '03', title: 'Execution', desc: 'Onsite or camp-based assessments with minimal disruption.' },
      { step: '04', title: 'Reporting', desc: 'Detailed individual and aggregate reports with compliance tracking.' },
    ],
    benefits: ['Identify health risks before they become liabilities', 'Meet statutory health examination requirements', 'Reduce absenteeism through early detection', 'Data-driven workforce health insights'],
    faq: [
      { q: 'How long does an occupational health checkup take?', a: 'A standard checkup takes 45-60 minutes. Specialized assessments for high-risk roles may take 90 minutes. Dr P schedules efficiently to minimize workforce disruption.' },
      { q: 'Can checkups be conducted at our premises?', a: 'Yes. Dr P conducts onsite health camps with all necessary equipment. We can screen 100+ employees per day at your facility.' },
      { q: 'What happens if an employee is found unfit?', a: 'We provide detailed medical reports with recommendations. Our occupational physicians can suggest role modifications, treatment plans, or further specialist evaluation.' },
    ],
  },
  'pre-employment-screening': {
    title: 'Pre-Employment Health Screening',
    subtitle: 'Thorough medical evaluations before onboarding to verify fitness for duty',
    problem: 'Hiring employees without proper health screening exposes organizations to workplace injuries, compensation claims, and regulatory penalties. Inconsistent screening processes also create candidate experience issues.',
    whatWeDo: [
      'Standardized pre-employment medical examinations',
      'Role-specific fitness assessments',
      'Drug and alcohol screening where required',
      'Digital reporting with quick turnaround (24-48 hours)',
      'Seamless integration with your HR onboarding workflow',
    ],
    process: [
      { step: '01', title: 'Protocol Setup', desc: 'Define screening requirements based on role and industry.' },
      { step: '02', title: 'Scheduling', desc: 'Candidates book appointments at our nearest center or onsite.' },
      { step: '03', title: 'Assessment', desc: 'Comprehensive medical evaluation by qualified physicians.' },
      { step: '04', title: 'Results', desc: 'Digital fitness certificates delivered to HR within 48 hours.' },
    ],
    benefits: ['Reduce hiring-related health liabilities', 'Ensure candidates are fit for specific job demands', 'Streamline onboarding with fast digital reporting', 'Maintain consistent screening standards across locations'],
    faq: [
      { q: 'How quickly are results delivered?', a: 'Standard pre-employment screening reports are delivered within 24-48 hours through our digital platform. Urgent screenings can be completed same-day.' },
      { q: 'Is the process confidential for candidates?', a: 'Absolutely. Medical data is handled with strict confidentiality. Only fitness status and job-relevant findings are shared with the employer, as per medical ethics guidelines.' },
      { q: 'Can we screen candidates in multiple cities?', a: 'Yes. Dr P has a network of centers across India. We can coordinate multi-location screenings with consistent protocols and centralized reporting.' },
    ],
  },
  'annual-health-screenings': {
    title: 'Annual / Periodic Health Screenings',
    subtitle: 'Scheduled health surveillance to detect early signs of occupational illness',
    problem: 'Without periodic health monitoring, occupational diseases progress silently. By the time symptoms appear, the damage may be irreversible — and the organization faces significant compliance and compensation risks.',
    whatWeDo: [
      'Annual statutory health examinations as per factory rules',
      'Periodic surveillance for high-risk exposures (noise, chemicals, dust)',
      'Lifestyle disease screening (diabetes, hypertension, cardiac risk)',
      'Mental health and stress assessments',
      'Trend reporting and population health dashboards',
    ],
    process: [
      { step: '01', title: 'Annual Planning', desc: 'Schedule screenings across departments to maintain operations.' },
      { step: '02', title: 'Execution', desc: 'Onsite camps or center visits with comprehensive protocols.' },
      { step: '03', title: 'Analysis', desc: 'Individual results and population health trend analysis.' },
      { step: '04', title: 'Intervention', desc: 'Referrals, wellness programs, and workplace modifications.' },
    ],
    benefits: ['Early detection of occupational and lifestyle diseases', 'Continuous compliance with statutory requirements', 'Reduced healthcare costs through preventive care', 'Improved workforce productivity and morale'],
    faq: [
      { q: 'How often should periodic screenings be conducted?', a: 'For most workers, annual screenings are recommended. High-risk roles may require quarterly or half-yearly surveillance. Dr P helps you determine the right frequency based on your industry and exposure levels.' },
      { q: 'What tests are included in annual screenings?', a: 'Standard panels include physical examination, blood tests, urine analysis, chest X-ray, ECG, audiometry, and spirometry. Additional tests are added based on occupational exposure.' },
      { q: 'How do you handle follow-up for abnormal findings?', a: 'All abnormal results trigger a structured follow-up protocol including specialist referrals, repeat testing, and workplace accommodation recommendations where needed.' },
    ],
  },
  'onsite-ohc': {
    title: 'Onsite Occupational Health Centers',
    subtitle: 'Fully equipped health clinics at your premises with qualified medical staff',
    problem: 'Workers in remote or large facilities face delays accessing medical care. Offsite visits result in productivity loss, and emergency situations require immediate on-premises medical capability.',
    whatWeDo: [
      'Design and setup of fully equipped OHC facilities',
      'Staffing with qualified occupational health nurses and physicians',
      'Emergency first aid and stabilization capabilities',
      'Routine health services and return-to-work assessments',
      'Digital health records and compliance documentation',
    ],
    process: [
      { step: '01', title: 'Needs Assessment', desc: 'Evaluate workforce size, risks, and regulatory requirements.' },
      { step: '02', title: 'Center Design', desc: 'Plan facility layout, equipment, and staffing model.' },
      { step: '03', title: 'Setup & Launch', desc: 'Install equipment, hire staff, and begin operations.' },
      { step: '04', title: 'Manage & Scale', desc: 'Ongoing management with performance reporting.' },
    ],
    benefits: ['Immediate medical access for all employees', 'Reduced downtime from health issues', 'Full regulatory compliance with factory act requirements', 'Comprehensive health data and trend tracking'],
    faq: [
      { q: 'What is the minimum workforce size for an OHC?', a: 'Under the Factories Act, establishments with 250+ workers must provide an occupational health center. However, Dr P can design scaled solutions for organizations of any size.' },
      { q: 'Who staffs the OHC?', a: 'Dr P provides qualified occupational health nurses for daily operations and visiting occupational physicians. All staff are trained in industrial first aid and emergency response.' },
      { q: 'How quickly can an OHC be operational?', a: 'Standard OHC setup takes 4-6 weeks from approval to full operation. This includes facility preparation, equipment procurement, staff recruitment, and regulatory approvals.' },
    ],
  },
  'compliance-audit': {
    title: 'Compliance & Audit Support',
    subtitle: 'End-to-end regulatory compliance management and audit preparation',
    problem: 'Occupational health compliance involves complex, evolving regulations across central and state laws. Missing a single requirement can result in penalties, work stoppages, or criminal liability for management.',
    whatWeDo: [
      'Comprehensive compliance gap analysis',
      'Statutory health examination scheduling and tracking',
      'Documentation and record-keeping management',
      'Audit preparation and mock inspections',
      'Regulatory updates and advisory services',
    ],
    process: [
      { step: '01', title: 'Gap Analysis', desc: 'Audit current compliance status against all applicable regulations.' },
      { step: '02', title: 'Remediation Plan', desc: 'Prioritized action plan to close compliance gaps.' },
      { step: '03', title: 'Implementation', desc: 'Execute health examination schedules and documentation.' },
      { step: '04', title: 'Monitoring', desc: 'Continuous tracking with alerts for upcoming deadlines.' },
    ],
    benefits: ['Eliminate risk of regulatory penalties', 'Stay ahead of evolving compliance requirements', 'Reduce management burden with expert handling', 'Confidence during inspections and audits'],
    faq: [
      { q: 'Which regulations does Dr P help comply with?', a: 'We cover the Factories Act 1948, state OSHAS rules, Mines Act, Motor Vehicles Act health provisions, ISO 45001, and industry-specific regulations like chemical handling rules and biosafety standards.' },
      { q: 'How do you track compliance deadlines?', a: 'Our digital compliance platform tracks all statutory health examination due dates, license renewals, and documentation requirements with automated alerts to your EHS team.' },
      { q: 'Can Dr P represent us during inspections?', a: 'Yes. Our compliance team can accompany you during regulatory inspections, present documentation, and address inspector queries related to occupational health.' },
    ],
  },
  'telemedicine-opd': {
    title: 'Telemedicine & OPD Services',
    subtitle: 'Remote medical consultations and outpatient services for your workforce',
    problem: 'Employees in remote locations, shift workers, and those with mobility challenges struggle to access timely medical care. Delayed consultations lead to worsened conditions and increased absenteeism.',
    whatWeDo: [
      '24/7 telemedicine consultations with qualified physicians',
      'Specialist referrals and appointment coordination',
      'Prescription management and medicine delivery',
      'Mental health counseling sessions',
      'Health helpline with triage support',
    ],
    process: [
      { step: '01', title: 'Access', desc: 'Employees connect via app, web, or phone — available 24/7.' },
      { step: '02', title: 'Consultation', desc: 'Video or phone consultation with a qualified physician.' },
      { step: '03', title: 'Treatment', desc: 'Digital prescriptions, referrals, or follow-up scheduling.' },
      { step: '04', title: 'Follow-up', desc: 'Automated check-ins and wellness tracking.' },
    ],
    benefits: ['Instant access to medical advice anytime', 'Reduce unnecessary hospital visits', 'Support remote and shift-work populations', 'Improve overall employee health engagement'],
    faq: [
      { q: 'Is telemedicine suitable for all medical concerns?', a: 'Telemedicine is ideal for consultations, follow-ups, minor ailments, and mental health support. For emergencies or conditions requiring physical examination, we guide employees to the nearest facility.' },
      { q: 'How is data privacy maintained?', a: 'All telemedicine consultations are conducted on HIPAA-equivalent secure platforms. Medical records are encrypted and accessible only to authorized personnel.' },
      { q: 'Can employees use this for their family members?', a: 'Yes, Dr P telemedicine can be extended to cover employee dependents as part of a comprehensive health benefit program.' },
    ],
  },
};

export function SolutionDetail({ slug }: SolutionDetailProps) {
  const detail = solutionDetails[slug];
  if (!detail) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-2xl font-bold text-primary">Solution not found</h1>
        <Link to="/solutions" className="text-accent hover:underline mt-4 inline-block">← Back to Solutions</Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/solutions" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            ← All Solutions
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{detail.title}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{detail.subtitle}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="warning">The Problem</Badge>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-4 mb-4">Why This Matters</h2>
            <p className="text-neutral-500 text-lg leading-relaxed">{detail.problem}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">What Dr P Does</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.whatWeDo.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.process.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl border border-neutral-200">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.benefits.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-neutral-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion items={detail.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8">Talk to our occupational health experts about {detail.title.toLowerCase()} for your organization.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT.calendar} className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
              Book a Demo
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
