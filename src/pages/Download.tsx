import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTAButton from "@/components/CTAButton";
import { Shield, Smartphone, Monitor, ChevronRight, Download as DownloadIcon, CheckCircle, AlertTriangle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowOnScroll } from "@/components/ScrollReveal";
import { useGeo } from "@/contexts/GeoContext";
import { getPageHero, getGeoSchema } from "@/lib/geo-content";
import { CenterBanner } from "@/components/AffiliateBanners";

const Download = () => {
  const { country } = useGeo();
  const hero = getPageHero("download", country);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://1xbetapp.one" },
          { "@type": "ListItem", position: 2, name: "Download", item: "https://1xbetapp.one/download" },
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGeoSchema(country))}} />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link> <ChevronRight size={12} className="inline mx-1" /> <span className="text-foreground">Download</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gold-text">{hero.h1}</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">{hero.h1Line2}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{hero.desc}</p>
            <CTAButton text="Download Latest Version" size="lg" showBonus />
          </ScrollReveal>
        </div>
      </section>

      <CenterBanner />

    {/* Version Table */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">App Version Information</h2>
        </ScrollReveal>
        <GlowOnScroll>
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-semibold">Platform</th>
                  <th className="text-left p-4 font-semibold">Version</th>
                  <th className="text-left p-4 font-semibold">Size</th>
                  <th className="text-left p-4 font-semibold">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr><td className="p-4">Android APK</td><td className="p-4">v115.2</td><td className="p-4">68 MB</td><td className="p-4">January 2026</td></tr>
                <tr><td className="p-4">iOS App Store</td><td className="p-4">v115.2</td><td className="p-4">142 MB</td><td className="p-4">January 2026</td></tr>
                <tr><td className="p-4">Windows Desktop</td><td className="p-4">v115.0</td><td className="p-4">210 MB</td><td className="p-4">December 2025</td></tr>
              </tbody>
            </table>
          </div>
        </GlowOnScroll>
      </div>
    </section>

    {/* Android Installation */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal direction="left">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Smartphone className="text-primary" size={24} /> Android APK Installation Guide</h2>
          <p className="text-muted-foreground mb-6">
            The Android version of the 1xBet app is distributed as an APK file, which requires manual installation. This method is standard for apps not available on the Google Play Store. The APK download is safe and verified — follow these steps to install it on your Android device.
          </p>
        </ScrollReveal>
        <StaggerContainer className="space-y-4 mb-8">
          {[
            "Open your device Settings and navigate to Security or Privacy.",
            "Enable 'Install from Unknown Sources' for your browser.",
            "Visit the official download page and tap the Android download button.",
            "Once downloaded, open the APK file from your notifications or file manager.",
            "Tap 'Install' and wait for the installation to complete.",
            "Open the app and log in or create a new account.",
          ].map((step, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                <p className="text-muted-foreground pt-0.5">{step}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.3}>
          <CTAButton text="Download APK Now" />
        </ScrollReveal>
      </div>
    </section>

    {/* iOS Installation */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal direction="right">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Monitor className="text-primary" size={24} /> iOS Installation Guide</h2>
          <p className="text-muted-foreground mb-6">
            For iPhone and iPad users, the 1xBet app can be downloaded from the App Store. In some regions, you may need to change your App Store country to access the application. The iOS version offers the same comprehensive <Link to="/features" className="text-primary hover:underline">betting and casino features</Link> as the Android version.
          </p>
        </ScrollReveal>
        <StaggerContainer className="space-y-4 mb-8">
          {[
            "Open the App Store on your iOS device.",
            "Search for '1xBet' or use the direct link from the official website.",
            "Tap 'Get' to begin the download and installation.",
            "Once installed, open the app and complete registration or login.",
          ].map((step, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                <p className="text-muted-foreground pt-0.5">{step}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <CTAButton text="Get iOS App" />
        </ScrollReveal>
      </div>
    </section>

    <CenterBanner />

    {/* System Requirements */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          <StaggerItem>
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-3">Android</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Android 5.0 (Lollipop) or higher</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> 100 MB free storage space</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> 1 GB RAM minimum</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Stable internet connection</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-3">iOS</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> iOS 12.0 or later</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> 150 MB free storage space</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Compatible with iPhone & iPad</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary" /> Stable internet connection</li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>

    {/* Safety */}
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal direction="left">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Shield className="text-primary" size={24} /> Is the App Safe to Download?</h2>
          <p className="text-muted-foreground mb-4">
            Yes. The 1xBet mobile application is developed by a licensed and regulated operator. The APK file is digitally signed and verified. The app uses SSL encryption for all data transmissions, ensuring your personal information and financial details remain secure. Always download from official sources to avoid counterfeit versions.
          </p>
          <p className="text-muted-foreground mb-6">
            For more information on account security and safe usage, visit our <Link to="/login-guide" className="text-primary hover:underline">login and account guide</Link>.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Troubleshooting */}
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><AlertTriangle className="text-primary" size={24} /> Troubleshooting Installation Issues</h2>
        </ScrollReveal>
        <StaggerContainer className="space-y-4">
          {[
            { q: "APK won't install", a: "Ensure 'Unknown Sources' is enabled in your device settings. Also check that you have enough storage space." },
            { q: "App crashes on launch", a: "Try clearing the app cache, restarting your device, or downloading the latest version." },
            { q: "Download speed is slow", a: "Switch to a stable Wi-Fi connection. If the issue persists, try using a VPN." },
            { q: "iOS app not available in my region", a: "Change your App Store region to a supported country in your Apple ID settings." },
          ].map((item) => (
            <StaggerItem key={item.q}>
              <div className="glass-card p-5">
                <h3 className="font-semibold mb-1">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground mt-6">
            Still having issues? Check our <Link to="/faq" className="text-primary hover:underline">frequently asked questions</Link> or <Link to="/contact" className="text-primary hover:underline">contact support</Link>.
          </p>
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

export default Download;