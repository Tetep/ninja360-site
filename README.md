# ninja360-site

Source of truth (the "build kit") for **ninja360.net**.
Nothing here is live. Pages are built/versioned here, then pasted into the
GoHighLevel Website Builder, which hosts the live site.

## The three systems
- **GitHub (this repo):** page code, design system, image library, SEO files, redirect map, portfolio data.
- **GoHighLevel:** hosts ninja360.net + runs the audit funnel, forms, CRM.
- **Cloudflare:** DNS, 301 redirects from the old site, caching, and the **Google Workspace email DNS** (MX/SPF/DKIM/DMARC) for the legacy `ninja-360.com` domain — see `EMAIL-FIX.md`.

## Workflow (per page)
1. Build/edit the page HTML in `/pages` (use sections from `/components`).
2. In GHL: Sites -> Websites -> add page -> drop a **Custom Code / HTML** element -> paste the page HTML.
3. Shared CSS goes once in GHL site custom CSS (source: `/styles/ninja360.css`). JSON-LD goes in the page **Head** code (source: `/seo/schema`).
4. Set the page SEO (title, meta, slug, social image) and every image's **alt text**.
5. Publish -> map to the ninja360.net path -> submit `sitemap.xml` in Google Search Console.
6. When the new page is live, point the matching old `ninja-360.com` URL at it with a 301 in Cloudflare (`/data/redirects.csv`).

## Folder map
- `/pages` - one HTML file per page (paste targets)
- `/components` - reusable sections (nav, hero, cta, work-card, footer)
- `/styles/ninja360.css` - design system
- `/assets/img` - optimized WebP (named per `/seo/image-naming-SOP.md`)
- `/assets/img-src` - originals pulled from ninja-360.com
- `/data/portfolio.json` - ALL work as structured data (drives the work cards)
- `/data/redirects.csv` - old URL -> new URL -> 301 (ninja-360.com + ninja360.co, plus old and duplicate ninja360.net paths; **ninja360.org is intentionally NOT redirected** — it hosts the internal "Ninja-360 Run Sheet"). The ninja360.net rows are Cloudflare Single Redirect rules on that zone, and the last rule is a catch-all: any `/<step>-page` path (the duplicate GHL serves at each page's builder path, client pages included) 301s to `/<step>`. Never give a real GHL step a path that ends in `-page`.
- `/seo/sitemap.xml` - **served live** at ninja360.net/sitemap.xml via the Cloudflare Worker. Industry pages live at the root (`/restaurants`, `/medical-and-dental`, `/wellness-and-chiropractic`, `/parks-and-recreation`, ...), not `/work/<x>`.
- `/seo/image-naming-SOP.md` - image rename + alt-text rules
- `/seo/schema/` - JSON-LD templates

## Rules
- The old Wix site at `ninja-360.com` is not live (domain is email-only); keep the 301 map so any still-indexed old URLs resolve to ninja360.net.
- Build on a staging/unlisted slug; only swap the live route when the page is done.
- Keep proven old keywords in each new page's **title + H1**, even when the slug is cleaner.
- One H1 per page. Every image alt-tagged. WebP < 200KB.

## Brand / NAP (use everywhere - pick ONE of each)
Locked card: Drive `Ninja-360 — Business Identity Standard + Platform Punchlist` (FACE, 2026-10-27).
- Public name: **Ninja 360 Digital Media** (no hyphen). Legal entity only: NINJA-360 DIGITAL MEDIA LLC.
- Location: **Gladstone, MO** — service-area business (Option B, 2026-11-14): city/state only on every public surface (footer, schema, `/about`, `llms.txt`); no street address, no ZIP.
- Phone: **(844) 360-6465** · Email: **info@ninja360.net** · Handle: **@ninja360net**
- Site: **ninja360.net**
- Phone rule (corrected 2026-11-15): advertising uses the vanity **Call 844-360-NINJA** (it dials correctly like 1-800-MATTRESS — the switch routes on the first 10 digits and drops the extra letter). Only tappable/machine-read surfaces (tel: links, schema telephone) use the bare digits **1-844-360-6465**.
- - Brand orange **#FF6A00** (charcoal #31343B). `styles/ninja360.css` + page CSS still use #FF8D2D — drift, fix to #FF6A00.
  - - Listing category: primary **Drone service**; secondary Aerial photographer / Video production service / Photographer / Marketing agency / Internet marketing service (10/19 decision; the 10/27 card drifted — Ter not Terrace, no Commercial photographer)
- Positioning: local **visibility** system - "get found and chosen on Google." NOT "virtual tour company."
