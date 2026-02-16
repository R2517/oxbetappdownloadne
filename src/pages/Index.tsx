import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { Shield, Zap, RefreshCw, Smartphone, Star, Trophy, Gamepad2, CreditCard, Users, TrendingUp, Clock, ChevronRight } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Secure & Safe" },
  { icon: Zap, label: "Lightning Fast" },
  { icon: RefreshCw, label: "Updated 2026" },
  { icon: Smartphone, label: "Mobile Optimized" },
];

const features = [
  { icon: Trophy, title: "Sports Betting", desc: "Access thousands of live and pre-match events across 40+ sports with competitive odds." },
  { icon: Gamepad2, title: "Casino Games", desc: "Over 5,000 slot machines, table games, and progressive jackpots from top providers." },
  { icon: Users, title: "Live Casino", desc: "Real-time interaction with professional dealers in HD streaming quality." },
  { icon: Star, title: "1xGames", desc: "Exclusive crash games, instant wins, and unique multiplier experiences." },
  { icon: CreditCard, title: "Fast Payments", desc: "Instant deposits and quick withdrawals via 50+ payment methods worldwide." },
  { icon: TrendingUp, title: "Live Streaming", desc: "Watch live sports events directly in the app while placing in-play bets." },
];

const installSteps = [
  { step: "1", title: "Visit the Official Source", desc: "Navigate to the download page to get the latest verified APK or App Store link." },
  { step: "2", title: "Download the App", desc: "Select your platform — Android APK or iOS — and start the download process." },
  { step: "3", title: "Install & Launch", desc: "Allow installation from unknown sources (Android), install, and open the app." },
  { step: "4", title: "Register or Log In", desc: "Create a new account or sign in to access the full range of features." },
];

const faqPreview = [
  { q: "Is the 1xBet app free to download?", a: "Yes, the mobile application is completely free to download for both Android and iOS devices." },
  { q: "What are the system requirements?", a: "Android 5.0+ with 100MB free space, or iOS 12.0+ for iPhone and iPad." },
  { q: "How do I update the app?", a: "Android users can download the latest APK version. iOS users receive updates through the App Store." },
];

const Index = () => {
  return (
    <Layout>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "1xBet App Download",
        url: "https://1xbetapp.download",
        description: "Official informational resource for the 1xBet mobile application."
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "1xBet Mobile App",
        operatingSystem: "Android, iOS",
        applicationCategory: "GameApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "15420" }
      })}} />

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container-narrow relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gold-text">1xBet App Download</span> – Latest Version for Android & iOS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the fastest, most feature-rich mobile betting and casino platform. Download the 1xBet app today and enjoy sports betting, live casino, and thousands of games — all in one secure mobile application.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <CTAButton text="Download Now" size="lg" />
              <CTAButton text="Explore Features" variant="outline" size="lg" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon size={16} className="text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Complete Mobile Betting & Casino Platform</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The 1xBet mobile app brings the entire betting and casino experience to your fingertips. Whether you prefer pre-match sports wagering, live in-play betting, or spinning the latest casino slots, this app delivers everything in a seamless, fast-loading mobile interface. Available as an APK download for Android and through the App Store for iOS, the application is optimized for performance on all modern devices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 40 sports markets, 5,000+ casino games, live dealer tables, and exclusive 1xGames, the platform offers one of the most comprehensive mobile gaming experiences available. If you want to explore all the <Link to="/features" className="text-primary hover:underline">betting and casino features</Link> in detail, check our dedicated features page. Ready to get started? <a href="#AFFILIATE_LINK_PLACEHOLDER" className="text-primary hover:underline">Download the latest version</a> and experience it yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-4">Key Features & Highlights</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover why millions of users choose the 1xBet betting app for their mobile gaming experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-6 hover:border-primary/30 transition-colors">
                <f.icon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/features" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
              View all features <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Betting Overview */}
      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Sports Betting Excellence</h2>
              <p className="text-muted-foreground mb-4">
                From football and basketball to tennis, esports, and virtual sports — the sports betting app covers over 40 disciplines with thousands of daily markets. Enjoy competitive odds, live streaming, and a powerful cashout feature that puts you in control of your bets.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><Clock size={14} className="text-primary" /> Live in-play betting with real-time updates</li>
                <li className="flex items-center gap-2"><TrendingUp size={14} className="text-primary" /> Advanced statistics and analytics</li>
                <li className="flex items-center gap-2"><CreditCard size={14} className="text-primary" /> Full cashout and partial cashout options</li>
              </ul>
              <CTAButton text="Get the App" />
            </div>
            <div className="glass-card aspect-video flex items-center justify-center">
              <img src="/placeholder.svg" alt="1xBet sports betting interface on mobile device" className="w-full h-full object-cover rounded-xl opacity-60" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Casino & Live Casino */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card aspect-video flex items-center justify-center order-2 md:order-1">
              <img src="/placeholder.svg" alt="Casino app interface showing slot games" className="w-full h-full object-cover rounded-xl opacity-60" loading="lazy" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Casino & Live Dealers</h2>
              <p className="text-muted-foreground mb-4">
                Dive into a world-class <Link to="/features" className="text-primary hover:underline">casino experience</Link> with over 5,000 games from industry-leading providers. The live casino brings real dealers to your screen with HD streaming, interactive tables, and immersive gameplay. Play blackjack, roulette, baccarat, and hundreds of exclusive titles.
              </p>
              <p className="text-muted-foreground mb-6">
                The casino app delivers smooth performance, fast loading times, and a curated selection of the most popular and high-RTP games available on mobile.
              </p>
              <CTAButton text="Install App" />
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="section-padding bg-secondary/20">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-4">Bonuses & Promotions</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            New users can enjoy generous welcome offers, while existing players benefit from ongoing promotions, cashback rewards, and loyalty programs. The mobile app provides exclusive promotions not available on desktop.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6">
              <Star className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">Welcome Bonus</h3>
              <p className="text-sm text-muted-foreground">Generous first deposit bonus for new users signing up through the mobile app.</p>
            </div>
            <div className="glass-card p-6">
              <Trophy className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">Loyalty Rewards</h3>
              <p className="text-sm text-muted-foreground">Earn points with every bet and redeem them for bonuses, free bets, and more.</p>
            </div>
            <div className="glass-card p-6">
              <RefreshCw className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">Daily Promotions</h3>
              <p className="text-sm text-muted-foreground">Regular daily and weekly offers keep the experience fresh and rewarding.</p>
            </div>
          </div>
          <CTAButton text="Get Latest Version" />
        </div>
      </section>

      {/* Installation Steps */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-4">How to Download & Install</h2>
          <p className="text-center text-muted-foreground mb-12">
            Get started in minutes. Follow these simple steps to <a href="#AFFILIATE_LINK_PLACEHOLDER" className="text-primary hover:underline">install the mobile app</a> on your device.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {installSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/download" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
              View full installation guide <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose the 1xBet Mobile App?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Optimized Performance", desc: "Built specifically for mobile devices, delivering fast load times and smooth navigation across all screen sizes." },
              { title: "Comprehensive Markets", desc: "Access the full range of sports betting markets, casino games, and exclusive features — all within a single app." },
              { title: "Secure Transactions", desc: "Bank-grade encryption protects all your data and financial transactions, ensuring peace of mind." },
              { title: "24/7 Support", desc: "Round-the-clock customer support available through live chat, email, and phone directly within the app." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqPreview.map((item) => (
              <div key={item.q} className="glass-card p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
              View all FAQ <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Download the 1xBet mobile app now and enjoy the complete sports betting and casino experience on your device. Fast, secure, and always up to date.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton text="Download Now" size="lg" />
            <CTAButton text="Learn More" variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
