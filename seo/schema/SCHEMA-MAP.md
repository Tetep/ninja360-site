# Schema map - which JSON-LD goes on each page

Goal: ninja360.net sells Google visibility, so every page should declare what it
is in structured data. JSON-LD goes in the page **Head** (GHL: Page Settings ->
Custom Code -> Head), NEVER in the body. Schema must describe content that is
actually visible on that page.

## Per-page plan

| Page | Schema type(s) | Notes |
|---|---|---|
| **Site-wide (header code)** | `ProfessionalService` / `LocalBusiness` | The foundation - NAP, areaServed, sameAs. Source: `localbusiness.json`. Place once in GHL site-wide header so every page inherits it. Add `image`, `priceRange`, `openingHours` if available. |
| **Site-wide** | `Organization` (logo + sameAs) | Feeds the brand Knowledge Panel. |
| **Home** | `VideoObject` + `BreadcrumbList` | |
| **Services** | `Service` (per offering) + `VideoObject` (hero) | Hero video = KC landmark (`VmOPhGmy2uk`). |
| **Pricing** | `Service` + `Offer` | DONE - already inline in `pages/pricing.html`. |
| **How It Works** | `HowTo` (the M.A.P. steps) + `FAQPage`* | |
| **About** | `Person` (Tim Petet) + `Organization` + `VideoObject` (hero) | Hero video = KC landmark (`SxluMw0OGfo`). |
| **Work / `work-*`** | `BreadcrumbList` + `VideoObject` (only real YouTube videos) | Restaurants has 4 VideoObjects (see `data/videos.json`). |

## VideoObject rules
- Required fields: `name`, `description`, `thumbnailUrl`, `uploadDate`.
- Recommended: `duration` (ISO 8601, e.g. `PT2M30S`) -> unlocks the duration
  badge; `contentUrl` + `embedUrl`.
- Put `Kansas City` + the city/landmark keyword in `name` and `description`.
- Template: `seo/schema/videoobject.json`. Every placed video: `data/videos.json`.
- 360 tours (Kuula / Matterport) are interactive tours, NOT video - do not mark
  them as VideoObject. Only true YouTube videos qualify.

## Honest caveats
- *`FAQPage` rich results were restricted to gov/health sites in 2023. Still
  worth adding for structure / AI answers, but don't expect the search dropdown.
- `Review` / `AggregateRating` (star ratings) only with REAL, verifiable
  reviews. Self-serving review markup violates Google's guidelines - skip it
  unless you have genuine Google reviews to cite.

## Validate
1. Before publish: Google **Rich Results Test** (paste URL -> confirm eligible).
2. After publish: **Search Console -> Videos / Enhancements** report (~1-2 wks).
