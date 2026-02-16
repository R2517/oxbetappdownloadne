import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const Disclaimer = () => (
  <Layout>
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
        <p className="text-muted-foreground mb-4">Last updated: January 2026</p>
        <h2 className="text-xl font-bold mt-8 mb-3">General Disclaimer</h2>
        <p className="text-muted-foreground mb-4">The information provided on 1xbetapp.download is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information, products, services, or related graphics contained on this website.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Age Restriction</h2>
        <p className="text-muted-foreground mb-4">Online betting and gaming services are intended for users aged 18 and above (or the legal age in your jurisdiction). It is your responsibility to ensure that online betting is legal in your country or region before accessing any services linked from this website.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Responsible Gaming</h2>
        <p className="text-muted-foreground mb-4">We encourage responsible gaming practices. If you or someone you know has a gambling problem, please seek help from professional organizations. Set limits on your time and spending, and never bet more than you can afford to lose.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">No Guarantee of Results</h2>
        <p className="text-muted-foreground mb-4">Any references to potential winnings, bonuses, or promotions are for informational purposes only. Actual results may vary. Past performance is not indicative of future results.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-muted-foreground">If you have concerns about any content on this website, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
