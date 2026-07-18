# Ninja360.net - GHL Paste Packet
Publish order, top to bottom. For **each** page in GHL:
1. Funnel step -> set the **path/slug** shown.
2. Add a **Custom JS/HTML** element -> paste the code block.
3. Set the **SEO Title** + **Meta description** in the step's SEO settings.
4. **Uncheck Header and Footer** in the step settings (our nav/footer is in the code).
5. Publish, then verify.
> Slugs use nested paths like `/work/restaurants`. If GHL rejects the slash, use the flat form `work-restaurants` **and** update that row's 301 target to match.
> Do all 301s LAST, after all 16 are live and verified. The old Wix site at ninja-360.com is not live; the 301s just catch any still-indexed old URLs.

---

## 1. Home
- **Slug / path:** `/`  _(flat fallback: ``)_
- **SEO Title:** Get Found on Google in Kansas City | Ninja-360 Local Visibility
- **Meta description:** Ninja-360 puts Kansas City businesses on the map - visible, heard, and chosen on Google. Virtual tours, drone media, and a visibility system that tells your true story beautifully. Free audit.
- **301:** ninja-360.com/  ->  /

**Paste this into the Custom JS/HTML element:**

```html
<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>
<!-- HOME  -  paste into a GHL Custom Code block on the home step.
     KEEP your native AUDIT FORM section (#section-JXWJCHUYEK) - every CTA
     scrolls to it. StoryBrand: customer = hero, Ninja-360 = guide.
     Copy: V02 philosophy infusion (see COPY-REWRITE-V02.md + philosophies_V02.md).
     Brand palette: charcoal #31343B + orange #FF8D2D.
     GHL PAGE SEO:
       Title: Get Found on Google in Kansas City | Ninja-360 Local Visibility
       Meta:  Ninja-360 puts Kansas City businesses on the map - visible, heard,
              and chosen on Google. Virtual tours, drone media, and a visibility
              system that tells your true story beautifully. Free audit. -->

<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:84px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(30px,5.5vw,50px);line-height:1.06;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,34px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:680px}
.n-sub{color:var(--n-muted);max-width:720px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-btn-ghost{display:inline-block;border:2px solid #fff;color:#fff;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;margin-left:10px}
.map-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}
.map-card{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:24px;text-align:center}
.map-card img{display:block;width:104px;height:104px;object-fit:contain;margin:0 auto 10px}
.map-step{font-size:12px;font-weight:800;color:var(--n-red);text-transform:uppercase;letter-spacing:.06em}
.map-card h3{font-size:19px;margin:4px 0 8px}
.map-belt{display:inline-block;margin-top:12px;font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:var(--n-muted);border:1px solid var(--n-line);border-radius:20px;padding:3px 10px}
.phil-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}
.phil-card{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:24px;border-top:3px solid var(--n-red)}
.phil-card .pn{font-size:12px;font-weight:800;color:var(--n-red);text-transform:uppercase;letter-spacing:.06em}
.phil-card h3{font-size:18px;margin:6px 0 8px}
.vid-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}
.vid{aspect-ratio:16/9;width:100%;border:0;border-radius:10px;background:#000}
.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}
.price-card{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:20px;text-align:center}
.price-card .pb{font-size:12px;font-weight:800;color:var(--n-red);text-transform:uppercase;letter-spacing:.05em}
.price-card .pa{font-size:26px;font-weight:800;margin:6px 0 0}
@media(max-width:780px){.map-grid,.phil-grid,.vid-grid,.price-grid{grid-template-columns:1fr}}
</style>

<!-- HERO -->
<section class="n-hero">
  <div class="n-wrap">
    <p class="n-eyebrow">Get found. Get chosen.</p>
    <h1 class="n-h1">If your business isn't showing up on Google search,<br>you're losing customers.</h1>
    <p class="n-lead">Ninja-360 puts Kansas City businesses on the map &mdash; better visuals, a true story told beautifully, and a system that keeps you visible, heard, and chosen.</p>
    <div style="margin-top:28px">
      <a class="n-btn" href="#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
      <a class="n-btn-ghost" href="/pricing">See Pricing</a>
    </div>
    <p style="color:#9aa0a8;font-size:13px;margin-top:14px">Takes 30 seconds. No obligation.</p>
  </div>
</section>

<!-- PROBLEM / EMPATHY (Philosophy #1 lands here) -->
<section class="n-section">
  <div class="n-wrap">
    <p class="n-eyebrow">The problem</p>
    <h2 class="n-h2">Most local businesses aren't failing because they're bad.</h2>
    <p class="n-sub">They're invisible. Weak or outdated photos. An incomplete Google Business Profile. No consistent content. Competitors showing up first. Behind every one of those listings is a person who bet everything on their craft &mdash; and great work deserves to be found. That's why we exist: to put people on the map.</p>
    <p style="margin-top:16px"><a class="n-btn" href="/how-it-works">See how we fix it</a></p>
  </div>
</section>

<!-- WHAT WE DO (Philosophy #2 lands here) -->
<section class="n-section" style="background:var(--n-soft)">
  <div class="n-wrap">
    <p class="n-eyebrow">What we do</p>
    <h2 class="n-h2">We don't just make you visible. We make you worth choosing.</h2>
    <p class="n-sub">Anyone can point a camera at your building. We find the authentic heart of your business &mdash; the story your regulars already know &mdash; and tell it beautifully, everywhere customers are searching. Technology is the tool. Genuine human connection is the goal.</p>
    <p style="margin-top:16px"><a class="n-btn" href="#section-JXWJCHUYEK">Get My Free Visibility Audit</a></p>
  </div>
</section>

<!-- WHAT WE BELIEVE - the three philosophies -->
<section class="n-section">
  <div class="n-wrap">
    <p class="n-eyebrow">What we believe</p>
    <h2 class="n-h2">Three philosophies drive everything Ninja-360 makes.</h2>
    <div class="phil-grid">
      <div class="phil-card">
        <p class="pn">Philosophy 01</p>
        <h3>Put People on the Map</h3>
        <p class="n-sub" style="margin:0">We make deserving businesses visible, heard, and chosen. Rooted in Kansas City, powered by the M.A.P. Method.</p>
      </div>
      <div class="phil-card">
        <p class="pn">Philosophy 02</p>
        <h3>Fall in Love with the True Story</h3>
        <p class="n-sub" style="margin:0">We find the authentic heart of every client and tell it beautifully. Technology is the tool; connection is the goal.</p>
      </div>
      <div class="phil-card">
        <p class="pn">Philosophy 03</p>
        <h3>Always Sharpen the Blade</h3>
        <p class="n-sub" style="margin:0">Research, experimentation, disciplined execution, honest reflection &mdash; cutting edge, always in service of the client.</p>
      </div>
    </div>
    <p style="margin-top:18px"><a href="/about" style="color:var(--n-red);font-weight:700;text-decoration:none">Read our philosophy &rarr;</a></p>
  </div>
</section>

<!-- THE PLAN: M.A.P. -->
<section class="n-section" style="background:var(--n-soft)">
  <div class="n-wrap">
    <p class="n-eyebrow">The plan</p>
    <h2 class="n-h2">We put you on the M.A.P.</h2>
    <p class="n-sub">Make. Amplify. Promote. A simple, proven system to get your business found, chosen, and consistently ahead.</p>
    <div class="map-grid">
      <div class="map-card">
        <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69c403a5c14403201337659d.png" alt="Ninja-360 Make - White Belt" width="104" height="104">
        <p class="map-step">01 - Make</p>
        <h3>We make your business look its best.</h3>
        <p class="n-sub" style="margin:0 auto">We capture high-quality photo, video, drone, and 360&deg; content that builds instant trust &mdash; real places, real people, never staged.</p>
        <span class="map-belt">White Belt</span>
      </div>
      <div class="map-card">
        <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69d5a77ba7dcb4cff02c16a2.png" alt="Ninja-360 Amplify - Brown Belt" width="104" height="104">
        <p class="map-step">02 - Amplify</p>
        <h3>We get you showing up on Google.</h3>
        <p class="n-sub" style="margin:0 auto">We optimize and publish your content where customers are already searching &mdash; Google Maps, Search, listings, your site, and social. Visible and heard.</p>
        <span class="map-belt">Brown Belt</span>
      </div>
      <div class="map-card">
        <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69c403b776c88204c13af763.png" alt="Ninja-360 Promote - Black Belt" width="104" height="104">
        <p class="map-step">03 - Promote</p>
        <h3>We keep you visible and chosen.</h3>
        <p class="n-sub" style="margin:0 auto">Ongoing updates, fresh content, constant optimization. We keep sharpening so you stay ahead of competitors month after month.</p>
        <span class="map-belt">Black Belt</span>
      </div>
    </div>
    <div style="text-align:center;margin-top:28px"><a class="n-btn" href="#section-JXWJCHUYEK">Get My Free Visibility Audit</a></div>
  </div>
</section>

<!-- PROOF -->
<section class="n-section">
  <div class="n-wrap">
    <p class="n-eyebrow">Proof</p>
    <h2 class="n-h2">Real work. Real Kansas City businesses.</h2>
    <p class="n-sub">From single storefronts to a 15+ location restaurant chain (54th Street Grill), we've put hundreds of businesses on the map.</p>
    <div class="vid-grid">
      <iframe class="vid" src="https://www.youtube.com/embed/60xCoFbbfuU" title="Ninja-360 client video" loading="lazy" allowfullscreen></iframe>
      <iframe class="vid" src="https://www.youtube.com/embed/v87kC9x-F04" title="Ninja-360 client video" loading="lazy" allowfullscreen></iframe>
      <iframe class="vid" src="https://www.youtube.com/embed/hAZtFQ_5kOk" title="Ninja-360 client video" loading="lazy" allowfullscreen></iframe>
    </div>
  </div>
</section>

<!-- PRICING TEASER -->
<section class="n-section" style="background:var(--n-soft)">
  <div class="n-wrap">
    <p class="n-eyebrow">Simple pricing</p>
    <h2 class="n-h2">Pick your belt</h2>
    <div class="price-grid">
      <div class="price-card"><p class="pb">White Belt</p><p class="pa">$99<span style="font-size:14px;color:var(--n-muted)">/mo</span></p><p class="n-sub" style="margin:6px auto 0;font-size:13px">Get on the map</p></div>
      <div class="price-card" style="border:2px solid var(--n-red)"><p class="pb">Brown Belt</p><p class="pa">$499<span style="font-size:14px;color:var(--n-muted)">/mo</span></p><p class="n-sub" style="margin:6px auto 0;font-size:13px">Grow &amp; get chosen</p></div>
      <div class="price-card"><p class="pb">Black Belt</p><p class="pa">$999<span style="font-size:14px;color:var(--n-muted)">/mo</span></p><p class="n-sub" style="margin:6px auto 0;font-size:13px">Own your market</p></div>
    </div>
    <div style="text-align:center;margin-top:24px"><a class="n-btn" href="/pricing">See Full Pricing</a></div>
  </div>
</section>

<!-- ============================================================
     KEEP YOUR NATIVE GHL AUDIT FORM SECTION HERE (#section-JXWJCHUYEK).
     Do NOT replace it with custom code - it must stay a GHL Form element
     so submissions land in your CRM. Every CTA above scrolls to it.
     ============================================================ -->

<!-- FINAL CTA (optional - place below the form, or remove if redundant) -->
<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center">
  <div class="n-wrap">
    <p class="n-eyebrow">See what your customers see</p>
    <h2 class="n-h2" style="color:#fff">Get your free visibility audit</h2>
    <p class="n-lead" style="margin:0 auto 22px">In 30 seconds we show you exactly where you are - and aren't - showing up on Google.</p>
    <a class="n-btn" href="#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
  </div>
</section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 2. How It Works
- **Slug / path:** `/how-it-works`  _(flat fallback: `how-it-works`)_
- **SEO Title:** How It Works: The M.A.P. System | Ninja-360 Kansas City
- **Meta description:** The M.A.P. System - Make, Amplify, Promote. How Ninja-360 gets Kansas City businesses found and chosen on Google.
- **301:** (new page - no 301)

**Paste this into the Custom JS/HTML element:**

```html
<!-- /how-it-works  -  GHL SEO Title: How It Works: The M.A.P. System | Ninja-360 Kansas City
     Meta: The M.A.P. System - Make, Amplify, Promote. How Ninja-360 gets Kansas City businesses found and chosen on Google, step by step.
     Keep nav + footer native. Paste body into a Custom JS/HTML element. -->

<!-- ===== PASTE THIS INTO THE PAGE HEAD (GHL tracking code) - FAQPage + VideoObject =====
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"What is the M.A.P. System?","acceptedAnswer":{"@type":"Answer","text":"M.A.P. stands for Make, Amplify, Promote. Make = capture high-quality photo, video, drone and 360 content. Amplify = optimize and publish it to Google Maps, Search, your website and listings. Promote = keep you active and visible so you keep getting chosen. It's Philosophy #1 turned into a system: put people on the map."}},
    {"@type":"Question","name":"What makes Ninja-360 different from other marketing agencies?","acceptedAnswer":{"@type":"Answer","text":"Three philosophies. First, we put people on the map - not just listings; your visibility work is personal to us. Second, we fall in love with your true story - we capture your real business beautifully instead of pasting your logo on generic content. Third, we always sharpen the blade - we research, test, and improve constantly, so the system you're paying for gets better every month, responsibly and transparently."}},
    {"@type":"Question","name":"How long until I see results?","acceptedAnswer":{"@type":"Answer","text":"Your media and Google Business Profile improvements go live quickly. Local visibility compounds over weeks as Google indexes the updates and you stay consistently active."}},
    {"@type":"Question","name":"Do I need a website to work with Ninja-360?","acceptedAnswer":{"@type":"Answer","text":"No. Much of local visibility lives on your Google Business Profile, Maps, and listings. We can also embed tours and video into any site you do have."}},
    {"@type":"Question","name":"What areas does Ninja-360 serve?","acceptedAnswer":{"@type":"Answer","text":"We're based in Kansas City and serve the greater KC metro across Missouri and Kansas, plus multi-location clients in other markets."}},
    {"@type":"Question","name":"What does it cost?","acceptedAnswer":{"@type":"Answer","text":"Three plans: White Belt $99/month, Brown Belt $499/month, and Black Belt $999/month. Every engagement starts with a free visibility audit."}}
  ]
}
</script>
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"VideoObject",
  "name":"REPLACE - e.g. How Ninja-360 Puts Kansas City Businesses on the Map",
  "description":"REPLACE - one sentence describing your M.A.P. / explainer video.",
  "thumbnailUrl":"https://i.ytimg.com/vi/hAZtFQ_5kOk/maxresdefault.jpg",
  "uploadDate":"REPLACE-YYYY-MM-DD","duration":"REPLACE-PT#M#S",
  "contentUrl":"https://www.youtube.com/watch?v=hAZtFQ_5kOk","embedUrl":"https://www.youtube.com/embed/hAZtFQ_5kOk" }
</script>
===== END HEAD CODE ===== -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,30px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.row{display:grid;grid-template-columns:120px 1fr;gap:22px;align-items:center;padding:26px 0;border-top:1px solid var(--n-line)}
.row img{width:120px;height:120px;object-fit:contain}
.row .st{font-size:12px;font-weight:800;color:var(--n-red);text-transform:uppercase;letter-spacing:.06em}
.row h3{font-size:21px;margin:4px 0 6px}
.belt{display:inline-block;margin-left:8px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--n-muted);border:1px solid var(--n-line);border-radius:20px;padding:3px 10px;vertical-align:middle}
@media(max-width:780px){.row{grid-template-columns:1fr;text-align:center}.row img{margin:0 auto}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<!-- VIDEO HERO + FAQ -->
<style>
.vh-frame{position:relative;max-width:840px;margin:30px auto 0;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#000;cursor:pointer;box-shadow:0 24px 60px rgba(0,0,0,.45)}
.vh-frame img{width:100%;height:100%;object-fit:cover;display:block}
.vh-frame iframe{width:100%;height:100%;border:0;display:block}
.vh-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.18);transition:background .2s}
.vh-frame:hover .vh-play{background:rgba(0,0,0,.06)}
.vh-play b{width:80px;height:80px;border-radius:50%;background:var(--n-red);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 28px rgba(0,0,0,.45)}
.vh-play b:after{content:"";border-style:solid;border-width:14px 0 14px 23px;border-color:transparent transparent transparent #fff;margin-left:5px}
.vh-center{text-align:center}.vh-center .n-lead{margin-left:auto;margin-right:auto}
.vh-cap{color:#aeb4bd;font-size:14px;margin:14px auto 0;max-width:660px}
.faq details{background:#fff;border:1px solid var(--n-line);border-radius:10px;padding:14px 18px;margin:10px 0;max-width:820px}
.faq summary{font-weight:700;cursor:pointer;list-style:none;font-size:16px;color:var(--n-ink)}
.faq summary::-webkit-details-marker{display:none}
.faq summary:after{content:"+";float:right;color:var(--n-red);font-weight:800}
.faq details[open] summary:after{content:"\2013"}
.faq details p{color:var(--n-muted);margin:10px 0 0;font-size:15px}
</style>
<section class="n-hero"><div class="n-wrap vh-center">
  <p class="n-eyebrow">How it works</p>
  <h1 class="n-h1">The M.A.P. System</h1>
  <p class="n-lead">A simple, proven path to get found, chosen, and consistently ahead: Make, Amplify, Promote &mdash; built on three philosophies we never break.</p>
  <!-- SWAP VIDEO: change data-yt + both image IDs (currently hAZtFQ_5kOk) to your explainer/brand reel. -->
  <div class="vh-frame" data-yt="hAZtFQ_5kOk" data-title="How Ninja-360 puts Kansas City businesses on the map" role="button" tabindex="0" aria-label="Play the Ninja-360 explainer video">
    <img src="https://i.ytimg.com/vi/hAZtFQ_5kOk/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/hAZtFQ_5kOk/hqdefault.jpg'" alt="How Ninja-360 puts Kansas City businesses on the map">
    <span class="vh-play"><b></b></span>
  </div>
  <p class="vh-cap">Watch the M.A.P. System in action.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:18px">Get My Free Visibility Audit</a>
</div></section>
<script>
(function(){
  function vhPlay(f){if(!f||f.dataset.loaded)return;f.dataset.loaded="1";var id=f.getAttribute("data-yt");
    f.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="'+(f.getAttribute("data-title")||"")+'" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>';}
  document.addEventListener("click",function(e){var f=e.target.closest&&e.target.closest(".vh-frame");if(f)vhPlay(f);});
  document.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){var f=e.target.closest&&e.target.closest(".vh-frame");if(f){e.preventDefault();vhPlay(f);}}});
})();
</script>

<section class="n-section"><div class="n-wrap">

  <div class="row" style="border-top:0">
    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69c403a5c14403201337659d.png" alt="Ninja-360 Make - White Belt">
    <div>
      <p class="st">01 - Make</p>
      <h3>We Make Your Business Look Its Best<span class="belt">White Belt</span></h3>
      <p class="n-sub">We capture high-quality photos, video, drone, and 360&deg; content that instantly builds trust and shows customers why they should choose you. This is the raw material everything else is built on.</p>
    </div>
  </div>

  <div class="row">
    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69d5a77ba7dcb4cff02c16a2.png" alt="Ninja-360 Amplify - Brown Belt">
    <div>
      <p class="st">02 - Amplify</p>
      <h3>We Get You Showing Up on Google<span class="belt">Brown Belt</span></h3>
      <p class="n-sub">We optimize and publish your content so your business appears where customers are already searching &mdash; Google Maps, Search, your website, listings, and social.</p>
    </div>
  </div>

  <div class="row">
    <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69c403b776c88204c13af763.png" alt="Ninja-360 Promote - Black Belt">
    <div>
      <p class="st">03 - Promote</p>
      <h3>We Keep You Visible &amp; Top of Search<span class="belt">Black Belt</span></h3>
      <p class="n-sub">We keep your business active, updated, and consistently visible with ongoing content and optimization &mdash; the recurring work that keeps you getting chosen over competitors.</p>
    </div>
  </div>

  <div style="text-align:center;margin-top:34px">
    <a class="n-btn" href="/pricing">See Pricing &amp; Belts</a>
  </div>
</div></section>

<section class="n-section faq" style="background:var(--n-soft)"><div class="n-wrap">
  <p class="n-eyebrow">Questions</p>
  <h2 class="n-h2">Frequently asked</h2>
  <details><summary>What is the M.A.P. System?</summary><p>M.A.P. stands for Make, Amplify, Promote. Make = capture high-quality photo, video, drone and 360&deg; content. Amplify = optimize and publish it to Google Maps, Search, your website and listings. Promote = keep you active and visible so you keep getting chosen. It's Philosophy #1 turned into a system: put people on the map.</p></details>
  <details><summary>What makes Ninja-360 different from other marketing agencies?</summary><p>Three philosophies. First, we put <em>people</em> on the map &mdash; not just listings; your visibility work is personal to us. Second, we fall in love with your true story &mdash; we capture your real business beautifully instead of pasting your logo on generic content. Third, we always sharpen the blade &mdash; we research, test, and improve constantly, so the system you're paying for gets better every month, responsibly and transparently.</p></details>
  <details><summary>How long until I see results?</summary><p>Your media and Google Business Profile improvements go live quickly. Local visibility compounds over the following weeks as Google indexes the updates and you stay consistently active.</p></details>
  <details><summary>Do I need a website to work with Ninja-360?</summary><p>No. Much of local visibility lives on your Google Business Profile, Maps, and listings. We can also embed tours and video into any site you do have.</p></details>
  <details><summary>What areas does Ninja-360 serve?</summary><p>We're based in Kansas City and serve the greater KC metro across Missouri and Kansas, plus multi-location clients in other markets.</p></details>
  <details><summary>What does it cost?</summary><p>Three plans: White Belt $99/month, Brown Belt $499/month, and Black Belt $999/month. Every engagement starts with a free visibility audit.</p></details>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Ready to get on the map?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit &mdash; we'll show you exactly where you stand.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 3. Services
- **Slug / path:** `/services`  _(flat fallback: `services`)_
- **SEO Title:** Services | Drone, 360 Tours, Matterport & Local SEO | Ninja-360
- **Meta description:** Ninja-360 services in Kansas City: drone, Google 360 tours, Matterport, photo/video, and Google Business Profile optimization.
- **301:** /our-services/ -> /services  |  /drone-photography-services/ -> /services#drone  |  /custom-virtual-tour-packages/ -> /services#tours

**Paste this into the Custom JS/HTML element:**

```html
<!-- /services  -  GHL SEO Title: Services | Drone, 360 Tours, Matterport & Local SEO | Ninja-360
     Meta: Ninja-360 services in Kansas City: drone photography, Google 360 virtual tours, Matterport, professional photo/video, and Google Business Profile optimization.
     Keep nav + footer native. Paste body into a Custom JS/HTML element.
     Anchors #drone and #tours are linked from old-site 301s - keep them. -->

<!-- ===== PASTE THIS INTO THE PAGE HEAD (GHL tracking code) - VideoObject for the hero video =====
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "REPLACE - e.g. Kansas City [Landmark Name] - Drone, 360 & Video by Ninja-360",
  "description": "REPLACE - one sentence: the Kansas City landmark shown + the media (drone/360/video) Ninja-360 produced.",
  "thumbnailUrl": "https://i.ytimg.com/vi/VmOPhGmy2uk/maxresdefault.jpg",
  "uploadDate": "REPLACE-YYYY-MM-DD",
  "duration": "REPLACE-PT#M#S",
  "contentUrl": "https://www.youtube.com/watch?v=VmOPhGmy2uk",
  "embedUrl": "https://www.youtube.com/embed/VmOPhGmy2uk"
}
</script>
===== END HEAD CODE ===== -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,30px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.svc{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:8px}
.scard{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:22px}
.scard .ph{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--n-red)}
.scard h3{font-size:18px;margin:6px 0 6px}
.maprow{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px}
.maprow b{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#fff;background:var(--n-red);border-radius:20px;padding:3px 10px}
@media(max-width:780px){.svc{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<!-- VIDEO HERO -->
<style>
.vh-frame{position:relative;max-width:840px;margin:30px auto 0;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#000;cursor:pointer;box-shadow:0 24px 60px rgba(0,0,0,.45)}
.vh-frame img{width:100%;height:100%;object-fit:cover;display:block}
.vh-frame iframe{width:100%;height:100%;border:0;display:block}
.vh-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.18);transition:background .2s}
.vh-frame:hover .vh-play{background:rgba(0,0,0,.06)}
.vh-play b{width:80px;height:80px;border-radius:50%;background:var(--n-red);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 28px rgba(0,0,0,.45)}
.vh-play b:after{content:"";border-style:solid;border-width:14px 0 14px 23px;border-color:transparent transparent transparent #fff;margin-left:5px}
.vh-center{text-align:center}.vh-center .n-lead{margin-left:auto;margin-right:auto}
.vh-cap{color:#aeb4bd;font-size:14px;margin:14px auto 0;max-width:660px}
</style>
<section class="n-hero"><div class="n-wrap vh-center">
  <p class="n-eyebrow">Services</p>
  <h1 class="n-h1">Everything you need to get found and chosen.</h1>
  <p class="n-lead">We capture your true story, publish it where customers search, and keep sharpening it &mdash; the full M.A.P. system, done for you.</p>
  <!-- SWAP VIDEO: change data-yt + both image IDs (currently VmOPhGmy2uk) to use a different YouTube video here. -->
  <div class="vh-frame" data-yt="VmOPhGmy2uk" data-title="Kansas City landmark captured by Ninja-360 - drone, 360 and video" role="button" tabindex="0" aria-label="Play Kansas City landmark video">
    <img src="https://i.ytimg.com/vi/VmOPhGmy2uk/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/VmOPhGmy2uk/hqdefault.jpg'" alt="Kansas City landmark captured by Ninja-360 in drone, 360 and video">
    <span class="vh-play"><b></b></span>
  </div>
  <p class="vh-cap">See the caliber of media we make &mdash; a Kansas City landmark, captured in drone, 360&deg; and video.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:18px">Get My Free Visibility Audit</a>
</div></section>
<script>
(function(){
  function vhPlay(f){if(!f||f.dataset.loaded)return;f.dataset.loaded="1";var id=f.getAttribute("data-yt");
    f.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="'+(f.getAttribute("data-title")||"")+'" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>';}
  document.addEventListener("click",function(e){var f=e.target.closest&&e.target.closest(".vh-frame");if(f)vhPlay(f);});
  document.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){var f=e.target.closest&&e.target.closest(".vh-frame");if(f){e.preventDefault();vhPlay(f);}}});
})();
</script>

<section class="n-section" id="make"><div class="n-wrap">
  <div class="maprow"><b>01 - Make</b></div>
  <h2 class="n-h2" style="margin-top:10px">Capture the right visuals &mdash; and the real story</h2>
  <p class="n-sub">High-quality media that builds instant trust. Real places, real people, never staged: we find the authentic heart of your business and put it on camera beautifully.</p>
  <div class="svc">
    <div class="scard" id="drone"><p class="ph">Drone</p><h3>Drone Photography</h3><p class="n-sub">Aerial photo &amp; video that makes your location and brand stand out.</p></div>
    <div class="scard" id="tours"><p class="ph">360 Tours</p><h3>Google &amp; Custom 360 Virtual Tours</h3><p class="n-sub">Immersive tours for Google Maps/Search, your website, Zillow, email, and social.</p></div>
    <div class="scard"><p class="ph">Matterport</p><h3>Matterport Walkthroughs</h3><p class="n-sub">Dollhouse 3D walkthroughs for real estate, hospitality, and large spaces.</p></div>
    <div class="scard"><p class="ph">Photo</p><h3>Professional &amp; Product Photography</h3><p class="n-sub">Clean, on-brand stills for your profile, site, and listings.</p></div>
    <div class="scard"><p class="ph">Video</p><h3>Video &amp; Social Content</h3><p class="n-sub">Reels, FPV, and interview-style video for YouTube, TikTok, and Facebook &mdash; the format where your story gets <em>felt</em>, not just seen.</p></div>
  </div>
</div></section>

<section class="n-section" id="amplify" style="background:var(--n-soft)"><div class="n-wrap">
  <div class="maprow"><b>02 - Amplify</b></div>
  <h2 class="n-h2" style="margin-top:10px">Publish where customers search</h2>
  <p class="n-sub">We put your content where it gets seen &mdash; and ranked.</p>
  <div class="svc">
    <div class="scard"><p class="ph">Google</p><h3>Google Business Profile Optimization</h3><p class="n-sub">Complete, optimized, and publishing to Google Maps &amp; Search.</p></div>
    <div class="scard"><p class="ph">Listings</p><h3>Local Listings &amp; Citations</h3><p class="n-sub">Consistent name, address, and phone across the web.</p></div>
    <div class="scard"><p class="ph">Web</p><h3>Website &amp; Embeds</h3><p class="n-sub">Tours, video, and QR codes embedded where they convert.</p></div>
  </div>
</div></section>

<section class="n-section" id="promote"><div class="n-wrap">
  <div class="maprow"><b>03 - Promote</b></div>
  <h2 class="n-h2" style="margin-top:10px">Stay visible and keep getting chosen</h2>
  <p class="n-sub">Visibility isn't a one-time project; it's a blade that needs sharpening. Ongoing updates, fresh content, and constant optimization &mdash; the recurring work that compounds while competitors go stale.</p>
  <p style="margin-top:14px"><a class="n-btn" href="/pricing">See Pricing &amp; Belts</a></p>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Not sure where you stand?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 4. Pricing
- **Slug / path:** `/pricing`  _(flat fallback: `pricing`)_
- **SEO Title:** Pricing - White, Brown & Black Belt | Ninja-360 Kansas City
- **Meta description:** Simple local-visibility pricing in Kansas City. Three belts - one-time build + monthly. Every plan starts with a free visibility audit.
- **301:** /google-virtual-tour-pricing-kansas-city/ -> /pricing   (RE-PASTE: live version is stale)

**Paste this into the Custom JS/HTML element:**

```html
<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>
<!-- /pricing  -  paste into a GHL Custom Code block.
     NOTE: audit CTAs point to the home-page audit section (https://ninja360.net/#audit).
     Promote to a dedicated /free-audit page later when optimizing conversion.
     GHL PAGE SETTINGS:
       Title:  Pricing - White, Brown & Black Belt | Ninja-360 Kansas City
       Slug:   pricing
       Meta:   Simple local-visibility pricing in Kansas City. Three belts - one-time build + monthly. Every plan starts with a free visibility audit.
     Put the JSON-LD at the bottom of this file into the page HEAD (tracking code).
     StoryBrand: customer = hero, Ninja-360 = guide, audit = the obvious next step. -->

<section class="n-hero">
  <div class="n-wrap">
    <p class="n-eyebrow">Pricing</p>
    <h1 class="n-h1">Simple pricing. Pick your belt.</h1>
    <p class="n-lead">One-time build to get set up, then a monthly plan that keeps you visible and chosen. The belts aren't a gimmick &mdash; they're our third philosophy made visible: always sharpen the blade. Each belt sharpens your visibility further. Every plan starts with a free audit, so you see exactly what you're buying before you commit.</p>
    <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
  </div>
</section>

<section class="n-section">
  <div class="n-wrap">
    <div class="n-map" style="grid-template-columns:repeat(3,1fr);align-items:stretch">

      <!-- WHITE BELT -->
      <div class="n-card" style="display:flex;flex-direction:column">
        <img class="belt-icon" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69c403a5c14403201337659d.png" alt="Ninja-360 White Belt" width="96" height="96">
        <p class="step">White Belt</p>
        <h3 class="n-h2" style="font-size:22px;margin:4px 0">Get on the map</h3>
        <p style="margin:6px 0 2px"><strong style="font-size:30px">$99</strong><span style="color:var(--n-muted)">/month</span></p>
        <p style="color:var(--n-muted);font-size:13.5px;margin:0 0 12px">$300 one-time build &middot; 6-month minimum</p>
        <ul style="font-size:14px;color:var(--n-ink);padding-left:18px;margin:0 0 16px">
          <li>Core media capture (Make)</li>
          <li>Google Business Profile optimization (Amplify)</li>
          <li>Published to Google Search &amp; Maps</li>
          <li>Monthly visibility upkeep (Promote)</li>
        </ul>
        <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:auto;text-align:center">Start with a Free Audit</a>
      </div>

      <!-- BROWN BELT (anchor) -->
      <div class="n-card" style="display:flex;flex-direction:column;border:2px solid var(--n-red);position:relative">
        <span style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--n-red);color:#fff;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:4px 12px;border-radius:20px">Build fee waived</span>
        <img class="belt-icon" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69d5a77ba7dcb4cff02c16a2.png" alt="Ninja-360 Brown Belt" width="96" height="96">
        <p class="step">Brown Belt</p>
        <h3 class="n-h2" style="font-size:22px;margin:4px 0">Grow &amp; get chosen</h3>
        <p style="margin:6px 0 2px"><strong style="font-size:30px">$499</strong><span style="color:var(--n-muted)">/month</span></p>
        <p style="color:var(--n-muted);font-size:13.5px;margin:0 0 12px"><s>$1,000 build</s> waived when you start &middot; 12-month minimum</p>
        <ul style="font-size:14px;color:var(--n-ink);padding-left:18px;margin:0 0 16px">
          <li>Everything in White, expanded</li>
          <li>Premium media: drone + 360 tours</li>
          <li>Local listings &amp; citations</li>
          <li>Monthly content &amp; updates that keep you ahead</li>
          <li>Annual refresh available as add-on</li>
        </ul>
        <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:auto;text-align:center">Start with a Free Audit</a>
      </div>

      <!-- BLACK BELT -->
      <div class="n-card" style="display:flex;flex-direction:column;background:var(--n-black);color:#fff">
        <span style="display:inline-block;background:var(--n-red);color:#fff;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:3px 10px;border-radius:20px;width:max-content">Build fee waived</span>
        <img class="belt-icon" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69c403b776c88204c13af763.png" alt="Ninja-360 Black Belt" width="96" height="96">
        <p class="step" style="margin-top:10px">Black Belt</p>
        <h3 class="n-h2" style="font-size:22px;margin:4px 0;color:#fff">Own your market</h3>
        <p style="margin:6px 0 2px"><strong style="font-size:30px">$999</strong><span style="color:#aeb6c0">/month</span></p>
        <p style="color:#aeb6c0;font-size:13.5px;margin:0 0 12px"><s>$3,000 build</s> waived when you start &middot; 18-month minimum</p>
        <ul style="font-size:14px;color:#e6e9ee;padding-left:18px;margin:0 0 16px">
          <li>Everything in Brown, premium tier</li>
          <li>Priority media &amp; ongoing optimization</li>
          <li><strong>Annual refresh included</strong></li>
          <li>Full M.A.P. system, managed for you</li>
        </ul>
        <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:auto;text-align:center">Start with a Free Audit</a>
      </div>

    </div>

    <p style="text-align:center;color:var(--n-muted);font-size:13px;margin-top:26px;max-width:760px;margin-left:auto;margin-right:auto">
      Auto-billing is required on all plans and minimum terms apply; early termination requires payment of the remaining contract balance. The build fee can be waived when you start on Brown or Black Belt &mdash; ask us in your audit. Annual refresh is included on Black Belt and available as an add-on on Brown. Exact deliverables are confirmed in your free audit and Statement of Work &mdash; we tell the truth about scope before you sign, because that's how we work.
    </p>
  </div>
</section>

<!-- include components/cta.html here -->

<!-- ===== PASTE THIS INTO THE PAGE HEAD (GHL tracking code) =====
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Local visibility / Google Business Profile optimization",
  "provider": { "@type": "ProfessionalService", "name": "Ninja-360 Digital Media", "telephone": "+1-844-360-6465", "areaServed": "Kansas City metro" },
  "offers": [
    { "@type": "Offer", "name": "White Belt", "price": "99", "priceCurrency": "USD", "description": "Monthly local visibility plan. $300 one-time build, 6-month minimum." },
    { "@type": "Offer", "name": "Brown Belt", "price": "499", "priceCurrency": "USD", "description": "Monthly plan with drone + 360 media. Build fee waived, 12-month minimum." },
    { "@type": "Offer", "name": "Black Belt", "price": "999", "priceCurrency": "USD", "description": "Premium managed plan, annual refresh included. Build fee waived, 18-month minimum." }
  ]
}
</script>
============================================================= -->

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 5. About
- **Slug / path:** `/about`  _(flat fallback: `about`)_
- **SEO Title:** About Ninja-360 | Our Three Philosophies | Kansas City
- **Meta description:** Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja-360 and the three philosophies behind every Kansas City project.
- **301:** /about-ninja-360-digital-marketing/ -> /about

**Paste this into the Custom JS/HTML element:**

```html
<!-- /about - "Our Philosophy"  -  GHL SEO Title: About Ninja-360 | Our Three Philosophies | Kansas City
     Meta: Put them on the map. Tell the truth beautifully. Always sharpen the blade. Meet Ninja-360 and the three philosophies behind every Kansas City project.
     Copy: V02 philosophy infusion, Tim-rooted (see COPY-REWRITE-V02.md + philosophies_V02.md).
     The core of this page is the philosophy; the root of the philosophy is Tim Petet -
     each philosophy carries a first-person "root" from Tim (DRAFTED IN HIS VOICE from
     documented facts - Tim should read + approve/edit the three quotes before publish).
     This page kills the live /about 404 AND ships the philosophy page.
     Paste body into a Custom JS/HTML element.
     ENTITY / AI-SEARCH: the AboutPage/Organization schema below goes in the page HEAD -
     canonical NAP, sameAs -> official socials, triad description, founder = Tim Petet.
     Add Tim's photo where marked (upload to GHL media; alt "Tim Petet, Ninja-360 founder, Kansas City").
     BADGE IMAGES: 4 img slots have src="REPLACE-GHL-URL-..." - upload the ninja badge art
     to GHL media (webp/png, ~600px is plenty) and swap each URL. Until swapped, the imgs
     hide themselves (onerror) so the page still renders clean.
       ninja360-badge-crew        -> origin block   (four-ninja production crew)
       ninja360-badge-map         -> Philosophy 1   (mountaintop flag + map pin)
       ninja360-badge-camera-crew -> Philosophy 2   (three ninjas, camera forward)
       ninja360-badge-blades      -> Philosophy 3   (crossed blades + shurikens)
       ninja360-badge-checklist   -> closing section (checklist ninja + star; optional -
                                     delete the img if the page feels crowded) -->

<!-- ===== PASTE THIS INTO THE PAGE HEAD (GHL tracking code) - AboutPage/Organization entity schema =====
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://ninja360.net/about#aboutpage",
  "url": "https://ninja360.net/about",
  "name": "About Ninja-360 | Our Three Philosophies",
  "mainEntity": {
    "@type": "ProfessionalService",
    "@id": "https://ninja360.net/#business",
    "name": "Ninja-360 Digital Media",
    "url": "https://ninja360.net",
    "telephone": "+1-844-360-6465",
    "logo": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69d5a732a7dcb4cff02c0cf5.png",
    "image": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/cCPr3A6gnc4ihe1G44w5/media/69d5a732a7dcb4cff02c0cf5.png",
    "address": { "@type": "PostalAddress", "addressLocality": "Kansas City", "addressRegion": "MO", "addressCountry": "US" },
    "areaServed": { "@type": "Place", "name": "Kansas City metropolitan area" },
    "slogan": "Put them on the map. Tell the truth beautifully. Always sharpen the blade.",
    "description": "Ninja-360 is Kansas City's local visibility system, built on three philosophies: put people on the map, fall in love with the client's true story, and always sharpen the blade. In short: put them on the map, tell the truth beautifully, always sharpen the blade.",
    "founder": {
      "@type": "Person",
      "name": "Tim Petet",
      "jobTitle": "Owner / Operator",
      "description": "Google Certified Photographer, web developer, and Kansas City native. The three Ninja-360 philosophies are built from his experience.",
      "knowsAbout": ["Google Business Profile optimization", "Local SEO", "360 virtual tours", "Drone photography", "Web development"]
    },
    "sameAs": [
      "https://www.facebook.com/KCNinja360",
      "https://www.instagram.com/kcninja360/",
      "https://www.youtube.com/@ninja360vr",
      "https://www.tiktok.com/@ninja360digitalma",
      "https://www.linkedin.com/company/ninja360/"
    ]
  }
}
</script>
===== END HEAD CODE ===== -->

<!-- ===== PASTE THIS INTO THE PAGE HEAD (GHL tracking code) - VideoObject for the hero video =====
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "REPLACE - e.g. Kansas City [Landmark Name] - Captured by Ninja-360",
  "description": "REPLACE - one sentence: the Kansas City landmark shown + that Ninja-360 is a KC-based visibility studio.",
  "thumbnailUrl": "https://i.ytimg.com/vi/SxluMw0OGfo/maxresdefault.jpg",
  "uploadDate": "REPLACE-YYYY-MM-DD",
  "duration": "REPLACE-PT#M#S",
  "contentUrl": "https://www.youtube.com/watch?v=SxluMw0OGfo",
  "embedUrl": "https://www.youtube.com/embed/SxluMw0OGfo"
}
</script>
===== END HEAD CODE ===== -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,30px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-ink);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.phil-num{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:var(--n-red);color:#fff;font-weight:800;font-size:20px;margin-bottom:12px}
.pull-quote{font-size:clamp(22px,3.4vw,32px);font-weight:800;line-height:1.25;letter-spacing:-.01em;color:var(--n-ink);max-width:820px;margin:14px 0}
.root{border-left:4px solid var(--n-red);background:#fff;border:1px solid var(--n-line);border-left:4px solid var(--n-red);border-radius:0 10px 10px 0;padding:14px 18px;margin-top:18px;max-width:760px}
.root .rt{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--n-red);margin:0 0 6px}
.root p{font-style:italic;color:var(--n-ink);margin:0;font-size:15.5px}
.phil-split{display:grid;grid-template-columns:1fr 280px;gap:32px;align-items:center}
.phil-badge{width:100%;max-width:280px;height:auto;justify-self:center}
@media(max-width:780px){.phil-split{grid-template-columns:1fr}.phil-badge{max-width:220px;margin-top:8px}}
.bio{display:grid;grid-template-columns:280px 1fr;gap:28px;align-items:start}
.bio .ph{aspect-ratio:3/4;background:#eef0f3;border:1px solid var(--n-line);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#8a929b;font-size:13px;text-align:center;padding:10px}
.creds{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}
.creds span{font-size:12px;font-weight:700;background:var(--n-soft);border:1px solid var(--n-line);border-radius:20px;padding:5px 11px;color:#3b454f}
@media(max-width:780px){.bio{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<!-- VIDEO HERO -->
<style>
.vh-frame{position:relative;max-width:840px;margin:30px auto 0;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#000;cursor:pointer;box-shadow:0 24px 60px rgba(0,0,0,.45)}
.vh-frame img{width:100%;height:100%;object-fit:cover;display:block}
.vh-frame iframe{width:100%;height:100%;border:0;display:block}
.vh-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.18);transition:background .2s}
.vh-frame:hover .vh-play{background:rgba(0,0,0,.06)}
.vh-play b{width:80px;height:80px;border-radius:50%;background:var(--n-red);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 28px rgba(0,0,0,.45)}
.vh-play b:after{content:"";border-style:solid;border-width:14px 0 14px 23px;border-color:transparent transparent transparent #fff;margin-left:5px}
.vh-center{text-align:center}.vh-center .n-lead{margin-left:auto;margin-right:auto}
.vh-cap{color:#aeb4bd;font-size:14px;margin:14px auto 0;max-width:660px}
</style>
<section class="n-hero"><div class="n-wrap vh-center">
  <p class="n-eyebrow">About Ninja-360</p>
  <h1 class="n-h1">Put them on the map. Tell the truth beautifully.<br>Always sharpen the blade.</h1>
  <p class="n-lead">Three philosophies. Every project. No exceptions.</p>
  <!-- SWAP VIDEO: change data-yt + both image IDs (currently SxluMw0OGfo) to use a different YouTube video here. -->
  <div class="vh-frame" data-yt="SxluMw0OGfo" data-title="Kansas City landmark captured by Ninja-360" role="button" tabindex="0" aria-label="Play Kansas City landmark video">
    <img src="https://i.ytimg.com/vi/SxluMw0OGfo/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/SxluMw0OGfo/hqdefault.jpg'" alt="Kansas City landmark captured by Ninja-360">
    <span class="vh-play"><b></b></span>
  </div>
  <p class="vh-cap">Kansas City is our home &mdash; here's our city the way we capture it.</p>
</div></section>
<script>
(function(){
  function vhPlay(f){if(!f||f.dataset.loaded)return;f.dataset.loaded="1";var id=f.getAttribute("data-yt");
    f.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="'+(f.getAttribute("data-title")||"")+'" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>';}
  document.addEventListener("click",function(e){var f=e.target.closest&&e.target.closest(".vh-frame");if(f)vhPlay(f);});
  document.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){var f=e.target.closest&&e.target.closest(".vh-frame");if(f){e.preventDefault();vhPlay(f);}}});
})();
</script>

<!-- ORIGIN (short - the customer stays the hero) -->
<section class="n-section"><div class="n-wrap">
  <div class="phil-split"><div>
  <p class="n-eyebrow">Where it started</p>
  <h2 class="n-h2">The best businesses aren't always the most visible ones.</h2>
  <p class="n-sub">It started with a simple observation about Kansas City: the restaurant with the perfect recipe loses foot traffic to the chain with better Google photos. The dentist with a decade of five-star care sits below a competitor with triple the reviews. That's not a marketing problem. That's an injustice &mdash; and it's fixable.</p>
  <p class="n-sub" style="margin-top:12px">Tim Petet watched it happen from both sides: years building marketing technology for the big leagues of automotive retail, then back home in Kansas City, watching the businesses he grew up around lose to weaker competitors with better pixels. Ninja-360 is what he did about it. The three philosophies below aren't a branding exercise &mdash; they're his experience, written down.</p>
  </div>
  <img class="phil-badge" src="REPLACE-GHL-URL-ninja360-badge-crew" alt="Ninja-360 badge: four-ninja media crew with cameras, microphone, and tools - the Kansas City visibility team" width="280" height="280" loading="lazy" onerror="this.style.display='none'">
  </div>
</div></section>

<!-- PHILOSOPHY 1 -->
<section class="n-section" style="background:var(--n-soft)"><div class="n-wrap">
  <div class="phil-split"><div>
  <span class="phil-num" aria-hidden="true">1</span>
  <h2 class="n-h2">Put People on the Map</h2>
  <p class="n-sub">We exist to make deserving businesses visible, heard, and chosen. Rooted in Kansas City and local business, we use the M.A.P. Method &mdash; Make, Amplify, Promote &mdash; to help our clients grow. And notice the word: <em>people</em>. Behind every storefront is an owner who bet everything on their craft. When we put a business on the map, we're putting a person's life work in front of the customers who've been driving past it.</p>
  <div class="root">
    <p class="rt">The root &mdash; Tim</p>
    <p>&ldquo;I'm a Kansas City native. The owners behind these storefronts are my neighbors &mdash; people who bet everything on their craft. Ninja-360 started as a hobby that Google put on the map, and being found turned it into a business. I know firsthand what being found can do. Now it's what I do for other people.&rdquo;</p>
  </div>
  </div>
  <img class="phil-badge" src="REPLACE-GHL-URL-ninja360-badge-map" alt="Ninja-360 badge: ninja planting a flag beside a glowing map pin on a mountain summit - Put People on the Map" width="280" height="280" loading="lazy" onerror="this.style.display='none'">
  </div>
</div></section>

<!-- PHILOSOPHY 2 -->
<section class="n-section"><div class="n-wrap">
  <div class="phil-split"><div>
  <span class="phil-num" aria-hidden="true">2</span>
  <h2 class="n-h2">Fall in Love with the Client's True Story</h2>
  <p class="n-sub">We seek the authentic heart of every client and tell their story in a unique, beautiful, and emotionally compelling way. Real places, real people &mdash; never staged, never stock. Technology is the tool; genuine human connection is the goal. If the story could be told about any business in your category, we haven't found yours yet.</p>
  <div class="root">
    <p class="rt">The root &mdash; Tim</p>
    <p>&ldquo;I was a photographer before I was a marketer. Ninja-360 was born from a fascination with virtual reality &mdash; technology that lets someone stand inside your story. The camera, the drone, the 360 rig: none of it is the point. The point is what it lets people feel about a real place. Tech is the tool. The story was always the goal.&rdquo;</p>
  </div>
  </div>
  <img class="phil-badge" src="REPLACE-GHL-URL-ninja360-badge-camera-crew" alt="Ninja-360 badge: ninja camera crew with camera, blade, and drone - Fall in Love with the Client's True Story" width="280" height="280" loading="lazy" onerror="this.style.display='none'">
  </div>
</div></section>

<!-- PHILOSOPHY 3 -->
<section class="n-section" style="background:var(--n-soft)"><div class="n-wrap">
  <div class="phil-split"><div>
  <span class="phil-num" aria-hidden="true">3</span>
  <h2 class="n-h2">Always Sharpen the Blade</h2>
  <p class="n-sub">We stay on the cutting edge through research, experimentation, disciplined execution, and honest reflection. We are willing to try, fail, learn, and improve &mdash; but we innovate responsibly, transparently, and in service of the client. It's why our plans are named after belts: mastery isn't a purchase, it's a practice.</p>
  <div class="root">
    <p class="rt">The root &mdash; Tim</p>
    <p>&ldquo;Nobody handed me this. I taught myself virtual tours as a hobby until Google certified the work. Every skill on my belt &mdash; web, photo, drone, 360, Matterport &mdash; came the same way: try, fail, learn, improve. That's why the plans are belts. It's not a gimmick; it's how I actually work.&rdquo;</p>
  </div>
  </div>
  <img class="phil-badge" src="REPLACE-GHL-URL-ninja360-badge-blades" alt="Ninja-360 badge: ninja with crossed blades and throwing stars - Always Sharpen the Blade" width="280" height="280" loading="lazy" onerror="this.style.display='none'">
  </div>
</div></section>

<!-- FOUNDER (entity block: name, role - pairs with Organization schema + sameAs links) -->
<section class="n-section"><div class="n-wrap">
  <div class="bio">
    <div class="ph">[ Add Tim's photo here<br>upload to GHL media ]</div>
    <div>
      <p class="n-eyebrow">The root of the philosophy</p>
      <h2 class="n-h2">Tim Petet &mdash; Owner / Operator</h2>
      <div class="creds">
        <span>Google Certified Photographer</span><span>Web Development</span><span>Graphic Design</span><span>Google Analytics</span><span>Google Ads</span>
      </div>
      <p class="n-sub">Every philosophy above is autobiography before it's strategy. Tim is a Kansas City native and a web developer-turned-photographer who spent years building marketing technology for the big leagues &mdash; VinSolutions, Autotrader, dealer.com, ScriptPro &mdash; and brought everything he learned back to Main Street.</p>
      <p class="n-sub" style="margin-top:12px">Ninja-360 began as a hobby: Google virtual tours, born from a fascination with virtual reality. The work was good enough that Google made him a Certified Photographer, and being findable turned the hobby into a business. With formal training in marketing and sales, he now does the same for the businesses he grew up around &mdash; building their websites, optimizing their Google Business Profiles, managing their listings, and telling their stories the way he'd want his own told.</p>
    </div>
  </div>
</div></section>

<!-- CLOSING + CTA -->
<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">In its simplest form:</p>
  <p class="pull-quote" style="color:#fff;margin-left:auto;margin-right:auto">Put them on the map. Tell the truth beautifully. Always sharpen the blade.</p>
  <p class="n-lead" style="margin:0 auto 22px"><em>Want to see what those three philosophies look like applied to your business?</em></p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
  <img class="phil-badge" src="REPLACE-GHL-URL-ninja360-badge-checklist" alt="Ninja-360 badge: ninja beside a completed checklist under a shooting star - disciplined execution, honest reflection" width="200" height="200" style="max-width:200px;margin:28px auto 0;display:block" loading="lazy" onerror="this.style.display='none'">
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 6. Our Work (hub)
- **Slug / path:** `/work`  _(flat fallback: `work`)_
- **SEO Title:** Our Work | Kansas City Visibility & Virtual Tours | Ninja-360
- **Meta description:** See Ninja-360's work across Kansas City - restaurants, real estate, schools, parks, dental, chiropractic, and more.
- **301:** /portfolio -> /work

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work  -  GHL SEO Title: Our Work | Kansas City Visibility & Virtual Tours | Ninja-360
     Keep nav + footer native. Paste body into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:700px}
.n-sub{color:var(--n-muted);max-width:720px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:26px}
.vcard{display:block;text-decoration:none;color:var(--n-ink);background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:22px;transition:.15s}
.vcard:hover{border-color:var(--n-red);box-shadow:0 6px 18px rgba(0,0,0,.06)}
.vcard .vt{font-weight:800;font-size:18px}
.vcard .vd{color:var(--n-muted);font-size:14px;margin-top:4px}
.vcard .va{color:var(--n-red);font-weight:700;font-size:14px;margin-top:10px;display:inline-block}
.feat{border:2px solid var(--n-red)}
.feat .badge{display:inline-block;background:var(--n-red);color:#fff;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;border-radius:20px;padding:3px 10px;margin-bottom:8px}
@media(max-width:780px){.vgrid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work</p>
  <h1 class="n-h1">Real businesses. Found and chosen on Google.</h1>
  <p class="n-lead">A decade of putting Kansas City businesses on the map &mdash; from single storefronts to a 15+ location restaurant chain. Every project starts the same way: we fall in love with the true story, then tell it beautifully. Browse by industry.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <div class="vgrid">
    <a class="vcard feat" href="/work/restaurants"><span class="badge">Flagship</span><div class="vt">Restaurants</div><div class="vd">15+ location chain case study (54th Street Grill) plus single-location restaurants.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/real-estate"><div class="vt">Real Estate</div><div class="vd">Residential &amp; commercial tours for listings, Zillow, and social.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/automotive"><div class="vt">Automotive</div><div class="vd">Dealership lots, showrooms, and service departments.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/gyms-fitness"><div class="vt">Gyms &amp; Fitness</div><div class="vd">Equipment, classes, and facilities that drive walk-ins.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/hospitality"><div class="vt">Hotels &amp; Hospitality</div><div class="vd">Rooms, lobbies, and amenities that drive direct bookings.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/schools"><div class="vt">Schools &amp; Athletics</div><div class="vd">Campus and athletics walkthroughs for families and recruits.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/parks-events"><div class="vt">Parks &amp; Events</div><div class="vd">Venues, parks, and events captured in immersive 360.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/medical-dental"><div class="vt">Medical &amp; Dental</div><div class="vd">Trust-building visuals and Google visibility for practices.</div><span class="va">See the work &rarr;</span></a>
    <a class="vcard" href="/work/wellness-chiro"><div class="vt">Wellness &amp; Chiropractic</div><div class="vd">Get your practice found where patients are searching.</div><span class="va">See the work &rarr;</span></a>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Your business could be next.</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit &mdash; then let's find the story your customers haven't heard yet.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 7. Work: Restaurants (flagship)
- **Slug / path:** `/work/restaurants`  _(flat fallback: `work-restaurants`)_
- **SEO Title:** Restaurant Virtual Tours | Kansas City | Ninja-360
- **Meta description:** Restaurant 360 virtual tours and Google visibility in Kansas City. See how we put a 15+ location chain (54th Street Grill) on the map across MO and TX.
- **301:** /restaurant-virtual-tours-kc/ -> /work/restaurants

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/restaurants  -  FLAGSHIP. GHL SEO Title: Restaurant Virtual Tours | Kansas City | Ninja-360
     Meta: Restaurant 360 virtual tours and Google visibility in Kansas City. See how we put a 15+ location chain (54th Street Grill) on the map across MO and TX.
     Keep nav + footer native. Paste body into a Custom JS/HTML element. -->

<!-- ===== PASTE THIS INTO THE PAGE HEAD (GHL tracking code) - VideoObject for each restaurant video.
     Fill in name / description / uploadDate (YYYY-MM-DD) / duration (PT#M#S) / exact location for each. =====
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"VideoObject",
  "name":"54th Street Grill & Bar Pflugerville, TX - FPV Drone Tour by Ninja-360",
  "description":"An FPV drone tour through 54th Street Grill & Bar in Pflugerville, Texas - from the entrance to the bar and dining room, a go-to spot near Austin for game nights and family dinners.",
  "thumbnailUrl":"https://i.ytimg.com/vi/v87kC9x-F04/maxresdefault.jpg",
  "uploadDate":"REPLACE-YYYY-MM-DD","duration":"REPLACE-PT#M#S",
  "contentUrl":"https://www.youtube.com/watch?v=v87kC9x-F04","embedUrl":"https://www.youtube.com/embed/v87kC9x-F04" }
</script>
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"VideoObject",
  "name":"Five Four Draft House Zona Rosa - FPV Drone Tour by Ninja-360",
  "description":"An FPV drone tour of Five Four Draft House in Zona Rosa, Kansas City - immersive virtual-tour video marketing for Kansas City businesses by Ninja-360.",
  "thumbnailUrl":"https://i.ytimg.com/vi/aZW2q3-NLwc/maxresdefault.jpg",
  "uploadDate":"2026-02-13","duration":"REPLACE-PT#M#S",
  "contentUrl":"https://www.youtube.com/watch?v=aZW2q3-NLwc","embedUrl":"https://www.youtube.com/embed/aZW2q3-NLwc" }
</script>
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"VideoObject",
  "name":"Five Four Draft House Independence, MO - FPV Drone Tour by Ninja-360",
  "description":"A one-take FPV drone tour through Five Four Draft House's reimagined lounge in Independence, MO - sports screens, tap walls and a laid-back vibe, by Ninja-360.",
  "thumbnailUrl":"https://i.ytimg.com/vi/QVYWWu5k4Ss/maxresdefault.jpg",
  "uploadDate":"2026-02-06","duration":"REPLACE-PT#M#S",
  "contentUrl":"https://www.youtube.com/watch?v=QVYWWu5k4Ss","embedUrl":"https://www.youtube.com/embed/QVYWWu5k4Ss" }
</script>
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"VideoObject",
  "name":"54th Street Restaurant & Drafthouse Cedar Park, TX - FPV Drone Tour by Ninja-360",
  "description":"A single continuous FPV drone flight through 54th Street Restaurant & Drafthouse in Cedar Park, Texas - front doors, dining room, kitchen, bar, cinema, GolfBay, fire pits and pickleball court.",
  "thumbnailUrl":"https://i.ytimg.com/vi/EHRUOzmVtyA/maxresdefault.jpg",
  "uploadDate":"2026-03-10","duration":"REPLACE-PT#M#S",
  "contentUrl":"https://www.youtube.com/watch?v=EHRUOzmVtyA","embedUrl":"https://www.youtube.com/embed/EHRUOzmVtyA" }
</script>
===== END HEAD CODE ===== -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:22px}
.step{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:20px}
.step b{color:var(--n-red);font-size:12px;letter-spacing:.05em;text-transform:uppercase}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:12px 14px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 6px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.steps,.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Restaurants</p>
  <h1 class="n-h1">Restaurant visibility that fills tables.</h1>
  <p class="n-lead">360 tours, drone, and Google publishing that show diners your space before they ever walk in &mdash; across single locations and multi-state chains.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Flagship case study</p>
  <h2 class="n-h2">54th Street Grill &mdash; a 15+ location chain</h2>
  <p class="n-sub">A growing restaurant chain needs consistent, search-ready visibility in every market it operates. Here's how we delivered it.</p>
  <div class="steps">
    <div class="step"><b>The problem</b><p class="n-sub" style="margin:6px 0 0">Each location lived or died by local search, but presence was inconsistent market to market.</p></div>
    <div class="step"><b>What we did</b><p class="n-sub" style="margin:6px 0 0">Captured and published 360 tours (plus drone &amp; video) for each location, optimized for Google Maps and Search.</p></div>
    <div class="step"><b>The outcome</b><p class="n-sub" style="margin:6px 0 0">One brand, found everywhere &mdash; a repeatable visibility system across 16+ locations in MO &amp; TX.</p></div>
  </div>
</div></section>

<!-- RESTAURANT VIDEO GRID -->
<style>
.vframe{position:relative;aspect-ratio:16/9;background:#000;cursor:pointer;overflow:hidden;display:block}
.vframe img{width:100%;height:100%;object-fit:cover;display:block}
.vframe iframe{width:100%;height:100%;border:0;display:block}
.vplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.18);transition:background .2s}
.vframe:hover .vplay{background:rgba(0,0,0,.06)}
.vplay b{width:62px;height:62px;border-radius:50%;background:var(--n-red);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(0,0,0,.4)}
.vplay b:after{content:"";border-style:solid;border-width:11px 0 11px 18px;border-color:transparent transparent transparent #fff;margin-left:4px}
</style>
<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">See them in motion</p>
  <h2 class="n-h2">54th Street Grill &mdash; on camera</h2>
  <p class="n-sub">Highlight videos that show diners the space, the food, and the vibe before they ever walk in &mdash; another way we keep every location getting chosen on Google.</p>
  <div class="n-grid">
    <article class="wc">
      <div class="vframe" data-yt="v87kC9x-F04" data-title="54th Street Grill &amp; Bar FPV drone tour in Pflugerville, TX - Ninja-360" role="button" tabindex="0" aria-label="Play 54th Street Pflugerville FPV drone tour">
        <img src="https://i.ytimg.com/vi/v87kC9x-F04/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/v87kC9x-F04/hqdefault.jpg'" alt="54th Street Grill and Bar FPV drone tour in Pflugerville, TX by Ninja-360">
        <span class="vplay"><b></b></span>
      </div>
      <div class="wc-body"><h3 class="wc-name">54th Street Grill &amp; Bar</h3><p class="wc-city">Pflugerville, TX</p><div class="wc-badges"><span>FPV Tour</span></div></div>
    </article>
    <article class="wc">
      <div class="vframe" data-yt="aZW2q3-NLwc" data-title="Five Four Draft House FPV drone tour in Zona Rosa, Kansas City - Ninja-360" role="button" tabindex="0" aria-label="Play Five Four Draft House Zona Rosa FPV drone tour">
        <img src="https://i.ytimg.com/vi/aZW2q3-NLwc/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/aZW2q3-NLwc/hqdefault.jpg'" alt="Five Four Draft House FPV drone tour in Zona Rosa, Kansas City, MO by Ninja-360">
        <span class="vplay"><b></b></span>
      </div>
      <div class="wc-body"><h3 class="wc-name">Five Four Draft House</h3><p class="wc-city">Zona Rosa, MO</p><div class="wc-badges"><span>FPV Tour</span></div></div>
    </article>
    <article class="wc">
      <div class="vframe" data-yt="QVYWWu5k4Ss" data-title="Five Four Draft House FPV drone tour in Independence, MO - Ninja-360" role="button" tabindex="0" aria-label="Play Five Four Draft House Independence FPV drone tour">
        <img src="https://i.ytimg.com/vi/QVYWWu5k4Ss/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/QVYWWu5k4Ss/hqdefault.jpg'" alt="Five Four Draft House FPV drone tour in Independence, MO by Ninja-360">
        <span class="vplay"><b></b></span>
      </div>
      <div class="wc-body"><h3 class="wc-name">Five Four Draft House</h3><p class="wc-city">Independence, MO</p><div class="wc-badges"><span>FPV Tour</span></div></div>
    </article>
    <article class="wc">
      <div class="vframe" data-yt="EHRUOzmVtyA" data-title="54th Street Restaurant &amp; Drafthouse FPV drone tour in Cedar Park, TX - Ninja-360" role="button" tabindex="0" aria-label="Play 54th Street Cedar Park FPV drone tour">
        <img src="https://i.ytimg.com/vi/EHRUOzmVtyA/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/EHRUOzmVtyA/hqdefault.jpg'" alt="54th Street Restaurant and Drafthouse FPV drone tour in Cedar Park, TX by Ninja-360">
        <span class="vplay"><b></b></span>
      </div>
      <div class="wc-body"><h3 class="wc-name">54th Street Drafthouse</h3><p class="wc-city">Cedar Park, TX</p><div class="wc-badges"><span>FPV Tour</span></div></div>
    </article>
  </div>
</div></section>
<script>
(function(){
  function vPlay(f){if(!f||f.dataset.loaded)return;f.dataset.loaded="1";var id=f.getAttribute("data-yt");
    f.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="'+(f.getAttribute("data-title")||"")+'" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>';}
  document.addEventListener("click",function(e){var f=e.target.closest&&e.target.closest(".vframe");if(f)vPlay(f);});
  document.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){var f=e.target.closest&&e.target.closest(".vframe");if(f){e.preventDefault();vPlay(f);}}});
})();
</script>

<section class="n-section" style="background:var(--n-soft)"><div class="n-wrap">
  <p class="n-eyebrow">Every location on the map</p>
  <h2 class="n-h2">16 locations. One consistent presence.</h2>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7vGKJ" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Zona Rosa, MO - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Zona Rosa, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://virtualtour.ninja-360.com/share/collection/7cSTD" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Olathe, KS - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Olathe, KS</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://virtualtour.ninja-360.com/share/collection/7cCF0" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Independence, MO - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Independence, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://virtualtour.ninja-360.com/share/collection/7qzC7" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Lee's Summit, MO - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Lee's Summit, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7kKRj" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Chesterfield, MO - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Chesterfield, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7kybV" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Glen Carbon, MO - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Glen Carbon, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7YWBv" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Frisco, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Frisco, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/N70Kn/collection/7kNG4" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in McKinney, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">McKinney, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7kRVv" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Irving, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Irving, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7Yj01" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Mansfield, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Mansfield, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7Yt0W" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Lewisville, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Lewisville, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7v9Md" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Pflugerville, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Pflugerville, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7LiveOak" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in Live Oak, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">Live Oak, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7YrRN" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in The Colony, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">The Colony, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7q4hX" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in City Base West, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">City Base West, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/NPwbW/collection/7kr2K" loading="lazy" allowfullscreen title="54th Street Grill 360 virtual tour in The Rim, TX - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">54th Street Grill</h3><p class="wc-city">The Rim, TX</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">One location or fifty &mdash; we'll put you on the map.</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit and see exactly where your restaurant shows up on Google.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 8. Work: Real Estate
- **Slug / path:** `/work/real-estate`  _(flat fallback: `work-real-estate`)_
- **SEO Title:** Real Estate Virtual Tours | Kansas City | Ninja-360
- **Meta description:** 360 real estate virtual tours in Kansas City - residential & commercial. Add to your website, Zillow, and social.
- **301:** /real-estate-virtual-tours/ -> /work/real-estate

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/real-estate  -  GHL SEO Title: Real Estate Virtual Tours | Kansas City | Ninja-360
     Meta: 360 real estate virtual tours in Kansas City - residential & commercial. Add to your website, Zillow, and social. Drone and video available.
     Keep nav + footer native. Paste body into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,30px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.val{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:8px}
.vc{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:20px}
.vc h3{font-size:17px;margin:0 0 6px}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:14px 16px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 8px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.val,.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Real Estate</p>
  <h1 class="n-h1">Real Estate Virtual Tours</h1>
  <p class="n-lead">360 virtual tours for residential and commercial real estate &mdash; the perfect sales tool. Add them to your website, Zillow, or any social platform, with drone and custom video available.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">Tours that sell the space</h2>
  <p class="n-sub">Let buyers explore from the comfort of their home or phone, day or night.</p>
  <div class="n-grid">
    <article class="wc">
      <iframe class="wc-embed" src="https://kuula.co/share/collection/71MZY?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Residential real estate 360 virtual tour in Kansas City - Ninja-360"></iframe>
      <div class="wc-body"><h3 class="wc-name">Residential Listing</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
    </article>
    <article class="wc">
      <iframe class="wc-embed" src="https://kuula.co/share/collection/7K4nF?logo=1&info=1&fs=1&vr=0&sd=1&autop=7&thumbs=1" loading="lazy" allowfullscreen title="Real estate 360 virtual tour collection in Kansas City - Ninja-360"></iframe>
      <div class="wc-body"><h3 class="wc-name">Property Collection</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
    </article>
    <article class="wc">
      <iframe class="wc-embed" src="https://my.matterport.com/show/?m=eZRCdUnCQRQ&play=1" loading="lazy" allowfullscreen allow="xr-spatial-tracking" title="Real estate Matterport walkthrough in Kansas City - Ninja-360"></iframe>
      <div class="wc-body"><h3 class="wc-name">Matterport Walkthrough</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>Matterport</span></div></div>
    </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-soft)"><div class="n-wrap">
  <p class="n-eyebrow">Why it works</p>
  <h2 class="n-h2">More and more leads come from search and social</h2>
  <div class="val">
    <div class="vc"><h3>Priceless for buyers</h3><p class="n-sub">An immersive experience that sets your listing apart and keeps buyers engaged longer.</p></div>
    <div class="vc"><h3>Goes everywhere</h3><p class="n-sub">Add it to your website, Zillow, email, and social &mdash; plus drone and custom video.</p></div>
    <div class="vc"><h3>QR-code ready</h3><p class="n-sub">Put a QR code of the tour on flyers and business cards so buyers can explore on the go.</p></div>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">List it. Tour it. Sell it.</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 9. Work: Automotive
- **Slug / path:** `/work/automotive`  _(flat fallback: `work-automotive`)_
- **SEO Title:** Automotive & Dealership Virtual Tours | Kansas City
- **Meta description:** Automotive and dealership 360 tours, drone, and video in Kansas City. Showcase your lot, showroom, and service department.
- **301:** /automotive-virtual-tours/ -> /work/automotive

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/automotive  -  GHL SEO Title: Automotive &amp; Dealership Virtual Tours | Kansas City
     Meta: Automotive and dealership 360 tours, drone, and video in Kansas City. Showcase your lot, showroom, and service department.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:13px 15px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 7px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Automotive</p>
  <h1 class="n-h1">Automotive &amp; Dealership Tours</h1>
  <p class="n-lead">Showcase your lot, showroom, and service department with immersive media that brings buyers in before they ever drive over.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">The kind of work we do for dealerships &amp; car shows</h2>
  <p class="n-sub">A sample of our automotive and event coverage. We'll capture your lot, showroom, and service department the same way.</p>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/WmYVQPVZKcI" loading="lazy" allowfullscreen title="Karman Kar Show video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Karman Kar Show</h3><p class="wc-city">Merriam, KS</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Want this for your business?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 10. Work: Gyms & Fitness
- **Slug / path:** `/work/gyms-fitness`  _(flat fallback: `work-gyms-fitness`)_
- **SEO Title:** Gym & Fitness Virtual Tours | Kansas City | Ninja-360
- **Meta description:** Gym and fitness 360 virtual tours in Kansas City - show prospects your equipment, classes, and vibe. Book a demo.
- **301:** /gym-virtual-tours/ -> /work/gyms-fitness

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/gyms-fitness  -  GHL SEO Title: Gym & Fitness Virtual Tours | Kansas City | Ninja-360
     Meta: Gym and fitness 360 virtual tours in Kansas City - show prospects your equipment, classes, and vibe before they walk in. Book a demo.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element.
     NOTE: no client tour yet - publishes as a written pitch + demo CTA. Drop an embed in later. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-btn-2{display:inline-block;border:2px solid var(--n-red);color:var(--n-red);font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:16px;margin-left:10px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:8px}
.gc{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:22px}
.gc h3{font-size:18px;margin:0 0 6px}
.cap{display:grid;grid-template-columns:repeat(2,1fr);gap:10px 26px;margin-top:14px;max-width:760px}
.cap div{display:flex;gap:10px;align-items:flex-start;font-size:15px;color:var(--n-ink)}
.cap b{color:var(--n-red)}
@media(max-width:780px){.g3,.cap{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Gyms &amp; Fitness</p>
  <h1 class="n-h1">Turn &ldquo;just looking&rdquo; into walk-ins.</h1>
  <p class="n-lead">Most people tour three gyms before they join one. A 360 virtual tour lets them tour yours first &mdash; from their phone, at 11pm, while they're deciding. The clean, busy, well-equipped one usually wins.</p>
  <div style="margin-top:24px">
    <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
    <a class="n-btn-2" href="https://ninja360.net/#section-JXWJCHUYEK">Book a Demo Walkthrough</a>
  </div>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Why it works for gyms</p>
  <h2 class="n-h2">Members choose what they can already picture themselves in</h2>
  <div class="g3">
    <div class="gc"><h3>Show the floor, not a stock photo</h3><p class="n-sub" style="margin:0">Let prospects walk your equipment, studios, and amenities in 360 &mdash; the energy of a real, busy gym sells memberships.</p></div>
    <div class="gc"><h3>Win the late-night decision</h3><p class="n-sub" style="margin:0">Your tour is open 24/7 on Google, your site, and social &mdash; right when someone is comparing gyms and ready to commit.</p></div>
    <div class="gc"><h3>Stand out on Google</h3><p class="n-sub" style="margin:0">An optimized Google profile with a 360 tour and fresh photos outranks and out-converts the gym down the street.</p></div>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-soft)"><div class="n-wrap">
  <p class="n-eyebrow">What we capture</p>
  <h2 class="n-h2">Your whole space, member-ready</h2>
  <div class="cap">
    <div><b>&bull;</b><span>Equipment floor &amp; free-weight area</span></div>
    <div><b>&bull;</b><span>Group fitness &amp; studio spaces</span></div>
    <div><b>&bull;</b><span>Locker rooms, showers &amp; amenities</span></div>
    <div><b>&bull;</b><span>Front desk &amp; first-impression entry</span></div>
    <div><b>&bull;</b><span>Exterior &amp; parking (drone optional)</span></div>
    <div><b>&bull;</b><span>Class &amp; trainer highlight video</span></div>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">Be our next gym walkthrough</p>
  <h2 class="n-h2" style="color:#fff">Want to see what yours would look like?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit &mdash; we'll show you where your gym shows up on Google and what a tour would add.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 11. Work: Hotels & Hospitality
- **Slug / path:** `/work/hospitality`  _(flat fallback: `work-hospitality`)_
- **SEO Title:** Hotel & B&B Virtual Tours | Kansas City | Ninja-360
- **Meta description:** Hotel and bed-and-breakfast 360 virtual tours in Kansas City. Let guests walk your space before they book.
- **301:** /hotel-bed-and-breakfast-virtual-tours/ -> /work/hospitality

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/hospitality  -  GHL SEO Title: Hotel &amp; B&amp;B Virtual Tours | Kansas City | Ninja-360
     Meta: Hotel and bed-and-breakfast 360 virtual tours in Kansas City. Let guests walk your space before they book.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:13px 15px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 7px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Hotels &amp; Hospitality</p>
  <h1 class="n-h1">Hotel &amp; B&amp;B Virtual Tours</h1>
  <p class="n-lead">Let guests walk your rooms, lobby, and amenities before they book &mdash; immersive tours that drive direct reservations.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">Hotels &amp; Hospitality we've put on the map</h2>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7bvCk?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Mira Flores Air BnB 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Mira Flores Air BnB</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7kdQv?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Chateau Shakespeare 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Chateau Shakespeare</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/n9eyHLexhaE" loading="lazy" allowfullscreen title="Marketing for Bed &amp; Breakfasts video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Marketing for Bed &amp; Breakfasts</h3><p class="wc-city"></p><div class="wc-badges"><span>Video</span></div></div>
      </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Want this for your business?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 12. Work: Schools & Athletics
- **Slug / path:** `/work/schools`  _(flat fallback: `work-schools`)_
- **SEO Title:** School & Athletic Virtual Tours | Kansas City
- **Meta description:** School and athletic 360 tours and drone video in Kansas City. Campus walkthroughs for families and recruits.
- **301:** /school-virtual-tours/ -> /work/schools

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/schools  -  GHL SEO Title: School &amp; Athletic Virtual Tours | Kansas City
     Meta: School and athletic 360 tours and drone video in Kansas City. Campus walkthroughs for families and recruits.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:13px 15px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 7px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Schools &amp; Athletics</p>
  <h1 class="n-h1">School &amp; Athletic Virtual Tours</h1>
  <p class="n-lead">Give families and recruits a full walkthrough of your campus, facilities, and athletics &mdash; anytime, from anywhere.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">Schools &amp; Athletics we've put on the map</h2>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7qhgl?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="NKC Early Education Center 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">NKC Early Education Center</h3><p class="wc-city">North Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7cz0w?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="MU Dorm &ndash; Wolpers Hall 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">MU Dorm &ndash; Wolpers Hall</h3><p class="wc-city">Columbia, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/8DvMYjNC21U" loading="lazy" allowfullscreen title="Sky View Over William Jewell College video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Sky View Over William Jewell College</h3><p class="wc-city">Liberty, MO</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/0AWe6tF-lkg" loading="lazy" allowfullscreen title="Nixa High School Stadium video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Nixa High School Stadium</h3><p class="wc-city">Nixa, MO</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/Y_jqPnfiQuo" loading="lazy" allowfullscreen title="Marshall Intermediate Grand Opening video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Marshall Intermediate Grand Opening</h3><p class="wc-city">Marshall, MO</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/WIPvwiAatEM" loading="lazy" allowfullscreen title="Marshall Intermediate &ndash; Drop-off video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Marshall Intermediate &ndash; Drop-off</h3><p class="wc-city">Marshall, MO</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/ttDP1DDXzC0" loading="lazy" allowfullscreen title="Spainhower Primary &ndash; Drop-off video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Spainhower Primary &ndash; Drop-off</h3><p class="wc-city"></p><div class="wc-badges"><span>Video</span></div></div>
      </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Want this for your business?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 13. Work: Parks & Events
- **Slug / path:** `/work/parks-events`  _(flat fallback: `work-parks-events`)_
- **SEO Title:** Park, Rec & Event Virtual Tours | Kansas City
- **Meta description:** Park, rec, and event 360 tours and drone reels in Kansas City. Experience the space before you arrive.
- **301:** /parks-virtual-tours/ -> /work/parks-events  |  /concerts-events-virtual-tours/ -> /work/parks-events

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/parks-events  -  GHL SEO Title: Park, Rec &amp; Event Virtual Tours | Kansas City
     Meta: Park, rec, and event 360 tours and drone reels in Kansas City. Experience the space before you arrive.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:13px 15px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 7px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Parks &amp; Events</p>
  <h1 class="n-h1">Park, Rec &amp; Event Tours</h1>
  <p class="n-lead">Capture venues, parks, and events in immersive 360 so visitors and planners can experience the space before they arrive.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">Parks &amp; Events we've put on the map</h2>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7KhwK?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Hodge Park 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Hodge Park</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7KhxG?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Shoal Creek Park 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Shoal Creek Park</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7v5F9?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Parade of Hearts 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Parade of Hearts</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7vl7D?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Parade of Hearts &ndash; Pt. 2 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Parade of Hearts &ndash; Pt. 2</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7vkh6?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Parade of Hearts &ndash; Pt. 3 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Parade of Hearts &ndash; Pt. 3</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/yjIPaWmI9_U" loading="lazy" allowfullscreen title="CPKC Stadium &ndash; Cinematic Reel video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">CPKC Stadium &ndash; Cinematic Reel</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Want this for your business?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 14. Work: Medical & Dental
- **Slug / path:** `/work/medical-dental`  _(flat fallback: `work-medical-dental`)_
- **SEO Title:** Dental & Medical Visibility | Kansas City | Ninja-360
- **Meta description:** Dental and medical 360 tours and Google visibility in Kansas City. Build trust before the first visit.
- **301:** (new page - no 301)

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/medical-dental  -  GHL SEO Title: Dental &amp; Medical Visibility | Kansas City | Ninja-360
     Meta: Dental and medical 360 tours and Google visibility in Kansas City. Build trust before the first visit.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:13px 15px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 7px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Medical &amp; Dental</p>
  <h1 class="n-h1">Dental &amp; Medical Visibility</h1>
  <p class="n-lead">Build trust before the first visit &mdash; polished 360 tours, video, and an optimized Google profile that gets patients to choose you.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">Medical &amp; Dental we've put on the map</h2>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7Djws?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Atchison Family Dental 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Atchison Family Dental</h3><p class="wc-city">Atchison, KS</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7DM8X?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Marx Family Dental 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Marx Family Dental</h3><p class="wc-city">Gladstone, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/IRu4cR4cYsc" loading="lazy" allowfullscreen title="Atchison Family Dental video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Atchison Family Dental</h3><p class="wc-city">Atchison, KS</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Want this for your business?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

## 15. Work: Wellness & Chiropractic
- **Slug / path:** `/work/wellness-chiro`  _(flat fallback: `work-wellness-chiro`)_
- **SEO Title:** Chiropractic & Wellness Visibility | Kansas City
- **Meta description:** Chiropractic and wellness 360 tours and video in Kansas City. A full visibility system for multi-location practices.
- **301:** (new page - no 301)

**Paste this into the Custom JS/HTML element:**

```html
<!-- /work/wellness-chiro  -  GHL SEO Title: Chiropractic &amp; Wellness Visibility | Kansas City
     Meta: Chiropractic and wellness 360 tours and video in Kansas City. A full visibility system for multi-location practices.
     Keep nav+footer in this block. Paste into a Custom JS/HTML element. -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,32px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.n-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:22px}
.wc{background:#fff;border:1px solid var(--n-line);border-radius:12px;overflow:hidden}
.wc-embed{aspect-ratio:16/9;width:100%;border:0;display:block;background:#000}
.wc-body{padding:13px 15px}
.wc-name{font-weight:800;font-size:16px;margin:0}
.wc-city{color:var(--n-muted);font-size:13px;margin:2px 0 7px}
.wc-badges span{display:inline-block;font-size:11px;font-weight:700;background:#f0f2f5;color:#3b454f;border-radius:20px;padding:3px 9px}
@media(max-width:780px){.n-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>

<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Our Work &middot; Wellness &amp; Chiropractic</p>
  <h1 class="n-h1">Chiropractic &amp; Wellness Visibility</h1>
  <p class="n-lead">Show your space and put your practice where patients are already searching. Here's a multi-location practice we keep visible end to end.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <p class="n-eyebrow">Selected work</p>
  <h2 class="n-h2">Wellness &amp; Chiropractic we've put on the map</h2>
  <div class="n-grid">
      <article class="wc">
        <iframe class="wc-embed" src="https://kuula.co/share/collection/7JJgQ?logo=1&info=0&fs=1&vr=0&sd=1&thumbs=3" loading="lazy" allowfullscreen title="Kobler Chiropractic 360 virtual tour - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Kobler Chiropractic</h3><p class="wc-city">Kansas City, MO</p><div class="wc-badges"><span>360 Tour</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/X3ORPaoWxO8" loading="lazy" allowfullscreen title="Kobler &ndash; Meet the Team video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Kobler &ndash; Meet the Team</h3><p class="wc-city">Gladstone, MO</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/C-0JGmM2I_I" loading="lazy" allowfullscreen title="Dr. Jeremy Kobler, DC &ndash; Owner video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Dr. Jeremy Kobler, DC &ndash; Owner</h3><p class="wc-city"></p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/9IGEqsUr-_s" loading="lazy" allowfullscreen title="Meet Dr. Brian Frame video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Meet Dr. Brian Frame</h3><p class="wc-city"></p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/rjd7dXvk3eg" loading="lazy" allowfullscreen title="New Location &ndash; Overland Park video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">New Location &ndash; Overland Park</h3><p class="wc-city">Overland Park, KS</p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/GXcYLcl_zQ8" loading="lazy" allowfullscreen title="Massage Services video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Massage Services</h3><p class="wc-city"></p><div class="wc-badges"><span>Video</span></div></div>
      </article>
      <article class="wc">
        <iframe class="wc-embed" src="https://www.youtube.com/embed/9Z0lUDX50lY" loading="lazy" allowfullscreen title="Adjustments While Pregnant video - Ninja-360"></iframe>
        <div class="wc-body"><h3 class="wc-name">Adjustments While Pregnant</h3><p class="wc-city"></p><div class="wc-badges"><span>Video</span></div></div>
      </article>
  </div>
  <p class="n-sub" style="margin-top:18px">Kobler Chiropractic is a multi-location case study &mdash; see the full video series on our <a href="https://www.youtube.com/@ninja360vr" style="color:var(--n-red);font-weight:700">YouTube channel</a>.</p>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Want this for your business?</h2>
  <p class="n-lead" style="margin:0 auto 22px">Start with a free visibility audit.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```

---

---

## 16. Contact
- **Slug / path:** `/contact`  _(flat fallback: `contact`)_
- **SEO Title:** Contact Ninja-360 | Kansas City Local Visibility
- **Meta description:** Talk to Ninja-360 - Kansas City's local visibility system. Start with the free 30-second visibility audit, or call (844) 360-6465.
- **301:** /contact/ -> /contact   (kills the /contact 404 linked from the older nav)

**Paste this into the Custom JS/HTML element:**

```html
<!-- /contact  -  GHL SEO Title: Contact Ninja-360 | Kansas City Local Visibility
     Meta: Talk to Ninja-360 - Kansas City's local visibility system. Start with the free 30-second visibility audit, or call (844) 360-6465.
     Copy: V02 philosophy infusion (see COPY-REWRITE-V02.md).
     This page kills the live /contact 404 (linked from the older nav template).
     Paste body into a Custom JS/HTML element.
     NAP: (844) 360-6465 - Kansas City, MO (canonical; match everywhere). -->
<style>
:root{--n-red:#FF8D2D;--n-red-dk:#E67A1C;--n-black:#31343B;--n-ink:#1a1d22;--n-muted:#575B63;--n-line:#e2e4e7;--n-soft:#f6f7f9;}
.n-wrap{max-width:1080px;margin:0 auto;padding:0 22px}
.n-section{padding:56px 0}
.n-hero{background:linear-gradient(135deg,#31343B,#23262b);color:#fff;padding:72px 0}
.n-eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--n-red);font-weight:800}
.n-h1{font-size:clamp(28px,5vw,46px);line-height:1.08;margin:10px 0 14px;font-weight:800;letter-spacing:-.02em}
.n-h2{font-size:clamp(22px,3vw,30px);font-weight:800;margin:0 0 10px}
.n-lead{font-size:18px;color:#d4d7dd;max-width:720px}
.n-sub{color:var(--n-muted);max-width:760px;font-size:16px}
.n-btn{display:inline-block;background:var(--n-red);color:#fff;font-weight:700;padding:14px 26px;border-radius:8px;text-decoration:none;font-size:16px}
.n-btn:hover{background:var(--n-red-dk)}
.ct-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:26px}
.ct-card{background:#fff;border:1px solid var(--n-line);border-radius:12px;padding:24px}
.ct-card .ch{font-size:12px;font-weight:800;color:var(--n-red);text-transform:uppercase;letter-spacing:.06em;margin:0 0 8px}
.ct-card a{color:var(--n-ink);text-decoration:none;font-weight:700;font-size:18px}
.ct-card a:hover{color:var(--n-red)}
.soc{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
.soc a{font-size:15px;font-weight:700;color:var(--n-ink);text-decoration:none}
.soc a:hover{color:var(--n-red)}
@media(max-width:780px){.ct-grid{grid-template-columns:1fr}}
</style>

<!-- NAV -->
<style>
.nv-nav{position:sticky;top:0;z-index:50;background:#31343B;border-bottom:1px solid rgba(255,255,255,.08)}
.nv-in{max-width:1080px;margin:0 auto;padding:10px 22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.nv-logo{display:flex;align-items:center;text-decoration:none;font-weight:800;font-size:20px;letter-spacing:-.01em;margin-right:auto;color:#fff}
.nv-logo span{color:#FF8D2D}
.nv-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nv-links a{color:#d4d7dd;text-decoration:none;font-weight:600;font-size:14px}
.nv-links a:hover{color:#fff}
.nv-cta{background:#FF8D2D;color:#fff !important;padding:9px 16px;border-radius:7px;font-weight:700}
.nv-cta:hover{background:#E67A1C}
@media(max-width:640px){.nv-logo{font-size:18px}.nv-links{gap:13px;font-size:13px;width:100%;justify-content:flex-start}}
</style>
<nav class="nv-nav"><div class="nv-in">
  <a class="nv-logo" href="/">NINJA<span>360</span></a>
  <div class="nv-links">
    <a href="/how-it-works">How It Works</a>
    <a href="/work">Work</a>
    <a href="/services">Services</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <a class="nv-cta" href="https://ninja360.net/#section-JXWJCHUYEK">Free Audit</a>
  </div>
</div></nav>


<section class="n-hero"><div class="n-wrap">
  <p class="n-eyebrow">Contact</p>
  <h1 class="n-h1">Let's put you on the map.</h1>
  <p class="n-lead"><em>Fastest path: the free visibility audit &mdash; 30 seconds, and you'll see exactly what your customers see. Prefer to talk to a person first? We're one of you: a Kansas City local business.</em></p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK" style="margin-top:22px">Get My Free Visibility Audit</a>
</div></section>

<section class="n-section"><div class="n-wrap">
  <div class="ct-grid">
    <div class="ct-card">
      <p class="ch">Call</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
    </div>
    <div class="ct-card">
      <p class="ch">Location</p>
      <a href="https://www.google.com/maps/search/?api=1&amp;query=Ninja-360+Kansas+City+MO">Kansas City, MO</a>
    </div>
  </div>
  <div class="ct-card" style="margin-top:18px">
    <p class="ch">Follow</p>
    <div class="soc">
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
</div></section>

<section class="n-section" style="background:var(--n-black);color:#fff;text-align:center"><div class="n-wrap">
  <p class="n-eyebrow">See what your customers see</p>
  <h2 class="n-h2" style="color:#fff">Start with the free audit.</h2>
  <p class="n-lead" style="margin:0 auto 22px">30 seconds. No obligation. You'll see exactly where you are &mdash; and aren't &mdash; showing up on Google.</p>
  <a class="n-btn" href="https://ninja360.net/#section-JXWJCHUYEK">Get My Free Visibility Audit</a>
</div></section>

<!-- FOOTER -->
<style>
.nf-foot{background:#23262b;color:#cfd3d9;padding:44px 0 18px}
.nf-in{max-width:1080px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:26px}
.nf-foot a{color:#cfd3d9;text-decoration:none;font-size:14px}
.nf-foot a:hover{color:#fff}
.nf-h{color:#fff;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}
.nf-col a{display:block;margin:6px 0}
.nf-brand b{color:#fff;font-size:20px}.nf-brand b span{color:#FF8D2D}
.nf-bottom{max-width:1080px;margin:20px auto 0;padding:14px 22px 0;border-top:1px solid rgba(255,255,255,.1);font-size:12px;color:#9aa0a8}
@media(max-width:780px){.nf-in{grid-template-columns:1fr}}
</style>
<footer class="nf-foot">
  <div class="nf-in">
    <div class="nf-brand"><b>NINJA<span>360</span></b><p style="font-size:14px;margin:10px 0 0;max-width:330px">Kansas City's local visibility system. We put local businesses &mdash; and the people behind them &mdash; on the map: visible, heard, and chosen on Google.</p></div>
    <div class="nf-col"><p class="nf-h">Explore</p><a href="/how-it-works">How It Works</a><a href="/work">Our Work</a><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a></div>
    <div class="nf-col">
      <p class="nf-h">Contact</p>
      <a href="tel:+18443606465">(844) 360-6465</a>
      <a href="https://ninja360.net/#section-JXWJCHUYEK">Free Visibility Audit</a>
      <span style="display:block;margin:6px 0;font-size:14px">Kansas City, MO</span>
      <p class="nf-h" style="margin-top:14px">Follow</p>
      <a href="https://www.facebook.com/KCNinja360">Facebook</a>
      <a href="https://www.instagram.com/kcninja360/">Instagram</a>
      <a href="https://www.youtube.com/@ninja360vr">YouTube</a>
      <a href="https://www.tiktok.com/@ninja360digitalma">TikTok</a>
      <a href="https://www.linkedin.com/company/ninja360/">LinkedIn</a>
    </div>
  </div>
  <div class="nf-triad" style="max-width:1080px;margin:26px auto 0;padding:0 22px;font-size:13px;color:#aeb4bd;font-weight:600">Put them on the map &middot; Tell the truth beautifully &middot; Always sharpen the blade</div>
  <div class="nf-bottom">&copy; Ninja-360 Digital Media. All rights reserved.</div>
</footer>
```
