import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `The terms that apply when you use ${site.name}.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="4 November 2026"
      intro={`These terms apply when you use ${site.name}'s wallet, money transfer and virtual card services once they are available in your region. By creating an account you agree to them. If you don't agree, don't use the services.`}
      sections={[
        {
          heading: "Who can use RemitBridge",
          body: [
            "You must be at least 18, able to enter a binding contract, and live in a country where we offer the service. You must give us accurate information and keep it up to date.",
            "You're responsible for keeping your login details safe and for activity on your account. Tell us straight away if you think someone else has access.",
          ],
        },
        {
          heading: "What we offer",
          body: [
            "A US dollar wallet, transfers to recipients in supported countries, and virtual cards that draw on your wallet balance. Features and countries vary and may change as we expand.",
          ],
        },
        {
          heading: "Fees and exchange rates",
          body: [
            "Our fees are listed on the pricing page and shown before you confirm a transfer or create a card. Exchange rates are shown in the quote. Third parties, such as your bank or the recipient's bank or mobile money operator, may charge their own fees.",
          ],
        },
        {
          heading: "Sending money",
          body: [
            "Check the recipient's details carefully. Once you confirm a transfer we may not be able to stop or reverse it, and we aren't responsible for money sent to details you entered incorrectly.",
            "We may delay, hold or refuse a transfer where we need to complete compliance checks, where the details are incomplete, or where we reasonably suspect misuse.",
          ],
        },
        {
          heading: "Virtual cards",
          body: [
            "Cards are for lawful online payments. You're responsible for payments made with your cards and for keeping card details private. We may limit, freeze or close a card to protect you or us.",
          ],
        },
        {
          heading: "What you can't do",
          body: [
            "You can't use RemitBridge for illegal activity, fraud, money laundering, terrorist financing, or to evade sanctions. You can't use another person's identity or let someone else use your account. You can't try to disrupt or reverse-engineer our services.",
          ],
        },
        {
          heading: "Identity checks and compliance",
          body: [
            "We're required to verify who our customers are, monitor activity and screen transfers. We may ask for more information at any time and may restrict your account until we have it. We may report activity to authorities where the law requires.",
          ],
        },
        {
          heading: "Limits and availability",
          body: [
            "Limits on balances, transfers and cards apply and may change with your verification level and destination. We aim for the services to be available at all times, but we can't promise they'll be uninterrupted or error-free.",
          ],
        },
        {
          heading: "Our liability",
          body: [
            "To the extent the law allows, we aren't liable for indirect or consequential losses, or for losses caused by events outside our reasonable control, including failures of banks, mobile money operators or networks. Nothing in these terms limits liability that can't be limited by law.",
          ],
        },
        {
          heading: "Changes and closing your account",
          body: [
            "We may update these terms and will tell you in advance of material changes. You can close your account at any time after withdrawing or spending your balance. We may suspend or close accounts that breach these terms or where the law requires.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of Kenya, and the courts of Kenya have jurisdiction, unless the law of your country gives you rights that can't be waived.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms: ${site.email}.`],
        },
      ]}
    />
  );
}
