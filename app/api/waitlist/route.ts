import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INTERESTS = new Set(["wallet", "remittance", "cards"]);

function fail(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail("That request wasn't valid. Reload the page and try again.", 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return fail("Enter a valid email address.", 400);
  }

  const country =
    typeof body.country === "string" && body.country.trim()
      ? body.country.trim().slice(0, 80)
      : null;

  const interests = Array.isArray(body.interests)
    ? [...new Set(body.interests.filter((v): v is string => typeof v === "string" && INTERESTS.has(v)))]
    : [];

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Waitlist: Supabase environment variables are not set.");
    return fail(
      `Sign-ups are unavailable right now. Email ${site.email} and we'll add you by hand.`,
      503,
    );
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase
    .from("waitlist")
    .insert({ email, country, interests, source: "website" });

  // 23505 = unique violation: they're already on the list, which is fine.
  if (error && error.code !== "23505") {
    console.error("Waitlist insert failed:", error.message);
    return fail("We couldn't save your details. Try again in a moment.", 500);
  }

  return NextResponse.json({ ok: true });
}
