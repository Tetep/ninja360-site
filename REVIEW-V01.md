# Ninja-360 Website — Code & Architecture Review V01
_Reviewer: Claude Code (Murdoch). June 3, 2026. Scope: live ninja360.net + 14 section files in Cowork outputs + the `ninja360-site` repo._

---

## TL;DR — the one thing to internalize

**The site isn't broken. Your deployment is behind your code, and two pages are from an older design generation.**

- Half the "whacked out" bugs you're seeing live (the gray letterbox frame, the sideways scroll) are **already fixed in the section files sitting in your outputs folder.** They were generated correctly; they were just never re-pasted into GHL. The live page is running older pastes.
- The genuinely off-brand pages (pricing, and the empty orange box) are **leftover OLD-generation sections** that the new dark-cinematic replacements (`ninja360-home-problem-solution.html`, etc.) were built to replace but haven't been swapped in yet.
- Your `ninja360-site` repo has the **right structure** (global CSS, components, pages, redirects, sitemap) but its `styles/ninja360.css` is the **old light design** — system fonts, light cards, and the wrong orange. Deploying it as-is would *regress* the look. It needs to be rebuilt to match the live dark system before it can be the source of truth.

So the work ahead is mostly **reconciliation and re-deployment**, not rebuilding. That's a much smaller, calmer job than it feels like.

---

## Review Ask #1 — Architecture

**Verdict: keep the repo-as-source-of-truth model, but consolidate the design system into ONE global stylesheet, and rebuild that stylesheet to the current dark theme.**

Today every section file repeats the same setup independently:
- `@import` of Playfair Display + Poppins — duplicated in **8 of the section files** (render-blocking, and inconsistent: see the font bug below).
- The brand colors (`#FF6A00`, `#0a0c10`, `#13161c`, `#9aa3ad`, etc.) are **hardcoded as literals ~30+ times** instead of referencing shared tokens.
- The 100vw full-bleed breakout hack is pasted into each full-width section.

**Recommended structure:**
1. **One global block** in GHL → Site → Custom CSS (sourced from `styles/ninja360.css`, rebuilt to the dark system): the font load (once), the `:root` tokens, the breakout utility class, and shared component classes.
2. **Sections become markup only** — no `<style>`, no `@import`, just classes. They get dramatically smaller and stop drifting from each other.
3. **Repo is canonical.** Each GHL paste comes from a repo file; a one-line `PASTE-LOG` notes what version is live where. This is what kills the "which version is live?" confusion that started the spiral.

This single move resolves friction #1 (breakout), #3 (repeated imports), and #6 (two oranges) at the root.

> Note on the GHL "Full Width" row setting: the recap is right that the automation bot can't reliably click it (settings-panel pixel work fails). The 100vw breakout is the correct workaround **as long as `html,body{overflow-x:hidden}` is set globally** — see the sideways-scroll bug below. That one global rule is the reliable fix, and it lives in the same global CSS block.

---

## Review Ask #2 — Code audit

### 🔴 Root cause of the sideways scroll (the thing irritating you most)
The full-width sections use `width:100vw; margin-left:calc(50% - 50vw)`. **`100vw` includes the vertical scrollbar width** (~7px on Windows). With no global `overflow-x:hidden`, every full-bleed section is ~7px wider than the viewport → horizontal scrollbar + the gray gutter peeking out.
**Fix (one line, global):** `html,body{overflow-x:hidden;max-width:100%;}`
This is the real "whacked out CSS." It's not a dozen problems — it's this, repeated.

### 🟢 What's already solid (don't touch)
- **`ninja360-media-showcase.html`** — best file in the set. Facade pattern (no video loads until click), lazy thumbnails, mute toggle, youtube-nocookie, scoped vars. Your "10 YouTube iframes = slow" worry is a non-issue; only one iframe ever loads at a time.
- **`ninja360-portfolio-gallery.html`** — same quality. Lazy thumbs, click-to-open modal, type filters, Esc-to-close, good alt text.
- **`ninja360-navbar.html`** — clean fixed bar + spacer, working mobile hamburger, correct `#FF6A00`.
- **`ninja360-hero.html`**, **`-trusted-by.html`**, **`-reviews.html`**, **`-home-problem-solution.html`** — all on the correct dark system, correct orange, mobile breakpoints present.

### 🟡 Class / variable collisions
- **Low risk overall** — most files are namespaced (`.nh-`, `.nhx-`, `.tb-`, `.gr-`, `.n360-`, `.pf-`, `.nb-`).
- **The exception:** `ninja360-pricing-customcode-FIXED.html` declares an **unscoped global `:root{}` and unscoped `.n-wrap/.n-btn/.n-card`**. If those `.n-` classes ever appear on the same page as a repo component (which also uses `.n-`), they collide. Scope it (`.nb-pricing`) like the about/contact files do.

### 🟡 z-index
Navbar and portfolio modal are **both `99999`**. They're rarely on screen together, but if the modal opens on the portfolio page the fixed navbar can bleed through the overlay. **Bump the modal to `100000`.**

### 🟡 Performance
- 8× duplicated font `@import` → consolidate to one global `<link rel="preconnect">` + one font request. (Biggest easy win.)
- Hero autoplay video is 4.3 MB — acceptable, but consider a lighter mobile poster-only fallback on slow connections.
- Everything else (facade videos, lazy thumbs) is already good.

---

## Review Ask #3 — SEO

- **Heading hierarchy is actually fine on Home** — only the hero carries `<h1>`; every other section uses `<h2>`. The recap's "multiple h1" worry doesn't show up in these files. ✅ Each inner page (pricing, about, portfolio) has its own single `<h1>` — correct.
- **`ninja360-trusted-by.html` alt text is wrong.** The alts (`"54th Street"`, `"Client"`, `"Atchison Family Dentistry"`, `"KC Complete"`, `"Bishop Miege"`) don't match the logos actually rendering live (Acacia Family Dentistry, Armour Oaks, 54th Street). `"Client"` is a placeholder alt. Fix alts to match the real logos once you swap them.
- **Titles / meta / OG** live in GHL page settings, not these files — can't audit from disk. Action: verify each page has a unique title (the old "Sliders Preview" title must be gone), a meta description, and an OG image. This is a GHL-side checklist pass.
- **Duplicate slugs** (`/about` + `/about-page`, etc.) need `<link rel="canonical">` in each page's GHL **Head** code pointing at the clean slug. Can't be done in body section code.

---

## Review Ask #4 — Asset migration (before retiring ninja-360.com)

Hot-links that **break** because the old Wix site at ninja-360.com is not live:
| File | Asset | Action |
|---|---|---|
| `ninja360-about-page.html` | `ninja-360.com/.../ProfilePicture.jpg` (headshot) | Re-upload to GHL Media, swap `src` |
| `ninja360-trusted-by.html` | `ninja-360.com/.../Logo.png`…`Logo-5.png` (5 logos) | Upload white logo set to GHL Media, swap all 5 + fix alts. **These are also your two blank circles live** — broken/placeholder logos. |

Hot-links that are **safe** (persistent platform/client CDNs, no action needed): GHL `filesafe.space` + `leadconnectorhq.com` (hero video, navbar logo, belt icons), `i.ytimg.com`, `my.matterport.com`, `kuula.co`. Two client-site images (`koblerchiro.com`, `1894.tours` in the portfolio) are external but stay live — low priority to localize.

---

## Review Ask #5 — Color & typography consistency

### 🔴 The two-orange bug — root cause found
- `styles/ninja360.css` **line 7** defines `--n-red:#FF8D2D` and the comment literally calls it "BRAND ORANGE." It isn't. **`#FF6A00` is the brand orange** (per the brand kit + every new section).
- `ninja360-pricing-customcode-FIXED.html` inherits that same `#FF8D2D`. **That's the only place the wrong orange ships.** Change two files (`ninja360.css` + pricing) to `#FF6A00` / hover `#E65F00` and the drift is gone.

### 🔴 The font bug — root cause of typography inconsistency
Font loading is **inconsistent across pages**:
- Load Playfair + Poppins: hero, trusted-by, reviews, problem-solution, showcase, portfolio, about. ✅
- **Load nothing but reference them:** `ninja360-contact-page.html` and `ninja360-pricing-customcode-FIXED.html`. Pricing doesn't even set `font-family` — it renders in GHL's default theme font.
- Result: pricing and contact look typographically different from the rest of the site.
**Fix:** one global font load (Ask #1) makes every page consistent automatically.

---

## Recommended order of operations (smallest blast radius first)

1. **Global CSS block** into GHL Site Custom CSS: `html,body{overflow-x:hidden}` + font load + `:root` tokens (`--n-accent:#FF6A00`). → kills sideways scroll site-wide, unifies fonts, one source for the orange.
2. **Re-paste the already-fixed sections** that are stale live (trusted-by, reviews) — the gray frame disappears.
3. **Swap the two old-generation sections:** paste `ninja360-home-problem-solution.html` over the empty orange box; re-skin the pricing page to the dark system + `#FF6A00`.
4. **Swap logos + headshot** to GHL-hosted copies; fix the trusted-by alts.
5. **GHL-side pass:** per-page title/meta/OG + canonical tags for duplicate slugs.
6. **Rebuild `styles/ninja360.css`** to the dark system so the repo is finally the true source of truth — then build the portfolio category pages on top of it.

Items 1–4 are the ones that make the site stop feeling "whacked out." They're mostly select-all-paste — the operation the bot is reliable at.
