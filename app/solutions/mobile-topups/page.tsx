"use client";

import { motion } from "framer-motion";

export default function MobileTopups() {
  const stats = [
    {
      value: "500+",
      label: "Mobile Networks",
    },
    {
      value: "150+",
      label: "Countries",
    },
    {
      value: "<30s",
      label: "Delivery Time",
    },
    {
      value: "24/7",
      label: "Availability",
    },
  ];

  const features = [
    {
      title: "Instant Airtime Top-Ups",
      description:
        "Recharge prepaid mobile numbers worldwide with near-instant delivery.",
    },
    {
      title: "Data Bundle Purchases",
      description:
        "Purchase local and international data packages from supported operators.",
    },
    {
      title: "Global Network Coverage",
      description:
        "Access hundreds of telecom providers across Africa, Europe, Asia, and the Americas.",
    },
    {
      title: "Real-Time Confirmation",
      description:
        "Receive immediate delivery status and transaction confirmation.",
    },
  ];

  const topupTypes = [
    {
      title: "Airtime",
      description:
        "Recharge prepaid voice balances instantly.",
    },
    {
      title: "Data Packages",
      description:
        "Purchase internet bundles from supported operators.",
    },
    {
      title: "SMS Bundles",
      description:
        "Add messaging packages for local and international communication.",
    },
    {
      title: "Voice Plans",
      description:
        "Activate operator-supported calling plans.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Select Country",
      description:
        "Choose the recipient's country and network provider.",
    },
    {
      step: "02",
      title: "Enter Number",
      description:
        "Provide the recipient mobile number.",
    },
    {
      step: "03",
      title: "Choose Package",
      description:
        "Select airtime, data, or an available bundle.",
    },
    {
      step: "04",
      title: "Complete Payment",
      description:
        "Confirm payment and deliver instantly.",
    },
  ];

  const useCases = [
    {
      title: "Family Support",
      description:
        "Send airtime and internet access to friends and family abroad.",
    },
    {
      title: "Remote Teams",
      description:
        "Provide connectivity allowances for distributed workforces.",
    },
    {
      title: "Customer Rewards",
      description:
        "Offer airtime incentives and promotional campaigns.",
    },
    {
      title: "NGOs & Communities",
      description:
        "Distribute mobile connectivity support at scale.",
    },
  ];

  const operators = [
    "Safaricom",
    "MTN",
    "Airtel",
    "Vodafone",
    "Orange",
    "T-Mobile",
    "Claro",
    "Telkom",
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
              Global Mobile Top-Ups
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Recharge phones anywhere in the world
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Send airtime, data bundles, and mobile plans instantly through a
              global network of telecom operators and digital distribution
              partners.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition">
                Start Top-Up
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 hover:bg-slate-50 transition">
                View Coverage
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
              Everything needed for global connectivity
            </h2>

            <p className="mt-4 text-slate-600">
              Fast, secure, and reliable mobile recharge infrastructure.
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

        {/* PROCESS */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            How it works
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

        {/* TOPUP TYPES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Recharge options
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {topupTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-medium text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* NETWORKS */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Supported mobile operators
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Connect to leading telecom providers through a unified platform.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {operators.map((operator) => (
                <div
                  key={operator}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <span className="font-medium text-slate-900">
                    {operator}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Built for individuals and organizations
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

        {/* BULK DISTRIBUTION */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Bulk top-up distribution
            </h2>

            <p className="mt-6 max-w-3xl text-slate-600 leading-8">
              Distribute airtime and data packages to thousands of recipients
              simultaneously through automated campaigns, rewards programs,
              workforce benefits, and community initiatives.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Team Allowances
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Provide recurring mobile connectivity benefits.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Rewards Programs
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Deliver digital incentives instantly.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-medium text-slate-900">
                  Mass Distribution
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Reach thousands of recipients at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section>
          <div className="rounded-[32px] bg-slate-900 p-12 text-white">
            <h2 className="text-3xl font-semibold">
              Secure and reliable delivery
            </h2>

            <p className="mt-6 max-w-2xl text-slate-300">
              Every transaction is monitored and validated to ensure accurate
              delivery and trusted mobile recharge experiences.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-medium">Real-Time Validation</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Verify numbers and operators before delivery.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Instant Confirmation</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Receive delivery updates in real time.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Fraud Protection</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Intelligent monitoring across transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-white p-12">
            <p className="text-2xl leading-relaxed text-slate-700">
              “We use RemitBridge to deliver mobile connectivity support across
              multiple countries. The speed and reliability have been
              exceptional.”
            </p>

            <div className="mt-8">
              <div className="font-medium text-slate-900">
                Amina Hassan
              </div>

              <div className="text-sm text-slate-500">
                Operations Lead, ConnectAid
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Keep people connected worldwide
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Recharge airtime, purchase data bundles, and support global
              connectivity through a single trusted platform.
            </p>

            <button className="mt-10 rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-slate-800 transition">
              Start Top-Up
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}