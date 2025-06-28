import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import { BareMux } from '@mercuryworkshop/bare-mux';

const mux = new BareMux();

mux.handle("GET /search", (req) => {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  return Response.redirect(`${url.origin}/soloo.html?q=${encodeURIComponent(q)}`, 302);
});

// Catch-all to serve static files from root
mux.handle("GET /*", async (req) => {
  try {
    const asset = await getAssetFromKV({ request: req });
    return asset;
  } catch {
    return new Response("Not Found", { status: 404 });
  }
});

addEventListener("fetch", (e) => {
  e.respondWith(mux.route(e.request));
});
