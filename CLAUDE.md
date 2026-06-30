# CLAUDE.md — Code-surface anchor for the Ninja-360 Single Source of Truth

This file is read automatically at the start of every Claude Code session in this repo.
It is the **Code leg** of the cross-device SSOT system. The rule for every surface is the
same: **read the source of truth at the start, write it back at the end.**

## The one brain (cloud layer)
Cowork and Code data live locally on each machine and do **not** sync across devices, so the
connective tissue is the **cloud layer** every surface reads from and writes back to:
- **This GitHub repo** — the build kit + canonical docs for `ninja360.net` (travels via git).
- **Google Drive `Ninja-360 Core`** — strategy SSOT `000 - MASTER INDEX`, folder map
  `00 — Drive Organization`, and ops/project hubs (`Ninja-360 — Single Source of Truth.md`).
  These are mid-consolidation per the Move Map record; expect some overlap until then.
- **claude.ai web Project** — chat context, memory, search.

In Claude Code, "read/write the source of truth" means **this repo**: read the docs below at
the start, and commit your changes back at the end.

### Drive `Ninja-360 Core` layout (top-level taxonomy)
The Drive brain is organized into a fixed tier structure (detail + sensitive contents live in
Drive, not this repo):
- `00 — Single Source of Truth.md` (pinned at top)
- `01 — NINJA-360 CORE` — Audit·Pitch·Sales Engine (Agents/Cowork) · Brand & Logo · KPI
  Knowledge Base · Operator Workspace · Audits · Proposals & Templates · Business Plans ·
  Sales & Marketing · Media
- `02 — CLIENTS` · `03 — PERSONAL PROJECTS` · `04 — ARCHIVE` (old versions/dupes, never deleted)
- `844-360-Ninja` — standalone top-level item

> Reorg of Drive itself runs in the Drive web app via the Cowork/web session — the Code and
> connector surfaces are read/create only and cannot move or delete Drive files.

## Start / finish ritual
- **Start:** skim `README.md` (the index), then the doc relevant to the task.
- **Finish:** update the affected doc(s) and commit, so the repo stays the source of truth.

## Where knowledge lives (read these, don't re-derive)
- `README.md` — master index: the three systems, folder map, workflow, brand/NAP rules.
- `GO-LIVE.md` — publish runbook (GHL pages, Cloudflare Worker for `llms.txt`, 301s).
- `EMAIL-FIX.md` — Google Workspace email DNS for `ninja-360.com` (MX/SPF/DKIM/DMARC) +
  current verified DNS state.
- `data/` — `portfolio.json` (work cards), `redirects.csv` (old→new 301 map).
- `seo/` — schema templates, sitemap, image-naming SOP.

## Durable facts (keep consistent everywhere)
- **Two domains, two jobs:** `ninja-360.com` = legacy domain, now **email-only** (Google
  Workspace, DNS on Cloudflare). `ninja360.net` = the **live website** (GHL-hosted, fronted
  by Cloudflare).
- **Three systems:** GitHub (this repo) · GoHighLevel (hosts the site + funnel) · Cloudflare
  (DNS, 301s, caching, email DNS).
- **Brand/NAP — pick ONE of each:** Phone **(844) 360-6465** · Site **ninja360.net** ·
  Positioning: local **visibility** system ("get found and chosen on Google"), NOT a
  "virtual tour company."
- **Strategy spine (from Drive `000 - MASTER INDEX`):** **M.A.P. System** (Make → Amplify →
  Promote) · micro-niche = **local visibility in Kansas City** (not marketing / SEO /
  photography / drone / virtual-tours) · markets: primary **restaurants & cafés**, secondary
  dental/chiro/wellness, white-whale multi-location chains · product ladder: **Free Visibility
  Audit → White Belt (6-mo) → Brown Belt (12-mo) → Black Belt (18-mo) → Chain/Enterprise**
  (confirm live pricing before quoting) · frameworks: **KPI 5 Ps + StoryBrand SB7** (customer =
  hero, Ninja-360 = guide).

## Rules
- Nothing in this repo is live; pages are pasted into GoHighLevel to publish.
- Never retire the old WordPress site until its 301s resolve.
- One H1 per page · every image alt-tagged · WebP < 200KB.
