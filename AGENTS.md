# AGENTS.md — Dr P Marketing Website

## Project Scope
Corporate marketing website for Dr P, a workforce health and occupational health company. The site drives credibility, SEO visibility, and direct contact. No client portal, no login, no dashboard, no employee health records.

## Tech Stack
- **React 18** — UI components
- **Vite 6** — Build tool, static output
- **Tailwind CSS 4** — Utility-first styling
- **React Router 6** — Client-side routing
- **Framer Motion** — Subtle animations
- **Lucide React** — Icon library
- **Sanity** — CMS for blog/resources
- **Plausible** — Privacy-first analytics

## Design Tokens
```
Primary: #0B2545 (deep navy)
Primary-600: #133C6E
Accent: #0FA3A3 (teal)
Accent-600: #0C8A8A
Neutral-900: #111827
Neutral-700: #374151
Neutral-500: #6B7280
Neutral-200: #E5E7EB
Neutral-50: #F9FAFB
Success: #16A34A
Warning: #D97706
Danger: #DC2626
White: #FFFFFF
```

## Conventions
- Mobile-first responsive design
- Static rendering (no SSR required)
- Conventional commits (feat:, fix:, docs:, style:, refactor:, perf:, test:, chore:)
- No secrets in repo (use environment variables)
- WCAG AA accessibility compliance
- No forms anywhere — CTAs route to tel:, mailto:, wa.me, or calendar links
- Semantic HTML with proper heading hierarchy
- Focus states visible on all interactive elements

## Build Commands
```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## File Structure
```
src/
├── components/
│   ├── ui/          # Button, Card, Badge, Stat, Accordion, Tabs
│   ├── layout/      # Header, Footer, CTABand, MobileBar
│   └── sections/    # Hero, LogoCloud, Testimonials, etc.
├── pages/           # Route-level page components
├── data/            # Static content data
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
└── App.tsx          # Router setup
```

## Contact Placeholders
Replace before deployment:
- [PHONE] → Company phone number
- [EMAIL] → Company email
- [WHATSAPP] → WhatsApp number with country code
- [CALENDAR_URL] → Cal.com/Calendly booking link
- [ADDRESS] → Physical office address
- [LINKEDIN_URL] → Company LinkedIn page
