export default function handler(req, res) {
  const config = {
    supabaseUrl: process.env.SUPABASE_URL ?? "",
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY ?? "",
  };

  const body = `window.__SUPABASE_CONFIG__ = ${JSON.stringify(config)};`;

  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("Content-Type", "application/javascript; charset=utf-8");
  res.status(200).send(body);
}

