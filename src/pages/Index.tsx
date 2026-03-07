import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { Shield, Zap, RefreshCw, Smartphone, Star, Trophy, Gamepad2, CreditCard, Users, TrendingUp, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useGeo } from "@/contexts/GeoContext";
import { getGeoContent, getPageHero, getGeoSchema, getRotatingHook, getGeoMeta, getOrganizationSchema, getWebSiteSchema } from "@/lib/geo-content";
import { CenterBanner } from "@/components/AffiliateBanners";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import sportsBettingHero from "@/assets/sports-betting-hero.jpg";
import casinoHero from "@/assets/casino-hero.jpg";
import HeroParticles from "@/components/HeroParticles";


const trustBadges = [
{ icon: Shield, label: "Secure & Safe" },
{ icon: Zap, label: "Lightning Fast" },
{ icon: RefreshCw, label: "Updated 2026" },
{ icon: Smartphone, label: "Mobile Optimized" }];


const features = [
{ icon: Trophy, title: "Sports Betting", desc: "Access thousands of live and pre-match events across 40+ sports with competitive odds." },
{ icon: Gamepad2, title: "Casino Games", desc: "Over 5,000 slot machines, table games, and progressive jackpots from top providers." },
{ icon: Users, title: "Live Casino", desc: "Real-time interaction with professional dealers in HD streaming quality." },
{ icon: Star, title: "1xGames", desc: "Exclusive crash games, instant wins, and unique multiplier experiences." },
{ icon: CreditCard, title: "Fast Payments", desc: "Instant deposits and quick withdrawals via 50+ payment methods worldwide." },
{ icon: TrendingUp, title: "Live Streaming", desc: "Watch live sports events directly in the app while placing in-play bets." }];


const installSteps = [
{ step: "1", title: "Visit the Official Source", desc: "Navigate to the download page to get the latest verified APK or App Store link." },
{ step: "2", title: "Download the App", desc: "Select your platform — Android APK or iOS — and start the download process." },
{ step: "3", title: "Install & Launch", desc: "Allow installation from unknown sources (Android), install, and open the app." },
{ step: "4", title: "Register or Log In", desc: "Create a new account or sign in to access the full range of features." }];


const faqPreview = [
{ q: "Is the 1xBet app free to download?", a: "Yes, the mobile application is completely free to download for both Android and iOS devices." },
{ q: "What are the system requirements?", a: "Android 5.0+ with 100MB free space, or iOS 12.0+ for iPhone and iPad." },
{ q: "How do I update the app?", a: "Android users can download the latest APK version. iOS users receive updates through the App Store." }];


const Index = () => {
  const { country } = useGeo();
  const geo = getGeoContent(country);
  const hero = getPageHero("home", country);
  const hook = getRotatingHook(country);
  const meta = getGeoMeta(country);

  // Dynamic meta tags
  useEffect(() => {
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", meta.title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", meta.description);
  }, [meta]);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGeoSchema(country)) }} />

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated gradient background — blue/cyan brand palette */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 20% 40%, hsl(210 80% 50% / 0.35), transparent 45%), radial-gradient(ellipse at 75% 25%, hsl(195 100% 50% / 0.3), transparent 45%), radial-gradient(ellipse at 50% 85%, hsl(210 90% 45% / 0.2), transparent 50%)"
          }}
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        
        {/* Floating orbs — faster, blue-cyan */}
        <motion.div
          className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px] will-change-transform"
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 25, 0], scale: [1, 1.25, 0.85, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full blur-[120px] will-change-transform"
          style={{ background: "hsl(195 100% 50% / 0.12)" }}
          animate={{ x: [0, -60, 40, 0], y: [0, 50, -25, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        
        <motion.div
          className="absolute top-[35%] right-[25%] w-[220px] h-[220px] rounded-full bg-ring/12 blur-[90px] will-change-transform"
          animate={{ x: [0, 35, -45, 0], y: [0, -55, 15, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        
        {/* Particles */}
        <HeroParticles />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        
        <div className="container-narrow relative">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
                
                <span className="gold-text">{hero.h1}</span>
                <br />
                <span className="text-foreground text-2xl md:text-3xl">{hero.h1Line2}</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-center font-extralight py-[8px] px-[11px] mx-[240px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                
                {hero.desc}
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                
                <CTAButton text="Download App Now" size="lg" showBonus />
                <CTAButton text="Get Bonus & Start Playing" variant="outline" size="lg" />
              </motion.div>
              <motion.div
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                
                {trustBadges.map((badge) =>
                <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <badge.icon size={16} className="text-primary" />
                    <span>{badge.label}</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CenterBanner />

      {/* App Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <GlowOnScroll>
            <div className="glass-card p-8 md:p-12">
               <h2 className="text-3xl font-bold mb-4 text-foreground">{geo.overviewTitle}</h2>
               <p className="text-muted-foreground leading-relaxed mb-4">
                 {geo.overviewP1}
               </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 40 sports markets, 5,000+ casino games, live dealer tables, and exclusive 1xGames, the platform offers one of the most comprehensive mobile gaming experiences available. If you want to explore all the <Link to="/features" className="text-primary hover:underline">betting and casino features</Link> in detail, check our dedicated features page. Ready to get started? <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">Download the latest version</a> and experience it yourself.
              </p>
            </div>
          </GlowOnScroll>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding gradient-section">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Key Features & Highlights</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover why millions of users choose the 1xBet betting app for their mobile gaming experience.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) =>
            <StaggerItem key={f.title}>
                <div className="glass-card p-6 h-full">
                  <f.icon size={32} className="text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Link to="/features" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                View all features <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sports Betting Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
               <h2 className="text-3xl font-bold mb-4 text-foreground">{geo.sportsTitle}</h2>
               <p className="text-muted-foreground mb-4">
                 {geo.sportsDesc}
                </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Live in-play betting with real-time updates</li>
                <li className="flex items-center gap-2"><TrendingUp size={14} className="text-primary" /> Advanced statistics and analytics</li>
                <li className="flex items-center gap-2"><CreditCard size={14} className="text-primary" /> Full cashout and partial cashout options</li>
              </ul>
              <CTAButton text="Install & Start Playing" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass-card aspect-video flex items-center justify-center overflow-hidden">
                <img src={sportsBettingHero} alt="1xBet sports betting interface on mobile device" className="w-full h-full object-cover rounded-xl" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Casino & Live Casino */}
      <section className="section-padding gradient-section">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" className="order-2 md:order-1">
              <div className="glass-card aspect-video flex items-center justify-center overflow-hidden">
                <img src={casinoHero} alt="Casino app interface showing slot games" className="w-full h-full object-cover rounded-xl" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 md:order-2">
               <h2 className="text-3xl font-bold mb-4 text-foreground">{geo.casinoTitle}</h2>
               <p className="text-muted-foreground mb-4">
                 {geo.casinoDesc} Play blackjack, roulette, baccarat, and hundreds of exclusive titles available through the <Link to="/casino" className="text-primary hover:underline">casino section</Link>.
               </p>
              <p className="text-muted-foreground mb-6">
                The casino app delivers smooth performance, fast loading times, and a curated selection of the most popular and high-RTP games available on mobile.
              </p>
              <CTAButton text="Play Instantly" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bonuses — Enhanced Long-Form Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-foreground">{geo.bonusTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{geo.bonusDesc}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 md:p-10 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">{geo.bonusLongContent}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {geo.bonusBenefits.map((b) =>
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Bonus Highlights</h3>
                  <ul className="space-y-2">
                    {geo.bonusHighlights.map((h) =>
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Star size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-8">
            <StaggerItem>
              <div className="glass-card p-6 h-full text-center">
                <Star className="text-primary mx-auto mb-3" size={28} />
                <h3 className="font-semibold mb-2 text-foreground">Welcome Bonus</h3>
                <p className="text-sm text-muted-foreground">Generous first deposit bonus for new users signing up through the mobile app.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-6 h-full text-center">
                <Trophy className="text-primary mx-auto mb-3" size={28} />
                <h3 className="font-semibold mb-2 text-foreground">Loyalty Rewards</h3>
                <p className="text-sm text-muted-foreground">Earn points with every bet and redeem them for bonuses, free bets, and more.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-6 h-full text-center">
                <RefreshCw className="text-primary mx-auto mb-3" size={28} />
                <h3 className="font-semibold mb-2 text-foreground">Daily Promotions</h3>
                <p className="text-sm text-muted-foreground">Regular daily and weekly offers keep the experience fresh and rewarding.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <CTAButton text="Download App & Claim Bonus" size="lg" showBonus />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CenterBanner />

      {/* Installation Steps */}
      <section className="section-padding gradient-section">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">How to Download & Install</h2>
            <p className="text-center text-muted-foreground mb-12">
              Get started in minutes. Follow these simple steps to <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">install the mobile app</a> on your device.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.15}>
            {installSteps.map((s) =>
            <StaggerItem key={s.step}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full btn-gradient text-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4 blue-glow">
                    {s.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/download" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                View full installation guide <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose the 1xBet Mobile App?</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
            { title: "Optimized Performance", desc: "Built specifically for mobile devices, delivering fast load times and smooth navigation across all screen sizes." },
            { title: "Comprehensive Markets", desc: "Access the full range of sports betting markets, casino games, and exclusive features — all within a single app." },
            { title: "Secure Transactions", desc: "Bank-grade encryption protects all your data and financial transactions, ensuring peace of mind." },
            { title: "24/7 Support", desc: "Round-the-clock customer support available through live chat, email, and phone directly within the app." }].
            map((item) =>
            <StaggerItem key={item.title}>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding gradient-section">
        <div className="container-narrow max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqPreview.map((item, i) =>
              <AccordionItem key={item.q} value={`faq-${i}`} className="glass-card border-none px-6">
                  <AccordionTrigger className="text-foreground hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-8">
              <Link to="/faq" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                View all FAQ <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/8 blur-[100px] will-change-transform"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        
        <div className="container-narrow text-center relative">
          <ScrollReveal>
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{geo.ctaTitle}</h2>
             <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
               {geo.ctaDesc}
             </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton text="Download App Now" size="lg" showBonus />
              <CTAButton text="Start Winning Today" variant="outline" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>);

};

export default Index;