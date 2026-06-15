import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "RemitBridge — Global Payments Infrastructure",
  description:
    "Move money globally with multi-currency accounts, optimized FX, and modern payment rails.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* ===== HEADER ===== */}
        <Header />

        {/* Spacer for fixed header */}
        <main className="pt-20">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="bg-gray-900 border-t border-gray-800 py-20">
          <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4 text-sm text-gray-300">
            {/* Brand */}
            <div>
              <p className="font-semibold text-white">RemitBridge</p>
              <p className="mt-4 text-gray-400">
                Modern infrastructure for global money movement.
              </p>
            </div>

            {/* Footer sections */}
            {[
              {
                title: "Products",
                items: [
                  { label: "Global USD Wallet", href: "#" },
                  { label: "International Transfers", href: "#" },
                  { label: "FX & Liquidity", href: "#" },
                ],
              },
              {
                title: "Solutions",
                items: [
                  { label: "Startups", href: "#" },
                  { label: "Enterprises", href: "#" },
                  { label: "Marketplaces", href: "#" },
                ],
              },
              {
                title: "Contact",
                contact: true,
              },
            ].map((group) => (
              <div key={group.title}>
                <p className="font-medium text-white">{group.title}</p>

                {group.items && (
                  <ul className="mt-4 space-y-3 text-gray-400">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="hover:text-white transition"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {group.contact && (
                  <ul className="mt-4 space-y-3 text-gray-400">
                    <li>
                      <span className="text-white">Email:</span>{" "}
                      <a
                        href="mailto:support@remitbridge.com"
                        className="hover:text-white transition"
                      >
                        support@remitbridge.com
                      </a>
                    </li>
                    <li>
                      <span className="text-white">Phone:</span>{" "}
                      <a
                        href="tel:+15552038841"
                        className="hover:text-white transition"
                      >
                        +1 (555) 203-8841
                      </a>
                    </li>
                    <li>
                      <span className="text-white">Address:</span> Global HQ · New
                      York, USA
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Legal */}
          <div className="mt-16 max-w-7xl mx-auto px-6 text-xs text-gray-400 space-y-2">
            <p>© {new Date().getFullYear()} RemitBridge. All rights reserved.</p>
            <p>
              RemitBridge is a registered Money Services Business (MSB) with
              FinCEN and FINTRAC. RemitBridge is not a bank and funds are not
              FDIC-insured.
            </p>
            <p>
              Services subject to our{" "}
              <a href="/terms-of-service" className="underline hover:text-white">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="underline hover:text-white">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
