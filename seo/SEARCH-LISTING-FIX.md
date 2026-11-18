# Search listing fix — GHL paste pack (BUILD-PRIORITY-2026-11-14)

Ticket: Drive `BUILD-PRIORITY-2026-11-14 — ninja360.net Search Listing Fix (M.A.P. Pack)`.
Googling "ninja 360 digital media" returns a generic result: a gray globe, the site name
"ninja360", a hyphenated title and a broken description. Nothing in this repo is live. Every
value below gets pasted into GoHighLevel by hand. **Do the steps in order: Search Console goes
last,** so Google recrawls the new head rather than the old one.

Live state was read on 2026-11-16 by fetching all 17 sitemap URLs.

## 1. Favicon

**State on 2026-11-16:**
- Every page already has a `<link rel="icon">` (GHL media `69c403af…png`).
- Googlebot gets a 200 for both the page and the icon.
- The Cloudflare Worker `ninja360-llms` does **not** strip it. It only intercepts
  `/robots.txt`, `/llms.txt`, `/sitemap.xml` and `/r/cr-2026-07`, and passes everything else
  through untouched.

**The problem is the image, not the tag.** It is a 1024×1024, 1.7 MB detailed illustration
(ninja, camera, storefront) on a dark backdrop, which turns to mush at 16–48 px.

**The fix is the square Ninja 360 mark**, the same mark used on the run sheet:

| File (this repo) | Use |
|---|---|
| `brand/favicon/favicon-512.png` | GHL favicon upload (512×512, transparent) |
| `brand/favicon/favicon-48.png` | 48×48. Google's minimum recommended size |
| `brand/favicon/favicon-192.png`, `favicon-32.png` | optional head links (below) |
| `brand/favicon/apple-touch-icon-180.png` | iOS home screen (white background) |

How the files were made: the source is `ninja360.co/public/assets/ninja-mark.png`. The
transparent margin was trimmed, the mark centred square with about 6% padding, and each size
resized with lanczos3.

**Steps:**
1. **GHL → Sites → Funnels → ninja360.net → Settings → Favicon:** upload `favicon-512.png`.
   Save.
2. Optionally, upload the 48 and 180 files to GHL Media and add this to the **site-wide** head
   (Funnel Settings → Head tracking code), using the media URLs GHL returns:
   ```html
   <link rel="icon" type="image/png" sizes="48x48" href="GHL-URL-favicon-48.png">
   <link rel="apple-touch-icon" sizes="180x180" href="GHL-URL-apple-touch-icon-180.png">
   ```
3. **Verify:** view the source of https://ninja360.net/. The `rel="icon"` href should be the
   new file.

## 2. Homepage SEO meta (GHL → Home page → Settings → SEO Meta Data)

- **Title:** `Ninja 360 Digital Media | Get Found on Google in Kansas City`
- **Description:** `Ninja 360 Digital Media puts Kansas City businesses on the map with 360 tours, drone video, and Google Business Profile optimization. We put you on the M.A.P.`

Live today:
- Title: "Get Found on Google in Kansas City | Ninja-360 Local Visibility"
- Description: "We Help local Kansas City Small Business's Get found online through Ninja-360 puts…"

## 3. WebSite JSON-LD (Home page → Settings → Custom Code → Head)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ninja 360 Digital Media",
  "alternateName": ["Ninja 360", "Ninja360"],
  "url": "https://ninja360.net/"
}
</script>
```

The live homepage has no WebSite block yet. `seo/HEAD-SCHEMA.md`'s site-wide WebSite block now
matches this one. If that pack is already pasted site-wide, **replace** the old
`"name":"Ninja 360"` block rather than adding a second one.

## 4. Hyphen sweep: page titles and descriptions

"Ninja-360" is for legal and contract use only. In public copy it is always "Ninja 360 Digital
Media".

| Page | New title | New description (only where it changes) |
|---|---|---|
| /how-it-works | How It Works: The M.A.P. System \| Ninja 360 Digital Media | *(none live today; add:)* How Ninja 360 Digital Media's M.A.P. System works: Make your visuals, Amplify them on Google, Promote them every month. Local visibility for Kansas City businesses. |
| /pricing | Pricing: White, Brown & Black Belt \| Ninja 360 Digital Media | — |
| /services | Services: Drone, 360 Tours & Local SEO \| Ninja 360 Digital Media | Ninja 360 Digital Media services in Kansas City: drone photography, Google 360 virtual tours, Matterport, professional photo/video, and Google Business Profile optimization. |
| /work | Our Work \| Kansas City Visibility \| Ninja 360 Digital Media | See Ninja 360 Digital Media's work across Kansas City — restaurants, real estate, schools, parks, dental, chiropractic, and more. |
| /restaurants | 54th Street Grill Case Study \| Ninja 360 Digital Media | Ninja 360 Digital Media captured and published the visibility media for all 32 54th Street Grill locations across 4 states — 5.5M+ cumulative Google views. |
| /medical-and-dental | Dental & Medical Visibility \| Kansas City \| Ninja 360 Digital Media | — |
| /real-estate | Real Estate Virtual Tours \| Kansas City \| Ninja 360 Digital Media | — |
| /gyms-fitness | Gym & Fitness Virtual Tours \| Ninja 360 Digital Media | — |
| /hospitality | Hotel & B&B Virtual Tours \| Ninja 360 Digital Media | — |
| /about | About Ninja 360 Digital Media \| Our Three Philosophies | Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja 360 Digital Media and the three philosophies behind every Kansas City project. |

Notes:
- **/free-audit** and **/contact** serve **no `<title>` and no description**. Suggested:
  - Free Visibility Audit \| Ninja 360 Digital Media
  - Contact \| Ninja 360 Digital Media
- **Optional brand suffix.** /wellness-and-chiropractic, /automotive, /schools and
  /parks-and-recreation carry no hyphen, so the sweep doesn't touch them. They also carry no
  brand. Adding " \| Ninja 360 Digital Media" to those titles is optional.
- GHL fills `og:title` from the SEO title, so it follows automatically. Check one page's source
  after saving.

## 5. Search Console (do this LAST, after 1–4 and 6–7 are published)

1. Search Console → property `ninja360.net` → **URL Inspection** → `https://ninja360.net/`.
2. **Test live URL.** Confirm the new title, description and favicon link are in the rendered
   HTML.
3. **Request Indexing.**

Google says site name and favicon changes can take days to a few weeks after the recrawl.

**Done when:** a search for "ninja 360 digital media" shows the ninja mark, the site name
"Ninja 360 Digital Media" and the new snippet. Log a one-line wrap note in `_Inbox`.

## Ticket log

- **2026-11-16, LinkedIn: verified correct, no change made.** Tim checked the live company Page:
  - Name "Ninja 360 Digital Media"
  - Website https://ninja360.net
  - Location Gladstone, MO (HQ)
  - Tagline, description, logo and industry untouched.

  So the "Ninja-360 … founded 2015" in Google's AI summary is **not** coming from the current
  LinkedIn Page. It's a stale cached copy or another source. Don't attribute the hyphen to
  LinkedIn.
- **2026-11-16, GBP category change: ON HOLD** per Tim. BUILD does not touch GBP.

### Other live sources still saying "Ninja-360"
The 11/16 version of this section was wrong. It said to re-paste the repo's `pages/*.html` and
the `seo/HEAD-SCHEMA.md` block. **Don't.** The live GHL pages carry sections the repo doesn't
have, and the live schema has Offer and pricing entries the repo block lacks, so a re-paste would
delete both. **The fix is find-and-replace inside the existing GHL blocks**, listed below.

The non-hyphen findings from 11/16 still stand:
- LinkedIn is verified correct.
- `/llms.txt` is clean.
- "2015" on the site was a false positive.
- ninja-360.com 301s to ninja360.net (the double-slash target is still worth tidying).
- Directories, citations and socials are still unchecked; the browser pass should search
  `"Ninja-360" 2015`.

## 6. Hyphen find→replace in the live GHL blocks

Re-read from the live HTML on 2026-11-18 (all 17 sitemap pages). These are 129 unique phrases.
Counts from the 11/16 scan were about double, because GHL ships every block twice.

**Rule.** Use the full name "Ninja 360 Digital Media" in the business name, footer, schema name
and page titles. Elsewhere, "Ninja 360" is fine; it's a declared `alternateName`. The hyphen
stays only in legal and contract text (NINJA-360 DIGITAL MEDIA LLC), and none of that appears on
these pages.

**How.** Open each page in the GHL builder. In each custom-code block, find every row below and
replace it. Save and publish. Then confirm by viewing the source of the live page and searching
for `Ninja-360`; the only hits left should be inside `<!-- -->` comments (see 7).

- **Where = schema:** edit only that field inside the existing `<script type="application/ld+json">`.
  Do not replace the whole block.
- **Where = title/meta:** this is GHL → Page → Settings → SEO. Section 4 has the preferred
  wording; where the two differ, section 4 wins.
- **Where = text:** visible copy. **aria-label, alt and title attr:** inside the tag in the code
  block.

**/**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Get Found on Google in Kansas City \| Ninja-360 Local Visibility | Get Found on Google in Kansas City \| Ninja 360 Digital Media |
| title/meta | We Help local Kansas City Small Business's Get found online through Ninja-360 puts Kansas City businesses on the map — better visuals, a system that keeps you chosen We specialize in Virt | We Help local Kansas City Small Business's Get found online through Ninja 360 puts Kansas City businesses on the map — better visuals, a system that keeps you chosen We specialize in Virt |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| schema | Get Found on Google in Kansas City — Ninja-360 Visibility Reel | Get Found on Google in Kansas City — Ninja 360 Visibility Reel |
| schema | An inside look at Ninja-360 Digital Media — the Kansas City studio that helps local businesses get found and chosen on Google with better | An inside look at Ninja 360 Digital Media — the Kansas City studio that helps local businesses get found and chosen on Google with better |
| aria-label | Ninja-360 home | Ninja 360 home |
| aria-label | Ninja-360 hero | Ninja 360 hero |
| aria-label | Ninja-360 visibility reel — Kansas City | Ninja 360 visibility reel — Kansas City |
| text | Ninja-360 helps local businesses get found and chosen — with better visibility, stronger visuals, and a system that kee | Ninja 360 helps local businesses get found and chosen — with better visibility, stronger visuals, and a system that kee |
| aria-label | Brands Ninja-360 has shot for | Brands Ninja 360 has shot for |
| aria-label | Ninja-360 work showcase | Ninja 360 work showcase |

**/about**

| Where | Find | Replace with |
|---|---|---|
| title/meta | About Ninja-360 \| Our Three Philosophies \| Kansas City | About Ninja 360 Digital Media \| Our Three Philosophies \| Kansas City |
| title/meta | Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja-360 and the three philosophies behind every Kansas City project. | Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja 360 and the three philosophies behind every Kansas City project. |
| schema | Kansas City Skyline \u0026 Landmarks — Captured by Ninja-360 | Kansas City Skyline \u0026 Landmarks — Captured by Ninja 360 |
| schema | A look at Kansas City's skyline and landmarks captured by Ninja-360, the local-visibility studio that helps KC businesses get found and chosen on Google. | A look at Kansas City's skyline and landmarks captured by Ninja 360, the local-visibility studio that helps KC businesses get found and chosen on Google. |
| schema | About Ninja-360 \| Our Three Philosophies | About Ninja 360 Digital Media \| Our Three Philosophies |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| schema | Ninja-360 is Kansas City's local visibility system, built on three philosophies: put people on the map, fall in love wi | Ninja 360 is Kansas City's local visibility system, built on three philosophies: put people on the map, fall in love wi |
| schema | Google Certified Photographer, web developer, and Kansas City native. The three Ninja-360 philosophies are built from his experience. | Google Certified Photographer, web developer, and Kansas City native. The three Ninja 360 philosophies are built from his experience. |
| alt | Tim Petet, Ninja-360 founder, Kansas City | Tim Petet, Ninja 360 founder, Kansas City |
| text | Title: About Ninja-360 \| Our Three Philosophies \| Kansas City Page SEO -> Meta: Put them on the map. Tell the truth beautifull | Title: About Ninja 360 \| Our Three Philosophies \| Kansas City Page SEO -> Meta: Put them on the map. Tell the truth beautifull |
| text | Meta: Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja-360 and the three philosophies behind every Kansas City project. --> | Meta: Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja 360 and the three philosophies behind every Kansas City project. --> |
| text | About Ninja-360 | About Ninja 360 |
| title attr | Kansas City landmark captured by Ninja-360 | Kansas City landmark captured by Ninja 360 |
| text | ome in Kansas City, watching the businesses he grew up around lose to weaker competitors with better pixels. Ninja-360 is what he did about it. The three philosophies below aren't a branding exercise — they're his experien | ome in Kansas City, watching the businesses he grew up around lose to weaker competitors with better pixels. Ninja 360 is what he did about it. The three philosophies below aren't a branding exercise — they're his experien |
| alt | Ninja-360 badge: four-ninja media crew with cameras, microphone, and tools - the Kansas City visibility team | Ninja 360 badge: four-ninja media crew with cameras, microphone, and tools - the Kansas City visibility team |
| text | tive. The owners behind these storefronts are my neighbors — people who bet everything on their craft. Ninja-360 started as a hobby that Google put on the map, and being found turned it into a business. I know firsthand wh | tive. The owners behind these storefronts are my neighbors — people who bet everything on their craft. Ninja 360 started as a hobby that Google put on the map, and being found turned it into a business. I know firsthand wh |
| alt | Ninja-360 badge: ninja planting a flag beside a glowing map pin on a mountain summit - Put People on the Map | Ninja 360 badge: ninja planting a flag beside a glowing map pin on a mountain summit - Put People on the Map |
| text | “I was a photographer before I was a marketer. Ninja-360 was born from a fascination with virtual reality — technology that lets someone stand inside your story | “I was a photographer before I was a marketer. Ninja 360 was born from a fascination with virtual reality — technology that lets someone stand inside your story |
| alt | Ninja-360 badge: ninja camera crew with camera, blade, and drone - Fall in Love with the Client's True Story | Ninja 360 badge: ninja camera crew with camera, blade, and drone - Fall in Love with the Client's True Story |
| alt | Ninja-360 badge: ninja with crossed blades and throwing stars - Always Sharpen the Blade | Ninja 360 badge: ninja with crossed blades and throwing stars - Always Sharpen the Blade |
| text | Ninja-360 began as a hobby: Google virtual tours, born from a fascination with virtual reality. The work was good enoug | Ninja 360 began as a hobby: Google virtual tours, born from a fascination with virtual reality. The work was good enoug |
| alt | Ninja-360 badge: ninja beside a completed checklist under a shooting star - disciplined execution, honest reflection | Ninja 360 badge: ninja beside a completed checklist under a shooting star - disciplined execution, honest reflection |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/how-it-works**

| Where | Find | Replace with |
|---|---|---|
| title/meta | How It Works: The M.A.P. System \| Ninja-360 Kansas City | How It Works: The M.A.P. System \| Ninja 360 Digital Media |
| schema | What is Ninja-360 Digital Media | What is Ninja 360 Digital Media |
| schema | Tim Petet, founder of Ninja-360, explains what the local visibility system is and how it helps Kansas City businesses get found and chosen on | Tim Petet, founder of Ninja 360, explains what the local visibility system is and how it helps Kansas City businesses get found and chosen on |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | What is Ninja-360 Digital Media | What is Ninja 360 Digital Media |
| aria-label | Play the Ninja-360 explainer video | Play the Ninja 360 explainer video |
| alt | What is Ninja-360 Digital Media | What is Ninja 360 Digital Media |
| alt | Ninja-360 Make - White Belt | Ninja 360 Make - White Belt |
| alt | Ninja-360 Amplify - Brown Belt | Ninja 360 Amplify - Brown Belt |
| alt | Ninja-360 Promote - Black Belt | Ninja 360 Promote - Black Belt |
| text | Do I need a website to work with Ninja-360? | Do I need a website to work with Ninja 360? |
| text | What areas does Ninja-360 serve? | What areas does Ninja 360 serve? |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/pricing**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Pricing - White, Brown & Black Belt \| Ninja-360 Kansas City | Pricing - White, Brown & Black Belt \| Ninja 360 Digital Media |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| aria-label | Ninja-360 home | Ninja 360 home |
| alt | Ninja-360 White Belt | Ninja 360 White Belt |
| alt | Ninja-360 Brown Belt | Ninja 360 Brown Belt |
| alt | Ninja-360 Black Belt | Ninja 360 Black Belt |

**/services**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Services \| Drone, 360 Tours, Matterport & Local SEO \| Ninja-360 | Services \| Drone, 360 Tours, Matterport & Local SEO \| Ninja 360 Digital Media |
| title/meta | Ninja-360 services in Kansas City: drone photography, Google 360 virtual tours, Matterport, professional photo/video, a | Ninja 360 services in Kansas City: drone photography, Google 360 virtual tours, Matterport, professional photo/video, a |
| schema | Kansas City's Historic Western Auto Sign \u0026 Ferris Wheel — Drone, 360 \u0026 Video by Ninja-360 | Kansas City's Historic Western Auto Sign \u0026 Ferris Wheel — Drone, 360 \u0026 Video by Ninja 360 |
| schema | one, 360° and video footage of Kansas City's iconic Western Auto sign and downtown Ferris wheel, captured by Ninja-360 — a sample of the local-visibility media we produce for businesses. | one, 360° and video footage of Kansas City's iconic Western Auto sign and downtown Ferris wheel, captured by Ninja 360 — a sample of the local-visibility media we produce for businesses. |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Kansas City landmark captured by Ninja-360 - drone, 360 and video | Kansas City landmark captured by Ninja 360 - drone, 360 and video |
| alt | Kansas City landmark captured by Ninja-360 in drone, 360 and video | Kansas City landmark captured by Ninja 360 in drone, 360 and video |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/work**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Our Work \| Kansas City Visibility & Virtual Tours \| Ninja-360 | Our Work \| Kansas City Visibility & Virtual Tours \| Ninja 360 Digital Media |
| title/meta | See Ninja-360's work across Kansas City — restaurants, real estate, schools, parks, dental, chiropractic, and more. | See Ninja 360's work across Kansas City — restaurants, real estate, schools, parks, dental, chiropractic, and more. |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/restaurants**

| Where | Find | Replace with |
|---|---|---|
| title/meta | 54th Street Grill — 32-Location Case Study \| Ninja-360 | 54th Street Grill — 32-Location Case Study \| Ninja 360 Digital Media |
| title/meta | Ninja-360 captured and published the visibility media for all 32 54th Street Grill locations across 4 states — 5.5M+ cu | Ninja 360 captured and published the visibility media for all 32 54th Street Grill locations across 4 states — 5.5M+ cu |
| schema | 54th Street Grill \u0026 Bar Pflugerville, TX - FPV Drone Tour by Ninja-360 | 54th Street Grill \u0026 Bar Pflugerville, TX - FPV Drone Tour by Ninja 360 |
| schema | Five Four Draft House Zona Rosa - FPV Drone Tour by Ninja-360 | Five Four Draft House Zona Rosa - FPV Drone Tour by Ninja 360 |
| schema | Draft House in Zona Rosa, Kansas City - immersive virtual-tour video marketing for Kansas City businesses by Ninja-360. | Draft House in Zona Rosa, Kansas City - immersive virtual-tour video marketing for Kansas City businesses by Ninja 360. |
| schema | Five Four Draft House Independence, MO - FPV Drone Tour by Ninja-360 | Five Four Draft House Independence, MO - FPV Drone Tour by Ninja 360 |
| schema | our Draft House's reimagined lounge in Independence, MO - sports screens, tap walls and a laid-back vibe, by Ninja-360. | our Draft House's reimagined lounge in Independence, MO - sports screens, tap walls and a laid-back vibe, by Ninja 360. |
| schema | 54th Street Restaurant \u0026 Drafthouse Cedar Park, TX - FPV Drone Tour by Ninja-360 | 54th Street Restaurant \u0026 Drafthouse Cedar Park, TX - FPV Drone Tour by Ninja 360 |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| text | 54th Street Grill & Bar spans four states and five metros — and Ninja-360 captured, optimized, and published the visibility media for every single location. | 54th Street Grill & Bar spans four states and five metros — and Ninja 360 captured, optimized, and published the visibility media for every single location. |
| text | opens a Ninja-360 tour or film — 28 360° tours + 4 drone films across all 32 locations. Those listings have earned | opens a Ninja 360 tour or film — 28 360° tours + 4 drone films across all 32 locations. Those listings have earned |

**/medical-and-dental**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Dental & Medical Visibility \| Kansas City \| Ninja-360 | Dental & Medical Visibility \| Kansas City \| Ninja 360 Digital Media |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Atchison Family Dental 360 virtual tour - Ninja-360 | Atchison Family Dental 360 virtual tour - Ninja 360 |
| title attr | Marx Family Dental 360 virtual tour - Ninja-360 | Marx Family Dental 360 virtual tour - Ninja 360 |
| title attr | Atchison Family Dental video - Ninja-360 | Atchison Family Dental video - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/wellness-and-chiropractic**

| Where | Find | Replace with |
|---|---|---|
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Kobler Chiropractic 360 virtual tour - Ninja-360 | Kobler Chiropractic 360 virtual tour - Ninja 360 |
| title attr | Kobler – Meet the Team video - Ninja-360 | Kobler – Meet the Team video - Ninja 360 |
| title attr | Dr. Jeremy Kobler, DC – Owner video - Ninja-360 | Dr. Jeremy Kobler, DC – Owner video - Ninja 360 |
| title attr | Meet Dr. Brian Frame video - Ninja-360 | Meet Dr. Brian Frame video - Ninja 360 |
| title attr | New Location – Overland Park video - Ninja-360 | New Location – Overland Park video - Ninja 360 |
| title attr | Massage Services video - Ninja-360 | Massage Services video - Ninja 360 |
| title attr | Adjustments While Pregnant video - Ninja-360 | Adjustments While Pregnant video - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/real-estate**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Real Estate Virtual Tours \| Kansas City \| Ninja-360 | Real Estate Virtual Tours \| Kansas City \| Ninja 360 Digital Media |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Residential real estate 360 virtual tour in Kansas City - Ninja-360 | Residential real estate 360 virtual tour in Kansas City - Ninja 360 |
| title attr | Real estate 360 virtual tour collection in Kansas City - Ninja-360 | Real estate 360 virtual tour collection in Kansas City - Ninja 360 |
| title attr | Real estate Matterport walkthrough in Kansas City - Ninja-360 | Real estate Matterport walkthrough in Kansas City - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/automotive**

| Where | Find | Replace with |
|---|---|---|
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Karman Kar Show video - Ninja-360 | Karman Kar Show video - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/gyms-fitness**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Gym & Fitness Virtual Tours \| Kansas City \| Ninja-360 | Gym & Fitness Virtual Tours \| Kansas City \| Ninja 360 Digital Media |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/hospitality**

| Where | Find | Replace with |
|---|---|---|
| title/meta | Hotel & B&B Virtual Tours \| Kansas City \| Ninja-360 | Hotel & B&B Virtual Tours \| Kansas City \| Ninja 360 Digital Media |
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Mira Flores Air BnB 360 virtual tour - Ninja-360 | Mira Flores Air BnB 360 virtual tour - Ninja 360 |
| title attr | Chateau Shakespeare 360 virtual tour - Ninja-360 | Chateau Shakespeare 360 virtual tour - Ninja 360 |
| title attr | Marketing for Bed & Breakfasts video - Ninja-360 | Marketing for Bed & Breakfasts video - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/schools**

| Where | Find | Replace with |
|---|---|---|
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | NKC Early Education Center 360 virtual tour - Ninja-360 | NKC Early Education Center 360 virtual tour - Ninja 360 |
| title attr | MU Dorm – Wolpers Hall 360 virtual tour - Ninja-360 | MU Dorm – Wolpers Hall 360 virtual tour - Ninja 360 |
| title attr | Sky View Over William Jewell College video - Ninja-360 | Sky View Over William Jewell College video - Ninja 360 |
| title attr | Nixa High School Stadium video - Ninja-360 | Nixa High School Stadium video - Ninja 360 |
| title attr | Marshall Intermediate Grand Opening video - Ninja-360 | Marshall Intermediate Grand Opening video - Ninja 360 |
| title attr | Marshall Intermediate – Drop-off video - Ninja-360 | Marshall Intermediate – Drop-off video - Ninja 360 |
| title attr | Spainhower Primary – Drop-off video - Ninja-360 | Spainhower Primary – Drop-off video - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/parks-and-recreation**

| Where | Find | Replace with |
|---|---|---|
| schema | Ninja-360 Digital Media | Ninja 360 Digital Media |
| title attr | Hodge Park 360 virtual tour - Ninja-360 | Hodge Park 360 virtual tour - Ninja 360 |
| title attr | Shoal Creek Park 360 virtual tour - Ninja-360 | Shoal Creek Park 360 virtual tour - Ninja 360 |
| title attr | Parade of Hearts 360 virtual tour - Ninja-360 | Parade of Hearts 360 virtual tour - Ninja 360 |
| title attr | Parade of Hearts – Pt. 2 360 virtual tour - Ninja-360 | Parade of Hearts – Pt. 2 360 virtual tour - Ninja 360 |
| title attr | Parade of Hearts – Pt. 3 360 virtual tour - Ninja-360 | Parade of Hearts – Pt. 3 360 virtual tour - Ninja 360 |
| title attr | CPKC Stadium – Cinematic Reel video - Ninja-360 | CPKC Stadium – Cinematic Reel video - Ninja 360 |
| text | © Ninja-360 Digital Media. All rights reserved. | © Ninja 360 Digital Media. All rights reserved. |

**/free-audit**

| Where | Find | Replace with |
|---|---|---|
| aria-label | Ninja-360 home | Ninja 360 home |

**/contact**

| Where | Find | Replace with |
|---|---|---|
| aria-label | Ninja-360 home | Ninja 360 home |
| text | Contact Ninja-360 | Contact Ninja 360 |
| title attr | Contact Us — Ninja-360 | Contact Us — Ninja 360 |


## 7. Leftovers found in the same pass

1. **Broken images on /about (live now).** The five philosophy badge images still have
   placeholder sources:
   - `REPLACE-GHL-URL-ninja360-badge-crew`
   - `…-map`
   - `…-camera-crew`
   - `…-blades`
   - `…-checklist`

   Visitors see broken images. Upload the five badge files to GHL Media and paste each URL into
   its `src`, or remove the `<img>` tags. (Their alt text is in the /about rows above.)
2. **Paste instructions left in the page source.** These sit inside `<!-- -->` comments, so they
   don't render, but anyone viewing the source, Google included, can read them:
   - the "GHL SEO Title: … Meta: …" notes on /services, /medical-and-dental, /real-estate,
     /gyms-fitness and /hospitality
   - the "Page SEO -> Title:" and `YOUR-GHL-HEADSHOT-URL` note on /about
   - a commented-out VideoObject template on /services whose name and description still read
     "REPLACE - …"

   Delete these comments while each block is open. Because they're comments, Google ignores
   them as structured data.
