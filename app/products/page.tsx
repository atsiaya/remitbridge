"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredProducts = [
  {
    id: "usd",
    eyebrow: "Global Banking",
    title: "USD Accounts",
    desc: "Receive, hold, and send USD globally through dedicated account infrastructure designed for modern international businesses.",
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768730534/692ca904948ae143aac5a33f_hero_Image_3_-p-500_lqmszx.png",
  },
  {
    id: "cards",
    eyebrow: "Cards",
    title: "Virtual USD Cards",
    desc: "Issue secure virtual cards for subscriptions, advertising, procurement, and team expenses with real-time controls.",
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768716663/visa-virtual-card-removebg-preview_wow5ad.png",
  },
  {
    id: "transfers",
    eyebrow: "Payments",
    title: "International Transfers",
    desc: "Move money globally through optimized payment rails with transparent pricing and fast settlement.",
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
  {
    id: "fx",
    eyebrow: "Treasury",
    title: "Currency Exchange",
    desc: "Convert between major and emerging market currencies using competitive real-time exchange rates.",
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
  {
    id: "esim",
    eyebrow: "Connectivity",
    title: "Global eSIM",
    desc: "Instant digital mobile connectivity in 190+ countries without physical SIM cards.",
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
  {
    id: "topups",
    eyebrow: "Connectivity",
    title: "Mobile Top-Ups",
    desc: "Recharge airtime and data plans globally through a unified platform.",
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
];

const ecosystemProducts = [
  {
    title: "USD Accounts",
    description: "Global USD receiving accounts.",
  },
  {
    title: "EUR Accounts",
    description: "European banking and collections.",
  },
  {
    title: "GBP Accounts",
    description: "Local UK payment infrastructure.",
  },
  {
    title: "Multi-Currency Wallets",
    description: "Manage balances across currencies.",
  },
  {
    title: "Virtual Cards",
    description: "Secure online payment cards.",
  },
  {
    title: "Bulk Payouts",
    description: "Mass payment distributions.",
  },
  {
    title: "FX Exchange",
    description: "Real-time currency conversions.",
  },
  {
    title: "Treasury Tools",
    description: "Liquidity and exposure management.",
  },
  {
    title: "Global eSIM",
    description: "Worldwide digital connectivity.",
  },
  {
    title: "Mobile Top-Ups",
    description: "Global airtime and data services.",
  },
  {
    title: "Developer APIs",
    description: "Integrate financial infrastructure.",
  },
  {
    title: "Compliance Suite",
    description: "KYC, AML and monitoring tools.",
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
    value: "24/7",
    label: "Monitoring",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <main className="mx-auto max-w-7xl px-6 py-32 space-y-32">

        {/* HERO */}
        <section className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Products
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900">
              Financial infrastructure for global businesses
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Accounts, cards, FX, transfers, connectivity, and APIs —
              everything needed to move money and operate globally from one
              trusted platform.
            </p>
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

        {/* CATEGORY NAVIGATION */}
        <section>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Accounts",
              "Cards",
              "Payments",
              "Treasury",
              "Connectivity",
              "Developer APIs",
            ].map((category) => (
              <div
                key={category}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-700"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        {featuredProducts.map((product, index) => {
          const reverse = index % 2 === 1;

          return (
            <section
              key={product.id}
              className={`flex flex-col items-center gap-12 lg:gap-24 ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <motion.div
                className="w-full max-w-xl"
                initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {product.eyebrow}
                </p>

                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                  {product.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {product.desc}
                </p>

                <button className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                className="flex w-full max-w-md justify-center"
                initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={450}
                  height={320}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </section>
          );
        })}

        {/* PRODUCT ECOSYSTEM */}
        <section>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Complete Product Ecosystem
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Everything your business needs to manage global payments,
              treasury, connectivity, and financial operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemProducts.map((product, index) => (
              <motion.div
                key={product.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-sm transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <h3 className="font-medium text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section>
          <div className="rounded-[40px] bg-slate-900 p-12 md:p-16 text-white">
            <h2 className="text-4xl font-semibold">
              Built for scale and compliance
            </h2>

            <p className="mt-6 max-w-2xl text-slate-300">
              Enterprise-grade infrastructure trusted by global businesses,
              fintechs, startups, and distributed teams.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-medium text-white">
                  KYC & AML
                </h3>

                <p className="mt-3 text-slate-400">
                  Automated verification, monitoring, and risk management.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-white">
                  Enterprise Security
                </h3>

                <p className="mt-3 text-slate-400">
                  Bank-grade encryption and secure infrastructure.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-white">
                  Developer APIs
                </h3>

                <p className="mt-3 text-slate-400">
                  Integrate accounts, cards, transfers, and FX into your
                  applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Build globally with confidence
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Access banking, payments, treasury, connectivity, and developer
              tools from a single financial platform.
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