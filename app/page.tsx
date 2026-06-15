"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiCreditCard, FiBarChart2 } from "react-icons/fi";

export default function Home() {
  const features = [
    {
      icon: <FiGlobe className="h-6 w-6 text-blue-700" />,
      title: "Cross-border payments",
      desc: "Send and receive international payments with reliable settlement, local rails, and no hidden intermediaries.",
    },
    {
      icon: <FiCreditCard className="h-6 w-6 text-blue-700" />,
      title: "Multi-currency accounts",
      desc: "Hold, convert, and manage multiple currencies from a single account, just like a local business.",
    },
    {
      icon: <FiBarChart2 className="h-6 w-6 text-blue-700" />,
      title: "Transparent FX pricing",
      desc: "Access real-time exchange rates with full visibility, competitive spreads, and institutional-grade liquidity.",
    },
  ];

  const trustMetrics = [
    { value: "190+", label: "Countries and territories supported" },
    { value: "$10B+", label: "Transaction volume processed annually" },
    { value: "99.9%", label: "Service availability and uptime" },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      company: "TechCorp",
      feedback:
        "RemitBridge has completely streamlined our international payments. The speed, clarity, and reliability are unmatched.",
    },
    {
      name: "James L.",
      company: "FinStart",
      feedback:
        "With transparent FX and multi-currency accounts, we’ve reduced costs and gained full control over our global cash flow.",
    },
  ];

  // animated background shapes
  const shapes = [
    { size: 80, x: 50, y: 10, color: "bg-blue-200", duration: 15 },
    { size: 40, x: 200, y: 80, color: "bg-blue-300", duration: 20 },
    { size: 60, x: 350, y: 30, color: "bg-blue-100", duration: 18 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white font-sans">
      {/* ===== ANIMATED HERO SHAPES ===== */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} opacity-30`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: shape.duration,
            ease: "easeInOut",
          }}
        />
      ))}

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        {/* ===== HERO SECTION ===== */}
        <section className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Global payments infrastructure
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              International payments
              <br />
              designed for modern businesses
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              RemitBridge helps businesses send, receive, and manage money across borders with
              secure multi-currency accounts, fast settlements, and fully transparent FX.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-full bg-blue-700 px-8 font-medium text-white transition hover:bg-blue-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open an account
              </motion.a>

              <motion.a
                href="/download-app"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 px-8 font-medium text-slate-900 transition hover:bg-slate-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get the mobile app
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://res.cloudinary.com/dbmlsgjof/image/upload/v1768124083/phone_rzukxx.svg"
              alt="RemitBridge mobile application interface"
              className="mx-auto w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </section>

        {/* ===== TRUST METRICS ===== */}
        <section className="mt-32 border-t border-slate-200 pt-16">
          <div className="grid gap-12 text-center sm:grid-cols-3">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-4xl font-semibold text-slate-900">
                  {metric.value}
                </p>
                <p className="mt-2 text-slate-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="mt-32">
          <div className="mb-16 max-w-2xl">
            <motion.h2
              className="text-3xl font-semibold text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Everything you need to move money globally
            </motion.h2>

            <motion.p
              className="mt-4 text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Built for startups, scaleups, and enterprises operating across international markets.
            </motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="rounded-2xl bg-slate-50 p-8 transition hover:bg-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== TRUSTED BY / PARTNERS ===== */}
        <section className="mt-32 rounded-3xl bg-blue-50 px-6 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              className="text-3xl font-semibold text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Partnered with global companies
            </motion.h2>

            <motion.p
              className="mt-4 text-slate-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Powering payments and financial infrastructure for brands trusted by
              millions worldwide.
            </motion.p>

            <div className="mt-12 grid grid-cols-2 items-center gap-10 sm:grid-cols-3">
              {[
                {
                  name: "Visa",
                  logo:
                    "https://res.cloudinary.com/dbmlsgjof/image/upload/v1769144957/pngimg.com_-_visa_PNG36_ejdayh.png",
                },
                {
                  name: "Circle",
                  logo:
                    "https://res.cloudinary.com/dbmlsgjof/image/upload/v1769145083/images-removebg-preview_x9o4mz.png",
                },
                {
                  name: "MTN",
                  logo:
                    "https://res.cloudinary.com/demo/image/upload/v1700000000/mtn-logo.svg",
                },
              ].map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 w-auto object-contain grayscale transition hover:grayscale-0"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ===== CTA ===== */}
        <section className="mt-32 rounded-3xl bg-blue-700 p-12 text-center text-white">
          <motion.h2
            className="text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start sending money globally today
          </motion.h2>

          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Open a RemitBridge account in minutes and scale your payments with confidence.
          </motion.p>

          <motion.a
            href="/register"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-blue-700 transition hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open account
          </motion.a>
        </section>
      </main>
    </div>
  );
}
