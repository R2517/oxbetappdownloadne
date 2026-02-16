import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, Trophy, TrendingUp, Zap, Clock, Target, Shield, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero, getGeoSchema } from "@/lib/geo-content";
import { CenterBanner } from "@/components/AffiliateBanners";
import sportsHero from "@/assets/sports-betting-page-hero.jpg";

const sportsMarkets = [
  { sport: "Football / Soccer", markets: "1X2, Over/Under, BTTS, Handicap, Correct Score, First Goalscorer", events: "5,000+/day", liveStreaming: "Yes" },
  { sport: "Cricket", markets: "Match Winner, Top Batsman, Total Runs, Method of Dismissal", events: "200+/day", liveStreaming: "Yes" },
  { sport: "Tennis", markets: "Match Winner, Set Betting, Game Handicap, Total Games", events: "500+/day", liveStreaming: "Yes" },
  { sport: "Basketball", markets: "Moneyline, Spread, Total Points, Quarter Betting", events: "800+/day", liveStreaming: "Yes" },
  { sport: "eSports", markets: "Match Winner, Map Winner, Handicap, Total Rounds", events: "300+/day", liveStreaming: "Yes" },
  { sport: "Virtual Sports", markets: "Winner, Place, Each-Way, Forecast", events: "24/7", liveStreaming: "Simulated" },
];

const betTypes = [
  { type: "Single", desc: "One selection, straightforward bet on a single outcome", risk: "Low" },
  { type: "Accumulator", desc: "Multiple selections combined, all must win for payout", risk: "High" },
  { type: "System Bet", desc: "Multiple accumulators from selections, some can lose", risk: "Medium" },
  { type: "Live Bet", desc: "Placed during ongoing event with real-time odds", risk: "Variable" },
  { type: "Asian Handicap", desc: "Eliminates draw option, levels playing field", risk: "Medium" },
  { type: "Cashout Bet", desc: "Settle bet early for guaranteed profit or reduced loss", risk: "Low" },
];

const sportsFaq = [
  { q: "What sports can I bet on with the 1xBet app?", a: "Over 40 sports including football, cricket, tennis, basketball, ice hockey, MMA, boxing, esports (CS2, Dota 2, LoL), table tennis, volleyball, baseball, American football, and virtual sports. Thousands of markets are available daily." },
  { q: "How does live in-play betting work?", a: "Live betting lets you place wagers on events in progress. Odds update in real-time based on match developments. Combined with live streaming in the app, you can watch and bet simultaneously on thousands of events." },
  { q: "What is the cashout feature?", a: "Cashout lets you settle a bet before the event ends. Full cashout secures your current profit or minimizes loss. Partial cashout lets you take some profit while keeping part of the bet active. Auto-cashout triggers at a set profit level." },
  { q: "How are odds calculated?", a: "Odds reflect the probability of outcomes and include the bookmaker's margin. The 1xBet app offers competitive margins (2-5% on major events). You can switch between decimal, fractional, and American formats." },
  { q: "What is an accumulator bet?", a: "An accumulator (parlay) combines multiple selections into one bet. All selections must win for the bet to pay out. The odds multiply, creating higher potential returns but greater risk. The app supports up to 30+ selections per accumulator." },
  { q: "Can I watch live sports in the app?", a: "Yes, the 1xBet app includes live streaming for thousands of sports events. Watch football, tennis, basketball, esports, and more directly in the app while placing in-play bets." },
  { q: "What are the minimum and maximum bet amounts?", a: "Minimum bets start from $0.10 on most markets. Maximum bets vary by sport, event, and market type. Major football leagues typically have the highest limits. VIP users may have access to increased limits." },
  { q: "How do I read betting odds?", a: "Decimal odds show total return per $1 bet (e.g., 2.50 = $2.50 return). Fractional odds show profit (e.g., 3/2 = $3 profit per $2). American odds show profit on $100 (e.g., +150 = $150 profit on $100)." },
  { q: "Is cricket betting available?", a: "Yes, cricket is one of the most popular sports on the platform. Bet on IPL, ICC tournaments, county cricket, BBL, and more with markets including match winner, top batsman, total runs, and method of dismissal." },
  { q: "Can I bet on esports?", a: "Absolutely. The esports section covers CS2, Dota 2, League of Legends, Valorant, and more with comprehensive markets. Live streaming of major esports events is available directly in the betting app." },
];

const SportsBetting = () => {
  const { country } = useGeo();
  const hero = getPageHero("sportsBetting", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
          { "@type": "ListItem", position: 2, name: "Sports Betting", item: "https://1xbetapp.download/sports-betting" },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: sportsFaq.map(item => ({
          "@type": "Question", name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGeoSchema(country))}} />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Sports Betting</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-text">{hero.h1}</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Start Betting Now" size="lg" showBonus />
          </ScrollReveal>
        </div>
      </section>

      <CenterBanner />

    {/* Hero Image */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Complete Sports Betting Platform</h2>
            <p className="text-muted-foreground mb-4">
              The 1xBet sports betting app delivers one of the most comprehensive betting experiences in the industry. With over 40 sports disciplines, thousands of daily markets, and some of the lowest margins available, the platform caters to both casual bettors and professionals alike.
            </p>
            <p className="text-muted-foreground mb-4">
              Live in-play betting is a standout feature, with odds updating every second during matches. Combined with integrated live streaming for thousands of events, you can watch and bet simultaneously without leaving the app. The powerful cashout feature gives you complete control over your active bets.
            </p>
            <p className="text-muted-foreground mb-6">
              <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">Download the 1xBet mobile app</a> to access the full sports betting experience. For additional features like casino and live casino, visit our <Link to="/features" className="text-primary hover:underline">features overview</Link>.
            </p>
            <CTAButton text="Download Betting App" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="glass-card aspect-video overflow-hidden">
              <img src={sportsHero} alt="1xBet sports betting app showing football odds and live scores" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Football */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Trophy className="text-primary" size={28} /> Football Betting</h2>
          <p className="text-muted-foreground mb-4">Football is the most popular sport on the 1xBet betting platform, featuring coverage of leagues and tournaments from around the world. From the English Premier League, La Liga, and Champions League to smaller national leagues and youth tournaments — thousands of football markets are available daily.</p>
          <p className="text-muted-foreground mb-4">Market depth for major matches includes 500+ individual betting options: match result, over/under goals, both teams to score, correct score, first goalscorer, halftime/fulltime, corners, cards, and dozens more. Live betting on football is particularly strong with rapid odds updates and comprehensive in-play statistics.</p>
          <p className="text-muted-foreground mb-6">Football odds on the 1xBet app consistently rank among the most competitive in the industry, with margins as low as 2-3% on top-tier matches. Special offers like accumulator boosts and insurance bets are regularly available for football events.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Cricket, Tennis, Basketball */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Target className="text-primary" size={28} /> Cricket, Tennis & Basketball</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h3 className="text-xl font-semibold mt-6 mb-3">Cricket Betting</h3>
          <p className="text-muted-foreground mb-4">Cricket betting on the 1xBet app covers all major formats — Test matches, ODIs, and T20s. Bet on IPL, ICC World Cup, Ashes, BBL, CPL, and hundreds of domestic leagues. Markets include match winner, top batsman, top bowler, total runs, method of dismissal, and session betting. The platform is particularly popular for cricket betting in India, Bangladesh, and Pakistan.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-semibold mt-6 mb-3">Tennis Betting</h3>
          <p className="text-muted-foreground mb-4">Comprehensive tennis coverage includes ATP, WTA, Grand Slams, Challengers, and ITF events. Markets range from match winner and set betting to game handicaps, total games, and tiebreak betting. Live streaming is available for most tennis matches, making it ideal for in-play wagering.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h3 className="text-xl font-semibold mt-6 mb-3">Basketball Betting</h3>
          <p className="text-muted-foreground mb-6">NBA, EuroLeague, national leagues, and college basketball are all covered with deep market selections. Bet on moneyline, point spread, total points, quarter/half results, player props, and more. Live betting on basketball offers fast-paced action with odds updating every possession.</p>
          <CTAButton text="Get the Sports Betting App" />
        </ScrollReveal>
      </div>
    </section>

    {/* eSports */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="right">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Zap className="text-primary" size={28} /> eSports Betting</h2>
          <p className="text-muted-foreground mb-4">The esports section is one of the fastest-growing areas on the platform. Bet on professional CS2, Dota 2, League of Legends, Valorant, Call of Duty, Overwatch, and more. Major tournaments like The International, ESL One, and VCT are featured with extensive pre-match and live betting options.</p>
          <p className="text-muted-foreground mb-6">Esports markets include match winner, map winner, handicap, total maps/rounds, first blood, and team-specific statistics. Live streaming is available for most major esports events, and the app provides detailed team statistics and head-to-head records to inform your betting decisions.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Sports Markets Table */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Sports Markets Overview</h2>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Sport</th>
                  <th className="text-left p-4 font-semibold">Key Markets</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Daily Events</th>
                  <th className="text-left p-4 font-semibold">Live Stream</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {sportsMarkets.map((s) => (
                  <tr key={s.sport}>
                    <td className="p-4 font-medium text-foreground">{s.sport}</td>
                    <td className="p-4 text-xs md:text-sm">{s.markets}</td>
                    <td className="p-4 hidden md:table-cell">{s.events}</td>
                    <td className="p-4">{s.liveStreaming}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Bet Types Table */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Bet Types Explained</h2>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Bet Type</th>
                  <th className="text-left p-4 font-semibold">Description</th>
                  <th className="text-left p-4 font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {betTypes.map((b) => (
                  <tr key={b.type}>
                    <td className="p-4 font-medium text-foreground">{b.type}</td>
                    <td className="p-4">{b.desc}</td>
                    <td className="p-4">{b.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Live Betting & Cashout */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Clock className="text-primary" size={28} /> Live Betting & Cashout</h2>
          <p className="text-muted-foreground mb-4">Live in-play betting is one of the most exciting features of the sports betting app. Odds update in real-time as events unfold, offering dynamic markets that respond to every goal, point, and play. The integrated match tracker provides visual representations of game flow, statistics, and key moments.</p>
          <p className="text-muted-foreground mb-4">The cashout feature gives you full control over your active bets. Secure a profit early if your bet is winning, or cut your losses if the match turns against you. Full and partial cashout options are available, and auto-cashout can be configured to trigger at specific profit thresholds. The cashout value updates in real-time alongside the live odds.</p>
          <p className="text-muted-foreground mb-6">With live streaming available for thousands of events across football, tennis, basketball, and esports, the 1xBet app creates the most immersive mobile sports betting experience available.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <CTAButton text="Download Betting App" />
            <Link to="/download" className="inline-flex items-center gap-1 text-primary hover:underline font-medium py-3">
              Installation guide <ChevronRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CenterBanner />

    {/* FAQ */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 text-center">Sports Betting FAQ</h2>
        </ScrollReveal>
        <Accordion type="multiple" className="space-y-2">
          {sportsFaq.map((item, i) => (
            <AccordionItem key={i} value={`sports-faq-${i}`} className="glass-card px-5 border-none">
              <AccordionTrigger className="text-left font-medium hover:text-primary py-4">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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

export default SportsBetting;
