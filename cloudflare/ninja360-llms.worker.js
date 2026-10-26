// Cloudflare Worker: ninja360-llms
// Serves the crawl files for ninja360.net straight from this repo (branch: main).
// GHL can't host raw files at the root, so the Worker intercepts these three paths
// on BOTH hosts (apex + www) and returns the repo copy. Everything else passes through.
//
// Routes to bind (Worker -> Settings -> Triggers), six total:
//   ninja360.net/robots.txt      www.ninja360.net/robots.txt
//   ninja360.net/llms.txt        www.ninja360.net/llms.txt
//   ninja360.net/sitemap.xml     www.ninja360.net/sitemap.xml
//   ninja360.net/r/cr-2026-07    (contract route book — pre-existing handler, keep it)
// Both DNS records (apex A/CNAME + www) must be Proxied (orange cloud) or the
// Worker never runs and GHL's own empty files are served instead.

const RAW = "https://raw.githubusercontent.com/Tetep/ninja360-site/main/";

const FILES = {
  "/robots.txt":  { src: "robots.txt",      type: "text/plain; charset=utf-8" },
  "/llms.txt":    { src: "llms.txt",        type: "text/plain; charset=utf-8" },
  "/sitemap.xml": { src: "seo/sitemap.xml", type: "application/xml; charset=utf-8" },
  // Pre-existing route (Jul 2026): the contract route book. Keep it — the link is in use.
  "/r/cr-2026-07": { src: "contract-route.html", type: "text/html; charset=utf-8" },
};

export default {
  async fetch(request) {
    const path = new URL(request.url).pathname.toLowerCase();
    const file = FILES[path];
    if (!file) return fetch(request);

    const r = await fetch(RAW + file.src, { cf: { cacheTtl: 300 } });
    const body = await r.text();

    // Never cache or serve an empty/404 body — fail loudly so the regression is visible.
    if (!r.ok || body.trim().length === 0) {
      return new Response(`${path} unavailable (upstream ${r.status}, ${body.length} bytes)`, {
        status: 503,
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
      });
    }

    return new Response(body, {
      headers: {
        "content-type": file.type,
        "cache-control": "public, max-age=3600",
        "x-ninja360-source": "github:main/" + file.src,
      },
    });
  },
};
