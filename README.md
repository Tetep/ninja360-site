# ninja360-site

Source of truth (the "build kit") for **ninja360.net**.
Nothing here is live. Pages are built/versioned here, then pasted into the
GoHighLevel Website Builder, which hosts the live site.

## The three systems
- **GitHub (this repo):** page code, design system, image library, SEO files, redirect map, portfolio data.
- **GoHighLevel:** hosts ninja360.net + runs the audit funnel, forms, CRM.
- **Cloudflare:** DNS, 301 redirects from the old site, caching.

## Workflow (per page)
1. Build/edit the page HTML in `/pages` (use sections from `/components`).
2. In GHL: Sites -> Websites -> add page -> drop a **Custom Code / HTML** element -> paste the page HTML.
3. Shared CSS goes once in GHL site custom CSS (source: `/styles/ninja360.css`). JSON-LD goes in the page **Head** code (source: `/seo/schema`).
4. Set the page SEO (title, meta, slug, social image) and every image's **alt text**.
5. Publish -> map to the ninja360.net path -> submit `sitemap.xml` in Google Search Console.
6. When the new page is live, point the matching old `ninja-360.com` URL at it with a 301 in Cloudflare (`/data/redirects.csv`).

## Folder map
- `/pages` - one HTML file per page (paste targets)
- `/components` - reusable sections (nav, hero, cta, work-card, footer, video-embed)
- `/components/video-embed.html` - reusable click-to-play YouTube block (hero + card variants)
- `/styles/ninja360.css` - design system
- `/assets/img` - optimized WebP (named per `/seo/image-naming-SOP.md`)
- `/assets/img-src` - originals pulled from ninja-360.com
- `/data/portfolio.json` - ALL work as structured data (drives the work cards)
- `/data/videos.json` - ALL embedded YouTube videos: id -> page, location, schema fields (SINGLE SOURCE OF TRUTH)
- `/data/redirects.csv` - old URL -> new URL -> 301
- `/seo/sitemap.xml` - planning master (mirror of the live GHL sitemap)
- `/seo/image-naming-SOP.md` - image rename + alt-text rules
- `/seo/schema/` - JSON-LD templates
- `/seo/schema/SCHEMA-MAP.md` - which JSON-LD type belongs on each page

## Video system
- Videos use the facade in `/components/video-embed.html` (thumbnail -> loads the
  YouTube iframe only on click; keeps Core Web Vitals fast). Two variants: HERO
  (large, in `.n-hero`) and CARD (grid cell matching `.wc`).
- Every embedded video is logged in `/data/videos.json` and paired with a
  `VideoObject` JSON-LD block in that page's GHL **Head** (`/seo/schema/`).
- Live placements: Services hero + About hero (KC-landmark videos),
  Restaurants video grid (4 FPV drone tours).
- `duration` is left blank in the schema until video lengths are confirmed
  (recommended field, schema is valid without it).

## Known issues
- `pages/home.html` is truncated: the CSS cuts off mid-rule (~`padding:3px`)
  and jumps to the footer, so the map/steps middle section is missing. Rebuild
  before pasting home.

## Rules
- Never retire the WordPress site until its 301s are live and resolving.
- Build on a staging/unlisted slug; only swap the live route when the page is done.
- Keep proven old keywords in each new page's **title + H1**, even when the slug is cleaner.
- One H1 per page. Every image alt-tagged. WebP < 200KB.

## Brand / NAP (use everywhere - pick ONE of each)
- Phone: **(844) 360-6465**
- Site: **ninja360.net**
- Positioning: local **visibility** system - "get found and chosen on Google." NOT "virtual tour company."
