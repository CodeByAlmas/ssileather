import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { SITE } from "@/lib/site";

const MAX_BODY_BYTES = 8 * 1024;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// In-memory limiter: enough for one instance. Use Redis/Upstash if you scale out.
const hits = new Map<string, number[]>();

function limited(ip: string, now: number) {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

// Strip control characters and cap length so values are safe in emails and logs.
const clean = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((s) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ""));

const schema = z.object({
  name: clean(120).pipe(z.string().min(2, "Enter your name")),
  company: clean(160).optional().default(""),
  email: clean(200).pipe(z.string().email("Enter a valid email")),
  country: clean(80).optional().default(""),
  interest: z.enum(["belts", "dog-collars", "dog-leashes", "other"]),
  quantity: clean(80).optional().default(""),
  message: clean(3000).pipe(z.string().min(10, "Tell us a little more")),
  website: z.string().max(200).optional().default(""), // honeypot
  startedAt: z.number().int().optional(),
});

const json = (body: object, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: NextRequest) {
  // Same-origin only.
  const origin = req.headers.get("origin");
  if (origin) {
    const allowed = new Set([new URL(SITE.url).origin, req.nextUrl.origin]);
    if (!allowed.has(origin)) return json({ error: "Forbidden" }, 403);
  }
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Unsupported content type" }, 415);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip, Date.now())) {
    return json({ error: "Too many requests. Try again in a few minutes." }, 429);
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return json({ error: "Message too large" }, 413);

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const result = schema.safeParse(parsed);
  if (!result.success) {
    return json({ error: "Check the form and try again", fields: result.error.flatten().fieldErrors }, 422);
  }
  const data = result.data;

  // Bots: filled honeypot or submitted faster than a human can type.
  const tooFast = data.startedAt !== undefined && Date.now() - data.startedAt < 2500;
  if (data.website || tooFast) return json({ ok: true });

  const payload = {
    source: "ssileather.com",
    receivedAt: new Date().toISOString(),
    name: data.name,
    company: data.company,
    email: data.email,
    country: data.country,
    interest: data.interest,
    quantity: data.quantity,
    message: data.message,
  };

  const hook = process.env.INQUIRY_WEBHOOK_URL;
  if (!hook) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[inquiry:dev]", payload);
      return json({ ok: true });
    }
    return json({ error: `Online enquiries are not set up yet. Email ${SITE.email}.` }, 503);
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return json({ ok: true });
  } catch {
    return json({ error: `We could not send that. Email ${SITE.email} instead.` }, 502);
  }
}

export function GET() {
  return json({ error: "Method not allowed" }, 405);
}
