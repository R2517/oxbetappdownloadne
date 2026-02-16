import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-narrow text-center">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Contact</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4"><span className="gold-text">Contact Us</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Have a question or feedback? Send us a message and we'll get back to you as soon as possible.</p>
        </div>
      </section>
      <section className="section-padding pt-8">
        <div className="container-narrow max-w-xl">
          {submitted ? (
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-muted-foreground">Your message has been received. We will respond within 24-48 hours.</p>
            </div>
          ) : (
            <form className="glass-card p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" placeholder="Your name" required className="bg-background/50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" required className="bg-background/50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} required className="bg-background/50" />
              </div>
              <Button type="submit" className="w-full rounded-full gold-glow font-semibold">Send Message</Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
