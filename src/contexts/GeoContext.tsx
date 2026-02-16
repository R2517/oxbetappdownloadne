import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { CountryData, countries, defaultCountry, getCountryByCode } from "@/lib/geo-data";

interface GeoContextType {
  country: CountryData;
  setCountry: (country: CountryData) => void;
  loading: boolean;
  bonusText: string;
  ctaBonus: string;
}

const GeoContext = createContext<GeoContextType>({
  country: defaultCountry,
  setCountry: () => {},
  loading: true,
  bonusText: "$150",
  ctaBonus: "Get $150 Bonus — Download Now",
});

export const useGeo = () => useContext(GeoContext);

const STORAGE_KEY = "geo_country_code";

async function detectCountry(): Promise<string | null> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    const data = await res.json();
    return data.country_code || null;
  } catch {
    try {
      const res = await fetch("https://ip-api.com/json/?fields=countryCode", { signal: AbortSignal.timeout(3000) });
      if (!res.ok) return null;
      const data = await res.json();
      return data.countryCode || null;
    } catch {
      return null;
    }
  }
}

export const GeoProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountryState] = useState<CountryData>(defaultCountry);
  const [loading, setLoading] = useState(true);

  const setCountry = useCallback((c: CountryData) => {
    setCountryState(c);
    try { localStorage.setItem(STORAGE_KEY, c.code); } catch {}
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const found = getCountryByCode(saved);
      if (found.code !== "US") {
        setCountryState(found);
        setLoading(false);
        return;
      }
    }

    detectCountry().then((code) => {
      if (code) {
        const found = getCountryByCode(code);
        setCountryState(found);
        try { localStorage.setItem(STORAGE_KEY, found.code); } catch {}
      }
      setLoading(false);
    });
  }, []);

  const bonusText = country.bonusAmount;
  const ctaBonus = `Get ${country.bonusAmount} Bonus — Download Now`;

  return (
    <GeoContext.Provider value={{ country, setCountry, loading, bonusText, ctaBonus }}>
      {children}
    </GeoContext.Provider>
  );
};
