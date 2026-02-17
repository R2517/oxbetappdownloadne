import { Link, useParams } from "react-router-dom";
import { Download, Globe, Gamepad2, Headphones } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import { countries } from "@/lib/geo-data";

const validCodes = new Set(countries.map((c) => c.code.toLowerCase()));

function usePrefix(): string {
  const { countryCode } = useParams<{ countryCode: string }>();
  if (countryCode && validCodes.has(countryCode.toLowerCase())) {
    return `/${countryCode.toLowerCase()}`;
  }
  return "";
}

const stats = [
  { icon: Download, value: "10M+", label: "Downloads" },
  { icon: Globe, value: "40+", label: "Sports" },
  { icon: Gamepad2, value: "5,000+", label: "Games" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

const Footer = () => {
  const prefix = usePrefix();
  const linkTo = (path: string) => path === "" ? `${prefix || "/"}` : `${prefix}/${path}`;

  return (
    <footer className="relative bg-card border-t border-border/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-narrow px-4 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 justify-center">
              <s.icon size={20} className="text-primary" />
              <div>
                <p className="text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-narrow px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Main Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to={linkTo("")} className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to={linkTo("download")} className="hover:text-primary transition-colors">Download App</Link></li>
              <li><Link to={linkTo("features")} className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to={linkTo("login-guide")} className="hover:text-primary transition-colors">Login Guide</Link></li>
              <li><Link to={linkTo("faq")} className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to={linkTo("sports-betting")} className="hover:text-primary transition-colors">Sports Betting</Link></li>
              <li><Link to={linkTo("casino")} className="hover:text-primary transition-colors">Casino</Link></li>
              <li><Link to={linkTo("live-casino")} className="hover:text-primary transition-colors">Live Casino</Link></li>
              <li><Link to={linkTo("slots-games")} className="hover:text-primary transition-colors">Slots & Games</Link></li>
              <li><Link to={linkTo("payments")} className="hover:text-primary transition-colors">Payments</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to={linkTo("about")} className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to={linkTo("contact")} className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to={linkTo("privacy")} className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to={linkTo("terms")} className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to={linkTo("disclaimer")} className="hover:text-primary transition-colors">Disclaimer</Link></li>
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
};

export default Footer;
