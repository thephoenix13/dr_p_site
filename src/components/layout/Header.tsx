import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Calendar } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '../../data/content';
import { cn } from '../../utils/cn';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className={cn(
      'sticky top-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/50' : 'bg-white/80 backdrop-blur-sm'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Dr P Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">Dr P</span>
              <span className="text-[10px] text-neutral-400 font-medium leading-tight hidden sm:block">Workforce Health</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 200)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      location.pathname.startsWith(link.href) ? 'text-accent' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                    )}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', openDropdown === link.label && 'rotate-180')} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      location.pathname === link.href ? 'text-accent' : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-100 p-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-primary hover:bg-accent/5 rounded-xl transition-colors"
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
          <div className="hidden lg:flex items-center gap-4">
            <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.calendar}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-md hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Book a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-neutral-100 mt-2 pt-4 animate-in slide-in-from-top">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-3 py-3 text-sm font-medium text-neutral-700 rounded-xl cursor-pointer hover:bg-neutral-50">
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
                      className="block px-3 py-3 text-sm font-medium text-neutral-700 rounded-xl hover:bg-neutral-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100 space-y-3">
              <a href={CONTACT.calendar} className="flex w-full items-center justify-center gap-2 px-5 py-3.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors">
                <Calendar className="w-4 h-4" />
                Book a Demo
              </a>
              <a href={CONTACT.phoneHref} className="flex w-full items-center justify-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
