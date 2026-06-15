"use client";

import { motion } from "framer-motion";

export default function CurrencyExchange() {
  const stats = [
    {
      value: "50+",
      label: "Supported Currencies",
    },
    {
      value: "24/7",
      label: "Market Access",
    },
    {
      value: "<1s",
      label: "Rate Updates",
    },
    {
      value: "100%",
      label: "Rate Transparency",
    },
  ];

  const features = [
    {
      title: "Real-Time FX Rates",
      description:
        "Access live exchange rates with pricing updated continuously across supported currency pairs.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Benefit from transparent spreads and institutional-grade liquidity.",
    },
    {
      title: "Instant Conversions",
      description:
        "Convert between currencies directly within your RemitBridge wallet.",
    },
    {
      title: "Rate Locking",
      description:
        "Secure exchange rates before settlement and reduce market exposure.",
    },
  ];

  const useCases = [
    {
      title: "International Payroll",
      description:
        "Pay contractors and remote teams in their local currencies.",
    },
    {
      title: "Global Trade",
      description:
        "Reduce FX friction when paying suppliers across borders.",
    },
    {
      title: "Treasury Management",
      description:
        "Manage and rebalance multi-currency holdings efficiently.",
    },
    {
      title: "Cross-Border Expansion",
      description:
        "Scale globally while maintaining predictable currency costs.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Choose Currency Pair",
      description:
        "Select the currencies you want to exchange.",
    },
    {
      step: "02",
      title: "Review Live Rate",
      description:
        "View real-time market pricing and fees before confirming.",
    },
    {
      step: "03",
      title: "Execute Conversion",
      description:
        "Complete the exchange instantly using available balances.",
    },
    {
      step: "04",
      title: "Receive Funds",
      description:
        "Converted funds appear immediately in your destination wallet.",
    },
  ];

  const currencyPairs = [
    "USD → EUR",
    "USD → GBP",
    "USD → KES",
    "USD → NGN",
    "USD → AED",
    "USD → CAD",
    "USD → AUD",
    "USD → ZAR",
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
              Global Foreign Exchange
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Exchange currencies with confidence
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Convert funds across multiple currencies using real-time FX
              pricing, transparent spreads, and enterprise-grade liquidity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition">
                Start Exchange
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
                View Rates
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
              Built for modern foreign exchange
            </h2>

            <p className="mt-4 text-slate-600">
              Everything needed to manage international currency conversions.
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

        {/* EXCHANGE FLOW */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            How currency exchange works
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <div className="text-sm font-medium text-slate-400">
                  {item.step}
                </div>

                <h3 className="mt-4 text-lg font-medium text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CURRENCY PAIRS */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Popular currency pairs
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl">
              Access a growing network of major, regional, and emerging-market
              currencies through a single platform.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {currencyPairs.map((pair) => (
                <div
                  key={pair}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <span className="font-medium text-slate-900">
                    {pair}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Designed for global businesses
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-xl font-medium text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TREASURY SECTION */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Multi-currency treasury management
            </h2>

            <p className="mt-6 max-w-3xl text-slate-600 leading-8">
              Hold, convert, and manage balances across multiple currencies
              from a unified dashboard. Monitor exposures, reduce conversion
              costs, and optimize global cash flow.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Currency Holdings
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Maintain balances across multiple currencies.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  FX Automation
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Simplify recurring conversions and treasury operations.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Reporting
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Export transaction histories and treasury insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section>
          <div className="rounded-[32px] bg-slate-900 p-12 text-white">
            <h2 className="text-3xl font-semibold">
              Enterprise-grade security
            </h2>

            <p className="mt-6 max-w-2xl text-slate-300">
              Every conversion is secured through encryption, compliance
              controls, transaction monitoring, and audit-ready reporting.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-medium">Encrypted Infrastructure</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Secure protection for every transaction.
                </p>
              </div>

              <div>
                <h3 className="font-medium">AML Screening</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Automated compliance monitoring and risk controls.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Audit Trails</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Comprehensive reporting for regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <p className="text-2xl leading-relaxed text-slate-700">
              “RemitBridge gives us full visibility into FX costs while
              providing significantly better exchange rates than traditional
              banking channels.”
            </p>

            <div className="mt-8">
              <div className="font-medium text-slate-900">
                Michael Carter
              </div>

              <div className="text-sm text-slate-500">
                Treasury Manager, GlobalTech Ltd
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Exchange currencies smarter
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Access competitive FX rates, instant conversions, and treasury
              management tools from a single platform.
            </p>

            <button className="mt-10 rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-slate-800 transition">
              Start Exchanging
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}