export interface CountryData {
  code: string;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  bonusAmount: string;
  bonusRaw: number;
  language: string;
  languageCode: string;
  languageAlt?: string;
  languageAltCode?: string;
  region: string;
}

export const countries: CountryData[] = [
  // Asia
  { code: "IN", name: "India", flag: "🇮🇳", currency: "INR", currencySymbol: "₹", bonusAmount: "₹26,000", bonusRaw: 26000, language: "English", languageCode: "en", languageAlt: "Hindi", languageAltCode: "hi", region: "Asia" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", currency: "PKR", currencySymbol: "₨", bonusAmount: "₨42,000", bonusRaw: 42000, language: "Urdu", languageCode: "ur", languageAlt: "English", languageAltCode: "en", region: "Asia" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", currency: "BDT", currencySymbol: "৳", bonusAmount: "৳16,000", bonusRaw: 16000, language: "Bengali", languageCode: "bn", region: "Asia" },
  { code: "NP", name: "Nepal", flag: "🇳🇵", currency: "NPR", currencySymbol: "₨", bonusAmount: "₨20,000", bonusRaw: 20000, language: "English", languageCode: "en", region: "Asia" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", currency: "LKR", currencySymbol: "₨", bonusAmount: "₨48,000", bonusRaw: 48000, language: "English", languageCode: "en", region: "Asia" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", currency: "VND", currencySymbol: "₫", bonusAmount: "₫3,700,000", bonusRaw: 3700000, language: "Vietnamese", languageCode: "vi", region: "Asia" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", currency: "THB", currencySymbol: "฿", bonusAmount: "฿5,200", bonusRaw: 5200, language: "Thai", languageCode: "th", region: "Asia" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", currency: "PHP", currencySymbol: "₱", bonusAmount: "₱8,400", bonusRaw: 8400, language: "English", languageCode: "en", region: "Asia" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", currency: "IDR", currencySymbol: "Rp", bonusAmount: "Rp2,350,000", bonusRaw: 2350000, language: "Indonesian", languageCode: "id", region: "Asia" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", currency: "MYR", currencySymbol: "RM", bonusAmount: "RM650", bonusRaw: 650, language: "English", languageCode: "en", region: "Asia" },
  // Africa
  { code: "NG", name: "Nigeria", flag: "🇳🇬", currency: "NGN", currencySymbol: "₦", bonusAmount: "₦120,000", bonusRaw: 120000, language: "English", languageCode: "en", region: "Africa" },
  { code: "KE", name: "Kenya", flag: "🇰🇪", currency: "KES", currencySymbol: "KSh", bonusAmount: "KSh19,500", bonusRaw: 19500, language: "English", languageCode: "en", region: "Africa" },
  { code: "GH", name: "Ghana", flag: "🇬🇭", currency: "GHS", currencySymbol: "₵", bonusAmount: "₵2,300", bonusRaw: 2300, language: "English", languageCode: "en", region: "Africa" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", currency: "ZAR", currencySymbol: "R", bonusAmount: "R2,700", bonusRaw: 2700, language: "English", languageCode: "en", region: "Africa" },
  { code: "UG", name: "Uganda", flag: "🇺🇬", currency: "UGX", currencySymbol: "USh", bonusAmount: "USh560,000", bonusRaw: 560000, language: "English", languageCode: "en", region: "Africa" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿", currency: "TZS", currencySymbol: "TSh", bonusAmount: "TSh380,000", bonusRaw: 380000, language: "English", languageCode: "en", region: "Africa" },
  { code: "ZM", name: "Zambia", flag: "🇿🇲", currency: "ZMW", currencySymbol: "ZK", bonusAmount: "ZK4,100", bonusRaw: 4100, language: "English", languageCode: "en", region: "Africa" },
  { code: "CM", name: "Cameroon", flag: "🇨🇲", currency: "XAF", currencySymbol: "FCFA", bonusAmount: "FCFA90,000", bonusRaw: 90000, language: "French", languageCode: "fr", languageAlt: "English", languageAltCode: "en", region: "Africa" },
  // Europe / CIS
  { code: "RU", name: "Russia", flag: "🇷🇺", currency: "RUB", currencySymbol: "₽", bonusAmount: "₽13,500", bonusRaw: 13500, language: "Russian", languageCode: "ru", region: "Europe" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦", currency: "UAH", currencySymbol: "₴", bonusAmount: "₴6,200", bonusRaw: 6200, language: "Ukrainian", languageCode: "uk", region: "Europe" },
  { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", currency: "KZT", currencySymbol: "₸", bonusAmount: "₸70,000", bonusRaw: 70000, language: "Russian", languageCode: "ru", region: "Europe" },
  { code: "BY", name: "Belarus", flag: "🇧🇾", currency: "BYN", currencySymbol: "Br", bonusAmount: "Br490", bonusRaw: 490, language: "Russian", languageCode: "ru", region: "Europe" },
  { code: "RO", name: "Romania", flag: "🇷🇴", currency: "RON", currencySymbol: "lei", bonusAmount: "lei700", bonusRaw: 700, language: "Romanian", languageCode: "ro", region: "Europe" },
  { code: "RS", name: "Serbia", flag: "🇷🇸", currency: "RSD", currencySymbol: "din.", bonusAmount: "din.16,500", bonusRaw: 16500, language: "Serbian", languageCode: "sr", region: "Europe" },
  // Latin America
  { code: "BR", name: "Brazil", flag: "🇧🇷", currency: "BRL", currencySymbol: "R$", bonusAmount: "R$750", bonusRaw: 750, language: "Portuguese", languageCode: "pt", region: "Americas" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", currency: "MXN", currencySymbol: "MX$", bonusAmount: "MX$2,500", bonusRaw: 2500, language: "Spanish", languageCode: "es", region: "Americas" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", currency: "ARS", currencySymbol: "AR$", bonusAmount: "AR$135,000", bonusRaw: 135000, language: "Spanish", languageCode: "es", region: "Americas" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", currency: "COP", currencySymbol: "COL$", bonusAmount: "COL$600,000", bonusRaw: 600000, language: "Spanish", languageCode: "es", region: "Americas" },
  { code: "PE", name: "Peru", flag: "🇵🇪", currency: "PEN", currencySymbol: "S/", bonusAmount: "S/560", bonusRaw: 560, language: "Spanish", languageCode: "es", region: "Americas" },
  // Middle East
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "AED", currencySymbol: "د.إ", bonusAmount: "د.إ550", bonusRaw: 550, language: "English", languageCode: "en", languageAlt: "Arabic", languageAltCode: "ar", region: "Middle East" },
];

export const defaultCountry: CountryData = {
  code: "US",
  name: "Global",
  flag: "🌍",
  currency: "USD",
  currencySymbol: "$",
  bonusAmount: "$150",
  bonusRaw: 150,
  language: "English",
  languageCode: "en",
  region: "Global",
};

export function getCountryByCode(code: string): CountryData {
  return countries.find((c) => c.code === code) || defaultCountry;
}
