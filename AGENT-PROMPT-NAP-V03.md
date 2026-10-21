# Agent prompt — NAP footer + entity schema (V03)

Paste the block below to the browser agent working inside GoHighLevel.
Source of truth: `seo/NAP-SCHEMA-V03.html` (head block) and `PASTE-PACKET.md` (page bodies).

---

You are updating the live Ninja 360 funnel in GoHighLevel at ninja360.net. Two tasks.
Do them in order. Report after each. **Do not change anything I have not listed.**

## TASK 1 — Head schema, every page

For each of these pages, open **Page Settings → Custom Code → Head**:

`/` · `/about` · `/work` · `/services` · `/how-it-works` · `/pricing` · `/contact` ·
`/free-audit` · `/termsofservice` · and each `/work/*` industry page that is published.

**First, on the home page only:** view-source the live page and tell me whether GHL already
emits a `<link rel="canonical">` and whether any `application/ld+json` block is already
present. Stop and report before pasting anything. Two canonical tags is worse than none,
and I need to know what is there before we add a second entity block.

Then, once I confirm: paste the JSON-LD block from `seo/NAP-SCHEMA-V03.html` **identically**
into every page's Head. Identical `@id` is the entire point — it makes Google merge the
pages into one business entity instead of splitting it. Do not customize it per page.
If a page already carries an older Organization / ProfessionalService / LocalBusiness
block, **delete the old one** — do not leave both.

Leave existing `VideoObject`, `FAQPage` and `AboutPage` blocks alone. They reference
`#org` and are supposed to coexist with it.

## TASK 2 — Footer, every page

This is a funnel, so every page carries its own footer inside its own Custom HTML block.
In each page's footer block, make exactly three changes:

1. Replace the address line `Kansas City, MO` with:
   `3205 NE 70th Ter<br>Gladstone, MO 64119`

2. Immediately under the phone link `(844) 360-6465`, add a secondary line:
   `that's 844-360-NINJA`
   (12px, color `#9aa0a8`. It is marketing copy, not the NAP string — do **not** put the
   lettered form in the `tel:` href, which stays `tel:+18443606465`.)

3. Replace the bottom copyright row with two lines:
   - `Ninja 360 Digital Media · 3205 NE 70th Ter, Gladstone, MO 64119 · (844) 360-6465 · We put you on the M.A.P.`
     (phone wrapped in `<a href="tel:+18443606465">`)
   - `© Ninja 360 Digital Media. All rights reserved.`

The exact markup for all three is in `PASTE-PACKET.md` — every page's footer block there
is already updated and byte-identical to what should go live.

## While you are in there

Change every visible `Ninja-360` (hyphen) to `Ninja 360` (space) — page titles, meta
descriptions, body copy, image alt text, iframe titles. **Two exceptions:**
- `/termsofservice`: leave `Ninja-360 Digital Media LLC` exactly as-is. That is the legal
  entity. The rest of that page's copy does become `Ninja 360`.
- Never touch lowercase `ninja-360` — that is the `ninja-360.com` domain and the Zyene
  widget slug (`zyenereviews.com/w/ninja-360-digital-media`). Changing either breaks a
  live URL.
- The all-caps `NINJA 360` logo stays as it is.

## Report back

1. Which pages you touched, and for each: head block pasted (yes/no), footer updated (yes/no).
2. Whether GHL was already emitting a canonical tag or its own JSON-LD.
3. Any page where the footer markup did not match what you expected — paste what you found
   instead of guessing.
4. After publishing, run the live URLs through **both**
   `https://validator.schema.org` and `https://search.google.com/test/rich-results`
   and paste both results. I cannot reach either from my environment, so this check is
   yours and it is not optional.
