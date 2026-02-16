import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, CreditCard, Shield, Clock, Zap, AlertCircle, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import paymentsHero from "@/assets/payments-hero.jpg";

const depositMethods = [
  { method: "Visa / Mastercard", processing: "Instant", minDeposit: "$1", fees: "Free", availability: "Global" },
  { method: "Skrill", processing: "Instant", minDeposit: "$1", fees: "Free", availability: "Global" },
  { method: "Neteller", processing: "Instant", minDeposit: "$1", fees: "Free", availability: "Global" },
  { method: "Bitcoin (BTC)", processing: "10-30 min", minDeposit: "$1", fees: "Free", availability: "Global" },
  { method: "Ethereum (ETH)", processing: "5-15 min", minDeposit: "$1", fees: "Free", availability: "Global" },
  { method: "USDT (Tether)", processing: "5-15 min", minDeposit: "$1", fees: "Free", availability: "Global" },
  { method: "Bank Transfer", processing: "1-3 days", minDeposit: "$10", fees: "Varies", availability: "Regional" },
  { method: "Mobile Payment", processing: "Instant", minDeposit: "$1", fees: "Free", availability: "Regional" },
];

const withdrawalComparison = [
  { method: "E-Wallets (Skrill, Neteller)", speed: "15 min - 1 hour", limit: "$1 - $50,000", verification: "Required" },
  { method: "Cryptocurrency", speed: "15 min - 1 hour", limit: "$1 - $100,000", verification: "Required" },
  { method: "Bank Cards", speed: "1-3 business days", limit: "$1.50 - $25,000", verification: "Required" },
  { method: "Bank Transfer", speed: "1-5 business days", limit: "$10 - $50,000", verification: "Required" },
  { method: "Mobile Payment", speed: "15 min - 24 hours", limit: "$1 - $10,000", verification: "Required" },
];

const paymentsFaq = [
  { q: "What payment methods does the 1xBet app support?", a: "Over 50 payment methods including Visa, Mastercard, Skrill, Neteller, ecoPayz, Bitcoin, Ethereum, USDT, Litecoin, bank transfers, mobile payments, and prepaid cards. Available methods vary by country." },
  { q: "How long do deposits take to process?", a: "Most deposits are processed instantly. E-wallets and card payments appear in your account within seconds. Cryptocurrency deposits require blockchain confirmations (typically 10-30 minutes). Bank transfers may take 1-3 business days." },
  { q: "How long do withdrawals take?", a: "E-wallet and cryptocurrency withdrawals are typically processed within 15 minutes to 1 hour. Bank card withdrawals take 1-3 business days. First-time withdrawals may require account verification (KYC) before processing." },
  { q: "Is there a minimum deposit amount?", a: "Minimum deposit amounts start from $1 for most methods. Cryptocurrency deposits have no minimum in most cases. Bank transfers typically have a $10 minimum. Check the deposit section in the app for specific limits per method." },
  { q: "Are there fees for deposits or withdrawals?", a: "The 1xBet app does not charge fees for most payment methods. However, your payment provider (bank, e-wallet, or crypto network) may charge their own transaction or network fees." },
  { q: "How do I make a cryptocurrency deposit?", a: "Select your cryptocurrency in the deposit section, copy the wallet address provided, and send your crypto from your wallet. The deposit is credited after the required blockchain confirmations (1-3 for most coins)." },
  { q: "Is my financial information secure?", a: "Yes, all transactions are protected by 256-bit SSL encryption. The platform uses PCI-DSS compliant payment gateways. Two-factor authentication adds an extra security layer for all financial operations." },
  { q: "Why is my withdrawal pending?", a: "Withdrawals may be pending due to account verification requirements, processing queue, or exceeding daily limits. First withdrawals require KYC verification. Contact support if processing exceeds the stated timeframe." },
  { q: "Can I use different currencies?", a: "Yes, the app supports dozens of currencies including USD, EUR, GBP, INR, BDT, PKR, and various cryptocurrencies. Choose your preferred currency during registration to avoid conversion fees." },
  { q: "What should I do if a deposit fails?", a: "Check your payment method has sufficient funds, verify the details entered are correct, and ensure your bank hasn't blocked the transaction. Try an alternative payment method or contact support for assistance." },
];

const Payments = () => (
  <Layout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
        { "@type": "ListItem", position: 2, name: "Payments", item: "https://1xbetapp.download/payments" },
      ]
    })}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: paymentsFaq.map(item => ({
        "@type": "Question", name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    })}} />

    {/* Hero */}
    <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Payments</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-text">1xBet Payments</span> — Deposits & Withdrawals
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Fast, secure payment methods for deposits and withdrawals. Over 50 options including credit cards, e-wallets, cryptocurrency, and mobile payments. Instant deposits and quick withdrawals with bank-grade security.
          </p>
          <CTAButton text="Get Started Now" size="lg" />
        </ScrollReveal>
      </div>
    </section>

    {/* Hero Image */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="glass-card aspect-video overflow-hidden">
              <img src={paymentsHero} alt="Digital payment interface with cryptocurrency and cards on mobile" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Flexible Banking Options</h2>
            <p className="text-muted-foreground mb-4">
              The 1xBet app supports over 50 payment methods to ensure users worldwide can deposit and withdraw with ease. From traditional bank cards to cutting-edge cryptocurrency, the platform covers every major payment option with fast processing times and zero platform fees on most methods.
            </p>
            <p className="text-muted-foreground mb-6">
              Deposits are processed instantly for most methods, and withdrawals are among the fastest in the industry — particularly for e-wallets and crypto. The app's payment section is intuitive and guides you through each transaction step by step. <a href="#AFFILIATE_LINK_PLACEHOLDER" className="text-primary hover:underline">Download the app</a> to access all payment options.
            </p>
            <CTAButton text="Download & Deposit" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Deposit Methods Table */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><CreditCard className="text-primary" size={28} /> Deposit Methods</h2>
          <p className="text-muted-foreground mb-6">All deposit methods in the 1xBet app are designed for speed and convenience. Most deposits are credited to your account instantly, letting you start betting or playing casino games within seconds.</p>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Method</th>
                  <th className="text-left p-4 font-semibold">Processing</th>
                  <th className="text-left p-4 font-semibold">Min Deposit</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Fees</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {depositMethods.map((m) => (
                  <tr key={m.method}>
                    <td className="p-4 font-medium text-foreground">{m.method}</td>
                    <td className="p-4">{m.processing}</td>
                    <td className="p-4">{m.minDeposit}</td>
                    <td className="p-4 hidden md:table-cell">{m.fees}</td>
                    <td className="p-4 hidden md:table-cell">{m.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Withdrawal Speed Comparison */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Clock className="text-primary" size={28} /> Withdrawal Speed Comparison</h2>
          <p className="text-muted-foreground mb-6">Withdrawal processing times vary by method. E-wallets and cryptocurrency offer the fastest payouts, often processed within 15 minutes. All withdrawals require completed account verification (KYC).</p>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Method</th>
                  <th className="text-left p-4 font-semibold">Processing Speed</th>
                  <th className="text-left p-4 font-semibold hidden md:table-cell">Limit Range</th>
                  <th className="text-left p-4 font-semibold">KYC Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {withdrawalComparison.map((w) => (
                  <tr key={w.method}>
                    <td className="p-4 font-medium text-foreground">{w.method}</td>
                    <td className="p-4">{w.speed}</td>
                    <td className="p-4 hidden md:table-cell">{w.limit}</td>
                    <td className="p-4">{w.verification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Cryptocurrency */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal direction="right">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Zap className="text-primary" size={28} /> Cryptocurrency Payments</h2>
          <p className="text-muted-foreground mb-4">The 1xBet app supports a wide range of cryptocurrencies for both deposits and withdrawals. Bitcoin, Ethereum, USDT (Tether), Litecoin, Ripple, Dogecoin, and dozens more are accepted. Crypto payments offer enhanced privacy, faster processing, and no intermediary fees.</p>
          <p className="text-muted-foreground mb-4">Cryptocurrency deposits require blockchain confirmations before being credited — typically 10-30 minutes for Bitcoin and 5-15 minutes for Ethereum and USDT. Withdrawals to crypto wallets are among the fastest available, often processed within 15 minutes.</p>
          <p className="text-muted-foreground mb-6">The app's crypto section includes real-time exchange rates, QR code scanning for wallet addresses, and transaction history tracking. It's the preferred payment method for users who value speed, privacy, and low fees.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Security */}
    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Shield className="text-primary" size={28} /> Payment Security</h2>
          <p className="text-muted-foreground mb-6">Your financial security is the top priority. Every transaction in the 1xBet app is protected by multiple layers of security to ensure your money and personal data are safe.</p>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "256-bit SSL Encryption", desc: "All data transmissions are encrypted using bank-grade SSL technology, preventing interception of sensitive information." },
            { title: "PCI-DSS Compliance", desc: "Payment processing meets the highest industry standards for card security, ensuring your card details are handled safely." },
            { title: "Two-Factor Authentication", desc: "Enable 2FA for all financial transactions, adding an extra verification step before deposits and withdrawals." },
            { title: "Transaction Monitoring", desc: "Advanced fraud detection systems monitor all transactions in real-time, flagging suspicious activity automatically." },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card p-6 h-full">
                <CheckCircle size={20} className="text-primary mb-3" />
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground">
            Learn more about securing your account in our <Link to="/login-guide" className="text-primary hover:underline">login and security guide</Link>. Ready to start? <a href="#AFFILIATE_LINK_PLACEHOLDER" className="text-primary hover:underline">Download the app</a> and make your first deposit.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Troubleshooting */}
    <section className="section-padding gradient-section">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><AlertCircle className="text-primary" size={28} /> Payment Troubleshooting</h2>
        </ScrollReveal>
        <StaggerContainer className="space-y-4 mb-8">
          {[
            { issue: "Deposit not credited", solution: "Wait for blockchain confirmations (crypto) or check with your payment provider. If using a bank card, ensure the transaction wasn't blocked by your bank. Contact support with your transaction reference." },
            { issue: "Withdrawal rejected", solution: "Complete account verification (KYC) first. Ensure you're withdrawing to the same method used for deposit. Check that you've met any wagering requirements on bonuses." },
            { issue: "Bank card declined", solution: "Contact your bank to authorize the transaction. Some banks block international or gaming-related payments. Try using an e-wallet or cryptocurrency as an alternative." },
            { issue: "Minimum amount not met", solution: "Check the minimum deposit/withdrawal amounts for your chosen payment method in the app's banking section. Minimums vary by method and currency." },
          ].map((item) => (
            <StaggerItem key={item.issue}>
              <div className="glass-card p-5">
                <h3 className="font-semibold mb-2 text-foreground">{item.issue}</h3>
                <p className="text-sm text-muted-foreground">{item.solution}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground">
            For more help, visit our <Link to="/faq" className="text-primary hover:underline">FAQ section</Link> or <Link to="/contact" className="text-primary hover:underline">contact support</Link>.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 text-center">Payments FAQ</h2>
        </ScrollReveal>
        <Accordion type="multiple" className="space-y-2">
          {paymentsFaq.map((item, i) => (
            <AccordionItem key={i} value={`pay-faq-${i}`} className="glass-card px-5 border-none">
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
          <h2 className="text-3xl font-bold mb-4">Deposit & Start Playing Today</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            <a href="#AFFILIATE_LINK_PLACEHOLDER" className="text-primary hover:underline">Install the 1xBet app</a>, choose from 50+ payment methods, and start betting on <Link to="/sports-betting" className="text-primary hover:underline">sports</Link> or playing <Link to="/casino" className="text-primary hover:underline">casino games</Link> within minutes.
          </p>
          <CTAButton text="Download Now" size="lg" />
        </div>
      </GlowOnScroll>
    </section>
  </Layout>
);

export default Payments;
