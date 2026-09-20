import { Badge } from '../components/ui/Badge';

export function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Legal</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/70 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">1. Introduction</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Dr P Health Solutions Pvt. Ltd. ("Dr P", "we", "us", or "our") is committed to protecting the privacy and security of personal information collected through this website and our occupational health services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-600">
            <li>Contact information (name, email, phone number) when you reach out via phone, email, or WhatsApp</li>
            <li>Health information of employees as part of our occupational health service delivery</li>
            <li>Technical data (IP address, browser type, device information) through website analytics</li>
            <li>Cookies and tracking data as described in our Cookie Policy</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-600">
            <li>Deliver occupational health services to your organization</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Improve our website and services</li>
            <li>Generate anonymized analytics and reports</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">4. Data Sharing</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We do not sell your personal information. We may share data with: authorized client organizations (health data of their employees), regulatory authorities when legally required, service providers who assist in our operations (under strict confidentiality agreements).</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">5. Data Security</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We implement industry-standard security measures including encryption, access controls, and secure infrastructure to protect your information. Health data is handled in accordance with medical confidentiality standards.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">6. Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">You have the right to access, correct, or delete your personal information. For health data, requests are processed in accordance with applicable medical records regulations. Contact us at privacy@drphealth.com for any data-related requests.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">7. Contact</h2>
          <p className="text-neutral-600 leading-relaxed">For privacy-related inquiries, contact our Data Protection Officer at privacy@drphealth.com or write to us at our registered office address.</p>
        </div>
      </section>
    </main>
  );
}

export function TermsOfUsePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Legal</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Use</h1>
          <p className="text-white/70 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">2. Services Description</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">This website provides information about Dr P's occupational health services. The actual delivery of health services is governed by separate service agreements executed between Dr P and client organizations.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">All content on this website — including text, graphics, logos, images, and software — is the property of Dr P Health Solutions Pvt. Ltd. and is protected by applicable intellectual property laws.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Information on this website is provided for general informational purposes only. It does not constitute medical advice. Dr P is not liable for any decisions made based on website content. Professional consultation should be sought for specific health or compliance matters.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">5. External Links</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">This website may contain links to external sites. Dr P is not responsible for the content or privacy practices of third-party websites.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">6. Governing Law</h2>
          <p className="text-neutral-600 leading-relaxed">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Gurugram, Haryana.</p>
        </div>
      </section>
    </main>
  );
}

export function CookiePolicyPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary to-primary-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="bg-white/10 text-white border border-white/20 mb-4">Legal</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-white/70 mt-2">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">1. What Are Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Dr P uses cookies for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-600">
            <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website (via Plausible Analytics, a privacy-first tool)</li>
            <li><strong>Performance cookies:</strong> Monitor website performance and loading times</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">3. Third-Party Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We use Plausible Analytics for website analytics, which is privacy-focused and does not use personal cookies. We do not use advertising cookies or share data with advertising networks.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">4. Managing Cookies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>

          <h2 className="text-xl font-semibold text-primary mt-8 mb-4">5. Contact</h2>
          <p className="text-neutral-600 leading-relaxed">For questions about our cookie practices, contact us at privacy@drphealth.com.</p>
        </div>
      </section>
    </main>
  );
}
