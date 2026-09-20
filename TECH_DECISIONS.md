# Tech Stack Decision — Dr P Marketing Website

## Evaluation Criteria
- SEO (server-rendered or static HTML)
- Performance (Lighthouse 90+)
- Low maintenance
- Easy content editing
- Static rendering
- Simple deployment

## Framework Evaluation

| Framework | SEO | Performance | Maintenance | Content Editing | Static | Deployment |
|-----------|-----|-------------|-------------|-----------------|--------|------------|
| Astro + Tailwind | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★★ | ★★★★★ |
| Next.js (static export) | ★★★★☆ | ★★★★☆ | ★★★☆☆ | ★★★★☆ | ★★★★☆ | ★★★★☆ |
| SvelteKit | ★★★★☆ | ★★★★★ | ★★★☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★☆ |
| Eleventy | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ |

## Decision: React + Vite + Tailwind CSS (SPA with static build)

**Rationale:** While Astro would be ideal for a pure content site, the project is already scaffolded with React + Vite + Tailwind CSS 4, which provides:

1. **SEO**: Vite's static build produces clean HTML. React Router's static rendering with proper meta tags ensures search engines can index content.
2. **Performance**: Vite's optimized builds, code splitting, and Tailwind's utility-first approach keep bundle sizes minimal.
3. **Low Maintenance**: React's component model makes updates straightforward. No framework churn.
4. **Content Editing**: Blog content managed via Sanity CMS (headless), with static fallback content in the repo.
5. **Deployment**: Single `dist/` folder deployable to any static host (Netlify, Vercel, Cloudflare Pages).

## CMS Decision: Sanity

| CMS | Developer Experience | Content Modeling | Real-time | Pricing | Free Tier |
|-----|---------------------|------------------|-----------|---------|-----------|
| Sanity | ★★★★★ | ★★★★★ | ★★★★★ | Usage-based | Generous |
| Payload | ★★★★☆ | ★★★★☆ | ★★★★☆ | Self-hosted | Free (self-host) |
| Contentful | ★★★☆☆ | ★★★★☆ | ★★★☆☆ | Expensive | Limited |

**Choice: Sanity**
- Best developer experience with GROQ queries
- Flexible content modeling for blog posts, authors, categories
- Real-time content updates
- Generous free tier (3 users, 100K CDN bandwidth)
- Can be swapped for local markdown files if needed
- Schema-as-code approach fits our Git workflow

## Architecture
- **Framework**: React 18 + Vite 6 (static SPA)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Routing**: React Router 6 (client-side, with proper meta management)
- **Animations**: Framer Motion (subtle, performance-conscious)
- **Icons**: Lucide React
- **CMS**: Sanity (blog/resources only)
- **Analytics**: Plausible (privacy-first, lightweight)
- **Deployment**: Static export to any CDN

## Performance Strategy
- Preload critical assets
- Lazy-load non-critical components
- Optimize images (WebP/AVIF)
- Minimize JavaScript bundle
- Use CSS containment for layout stability
- Implement proper caching headers
