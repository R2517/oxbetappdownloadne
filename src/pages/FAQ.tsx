import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero } from "@/lib/geo-content";

const faqData = [
  { cat: "Download & Installation", items: [
    { q: "Is the 1xBet app free to download?", a: "Yes, the mobile application is completely free to download for both Android and iOS devices. There are no charges for downloading or installing the app." },
    { q: "Where can I download the official APK file?", a: "You can download the latest APK from the official download page. Always use verified sources to ensure you get the authentic, secure version of the application." },
    { q: "How do I install the APK on Android?", a: "Enable 'Install from Unknown Sources' in your device settings, download the APK file, open it from your file manager, and tap 'Install'. The process takes less than a minute." },
    { q: "Is the app available on the Google Play Store?", a: "The app may not be available on the Google Play Store in all regions due to Google's policies on betting apps. The APK download from the official website is the recommended alternative." },
    { q: "How do I download the app on iOS?", a: "iPhone and iPad users can download the app from the App Store. In some regions, you may need to change your App Store country settings to access the app." },
    { q: "How do I update the app to the latest version?", a: "Android users should download the latest APK from the official site. iOS users receive updates automatically through the App Store. It's recommended to always use the latest version for security and performance." },
    { q: "What should I do if the installation fails?", a: "Ensure you have enough storage space, that 'Unknown Sources' is enabled, and that you're using the latest APK. Restart your device and try again. If issues persist, clear your browser cache and re-download." },
  ]},
  { cat: "Login & Account", items: [
    { q: "How do I create an account?", a: "Open the app, tap 'Register', choose a registration method (one-click, phone, email, or social media), fill in your details, and set a password. Registration takes under a minute." },
    { q: "I forgot my password. How do I recover it?", a: "Tap 'Forgot Password' on the login screen, enter your registered email or phone number, and follow the reset instructions sent to you." },
    { q: "What is account verification (KYC)?", a: "Account verification confirms your identity and is required for withdrawals. Upload a government-issued ID and proof of address through the app. Verification typically completes within 24-72 hours." },
    { q: "How do I enable two-factor authentication?", a: "Go to Account Settings > Security > Two-Factor Authentication. You can set up 2FA using an authenticator app or SMS verification for added security." },
    { q: "Can I use biometric login?", a: "Yes, the app supports fingerprint and Face ID login on compatible devices. Enable biometric access in your account security settings after your first manual login." },
  ]},
  { cat: "Payments", items: [
    { q: "What payment methods are supported?", a: "The app supports 50+ methods including Visa, Mastercard, Skrill, Neteller, Bitcoin, Ethereum, bank transfers, and mobile payments. Available methods vary by country." },
    { q: "How long do withdrawals take?", a: "E-wallet and cryptocurrency withdrawals are typically processed within 15 minutes. Bank card withdrawals take 1-3 business days. Processing times may vary by payment provider." },
    { q: "Is there a minimum deposit amount?", a: "Minimum deposit amounts vary by payment method but generally start from $1/€1 for most options. Check the deposit section in the app for specific limits." },
    { q: "Are my financial transactions secure?", a: "Yes, all transactions are protected by 256-bit SSL encryption. The platform uses secure payment gateways and supports two-factor authentication for all financial operations." },
  ]},
  { cat: "Features & Gameplay", items: [
    { q: "What sports can I bet on?", a: "Over 40 sports including football, basketball, tennis, cricket, esports, table tennis, ice hockey, MMA, boxing, and virtual sports. Thousands of markets are available daily." },
    { q: "How does live betting work?", a: "Live betting allows you to place wagers on events currently in progress. Odds update in real-time based on match developments. Combined with live streaming, you can watch and bet simultaneously." },
    { q: "What casino games are available?", a: "Over 5,000 casino games including slots, table games (blackjack, roulette, baccarat), live dealer games, and progressive jackpots from 100+ providers." },
    { q: "What are 1xGames?", a: "1xGames are exclusive games developed for the platform, including crash games (like Aviator), instant wins, dice, mines, and other fast-paced titles with provably fair outcomes." },
    { q: "Can I use the cashout feature?", a: "Yes, full and partial cashout options are available on most pre-match and live bets. You can also set up auto-cashout at specific profit levels." },
  ]},
  { cat: "Safety & Compatibility", items: [
    { q: "Is the app safe to use?", a: "Yes, the app is developed by a licensed operator, uses SSL encryption for all communications, and undergoes regular security audits. Always download from official sources." },
    { q: "What are the system requirements for Android?", a: "Android 5.0 (Lollipop) or higher, 100 MB free storage, 1 GB RAM minimum, and a stable internet connection." },
    { q: "What are the system requirements for iOS?", a: "iOS 12.0 or later, 150 MB free storage, compatible with iPhone and iPad. Requires a stable internet connection." },
    { q: "Does the app work on tablets?", a: "Yes, the app is fully optimized for tablets on both Android and iOS, with responsive layouts that take advantage of larger screens." },
    { q: "Can I use the app with a VPN?", a: "While the app may work with a VPN, it's recommended to use it without one to avoid potential account restrictions. Check local regulations regarding online betting in your jurisdiction." },
  ]},
];

const FAQ = () => {
  const { country } = useGeo();
  const hero = getPageHero("faq", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqData.flatMap(cat => cat.items.map(item => ({
          "@type": "Question", name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        })))
      })}} />

      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">FAQ</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2"><span className="gold-text">{hero.h1}</span></h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
          </ScrollReveal>
        </div>
      </section>


    <section className="section-padding pt-0">
      <div className="container-narrow max-w-3xl">
        {faqData.map((cat, catIdx) => (
          <ScrollReveal key={cat.cat} delay={catIdx * 0.05}>
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{cat.cat}</h2>
              <Accordion type="multiple" className="space-y-2">
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${cat.cat}-${i}`} className="glass-card px-5 border-none">
                    <AccordionTrigger className="text-left font-medium hover:text-primary py-4">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

      <section className="section-padding bg-gradient-to-b from-primary/10 to-transparent text-center">
        <GlowOnScroll>
          <div className="container-narrow">
            <h2 className="text-3xl font-bold mb-4">{hero.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8">{hero.ctaDesc}</p>
            <CTAButton text="Download App" size="lg" showBonus />
          </div>
        </GlowOnScroll>
      </section>
    </Layout>
  );
};

export default FAQ;