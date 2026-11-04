import type { Metadata } from "next";
import { History, Landmark, Send, Wallet } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "USD wallet",
  description:
    "Hold US dollars in a wallet you can fund from your bank, send from, and spend with virtual cards.",
  alternates: { canonical: "/wallets" },
};

export default function WalletsPage() {
  return (
    <ProductPage
      title="A USD wallet you can use from anywhere."
      intro="Keep your money in US dollars. Add funds from your bank, send them onward, or spend them with a virtual card, all from one balance."
      visual={<PhoneMockup />}
      featuresTitle="Dollars, without the complicated parts."
      features={[
        {
          title: "Hold dollars",
          body: "Keep savings or business funds in US dollars, a currency most of the world prices in.",
          Icon: Wallet,
        },
        {
          title: "Add money from your bank",
          body: "Fund your wallet by bank transfer and watch the balance update in the app.",
          Icon: Landmark,
        },
        {
          title: "Send from the same balance",
          body: "Pay family, suppliers or contractors abroad without moving money between accounts first.",
          Icon: Send,
        },
        {
          title: "See every movement",
          body: "A clear history of deposits, transfers and card payments, each with its own reference.",
          Icon: History,
        },
      ]}
      faq={[
        {
          q: "Who can open a wallet?",
          a: "Anyone who passes identity verification in a country we support. We're opening region by region, so join the waitlist to hear when yours is next.",
        },
        {
          q: "Does the wallet have a monthly fee?",
          a: "No. Opening and holding a wallet is free. You pay a fee when you send money or create a virtual card. See the pricing page for details.",
        },
        {
          q: "Can I use it for my business?",
          a: "Tell us what you need on the waitlist form. Your use case helps us decide what to build next.",
        },
      ]}
      ctaTitle="Open your USD wallet first."
    />
  );
}
