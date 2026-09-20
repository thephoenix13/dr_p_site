import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { CTABand } from '../components/layout/CTABand';
import { BLOG_POSTS, CONTACT } from '../data/content';

export function ResourcesPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-primary to-primary-600 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/81d3bd5f-dff8-42a3-bdc8-db8e9af525a6/_result.png" 
            alt="Health analytics and insights" 
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Resources</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Insights & Resources
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Expert articles on occupational health, compliance updates, and workforce wellness strategies from the Dr P medical team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <Card hover className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg h-48 lg:h-64 overflow-hidden">
                <img 
                  src="https://image.qwenlm.ai/generated-images/81d3bd5f-dff8-42a3-bdc8-db8e9af525a6/_result.png" 
                  alt="Health analytics dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Badge variant="accent" className="mb-3">{BLOG_POSTS[0].category}</Badge>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                  <Link to={`/resources/${BLOG_POSTS[0].slug}`} className="hover:text-accent transition-colors">
                    {BLOG_POSTS[0].title}
                  </Link>
                </h2>
                <p className="text-neutral-500 mb-4">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{BLOG_POSTS[0].author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{BLOG_POSTS[0].readTime}</span>
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Card key={post.slug} hover className="flex flex-col">
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-lg h-32 flex items-center justify-center mb-4">
                  <span className="text-3xl">📄</span>
                </div>
                <Badge variant="accent" className="mb-3 w-fit">{post.category}</Badge>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  <Link to={`/resources/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-500 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-200">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA (no form - just link) */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Stay Updated on Occupational Health</h2>
          <p className="text-neutral-500 mb-8">Connect with our team to receive the latest compliance updates, health insights, and industry best practices.</p>
          <a href={CONTACT.calendar} className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
            <Calendar className="w-5 h-5" />
            Schedule a Call with Our Team
          </a>
        </div>
      </section>

      <CTABand />
    </main>
  );
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-2xl font-bold text-primary">Article not found</h1>
        <Link to="/resources" className="text-accent hover:underline mt-4 inline-block">← Back to Resources</Link>
      </main>
    );
  }

  return (
    <main>
      <article>
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src="https://image.qwenlm.ai/generated-images/81d3bd5f-dff8-42a3-bdc8-db8e9af525a6/_result.png" 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
        </div>
        <div className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="inline-flex items-center gap-1 text-neutral-500 hover:text-primary text-sm mb-8 transition-colors">
            ← Back to Resources
          </Link>
          <Badge variant="accent" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-8 pb-8 border-b border-neutral-200">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Occupational health continues to evolve as regulatory frameworks tighten and organizations recognize the direct link between workforce health and business performance. In this article, we explore the key considerations for {post.category.toLowerCase()} in the current landscape.
            </p>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">Key Takeaways</h2>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /><span className="text-neutral-600">Proactive health programs reduce workplace incidents by up to 40%</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /><span className="text-neutral-600">Digital health records enable real-time compliance monitoring</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /><span className="text-neutral-600">Onsite health services minimize employee downtime</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" /><span className="text-neutral-600">Industry-specific protocols are critical for effective screening</span></li>
            </ul>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">What This Means for Your Organization</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Organizations that invest in comprehensive occupational health programs don't just meet compliance requirements — they build a competitive advantage through healthier, more productive workforces. Dr P helps enterprises design and implement programs that deliver measurable ROI.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Whether you're looking to establish your first occupational health program or optimize an existing one, our team of 200+ medical professionals is ready to support your goals. We bring industry expertise, digital tools, and a commitment to worker wellbeing that has earned us a 98% client retention rate.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
            <h3 className="text-xl font-semibold text-primary mb-2">Have Questions About This Topic?</h3>
            <p className="text-neutral-500 mb-6">Talk to our occupational health experts about implementing these insights in your organization.</p>
            <a href={CONTACT.calendar} className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors">
              <Calendar className="w-4 h-4" />
              Talk to Our Team
            </a>
          </div>
        </div>
        </div>
      </article>
    </main>
  );
}
