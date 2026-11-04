import type { Metadata } from "next";
import { Gauge, Snowflake, Timer, Wallet } from "lucide-react";
import CardVisual from "@/components/CardVisual";
import ProductPage from "@/components/ProductPage";
import { pricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Virtual cards",
  description:
    "Create virtual USD cards in seconds for subscriptions, ads and online shopping. Set limits and freeze them any time.",
  alternates: { canonical: "/cards" },
};

export default function CardsPage() {
  return (
    <ProductPage
      title="Virtual cards for paying online in dollars."
      intro="Create a USD card in seconds, use it where cards are accepted online, and stay in control of how much it can spend."
      visual={<CardVisual />}
      featuresTitle="A card for every subscription."
      features={[
        {
          title: "Create in seconds",
          body: "Generate a new card whenever you need one, without waiting for anything to arrive in the mail.",
          Icon: Timer,
        },
        {
          title: "Set a spending limit",
          body: "Cap what each card can spend so a forgotten subscription can't drain your balance.",
          Icon: Gauge,
        },
        {
          title: "Freeze and unfreeze",
          body: "Pause a card with one tap and turn it back on when you're ready.",
          Icon: Snowflake,
        },
        {
          title: "Paid from your wallet",
          body: "Cards draw from your USD wallet, so there's one balance to top up and one history to read.",
          Icon: Wallet,
        },
      ]}
      faq={[
        {
          q: "What can I use a virtual card for?",
          a: "Online payments in dollars: software, subscriptions, advertising and shopping, wherever cards are accepted online.",
        },
        {
          q: "Is there a physical card?",
          a: "Not at launch. We're starting with virtual cards.",
        },
        {
          q: "What do cards cost?",
          a: `Creating a card costs $${pricing.cardCreateUsd.toFixed(2)}. There's no monthly fee for holding one.`,
        },
      ]}
      ctaTitle="Get your first card early."
    />
  );
}
