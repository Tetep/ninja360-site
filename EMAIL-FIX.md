# Fix Google Workspace email on ninja-360.com (after Cloudflare move)

> **RESOLUTION (2026-06-09):** Diagnosed live. Domain Active on Cloudflare (NS `marty`/
> `ophelia`, moved off Google Domains). Email Routing **off**; **MX** (5 Google records),
> **SPF**, and **DMARC** all survived the migration. The **only** record dropped was
> **DKIM** (`google._domainkey`) — re-added from the Admin console (2048-bit). Google now
> reports **"Authenticating email with DKIM."** Email fully restored. Final user check:
> send from `@ninja-360.com` → Gmail → *Show original* → `DKIM: PASS` / `DMARC: PASS`.

## Current verified DNS state — `ninja-360.com` (source of truth)

Snapshot confirmed 2026-06-09. `ninja-360.com` is the **legacy domain** (moved Google
Domains → Cloudflare, Active since 2026-06-07, NS `marty`/`ophelia.ns.cloudflare.com`); its
only live job now is **Google Workspace email**. The website is the separate `ninja360.net`.

| Record | Name | Value | Status |
|--------|------|-------|--------|
| MX ×5 | `@` | `ASPMX.L.GOOGLE.COM` (1), `ALT1`/`ALT2` (5), `ALT3`/`ALT4` (10) | ✅ |
| SPF (TXT) | `@` | `v=spf1 include:_spf.google.com ~all` | ✅ |
| DKIM (TXT) | `google._domainkey` | `v=DKIM1; k=rsa; p=…` (2048-bit, DNS-only) | ✅ Authenticating |
| DMARC (TXT) | `_dmarc` | `v=DMARC1; p=none; rua=mailto:postmaster@ninja-360.com` | ✅ |
| Cloudflare Email Routing | — | Disabled (so Google MX is authoritative) | ✅ correct |

Open follow-up (non-urgent): once DKIM passes in the wild for a week or two, tighten DMARC
from `p=none` → `p=quarantine`.



**Symptom:** You moved `ninja-360.com`'s nameservers to Cloudflare and email stopped.
**Cause:** Cloudflare started answering DNS for the domain from a **fresh, empty zone**. The
**MX records** (and SPF/DKIM) that routed mail to Google Workspace did not carry over, so
inbound mail has nowhere to go.

> Note: email is on **`ninja-360.com`** (hyphen, `.com`). That's a different domain from the
> new website `ninja360.net`. Make every change below in the **`ninja-360.com`** zone.

---

## STEP 0 — Confirm the domain is actually on Cloudflare (1 min)
Cloudflare dashboard → select **ninja-360.com** → it should say **Active**. If it says
"Pending nameserver update," the registrar hasn't finished pointing at Cloudflare's
nameservers yet — finish that first or nothing below takes effect.

---

## STEP 1 — Kill the #1 culprit: Cloudflare Email Routing (2 min)
This is the most common way Cloudflare silently breaks Google Workspace. When Email Routing
is on, Cloudflare **injects its own MX records** (`*.mx.cloudflare.net`) that **override
Google's**, even if you add Google's MX by hand.

- Cloudflare → **Email** → **Email Routing**.
- If it's **Enabled**, click **Disable Email Routing** (Settings → Disable).
- Confirm there are **no** `route1/route2/route3.mx.cloudflare.net` MX records left in DNS.

---

## STEP 2 — Add Google Workspace MX records (5 min)
Cloudflare → **DNS** → **Records** → **Add record**, Type = **MX**, Name = `@`.
Use the **single modern record** (simplest, recommended by Google):

| Type | Name | Mail server / Target | Priority | Proxy |
|------|------|----------------------|----------|-------|
| MX   | `@`  | `smtp.google.com`    | `1`      | DNS only |

**OR** the classic 5-record set (equally valid — use this *instead*, not in addition):

| Type | Name | Mail server | Priority |
|------|------|-------------|----------|
| MX | `@` | `ASPMX.L.GOOGLE.COM` | `1` |
| MX | `@` | `ALT1.ASPMX.L.GOOGLE.COM` | `5` |
| MX | `@` | `ALT2.ASPMX.L.GOOGLE.COM` | `5` |
| MX | `@` | `ALT3.ASPMX.L.GOOGLE.COM` | `10` |
| MX | `@` | `ALT4.ASPMX.L.GOOGLE.COM` | `10` |

> Don't mix the two styles. MX records can't be proxied — Cloudflare keeps them DNS-only
> automatically. There must be **no other MX records** on `@` (delete any leftover from the
> old host or Email Routing).

---

## STEP 3 — Restore SPF so your outbound mail isn't marked spam (1 min)
Add **one** TXT record on the root. If a `v=spf1` TXT already exists, **edit it** — never
have two SPF records.

| Type | Name | Content |
|------|------|---------|
| TXT  | `@`  | `v=spf1 include:_spf.google.com ~all` |

---

## STEP 4 — Restore DKIM (5 min, value comes from Google)
DKIM's key is **unique to your domain** — I can't generate it. Get it from Google:

1. **admin.google.com** → **Apps → Google Workspace → Gmail → Authenticate email**.
2. Select `ninja-360.com`, **Generate new record** (2048-bit), prefix `google`.
3. Google shows a host + a long value. In Cloudflare add:

| Type | Name | Content |
|------|------|---------|
| TXT  | `google._domainkey` | *(paste the `v=DKIM1; k=rsa; p=…` value Google gives you)* |

4. Back in the Admin console, click **Start authentication**.

> If you had DKIM working before the move, the old `google._domainkey` TXT was dropped with
> everything else — re-add it. If the old value still validates in Admin, reuse it; otherwise
> generate a new one.

---

## STEP 5 — (Recommended) DMARC (1 min)
| Type | Name | Content |
|------|------|---------|
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:postmaster@ninja-360.com` |

Start at `p=none` (monitor only). Tighten to `quarantine`/`reject` later once SPF+DKIM pass.

---

## STEP 6 — Verify (after ~5–30 min for propagation)
- Google's own checker: **toolbox.googleapps.com/apps/checkmx** → enter `ninja-360.com`.
  Should show the Google MX records and "no problems."
- Send a test email **to** an address on the domain, and **from** it to an outside inbox
  (Gmail). Check the received headers show `spf=pass` and `dkim=pass`.
- From any terminal you can also run: `nslookup -type=mx ninja-360.com 8.8.8.8`

---

## Quick checklist
- [ ] Domain **Active** in Cloudflare
- [ ] Cloudflare **Email Routing OFF** (no `*.mx.cloudflare.net` MX)
- [ ] Google **MX** present on `@` (`smtp.google.com` pri 1, *or* the 5 ASPMX records)
- [ ] **SPF** TXT = `v=spf1 include:_spf.google.com ~all` (exactly one)
- [ ] **DKIM** TXT at `google._domainkey` + "Start authentication" clicked in Admin
- [ ] **DMARC** TXT at `_dmarc`
- [ ] **CheckMX** passes + test send/receive works
