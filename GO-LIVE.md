# Ninja360.net — Go-Live Runbook

Work top to bottom. Phases 0–2 make it live. 3–6 verify, enrich, and protect SEO.
Video schema is deliberately LAST — you fill it after you can see the videos on the live page.

---

## PHASE 0 — Commit everything (5 min)
GitHub becomes the single source of truth (llms.txt, schema pack, video+FAQ on how-it-works).

```
cd C:\Users\tpete\Documents\ninja360-site
git add -A
git commit -m "Add llms.txt, head-schema pack, video+FAQ on how-it-works"
git push
```

---

## PHASE 1 — Publish all 15 pages in GHL (the main work)
Funnel: **Ninja 360 Digital Media** (`PQKNMX7MrLGXz9cD7CuQ`).

**For EACH page:**
1. Create/open the funnel step → set the **slug** (table below).
2. Drop a **Custom JS/HTML** element → paste the page **BODY** (everything from `<style>` down; skip the head-schema comment block at the very top).
3. **Page Settings → Custom Code → Head** → paste the page's **non-video** schema, uncommented:
   - **Every page:** the `Organization + WebSite` block from `seo/HEAD-SCHEMA.md`.
   - **Plus the page's own:** Person (about) · Service (services) · FAQPage (how-it-works).
   - **SKIP the VideoObject blocks for now** — they contain `REPLACE-` placeholders and would fail validation. The video heroes still render and play without them. We add video schema in Phase 4.
4. Set **SEO Title + Meta** (from the page's top comment or `PUBLISH-CHECKLIST.html`).
5. **Uncheck Header and Footer** in step settings.
6. **Save → Publish.**

**Publish order:**
1. **Pricing** (`/pricing`) — RE-PASTE; the live one is stale (no nav/footer, dead `/free-audit` buttons).
2. **Home** (`/`) — paste new version, set the SEO title (kills the "Sliders Preview" title).
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

## PHASE 2 — Host llms.txt at ninja360.net/llms.txt (Cloudflare, 10 min)
GHL can't serve a raw file there. Cloudflare fronts your DNS, so use a Worker:

1. Cloudflare → **Workers & Pages → Create Worker** → name it `llms-txt` → paste:
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
3. Worker → **Settings → Triggers → Add route:** `ninja360.net/llms.txt`.
4. Visit `https://ninja360.net/llms.txt` → returns the text. (Edit llms.txt in the repo anytime; Worker serves the latest.)

---

## PHASE 3 — Verify (you can now SEE the videos)
- All 15 URLs load, styled, **nav + footer present**, audit buttons scroll to the form.
- Videos: thumbnail with orange play button → click loads the player. Note which video plays on each page — you'll need this in Phase 4.
- Run the **FAQ (how-it-works) and About** pages through Google's **Rich Results Test** → valid FAQ / Person.

---

## PHASE 4 — Fill the video schema (now that you've seen them live)
For each video page, look at the live video, then fill the VideoObject head block and paste it into Page Settings → Custom Code → Head:

| Page | Video ID | Fill in |
|---|---|---|
| services | `VmOPhGmy2uk` | name, description, uploadDate, duration (which KC landmark + when) |
| about | `SxluMw0OGfo` | same |
| how-it-works | `hAZtFQ_5kOk` (placeholder) | **first swap to your real explainer reel** in the hero (`data-yt` + 2 image IDs) and the schema; then fill name/description/date |
| work-restaurants | `v87kC9x-F04`, `aZW2q3-NLwc`, `QVYWWu5k4Ss`, `EHRUOzmVtyA` | duration on all 4; uploadDate on the first |

Duration format = `PT#M#S` (a 2:30 video = `PT2M30S`). Then re-run Rich Results Test → valid Video items.
> Tell me the videos once they're live and I'll write the exact filled schema for you — no guessing.

---

## PHASE 5 — Point the 301 redirects (Cloudflare, only after Phase 3 passes)
Use `data/redirects.csv`. Cloudflare → **Rules → Redirect Rules**, 301 each old `ninja-360.com/...` URL to its new `ninja360.net/...` target. Confirm each resolves.

---

## PHASE 6 — Search Console + retire old site
1. Submit `ninja360.net/sitemap.xml` in Google Search Console.
2. Use **Change of Address** (ninja-360.com → ninja360.net).
3. Only after all 301s resolve for a few days: take down the old WordPress site.

---

## Still-open content (non-blocking)
- Tim's headshot on `/about` (upload to GHL media, drop into the marked box).
- KPI / Key-Person-of-Influence content pass for About + How-It-Works (run the `ninja360-kpi-builder` skill).
- Matterport / automotive / gym client tours when available.
