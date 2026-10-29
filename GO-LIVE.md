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
   - **SKIP the VideoObject blocks for now** — they contain `REPLACE-` placeholders and would fail validation. The video heroes still render and play without them. We add video schema in Phase 4[...]
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

## PHASE 2 — Crawl files at the root: robots.txt · llms.txt · sitemap.xml (Cloudflare Worker)
GHL can't serve raw files at the root, so a Cloudflare Worker (`ninja360-llms`) intercepts the
three paths and returns the repo copy from `main`. **Source of truth for the Worker code:**
`cloudflare/ninja360-llms.worker.js` — paste that file, don't retype it.

Files it serves (all from branch `main`):

| URL | Repo file |
|---|---|
| `/robots.txt` | `robots.txt` |
| `/llms.txt` | `llms.txt` |
| `/sitemap.xml` | `seo/sitemap.xml` |
| `/r/cr-2026-07` | `contract-route.html` (contract route book, Jul 2026 — keep) |

1. Cloudflare → **Workers & Pages → `ninja360-llms`** (create it if missing) → paste
   `cloudflare/ninja360-llms.worker.js` → **Deploy**.
2. Worker → **Settings → Triggers → Routes** — bind **six** crawl routes (apex and www for each):
   `ninja360.net/robots.txt` · `www.ninja360.net/robots.txt` · `ninja360.net/llms.txt` ·
   `www.ninja360.net/llms.txt` · `ninja360.net/sitemap.xml` · `www.ninja360.net/sitemap.xml`
   — **plus two more for the contract route book** (never existed; the Jul 2026 handler was
   unreachable until these are added): `ninja360.net/r/cr-2026-07` · `www.ninja360.net/r/cr-2026-07`.
   **Eight routes total.** Set **Compatibility date** on the Worker (Settings → Runtime) — it was blank.
3. **DNS → Records:** apex `ninja360.net` and `www` must both be **Proxied (orange cloud)**.
   Grey/DNS-only = the Worker never runs and GHL's own empty files win.
4. **Caching → Purge Cache → Purge Everything.**
5. Verify each URL on both hosts. Good = real content with header `x-ninja360-source:
   github:main/...`. The Worker returns **503** (not an empty 200) when the repo file is
   missing or empty — that's deliberate so a regression is visible, not silent.

### ROOT CAUSE of the empty-crawl-files regressions (found 2026-10-29)
**The apex `ninja360.net` was an A record → `162.159.140.166` (GHL's Cloudflare-for-SaaS IP,
labelled "pointing to a service provider" in the Cloudflare UI).** On that path the request is
handed to GHL's Cloudflare config *before* this zone's Worker routes fire, so the Worker never
ran on the apex — only on `www` (CNAME → `sites.ludicrous.cloud`). Proxied/orange was never the
problem; both records were orange the whole time.

**Fix applied 2026-10-29:** apex converted in place to **CNAME → `sites.ludicrous.cloud`, Proxied**
(Cloudflare flattens it). Same path as `www`. Homepage unchanged (200, same byte count).
Rollback value if ever needed: A `ninja360.net` → `162.159.140.166`, Proxied.

**Rule:** the apex must stay a proxied CNAME to `sites.ludicrous.cloud`. If anyone (GHL support,
a domain wizard, a re-add) puts the A record back, the Worker silently stops on the apex and
GHL's empty `robots.txt` / 107-byte `sitemap.xml` come back.

### Cloudflare account state (2026-10-29, after the fix)
| Worker | Routes | Status |
|---|---|---|
| `ninja360-llms` | 8 — apex + `www` × `/robots.txt` `/llms.txt` `/sitemap.xml` `/r/cr-2026-07` | **Live on `cloudflare/ninja360-llms.worker.js`**, compat date 2026-10-01. All 8 paths verified 200 + `x-ninja360-source`. |
| `ninja360-redirect` | `acanorthland.com/*`, `www.acanorthland.com/*` | Live — 302 everything to `northlandaca.com` (ACA Northland client) |
| `ninja360-events-proxy` | none | Dead. iCal → JSON events feed built for 1894.tours / acanorthland.com. Keep until ACA Northland confirms it's not needed. |
| `_gh_fetch_helper` | — | **Deleted 2026-10-29** (was an open fetch proxy with no routes). |

Verified sizes (match the repo files exactly): `robots.txt` 175 B · `llms.txt` 3,885 B ·
`sitemap.xml` 1,690 B / 17 `<loc>` · `contract-route.html` 196,542 B.

Zone notes (ninja360.net): apex **CNAME** → `sites.ludicrous.cloud` (proxied, see root cause), `www` CNAME → same, `audits.` → Pages, `livesmart.` → Pages, `app.` + `links.` → GHL white-label (DNS-only, correct). Redirect ruleset "ninja360.net slug fixes" exists but was unreadable with the API token — read it in the dashboard. Duplicate `cf2024-1._domainkey` DKIM TXT removed 2026-10-29 (kept the Email Routing–managed split record; the manual single-string copy was the duplicate).

Zone notes (ninja-360.com): apex A → `194.163.46.197` **proxied** — that is a real origin IP, so the 301s in the "default" redirect ruleset are the only thing keeping the dead old site from answering. Ruleset was unreadable with the API token; confirm in the dashboard that it covers every row in `data/redirects.csv` (18 rows), then retire the origin box. `mail.ninja-360.com` CNAME → `ghs.googlehosted.com` is proxied; Google recommends DNS-only for that record — flip to grey.

### Regression checklist — "robots/llms/sitemap come back empty" (seen Jul 2026, Oct 2026)
Work top to bottom; stop at the first thing that's wrong.
- [ ] **DNS: is the apex a CNAME → `sites.ludicrous.cloud`?** An A record to a `162.159.x.x` IP
      bypasses the Worker on the apex even when orange (root cause, above). `www` must be the
      same CNAME. Both proxied.
- [ ] Worker routes: all six present and pointing at `ninja360-llms`? (Routes silently drop when
      the zone or Worker is recreated.)
- [ ] Worker code is the current `cloudflare/ninja360-llms.worker.js` — check **Last modified** on the
      Worker; if it predates the repo file, it was never deployed. (Oct 29: still the Jun 28 build,
      which only handled `/llms.txt`, so robots + sitemap fell through to GHL = empty.)
- [ ] Repo file exists **on `main`** and is non-empty (`robots.txt` was missing from the repo
      entirely until 2026-10-26).
- [ ] Purge cache, then `curl -sI https://ninja360.net/sitemap.xml` → look for `x-ninja360-source`.
- [ ] Only after `/sitemap.xml` serves real `<loc>` entries: submit it in Google Search Console.
      **Hold GSC submission while it is empty** — an empty sitemap teaches Google there are no URLs.

> `seo/sitemap.xml` lists nested `/work/<industry>` slugs. If GHL ended up on the flattened
> `work-<industry>` slugs (see the Phase 1 note), fix the sitemap **before** submitting it.

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
3. The old Wix site at ninja-360.com is already not live — nothing to take down; just confirm all 301s resolve and the Change of Address is submitted.

---

## Still-open content (non-blocking)
- Tim's headshot on `/about` (upload to GHL media, drop into the marked box).
- KPI / Key-Person-of-Influence content pass for About + How-It-Works (run the `ninja360-kpi-builder` skill).
- Matterport / automotive / gym client tours when available.
