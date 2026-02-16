import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/download", label: "Download" },
  { to: "/features", label: "Features" },
  { to: "/login-guide", label: "Login Guide" },
  { to: "/faq", label: "FAQ" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="container-narrow flex h-[72px] md:h-[76px] items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-1 hover:brightness-110 transition-all shrink-0">
          {/* Full logo on desktop, icon on mobile */}
          <img
            src={logoFull}
            alt="1xBetApp.Download Logo"
            className="hidden sm:block h-10 md:h-12 w-auto object-contain"
          />
          <img
            src={logoIcon}
            alt="1xBet App"
            className="sm:hidden h-8 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#AFFILIATE_LINK_PLACEHOLDER" className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground blue-glow">
            Download Now
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl">
          <div className="container-narrow flex flex-col gap-2 py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
