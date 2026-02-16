import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";

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
          <h4 className="font-semibold text-foreground mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sports-betting" className="hover:text-primary transition-colors">Sports Betting</Link></li>
            <li><Link to="/casino" className="hover:text-primary transition-colors">Casino</Link></li>
            <li><Link to="/live-casino" className="hover:text-primary transition-colors">Live Casino</Link></li>
            <li><Link to="/slots-games" className="hover:text-primary transition-colors">Slots & Games</Link></li>
            <li><Link to="/payments" className="hover:text-primary transition-colors">Payments</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Get the App</h4>
          <a
            href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block btn-gradient text-foreground font-semibold px-6 py-3 rounded-xl blue-glow"
          >
            Download Now
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Available for Android & iOS. Updated 2026.
          </p>
        </div>
      </div>
      <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={logoFull} alt="1xBetApp.Download" className="h-8 w-auto object-contain opacity-90" />
        <p className="text-xs text-muted-foreground text-center">© 2026 1xbetapp.download — All rights reserved. This website provides informational content only.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
