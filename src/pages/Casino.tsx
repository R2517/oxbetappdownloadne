import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, Gamepad2, Star, Trophy, Zap, Crown, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero, getGeoSchema } from "@/lib/geo-content";
import { CenterBanner } from "@/components/AffiliateBanners";
import casinoHero from "@/assets/casino-page-hero.jpg";

const gameCategories = [
  { category: "Video Slots", examples: "Book of Dead, Sweet Bonanza, Gates of Olympus, Starburst, Big Bass Bonanza, Wolf Gold", rtp: "94-97%", volatility: "Low-High" },
  { category: "Classic Slots", examples: "Mega Joker, Jackpot 6000, Fire Joker, Fruit Shop, Triple Diamond", rtp: "95-99%", volatility: "Low-Medium" },
  { category: "Megaways Slots", examples: "Bonanza Megaways, Gonzo's Quest Megaways, Big Time Gaming titles", rtp: "95-97%", volatility: "High" },
  { category: "Jackpot Slots", examples: "Mega Moolah, Divine Fortune, Hall of Gods, Mega Fortune", rtp: "88-96%", volatility: "High" },
  { category: "Table Games", examples: "European Roulette, Blackjack Classic, Baccarat Pro, Casino Hold'em", rtp: "97-99.5%", volatility: "Low-Medium" },
  { category: "Video Poker", examples: "Jacks or Better, Deuces Wild, Joker Poker, All American Poker", rtp: "97-99.5%", volatility: "Low" },
];

const providers = ["Pragmatic Play", "NetEnt", "Microgaming", "Play'n GO", "Evolution", "Red Tiger", "Yggdrasil", "Hacksaw Gaming", "Push Gaming", "Nolimit City", "Betsoft", "iSoftBet"];

const casinoFaq = [
  { q: "How many casino games are available on the 1xBet app?", a: "The 1xBet casino features over 5,000 games from 100+ providers, including slots, table games, video poker, and progressive jackpots. New titles are added weekly." },
  { q: "Can I play casino games for free?", a: "Yes, most slot and table games offer a demo mode that lets you play with virtual credits. This is great for learning game mechanics before wagering real money." },
  { q: "What is RTP and why does it matter?", a: "RTP (Return to Player) is the theoretical percentage of wagered money a game returns over time. Higher RTP means better long-term value. Look for games with 96%+ RTP." },
  { q: "Are the casino games fair?", a: "Yes, all games use certified Random Number Generators (RNG) audited by independent testing labs. Results are completely random and fair." },
  { q: "What are progressive jackpots?", a: "Progressive jackpots grow with every bet placed across the network until someone wins. Some pools reach millions. Popular titles include Mega Moolah and Divine Fortune." },
  { q: "Can I play casino games on mobile?", a: "Absolutely. All casino games are optimized for mobile play with touch-friendly interfaces. Download the 1xBet app to enjoy the full casino experience on your device." },
  { q: "What is the minimum bet for casino games?", a: "Minimum bets vary by game but typically start from $0.10 for slots and $0.50 for table games. VIP tables offer higher limits for premium players." },
  { q: "How do casino bonuses work?", a: "Casino bonuses include welcome offers, free spins, cashback, and reload bonuses. Each bonus has specific wagering requirements that must be met before withdrawal." },
  { q: "Which casino games have the best odds?", a: "Blackjack (99.5% RTP), European Roulette (97.3%), Baccarat (98.9%), and Video Poker (97-99.5%) offer the best theoretical returns among casino games." },
  { q: "Can I set deposit limits for casino play?", a: "Yes, the app includes responsible gaming tools like deposit limits, loss limits, session timers, and self-exclusion options to help manage your gaming." },
];

const Casino = () => {
  const { country } = useGeo();
  const hero = getPageHero("casino", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
          { "@type": "ListItem", position: 2, name: "Casino", item: "https://1xbetapp.download/casino" },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: casinoFaq.map(item => ({
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
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Casino</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-text">{hero.h1}</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Play Casino Now" size="lg" showBonus />
          </ScrollReveal>
        </div>
      </section>

      <CenterBanner />

      {/* Hero Image + Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="glass-card aspect-video overflow-hidden">
                <img src={casinoHero} alt="1xBet casino app interface with roulette and slot machines" className="w-full h-full object-cover rounded-xl" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold mb-4 text-foreground">World-Class Casino Experience</h2>
              <p className="text-muted-foreground mb-4">
                The 1xBet casino delivers one of the most comprehensive online casino experiences available. With over 5,000 games from 100+ leading providers, the platform covers every category — from classic fruit machines to cutting-edge video slots with Megaways mechanics, cluster pays, and cascading reels.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you prefer spinning slots, strategizing at the blackjack table, or chasing life-changing progressive jackpots, the casino section has it all. Every game is optimized for the <Link to="/download" className="text-primary hover:underline">1xBet mobile app</Link>, ensuring seamless gameplay on any device.
              </p>
              <CTAButton text="Download Casino App" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Slot Games */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Gamepad2 className="text-primary" size={28} /> Slot Games Collection</h2>
            <p className="text-muted-foreground mb-4">The slot library is the heart of the 1xBet casino, featuring thousands of titles across every imaginable theme and mechanic. From ancient Egyptian adventures to space-themed thrillers, from classic 3-reel fruit machines to innovative 6-reel Megaways titles with 117,649 ways to win — the variety is unmatched.</p>
            <p className="text-muted-foreground mb-4">Popular slot titles include Book of Dead, Sweet Bonanza, Gates of Olympus, Starburst, Big Bass Bonanza, and Wolf Gold. New releases are added every week, keeping the library fresh with the latest innovations from top-tier providers. Filter by provider, volatility, RTP, or theme to find your perfect game.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="text-xl font-semibold mt-8 mb-3">Slot Features & Mechanics</h3>
            <p className="text-muted-foreground mb-6">Modern video slots offer exciting features including free spins, bonus buy options, cascading wins, expanding wilds, multiplier trails, and gamble features. High-volatility slots deliver larger but less frequent wins, while low-volatility options provide steady, smaller payouts — choose based on your playing style and bankroll strategy.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Game Categories Table */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Casino Game Categories Comparison</h2>
          </ScrollReveal>
          <GlowOnScroll>
            <div className="glass-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="text-left p-4 font-semibold">Category</th>
                    <th className="text-left p-4 font-semibold">Popular Games</th>
                    <th className="text-left p-4 font-semibold">RTP Range</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Volatility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-muted-foreground">
                  {gameCategories.map((cat) => (
                    <tr key={cat.category}>
                      <td className="p-4 font-medium text-foreground">{cat.category}</td>
                      <td className="p-4 text-xs md:text-sm">{cat.examples}</td>
                      <td className="p-4">{cat.rtp}</td>
                      <td className="p-4 hidden md:table-cell">{cat.volatility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlowOnScroll>
        </div>
      </section>

      {/* Table Games */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal direction="right">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Crown className="text-primary" size={28} /> Table Games & Card Games</h2>
            <p className="text-muted-foreground mb-4">For players who prefer strategy and skill-based gaming, the table games section offers extensive coverage. Multiple variants of blackjack (Classic, European, Atlantic City, Vegas Strip), roulette (European, American, French), baccarat, poker (Casino Hold'em, Three Card, Caribbean Stud), and craps are available with varying bet limits.</p>
            <p className="text-muted-foreground mb-4">Each table game includes detailed rules, strategy guides, and statistics. Minimum bets start as low as $0.50, making the games accessible to all budgets. VIP tables with higher limits are available for premium players seeking a more exclusive experience.</p>
            <p className="text-muted-foreground mb-6">The mobile interface is specifically designed for table games, with intuitive chip placement, clear card displays, and smooth animations that replicate the authentic casino atmosphere on your smartphone or tablet.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <CTAButton text="Install & Play Table Games" />
          </ScrollReveal>
        </div>
      </section>

      {/* Jackpots */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Trophy className="text-primary" size={28} /> Progressive Jackpots</h2>
            <p className="text-muted-foreground mb-4">Progressive jackpots represent the ultimate casino thrill, with prize pools that grow continuously until someone hits the winning combination. The 1xBet casino hosts dozens of progressive jackpot games from leading providers, with some pools reaching into the millions.</p>
            <p className="text-muted-foreground mb-4">Top jackpot titles include Mega Moolah (known for record-breaking payouts), Divine Fortune, Hall of Gods, and Mega Fortune. Each game displays the current jackpot amount in real-time, and you can sort games by jackpot size to find the largest prizes available right now.</p>
            <p className="text-muted-foreground mb-6">While jackpot slots typically have lower base-game RTP compared to regular slots, the potential for life-changing wins makes them among the most popular games on the platform. Some titles offer multiple jackpot tiers (Mini, Minor, Major, Grand) for more frequent wins.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Providers */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Sparkles className="text-primary" size={28} /> Top Casino Game Providers</h2>
            <p className="text-muted-foreground mb-6">Quality matters, and the 1xBet casino partners exclusively with licensed, audited game providers. Browse games from over 100 studios, each bringing unique gameplay mechanics, stunning graphics, and innovative features.</p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {providers.map((p) => (
              <StaggerItem key={p}>
                <div className="glass-card p-4 text-center text-sm font-medium text-muted-foreground">
                  <Star size={14} className="text-primary inline mr-2" />{p}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Why Play at 1xBet Casino?</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Zap, title: "Fast Loading", desc: "Casino games load instantly on the mobile app with optimized performance for all devices." },
              { icon: Star, title: "Highest RTP Games", desc: "Curated selection of high-RTP games giving you the best theoretical returns in the industry." },
              { icon: Trophy, title: "Exclusive Bonuses", desc: "Welcome bonus, free spins, cashback, and loyalty rewards specifically for casino players." },
              { icon: Gamepad2, title: "5,000+ Games", desc: "The largest mobile casino library with new titles added weekly from 100+ premium providers." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card p-6 h-full">
                  <item.icon size={28} className="text-primary mb-3" />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground">
              Ready to explore the full casino? <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">Download the 1xBet app</a> and start playing today. For more details on all platform features, visit our <Link to="/features" className="text-primary hover:underline">features page</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CenterBanner />

      {/* FAQ */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8 text-center">Casino FAQ</h2>
          </ScrollReveal>
          <Accordion type="multiple" className="space-y-2">
            {casinoFaq.map((item, i) => (
              <AccordionItem key={i} value={`casino-faq-${i}`} className="glass-card px-5 border-none">
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
            <CTAButton text="Download Casino App" size="lg" showBonus />
          </div>
        </GlowOnScroll>
      </section>
    </Layout>
  );
};

export default Casino;
