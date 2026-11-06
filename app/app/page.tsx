import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get the app",
  robots: { index: false, follow: false },
};

// Phones and tablets that can install the app. Anything else (desktop browsers,
// crawlers, link previews, empty user agents) counts as "no device detected".
const MOBILE_UA = /iphone|ipad|ipod|android/i;

/**
 * Short link for QR codes, bios and messages: remitbridge.com/app
 * - iPhone / Android  -> the OneLink, which opens the right app store
 * - everything else   -> /download
 */
export default async function AppRedirectPage() {
  const userAgent = (await headers()).get("user-agent") ?? "";

  if (MOBILE_UA.test(userAgent)) {
    redirect(site.appDownloadUrl);
  }
  redirect("/download");
}
