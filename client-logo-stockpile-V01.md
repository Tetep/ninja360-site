# Client Logo Stockpile — V01

> **STATUS 2026-09-29 — the strip is broken on the live site right now.** All five
> hot-linked logos 404 because `ninja-360.com` is not live. A replacement component
> now exists at `components/trusted-by.html` with two variants:
> **Variant A (text wordmarks)** ships immediately with no assets and removes the
> broken-image defect today. **Variant B (logos)** is the same markup with
> `REPLACE-GHL-URL-*` tokens, ready for the Canva exports below — unswapped tokens
> hide themselves, so a partial upload degrades cleanly.
> Canva work is still the path to the real thing; it is no longer a blocker for
> getting the defect off the page.

Sourcing file for the "Trusted By" scroll strip on ninja360.net.
Goal: pull each logo from its **official source** (press kit / brand portal / live client site), then convert in Canva to the white-monochrome treatment used by the existing strip (`filter: brightness(0) invert(1); opacity:.8; height:54px`).

---

All seven are confirmed Ninja-360 clients per Tim (2026-06-03). "Good enough" sourcing — direct image URLs Tim can grab fast. Final treatment happens in Canva (convert to flat white, shrink to ~54px render).

---

## 1. ACA Business Club

- **Use your existing brand kit** (already in memory: [reference_aca_corporate_brand.md]) — it's the official corporate mark with the ® and proper lockup.
- Live site fallback: https://acanetwork.org/ — open in browser, right-click logo in header, save image.
- Canva note: keep the ® visible at 54px — don't crop it off.

## 2. Marshall School District (Marshall Public Schools — "Owls")

- **Direct SVG (best for Canva):** https://www.marshallschools.org/custom/images/general/asset_logo.svg
- Site: https://www.marshallschools.org/
- Canva note: SVG scales clean. Owl silhouette reads well when inverted to white.

## 3. ScriptPro

- **Direct PNG (header):** https://scriptpro.com/wp-content/uploads/elementor/thumbs/color-logo-qy4ol08oasbrccm0finp3hau210dn0hwqhem0217uo.png
- Site: https://scriptpro.com/
- Canva note: gradient blue + checkmark glyph. Flattens to solid white under the strip filter — that's fine for the monochrome convention.

## 4. Kobler Chiropractic

- **Direct PNG (your live site):** https://koblerchiro.com/wp-content/uploads/elementor/thumbs/Kobler-Chiropractic-Logo-Compressed-qlst1jdg09mkd15bu8y2tlsgh7tvax1al0f9l1dqn6.png
- Better source: pull the un-thumb'd original from the WP media library at `koblerchiro.com/wp-content/uploads/` — likely a higher-res PNG (or SVG if one was delivered).
- Canva note: thin strokes may break at 54px when inverted to white. Eyeball it; if it gets crispy, hunt for the SVG source.

## 5. Gap

- **Direct SVG (gap.com header, dark version — best to invert):** https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/725/assets/logo/logo_gap--dark.svg
- Light version: https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/725/assets/logo/logo_gap--light.svg
- Wikipedia Commons fallback: https://en.wikipedia.org/wiki/File:Gap_logo.svg
- Canva note: iconic blue box → flattens to solid white. Recognizable shape carries it.

## 6. Home Depot

- Site blocked direct fetch — easiest grabs:
  - **Wikipedia Commons:** https://en.wikipedia.org/wiki/File:TheHomeDepot.svg (open file, right-click the preview, save SVG)
  - **Press Kit & Visuals:** https://corporate.homedepot.com/page/press-kit-visuals
  - **Direct logo file:** https://corporate.homedepot.com/media/home-depot-logojpg
- Canva note: the orange square is the recognizable shape. Once inverted to flat white the square + wordmark still reads.

## 5b. Old Navy

- **Wikipedia Commons:** https://en.wikipedia.org/wiki/File:Old_Navy_Logo.svg
- Site: https://oldnavy.gap.com/ — same Gap Inc. asset archive pattern as the Gap mark
- Brandfetch fallback: https://brandfetch.com/oldnavy.com
- Canva target: `trustedby-oldnavy-white-V01.png`
- Canva note: navy wordmark, sometimes in a rounded box. Use the plain wordmark — the boxed
  version turns into a solid white slab under `brightness(0) invert(1)` and loses the letters.

## 5c. Verizon

- **Wikipedia Commons:** https://en.wikipedia.org/wiki/File:Verizon_2015_logo_-vector.svg
- Brand assets: https://www.verizon.com/about/brand-assets
- Brandfetch fallback: https://brandfetch.com/verizon.com
- Canva target: `trustedby-verizon-white-V01.png`
- Canva note: the checkmark is the recognizable element and it is thin — check it survives at
  54px once inverted. If it disappears, use the wordmark-only lockup.

## 6b. Target

- **Wikipedia Commons:** https://en.wikipedia.org/wiki/File:Target_logo.svg
- Brand site: https://corporate.target.com/ (press/brand assets)
- Canva target: `trustedby-target-white-V01.png`
- ⚠️ **Canva trap — the worst one in this list.** The bullseye is concentric red rings on
  white. Under `brightness(0) invert(1)` every ring becomes white and the logo collapses
  into a featureless white dot. **Use the bullseye + "TARGET" wordmark lockup**, or
  hand-build the bullseye as white ring / transparent gap / white centre so the rings
  survive. Check it at 54px before calling it done.

## 6c. Tractor Supply

- **Wikipedia Commons:** https://en.wikipedia.org/wiki/File:Tractor_Supply_Company_logo.svg
- Brand site: https://www.tractorsupply.com/
- Canva target: `trustedby-tractorsupply-white-V01.png`
- Canva note: red wordmark, sometimes with the "TSC" mark. The wordmark is long — it will be
  one of the widest marks in the strip. Flattens to white cleanly.

## 7. Valvoline

- Site blocked direct fetch — easiest grabs:
  - **Wikipedia Commons:** https://en.wikipedia.org/wiki/File:Valvoline_logo.svg (open, right-click preview, save SVG)
  - **Brandfetch (clean SVG/PNG library):** https://brandfetch.com/valvoline.com
  - **Official newsroom:** https://mediaroom.valvoline.com/
- Canva note: tri-color V will collapse to a single white shape under the strip filter — silhouette is distinctive enough that it still reads.

---

## Canva conversion spec — match the existing strip

Pull from the existing CSS so Canva exports match the live render:

| Property | Value |
|---|---|
| Render height | `54px` (mobile: `42px`) |
| Filter applied | `brightness(0) invert(1)` (forces solid white) |
| Default opacity | `0.8` (hover → `1.0`) |
| Spacing between marks | `64px` gap (mobile: `42px`) |
| Background context | `#13161c` (near-black with slight blue) |
| Edge fade | linear mask, transparent → opaque at 8% → 92% |

**Practical Canva targets:**
- Export each logo as **transparent PNG at 200px tall** (≈4× the 54px render for retina) and **solid white fill**.
- No drop shadows, no gradients — flat white only. The CSS will handle opacity.
- Crop tight to the mark (no padding) — the `gap: 64px` in CSS handles spacing.
- Naming convention: `trustedby-{slug}-white-V01.png` → e.g. `trustedby-kobler-white-V01.png`.

## Drop folder when ready

When you've got Canva exports back, drop them in:
`Documents\ninja360-site\assets\trustedby\` (create if missing)

Then the bot can update the `<img src="…">` list inside the `tb-track` div. Existing pattern uses two copies of each logo for the seamless loop — preserve that.

---

---

## Existing five — already on the live strip

These are the logos on the `tb-track` strip. They were hot-linked from the old media library at `ninja-360.com/wp-content/uploads/2024/08/` — but **`ninja-360.com` is no longer live** (domain is email-only now), so **those URLs are dead** and the strip is currently pulling broken images. **Action:** re-source each logo (from the client's public site below), re-Canva to the white-monochrome spec, and **re-host on GHL / ninja360.net** on the next bot push — do not point back at `ninja-360.com`.

### 8. 54th Street

- **Old URL (DEAD — ninja-360.com not live):** https://ninja-360.com/wp-content/uploads/2024/08/Logo.png
- Public site: 54thstreet.com (grab a fresh higher-res source here — the old upload is dead)
- Canva target: `trustedby-54thstreet-white-V01.png`

### 9. Atchison Family Dentistry

- **Old URL (DEAD — ninja-360.com not live):** https://ninja-360.com/wp-content/uploads/2024/08/Logo-2.png
- Public site: atchisonfamilydentistry.com (fresh-source candidate)
- Canva target: `trustedby-atchison-white-V01.png`
- Canva note: tooth-icon circle lockup — keep the circle intact when cropping.

### 10. KC Complete

- **Old URL (DEAD — ninja-360.com not live):** https://ninja-360.com/wp-content/uploads/2024/08/Logo-3.png
- Public site: search "KC Complete" on the client list to confirm domain
- Canva target: `trustedby-kccomplete-white-V01.png`

### 11. Bishop Miege

- **Old URL (DEAD — ninja-360.com not live):** https://ninja-360.com/wp-content/uploads/2024/08/Logo-5.png
- Public site: bishopmiege.com (Stags athletics mark)
- Canva target: `trustedby-bishopmiege-white-V01.png`

### 12. Armour Oaks Senior Living Community

- **Old URL (DEAD — ninja-360.com not live):** https://ninja-360.com/wp-content/uploads/2024/08/Logo-1.png
- Public site: armouroaks.org (fresh-source candidate — the live HTML's `alt="Client"` is a placeholder that should also be fixed to `alt="Armour Oaks"` on the bot pass)
- Canva target: `trustedby-armouroaks-white-V01.png`
- Canva note: tree-mark + wordmark lockup. Keep both elements; the tree silhouette inverts cleanly to white.

---

## Full deploy roster — 16 marks, interleaved

Matches the order in `components/trusted-by.html`. National and local alternate on purpose:
big names clustered read as padding, alternated they read as range. Each entry appears twice
in the markup (the seamless `-50%` loop) — keep both lists in sync.

1. `trustedby-gap-white-V01.png` — Gap
2. `trustedby-kobler-white-V01.png` — Kobler Chiropractic
3. `trustedby-verizon-white-V01.png` — Verizon
4. `trustedby-54thstreet-white-V01.png` — 54th Street
5. `trustedby-target-white-V01.png` — Target
6. `trustedby-atchison-white-V01.png` — Atchison Family Dentistry
7. `trustedby-oldnavy-white-V01.png` — Old Navy
8. `trustedby-marshall-white-V01.png` — Marshall School District
9. `trustedby-tractorsupply-white-V01.png` — Tractor Supply
10. `trustedby-bishopmiege-white-V01.png` — Bishop Miege
11. `trustedby-homedepot-white-V01.png` — Home Depot
12. `trustedby-kccomplete-white-V01.png` — KC Complete
13. `trustedby-valvoline-white-V01.png` — Valvoline
14. `trustedby-armouroaks-white-V01.png` — Armour Oaks Senior Living
15. `trustedby-scriptpro-white-V01.png` — ScriptPro
16. `trustedby-aca-white-V01.png` — ACA Business Club

**Partial uploads are safe.** Unswapped `REPLACE-GHL-URL-*` tokens hide themselves, so the
strip can never show a broken image again. A strip running 3 of 16 still looks thinner than
the text variant — under ~8 ready, ship Variant A and come back.

## The relationship — recorded 2026-09-29

Tim works the national accounts (Gap, Old Navy, Verizon, Target, Tractor Supply, Home Depot,
Valvoline, ScriptPro) as a **subcontractor**. The capture work is real; those brands did not
retain Ninja-360 directly. Two consequences:

1. **"Trusted by" overstates it.** `components/trusted-by.html` carries three accurate
   alternatives in a comment beside the label — recommended: **"Brands we've shot for."**
   Every logo stays; only the four words above them change.
2. **Check the subcontract before publishing.** National retail capture subcontracts
   commonly include a publicity or confidentiality clause restricting naming the end client
   in your own marketing. That is a contract question and the likelier snag — more likely to
   bite than trademark.
