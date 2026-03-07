import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGeo } from "@/contexts/GeoContext";
import { getGeoMeta } from "@/lib/geo-content";
import { countries } from "@/lib/geo-data";

const BASE = "https://1xbetapp.one";

const SeoHead = () => {
  const { country } = useGeo();
  const location = useLocation();

  useEffect(() => {
    const meta = getGeoMeta(country);

    // Title
    document.title = meta.title;

    // Helper to set/create meta
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", meta.description);

    // Canonical
    const canonical = `${BASE}${location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // OG
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", canonical);

    // Twitter
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    // hreflang - update dynamically
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    const pathParts = location.pathname.split("/").filter(Boolean);
    const validCodes = new Set(countries.map((c) => c.code.toLowerCase()));
    let pagePath = "";
    if (pathParts.length > 0 && validCodes.has(pathParts[0].toLowerCase())) {
      pagePath = "/" + pathParts.slice(1).join("/");
    } else {
      pagePath = "/" + pathParts.join("/");
    }
    if (pagePath === "/") pagePath = "";

    const addHreflang = (lang: string, href: string) => {
      const l = document.createElement("link");
      l.setAttribute("rel", "alternate");
      l.setAttribute("hreflang", lang);
      l.setAttribute("href", href);
      document.head.appendChild(l);
    };

    addHreflang("x-default", `${BASE}${pagePath || "/"}`);
    countries.forEach((c) => {
      const langTag = c.languageAltCode
        ? `${c.languageCode}-${c.code}`
        : c.languageCode;
      addHreflang(langTag, `${BASE}/${c.code.toLowerCase()}${pagePath || "/"}`);
    });

    // ─── JSON-LD Structured Data ───────────────────────────────
    const jsonLdId = "seohead-jsonld";
    let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = jsonLdId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }

    // Build breadcrumb from path
    const breadcrumbItems: { name: string; url: string }[] = [
      { name: "Home", url: `${BASE}/` },
    ];

    const pageLabels: Record<string, string> = {
      download: "Download",
      features: "Features",
      "sports-betting": "Sports Betting",
      casino: "Casino",
      "live-casino": "Live Casino",
      "slots-games": "Slots Games",
      payments: "Payments",
      "login-guide": "Login Guide",
      faq: "FAQ",
      about: "About",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      disclaimer: "Disclaimer",
    };

    // Determine clean segments (skip country code)
    const segments = pathParts.filter(
      (s) => !validCodes.has(s.toLowerCase())
    );

    if (segments.length > 0) {
      let cumulativePath = "";
      for (const seg of segments) {
        cumulativePath += `/${seg}`;
        breadcrumbItems.push({
          name: pageLabels[seg] || seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
          url: `${BASE}${cumulativePath}`,
        });
      }
    }

    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "1xBet App Download",
        url: BASE,
        logo: `${BASE}/favicon.png`,
        sameAs: [],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "1xBet App Download",
        url: BASE,
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ];

    scriptEl.textContent = JSON.stringify(jsonLd);
  }, [country, location.pathname]);

  return null;
};

export default SeoHead;
