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
    // Remove old hreflangs
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    // Determine current page path (without country prefix)
    const pathParts = location.pathname.split("/").filter(Boolean);
    const validCodes = new Set(countries.map((c) => c.code.toLowerCase()));
    let pagePath = "";
    if (pathParts.length > 0 && validCodes.has(pathParts[0].toLowerCase())) {
      pagePath = "/" + pathParts.slice(1).join("/");
    } else {
      pagePath = "/" + pathParts.join("/");
    }
    if (pagePath === "/") pagePath = "";

    // x-default
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
  }, [country, location.pathname]);

  return null;
};

export default SeoHead;
