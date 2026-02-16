import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const Terms = () => (
  <Layout>
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
        <p className="text-muted-foreground mb-4">Last updated: January 2026</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-4">By accessing and using this website (1xbetapp.download), you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you should not use this website.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Informational Purpose</h2>
        <p className="text-muted-foreground mb-4">This website provides informational content about mobile applications and related services. The information provided is for general guidance purposes only and should not be considered as professional advice. Users are responsible for verifying the accuracy of any information before making decisions.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">External Links</h2>
        <p className="text-muted-foreground mb-4">This website contains links to third-party websites and services. We are not responsible for the content, accuracy, or practices of external sites. Accessing third-party links is at your own risk.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Intellectual Property</h2>
        <p className="text-muted-foreground mb-4">All content on this website, including text, graphics, logos, and design elements, is the property of 1xbetapp.download and is protected by intellectual property laws. Unauthorized reproduction or distribution of any content is prohibited.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">This website and its content are provided "as is" without warranties of any kind. We shall not be liable for any direct, indirect, or consequential damages arising from the use of this website.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Changes to Terms</h2>
        <p className="text-muted-foreground mb-4">We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-muted-foreground">For questions about these terms, <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
