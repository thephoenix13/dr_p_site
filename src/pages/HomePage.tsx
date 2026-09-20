import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, HeartPulse, ClipboardCheck, CalendarCheck, Building2, ShieldCheck, Video, CheckCircle2, ArrowRight, Star, Users, BarChart3, Zap, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Award, Globe2 } from 'lucide-react';
import { Card, ServiceCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';
import { CTABand } from '../components/layout/CTABand';
import { ScrollReveal, AnimatedCounter, Marquee, StaggerChildren, StaggerItem } from '../components/ui/Animations';
import { SERVICES, STATS, TESTIMONIALS, LOGO_CLOUD, FAQ_HOME, CONTACT } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Video: <Video className="w-6 h-6" />,
};

const personas = [
  { id: 'hr', label: 'HR / CHRO', icon: <Users className="w-5 h-5" />, image: 'https://image.qwenlm.ai/generated-images/7e7fec15-d08e-446b-b26c-58123a2504a5/_result.png', headline: 'Zero admin burden.', subheadline: 'Full compliance visibility.', points: ['Digital tracking of who\'s screened and who\'s pending — real-time, always', 'Compliance documents auto-generated, audit-ready without manual effort', 'One vendor, one invoice, one dedicated point of contact for everything', 'Pre-employment reports delivered on time — new joinings never delayed'], stats: [{ v: '100%', l: 'Audit Ready' }, { v: '0', l: 'Joining Delays' }, { v: '100%', l: 'Digital Records' }, { v: '1', l: 'Vendor, One Invoice' }] },
  { id: 'ehs', label: 'EHS / Plant Head', icon: <ShieldCheck className="w-5 h-5" />, image: 'https://image.qwenlm.ai/generated-images/4da82678-d8bd-4c6d-b0e2-73254c642bb7/_result.png', headline: 'Factory Act. ISO. WHO.', subheadline: 'Every audit. Every time.', points: ['Onsite OHC with 95% doctor and nurse attendance guaranteed by contract', 'Occupational and hazard-specific checkup packages for every role and site', 'Audit-ready documentation across all plant locations — no last-minute scrambling', 'DISH, Mines Act, USFDA, ISO compliant programs built for your industry'], stats: [{ v: '95%', l: 'OHC Attendance' }, { v: '0', l: 'Compliance Gaps' }, { v: '28+', l: 'States' }, { v: '100%', l: 'Audit Ready' }] },
  { id: 'ceo', label: 'CEO / COO', icon: <TrendingUp className="w-5 h-5" />, image: 'https://image.qwenlm.ai/generated-images/81d3bd5f-dff8-42a3-bdc8-db8e9af525a6/_result.png', headline: 'Healthier workforce.', subheadline: 'Stronger bottom line.', points: ['50% more affordable than managing separate vendors per health service', 'Healthier employees — lower absenteeism, stronger productivity, better retention', '15+ years of experience serving India\'s largest enterprises', '98% of clients renew every cycle — because we actually deliver'], stats: [{ v: '50%', l: 'Cost Savings' }, { v: '98%', l: 'Retention' }, { v: '500+', l: 'Enterprises' }, { v: '2M+', l: 'Assessments' }] },
  { id: 'doctor', label: 'Medical Director', icon: <HeartPulse className="w-5 h-5" />, image: 'https://image.qwenlm.ai/generated-images/592c6224-e759-459e-921a-5b1bdc629a30/_result.png', headline: 'Digital OHC. Smart records.', subheadline: 'Built around your workflow.', points: ['Real-time employee health records on the Dr P digital dashboard', 'OHC centre fully digitised — no paper forms, no manual data entry', 'Health alerts, at-risk employee flags, and illness trend analytics built-in', 'Seamless connection to lab, pharmacy, and specialist referrals'], stats: [{ v: '0', l: 'Paper Records' }, { v: '48hr', l: 'Report TAT' }, { v: 'Live', l: 'Health Alerts' }, { v: '100%', l: 'Digital OHC' }] },
];

const caseStudies = [
  { tag: 'Pre-Employment', title: 'One Candidate. One Visit. No Repeat Appointments.', problem: 'A large organization was working with a national diagnostics chain for pre-employment health checkups. Candidates often had to return for a second visit because tests could only be performed during limited time slots.', impact: ['Delayed joining timelines', 'Poor candidate experience', 'Increased HR follow-ups'], image: 'https://image.qwenlm.ai/generated-images/592c6224-e759-459e-921a-5b1bdc629a30/_result.png' },
  { tag: 'Network Coverage', title: '15,000 Centres on Paper. Missing Where It Mattered.', problem: 'A client had partnered with a healthcare aggregator promising 15,000+ labs across India. Centres were missing in Tier-2, Tier-3, and industrial locations where most hiring actually happened.', impact: ['Candidates have to travel far', 'Centres missing in hiring zones', 'Inconsistent quality'], image: 'https://image.qwenlm.ai/generated-images/2c94a2c9-a609-4ad0-8041-ecb667c3f760/_result.png' },
  { tag: 'Compliance', title: 'From Audit Nightmares to Audit-Ready in 90 Days.', problem: 'A manufacturing company faced repeated penalties due to incomplete health examination records. Their previous vendor couldn\'t provide timely documentation, putting the entire organization at risk.', impact: ['₹15L+ in penalties avoided', 'Zero compliance gaps', '100% audit readiness'], image: 'https://image.qwenlm.ai/generated-images/81d3bd5f-dff8-42a3-bdc8-db8e9af525a6/_result.png' },
];

export function HomePage() {
  const [activePersona, setActivePersona] = useState('hr');
  const [activeCase, setActiveCase] = useState(0);
  const currentPersona = personas.find(p => p.id === activePersona)!;

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary noise">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/041d77f7-54ed-4ea0-b99d-6fd039fdf9f4/_result.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-600/90" />
          <div className="absolute inset-0 gradient-mesh-dark" />
        </div>

        {/* Floating blobs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} aria-hidden="true" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal direction="up" delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm text-white/90 font-medium">Trusted by 500+ Enterprises</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                  All-in-One Workforce Health &{' '}
                  <span className="text-gradient">Occupational Health</span>{' '}
                  for Modern Enterprises.
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                  Dr P is the ideal partner for HR and EHS teams — a single solution for health assessments, occupational checkups, OHC management, diagnostics, and compliance across India.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a href={CONTACT.calendar} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 text-lg">
                    <Calendar className="w-5 h-5" />
                    Book a Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 text-lg">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </div>
              </ScrollReveal>

              {/* Mini stats */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">4.8<span className="text-accent">★</span></div>
                    <div className="text-xs text-white/60 mt-1">Employee Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">98<span className="text-accent">%</span></div>
                    <div className="text-xs text-white/60 mt-1">Client Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white">500<span className="text-accent">+</span></div>
                    <div className="text-xs text-white/60 mt-1">Enterprises</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side - Floating cards */}
            <div className="hidden lg:block relative">
              <ScrollReveal direction="right" delay={0.3}>
                <div className="relative">
                  {/* Main image card */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                    <img
                      src="https://image.qwenlm.ai/generated-images/1d14432a-8085-4d78-a212-8e9fa54373c0/_result.png"
                      alt="Dr P occupational health professional"
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">100% Compliance Guaranteed</p>
                          <p className="text-white/70 text-xs">Factory Act • ISO 45001 • State OSHAS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge 1 */}
                  <div className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg animate-float-delay">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">2M+ Assessments</p>
                        <p className="text-[10px] text-neutral-500">Delivered Pan-India</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge 2 */}
                  <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 shadow-lg animate-float-slow">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Globe2 className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">28+ States</p>
                        <p className="text-[10px] text-neutral-500">Pan-India Coverage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud Marquee */}
      <section className="py-10 md:py-14 bg-white border-b border-neutral-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest">Trusted by 500+ enterprises across India</p>
        </div>
        <Marquee speed="slow">
          {LOGO_CLOUD.map((name) => (
            <div key={name} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-50 border border-neutral-100">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary/60" />
              </div>
              <span className="text-base font-bold text-neutral-400 whitespace-nowrap">{name}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Persona Tabs - UNO.care style */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Badge variant="accent">Built For You</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4 tracking-tight">
                Solutions Tailored for Every Stakeholder
              </h2>
              <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                Whether you're managing compliance, overseeing operations, or driving strategy — Dr P has you covered.
              </p>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {personas.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePersona(p.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activePersona === p.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {p.icon}
                  {p.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Tab content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={currentPersona.image}
                  alt={currentPersona.label}
                  className="w-full h-[350px] md:h-[420px] object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{currentPersona.headline}</h3>
                  <p className="text-white/80 text-lg">{currentPersona.subheadline}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <ul className="space-y-3 mb-8">
                  {currentPersona.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-neutral-200 card-hover">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentPersona.stats.map((stat) => (
                    <div key={stat.l} className="text-center p-3 rounded-xl bg-white border border-neutral-200">
                      <div className="text-xl font-bold text-accent">{stat.v}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">{stat.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem / Solution Contrast */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                Your health program looks good on paper.<br />
                <span className="text-danger">Here's what actually happens.</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🏢', title: 'Fragmented Vendors', desc: 'Your vendor sells the contract. A stranger executes it. No accountability, no ownership, no follow-through.' },
              { icon: '👁️', title: 'Zero HR Visibility', desc: 'No live dashboards. No compliance tracking. The audit arrives and HR is scrambling through paper records.' },
              { icon: '📍', title: 'Metro-Only Coverage', desc: 'Plants in tier-2 cities? Industrial towns? Most vendors quietly say they can\'t reach. Your workforce gets left behind.' },
              { icon: '📄', title: 'Fake Reports & Delays', desc: 'Certificates forged. Reports delayed. New joinings held up. Audits rejected. It costs you more than the program itself.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full p-6 rounded-2xl bg-danger/5 border border-danger/10 card-hover">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-accent/5 border border-accent/20">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <p className="text-primary font-semibold">Dr P was built specifically to eliminate all four of these.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services - Visual Cards */}
      <section className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="accent">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4 tracking-tight">
                End-to-End Occupational Health — Fully Digital
              </h2>
              <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                Six services. One platform. One partner. End-to-end ownership at every step.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <Link to={`/solutions/${service.slug}`} className="block group h-full">
                  <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200 card-hover relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        {iconMap[service.icon]}
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden noise">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/1bfb2ec8-9d94-4f2f-8699-99f866b21958/_result.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="absolute inset-0 gradient-mesh-dark" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Scale That Speaks for Itself</h2>
              <p className="text-white/70 text-lg">Numbers that reflect our commitment to workforce health across India</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <AnimatedCounter value="500+" label="Enterprise Clients" className="text-center" />
            <AnimatedCounter value="2M+" label="Assessments Delivered" className="text-center" />
            <AnimatedCounter value="79653+" label="Pincodes Covered" className="text-center" />
            <AnimatedCounter value="28+" label="States Pan-India" className="text-center" />
            <AnimatedCounter value="98%" label="Client Retention" className="text-center" />
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <Badge variant="accent">Case Studies</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 tracking-tight">Real Problems. Real Solutions.</h2>
                <p className="text-neutral-500 mt-2">Problems your current vendor probably caused — and how Dr P eliminated them.</p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button onClick={() => setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors" aria-label="Previous case study">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setActiveCase((prev) => (prev + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors" aria-label="Next case study">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].title}
                  className="w-full h-[300px] md:h-[380px] object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">{caseStudies[activeCase].tag}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-accent">0{activeCase + 1}</span>
                  <span className="text-sm text-neutral-400">/ 0{caseStudies.length}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{caseStudies[activeCase].title}</h3>
                <p className="text-neutral-500 mb-6 leading-relaxed">{caseStudies[activeCase].problem}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-neutral-700 mb-3">Impact:</p>
                  <ul className="space-y-2">
                    {caseStudies[activeCase].impact.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-danger" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCase(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 bg-accent' : 'w-2 bg-neutral-300'}`}
                      aria-label={`Go to case study ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="accent">How It Works</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4 tracking-tight">
                Getting Started with Dr P Is Simple
              </h2>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your workforce size, industry risks, and compliance needs.', icon: <Zap className="w-5 h-5" /> },
              { step: '02', title: 'Custom Plan', desc: 'Our team designs a tailored occupational health program for your organization.', icon: <ClipboardCheck className="w-5 h-5" /> },
              { step: '03', title: 'Deployment', desc: 'We deploy resources — onsite or offsite — and begin health assessments.', icon: <Building2 className="w-5 h-5" /> },
              { step: '04', title: 'Ongoing Support', desc: 'Continuous monitoring, reporting, and compliance management.', icon: <BarChart3 className="w-5 h-5" /> },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="relative h-full p-6 rounded-2xl bg-white border border-neutral-200 card-hover group">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-neutral-100 group-hover:text-accent/10 transition-colors">{item.step}</div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/how-it-works" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-lg">
                Learn more about our process <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="accent">Client Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 tracking-tight">
                Trusted by 500+ Enterprises — What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.author}>
                <div className="h-full p-6 rounded-2xl bg-neutral-50 border border-neutral-200 card-hover flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-neutral-700 leading-relaxed flex-1 mb-6 text-[15px]">"{t.quote}"</p>
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="font-bold text-primary text-sm">{t.author}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Badge variant="accent">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion items={FAQ_HOME} />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden noise">
        <div className="absolute inset-0 gradient-mesh-dark" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to transform your workforce health?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join 500+ enterprises who trust Dr P for complete, compliant, digitally-managed employee health. Get a customised quote for your organisation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CONTACT.calendar} className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 text-lg">
                <Calendar className="w-5 h-5" />
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
