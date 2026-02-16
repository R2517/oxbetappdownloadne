import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, Users, Monitor, Zap, Star, Shield, Clock } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero, getGeoSchema } from "@/lib/geo-content";
import liveCasinoHero from "@/assets/live-casino-hero.jpg";

const liveGames = [
  { game: "Lightning Roulette", provider: "Evolution", type: "Roulette", feature: "Random multipliers up to 500x" },
  { game: "Crazy Time", provider: "Evolution", type: "Game Show", feature: "4 bonus rounds, wheel of fortune" },
  { game: "Blackjack VIP", provider: "Evolution", type: "Blackjack", feature: "High-limit private tables" },
  { game: "Speed Baccarat", provider: "Evolution", type: "Baccarat", feature: "25-second rounds" },
  { game: "Dream Catcher", provider: "Evolution", type: "Game Show", feature: "Money wheel with multipliers" },
  { game: "Mega Ball", provider: "Evolution", type: "Lottery", feature: "Bingo-style with multipliers" },
  { game: "Auto Roulette", provider: "Pragmatic Play", type: "Roulette", feature: "Automated, fast-paced rounds" },
  { game: "Sweet Bonanza CandyLand", provider: "Pragmatic Play", type: "Game Show", feature: "Slot-themed live game" },
];

const comparisonData = [
  { feature: "Dealer Interaction", live: "Real-time chat with professional dealers", regular: "No human interaction" },
  { feature: "Game Speed", live: "Real-time (30-60 sec/round)", regular: "Instant results" },
  { feature: "Social Experience", live: "Chat with other players", regular: "Solo play" },
  { feature: "Streaming Quality", live: "HD/4K video streaming", regular: "Animated graphics" },
  { feature: "Availability", live: "24/7 with scheduled tables", regular: "Always available" },
  { feature: "Bet Limits", live: "$0.50 - $500,000+", regular: "$0.10 - $10,000" },
];

const liveCasinoFaq = [
  { q: "What is a live casino?", a: "A live casino connects you to real dealers via HD video streaming. You play table games in real-time with professional dealers, just like in a physical casino, but from your mobile device." },
  { q: "What live casino games are available?", a: "The 1xBet live casino offers roulette, blackjack, baccarat, poker, game shows (Crazy Time, Dream Catcher, Mega Ball), and specialty games. Over 200 live tables are available 24/7." },
  { q: "Can I interact with the live dealers?", a: "Yes, every live table includes a real-time chat function where you can communicate with the dealer and other players at the table." },
  { q: "What internet speed do I need for live casino?", a: "A stable connection of 5 Mbps or higher is recommended for smooth HD streaming. The app automatically adjusts streaming quality based on your connection speed." },
  { q: "Are live casino games fair?", a: "Absolutely. Live games use real physical equipment (cards, wheels) operated by trained dealers. Games are monitored by pit bosses and recorded for transparency." },
  { q: "Can I play live casino on mobile?", a: "Yes, the 1xBet app is fully optimized for live casino on mobile. Switch between portrait and landscape modes for optimal viewing. Download the app to start playing." },
  { q: "What are live casino game shows?", a: "Game shows are innovative live games combining elements of TV shows with casino gameplay. Popular titles include Crazy Time, Dream Catcher, and Mega Ball, featuring bonus rounds and multipliers." },
  { q: "Is there a minimum bet for live casino?", a: "Minimum bets vary by table and game type. Standard tables start from $0.50, while VIP/high-roller tables may have minimums of $50-$500." },
  { q: "Can I play multiple live tables at once?", a: "Yes, multi-table play is supported on tablets and desktop. You can play up to 4 live tables simultaneously, managing each from a split-screen interface." },
  { q: "How do live casino bonuses work?", a: "Live casino bonuses include welcome offers, cashback on losses, and VIP loyalty rewards. Note that live casino games often have different wagering contribution rates than slots." },
];

const LiveCasino = () => {
  const { country } = useGeo();
  const hero = getPageHero("liveCasino", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
          { "@type": "ListItem", position: 2, name: "Live Casino", item: "https://1xbetapp.download/live-casino" },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: liveCasinoFaq.map(item => ({
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
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Live Casino</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-text">{hero.h1}</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Play Live Casino" size="lg" showBonus />
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image + Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Immersive Live Dealer Experience</h2>
              <p className="text-muted-foreground mb-4">
                The 1xBet live casino connects you directly to professional dealers via high-definition video streaming. Every card dealt, every spin of the wheel happens in real-time — creating an authentic casino atmosphere that no RNG game can replicate.
              </p>
              <p className="text-muted-foreground mb-4">
                With over 200 live tables running 24/7, powered by industry leaders like Evolution Gaming, Pragmatic Play Live, and Ezugi, you'll always find a seat at your favorite game.
              </p>
              <p className="text-muted-foreground mb-6">
                The <Link to="/download" className="text-primary hover:underline">1xBet mobile app</Link> delivers the full live casino experience with adaptive streaming that works flawlessly on both WiFi and mobile data connections.
              </p>
              <CTAButton text="Get the Live Casino App" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass-card aspect-video overflow-hidden">
                <img src={liveCasinoHero} alt="Live casino dealer at blackjack table with HD streaming on mobile" className="w-full h-full object-cover rounded-xl" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live Game Types */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Users className="text-primary" size={28} /> Live Casino Game Types</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h3 className="text-xl font-semibold mt-6 mb-3">Live Roulette</h3>
            <p className="text-muted-foreground mb-4">Choose from dozens of roulette tables including European, American, and French variants. Specialty tables like Lightning Roulette add random multipliers up to 500x on straight-up bets.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="text-xl font-semibold mt-6 mb-3">Live Blackjack</h3>
            <p className="text-muted-foreground mb-4">Multiple blackjack tables cater to all budgets, from low-stakes public tables to exclusive VIP rooms with limits up to $500,000 per hand.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-semibold mt-6 mb-3">Live Baccarat</h3>
            <p className="text-muted-foreground mb-4">Experience the elegance of baccarat with professional dealers. Speed Baccarat completes rounds in 25 seconds, while Lightning Baccarat introduces random multipliers.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h3 className="text-xl font-semibold mt-6 mb-3">Live Game Shows</h3>
            <p className="text-muted-foreground mb-6">Crazy Time features four bonus rounds with massive multiplier potential. Dream Catcher is a simple money wheel game perfect for beginners. Mega Ball combines bingo with live lottery draws.</p>
            <CTAButton text="Download & Play Live" />
          </ScrollReveal>
        </div>
      </section>

      {/* Popular Live Games Table */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Most Popular Live Casino Games</h2>
          </ScrollReveal>
          <GlowOnScroll>
            <div className="glass-card overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="text-left p-4 font-semibold">Game</th>
                    <th className="text-left p-4 font-semibold">Provider</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Type</th>
                    <th className="text-left p-4 font-semibold">Key Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-muted-foreground">
                  {liveGames.map((g) => (
                    <tr key={g.game}>
                      <td className="p-4 font-medium text-foreground">{g.game}</td>
                      <td className="p-4">{g.provider}</td>
                      <td className="p-4 hidden md:table-cell">{g.type}</td>
                      <td className="p-4 text-xs md:text-sm">{g.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowOnScroll>
        </div>
      </section>

      {/* Live vs Regular Comparison */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Live Casino vs Regular Casino</h2>
            <p className="text-muted-foreground mb-6">Understanding the differences helps you choose the right experience. Both options are available in the <a href="#AFFILIATE_LINK_PLACEHOLDER" className="text-primary hover:underline">1xBet app</a>.</p>
          </ScrollReveal>
          <GlowOnScroll>
            <div className="glass-card overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">Live Casino</th>
                    <th className="text-left p-4 font-semibold">Regular Casino</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-muted-foreground">
                  {comparisonData.map((row) => (
                    <tr key={row.feature}>
                      <td className="p-4 font-medium text-foreground">{row.feature}</td>
                      <td className="p-4">{row.live}</td>
                      <td className="p-4">{row.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowOnScroll>
        </div>
      </section>

      {/* Streaming Quality */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Monitor className="text-primary" size={28} /> Streaming Quality & Performance</h2>
            <p className="text-muted-foreground mb-4">The live casino streams in HD quality with adaptive bitrate technology. The app automatically adjusts video quality based on your connection speed.</p>
            <p className="text-muted-foreground mb-6">On tablets, the landscape mode provides the most immersive experience. Portrait mode on smartphones is optimized for one-handed play.</p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Low Latency", desc: "Sub-second delay for real-time interaction with dealers and game events." },
              { icon: Shield, title: "Secure Streams", desc: "Encrypted video feeds protect your gaming session from interference." },
              { icon: Clock, title: "24/7 Availability", desc: "Tables run around the clock with multilingual dealers from global studios." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card p-6 text-center h-full">
                  <item.icon size={28} className="text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8 text-center">Live Casino FAQ</h2>
          </ScrollReveal>
          <Accordion type="multiple" className="space-y-2">
            {liveCasinoFaq.map((item, i) => (
              <AccordionItem key={i} value={`live-faq-${i}`} className="glass-card px-5 border-none">
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

export default LiveCasino;
