# Image Naming + Alt-Text SOP

Every image is renamed BEFORE upload and alt-tagged in GHL. No exceptions.

## Filename
`business-city-mediatype-NN.webp`  (lowercase, hyphens, no spaces)

mediatype = `360tour` | `drone` | `matterport` | `video` | `photo` | `exterior` | `interior`

Examples:
- `54th-street-grill-olathe-360tour-01.webp`
- `54th-street-grill-zona-rosa-drone-02.webp`
- `boulevard-brewing-kc-interior-03.webp`

NEVER: `IMG_4821.jpg`, `final_v2.png`, `DJI_0099.JPG`

## Alt text formula
`{Business} {what} in {City} - Ninja-360`
- "54th Street Grill 360 virtual tour interior in Olathe, KS - Ninja-360"
- "Aerial drone photo of 54th Street Grill in Zona Rosa, Kansas City - Ninja-360"

## Technical
- Format: WebP. Target < 200 KB (hero < 350 KB).
- Set width/height on hero images to prevent layout shift.
- Keep the original in `/assets/img-src`, the optimized export in `/assets/img`.
- One descriptive image per concept; don't dump 30 near-duplicates on a page.

## Quick optimize (local)
```
# requires cwebp (Google WebP tools)
cwebp -q 80 input.jpg -o 54th-street-grill-olathe-360tour-01.webp
```
