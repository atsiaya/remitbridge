"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Trust & Transparency",
    description:
      "We believe financial services should be clear, fair, and accessible to every business operating globally.",
  },
  {
    title: "Global Accessibility",
    description:
      "Building infrastructure that enables businesses to operate seamlessly across borders.",
  },
  {
    title: "Security First",
    description:
      "Enterprise-grade security and compliance are embedded into everything we build.",
  },
  {
    title: "Customer Obsession",
    description:
      "Every product decision begins with improving customer experience and outcomes.",
  },
];

const metrics = [
  {
    value: "100+",
    label: "Countries Served",
  },
  {
    value: "50+",
    label: "Currencies Supported",
  },
  {
    value: "24/7",
    label: "Platform Availability",
  },
  {
    value: "99.9%",
    label: "Infrastructure Uptime",
  },
];

const sections = [
  {
    title: "Global Accounts",
    description:
      "USD, EUR, and multi-currency accounts designed for modern international businesses.",
  },
  {
    title: "Payments & Transfers",
    description:
      "Cross-border transfers, supplier payments, payroll, and bulk payout infrastructure.",
  },
  {
    title: "Treasury & FX",
    description:
      "Currency exchange and liquidity tools to help businesses operate internationally.",
  },
  {
    title: "Connectivity",
    description:
      "Global eSIMs and mobile top-ups that keep businesses and travelers connected worldwide.",
  },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <main className="mx-auto max-w-7xl px-6 py-32 space-y-32">

        {/* HERO */}
        <section className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              About RemitBridge
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900">
              Building financial infrastructure for a borderless world
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              RemitBridge helps businesses move money, manage currencies,
              issue cards, connect globally, and operate internationally
              through one unified financial platform.
            </p>
          </motion.div>
        </section>

        {/* COMPANY METRICS */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
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

        {/* OUR STORY */}
        <section>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Businesses today operate globally, yet financial infrastructure
                often remains fragmented, expensive, and difficult to access.
                RemitBridge exists to simplify cross-border operations by
                providing modern financial tools through a single platform.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-slate-900">
                Our Vision
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We envision a future where businesses can send money, manage
                currencies, issue cards, access connectivity, and scale
                internationally without geographic limitations.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section>
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-slate-900">
              What We Build
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl">
              Financial products and infrastructure designed for modern global
              commerce.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-medium text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section>
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-slate-900">
              Our Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-medium text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section>
          <div className="rounded-[40px] bg-slate-900 p-12 md:p-16 text-white">
            <h2 className="text-4xl font-semibold">
              Security, Compliance & Reliability
            </h2>

            <p className="mt-6 max-w-2xl text-slate-300">
              We build with security and regulatory responsibility at the core.
              Our infrastructure is designed to support businesses operating in
              multiple markets while maintaining high standards of compliance.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-medium">
                  Enterprise Security
                </h3>

                <p className="mt-3 text-slate-400">
                  Bank-grade encryption and modern infrastructure practices.
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  KYC & AML Controls
                </h3>

                <p className="mt-3 text-slate-400">
                  Built-in verification and monitoring workflows.
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  Global Infrastructure
                </h3>

                <p className="mt-3 text-slate-400">
                  Designed for reliability, scalability, and international growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-12">
            <h2 className="text-4xl font-semibold text-slate-900">
              Join Our Team
            </h2>

            <p className="mt-6 max-w-2xl text-slate-600 leading-8">
              We're building the future of global financial infrastructure.
              If you're passionate about technology, finance, and solving
              complex international challenges, we'd love to hear from you.
            </p>

            <button className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition">
              View Careers
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-white p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Let's build globally together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Whether you're looking for a financial partner, integration
              support, or business collaboration, our team is ready to help.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-slate-900 px-8 py-4 text-white hover:bg-slate-800 transition">
                Contact Us
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 text-slate-700 hover:bg-slate-50 transition">
                Partner With Us
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}