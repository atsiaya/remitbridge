// Single source of truth for brand details, navigation and contact info.
// Edit here and the header, footer, metadata and legal pages all update.

export const site = {
  name: "RemitBridge",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://remitbridge.com",
  tagline: "Dollars that go wherever you do.",
  description:
    "Hold USD in a wallet, send money across borders, and pay online with virtual cards. One account, with fees shown before you confirm.",
  email: "support@remitbridge.com",
  /** AppsFlyer OneLink: sends iPhone users to the App Store and Android users to Google Play. */
  appDownloadUrl: "https://onelink.to/z2cnq7",
  phone: "+254721901999",
  phoneDisplay: "+254 721 901 999",
  /**
   * Regulatory notice shown in the footer, e.g. your licence or registration
   * details and regulator. Leave empty until you have them: the footer only
   * renders this line when it is set, so nothing unverified is ever shown.
   */
  licenseNotice: "",
} as const;

export const nav = [
  { label: "Wallet", href: "/wallets" },
  { label: "Send money", href: "/remittance" },
  { label: "Cards", href: "/cards" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
] as const;

export const footerLinks = {
  Product: [
    { label: "USD wallet", href: "/wallets" },
    { label: "Send money", href: "/remittance" },
    { label: "Virtual cards", href: "/cards" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Contact", href: "/company#contact" },
    { label: "Join the waitlist", href: "/get-started" },
  ],
  Legal: [
    { label: "Terms of service", href: "/terms-of-service" },
    { label: "Privacy policy", href: "/privacy-policy" },
  ],
} as const;
