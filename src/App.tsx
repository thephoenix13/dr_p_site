import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBar } from './components/layout/MobileBar';
import { HomePage } from './pages/HomePage';
import { SolutionsOverview, SolutionDetail } from './pages/SolutionsPage';
import { IndustriesOverview, IndustryDetail } from './pages/IndustriesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage, BlogPostPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsOfUsePage, CookiePolicyPage } from './pages/LegalPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <div id="main-content" className="flex-1 pb-14 lg:pb-0">
        {children}
      </div>
      <Footer />
      <MobileBar />
    </div>
  );
}

function SolutionDetailWrapper() {
  const { slug } = useParams();
  return <SolutionDetail slug={slug!} />;
}

function IndustryDetailWrapper() {
  const { slug } = useParams();
  return <IndustryDetail slug={slug!} />;
}

function BlogPostWrapper() {
  const { slug } = useParams();
  return <BlogPostPage slug={slug!} />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsOverview />} />
          <Route path="/solutions/:slug" element={<SolutionDetailWrapper />} />
          <Route path="/industries" element={<IndustriesOverview />} />
          <Route path="/industries/:slug" element={<IndustryDetailWrapper />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<BlogPostWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
