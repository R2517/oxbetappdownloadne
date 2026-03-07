import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";
import CountrySwitcher from "@/components/CountrySwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { useGeo } from "@/contexts/GeoContext";
import { countries } from "@/lib/geo-data";

const validCodes = new Set(countries.map((c) => c.code.toLowerCase()));

function usePrefix(): string {
  const { pathname } = useLocation();
  const first = pathname.split("/").filter(Boolean)[0];
  if (first && validCodes.has(first.toLowerCase())) {
    return `/${first.toLowerCase()}`;
  }
  return "";
}

const navLinks = [
  { label: "Home", path: "" },
  { label: "Download", path: "download" },
  { label: "Sports", path: "sports-betting" },
  { label: "Casino", path: "casino" },
  { label: "Live Casino", path: "live-casino" },
  { label: "Games", path: "slots-games" },
  { label: "Payments", path: "payments" },
  { label: "Login", path: "login-guide" },
  { label: "FAQ", path: "faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { country } = useGeo();
  const prefix = usePrefix();

  const linkTo = (path: string) => path === "" ? (prefix || "/") : `${prefix}/${path}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 backdrop-blur-xl">
      <div className="container-narrow flex h-[72px] md:h-[76px] items-center justify-between px-4">
        <Link to={prefix || "/"} className="flex items-center gap-1 hover:brightness-110 transition-all shrink-0">
          <img src={logoFull} alt="1xBetApp.One Logo" className="hidden sm:block h-10 md:h-12 w-auto object-contain" />
          <img src={logoIcon} alt="1xBet App" className="sm:hidden h-8 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 ml-8">
          {navLinks.map((link) => {
            const to = linkTo(link.path);
            const isActive = location.pathname === to || (to !== "/" && location.pathname === to + "/");
            return (
              <Link
                key={link.path || "home"}
                to={to}
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CountrySwitcher />
          <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold text-foreground blue-glow hidden sm:inline-flex whitespace-nowrap">
            Download Now
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl">
          <div className="container-narrow flex flex-col gap-2 py-4 px-4">
            {navLinks.map((link) => {
              const to = linkTo(link.path);
              const isActive = location.pathname === to || (to !== "/" && location.pathname === to + "/");
              return (
                <Link
                  key={link.path || "home"}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
