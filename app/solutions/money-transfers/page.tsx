"use client";

import { motion } from "framer-motion";

export default function MoneyTransfers() {
  const features = [
    {
      title: "Global Reach",
      description:
        "Send funds to more than 100 countries through trusted payout networks.",
    },
    {
      title: "Fast Settlement",
      description:
        "Transfers are routed through optimized payment corridors for speed.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees. See exchange rates and transfer costs before sending.",
    },
    {
      title: "Bank-Level Security",
      description:
        "Advanced encryption and compliance controls protect every transaction.",
    },
  ];

  const payoutMethods = [
    "Bank Accounts",
    "Mobile Money",
    "Digital Wallets",
    "Cash Pickup",
  ];

  const steps = [
    {
      number: "01",
      title: "Create Transfer",
      description:
        "Choose recipient, destination country, and transfer amount.",
    },
    {
      number: "02",
      title: "Review Rates",
      description:
        "Lock in competitive exchange rates and transparent pricing.",
    },
    {
      number: "03",
      title: "Confirm Payment",
      description:
        "Fund the transfer using your preferred payment method.",
    },
    {
      number: "04",
      title: "Track Delivery",
      description:
        "Monitor transfer status in real time until completion.",
    },
  ];

  const stats = [
    {
      value: "100+",
      label: "Countries",
    },
    {
      value: "50+",
      label: "Currencies",
    },
    {
      value: "<1 Min",
      label: "Fastest Delivery",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <main className="mx-auto max-w-7xl px-6 py-32 space-y-32">

        {/* HERO */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Global Money Transfers
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Move money anywhere in the world
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Send international transfers with transparent pricing,
              competitive exchange rates, and reliable delivery to banks,
              wallets, and mobile money networks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition">
                Start Transfer
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
                View Pricing
              </button>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <div className="text-4xl font-semibold text-slate-900">
                  {item.value}
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Why businesses choose RemitBridge
            </h2>

            <p className="mt-4 text-slate-600">
              Built for fast, secure, and reliable international transfers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-medium text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            How transfers work
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <div className="text-sm font-medium text-slate-400">
                  {step.number}
                </div>

                <h3 className="mt-4 text-lg font-medium text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PAYOUT METHODS */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Multiple payout options
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Deliver funds through the payout channel that works best for your
              recipients.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {payoutMethods.map((method) => (
                <div
                  key={method}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <span className="font-medium text-slate-900">
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section>
          <div className="rounded-[32px] bg-slate-900 p-12 text-white">
            <h2 className="text-3xl font-semibold">
              Security & compliance built in
            </h2>

            <p className="mt-6 max-w-2xl text-slate-300">
              Every transfer is protected through advanced monitoring,
              encryption, KYC verification, and AML screening.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-medium">KYC Verification</h3>
                <p className="mt-2 text-slate-400 text-sm">
                  Customer identity validation and risk screening.
                </p>
              </div>

              <div>
                <h3 className="font-medium">AML Monitoring</h3>
                <p className="mt-2 text-slate-400 text-sm">
                  Continuous transaction monitoring and compliance checks.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Data Encryption</h3>
                <p className="mt-2 text-slate-400 text-sm">
                  Enterprise-grade encryption for all sensitive data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <p className="text-2xl leading-relaxed text-slate-700">
              “RemitBridge transformed our international payments process.
              Transfers that once took days now settle in minutes.”
            </p>

            <div className="mt-8">
              <div className="font-medium text-slate-900">
                Sarah Kim
              </div>

              <div className="text-sm text-slate-500">
                Finance Director, Atlas Ventures
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Ready to send money globally?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Access fast international transfers, competitive exchange rates,
              and enterprise-grade security from one platform.
            </p>

            <button className="mt-10 rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-slate-800 transition">
              Get Started
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}