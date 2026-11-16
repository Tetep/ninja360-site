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

## 5. Search Console (last, after 1–4 are published)

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

### Other live sources still saying "Ninja-360" (read-only scan, 2026-11-16, not changed)

1. **The live site body.** This is the biggest source Google can see. Hyphen counts in the
   rendered HTML, all 17 sitemap pages:
   - 52 on /about, 29 on /how-it-works, 28 on the homepage, 28 on /services
   - every other page has 3–26
   - The repo's page sources are already clean, so GHL is running older pasted copy.
     Re-pasting the current `pages/*.html` fixes the visible copy.
2. **The live JSON-LD names the entity "Ninja-360 Digital Media".** The homepage's
   ProfessionalService block (`#org`) still has the hyphen. That is the name Google's
   knowledge graph and AI summary read. Re-paste the site-wide block from `seo/HEAD-SCHEMA.md`
   (it says "Ninja 360 Digital Media"). **This fix matters as much as the title.**
3. **aria-labels and alt text in the GHL code blocks**, e.g. "Ninja-360 home", "Brands
   Ninja-360 has shot for", "Ninja-360 work showcase", "Ninja-360 visibility reel". The
   re-paste in (1) covers these.
4. **Not a source:**
   - **`/llms.txt`**: 0 hyphens.
   - **"2015" on the live site**: false positive. It's a number inside GHL's internal data
     array, not a "founded 2015" claim.
   - **ninja-360.com and www**: they 301 to ninja360.net, so no duplicate site is live. The
     redirect target has a double slash (`https://ninja360.net//`). It still lands on the
     homepage, but it's worth tidying in Cloudflare.
5. **Not checked (outside BUILD's reach):** directories and citations, the GBP description,
   Facebook/Instagram/YouTube/TikTok "About" text, Crunchbase-style profiles, and old press
   mentions. Any of these could be the "founded 2015" source. The browser pass should search
   for `"Ninja-360" 2015`.
