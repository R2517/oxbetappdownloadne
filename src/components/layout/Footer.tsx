import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30" style={{ background: "#05070D" }}>
    <div className="container-narrow px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-4">Main Pages</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/download" className="hover:text-primary transition-colors">Download App</Link></li>
            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/login-guide" className="hover:text-primary transition-colors">Login Guide</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Get the App</h4>
          <a
            href="#AFFILIATE_LINK_PLACEHOLDER"
            className="inline-block btn-gradient text-foreground font-semibold px-6 py-3 rounded-xl blue-glow"
          >
            Download Now
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Available for Android & iOS. Updated 2026.
          </p>
        </div>
      </div>
      <div className="border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
        <p>© 2026 1xbetapp.download — All rights reserved. This website provides informational content only.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
