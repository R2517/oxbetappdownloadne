import { CountryData } from "./geo-data";

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
    heroSubtitle: "The #1 mobile betting app trusted by millions across Asia. Download now and enjoy cricket, football, kabaddi, and thousands of casino games — all with fast local payments.",
    sportsTitle: "Cricket, Football & Live Betting",
    sportsDesc: "Bet on IPL, PSL, BPL, and international cricket alongside Premier League football, tennis, and kabaddi. Enjoy the best odds on Asian markets with live in-play betting and instant cashout.",
    bonusTitle: "Exclusive Welcome Bonus",
    bonusDesc: "New users from Asia enjoy generous welcome offers with local currency deposits. Sign up through the mobile app and claim your bonus instantly with popular payment methods like UPI, bKash, JazzCash, and GCash.",
    ctaDesc: "Join millions of users across Asia. Download the app, deposit with local payment methods, and start betting on your favourite sports and casino games today.",
  },
  Africa: {
    heroSubtitle: "Africa's fastest-growing mobile betting platform. Download the app and bet on football, casino games, and virtual sports with instant mobile money deposits.",
    sportsTitle: "Football, Virtual Sports & Live Betting",
    sportsDesc: "Bet on the Premier League, Champions League, AFCON, and local leagues with the best odds. Virtual sports, aviator games, and live betting keep the action going 24/7.",
    bonusTitle: "Welcome Bonus for African Players",
    bonusDesc: "Get started with a generous welcome bonus deposited via M-Pesa, Airtel Money, MTN Mobile Money, or bank transfer. The mobile app makes it easy to deposit and withdraw in your local currency.",
    ctaDesc: "Join the millions already winning across Africa. Download the app, deposit via mobile money, and start playing today.",
  },
  Europe: {
    heroSubtitle: "The premier mobile betting and casino app for CIS and European markets. Access thousands of sports markets, live casino tables, and exclusive promotions.",
    sportsTitle: "Football, Hockey & eSports Betting",
    sportsDesc: "From the Russian Premier League and Champions League to CS2, Dota 2, and hockey — get the best odds on European and CIS sports with real-time live betting and full cashout control.",
    bonusTitle: "Welcome Bonus & Promo Codes",
    bonusDesc: "Claim your welcome bonus using a promo code during registration. Deposit with bank cards, e-wallets, or cryptocurrency and receive your bonus instantly on the mobile app.",
    ctaDesc: "Download the official app and access the full range of sports betting, casino, and live dealer games optimised for your region.",
  },
  Americas: {
    heroSubtitle: "The ultimate mobile betting app for Latin America. Download now for football, MMA, casino slots, and live dealer games — with deposits in your local currency.",
    sportsTitle: "Football, MMA & Copa Libertadores",
    sportsDesc: "Bet on Brasileirão, Liga MX, Copa Libertadores, UFC, and international football with competitive odds. Live betting, accumulator boosts, and cashout are all available on mobile.",
    bonusTitle: "Bono de Bienvenida",
    bonusDesc: "New players in Latin America receive an exclusive welcome bonus. Deposit with PIX, OXXO, Mercado Pago, or bank transfer and claim your bonus through the mobile app.",
    ctaDesc: "Descarga la app y únete a millones de jugadores en América Latina. Apuesta en deportes, casino y más con métodos de pago locales.",
  },
  "Middle East": {
    heroSubtitle: "Premium mobile betting and casino experience for the Middle East. Fast, secure, and packed with sports markets, live casino, and instant payment options.",
    sportsTitle: "Football, Cricket & Premium Markets",
    sportsDesc: "Access premium odds on the UAE Pro League, international football, cricket, and tennis. The app delivers a seamless experience with Arabic language support and regional payment methods.",
    bonusTitle: "Exclusive Regional Bonus",
    bonusDesc: "New users in the UAE and Middle East enjoy a premium welcome bonus. Deposit securely with local payment methods and start playing immediately.",
    ctaDesc: "Download the app and experience premium sports betting and casino entertainment tailored for the Middle East region.",
  },
};

const countryOverrides: Record<string, Partial<GeoContent>> = {
  IN: {
    heroTitle: "1xBet App Download India",
    heroSubtitle: "India's most popular betting app — download now for cricket betting, IPL odds, casino games, and a ₹26,000 welcome bonus. Fast UPI deposits and instant withdrawals.",
    overviewTitle: "India's Complete Mobile Betting Platform",
    overviewP1: "The 1xBet app is trusted by millions of Indian users for cricket betting, football wagering, and online casino entertainment. With full support for UPI, Paytm, PhonePe, and net banking, depositing and withdrawing is seamless. The app features dedicated IPL betting markets, competitive odds on international cricket, and over 5,000 casino games — all optimised for Indian mobile networks.",
  },
  BD: {
    heroTitle: "1xBet App Download Bangladesh",
    heroSubtitle: "Bangladesh's top mobile betting app. Download for cricket, football, and casino games with bKash and Nagad deposits. Get your ৳16,000 welcome bonus today.",
    overviewTitle: "Best Betting App in Bangladesh",
    overviewP1: "The 1xBet mobile app is the leading choice for Bangladeshi users, offering BPL cricket betting, international football markets, and a massive casino library. Deposit instantly with bKash, Nagad, or Rocket and enjoy fast withdrawals in Bangladeshi Taka.",
  },
  PK: {
    heroTitle: "1xBet App Download Pakistan",
    heroSubtitle: "Pakistan's leading mobile betting platform. Download for PSL cricket, football betting, and casino games with JazzCash and Easypaisa support.",
    overviewTitle: "Pakistan's Premier Betting App",
    overviewP1: "Pakistani users trust the 1xBet app for PSL cricket betting, international sports, and a world-class casino experience. With JazzCash, Easypaisa, and bank transfer support, managing your account is effortless.",
  },
  NG: {
    heroTitle: "1xBet App Download Nigeria",
    heroSubtitle: "Nigeria's favourite betting app — download now for football, virtual sports, and casino games. Get your ₦120,000 welcome bonus with instant bank or mobile deposits.",
    overviewTitle: "Nigeria's #1 Mobile Betting Platform",
    overviewP1: "The 1xBet app is the most popular betting platform in Nigeria, featuring Premier League football, NPFL, virtual sports, and aviator games. Deposit with Nigerian bank accounts, Opay, or Palmpay and enjoy fast Naira withdrawals.",
  },
  BR: {
    heroTitle: "1xBet App Download Brasil",
    heroSubtitle: "O melhor app de apostas do Brasil. Baixe agora para apostas em futebol, cassino e jogos ao vivo. Depósitos via PIX e bônus de boas-vindas de R$750.",
    overviewTitle: "Plataforma Completa de Apostas Mobile",
    overviewP1: "O app 1xBet é a escolha preferida dos apostadores brasileiros, com mercados de Brasileirão, Copa do Brasil, e milhares de jogos de cassino. Deposite instantaneamente via PIX, boleto, ou transferência bancária.",
  },
  KE: {
    heroTitle: "1xBet App Download Kenya",
    heroSubtitle: "Kenya's top betting app — download for football, aviator, and casino games. Deposit with M-Pesa and get your KSh19,500 welcome bonus.",
    overviewTitle: "Kenya's Best Mobile Betting App",
    overviewP1: "Kenyan bettors rely on the 1xBet app for Premier League football, local KPL markets, aviator games, and live casino. M-Pesa integration makes deposits and withdrawals seamless and instant.",
  },
  RU: {
    heroTitle: "Скачать 1xBet Приложение",
    heroSubtitle: "Официальное мобильное приложение 1xBet. Скачайте для ставок на спорт, казино и live-игр. Бонус ₽13,500 для новых пользователей.",
    overviewTitle: "Полная Мобильная Платформа",
    overviewP1: "Приложение 1xBet — ведущая мобильная платформа для ставок на спорт и казино в России. Поддержка банковских карт, электронных кошельков и криптовалют.",
  },
};

const defaultContent: GeoContent = {
  heroTitle: "1xBet App Download",
  heroSubtitle: "Experience the fastest, most feature-rich mobile betting and casino platform. Download the 1xBet app today and enjoy sports betting, live casino, and thousands of games — all in one secure mobile application.",
  overviewTitle: "Complete Mobile Betting & Casino Platform",
  overviewP1: "The 1xBet mobile app brings the entire betting and casino experience to your fingertips. Whether you prefer pre-match sports wagering, live in-play betting, or spinning the latest casino slots, this app delivers everything in a seamless, fast-loading mobile interface. Available as an APK download for Android and through the App Store for iOS, the application is optimized for performance on all modern devices.",
  sportsTitle: "Sports Betting Excellence",
  sportsDesc: "From football and basketball to tennis, esports, and virtual sports — the sports betting app covers over 40 disciplines with thousands of daily markets. Enjoy competitive odds, live streaming, and a powerful cashout feature that puts you in control of your bets.",
  casinoTitle: "Casino & Live Dealers",
  casinoDesc: "Dive into a world-class casino experience with over 5,000 games from industry-leading providers. The live casino brings real dealers to your screen with HD streaming, interactive tables, and immersive gameplay.",
  bonusTitle: "Bonuses & Promotions",
  bonusDesc: "New users can enjoy generous welcome offers, while existing players benefit from ongoing promotions, cashback rewards, and loyalty programs. The mobile app provides exclusive promotions not available on desktop.",
  ctaTitle: "Ready to Get Started?",
  ctaDesc: "Download the 1xBet mobile app now and enjoy the complete sports betting and casino experience on your device. Fast, secure, and always up to date.",
};

export function getGeoContent(country: CountryData): GeoContent {
  const regional = regionContent[country.region] || {};
  const countrySpecific = countryOverrides[country.code] || {};

  return {
    ...defaultContent,
    ...regional,
    ...countrySpecific,
    // Dynamic hero title fallback with country name
    heroTitle: countrySpecific.heroTitle || (country.code !== "US" ? `1xBet App Download ${country.name}` : defaultContent.heroTitle),
  };
}
