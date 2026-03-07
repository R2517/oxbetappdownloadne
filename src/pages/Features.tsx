import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, Trophy, Gamepad2, Users, Star, CreditCard, Zap, TrendingUp, Shield, Smartphone, Clock, Target, Dice1 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero, getGeoSchema } from "@/lib/geo-content";
import { CenterBanner } from "@/components/AffiliateBanners";

const Features = () => {
  const { country } = useGeo();
  const hero = getPageHero("features", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.one" },
          { "@type": "ListItem", position: 2, name: "Features", item: "https://1xbetapp.one/features" },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGeoSchema(country))}} />

      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Features</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-text">{hero.h1}</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Download App" showBonus />
          </ScrollReveal>
        </div>
      </section>

      <CenterBanner />

    {/* Sports Betting */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Trophy className="text-primary" size={28} /> Sports Betting</h2>
          <p className="text-muted-foreground mb-4">The sports betting section of the 1xBet app covers over 40 sports disciplines with thousands of daily markets. Whether you're a casual bettor or a seasoned professional, the platform delivers competitive odds, deep market coverage, and advanced betting tools that enhance your wagering experience.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Bet Types Available</h3>
          <p className="text-muted-foreground mb-4">The app supports a wide range of bet types including singles, accumulators (parlays), system bets, chain bets, and conditional bets. Advanced options like Asian handicaps, totals, both teams to score, and correct score predictions are available across all major sports. The betting slip is intuitive and allows quick stake adjustments and combination management.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Odds Formats</h3>
          <p className="text-muted-foreground mb-4">Switch between decimal, fractional, and American odds formats at any time. The app provides some of the most competitive odds in the industry with low margins, particularly on major football leagues, tennis Grand Slams, and NBA games. Odds are updated in real-time during live events.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Live Betting & Streaming</h3>
          <p className="text-muted-foreground mb-4">In-play betting is one of the strongest features of the sports betting app. Place bets on ongoing matches with odds that update every second. Combined with live streaming of thousands of events, you can watch and bet simultaneously without leaving the app. Statistics, match trackers, and live scores are integrated directly into the betting interface.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Cashout Feature</h3>
          <p className="text-muted-foreground mb-6">The cashout functionality allows you to secure profits or minimize losses before an event concludes. Both full cashout and partial cashout options are available, giving you complete control over your active bets. Auto-cashout can be configured at specific profit thresholds.</p>
          <CTAButton text="Download & Start Betting" />
        </ScrollReveal>
      </div>
    </section>

    {/* Casino */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="right">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Gamepad2 className="text-primary" size={28} /> Casino Games</h2>
          <p className="text-muted-foreground mb-4">The casino section features over 5,000 games from more than 100 leading providers including Pragmatic Play, Evolution, NetEnt, Microgaming, and Play'n GO. Games are optimized for mobile play with touch-friendly interfaces and fast loading times.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Slots</h3>
          <p className="text-muted-foreground mb-4">Browse thousands of slot titles from classic 3-reel games to feature-rich video slots with bonus rounds, free spins, and progressive jackpots. Popular categories include Megaways slots, cluster pays, and branded movie/TV show themes. Filter games by provider, volatility, or RTP to find your preferred titles quickly.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Table Games</h3>
          <p className="text-muted-foreground mb-4">Classic table games include multiple variants of blackjack, roulette (European, American, French), baccarat, poker, and craps. Each game features detailed rules and strategy guides within the app. Minimum and maximum bet limits cater to all budgets.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="text-xl font-semibold mt-8 mb-3">Progressive Jackpots</h3>
          <p className="text-muted-foreground mb-6">Jackpot pools that grow with every bet placed across the network. Some jackpots reach millions in prizes. Popular jackpot games are highlighted in a dedicated section with current prize pool displays updated in real-time.</p>
        </ScrollReveal>

        <GlowOnScroll>
          <div className="glass-card p-6 mb-8">
            <h3 className="font-semibold mb-3">Casino Game Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
              {["Video Slots", "Classic Slots", "Blackjack", "Roulette", "Baccarat", "Poker", "Jackpots", "New Releases"].map((cat) => (
                <div key={cat} className="flex items-center gap-2"><Star size={12} className="text-primary" />{cat}</div>
              ))}
            </div>
          </div>
        </GlowOnScroll>

        <ScrollReveal delay={0.1}>
          <CTAButton text="Install Casino App" />
        </ScrollReveal>
      </div>
    </section>

    {/* Live Casino */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary" size={28} /> Live Casino</h2>
          <p className="text-muted-foreground mb-4">The live casino brings the atmosphere of a real casino directly to your mobile device. Professional dealers host tables in real-time with HD video streaming, interactive chat, and multiple camera angles. Games are powered by leading live casino providers including Evolution Gaming, Pragmatic Play Live, and Ezugi.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-4">Popular live games include Lightning Roulette, Crazy Time, Dream Catcher, Blackjack VIP, Speed Baccarat, and dozens of game show-style formats. Tables run 24/7 with multilingual dealers and customizable betting limits.</p>
          <p className="text-muted-foreground mb-6">The streaming quality adapts to your connection speed, ensuring smooth gameplay even on mobile data. You can switch between portrait and landscape modes for optimal viewing. Multi-table play is supported on tablets.</p>
          <CTAButton text="Get the App" />
        </ScrollReveal>
      </div>
    </section>

    {/* 1xGames */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="right">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Dice1 className="text-primary" size={28} /> 1xGames — Exclusive Titles</h2>
          <p className="text-muted-foreground mb-4">1xGames is a proprietary section featuring exclusive crash games, instant win games, and unique multiplier experiences developed specifically for the platform. These games offer fast-paced entertainment with simple mechanics and potentially high rewards.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-4">Popular titles include Aviator (crash game), Lucky Wheel, Dice, Mines, Plinko, and dozens more. Games are provably fair with transparent algorithms, and most rounds complete within seconds — perfect for quick gaming sessions on mobile.</p>
          <p className="text-muted-foreground mb-6">The 1xGames section also features tournaments and leaderboard competitions where players can earn additional prizes.</p>
          <CTAButton text="Download & Play" />
        </ScrollReveal>
      </div>
    </section>

    <CenterBanner />

    {/* Bonuses */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Bonuses & Promotions</h2>
          <p className="text-muted-foreground mb-4">The app offers a comprehensive bonus system for both new and existing users. Welcome bonuses, reload bonuses, cashback offers, free spins, and loyalty programs are all accessible from the promotions section. Mobile-exclusive bonuses are available for users who <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">download the app</a>.</p>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card p-6 mb-6">
            <table className="w-full text-sm">
              <thead className="border-b border-border/50">
                <tr><th className="text-left py-2 font-semibold">Bonus Type</th><th className="text-left py-2 font-semibold">Details</th><th className="text-left py-2 font-semibold">Availability</th></tr>
              </thead>
              <tbody className="divide-y divide-border/30 text-muted-foreground">
                <tr><td className="py-3">Welcome Bonus</td><td className="py-3">First deposit match bonus</td><td className="py-3">New users</td></tr>
                <tr><td className="py-3">Free Spins</td><td className="py-3">Daily free spins on selected slots</td><td className="py-3">All users</td></tr>
                <tr><td className="py-3">Cashback</td><td className="py-3">Weekly cashback on losses</td><td className="py-3">Active users</td></tr>
                <tr><td className="py-3">Loyalty Program</td><td className="py-3">Points for every bet placed</td><td className="py-3">All users</td></tr>
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Payments */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><CreditCard className="text-primary" size={28} /> Payment Methods</h2>
          <p className="text-muted-foreground mb-4">The app supports over 50 payment methods including bank cards (Visa, Mastercard), e-wallets (Skrill, Neteller, ecoPayz), cryptocurrency (Bitcoin, Ethereum, Litecoin, USDT), bank transfers, mobile payments, and prepaid cards. Deposits are processed instantly in most cases.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground mb-4">Withdrawal processing times vary by method: e-wallets and crypto withdrawals are typically processed within 15 minutes, while bank card withdrawals may take 1-3 business days. The minimum deposit and withdrawal amounts are clearly displayed within the app for each payment method.</p>
          <p className="text-muted-foreground mb-6">All transactions are protected by SSL encryption and two-factor authentication for maximum security. Visit our <Link to="/login-guide" className="text-primary hover:underline">account security guide</Link> for more details on protecting your account.</p>
          <CTAButton text="Get Latest Version" />
        </ScrollReveal>
      </div>
    </section>

    {/* UX */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Mobile User Experience</h2>
          <p className="text-muted-foreground mb-4">The app is designed with mobile-first principles, offering a clean, intuitive interface that works seamlessly on all screen sizes. Key UX features include one-tap betting, swipe navigation, customizable quick-access menus, dark mode support, and push notifications for live scores and promotional alerts.</p>
          <p className="text-muted-foreground mb-6">Performance benchmarks show average page load times under 2 seconds on 4G connections, with the app consuming minimal battery and data. The offline mode allows users to browse upcoming events and saved bet slips without an active internet connection.</p>
          <div className="flex flex-wrap gap-4">
            <CTAButton text="Download Now" />
            <Link to="/download" className="inline-flex items-center gap-1 text-primary hover:underline font-medium py-3">
              Full installation guide <ChevronRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-transparent text-center">
        <GlowOnScroll>
          <div className="container-narrow">
            <h2 className="text-3xl font-bold mb-4">{hero.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{hero.ctaDesc}</p>
            <CTAButton text="Download Now" size="lg" showBonus />
          </div>
        </GlowOnScroll>
      </section>
    </Layout>
  );
};

export default Features;