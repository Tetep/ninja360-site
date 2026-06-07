# Ninja360.net — Go-Live Runbook

Work top to bottom. Don't reorder. Phases 0–3 make it live; 4–6 protect SEO.

---

## PHASE 0 — Commit everything (5 min)
GitHub becomes the single source of truth (includes llms.txt, schema pack, how-it-works video+FAQ).

```
cd C:\Users\tpete\Documents\ninja360-site
git add -A
git commit -m "Add llms.txt, head-schema pack, video+FAQ on how-it-works"
git push
```

---

## PHASE 1 — Fill the video placeholders (10 min, BEFORE publishing those pages)
Four pages have a VideoObject block in the head + a video hero. Fill the REPLACE fields and (for how-it-works) swap the placeholder video:

| Page | Video ID | Fill in the head schema |
|---|---|---|
| services | `VmOPhGmy2uk` | name, description, uploadDate (which KC landmark + date); duration optional |
| about | `SxluMw0OGfo` | same |
| how-it-works | `hAZtFQ_5kOk` (placeholder) | **swap to your real explainer reel** in BOTH the hero (`data-yt` + 2 image IDs) and the head VideoObject; then fill name/description/date |
| work-restaurants | 4 videos | duration for all 4; uploadDate for `v87kC9x-F04` |

Duration format = `PT#M#S` (e.g. a 2:30 video = `PT2M30S`).

---

## PHASE 2 — Publish all 15 pages in GHL (the main work)
Funnel: **Ninja 360 Digital Media** (`PQKNMX7MrLGXz9cD7CuQ`).

**For EACH page:**
1. Create/open the funnel step → set the **slug** (table below).
2. Drop a **Custom JS/HTML** element → paste the page **BODY** (everything from `<style>` down; skip the head-schema comment block).
3. **Page Settings → Custom Code → Head** → paste the page's schema, **uncommented**:
   - **Every page:** the `Organization + WebSite` block from `seo/HEAD-SCHEMA.md`.
   - **Plus the page's own:** Person (about) · Service (services) · FAQPage (how-it-works) — from `HEAD-SCHEMA.md`.
   - **Plus VideoObject** (services/about/how-it-works/work-restaurants) — from that page file's top comment.
4. Set **SEO Title + Meta** (from the page's top comment or `PUBLISH-CHECKLIST.html`).
5. **Uncheck Header and Footer** in step settings.
6. **Save → Publish.**

**Publish order:**
1. **Pricing** (`/pricing`) — RE-PASTE; the live one is stale (no nav/footer, dead buttons).
2. **Home** (`/`) — paste new version, set SEO title (kills "Sliders Preview").
3. Then: how-it-works · services · about · work (hub) · work-restaurants · the 8 other verticals.

| Page | Slug (flat fallback if GHL rejects the slash) |
|---|---|
| Home | `/` |
| How It Works | `/how-it-works` |
| Services | `/services` |
| Pricing | `/pricing` |
| About | `/about` |
| Work hub | `/work` |
| Restaurants | `/work/restaurants`  (else `work-restaurants`) |
| Real Estate | `/work/real-estate` |
| Automotive | `/work/automotive` |
| Gyms & Fitness | `/work/gyms-fitness` |
| Hospitality | `/work/hospitality` |
| Schools | `/work/schools` |
| Parks & Events | `/work/parks-events` |
| Medical & Dental | `/work/medical-dental` |
| Wellness & Chiropractic | `/work/wellness-chiro` |

> Your FIRST `/work/` page tells you whether GHL accepts the nested slash. If not, flatten ALL work pages to `work-xxxxx` and update those rows in `data/redirects.csv` to match.

---

## PHASE 3 — Host llms.txt at ninja360.net/llms.txt (Cloudflare, 10 min)
GHL can't serve a raw file there. Cloudflare fronts your DNS, so use a Worker:

1. Cloudflare dashboard → **Workers & Pages → Create Worker** → name it `llms-txt` → paste:
```js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname.toLowerCase() === "/llms.txt") {
      const r = await fetch("https://raw.githubusercontent.com/Tetep/ninja360-site/main/llms.txt");
      return new Response(await r.text(), {
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" }
      });
    }
    return fetch(request);
  }
}
```
2. **Deploy.**
3. Worker → **Settings → Triggers → Add route:** `ninja360.net/llms.txt` (zone: ninja360.net).
4. Visit `https://ninja360.net/llms.txt` → should return the text. (Edit llms.txt in the repo anytime; the Worker serves the latest.)

---

## PHASE 4 — Verify (before touching redirects)
- All 15 URLs load, styled, **nav + footer present**, audit buttons scroll to the form.
- Videos: thumbnail with orange play button → click loads the player.
- Run the **video / FAQ / About** pages through Google's **Rich Results Test** → confirm valid Video / FAQ / Person items.
- `https://ninja360.net/llms.txt` resolves.

---

## PHASE 5 — Point the 301 redirects (Cloudflare, only after Phase 4 passes)
Use `data/redirects.csv`. In Cloudflare → **Rules → Redirect Rules** (or Bulk Redirects), 301 each old `ninja-360.com/...` URL to its new `ninja360.net/...` target. Confirm each resolves.

---

## PHASE 6 — Search Console + retire old site
1. Submit the GHL sitemap (`ninja360.net/sitemap.xml`) in Google Search Console.
2. Use **Change of Address** (ninja-360.com → ninja360.net).
3. Only after all 301s resolve for a few days: take down the old WordPress site.

---

## Still-open content (non-blocking)
- Tim's headshot on `/about` (upload to GHL media, drop into the marked box).
- KPI / Key-Person-of-Influence content pass for About + How-It-Works (run the `ninja360-kpi-builder` skill).
- Matterport / automotive / gym client tours when available.
