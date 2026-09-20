# Dr P — Workforce Health & Occupational Health Marketing Website

Corporate marketing website for Dr P, a workforce health and occupational health company. Built with React, Vite, and Tailwind CSS.

## Features
- 🏢 Full corporate marketing site with 15+ pages
- 📱 Mobile-first responsive design
- ♿ WCAG AA accessibility (skip links, focus states, semantic HTML)
- 🔍 SEO-optimized (meta tags, structured data, clean URLs)
- 🎨 Corporate design system with custom tokens
- 📞 Zero forms — all CTAs route to tel:, mailto:, wa.me, or calendar
- 📝 Blog/Resources section (CMS-ready)
- 🧭 Mega menu navigation with mobile support
- 🖼️ AI-generated professional imagery throughout

## Tech Stack
- **React 18** — UI framework
- **Vite 6** — Build tool
- **Tailwind CSS 4** — Styling
- **React Router 6** — Client-side routing
- **Lucide React** — Icons
- **Framer Motion** — Animations (available)

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```
Output in `dist/` directory.

### Preview
```bash
npm run preview
```

## Configuration

### Contact Placeholders
Replace these values in `src/data/content.ts` before deployment:

| Placeholder | Description |
|-------------|-------------|
| `[PHONE]` | Company phone number |
| `[EMAIL]` | Company email address |
| `[WHATSAPP]` | WhatsApp number with country code |
| `[CALENDAR_URL]` | Cal.com/Calendly booking link |
| `[ADDRESS]` | Physical office address |
| `[LINKEDIN_URL]` | Company LinkedIn page |

### Analytics
Add your Plausible or GA4 tracking script to `index.html`.

### Images
The site uses AI-generated professional images referenced via CDN URLs. For production:
1. Download images and place in `public/images/`
2. Update image `src` attributes to use local paths (e.g., `/images/hero.jpg`)
3. Add `width` and `height` attributes to prevent layout shift
4. Consider using Next.js Image or a CDN with automatic optimization

## Pages
- `/` — Home
- `/solutions` — Solutions overview
- `/solutions/:slug` — Solution detail pages (6 services)
- `/industries` — Industries overview
- `/industries/:slug` — Industry detail pages (7 industries)
- `/how-it-works` — Process and onboarding
- `/about` — Company information
- `/resources` — Blog listing
- `/resources/:slug` — Blog post detail
- `/contact` — Contact channels (no form)
- `/privacy-policy` — Privacy policy
- `/terms-of-use` — Terms of use
- `/cookie-policy` — Cookie policy

## Design System
- **Primary**: #0B2545 (deep navy)
- **Accent**: #0FA3A3 (teal)
- **Typography**: Inter
- **Layout**: 1280px max-width, 4/8px spacing scale

## Deployment
Deploy the `dist/` folder to any static hosting:
- **Netlify**: Drag and drop or connect repo
- **Vercel**: `vercel deploy`
- **Cloudflare Pages**: Connect repo
- **AWS S3 + CloudFront**: Upload dist/ to S3

For SPA routing, configure a catch-all redirect to `index.html`.

## License
© 2025 Dr P Health Solutions Pvt. Ltd. All rights reserved.
