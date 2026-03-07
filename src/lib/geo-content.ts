import { CountryData } from "./geo-data";

// ─── A/B Hook Variations ────────────────────────────────────────
const hookVariations = [
  (bonus: string) => `Download Now & Claim Your Exclusive ${bonus} Welcome Bonus`,
  (_bonus: string, country: string) => `Start Winning Today — Install the Official Mobile App in ${country}`,
  (_bonus: string, country: string) => `Join Millions of Players in ${country}`,
  () => `Instant Install — Premium Betting Experience Awaits`,
  () => `Play Sports & Casino Anywhere — Mobile Optimized`,
];

export function getRotatingHook(country: CountryData): string {
  const idx = Math.floor(Date.now() / 86400000) % hookVariations.length;
  return hookVariations[idx](country.bonusAmount, country.name);
}

// ─── Per-Country Hero Content ───────────────────────────────────
interface CountryHeroContent {
  h1Line2: string;
  desc: string;
}

const countryHeroContent: Record<string, CountryHeroContent> = {
  IN: {
    h1Line2: `Install Now & Get Up to ₹26,000 Bonus`,
    desc: "Experience one of the fastest-growing mobile betting platforms in India. Download the latest 1xBet app for Android and iOS and enjoy cricket betting, live casino, sports markets, and thousands of games in one secure mobile application. Smooth performance, instant access, and premium features designed for Indian users.",
  },
  PK: {
    h1Line2: `Install Now & Get Up to ₨42,000 Bonus`,
    desc: "Discover a powerful mobile betting experience trusted by players across Pakistan. Download the 1xBet app and explore cricket betting, live casino tables, and exciting games with fast performance and secure access anytime, anywhere.",
  },
  BD: {
    h1Line2: `Install Now & Get Up to ৳16,000 Bonus`,
    desc: "Join thousands of players in Bangladesh enjoying sports betting, casino games, and live dealers in one mobile platform. The 1xBet app delivers fast loading, easy installation, and premium mobile gaming features.",
  },
  NP: {
    h1Line2: `Install Now & Get Exclusive Bonus`,
    desc: "Enjoy sports betting and casino entertainment directly from your smartphone in Nepal. The 1xBet app provides a smooth mobile interface with powerful features and fast access.",
  },
  LK: {
    h1Line2: `Install Now & Unlock Special Bonus`,
    desc: "Experience international-level mobile betting and casino gaming with fast performance and premium features tailored for Sri Lankan users.",
  },
  VN: {
    h1Line2: `Install Now & Get Exclusive Welcome Bonus`,
    desc: "Access sports betting, live casino, and exciting games with a high-performance mobile platform trusted by users across Vietnam.",
  },
  TH: {
    h1Line2: `Install Now & Claim Your Bonus`,
    desc: "Enjoy advanced betting features, fast gameplay, and premium casino entertainment on your mobile device in Thailand.",
  },
  PH: {
    h1Line2: `Install Now & Unlock Mobile Rewards`,
    desc: "Play sports, casino, and live games with smooth performance and secure access anywhere in the Philippines.",
  },
  ID: {
    h1Line2: `Install Now & Get Exclusive Bonus`,
    desc: "Enjoy one of the most feature-rich mobile betting platforms available for Indonesian users with fast access and premium features.",
  },
  MY: {
    h1Line2: `Install Now & Claim Bonus Rewards`,
    desc: "Access sports betting and casino entertainment in a secure and powerful mobile environment optimized for Malaysian players.",
  },
  NG: {
    h1Line2: `Install Now & Get Up to ₦120,000 Bonus`,
    desc: "Join millions of users in Nigeria enjoying football betting, live casino, and fast mobile gameplay with the 1xBet app.",
  },
  KE: {
    h1Line2: `Install Now & Claim Special Bonus`,
    desc: "Experience mobile sports betting and casino gaming optimized for Kenyan users with fast performance and easy access.",
  },
  GH: {
    h1Line2: `Install Now & Unlock Bonus Rewards`,
    desc: "Enjoy a complete mobile betting experience with powerful features and smooth performance in Ghana.",
  },
  ZA: {
    h1Line2: `Install Now & Get Exclusive Bonus`,
    desc: "Discover advanced sports betting and casino gaming features designed for mobile users across South Africa.",
  },
  UG: {
    h1Line2: `Install Now & Claim Welcome Bonus`,
    desc: "Play sports and casino games anytime with a secure and fast mobile platform in Uganda.",
  },
  TZ: {
    h1Line2: `Install Now & Get Bonus Rewards`,
    desc: "Experience smooth mobile betting and gaming features optimized for players in Tanzania.",
  },
  ZM: {
    h1Line2: `Install Now & Unlock Special Bonus`,
    desc: "Enjoy mobile sports betting and casino gaming with premium features and fast installation in Zambia.",
  },
  CM: {
    h1Line2: `Install Now & Claim Exclusive Bonus`,
    desc: "Play football betting and casino games with a powerful mobile platform trusted by players in Cameroon.",
  },
  RU: {
    h1Line2: `Install Now & Get Bonus Rewards`,
    desc: "Enjoy advanced betting tools, casino entertainment, and high-performance mobile gaming features in Russia.",
  },
  UA: {
    h1Line2: `Install Now & Unlock Bonus`,
    desc: "Experience modern sports betting and casino gaming with fast mobile performance in Ukraine.",
  },
  KZ: {
    h1Line2: `Install Now & Claim Bonus`,
    desc: "Access premium betting and gaming features with smooth mobile performance in Kazakhstan.",
  },
  BY: {
    h1Line2: `Install Now & Get Exclusive Bonus`,
    desc: "Enjoy advanced mobile betting and casino experience optimized for Belarus users.",
  },
  RO: {
    h1Line2: `Install Now & Unlock Bonus`,
    desc: "Discover powerful sports betting and casino features on mobile in Romania.",
  },
  RS: {
    h1Line2: `Install Now & Claim Bonus`,
    desc: "Play sports and casino games with premium mobile performance in Serbia.",
  },
  BR: {
    h1Line2: `Install Now & Get Up to R$750 Bonus`,
    desc: "Join one of the fastest-growing betting communities in Brazil with a powerful mobile platform.",
  },
  MX: {
    h1Line2: `Install Now & Claim Bonus`,
    desc: "Experience mobile sports betting and casino gaming with advanced features in Mexico.",
  },
  AR: {
    h1Line2: `Install Now & Unlock Bonus`,
    desc: "Play sports betting and casino games with premium mobile performance in Argentina.",
  },
  CO: {
    h1Line2: `Install Now & Claim Bonus`,
    desc: "Discover fast mobile betting and gaming features optimized for Colombia.",
  },
  PE: {
    h1Line2: `Install Now & Unlock Bonus`,
    desc: "Enjoy sports betting and casino gaming with smooth mobile experience in Peru.",
  },
  AE: {
    h1Line2: `Install Now & Get Exclusive Bonus`,
    desc: "Experience premium mobile betting features with fast access and secure performance in UAE.",
  },
};

// ─── Per-Country SEO Meta ───────────────────────────────────────
export interface GeoMeta {
  title: string;
  description: string;
}

const countryMeta: Record<string, GeoMeta> = {
  IN: { title: "1xBet App Download India — Latest APK for Android & iOS (2026)", description: "Download the latest 1xBet app in India for Android and iOS. Easy installation, cricket betting, live casino, and bonus offers up to ₹26,000. Fast, secure, and mobile optimized." },
  PK: { title: "1xBet App Download Pakistan — Android APK & iOS Latest Version", description: "Get the latest 1xBet app in Pakistan with quick installation for Android and iOS. Enjoy cricket betting, live casino, games, and bonus offers. Secure and easy setup." },
  BD: { title: "1xBet App Download Bangladesh — Latest APK for Android & iOS", description: "Download the 1xBet app in Bangladesh for Android and iOS. Access sports betting, live casino, games, and welcome bonus offers with fast mobile performance." },
  NP: { title: "1xBet App Download Nepal — Android & iOS Latest Version", description: "Install the latest 1xBet mobile app in Nepal and enjoy sports betting, casino games, and bonus rewards with smooth performance and secure access." },
  LK: { title: "1xBet App Download Sri Lanka — Latest APK Android & iOS", description: "Download the 1xBet app in Sri Lanka for Android and iOS. Explore sports betting, live casino, and exciting games with secure installation and fast performance." },
  VN: { title: "1xBet App Download Vietnam — Latest Android APK & iOS Version", description: "Install the 1xBet app in Vietnam and enjoy sports betting, live casino, slots, and bonus rewards with high-speed mobile performance." },
  TH: { title: "1xBet App Download Thailand — Android APK & iOS Latest Version", description: "Download the latest 1xBet app in Thailand with fast installation. Enjoy sports betting, casino games, and exclusive mobile bonus offers." },
  PH: { title: "1xBet App Download Philippines — Latest APK Android & iOS", description: "Install the 1xBet app in the Philippines for sports betting, live casino, and gaming entertainment with secure and smooth mobile performance." },
  ID: { title: "1xBet App Download Indonesia — Latest Version Android & iOS", description: "Download the 1xBet app in Indonesia with fast installation and enjoy sports betting, casino games, and exclusive mobile rewards." },
  MY: { title: "1xBet App Download Malaysia — Android APK & iOS Latest", description: "Install the 1xBet mobile app in Malaysia and access sports betting, casino entertainment, and bonus offers with secure performance." },
  NG: { title: "1xBet App Download Nigeria — Latest Android APK & iOS", description: "Download the 1xBet app in Nigeria and enjoy football betting, live casino, and gaming features with bonus offers up to ₦120,000." },
  KE: { title: "1xBet App Download Kenya — Latest APK Android & iOS", description: "Install the 1xBet app in Kenya with fast setup and enjoy sports betting, casino games, and mobile bonus rewards." },
  GH: { title: "1xBet App Download Ghana — Android & iOS Latest Version", description: "Download the 1xBet app in Ghana and explore sports betting, casino entertainment, and exclusive mobile promotions with secure performance." },
  ZA: { title: "1xBet App Download South Africa — Latest APK Android & iOS", description: "Install the 1xBet app in South Africa and enjoy sports betting, live casino, and gaming features with fast and secure mobile access." },
  UG: { title: "1xBet App Download Uganda — Latest Android APK & iOS", description: "Download the 1xBet app in Uganda and access sports betting, casino games, and mobile bonus rewards with smooth performance." },
  TZ: { title: "1xBet App Download Tanzania — Android APK & iOS Latest Version", description: "Install the 1xBet app in Tanzania with quick setup and enjoy sports betting, casino entertainment, and bonus offers." },
  ZM: { title: "1xBet App Download Zambia — Latest APK Android & iOS", description: "Download the 1xBet app in Zambia and enjoy sports betting, casino games, and mobile rewards with secure performance." },
  CM: { title: "1xBet App Download Cameroon — Android & iOS Latest Version", description: "Install the 1xBet app in Cameroon and explore sports betting, casino entertainment, and mobile promotions with smooth performance." },
  RU: { title: "1xBet App Download Russia — Latest Android APK & iOS", description: "Download the 1xBet app in Russia and enjoy sports betting, live casino, and advanced mobile gaming features with secure access." },
  UA: { title: "1xBet App Download Ukraine — Latest APK Android & iOS", description: "Install the 1xBet app in Ukraine and access sports betting, casino games, and mobile rewards with fast performance." },
  KZ: { title: "1xBet App Download Kazakhstan — Android APK & iOS Latest", description: "Download the 1xBet app in Kazakhstan with quick installation and enjoy sports betting, casino games, and bonus features." },
  BY: { title: "1xBet App Download Belarus — Latest Version Android & iOS", description: "Install the 1xBet app in Belarus and explore sports betting, live casino, and mobile promotions with secure performance." },
  RO: { title: "1xBet App Download Romania — Latest APK Android & iOS", description: "Download the 1xBet app in Romania with fast installation and enjoy sports betting, casino games, and bonus rewards." },
  RS: { title: "1xBet App Download Serbia — Latest Android APK & iOS", description: "Install the 1xBet app in Serbia and enjoy sports betting, casino entertainment, and mobile rewards with secure performance." },
  BR: { title: "1xBet App Download Brazil — Latest APK Android & iOS (2026)", description: "Download the 1xBet app in Brazil and enjoy football betting, live casino, and bonus offers up to R$750 with fast mobile performance." },
  MX: { title: "1xBet App Download Mexico — Latest Android APK & iOS", description: "Install the 1xBet app in Mexico with quick setup and enjoy sports betting, casino games, and mobile promotions." },
  AR: { title: "1xBet App Download Argentina — Android APK & iOS Latest", description: "Download the 1xBet app in Argentina and explore sports betting, casino games, and bonus rewards with smooth performance." },
  CO: { title: "1xBet App Download Colombia — Latest APK Android & iOS", description: "Install the 1xBet app in Colombia with fast setup and enjoy sports betting, casino entertainment, and mobile rewards." },
  PE: { title: "1xBet App Download Peru — Latest Android APK & iOS", description: "Download the 1xBet app in Peru and access sports betting, casino games, and mobile promotions with secure performance." },
  AE: { title: "1xBet App Download UAE — Latest APK Android & iOS", description: "Install the 1xBet app in UAE and enjoy sports betting, casino entertainment, and mobile features with fast performance." },
};

const defaultMeta: GeoMeta = {
  title: "1xBet App Download — Latest Version 2026 | Android APK & iOS",
  description: "Download the 1xBet mobile app for Android APK and iOS. Sports betting, live casino, slots, and instant payments. Get your bonus now — free, fast, secure.",
};

export function getGeoMeta(country: CountryData): GeoMeta {
  return countryMeta[country.code] || defaultMeta;
}

// ─── Per-Country Schema Language Code ───────────────────────────
const schemaLanguageCodes: Record<string, string> = {
  IN: "en-IN", PK: "ur", BD: "bn", NP: "ne", LK: "si", VN: "vi", TH: "th",
  PH: "en", ID: "id", MY: "ms", NG: "en", KE: "en", GH: "en", ZA: "en",
  UG: "en", TZ: "sw", ZM: "en", CM: "fr", RU: "ru", UA: "uk", KZ: "kk",
  BY: "be", RO: "ro", RS: "sr", BR: "pt-BR", MX: "es", AR: "es", CO: "es",
  PE: "es", AE: "ar",
};

// ─── Per-Page Hero Content ──────────────────────────────────────
export interface PageHero {
  h1: string;
  h1Line2: string;
  desc: string;
  ctaTitle: string;
  ctaDesc: string;
}

type PageKey = "home" | "download" | "casino" | "liveCasino" | "slotsGames" | "sportsBetting" | "payments" | "features" | "faq" | "loginGuide";

const pageTemplates: Record<PageKey, {
  h1: (c: CountryData) => string;
  h1Line2: (c: CountryData) => string;
  desc: (c: CountryData) => string;
  ctaTitle: (c: CountryData) => string;
  ctaDesc: (c: CountryData) => string;
}> = {
  home: {
    h1: (c) => c.code === "US" ? "1xBet App Download — Latest Version for Android & iOS" : `1xBet App Download — Latest Version for Android & iOS in ${c.name}`,
    h1Line2: (c) => {
      const override = countryHeroContent[c.code];
      return override?.h1Line2 || `Install Now & Unlock Exclusive Bonus Up to ${c.bonusAmount}`;
    },
    desc: (c) => {
      const override = countryHeroContent[c.code];
      return override?.desc || `Experience the fastest and most powerful mobile betting platform${c.code !== "US" ? ` in ${c.name}` : ""}. Download the latest 1xBet app for Android and iOS and enjoy sports betting, live casino, slots, and thousands of games in one secure application. Fast installation, smooth performance, and premium features designed for mobile users.`;
    },
    ctaTitle: (c) => c.code === "US" ? "Ready to Get Started?" : `Start Playing in ${c.name} Today`,
    ctaDesc: (c) => `Download the 1xBet app now and enjoy the complete sports betting and casino experience${c.code !== "US" ? ` in ${c.name}` : ""}. Claim your ${c.bonusAmount} welcome bonus, deposit with local payment methods, and start winning.`,
  },
  download: {
    h1: (c) => c.code === "US" ? "1xBet App Download — Android APK & iOS" : `1xBet App Download ${c.name} — Android APK & iOS`,
    h1Line2: (c) => `Get ${c.bonusAmount} Bonus — Install Latest Version Now`,
    desc: (c) => `Download the latest version of the 1xBet mobile app${c.code !== "US" ? ` in ${c.name}` : ""}. Step-by-step installation guide for Android APK and iOS. Safe, verified, and optimized${c.code !== "US" ? ` for ${c.name} users` : ""} with ${c.currencySymbol} deposits.`,
    ctaTitle: (c) => c.code === "US" ? "Download the App Today" : `Download the App in ${c.name}`,
    ctaDesc: (c) => `Join millions of users${c.code !== "US" ? ` in ${c.name}` : ""} who trust the 1xBet mobile app. Get the latest version now and claim your ${c.bonusAmount} welcome bonus — it's free, fast, and secure.`,
  },
  casino: {
    h1: (c) => c.code === "US" ? "1xBet Casino — 5,000+ Games Online" : `1xBet Casino ${c.name} — 5,000+ Games Online`,
    h1Line2: (c) => `Play & Win Up to ${c.bonusAmount} Casino Bonus`,
    desc: (c) => `Play the best online casino games${c.code !== "US" ? ` in ${c.name}` : ""}. Over 5,000 slots, table games, progressive jackpots, and exclusive titles from world-class providers. Deposit in ${c.currency} and claim your ${c.bonusAmount} welcome bonus on the 1xBet mobile app.`,
    ctaTitle: (c) => c.code === "US" ? "Start Playing Casino Games Today" : `Play Casino Games in ${c.name}`,
    ctaDesc: (c) => `Install the 1xBet casino app${c.code !== "US" ? ` in ${c.name}` : ""} and access 5,000+ games, exclusive ${c.bonusAmount} bonus, and the best online casino experience on your mobile device.`,
  },
  liveCasino: {
    h1: (c) => c.code === "US" ? "1xBet Live Casino — Real Dealers, Real Action" : `1xBet Live Casino ${c.name} — Real Dealers, Real Action`,
    h1Line2: (c) => `Get ${c.bonusAmount} Bonus & Play Live Now`,
    desc: (c) => `Experience live casino${c.code !== "US" ? ` in ${c.name}` : ""} with real dealers streaming in HD. Play live roulette, blackjack, baccarat, and game shows. Deposit in ${c.currency} and claim your ${c.bonusAmount} bonus on the 1xBet mobile app.`,
    ctaTitle: (c) => c.code === "US" ? "Join the Live Casino Action" : `Play Live Casino in ${c.name}`,
    ctaDesc: (c) => `Download the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""} and experience real dealers, real cards, and real excitement. Claim your ${c.bonusAmount} welcome bonus and start playing live.`,
  },
  slotsGames: {
    h1: (c) => c.code === "US" ? "1xBet Slots & Games — Crash, Instant & More" : `1xBet Slots & Games ${c.name} — Aviator, Crash & More`,
    h1Line2: (c) => `Claim ${c.bonusAmount} Bonus & Start Spinning`,
    desc: (c) => `Discover thousands of slot games, crash games like Aviator, and instant wins${c.code !== "US" ? ` in ${c.name}` : ""}. From Megaways to Plinko — find your perfect game on the 1xBet app. Deposit in ${c.currency} and get your ${c.bonusAmount} welcome bonus.`,
    ctaTitle: (c) => c.code === "US" ? "Start Playing Your Favorite Games" : `Play Slots & Games in ${c.name}`,
    ctaDesc: (c) => `Install the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""} and explore thousands of slots, crash games, and instant wins. Get your ${c.bonusAmount} bonus and start playing on mobile.`,
  },
  sportsBetting: {
    h1: (c) => c.code === "US" ? "1xBet Sports Betting — 40+ Sports, Live Odds" : `1xBet Sports Betting ${c.name} — 40+ Sports, Live Odds`,
    h1Line2: (c) => `Bet & Win — Get ${c.bonusAmount} Welcome Bonus`,
    desc: (c) => `Bet on football, cricket, tennis, basketball, esports, and 40+ sports${c.code !== "US" ? ` in ${c.name}` : ""} with the best odds online. Live in-play betting, cashout, live streaming — all in the 1xBet sports betting app. Deposit in ${c.currency}.`,
    ctaTitle: (c) => c.code === "US" ? "Start Betting on Sports Today" : `Start Betting in ${c.name} Today`,
    ctaDesc: (c) => `Download the 1xBet sports betting app${c.code !== "US" ? ` in ${c.name}` : ""}. Access 40+ sports, live streaming, cashout, and claim your ${c.bonusAmount} welcome bonus.`,
  },
  payments: {
    h1: (c) => c.code === "US" ? "1xBet Payments — Deposits & Withdrawals" : `1xBet Payments ${c.name} — Fast ${c.currency} Deposits`,
    h1Line2: (c) => `Deposit in ${c.currency} & Get ${c.bonusAmount} Bonus`,
    desc: (c) => `Fast, secure payment methods for users${c.code !== "US" ? ` in ${c.name}` : ""}. Deposit and withdraw in ${c.currency} with 50+ options including local payments, e-wallets, cryptocurrency, and mobile money. Instant deposits and quick withdrawals.`,
    ctaTitle: (c) => c.code === "US" ? "Deposit & Start Playing Today" : `Deposit in ${c.currency} & Start Playing`,
    ctaDesc: (c) => `Download the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""}, deposit in ${c.currency}, and claim your ${c.bonusAmount} welcome bonus. Fast, secure, and designed for ${c.name} users.`,
  },
  features: {
    h1: (c) => c.code === "US" ? "Betting & Casino Features" : `1xBet Features for ${c.name} Players`,
    h1Line2: (c) => `Unlock ${c.bonusAmount} Bonus & All Premium Features`,
    desc: (c) => `Complete guide to sports betting, casino, live dealer, and gaming features available on the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""}. Explore every feature and claim your ${c.bonusAmount} welcome bonus.`,
    ctaTitle: (c) => c.code === "US" ? "Experience All Features Today" : `Get All Features in ${c.name}`,
    ctaDesc: (c) => `Install the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""} and access the complete range of sports betting, casino, and gaming features. Claim ${c.bonusAmount} welcome bonus.`,
  },
  faq: {
    h1: (c) => c.code === "US" ? "Frequently Asked Questions" : `1xBet FAQ — ${c.name}`,
    h1Line2: (c) => `Get Answers & Claim ${c.bonusAmount} Bonus`,
    desc: (c) => `Find answers to common questions about the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""} — download, installation, ${c.currency} deposits, login, features, and more.`,
    ctaTitle: () => "Still Have Questions?",
    ctaDesc: (c) => `Download the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""} and use the built-in help center. Get your ${c.bonusAmount} welcome bonus when you sign up.`,
  },
  loginGuide: {
    h1: (c) => c.code === "US" ? "Login & Account Guide" : `1xBet Login Guide — ${c.name}`,
    h1Line2: (c) => `Create Account & Get ${c.bonusAmount} Bonus`,
    desc: (c) => `Complete guide to creating your account, logging in, verification, and security on the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""}. Register and claim your ${c.bonusAmount} welcome bonus.`,
    ctaTitle: (c) => c.code === "US" ? "Get the App & Create Your Account" : `Create Your Account in ${c.name}`,
    ctaDesc: (c) => `Download the 1xBet app${c.code !== "US" ? ` in ${c.name}` : ""}, register in seconds, and claim your ${c.bonusAmount} welcome bonus. Start exploring sports betting, casino, and more.`,
  },
};

export function getPageHero(page: PageKey, country: CountryData): PageHero {
  const tpl = pageTemplates[page];
  return {
    h1: tpl.h1(country),
    h1Line2: tpl.h1Line2(country),
    desc: tpl.desc(country),
    ctaTitle: tpl.ctaTitle(country),
    ctaDesc: tpl.ctaDesc(country),
  };
}

// ─── Homepage-specific extended content ─────────────────────────
export interface GeoContent {
  heroTitle: string;
  heroSubtitle: string;
  overviewTitle: string;
  overviewP1: string;
  sportsTitle: string;
  sportsDesc: string;
  casinoTitle: string;
  casinoDesc: string;
  bonusTitle: string;
  bonusDesc: string;
  bonusLongContent: string;
  bonusBenefits: string[];
  bonusHighlights: string[];
  ctaTitle: string;
  ctaDesc: string;
}

const regionContent: Record<string, Partial<GeoContent>> = {
  Asia: {
    sportsTitle: "Cricket, Football & Live Betting",
    sportsDesc: "Bet on IPL, PSL, BPL, and international cricket alongside Premier League football, tennis, and kabaddi. Enjoy the best odds on Asian markets with live in-play betting and instant cashout.",
    bonusTitle: "Unlock Your Exclusive Welcome Bonus",
    bonusDesc: "Install the latest mobile app and receive bonus rewards designed for new users. Fast activation, easy access, and powerful features included.",
  },
  Africa: {
    sportsTitle: "Football, Virtual Sports & Live Betting",
    sportsDesc: "Bet on the Premier League, Champions League, AFCON, and local leagues with the best odds. Virtual sports, aviator games, and live betting keep the action going 24/7.",
    bonusTitle: "Unlock Your Exclusive Welcome Bonus",
    bonusDesc: "Install the latest mobile app and receive bonus rewards designed for new users. Fast activation, easy access, and powerful features included.",
  },
  Europe: {
    sportsTitle: "Football, Hockey & eSports Betting",
    sportsDesc: "From the Russian Premier League and Champions League to CS2, Dota 2, and hockey — get the best odds on European and CIS sports with real-time live betting and full cashout control.",
    bonusTitle: "Unlock Your Exclusive Welcome Bonus",
    bonusDesc: "Install the latest mobile app and receive bonus rewards designed for new users. Fast activation, easy access, and powerful features included.",
  },
  Americas: {
    sportsTitle: "Football, MMA & Copa Libertadores",
    sportsDesc: "Bet on Brasileirão, Liga MX, Copa Libertadores, UFC, and international football with competitive odds. Live betting, accumulator boosts, and cashout are all available on mobile.",
    bonusTitle: "Unlock Your Exclusive Welcome Bonus",
    bonusDesc: "Install the latest mobile app and receive bonus rewards designed for new users. Fast activation, easy access, and powerful features included.",
  },
  "Middle East": {
    sportsTitle: "Football, Cricket & Premium Markets",
    sportsDesc: "Access premium odds on the UAE Pro League, international football, cricket, and tennis. The app delivers a seamless experience with Arabic language support and regional payment methods.",
    bonusTitle: "Unlock Your Exclusive Welcome Bonus",
    bonusDesc: "Install the latest mobile app and receive bonus rewards designed for new users. Fast activation, easy access, and powerful features included.",
  },
};

const countryOverrides: Record<string, Partial<GeoContent>> = {
  IN: {
    overviewTitle: "India's Complete Mobile Betting Platform",
    overviewP1: "The 1xBet app is trusted by millions of Indian users for cricket betting, football wagering, and online casino entertainment. With full support for UPI, Paytm, PhonePe, and net banking, depositing and withdrawing is seamless. The app features dedicated IPL betting markets, competitive odds on international cricket, and over 5,000 casino games — all optimised for Indian mobile networks.",
  },
  BD: {
    overviewTitle: "Best Betting App in Bangladesh",
    overviewP1: "The 1xBet mobile app is the leading choice for Bangladeshi users, offering BPL cricket betting, international football markets, and a massive casino library. Deposit instantly with bKash, Nagad, or Rocket and enjoy fast withdrawals in Bangladeshi Taka.",
  },
  PK: {
    overviewTitle: "Pakistan's Premier Betting App",
    overviewP1: "Pakistani users trust the 1xBet app for PSL cricket betting, international sports, and a world-class casino experience. With JazzCash, Easypaisa, and bank transfer support, managing your account is effortless.",
  },
  NG: {
    overviewTitle: "Nigeria's #1 Mobile Betting Platform",
    overviewP1: "The 1xBet app is the most popular betting platform in Nigeria, featuring Premier League football, NPFL, virtual sports, and aviator games. Deposit with Nigerian bank accounts, Opay, or Palmpay and enjoy fast Naira withdrawals.",
  },
  BR: {
    overviewTitle: "Plataforma Completa de Apostas Mobile",
    overviewP1: "O app 1xBet é a escolha preferida dos apostadores brasileiros, com mercados de Brasileirão, Copa do Brasil, e milhares de jogos de cassino. Deposite instantaneamente via PIX, boleto, ou transferência bancária.",
  },
  KE: {
    overviewTitle: "Kenya's Best Mobile Betting App",
    overviewP1: "Kenyan bettors rely on the 1xBet app for Premier League football, local KPL markets, aviator games, and live casino. M-Pesa integration makes deposits and withdrawals seamless and instant.",
  },
  RU: {
    overviewTitle: "Полная Мобильная Платформа",
    overviewP1: "Приложение 1xBet — ведущая мобильная платформа для ставок на спорт и казино в России. Поддержка банковских карт, электронных кошельков и криптовалют.",
  },
};

const bonusLongContent = "After downloading the mobile application, new users can access a special welcome bonus designed to enhance their experience from the very first session. The platform offers a combination of sports betting opportunities, casino games, live dealer experiences, and mobile-optimized gameplay, all supported by advanced performance and security features. The bonus system is structured to provide users with additional value while exploring various features of the platform. Whether you prefer sports betting markets, live casino tables, or slot games, the welcome rewards can be used to extend gameplay and discover new opportunities.";

const bonusBenefits = [
  "Easy activation after registration",
  "Mobile-optimized experience",
  "Access to sports and casino features",
  "Fast performance and smooth interface",
  "Secure and protected environment",
];

const bonusHighlights = [
  "Welcome rewards for new users",
  "Additional promotions available",
  "Mobile-exclusive offers",
  "Access to multiple game categories",
];

const defaultContent: GeoContent = {
  heroTitle: "1xBet App Download — Latest Version for Android & iOS",
  heroSubtitle: "Experience the fastest, most feature-rich mobile betting and casino platform. Download the 1xBet app today and enjoy sports betting, live casino, and thousands of games — all in one secure mobile application.",
  overviewTitle: "Complete Mobile Betting & Casino Platform",
  overviewP1: "The 1xBet mobile app brings the entire betting and casino experience to your fingertips. Whether you prefer pre-match sports wagering, live in-play betting, or spinning the latest casino slots, this app delivers everything in a seamless, fast-loading mobile interface.",
  sportsTitle: "Sports Betting Excellence",
  sportsDesc: "From football and basketball to tennis, esports, and virtual sports — the sports betting app covers over 40 disciplines with thousands of daily markets.",
  casinoTitle: "Casino & Live Dealers",
  casinoDesc: "Dive into a world-class casino experience with over 5,000 games from industry-leading providers. The live casino brings real dealers to your screen with HD streaming, interactive tables, and immersive gameplay.",
  bonusTitle: "Unlock Your Exclusive Welcome Bonus After Installation",
  bonusDesc: "Install the latest mobile app and receive bonus rewards designed for new users. Fast activation, easy access, and powerful features included.",
  bonusLongContent,
  bonusBenefits,
  bonusHighlights,
  ctaTitle: "Ready to Get Started?",
  ctaDesc: "Download the 1xBet mobile app now and enjoy the complete sports betting and casino experience on your device. Fast, secure, and always up to date.",
};

export function getGeoContent(country: CountryData): GeoContent {
  const pageHero = getPageHero("home", country);
  const regional = regionContent[country.region] || {};
  const countrySpecific = countryOverrides[country.code] || {};

  return {
    ...defaultContent,
    ...regional,
    ...countrySpecific,
    heroTitle: pageHero.h1,
    heroSubtitle: pageHero.desc,
    ctaTitle: pageHero.ctaTitle,
    ctaDesc: pageHero.ctaDesc,
    overviewTitle: countrySpecific.overviewTitle || (country.code !== "US" ? `${country.name}'s Complete Mobile Betting Platform` : defaultContent.overviewTitle),
  };
}

// ─── Dynamic Schema Helpers ─────────────────────────────────────
export function getGeoSchema(country: CountryData) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: country.code === "US" ? "1xBet App" : `1xBet App ${country.name}`,
    operatingSystem: "Android, iOS",
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: country.currency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "125000",
    },
    description: `Download the latest 1xBet mobile app${country.code !== "US" ? ` in ${country.name}` : ""}. Enjoy sports betting, casino games, live betting, and mobile features with fast and secure installation.`,
    inLanguage: schemaLanguageCodes[country.code] || country.languageCode,
    areaServed: {
      "@type": "Country",
      name: country.code === "US" ? "Global" : country.name,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "1xBet App Download",
    url: "https://1xbetapp.one",
    logo: "https://1xbetapp.one/favicon.png",
    description: "Official informational resource for the 1xBet mobile application.",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "1xBet App Download",
    url: "https://1xbetapp.one",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://1xbetapp.one/?s={search_term}",
      "query-input": "required name=search_term",
    },
  };
}
