"use client";

import { motion } from "framer-motion";

export default function ESIM() {
  const stats = [
    {
      value: "50+",
      label: "Countries Covered",
    },
    {
      value: "600+",
      label: "Network Partners",
    },
    {
      value: "<2 Min",
      label: "Activation Time",
    },
    {
      value: "5G",
      label: "Supported Networks",
    },
  ];

  const features = [
    {
      title: "Instant Activation",
      description:
        "Purchase, scan, and connect within minutes without waiting for physical SIM delivery.",
    },
    {
      title: "Global Coverage",
      description:
        "Access reliable connectivity across major destinations and emerging markets.",
    },
    {
      title: "Regional Plans",
      description:
        "Choose country-specific, regional, or worldwide data packages based on your travel needs.",
    },
    {
      title: "Flexible Data Packages",
      description:
        "Select plans that match your usage requirements, from short trips to long-term stays.",
    },
  ];

  const planTypes = [
    {
      title: "Country Plans",
      description:
        "Affordable packages designed for a single destination.",
    },
    {
      title: "Regional Plans",
      description:
        "One eSIM covering multiple countries within a region.",
    },
    {
      title: "Global Plans",
      description:
        "Stay connected across continents with worldwide coverage.",
    },
    {
      title: "Business Plans",
      description:
        "Connectivity solutions for distributed teams and frequent travelers.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Choose Plan",
      description:
        "Select the destination and data package that fits your trip.",
    },
    {
      step: "02",
      title: "Purchase eSIM",
      description:
        "Complete payment and receive your digital eSIM instantly.",
    },
    {
      step: "03",
      title: "Install Profile",
      description:
        "Scan the QR code or install directly on supported devices.",
    },
    {
      step: "04",
      title: "Connect Anywhere",
      description:
        "Activate your plan and start using data immediately.",
    },
  ];

  const destinations = [
    "United States",
    "United Kingdom",
    "Canada",
    "Germany",
    "France",
    "Kenya",
    "UAE",
    "Singapore",
  ];

  const useCases = [
    {
      title: "Business Travel",
      description:
        "Stay connected during meetings, conferences, and international travel.",
    },
    {
      title: "Remote Work",
      description:
        "Reliable connectivity for digital nomads and distributed teams.",
    },
    {
      title: "International Tourism",
      description:
        "Avoid expensive roaming charges while traveling abroad.",
    },
    {
      title: "Corporate Mobility",
      description:
        "Manage employee connectivity across multiple countries.",
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
              Global eSIM Connectivity
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Stay connected wherever you travel
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Activate mobile data instantly in over 50 countries with digital
              eSIM technology. No physical SIM cards, no roaming surprises,
              and no waiting.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition">
                Browse Plans
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
                Check Coverage
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
              Built for modern travelers
            </h2>

            <p className="mt-4 text-slate-600">
              Reliable connectivity without the complexity of traditional roaming.
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
            How eSIM activation works
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

        {/* PLAN TYPES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Flexible plans for every traveler
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {planTypes.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-medium text-slate-900">
                  {plan.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DESTINATIONS */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Popular destinations
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Activate connectivity instantly in major travel and business hubs.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((country) => (
                <div
                  key={country}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <span className="font-medium text-slate-900">
                    {country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Connectivity for every journey
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

        {/* DEVICE COMPATIBILITY */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Broad device compatibility
            </h2>

            <p className="mt-6 max-w-3xl text-slate-600 leading-8">
              Compatible with modern smartphones, tablets, laptops, and other
              eSIM-enabled devices from leading manufacturers.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Smartphones
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  iPhone, Samsung Galaxy, Google Pixel, and more.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Tablets
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Cellular-enabled tablets with eSIM support.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Connected Devices
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Emerging eSIM-enabled devices and IoT hardware.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section>
          <div className="rounded-[32px] bg-slate-900 p-12 text-white">
            <h2 className="text-3xl font-semibold">
              Reliable global connectivity
            </h2>

            <p className="mt-6 max-w-2xl text-slate-300">
              Partnered with leading network operators worldwide to ensure
              secure, high-quality, and uninterrupted mobile data access.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-medium">Trusted Operators</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Access premium network partners globally.
                </p>
              </div>

              <div>
                <h3 className="font-medium">5G Ready</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Connect to supported next-generation mobile networks.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Always Available</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Activate and manage plans anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <p className="text-2xl leading-relaxed text-slate-700">
              “Our team travels across multiple continents every month.
              RemitBridge eSIMs have completely eliminated roaming headaches
              and connectivity delays.”
            </p>

            <div className="mt-8">
              <div className="font-medium text-slate-900">
                Daniel Roberts
              </div>

              <div className="text-sm text-slate-500">
                Global Operations Director
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Travel connected without borders
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Activate your eSIM in minutes and enjoy reliable connectivity
              across the globe from a single platform.
            </p>

            <button className="mt-10 rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-slate-800 transition">
              Explore eSIM Plans
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}