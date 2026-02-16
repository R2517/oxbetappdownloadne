import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const Disclaimer = () => (
  <Layout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
        { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://1xbetapp.download/disclaimer" },
      ]
    })}} />

    <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-narrow text-center">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Disclaimer</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4"><span className="gold-text">Disclaimer</span></h1>
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-narrow max-w-3xl">
        <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

        <p className="text-muted-foreground mb-6">The following disclaimer applies to all content, services, and information provided on the 1xbetapp.download website. Please read this disclaimer carefully before using our website.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">1. General Information Disclaimer</h2>
        <p className="text-muted-foreground mb-4">The information provided on 1xbetapp.download is for general informational and educational purposes only. While we make every effort to keep the information accurate, complete, and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">2. Not Professional Advice</h2>
        <p className="text-muted-foreground mb-4">Nothing on this website constitutes professional financial, legal, gambling, or any other type of advice. The content should not be construed as a recommendation to engage in any particular activity. You should always seek independent professional advice appropriate to your specific circumstances before making any decisions based on information found on this website.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">3. Age Restriction & Legal Compliance</h2>
        <p className="text-muted-foreground mb-4">Online betting, casino gaming, and related services referenced on this website are intended exclusively for users aged 18 years and above, or the legal age of majority in their jurisdiction, whichever is higher. It is your sole responsibility to determine whether accessing online betting or gaming services is legal in your country, state, or region. We do not encourage or promote the use of these services in jurisdictions where they are prohibited by law.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">4. Responsible Gaming</h2>
        <p className="text-muted-foreground mb-3">We strongly advocate for responsible gaming practices. If you choose to engage in any betting or gaming activities through third-party platforms linked from this website, please adhere to the following principles:</p>
        <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
          <li>Set strict time and monetary limits before you start</li>
          <li>Never bet or gamble with money you cannot afford to lose</li>
          <li>Do not chase losses or attempt to recover lost money through continued play</li>
          <li>Take regular breaks and monitor the time spent on gaming activities</li>
          <li>Never borrow money to fund betting or gaming activities</li>
          <li>Seek professional help if you feel your gaming habits are becoming problematic</li>
        </ul>
        <p className="text-muted-foreground mb-4">If you or someone you know has a gambling problem, please contact professional support organizations such as GamCare (www.gamcare.org.uk), Gamblers Anonymous (www.gamblersanonymous.org), or local responsible gaming resources in your jurisdiction.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">5. No Guarantee of Results</h2>
        <p className="text-muted-foreground mb-4">Any references to potential winnings, bonuses, promotions, odds, returns, or financial outcomes on this website are for informational purposes only. Actual results may vary significantly. Past performance is not indicative of future results. All forms of betting and gaming involve inherent financial risk, and you should be fully aware of and accept these risks before participating.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">6. Third-Party Content & Services</h2>
        <p className="text-muted-foreground mb-4">This website may contain links, references, or recommendations to third-party websites, applications, products, or services. These references are provided for informational convenience only. We do not endorse, guarantee, or assume responsibility for the accuracy, legality, compliance, or quality of any third-party content, products, or services. Your interactions with any third party found on or through this website are solely between you and that third party.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">7. Content Accuracy & Currency</h2>
        <p className="text-muted-foreground mb-4">While we endeavor to keep information current, the online betting and gaming industry evolves rapidly. Features, services, promotions, regulations, and other details referenced on this website may change without notice. We are under no obligation to update any information on the website. Users should independently verify all information before acting upon it.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">In no event shall 1xbetapp.download, its owners, operators, contributors, or any associated parties be liable for any direct, indirect, incidental, special, consequential, or punitive damages whatsoever, including but not limited to damages for loss of profits, data, goodwill, or other intangible losses, arising from or in connection with: (a) your use of or inability to use the website; (b) any decisions made based on information provided on the website; (c) any third-party content, products, or services referenced on the website; or (d) any financial losses incurred through betting or gaming activities.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">9. Regulatory Compliance</h2>
        <p className="text-muted-foreground mb-4">Online betting and gaming regulations vary significantly by jurisdiction. It is entirely your responsibility to ensure compliance with all applicable local, state, national, and international laws and regulations. This website does not provide legal advice regarding the legality of online betting in any specific jurisdiction.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">10. Changes to This Disclaimer</h2>
        <p className="text-muted-foreground mb-4">We reserve the right to modify this disclaimer at any time without prior notice. Changes will be posted on this page with an updated revision date. Your continued use of the website after any modifications constitutes acceptance of the updated disclaimer.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">11. Contact</h2>
        <p className="text-muted-foreground">If you have concerns or questions about any content on this website, please <Link to="/contact" className="text-primary hover:underline">contact us</Link> through our contact page. For more information, see our <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
