import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const Privacy = () => (
  <Layout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.one" },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://1xbetapp.one/privacy" },
      ]
    })}} />

    <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-narrow text-center">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Privacy Policy</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4"><span className="gold-text">Privacy Policy</span></h1>
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-narrow max-w-3xl">
        <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

        <p className="text-muted-foreground mb-6">This Privacy Policy describes how 1xbetapp.one ("we", "our", "us") collects, uses, and protects your personal information when you visit our website. We are committed to safeguarding your privacy and ensuring transparency in how we handle your data.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
          <li><strong className="text-foreground">Contact Information:</strong> When you use our contact form, we collect your name, email address, and message content to respond to your inquiry.</li>
          <li><strong className="text-foreground">Analytics Data:</strong> We automatically collect standard analytics information including page views, pages visited, time spent on pages, referring URLs, device type, operating system, browser type, and screen resolution.</li>
          <li><strong className="text-foreground">Cookie Data:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze site traffic patterns. See our Cookies section below for details.</li>
          <li><strong className="text-foreground">IP Address:</strong> Your IP address may be collected for security purposes and to understand geographic traffic distribution.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-muted-foreground mb-3">Information collected is used for the following purposes:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
          <li>To respond to inquiries and provide customer support</li>
          <li>To improve website content, structure, and user experience</li>
          <li>To analyze traffic patterns and understand how visitors use our website</li>
          <li>To detect and prevent fraudulent activity or security threats</li>
          <li>To comply with legal obligations and regulatory requirements</li>
        </ul>
        <p className="text-muted-foreground mb-4">We do not sell, trade, rent, or share your personal information with third parties for marketing purposes. Information may be disclosed only as required by law, legal process, or governmental request.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">3. Cookies and Tracking Technologies</h2>
        <p className="text-muted-foreground mb-3">Our website uses the following types of cookies:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
          <li><strong className="text-foreground">Essential Cookies:</strong> Required for basic website functionality such as page navigation and secure access.</li>
          <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with the website by collecting anonymous statistical data.</li>
          <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences to provide a personalized experience on return visits.</li>
        </ul>
        <p className="text-muted-foreground mb-4">You can manage cookie preferences through your browser settings. Disabling cookies may affect certain website features. Most modern browsers allow you to block or delete cookies, view what cookies are stored, and manage your preferences on a per-site basis.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">4. Data Retention</h2>
        <p className="text-muted-foreground mb-4">We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy. Contact form submissions are retained for up to 12 months. Analytics data is retained in anonymized form and may be kept indefinitely for trend analysis. You may request deletion of your personal data at any time by contacting us.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">5. Data Security</h2>
        <p className="text-muted-foreground mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL encryption for all data transmissions, secure server infrastructure, and regular security reviews. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">6. Third-Party Links</h2>
        <p className="text-muted-foreground mb-4">This website contains links to external third-party websites and services. We are not responsible for the privacy practices, content, or data handling of these external sites. We strongly encourage you to review the privacy policies of any third-party websites you visit through links on our site. Clicking external links is at your own discretion and risk.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">7. Your Rights</h2>
        <p className="text-muted-foreground mb-3">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure (right to be forgotten)</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
        <p className="text-muted-foreground mb-4">To exercise any of these rights, please contact us using the information provided below.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">8. Children's Privacy</h2>
        <p className="text-muted-foreground mb-4">Our website is not intended for children under the age of 18 (or the legal age of majority in your jurisdiction). We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately so we can delete it.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">9. International Data Transfers</h2>
        <p className="text-muted-foreground mb-4">Our website may be accessed from various countries worldwide. By using our website, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence. We take steps to ensure your data receives adequate protection regardless of where it is processed.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">10. Changes to This Policy</h2>
        <p className="text-muted-foreground mb-4">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of the website after changes constitutes acceptance of the updated policy.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">11. Contact Us</h2>
        <p className="text-muted-foreground">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please <Link to="/contact" className="text-primary hover:underline">contact us</Link> through our contact page.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
