import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { ChevronRight, UserPlus, LogIn, Shield, KeyRound, AlertCircle, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero } from "@/lib/geo-content";

const LoginGuide = () => {
  const { country } = useGeo();
  const hero = getPageHero("loginGuide", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.download" },
          { "@type": "ListItem", position: 2, name: "Login Guide", item: "https://1xbetapp.download/login-guide" },
        ]
      })}} />

      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Login Guide</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2"><span className="gold-text">{hero.h1}</span></h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Download App" showBonus />
          </ScrollReveal>
        </div>
      </section>

    {/* Registration */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal direction="left">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><UserPlus className="text-primary" size={24} /> How to Register</h2>
          <p className="text-muted-foreground mb-4">Creating an account on the 1xBet app is straightforward and takes less than a minute. The platform offers four registration methods: one-click registration, phone registration, email registration, and social media sign-up. Each method creates a full account with access to all features.</p>
        </ScrollReveal>
        <StaggerContainer className="space-y-3 mb-6">
          {[
            "Open the 1xBet app and tap 'Register' on the home screen.",
            "Choose your preferred registration method (one-click is fastest).",
            "Enter required details — country, currency, and contact information.",
            "Set a strong password with at least 8 characters, numbers, and symbols.",
            "Accept the terms and conditions to complete registration.",
            "Your account is now active — make your first deposit to start.",
          ].map((step, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                <p className="text-muted-foreground text-sm">{step}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground">After registration, you can explore all the <Link to="/features" className="text-primary hover:underline">betting and casino features</Link> available on the platform.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Login */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal direction="right">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LogIn className="text-primary" size={24} /> How to Log In</h2>
          <p className="text-muted-foreground mb-4">Logging into the app is simple. Open the application, enter your registered email or phone number along with your password, and tap 'Log In'. The app supports biometric authentication (fingerprint and Face ID) for faster access on supported devices.</p>
          <p className="text-muted-foreground mb-4">If you use one-click registration, your login credentials were generated automatically — check your email or the account details provided during registration. You can change your password at any time in the account settings.</p>
          <p className="text-muted-foreground">Don't have the app yet? <a href="https://reffpa.com/L?tag=d_5260822m_97c_&site=5260822&ad=97" target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-primary hover:underline">Download the latest version</a> to get started.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Verification */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><CheckCircle className="text-primary" size={24} /> Account Verification</h2>
          <p className="text-muted-foreground mb-4">Account verification (KYC) is required for full access to withdrawal features. The process involves uploading identification documents through the app. Verification typically takes 24-72 hours and is a one-time process.</p>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card p-6 mb-6">
            <h3 className="font-semibold mb-3">Documents Accepted</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Passport or national ID card</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Proof of address (utility bill, bank statement)</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Payment method verification (card photo)</li>
            </ul>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Password Recovery */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal direction="left">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><KeyRound className="text-primary" size={24} /> Password Recovery</h2>
          <p className="text-muted-foreground mb-4">If you've forgotten your password, tap 'Forgot Password' on the login screen. Enter your registered email address or phone number, and you'll receive a reset link or verification code. Follow the instructions to create a new password and regain access to your account.</p>
          <p className="text-muted-foreground">If you can't recover your account through self-service, <Link to="/contact" className="text-primary hover:underline">contact support</Link> with your registered details for assistance.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Security */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Shield className="text-primary" size={24} /> Account Security Tips</h2>
          <p className="text-muted-foreground mb-4">Keeping your account secure is essential. The app provides multiple layers of security including two-factor authentication (2FA), login notifications, session management, and device tracking. Enable 2FA through the security settings to add an extra layer of protection.</p>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            "Use a unique, strong password",
            "Enable two-factor authentication",
            "Don't share login credentials",
            "Log out on shared devices",
            "Update the app regularly",
            "Verify emails from official sources only",
          ].map((tip) => (
            <StaggerItem key={tip}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield size={14} className="text-primary shrink-0" /> {tip}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Troubleshooting */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlertCircle className="text-primary" size={24} /> Common Login Issues</h2>
        </ScrollReveal>
        <StaggerContainer className="space-y-4 mb-6">
          {[
            { q: "Invalid credentials error", a: "Double-check your email/phone and password. Use 'Forgot Password' if needed." },
            { q: "Account locked", a: "Multiple failed attempts may lock your account temporarily. Wait 30 minutes or contact support." },
            { q: "Two-factor code not received", a: "Check your authenticator app or SMS inbox. Ensure your phone number is correct in settings." },
            { q: "App login page not loading", a: "Clear app cache, check your internet connection, or reinstall the latest version." },
          ].map((item) => (
            <StaggerItem key={item.q}>
              <div className="glass-card p-5">
                <h3 className="font-semibold mb-1">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Responsible Usage */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Responsible Usage</h2>
          <p className="text-muted-foreground mb-4">The app includes responsible gaming tools such as deposit limits, loss limits, session time reminders, self-exclusion options, and reality checks. These tools help users maintain control over their gaming activity. Access responsible gaming settings through your account profile at any time.</p>
          <p className="text-muted-foreground mb-6">If you feel that your gaming habits are becoming problematic, use the self-exclusion feature or reach out to professional support organizations listed within the app.</p>
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

export default LoginGuide;