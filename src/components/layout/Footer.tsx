import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Calendar, ArrowUpRight } from 'lucide-react';
import { CONTACT, BUSINESS_HOURS } from '../../data/content';

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh-dark opacity-50" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand - spans 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-xl font-bold block leading-tight">Dr P</span>
                <span className="text-[10px] text-white/50 font-medium">Workforce Health Solutions</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              India's trusted partner for occupational health and workforce wellness. Serving 500+ enterprises across manufacturing, IT, pharma, and other industries.
            </p>
            <div className="flex items-center gap-3">
              <a href={CONTACT.linkedin} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all" aria-label="Dr P on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={CONTACT.whatsappHref} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href={CONTACT.emailHref} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Solutions</h3>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/occupational-health-checkups" className="text-sm text-white/60 hover:text-white transition-colors">Health Checkups</Link></li>
              <li><Link to="/solutions/pre-employment-screening" className="text-sm text-white/60 hover:text-white transition-colors">Pre-Employment</Link></li>
              <li><Link to="/solutions/annual-health-screenings" className="text-sm text-white/60 hover:text-white transition-colors">Annual Screenings</Link></li>
              <li><Link to="/solutions/onsite-ohc" className="text-sm text-white/60 hover:text-white transition-colors">Onsite OHC</Link></li>
              <li><Link to="/solutions/compliance-audit" className="text-sm text-white/60 hover:text-white transition-colors">Compliance & Audit</Link></li>
              <li><Link to="/solutions/telemedicine-opd" className="text-sm text-white/60 hover:text-white transition-colors">Telemedicine / OPD</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/industries" className="text-sm text-white/60 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/resources" className="text-sm text-white/60 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Get in Touch</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{CONTACT.address}</span>
                </span>
              </li>
            </ul>

            <a href={CONTACT.calendar} className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-600 text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-accent/20">
              <Calendar className="w-4 h-4" />
              Book a Demo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-[11px] text-white/40 uppercase tracking-wider mb-2">Business Hours</p>
              <div className="space-y-1">
                {BUSINESS_HOURS.map((bh) => (
                  <p key={bh.day} className="text-xs text-white/50">{bh.day}: <span className="text-white/70">{bh.hours}</span></p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Dr P Health Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-white/40 hover:text-white/70 transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="text-sm text-white/40 hover:text-white/70 transition-colors">Terms</Link>
            <Link to="/cookie-policy" className="text-sm text-white/40 hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
