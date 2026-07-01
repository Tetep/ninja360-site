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
- `/data/redirects.csv` - old URL -> new URL -> 301
- `/seo/sitemap.xml` - planning master (mirror of the live GHL sitemap)
- `/seo/image-naming-SOP.md` - image rename + alt-text rules
- `/seo/schema/` - JSON-LD templates

## Rules
- The old Wix site at `ninja-360.com` is not live (domain is email-only); keep the 301 map so any still-indexed old URLs resolve to ninja360.net.
- Build on a staging/unlisted slug; only swap the live route when the page is done.
- Keep proven old keywords in each new page's **title + H1**, even when the slug is cleaner.
- One H1 per page. Every image alt-tagged. WebP < 200KB.

## Brand / NAP (use everywhere - pick ONE of each)
- Phone: **(844) 360-6465**
- Site: **ninja360.net**
- Positioning: local **visibility** system - "get found and chosen on Google." NOT "virtual tour company."
