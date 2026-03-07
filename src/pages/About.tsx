import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-narrow text-center">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">About</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4"><span className="gold-text">About Us</span></h1>
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-narrow max-w-3xl">
        <p className="text-muted-foreground mb-4">Welcome to 1xbetapp.one — your comprehensive informational resource for the 1xBet mobile application ecosystem. Our mission is to provide accurate, up-to-date guides, tutorials, and detailed information about the mobile platform experience.</p>
        <p className="text-muted-foreground mb-4">We cover everything from <Link to="/download" className="text-primary hover:underline">app download and installation</Link> guides to in-depth <Link to="/features" className="text-primary hover:underline">feature reviews</Link>, <Link to="/login-guide" className="text-primary hover:underline">account management tutorials</Link>, and <Link to="/faq" className="text-primary hover:underline">frequently asked questions</Link>. Our content is regularly reviewed and updated to reflect the latest app versions and features.</p>
        <p className="text-muted-foreground mb-8">This website is an independent informational resource. We are committed to providing clear, helpful, and honest content to help users make informed decisions about their mobile betting and gaming experience.</p>
        <CTAButton text="Download App" />
      </div>
    </section>
  </Layout>
);

export default About;
