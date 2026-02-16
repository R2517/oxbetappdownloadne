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
  const idx = Math.floor(Date.now() / 86400000) % hookVariations.length; // rotates daily
  return hookVariations[idx](country.bonusAmount, country.name);
}

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
    h1: (c) => c.code === "US" ? "1xBet App Download" : `1xBet App Download ${c.name}`,
    h1Line2: (c) => `Install Now & Unlock Exclusive Bonus Up to ${c.bonusAmount}`,
    desc: (c) => `Experience the fastest and most powerful mobile betting platform in ${c.name}. Download the latest 1xBet app for Android and iOS and enjoy sports betting, live casino, slots, and thousands of games in one secure application. Fast installation, smooth performance, and premium features designed for mobile users.`,
    ctaTitle: (c) => c.code === "US" ? "Ready to Get Started?" : `Start Playing in ${c.name} Today`,
    ctaDesc: (c) => `Download the 1xBet app now and enjoy the complete sports betting and casino experience in ${c.name}. Claim your ${c.bonusAmount} welcome bonus, deposit with local payment methods, and start winning.`,
  },
  download: {
    h1: (c) => c.code === "US" ? "1xBet App Download — Android APK & iOS" : `1xBet App Download ${c.name} — Android APK & iOS`,
    h1Line2: (c) => `Get ${c.bonusAmount} Bonus — Install Latest Version Now`,
    desc: (c) => `Download the latest version of the 1xBet mobile app in ${c.name}. Step-by-step installation guide for Android APK and iOS. Safe, verified, and optimized for ${c.name} users with ${c.currencySymbol} deposits.`,
    ctaTitle: (c) => c.code === "US" ? "Download the App Today" : `Download the App in ${c.name}`,
    ctaDesc: (c) => `Join millions of users in ${c.name} who trust the 1xBet mobile app. Get the latest version now and claim your ${c.bonusAmount} welcome bonus — it's free, fast, and secure.`,
  },
  casino: {
    h1: (c) => c.code === "US" ? "1xBet Casino — 5,000+ Games Online" : `1xBet Casino ${c.name} — 5,000+ Games Online`,
    h1Line2: (c) => `Play & Win Up to ${c.bonusAmount} Casino Bonus`,
    desc: (c) => `Play the best online casino games in ${c.name}. Over 5,000 slots, table games, progressive jackpots, and exclusive titles from world-class providers. Deposit in ${c.currency} and claim your ${c.bonusAmount} welcome bonus on the 1xBet mobile app.`,
    ctaTitle: (c) => c.code === "US" ? "Start Playing Casino Games Today" : `Play Casino Games in ${c.name}`,
    ctaDesc: (c) => `Install the 1xBet casino app in ${c.name} and access 5,000+ games, exclusive ${c.bonusAmount} bonus, and the best online casino experience on your mobile device.`,
  },
  liveCasino: {
    h1: (c) => c.code === "US" ? "1xBet Live Casino — Real Dealers, Real Action" : `1xBet Live Casino ${c.name} — Real Dealers, Real Action`,
    h1Line2: (c) => `Get ${c.bonusAmount} Bonus & Play Live Now`,
    desc: (c) => `Experience live casino in ${c.name} with real dealers streaming in HD. Play live roulette, blackjack, baccarat, and game shows. Deposit in ${c.currency} and claim your ${c.bonusAmount} bonus on the 1xBet mobile app.`,
    ctaTitle: (c) => c.code === "US" ? "Join the Live Casino Action" : `Play Live Casino in ${c.name}`,
    ctaDesc: (c) => `Download the 1xBet app in ${c.name} and experience real dealers, real cards, and real excitement. Claim your ${c.bonusAmount} welcome bonus and start playing live.`,
  },
  slotsGames: {
    h1: (c) => c.code === "US" ? "1xBet Slots & Games — Crash, Instant & More" : `1xBet Slots & Games ${c.name} — Aviator, Crash & More`,
    h1Line2: (c) => `Claim ${c.bonusAmount} Bonus & Start Spinning`,
    desc: (c) => `Discover thousands of slot games, crash games like Aviator, and instant wins in ${c.name}. From Megaways to Plinko — find your perfect game on the 1xBet app. Deposit in ${c.currency} and get your ${c.bonusAmount} welcome bonus.`,
    ctaTitle: (c) => c.code === "US" ? "Start Playing Your Favorite Games" : `Play Slots & Games in ${c.name}`,
    ctaDesc: (c) => `Install the 1xBet app in ${c.name} and explore thousands of slots, crash games, and instant wins. Get your ${c.bonusAmount} bonus and start playing on mobile.`,
  },
  sportsBetting: {
    h1: (c) => c.code === "US" ? "1xBet Sports Betting — 40+ Sports, Live Odds" : `1xBet Sports Betting ${c.name} — 40+ Sports, Live Odds`,
    h1Line2: (c) => `Bet & Win — Get ${c.bonusAmount} Welcome Bonus`,
    desc: (c) => `Bet on football, cricket, tennis, basketball, esports, and 40+ sports in ${c.name} with the best odds online. Live in-play betting, cashout, live streaming — all in the 1xBet sports betting app. Deposit in ${c.currency}.`,
    ctaTitle: (c) => c.code === "US" ? "Start Betting on Sports Today" : `Start Betting in ${c.name} Today`,
    ctaDesc: (c) => `Download the 1xBet sports betting app in ${c.name}. Access 40+ sports, live streaming, cashout, and claim your ${c.bonusAmount} welcome bonus.`,
  },
  payments: {
    h1: (c) => c.code === "US" ? "1xBet Payments — Deposits & Withdrawals" : `1xBet Payments ${c.name} — Fast ${c.currency} Deposits`,
    h1Line2: (c) => `Deposit in ${c.currency} & Get ${c.bonusAmount} Bonus`,
    desc: (c) => `Fast, secure payment methods for users in ${c.name}. Deposit and withdraw in ${c.currency} with 50+ options including local payments, e-wallets, cryptocurrency, and mobile money. Instant deposits and quick withdrawals.`,
    ctaTitle: (c) => c.code === "US" ? "Deposit & Start Playing Today" : `Deposit in ${c.currency} & Start Playing`,
    ctaDesc: (c) => `Download the 1xBet app in ${c.name}, deposit in ${c.currency}, and claim your ${c.bonusAmount} welcome bonus. Fast, secure, and designed for ${c.name} users.`,
  },
  features: {
    h1: (c) => c.code === "US" ? "Betting & Casino Features" : `1xBet Features for ${c.name} Players`,
    h1Line2: (c) => `Unlock ${c.bonusAmount} Bonus & All Premium Features`,
    desc: (c) => `Complete guide to sports betting, casino, live dealer, and gaming features available on the 1xBet app in ${c.name}. Explore every feature and claim your ${c.bonusAmount} welcome bonus.`,
    ctaTitle: (c) => c.code === "US" ? "Experience All Features Today" : `Get All Features in ${c.name}`,
    ctaDesc: (c) => `Install the 1xBet app in ${c.name} and access the complete range of sports betting, casino, and gaming features. Claim ${c.bonusAmount} welcome bonus.`,
  },
  faq: {
    h1: (c) => c.code === "US" ? "Frequently Asked Questions" : `1xBet FAQ — ${c.name}`,
    h1Line2: (c) => `Get Answers & Claim ${c.bonusAmount} Bonus`,
    desc: (c) => `Find answers to common questions about the 1xBet app in ${c.name} — download, installation, ${c.currency} deposits, login, features, and more.`,
    ctaTitle: (c) => "Still Have Questions?",
    ctaDesc: (c) => `Download the 1xBet app in ${c.name} and use the built-in help center. Get your ${c.bonusAmount} welcome bonus when you sign up.`,
  },
  loginGuide: {
    h1: (c) => c.code === "US" ? "Login & Account Guide" : `1xBet Login Guide — ${c.name}`,
    h1Line2: (c) => `Create Account & Get ${c.bonusAmount} Bonus`,
    desc: (c) => `Complete guide to creating your account, logging in, verification, and security on the 1xBet app in ${c.name}. Register and claim your ${c.bonusAmount} welcome bonus.`,
    ctaTitle: (c) => c.code === "US" ? "Get the App & Create Your Account" : `Create Your Account in ${c.name}`,
    ctaDesc: (c) => `Download the 1xBet app in ${c.name}, register in seconds, and claim your ${c.bonusAmount} welcome bonus. Start exploring sports betting, casino, and more.`,
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

// ─── Homepage-specific extended content (kept for backward compat) ──
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
  ctaTitle: string;
  ctaDesc: string;
}

const regionContent: Record<string, Partial<GeoContent>> = {
  Asia: {
    sportsTitle: "Cricket, Football & Live Betting",
    sportsDesc: "Bet on IPL, PSL, BPL, and international cricket alongside Premier League football, tennis, and kabaddi. Enjoy the best odds on Asian markets with live in-play betting and instant cashout.",
    bonusTitle: "Exclusive Welcome Bonus",
    bonusDesc: "New users from Asia enjoy generous welcome offers with local currency deposits. Sign up through the mobile app and claim your bonus instantly with popular payment methods like UPI, bKash, JazzCash, and GCash.",
  },
  Africa: {
    sportsTitle: "Football, Virtual Sports & Live Betting",
    sportsDesc: "Bet on the Premier League, Champions League, AFCON, and local leagues with the best odds. Virtual sports, aviator games, and live betting keep the action going 24/7.",
    bonusTitle: "Welcome Bonus for African Players",
    bonusDesc: "Get started with a generous welcome bonus deposited via M-Pesa, Airtel Money, MTN Mobile Money, or bank transfer. The mobile app makes it easy to deposit and withdraw in your local currency.",
  },
  Europe: {
    sportsTitle: "Football, Hockey & eSports Betting",
    sportsDesc: "From the Russian Premier League and Champions League to CS2, Dota 2, and hockey — get the best odds on European and CIS sports with real-time live betting and full cashout control.",
    bonusTitle: "Welcome Bonus & Promo Codes",
    bonusDesc: "Claim your welcome bonus using a promo code during registration. Deposit with bank cards, e-wallets, or cryptocurrency and receive your bonus instantly on the mobile app.",
  },
  Americas: {
    sportsTitle: "Football, MMA & Copa Libertadores",
    sportsDesc: "Bet on Brasileirão, Liga MX, Copa Libertadores, UFC, and international football with competitive odds. Live betting, accumulator boosts, and cashout are all available on mobile.",
    bonusTitle: "Bono de Bienvenida",
    bonusDesc: "New players in Latin America receive an exclusive welcome bonus. Deposit with PIX, OXXO, Mercado Pago, or bank transfer and claim your bonus through the mobile app.",
  },
  "Middle East": {
    sportsTitle: "Football, Cricket & Premium Markets",
    sportsDesc: "Access premium odds on the UAE Pro League, international football, cricket, and tennis. The app delivers a seamless experience with Arabic language support and regional payment methods.",
    bonusTitle: "Exclusive Regional Bonus",
    bonusDesc: "New users in the UAE and Middle East enjoy a premium welcome bonus. Deposit securely with local payment methods and start playing immediately.",
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

const defaultContent: GeoContent = {
  heroTitle: "1xBet App Download",
  heroSubtitle: "Experience the fastest, most feature-rich mobile betting and casino platform. Download the 1xBet app today and enjoy sports betting, live casino, and thousands of games — all in one secure mobile application.",
  overviewTitle: "Complete Mobile Betting & Casino Platform",
  overviewP1: "The 1xBet mobile app brings the entire betting and casino experience to your fingertips. Whether you prefer pre-match sports wagering, live in-play betting, or spinning the latest casino slots, this app delivers everything in a seamless, fast-loading mobile interface.",
  sportsTitle: "Sports Betting Excellence",
  sportsDesc: "From football and basketball to tennis, esports, and virtual sports — the sports betting app covers over 40 disciplines with thousands of daily markets.",
  casinoTitle: "Casino & Live Dealers",
  casinoDesc: "Dive into a world-class casino experience with over 5,000 games from industry-leading providers. The live casino brings real dealers to your screen with HD streaming, interactive tables, and immersive gameplay.",
  bonusTitle: "Bonuses & Promotions",
  bonusDesc: "New users can enjoy generous welcome offers, while existing players benefit from ongoing promotions, cashback rewards, and loyalty programs.",
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

// ─── Dynamic Schema Helper ──────────────────────────────────────
export function getGeoSchema(country: CountryData) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "1xBet Mobile App",
    operatingSystem: "Android, iOS",
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: country.currency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "15420",
    },
  };
}
