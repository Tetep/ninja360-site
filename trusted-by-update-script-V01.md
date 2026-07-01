# Trusted-By Strip — Update Script V01

Deploy doc for the ninja360.net "Trusted By" scroll strip. Pairs with [client-logo-stockpile-V01.md](client-logo-stockpile-V01.md) (which has the source URLs + which clients are in scope).

Goal: take the strip from **5 logos** to **12 logos**, all normalized to the same white-monochrome treatment, all served from a single host.

---

## Step-by-step directions

### Step 1 — Canva conversion (do all 12)

Open Canva, one design per logo, dark `#13161c` background to preview.

For **each** of the 12 sources listed in `client-logo-stockpile-V01.md`:

1. Import the source file.
2. Strip color → solid white fill. (Canva: Effects → Duotone, set both stops to white. Or use the Color Adjust → bring saturation to 0, then brightness up. Whichever route hits flat `#FFFFFF`.)
3. Crop tight to the mark — no padding (the CSS `gap: 64px` handles spacing).
4. Resize so the visual height = **200px** (≈4× the 54px live render — gives retina headroom).
5. Export as **transparent PNG**.
6. Save with the V01 naming convention:

| # | Filename |
|---|---|
| 1 | `trustedby-aca-white-V01.png` |
| 2 | `trustedby-marshall-white-V01.png` |
| 3 | `trustedby-scriptpro-white-V01.png` |
| 4 | `trustedby-kobler-white-V01.png` |
| 5 | `trustedby-gap-white-V01.png` |
| 6 | `trustedby-homedepot-white-V01.png` |
| 7 | `trustedby-valvoline-white-V01.png` |
| 8 | `trustedby-54thstreet-white-V01.png` |
| 9 | `trustedby-atchison-white-V01.png` |
| 10 | `trustedby-kccomplete-white-V01.png` |
| 11 | `trustedby-bishopmiege-white-V01.png` |
| 12 | `trustedby-armouroaks-white-V01.png` |

7. Drop all 12 into `C:\Users\tpete\Documents\ninja360-site\assets\trustedby\` (create folder if missing — this is local archive + bot pickup point).

### Step 2 — Upload to host  ⚠️ PLATFORM = GoHighLevel (not Wix, not WP)

ninja360.net is served by **GoHighLevel**. Confirmed in the live DOM (GHL classes, assets on `leadconnectorhq.com`). Upload the 12 white PNGs to the **GHL Media Library**:

- In the GHL page builder (or Sites → Media), open the **Media Library** and upload all 12 files.
- GHL serves them via its image CDN — the URLs look like
  `https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/{id}.png`.
- Capture each returned URL (GHL assigns its own IDs — it does NOT preserve the `trustedby-*-V01` filenames), and map it back to the logo by what you uploaded.

**Do NOT host these on ninja-360.com.** That old Wix site is not live (domain is email-only) and its URLs are 301'd to .net — anything hot-linked from it is already dead (this is the exact hot-link problem we're removing, not re-creating).

After upload, write the final URL list back into the file at the top of Step 3.

### Step 3 — Build the new HTML

Take the template in **Update Script — Paste-In HTML** below and replace each `{{URL_n}}` placeholder with the URL from Step 2.

### Step 4 — Deploy (GoHighLevel)

- **GHL page builder:** open the **Home** page, find the **Custom Code / HTML element** holding the Trusted By strip (block id `custom-code-EKLCwSP79t`), select-all inside it, replace with the new HTML, **Save → Publish**.
- **Or hand off to the bot:** the bot reads the URL list from Step 2, fills the template, and pushes the update via the GHL custom code element.

### Step 5 — QA after deploy

- [ ] All 12 logos visible at least once per scroll cycle (no broken `<img>` icons).
- [ ] Each logo renders **flat white** at `opacity 0.8`. If any look gray/off-white the Canva fill wasn't fully `#FFFFFF` — re-export.
- [ ] Loop is seamless (no visible jump at the wrap-around). If you see a jump, the duplicate list isn't matching the original — re-check the HTML below.
- [ ] On mobile (width ≤ 600px): logos shrink to 42px height, gap to 42px. Open DevTools mobile preview.
- [ ] Hover pauses scroll (the existing `tb:hover .tb-track { animation-play-state: paused }` rule).
- [ ] No horizontal page scrollbar appears (the `width: 100vw; margin-left: calc(50% - 50vw);` full-bleed trick).

---

## Update Script — Paste-In HTML

Drop this in place of the **entire** existing `<div id="custom-code-EKLCwSP79t">…</div>` block. Two changes from the original `<style>`:

- `animation: tbscroll 80s linear infinite` (was `34s`) — preserves scroll speed now that the track is ~2.4× longer.
- No other style changes.

The `<img>` list inside `tb-track` is duplicated once (entries 1–12 then 1–12 again) — required for the seamless infinite scroll loop. **Do not remove the duplicate.**

```html
<div id="custom-code-EKLCwSP79t" class="custom-code-container ccustom-code-EKLCwSP79t"><style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700&display=swap');
  .tb{width:100vw;margin-left:calc(50% - 50vw);background:#13161c;padding:38px 0 30px;overflow:hidden;font-family:'Poppins',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);}
  .tb *{box-sizing:border-box;}
  .tb-h{font-family:'Playfair Display',Georgia,serif;color:#fff;text-align:center;font-size:clamp(20px,2.6vw,28px);font-weight:700;margin:0 0 6px;}
  .tb-h .o{color:#FF6A00;}
  .tb-sub{text-align:center;color:#9aa3ad;font-size:13px;letter-spacing:.04em;margin:0 0 26px;}
  .tb-mask{position:relative;width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);}
  .tb-track{display:flex;align-items:center;gap:64px;width:max-content;animation:tbscroll 80s linear infinite;}
  .tb:hover .tb-track{animation-play-state:paused;}
  .tb-track img{height:54px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:.8;transition:opacity .2s;}
  .tb-track img:hover{opacity:1;}
  @keyframes tbscroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
  @media(max-width:600px){.tb-track{gap:42px;}.tb-track img{height:42px;}}
</style>
<section class="tb" aria-label="Trusted by">
  <h2 class="tb-h">Trusted <span class="o">By</span></h2>
  <p class="tb-sub">The businesses that put their brand in our hands.</p>
  <div class="tb-mask">
    <div class="tb-track">
      <img src="{{URL_1_HOMEDEPOT}}" alt="The Home Depot">
      <img src="{{URL_2_ACA}}" alt="ACA Business Club">
      <img src="{{URL_3_GAP}}" alt="Gap">
      <img src="{{URL_4_54THSTREET}}" alt="54th Street">
      <img src="{{URL_5_VALVOLINE}}" alt="Valvoline">
      <img src="{{URL_6_KOBLER}}" alt="Kobler Chiropractic">
      <img src="{{URL_7_BISHOPMIEGE}}" alt="Bishop Miege">
      <img src="{{URL_8_MARSHALL}}" alt="Marshall School District">
      <img src="{{URL_9_SCRIPTPRO}}" alt="ScriptPro">
      <img src="{{URL_10_KCCOMPLETE}}" alt="KC Complete">
      <img src="{{URL_11_ARMOUROAKS}}" alt="Armour Oaks Senior Living">
      <img src="{{URL_12_ATCHISON}}" alt="Atchison Family Dentistry">
      <img src="{{URL_1_HOMEDEPOT}}" alt="The Home Depot">
      <img src="{{URL_2_ACA}}" alt="ACA Business Club">
      <img src="{{URL_3_GAP}}" alt="Gap">
      <img src="{{URL_4_54THSTREET}}" alt="54th Street">
      <img src="{{URL_5_VALVOLINE}}" alt="Valvoline">
      <img src="{{URL_6_KOBLER}}" alt="Kobler Chiropractic">
      <img src="{{URL_7_BISHOPMIEGE}}" alt="Bishop Miege">
      <img src="{{URL_8_MARSHALL}}" alt="Marshall School District">
      <img src="{{URL_9_SCRIPTPRO}}" alt="ScriptPro">
      <img src="{{URL_10_KCCOMPLETE}}" alt="KC Complete">
      <img src="{{URL_11_ARMOUROAKS}}" alt="Armour Oaks Senior Living">
      <img src="{{URL_12_ATCHISON}}" alt="Atchison Family Dentistry">
    </div>
  </div>
</section></div>
```

### Why this order

Alternating big-brand recognition with local KC clients — eye catches the recognized name first, then your relationship-driven locals get equal billing. Opens with Home Depot (instant pop), closes with Atchison (local circle-back). You can resequence freely; just keep the same order in **both** halves of the duplicate list or the loop will visibly jump.

---

## Bot handoff — variable contract

If the bot is doing the URL fill + push, here's the contract:

```
INPUT:
  - assets/trustedby/ folder containing the 12 PNG files
  - host: "ghl" (GoHighLevel Media Library — the only target)

PROCESS:
  1. Upload each PNG to the GHL Media Library.
  2. Record returned URL → keyed by filename (e.g. trustedby-aca-white-V01.png → https://...)
  3. Load update-script-V01.md, extract the HTML template between the ```html fences.
  4. Replace each {{URL_n_NAME}} placeholder using the alt-text to filename map:
       URL_1_HOMEDEPOT       → trustedby-homedepot-white-V01.png
       URL_2_ACA             → trustedby-aca-white-V01.png
       URL_3_GAP             → trustedby-gap-white-V01.png
       URL_4_54THSTREET      → trustedby-54thstreet-white-V01.png
       URL_5_VALVOLINE       → trustedby-valvoline-white-V01.png
       URL_6_KOBLER          → trustedby-kobler-white-V01.png
       URL_7_BISHOPMIEGE     → trustedby-bishopmiege-white-V01.png
       URL_8_MARSHALL        → trustedby-marshall-white-V01.png
       URL_9_SCRIPTPRO       → trustedby-scriptpro-white-V01.png
       URL_10_KCCOMPLETE     → trustedby-kccomplete-white-V01.png
       URL_11_ARMOUROAKS     → trustedby-armouroaks-white-V01.png
       URL_12_ATCHISON       → trustedby-atchison-white-V01.png
  5. Replace the entire #custom-code-EKLCwSP79t block in the GoHighLevel custom code element (Home page).
  6. Publish (per-page in GHL).
  7. Run the QA checklist (Step 5 above) — at minimum the broken-img and flat-white checks.

OUTPUT:
  - Live URLs (for the rollback file)
  - QA pass/fail per checklist item
  - Screenshot of strip on desktop + mobile
```

---

## Rollback plan

If anything looks wrong post-deploy, restore the original strip by pasting back the **5-logo** version that was live before this change. Save that original block here for one-click recovery:

`assets/trustedby/_rollback/custom-code-EKLCwSP79t-original.html`

(Create the `_rollback/` subfolder and dump the original `<div id="custom-code-EKLCwSP79t">…</div>` block there before publishing the new one. Standard archive-don't-delete rule.)

---

## Future V02 ideas (don't do now)

- Add `loading="lazy"` to all `<img>` (12 imgs × 2 = 24 — minor weight, no rush).
- Swap PNGs to SVGs once you confirm Canva can export clean monochrome SVG paths — better at all sizes, smaller files.
- Click-through: wrap each `<img>` in an `<a>` to the client's site if you want the strip to drive outbound traffic (only if the clients are okay with it).
- Caption microcopy A/B: *"The businesses that put their brand in our hands."* vs. *"Trusted across Kansas City and beyond."* — current copy is good; flag for later.
