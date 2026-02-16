import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, Gamepad2, Zap, Star, TrendingUp, Sparkles, Target } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero, getGeoSchema } from "@/lib/geo-content";
import slotsHero from "@/assets/slots-games-hero.jpg";

const slotCategories = [
  { category: "Crash Games", games: "Aviator, JetX, Spaceman, Cash or Crash, Balloon", mechanic: "Rising multiplier, cash out before crash", popularity: "★★★★★" },
  { category: "Instant Win", games: "Mines, Plinko, Dice, Keno, Hi-Lo", mechanic: "Quick result, simple decisions", popularity: "★★★★☆" },
  { category: "Megaways Slots", games: "Bonanza, Gonzo's Quest MW, Sugar Rush", mechanic: "Up to 117,649 ways to win", popularity: "★★★★★" },
  { category: "Bonus Buy Slots", games: "Sweet Bonanza, Money Train 3, Mental", mechanic: "Purchase bonus rounds directly", popularity: "★★★★☆" },
  { category: "Cluster Pay", games: "Reactoonz, Jammin' Jars, Aloha!", mechanic: "Cluster matching instead of paylines", popularity: "★★★★☆" },
  { category: "Classic Slots", games: "Fire Joker, Mega Joker, Jackpot 6000", mechanic: "3-reel, simple gameplay", popularity: "★★★☆☆" },
];

const popularGames = [
  { name: "Aviator", type: "Crash", provider: "Spribe", feature: "Real-time multiplier, social betting", rtp: "97%" },
  { name: "Sweet Bonanza", type: "Slot", provider: "Pragmatic Play", feature: "Tumble wins, multiplier bombs", rtp: "96.5%" },
  { name: "Gates of Olympus", type: "Slot", provider: "Pragmatic Play", feature: "Anywhere pays, Zeus multipliers", rtp: "96.5%" },
  { name: "Book of Dead", type: "Slot", provider: "Play'n GO", feature: "Expanding symbols, free spins", rtp: "96.2%" },
  { name: "Big Bass Bonanza", type: "Slot", provider: "Pragmatic Play", feature: "Fisherman free spins, money symbols", rtp: "96.7%" },
  { name: "Mines", type: "Instant", provider: "Spribe", feature: "Minesweeper-style, adjustable risk", rtp: "97%" },
  { name: "Plinko", type: "Instant", provider: "Spribe", feature: "Ball drop, multiplier zones", rtp: "97%" },
  { name: "Wolf Gold", type: "Slot", provider: "Pragmatic Play", feature: "3 jackpot tiers, money respin", rtp: "96%" },
];

const slotsFaq = [
  { q: "What are crash games and how do they work?", a: "Crash games feature a rising multiplier that can 'crash' at any moment. You place a bet and cash out before the crash to win. The longer you wait, the higher the multiplier — but if you don't cash out in time, you lose. Aviator is the most popular crash game." },
  { q: "What is Aviator and why is it so popular?", a: "Aviator by Spribe is a social crash game where a plane flies higher with an increasing multiplier. Players cash out before it flies away. Its simplicity, social features, and fast rounds make it the most played game on the platform." },
  { q: "Can I try games for free before betting?", a: "Yes, most slot and instant games offer a free demo mode. Crash games may require a minimum bet but typically start from $0.10. This lets you learn mechanics risk-free." },
  { q: "What are Megaways slots?", a: "Megaways is a game mechanic by Big Time Gaming offering up to 117,649 ways to win per spin. Each reel shows a random number of symbols (2-7), creating dynamic winning potential. Popular titles include Bonanza and Gonzo's Quest Megaways." },
  { q: "What is the bonus buy feature?", a: "Bonus buy lets you purchase direct access to a game's bonus round (usually free spins) for a fixed price, typically 100x your bet. This skips the base game grind and takes you straight to the most exciting feature." },
  { q: "Are the games provably fair?", a: "Yes, crash games and instant games use provably fair algorithms where each result can be independently verified. Slot games use certified RNG (Random Number Generator) technology audited by independent testing labs." },
  { q: "What's the best strategy for crash games?", a: "There's no guaranteed strategy since outcomes are random. Common approaches include setting auto-cashout at low multipliers (1.5-2x) for consistent small wins, or targeting higher multipliers less frequently. Always set a budget and stick to it." },
  { q: "How do I find high-RTP games?", a: "Use the game filters in the 1xBet app to sort by RTP percentage. Games above 96% are considered high-RTP. The app displays RTP information in each game's info section." },
  { q: "Can I play slots and games on mobile?", a: "Absolutely. All games are optimized for mobile play with touch-friendly controls. Download the 1xBet app for the best gaming experience on Android and iOS devices." },
  { q: "What are multiplier trails?", a: "Multiplier trails are progressive multipliers that increase with consecutive wins or during bonus rounds. They can dramatically boost payouts. Games like Gates of Olympus and Sweet Bonanza feature this mechanic." },
];

const SlotsGames = () => {
  const { country } = useGeo();
  const hero = getPageHero("slotsGames", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
          { "@type": "ListItem", position: 2, name: "Slots & Games", item: "https://1xbetapp.download/slots-games" },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: slotsFaq.map(item => ({
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
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Slots & Games</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-text">{hero.h1}</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Play Games Now" size="lg" showBonus />
          </ScrollReveal>
        </div>
      </section>

    {/* Hero Image */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="glass-card aspect-video overflow-hidden">
              <img src={slotsHero} alt="Slot machine reels and crash game interface on mobile device" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Endless Gaming Entertainment</h2>
            <p className="text-muted-foreground mb-4">
              The games section on the 1xBet app goes far beyond traditional slots. Crash games, instant win titles, and exclusive 1xGames bring fast-paced entertainment with simple mechanics and potentially massive multipliers. Whether you have 5 minutes or 5 hours, there's always a game that fits your mood and budget.
            </p>
            <p className="text-muted-foreground mb-6">
              Every game is available on mobile with optimized touch controls, crisp graphics, and smooth performance. Browse by category, provider, or popularity to find your next favorite title. Ready to explore? <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">Download the app</a> and start playing immediately.
            </p>
            <CTAButton text="Download & Play" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Crash Games */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><TrendingUp className="text-primary" size={28} /> Crash Games — Aviator & More</h2>
          <p className="text-muted-foreground mb-4">Crash games have become the fastest-growing category in online gaming, and the 1xBet app features the best selection available. The concept is simple: a multiplier rises from 1x and can crash at any random moment. Your goal is to cash out before the crash to lock in your winnings at the current multiplier.</p>
          <p className="text-muted-foreground mb-4">Aviator by Spribe is the undisputed king of crash games, featuring a social element where you can see other players' bets and cashouts in real-time. Other popular crash titles include JetX, Spaceman, Cash or Crash (by Evolution), and Balloon. Each game adds unique visual themes and mechanics to the core crash concept.</p>
          <p className="text-muted-foreground mb-6">Crash games offer some of the highest RTP rates (97%+) and the fastest gameplay cycles on the platform. Rounds typically complete in 10-30 seconds, making them perfect for quick mobile gaming sessions.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Game Categories Table */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Game Categories & Mechanics</h2>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Popular Games</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Mechanic</th>
                  <th className="text-left p-4 font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {slotCategories.map((cat) => (
                  <tr key={cat.category}>
                    <td className="p-4 font-medium text-foreground">{cat.category}</td>
                    <td className="p-4 text-xs md:text-sm">{cat.games}</td>
                    <td className="p-4 hidden md:table-cell text-xs">{cat.mechanic}</td>
                    <td className="p-4">{cat.popularity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Popular Games Table */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Top Games by Popularity</h2>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Game</th>
                  <th className="text-left p-4 font-semibold">Type</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Provider</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Key Feature</th>
                  <th className="text-left p-4 font-semibold">RTP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {popularGames.map((g) => (
                  <tr key={g.name}>
                    <td className="p-4 font-medium text-foreground">{g.name}</td>
                    <td className="p-4">{g.type}</td>
                    <td className="p-4 hidden md:table-cell">{g.provider}</td>
                    <td className="p-4 hidden md:table-cell text-xs">{g.feature}</td>
                    <td className="p-4">{g.rtp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Instant Games & 1xGames */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Sparkles className="text-primary" size={28} /> Instant Games & 1xGames</h2>
          <p className="text-muted-foreground mb-4">Beyond traditional slots, the 1xBet app features a massive collection of instant-result games perfect for quick entertainment. Mines challenges you to reveal safe tiles while avoiding bombs. Plinko drops a ball through pegs to land on multiplier zones. Dice lets you predict high or low outcomes with adjustable risk levels.</p>
          <p className="text-muted-foreground mb-4">The exclusive 1xGames section includes proprietary titles developed specifically for the platform. Lucky Wheel, Tower, Thimbles, and dozens of other unique games offer provably fair outcomes and instant results. Many include tournament leaderboards where top players earn additional prizes.</p>
          <p className="text-muted-foreground mb-6">These games are designed for mobile-first gameplay with simple tap controls, minimal loading times, and rounds that complete in seconds. They're the perfect choice for gaming on the go.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <CTAButton text="Download & Play" />
            <Link to="/casino" className="inline-flex items-center gap-1 text-primary hover:underline font-medium py-3">
              Explore casino games <ChevronRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Strategies */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Target className="text-primary" size={28} /> Tips & Strategies</h2>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Bankroll Management", desc: "Set a budget before playing and stick to it. Divide your bankroll into session amounts and never chase losses." },
            { title: "Understand Volatility", desc: "High volatility = bigger but rarer wins. Low volatility = smaller, more frequent wins. Choose based on your style and budget." },
            { title: "Check RTP Before Playing", desc: "Higher RTP games give better theoretical returns. Aim for 96%+ RTP on slots and 97%+ on crash/instant games." },
            { title: "Use Demo Mode", desc: "Try games in free mode first to understand mechanics, bonus features, and volatility before wagering real money." },
          ].map((tip) => (
            <StaggerItem key={tip.title}>
              <div className="glass-card p-6 h-full">
                <h3 className="font-semibold mb-2 text-foreground">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 text-center">Slots & Games FAQ</h2>
        </ScrollReveal>
        <Accordion type="multiple" className="space-y-2">
          {slotsFaq.map((item, i) => (
            <AccordionItem key={i} value={`slots-faq-${i}`} className="glass-card px-5 border-none">
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
            <CTAButton text="Download App" size="lg" showBonus />
          </div>
        </GlowOnScroll>
      </section>
    </Layout>
  );
};

export default SlotsGames;
