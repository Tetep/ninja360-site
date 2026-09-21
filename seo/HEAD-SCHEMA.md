# Head Schema Pack — paste into each GHL page's HEAD (Page Settings → Custom Code → Head)

Rich results + AI search. Each block is live `<script>` (NOT commented). One page can
hold multiple blocks. VideoObject blocks already live in services/about/work-restaurants
(video branch) — these ADD the entity/FAQ schema around them.

---

## EVERY PAGE (site-wide) — Organization + WebSite
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"ProfessionalService",
  "@id":"https://ninja360.net/#org",
  "name":"Ninja-360 Digital Media",
  "description":"Kansas City local-visibility studio. We help local businesses get found and chosen on Google with drone, 360 virtual tours, Matterport, video, and Google Business Profile optimization.",
  "url":"https://ninja360.net",
  "telephone":"+1-844-360-6465",
  "areaServed":"Kansas City metro (MO/KS)",
  "priceRange":"$99–$999/mo",
  "address":{"@type":"PostalAddress","addressLocality":"Kansas City","addressRegion":"MO","addressCountry":"US"},
  "founder":{"@type":"Person","name":"Tim Petet"},
  "sameAs":["https://www.youtube.com/@ninja360vr","https://www.facebook.com/KCNinja360","https://www.instagram.com/kcninja360/","https://www.linkedin.com/company/ninja360/","https://www.tiktok.com/@ninja360digitalma"]
}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","name":"Ninja-360","url":"https://ninja360.net"}
</script>
```

---

## CANONICAL TAGS — one per page, into that page's HEAD
⚠️ CHECK FIRST: GoHighLevel may already emit its own `<link rel="canonical">`. Two canonical
tags on one page is worse than none — view-source the live page and only add this if GHL
isn't already emitting one (or if the one it emits points at the wrong URL, e.g. a
`...-page` slug or a funnel preview URL).

```html
<link rel="canonical" href="https://ninja360.net/">              <!-- home -->
<link rel="canonical" href="https://ninja360.net/about">         <!-- /about -->
<link rel="canonical" href="https://ninja360.net/work">          <!-- /work -->
<link rel="canonical" href="https://ninja360.net/services">      <!-- /services -->
<link rel="canonical" href="https://ninja360.net/how-it-works">  <!-- /how-it-works -->
<link rel="canonical" href="https://ninja360.net/pricing">       <!-- /pricing -->
<link rel="canonical" href="https://ninja360.net/contact">       <!-- /contact -->
<link rel="canonical" href="https://ninja360.net/free-audit">    <!-- /free-audit -->
```
Industry pages self-canonical to their own URL: `https://ninja360.net/work/<industry>`.

**NO canonical for /portfolio — that page should 301 to /work instead.** See the note at
the bottom of this file.

---

## ENTITY @id — ONE VALUE SITEWIDE
The business entity is **`https://ninja360.net/#org`** everywhere. Never introduce a second
id (`#business`, `#organization`, …) for the same company — two ids = two competing
entities, which is exactly the entity-confidence problem the schema is meant to fix.
Other blocks REFERENCE it (`{"@id":"https://ninja360.net/#org"}`) rather than redefining it.

On pages that only need the business entity (/work, /contact, /free-audit), paste the
EVERY PAGE block above as-is — identical `@id` means search engines merge them into one
entity rather than splitting it. **Keep `sameAs` in it**: the social profile links are the
entity-confidence payload, and a copy without them is weaker than no copy at all.

---

## /about — Person (Tim Petet) = the Key Person of Influence "Profile" pillar
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"Person",
  "name":"Tim Petet",
  "jobTitle":"Founder & Local Visibility Strategist",
  "worksFor":{"@type":"Organization","name":"Ninja-360 Digital Media","@id":"https://ninja360.net/#org"},
  "url":"https://ninja360.net/about",
  "knowsAbout":["Local SEO","Google Business Profile optimization","360 virtual tours","Drone photography","Matterport","Video marketing","Local visibility"],
  "hasCredential":[{"@type":"EducationalOccupationalCredential","credentialCategory":"certification","name":"Google Certified Photographer"}],
  "alumniOf":["VinSolutions","Autotrader","dealer.com","ScriptPro"],
  "homeLocation":{"@type":"Place","name":"Kansas City, Missouri"},
  "sameAs":["https://www.youtube.com/@ninja360vr","https://www.linkedin.com/company/ninja360/","https://www.facebook.com/KCNinja360","https://www.instagram.com/kcninja360/"]
}
</script>
```

---

## /services — Service + OfferCatalog
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Local visibility & Google Business Profile optimization",
  "provider":{"@type":"ProfessionalService","@id":"https://ninja360.net/#org"},
  "areaServed":"Kansas City metro (MO/KS)",
  "hasOfferCatalog":{"@type":"OfferCatalog","name":"Ninja-360 Services","itemListElement":[
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Drone Photography"}},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Google & Custom 360 Virtual Tours"}},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Matterport Walkthroughs"}},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Professional & Product Photography"}},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Video & Social Content"}},
    {"@type":"Offer","itemOffered":{"@type":"Service","name":"Google Business Profile Optimization"}}
  ]}
}
</script>
```

---

## /how-it-works — FAQPage (matches the visible FAQ on the page)
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"What is the M.A.P. System?","acceptedAnswer":{"@type":"Answer","text":"M.A.P. stands for Make, Amplify, Promote. Make = capture high-quality photo, video, drone and 360 content. Amplify = optimize and publish it to Google Maps, Search, your website and listings. Promote = keep you active and visible so you keep getting chosen."}},
    {"@type":"Question","name":"How long until I see results?","acceptedAnswer":{"@type":"Answer","text":"Your media and Google Business Profile improvements go live quickly. Local visibility compounds over weeks as Google indexes the updates and you stay consistently active."}},
    {"@type":"Question","name":"Do I need a website to work with Ninja-360?","acceptedAnswer":{"@type":"Answer","text":"No. Much of local visibility lives on your Google Business Profile, Maps, and listings. We can also embed tours and video into any site you do have."}},
    {"@type":"Question","name":"What areas does Ninja-360 serve?","acceptedAnswer":{"@type":"Answer","text":"We're based in Kansas City and serve the greater KC metro across Missouri and Kansas, plus multi-location clients in other markets."}},
    {"@type":"Question","name":"What does it cost?","acceptedAnswer":{"@type":"Answer","text":"Three plans: White Belt $99/month, Brown Belt $499/month, and Black Belt $999/month. Every engagement starts with a free visibility audit."}}
  ]
}
</script>
```

---

## /work/restaurants & /services & /about — VideoObject
Already included in the video-branch versions of those files (in the head comment marked
"PASTE THIS INTO THE PAGE HEAD"). Fill the REPLACE placeholders (name, description,
uploadDate YYYY-MM-DD, duration PT#M#S) before publishing.

---

## /portfolio — do not build it
The IA already resolves this and has for a while:
- `seo/sitemap.xml` does not list /portfolio.
- `data/redirects.csv` already 301s the old `ninja-360.com/portfolio` to `/work`.
- `/work` is on the new template with 9 industry pages behind it; /portfolio is thin and on
  the old template.

Two pages competing for the same intent split the ranking signal. **301 `/portfolio` →
`/work`.** Don't give it a title, meta, canonical, or schema.
