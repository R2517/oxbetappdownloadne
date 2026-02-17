import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGeo } from "@/contexts/GeoContext";
import { getCountryByCode, countries } from "@/lib/geo-data";
import SeoHead from "@/components/SeoHead";

const validCodes = new Set(countries.map((c) => c.code.toLowerCase()));

interface CountryRouteProps {
  children: React.ReactNode;
}

const CountryRoute = ({ children }: CountryRouteProps) => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { setCountry } = useGeo();

  useEffect(() => {
    if (countryCode && validCodes.has(countryCode.toLowerCase())) {
      const found = getCountryByCode(countryCode.toUpperCase());
      setCountry(found);
    }
  }, [countryCode, setCountry]);

  return (
    <>
      <SeoHead />
      {children}
    </>
  );
};

export default CountryRoute;
