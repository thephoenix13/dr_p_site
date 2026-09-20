import { Award, Users, Globe, Heart, Target, CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { CTABand } from '../components/layout/CTABand';
import { STATS } from '../data/content';

export function AboutPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/041d77f7-54ed-4ea0-b99d-6fd039fdf9f4/_result.png" 
            alt="Dr P healthcare team" 
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">About Dr P</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Protecting India's Workforce Since 2009
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Dr P is India's trusted partner for occupational health and workforce wellness, serving 500+ enterprises across manufacturing, IT, pharma, and other high-risk industries.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4 mb-6">
                Making Every Workplace a Healthy Workplace
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-4">
                At Dr P, we believe that workforce health is not just a compliance requirement — it's a strategic advantage. Organizations that invest in employee health see higher productivity, lower absenteeism, and stronger retention.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Founded by a team of occupational health physicians and industrial safety experts, Dr P combines deep medical expertise with modern technology to deliver occupational health services that are efficient, compliant, and genuinely impactful for workers.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://image.qwenlm.ai/generated-images/1d14432a-8085-4d78-a212-8e9fa54373c0/_result.png" 
                alt="Dr P medical director" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Heart className="w-5 h-5" />, title: 'People First' },
                    { icon: <Target className="w-5 h-5" />, title: 'Precision' },
                    { icon: <Globe className="w-5 h-5" />, title: 'Pan-India' },
                    { icon: <Award className="w-5 h-5" />, title: 'Excellence' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-accent">{item.icon}</span>
                      <span className="text-white text-xs font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
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

      {/* Founders */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mt-4">Meet Our Founders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Dr. Pradeep Sharma', role: 'Founder & Medical Director', bio: 'Occupational health physician with 20+ years of experience in industrial medicine. Former advisor to the Directorate of Industrial Safety.' },
              { name: 'Dr. Kavitha Menon', role: 'Co-Founder & COO', bio: 'Healthcare operations expert specializing in scaling medical services across multi-location enterprise clients.' },
              { name: 'Rahul Verma', role: 'Co-Founder & CTO', bio: 'Health-tech leader building digital platforms that streamline occupational health delivery and compliance management.' },
            ].map((person) => (
              <Card key={person.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">{person.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{person.role}</p>
                <p className="text-sm text-neutral-500">{person.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dr P */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 text-center">Why Enterprises Choose Dr P</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '200+ qualified occupational health professionals',
              'Digital-first approach with real-time dashboards',
              'Proven track record across 7+ industries',
              'Pan-India service delivery capability',
              'End-to-end compliance management',
              'Dedicated account management team',
              'Rapid deployment (4-6 weeks to operational)',
              '98% client retention rate',
              'ISO 45001 aligned quality management',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Pan-India Coverage</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-8">
            Dr P delivers occupational health services across 20+ states and 100+ cities in India, with a network of partner centers and mobile teams for remote locations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Maharashtra', 'Tamil Nadu', 'Karnataka', 'Gujarat', 'Delhi NCR', 'Telangana', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'West Bengal', 'Punjab', 'Haryana'].map((state) => (
              <span key={state} className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-700 font-medium">
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
