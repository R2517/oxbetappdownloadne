

# Country-Wise SEO Pages and Indexing Plan

## Problem

Currently, the site dynamically changes content (titles, descriptions, bonuses) based on the visitor's IP address using JavaScript. However, search engines like Google cannot see this dynamic content because:

- Google crawls the page once and sees only the default (US/Global) version
- All 30 country variations are invisible to search engines
- The hreflang tags all point to the same URL, which is incorrect
- No separate URLs exist for country-specific content, so Google cannot index them separately

**Result**: You are losing organic search traffic from 30 target countries because Google only indexes one generic version of each page.

---

## Solution: Country Sub-directory Pages

Create URL-based country pages like:
- `1xbetapp.download/in/` (India)
- `1xbetapp.download/pk/` (Pakistan)  
- `1xbetapp.download/ng/` (Nigeria)
- `1xbetapp.download/br/` (Brazil)
- etc.

Each URL will have its own unique, pre-rendered content that Google can crawl and index.

---

## Implementation Steps

### Step 1: Add Country Routes

Add routes for all 30 countries in `App.tsx`:
- `/in/` , `/in/download`, `/in/sports-betting`, `/in/casino`, etc.
- `/pk/` , `/pk/download`, `/pk/sports-betting`, etc.
- Same pattern for all 30 country codes

A wrapper component will read the country code from the URL and set the geo context accordingly.

### Step 2: Create a Country Layout Wrapper

A `CountryRoute` component that:
- Reads the country code from the URL (e.g., `/in/` extracts "IN")
- Automatically sets the GeoContext to that country
- Renders the same page components but with the correct country data
- Injects proper `<title>` and `<meta>` tags for that country using `document.title`

### Step 3: Update Internal Links

Inside country pages, all navigation links will stay within that country's prefix:
- On `/in/`, the "Casino" link goes to `/in/casino` (not `/casino`)
- On `/pk/`, the "Download" link goes to `/pk/download`

The base pages (without country prefix) will continue to work with IP detection as they do now.

### Step 4: Fix hreflang Tags

Replace the current static hreflang tags with dynamic ones that point to actual country URLs:
```text
<link rel="alternate" hreflang="en-IN" href="https://1xbetapp.download/in/" />
<link rel="alternate" hreflang="ur-PK" href="https://1xbetapp.download/pk/" />
<link rel="alternate" hreflang="bn-BD" href="https://1xbetapp.download/bd/" />
...
<link rel="alternate" hreflang="x-default" href="https://1xbetapp.download/" />
```

### Step 5: Update Sitemap

Add all country pages to `sitemap.xml`:
```text
<url><loc>https://1xbetapp.download/in/</loc><priority>0.9</priority></url>
<url><loc>https://1xbetapp.download/in/download</loc><priority>0.8</priority></url>
<url><loc>https://1xbetapp.download/pk/</loc><priority>0.9</priority></url>
...
```

This gives Google a clear map of all country-specific pages to crawl.

### Step 6: Add SEO Head Component

Create a `SeoHead` component that dynamically sets:
- `document.title` with country-specific title
- Meta description
- Canonical URL pointing to the current country page
- Open Graph tags with country-specific content

### Step 7: Update .htaccess for Country Routes

Ensure the `.htaccess` file properly handles all country sub-routes so direct access and refresh work correctly on Hostinger.

---

## How Google Indexing Will Work After This

```text
Google crawls: 1xbetapp.download/in/
  -> Sees: "1xBet App Download India - Latest APK..." (unique Indian content)
  -> Indexes for: "1xbet app download india", "1xbet apk india"

Google crawls: 1xbetapp.download/ng/  
  -> Sees: "1xBet App Download Nigeria - Latest APK..." (unique Nigerian content)
  -> Indexes for: "1xbet app download nigeria", "1xbet apk nigeria"

Google crawls: 1xbetapp.download/br/
  -> Sees: "1xBet App Download Brazil - Latest APK..." (unique Brazilian content)
  -> Indexes for: "1xbet app download brazil", "1xbet apk brazil"
```

Each country gets its own indexed page with unique content, targeting country-specific keywords.

---

## Technical Details

### Files to Create
- `src/components/CountryRoute.tsx` -- Wrapper component for country-prefixed routes
- `src/components/SeoHead.tsx` -- Dynamic SEO meta tag injection component

### Files to Modify
- `src/App.tsx` -- Add country-prefixed routes for all 30 countries x 15 pages
- `src/components/layout/Header.tsx` -- Make nav links country-aware
- `src/components/layout/Footer.tsx` -- Make footer links country-aware
- `src/contexts/GeoContext.tsx` -- Support URL-based country setting
- `public/sitemap.xml` -- Add all country page URLs (450+ URLs)
- `index.html` -- Fix hreflang tags to point to actual country URLs
- `public/.htaccess` -- Ensure all sub-routes work on Hostinger

### Route Structure
Each country gets all 15 pages:
```text
/:countryCode/                -> Home
/:countryCode/download        -> Download
/:countryCode/sports-betting  -> Sports Betting
/:countryCode/casino          -> Casino
/:countryCode/live-casino     -> Live Casino
/:countryCode/slots-games     -> Slots Games
/:countryCode/payments        -> Payments
/:countryCode/features        -> Features
/:countryCode/login-guide     -> Login Guide
/:countryCode/faq             -> FAQ
/:countryCode/about           -> About
/:countryCode/contact         -> Contact
/:countryCode/privacy         -> Privacy
/:countryCode/terms           -> Terms
/:countryCode/disclaimer      -> Disclaimer
```

### Important Notes
- The existing base routes (without country prefix) will continue working exactly as they do now with IP-based detection
- Country pages will use the same components -- no content duplication in code
- The `.htaccess` already handles SPA routing, so country sub-routes will work on Hostinger
- Since this is still a client-side SPA, for maximum SEO benefit a future step would be adding pre-rendering (e.g., with `prerender.io` or similar service), but the country URLs alone are a major improvement

