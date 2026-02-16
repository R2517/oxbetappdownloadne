

# Website Improvement Plan

## Issues Found and Proposed Fixes

### 1. Hero Section — Missing Background Image
The hero section currently has no background image, just a dark gradient. Adding a subtle hero background image (or a dynamic one per category) would make it look much more premium and professional. A semi-transparent overlay keeps text readable.

### 2. Hero Section — Country Name Not Showing for US Default
When the default country is US, the hero shows generic text without mentioning any country. The description paragraph also doesn't include the country name — it uses the generic version instead of the geo-localized one from the content pack.

### 3. Too Many Center Banners on Homepage
There are 2 center banners on the homepage which breaks the content flow. Reduce to 1 center banner placed mid-page for cleaner experience.

### 4. Missing App Screenshots / Mockups
There are no app screenshots or device mockups anywhere on the homepage. Adding a phone mockup in the hero or below it would massively increase trust and conversion.

### 5. Footer — Too Plain
The footer lacks visual appeal. Could benefit from:
- A gradient top border or glow effect
- Social proof numbers (e.g., "10M+ Downloads", "40+ Sports")
- A mini CTA section above the footer links

### 6. FAQ Section — Not Using Accordion
The FAQ preview on homepage shows static text blocks. Using an expandable accordion would look more professional and save space.

### 7. Missing "Back to Top" Button
Long pages have no way to quickly scroll back to top.

### 8. Page Speed — Hero Background Animation
The large blur animation in the hero (`w-[600px] h-[400px] blur-[120px]`) can cause performance issues on lower-end devices. Should add `will-change: transform` or simplify.

---

## Technical Implementation

### Files to modify:
- **`src/pages/Index.tsx`** — Add hero background image, remove 1 center banner, improve FAQ to accordion
- **`src/components/layout/Footer.tsx`** — Add social proof stats row, gradient border, mini CTA
- **`src/components/BackToTop.tsx`** (new) — Floating scroll-to-top button
- **`src/components/layout/Layout.tsx`** — Include BackToTop component
- **`src/index.css`** — Add `will-change` optimization for hero animation

### Priority order:
1. Fix hero to show country name properly + add background image
2. Reduce center banners from 2 to 1
3. Enhance footer with stats and better styling
4. Add back-to-top button
5. Convert FAQ preview to accordion
6. Performance optimization

