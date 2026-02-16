import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const Terms = () => (
  <Layout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
        { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://1xbetapp.download/terms" },
      ]
    })}} />

    <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-narrow text-center">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Terms & Conditions</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4"><span className="gold-text">Terms & Conditions</span></h1>
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-narrow max-w-3xl">
        <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

        <p className="text-muted-foreground mb-6">Please read these Terms and Conditions ("Terms") carefully before using the 1xbetapp.download website ("Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you must discontinue use of the website immediately.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-4">By accessing and using this website, you acknowledge that you have read, understood, and agree to comply with these Terms and Conditions, our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and our <Link to="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>. These documents collectively govern your use of the website.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">2. Informational Purpose</h2>
        <p className="text-muted-foreground mb-4">This website provides informational content about mobile applications, online betting, casino gaming, and related services. The information provided is for general guidance purposes only and should not be considered as professional, financial, or legal advice. Users are solely responsible for verifying the accuracy, completeness, and applicability of any information before making decisions based on it.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">3. User Eligibility</h2>
        <p className="text-muted-foreground mb-4">You must be at least 18 years of age (or the legal age of majority in your jurisdiction, whichever is higher) to use this website. By using the website, you represent and warrant that you meet this age requirement. It is your sole responsibility to determine whether accessing this website and any linked services is legal in your jurisdiction.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">4. External Links and Third-Party Services</h2>
        <p className="text-muted-foreground mb-4">This website contains links to third-party websites, applications, and services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, practices, availability, or accuracy of any third-party sites or services. You acknowledge and agree that we shall not be liable for any damage or loss caused by or in connection with the use of any third-party content, goods, or services. Accessing third-party links is entirely at your own risk and discretion.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">5. Intellectual Property Rights</h2>
        <p className="text-muted-foreground mb-4">All content on this website, including but not limited to text, graphics, logos, images, design elements, code, and compilation of content, is the property of 1xbetapp.download and is protected by international copyright, trademark, and intellectual property laws. Unauthorized reproduction, distribution, modification, display, or transmission of any content from this website is strictly prohibited without prior written consent.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">6. User Conduct</h2>
        <p className="text-muted-foreground mb-3">When using this website, you agree not to:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
          <li>Use the website for any unlawful purpose or in violation of any applicable laws</li>
          <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
          <li>Interfere with or disrupt the website's infrastructure or services</li>
          <li>Transmit any malicious code, viruses, or harmful data</li>
          <li>Scrape, crawl, or collect data from the website without authorization</li>
          <li>Impersonate any person or entity or misrepresent your affiliation</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">7. Content Accuracy</h2>
        <p className="text-muted-foreground mb-4">While we strive to provide accurate, up-to-date information, we make no representations or warranties regarding the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or graphics contained on this website. Any reliance you place on such information is strictly at your own risk. Information may become outdated, and we are under no obligation to update it.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">To the fullest extent permitted by applicable law, 1xbetapp.download and its owners, operators, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses resulting from: (a) your use or inability to use the website; (b) any content obtained from the website; (c) unauthorized access to or alteration of your data; or (d) any other matter relating to the website.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">9. Disclaimer of Warranties</h2>
        <p className="text-muted-foreground mb-4">This website and all content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. We do not warrant that the website will be uninterrupted, error-free, secure, or free of viruses or other harmful components.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">10. Indemnification</h2>
        <p className="text-muted-foreground mb-4">You agree to indemnify, defend, and hold harmless 1xbetapp.download and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the website, your violation of these Terms, or your violation of any third-party rights.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">11. Governing Law</h2>
        <p className="text-muted-foreground mb-4">These Terms shall be governed by and construed in accordance with applicable international laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the website shall be resolved through good-faith negotiation or, if necessary, through binding arbitration.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">12. Severability</h2>
        <p className="text-muted-foreground mb-4">If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">13. Changes to Terms</h2>
        <p className="text-muted-foreground mb-4">We reserve the right to modify or replace these Terms at any time at our sole discretion. Changes will be posted on this page with an updated revision date. Your continued use of the website after any changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">14. Contact</h2>
        <p className="text-muted-foreground">For questions about these Terms and Conditions, please <Link to="/contact" className="text-primary hover:underline">contact us</Link> through our contact page.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
