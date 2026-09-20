import { Search, FileText, Users, Activity, BarChart3, RefreshCw, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { CTABand } from '../components/layout/CTABand';
import { CONTACT } from '../data/content';

const steps = [
  { icon: <Search className="w-6 h-6" />, title: 'Discovery & Assessment', desc: 'We begin with a comprehensive assessment of your workforce size, industry risks, existing health programs, and compliance requirements. Our team conducts site visits and stakeholder interviews to understand your unique needs.', details: ['Workforce size and demographics analysis', 'Hazard mapping and risk assessment', 'Current compliance status review', 'Stakeholder requirement gathering'] },
  { icon: <FileText className="w-6 h-6" />, title: 'Custom Program Design', desc: 'Based on our assessment, we design a tailored occupational health program that addresses your specific risks, regulatory obligations, and organizational goals.', details: ['Service scope and protocol definition', 'Staffing and resource planning', 'Technology and reporting setup', 'Timeline and milestone planning'] },
  { icon: <Users className="w-6 h-6" />, title: 'Team Deployment', desc: 'We deploy the right medical professionals and support staff to your locations, ensuring seamless integration with your operations.', details: ['Medical staff recruitment and training', 'Equipment and facility setup', 'IT systems and data integration', 'Process documentation and SOPs'] },
  { icon: <Activity className="w-6 h-6" />, title: 'Service Delivery', desc: 'Our team begins delivering occupational health services — from health assessments to emergency care — following established protocols and quality standards.', details: ['Employee health assessments', 'Onsite medical services', 'Emergency response readiness', 'Digital health records management'] },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Reporting & Analytics', desc: 'You receive regular reports on health metrics, compliance status, and population health trends through our digital dashboard.', details: ['Individual health reports', 'Population health analytics', 'Compliance tracking dashboards', 'Executive summary reports'] },
  { icon: <RefreshCw className="w-6 h-6" />, title: 'Continuous Improvement', desc: 'We continuously monitor, review, and optimize your occupational health program based on data insights and evolving requirements.', details: ['Quarterly program reviews', 'Protocol updates and optimization', 'Regulatory change adaptation', 'Employee feedback integration'] },
];

export function HowItWorksPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Our Process</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How Dr P Delivers Results
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From initial consultation to ongoing health management, our proven 6-step process ensures your workforce health program is effective, compliant, and continuously improving.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold shrink-0">
                    {index + 1}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-accent">{step.icon}</div>
                    <h2 className="text-xl md:text-2xl font-semibold text-primary">{step.title}</h2>
                  </div>
                  <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
                <div className="lg:col-span-6">
                  <Card>
                    <ul className="space-y-2.5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Typical Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Week 1-2</div>
              <p className="text-sm text-neutral-500">Discovery, assessment, and program design</p>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Week 3-4</div>
              <p className="text-sm text-neutral-500">Team deployment and systems setup</p>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Week 5+</div>
              <p className="text-sm text-neutral-500">Full service delivery and ongoing management</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Start Your Journey with Dr P</h2>
          <p className="text-white/70 mb-8">Book a discovery call and let us design the right occupational health program for your organization.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT.calendar} className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
            </a>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
