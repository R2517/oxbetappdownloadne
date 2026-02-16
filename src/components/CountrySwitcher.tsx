import { useState, useRef, useEffect } from "react";
import { useGeo } from "@/contexts/GeoContext";
import { countries, CountryData } from "@/lib/geo-data";
import { ChevronDown } from "lucide-react";

const regions = ["Asia", "Africa", "Europe", "Americas", "Middle East"] as const;

const CountrySwitcher = () => {
  const { country, setCountry } = useGeo();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted/50"
        aria-label="Select country"
      >
        <span className="text-lg leading-none">{country.flag}</span>
        <span className="hidden md:inline text-xs font-medium">{country.code}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-72 max-h-[400px] overflow-y-auto glass-card border border-border/50 rounded-xl shadow-2xl z-[100] p-2">
          {regions.map((region) => {
            const regionCountries = countries.filter((c) => c.region === region);
            if (regionCountries.length === 0) return null;
            return (
              <div key={region}>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground px-3 pt-3 pb-1 font-semibold">{region}</p>
                {regionCountries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => { setCountry(c); setOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      country.code === c.code ? "bg-primary/15 text-primary" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="text-lg leading-none">{c.flag}</span>
                    <span className="flex-1 text-left">{c.name}</span>
                    <span className="text-xs opacity-60">{c.currency}</span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CountrySwitcher;
