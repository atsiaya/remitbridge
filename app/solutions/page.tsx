"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  TrendingUp,
  Wallet,
  CreditCard,
  Smartphone,
  Building2,
  CheckCircle2,
  LineChart,
  Layers3,
  Zap,
} from "lucide-react";

export default function Solutions() {
  const capabilities = [
    {
      title: "Money Transfers",
      desc: "Send money internationally with transparent pricing and near real-time settlement.",
      icon: Globe,
      href: "/solutions/money-transfers",
    },
    {
      title: "Currency Exchange",
      desc: "Access institutional-grade FX execution and competitive exchange rates.",
      icon: TrendingUp,
      href: "/solutions/currency-exchange",
    },
    {
      title: "Mobile Top-ups",
      desc: "Recharge mobile networks worldwide through a unified platform.",
      icon: Smartphone,
      href: "/solutions/mobile-topups",
    },
    {
      title: "eSIM",
      desc: "Instant digital connectivity across hundreds of destinations.",
      icon: CreditCard,
      href: "/solutions/esim",
    },
  ];

  const businessTypes = [
    {
      title: "Startups",
      desc: "Launch globally from day one with wallets, FX, and international payouts.",
    },
    {
      title: "Scaleups",
      desc: "Automate finance operations and streamline international expansion.",
    },
    {
      title: "Enterprises",
      desc: "Manage treasury, compliance, and multi-market payment infrastructure.",
    },
  ];

  const platformFeatures = [
    {
      title: "Multi-Currency Wallets",
      icon: Wallet,
      desc: "Hold and manage balances across multiple currencies from one account.",
    },
    {
      title: "Smart Routing",
      icon: Zap,
      desc: "Automatically choose the most efficient payment corridors.",
    },
    {
      title: "Real-Time Reporting",
      icon: LineChart,
      desc: "Track every transaction with detailed analytics and exports.",
    },
    {
      title: "Unified Infrastructure",
      icon: Layers3,
      desc: "One API for transfers, FX, cards, wallets, and top-ups.",
    },
  ];

  const stats = [
    { value: "100+", label: "Countries Supported" },
    { value: "50+", label: "Currencies" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Transaction Monitoring" },
  ];

  const steps = [
    "Create your account",
    "Verify your business",
    "Fund your wallet",
    "Send globally",
  ];

  const testimonials = [
    {
      name: "Sarah Kim",
      role: "Finance Lead",
      company: "Atlas Ventures",
      quote:
        "RemitBridge reduced our international payment operations from days to minutes.",
    },
    {
      name: "David Mwangi",
      role: "Operations Manager",
      company: "Nova Logistics",
      quote:
        "The FX automation alone saved our finance team countless hours every month.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <main className="mx-auto max-w-7xl px-6 py-32 space-y-36">

        {/* HERO */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Global Financial Infrastructure
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900">
              Solutions built for modern global finance
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-slate-600 leading-8">
              Move money, exchange currencies, issue wallets, and manage global
              payments from a single secure platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-white">
                Explore Solutions
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 text-slate-700">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section>
          <div className="grid gap-6 md:grid-cols-4">
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

        {/* CAPABILITIES */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-slate-900">
              Core capabilities
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-all"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-medium text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {item.desc}
                  </p>

                  <ArrowRight className="mt-6 h-5 w-5 text-slate-400 group-hover:translate-x-1 transition" />
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Get started in minutes
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-8"
              >
                <div className="text-sm text-slate-400">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-lg font-medium text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* PLATFORM FEATURES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Platform infrastructure
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <Icon className="h-6 w-6 text-slate-700" />

                  <h3 className="mt-5 text-xl font-medium text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* BUSINESS TYPES */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Designed for every stage of growth
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {businessTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 border border-slate-200 p-10"
              >
                <Building2 className="h-6 w-6 text-slate-700" />

                <h3 className="mt-6 text-xl font-medium text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECURITY */}
        <section>
          <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-12 text-white">
            <ShieldCheck className="h-8 w-8" />

            <h2 className="mt-6 text-3xl font-semibold">
              Enterprise-grade security
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                "KYC & AML Monitoring",
                "Fraud Detection",
                "Encrypted Infrastructure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <h2 className="mb-12 text-3xl font-semibold text-slate-900">
            Trusted by growing businesses
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white p-10"
              >
                <p className="text-lg leading-8 text-slate-700">
                  "{item.quote}"
                </p>

                <div className="mt-8">
                  <div className="font-medium text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-16 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">
              Build globally with confidence
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-600">
              Everything you need to move money, manage currencies, and scale
              international operations.
            </p>

            <button className="mt-10 rounded-xl bg-slate-900 px-8 py-4 text-white">
              Start Today
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}