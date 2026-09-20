import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { CONTACT, BUSINESS_HOURS } from '../../data/content';

export function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Dr P</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Comprehensive workforce health and occupational health solutions for enterprises across India.
            </p>
            <a href={CONTACT.linkedin} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors" aria-label="Dr P on LinkedIn">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/occupational-health-checkups" className="text-sm text-white/70 hover:text-white transition-colors">Occupational Health Checkups</Link></li>
              <li><Link to="/solutions/pre-employment-screening" className="text-sm text-white/70 hover:text-white transition-colors">Pre-Employment Screening</Link></li>
              <li><Link to="/solutions/annual-health-screenings" className="text-sm text-white/70 hover:text-white transition-colors">Annual Health Screenings</Link></li>
              <li><Link to="/solutions/onsite-ohc" className="text-sm text-white/70 hover:text-white transition-colors">Onsite OHC</Link></li>
              <li><Link to="/solutions/compliance-audit" className="text-sm text-white/70 hover:text-white transition-colors">Compliance & Audit</Link></li>
              <li><Link to="/solutions/telemedicine-opd" className="text-sm text-white/70 hover:text-white transition-colors">Telemedicine / OPD</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/industries" className="text-sm text-white/70 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/resources" className="text-sm text-white/70 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  {CONTACT.address}
                </span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 mb-1">Business Hours</p>
              {BUSINESS_HOURS.map((bh) => (
                <p key={bh.day} className="text-xs text-white/70">{bh.day}: {bh.hours}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Dr P Health Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/cookie-policy" className="text-sm text-white/50 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
