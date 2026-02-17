import { useParams } from "react-router-dom";
import { countries } from "@/lib/geo-data";

const validCodes = new Set(countries.map((c) => c.code.toLowerCase()));

export function useCountryPrefix(): string {
  const { countryCode } = useParams<{ countryCode: string }>();
  if (countryCode && validCodes.has(countryCode.toLowerCase())) {
    return `/${countryCode.toLowerCase()}`;
  }
  return "";
}
