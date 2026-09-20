import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '../../data/content';
import { cn } from '../../utils/cn';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Dr P Home">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-primary">Dr P</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 200)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                      location.pathname.startsWith(link.href) ? 'text-accent bg-accent/5' : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    )}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                      location.pathname === link.href ? 'text-accent bg-accent/5' : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-neutral-200 p-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.calendar}
              className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-neutral-200 mt-2 pt-4">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-50">
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-neutral-500 hover:text-primary rounded-lg"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200 space-y-3">
              <a href={CONTACT.calendar} className="block w-full text-center px-5 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
                Book a Demo
              </a>
              <a href={CONTACT.phoneHref} className="block w-full text-center px-5 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
