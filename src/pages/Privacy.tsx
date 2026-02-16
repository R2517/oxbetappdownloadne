import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ChevronRight } from "lucide-react";

const Privacy = () => (
  <Layout>
    <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-narrow text-center">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Privacy Policy</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4"><span className="gold-text">Privacy Policy</span></h1>
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-narrow max-w-3xl prose prose-invert prose-sm">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Information We Collect</h2>
        <p className="text-muted-foreground mb-4">We may collect information you provide when using our contact form, including your name, email address, and message content. We also collect standard analytics data such as page views, device type, and browser information through cookies and similar technologies.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">How We Use Information</h2>
        <p className="text-muted-foreground mb-4">Information collected is used solely to respond to inquiries, improve our website content, and analyze traffic patterns. We do not sell, trade, or share personal information with third parties except as required by law.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Cookies</h2>
        <p className="text-muted-foreground mb-4">Our website uses cookies to enhance user experience and analyze site traffic. You can disable cookies through your browser settings, though some features may not function optimally.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Third-Party Links</h2>
        <p className="text-muted-foreground mb-4">This website contains links to external websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage users to review the privacy policies of any external websites they visit.</p>
        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-muted-foreground">If you have questions about this privacy policy, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
