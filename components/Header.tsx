"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          RemitBridge
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="/" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="/products" className="hover:text-blue-700 transition">
            Products
          </a>

          {/* Solutions Dropdown (CLICKABLE FIX APPLIED) */}
          <div className="relative group">
            <a
              href="/solutions"
              className="hover:text-blue-700 transition focus:outline-none"
            >
              Solutions
            </a>

            <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-md
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              group-focus-within:opacity-100 group-focus-within:visible transition">
              <ul className="py-2 text-sm text-slate-700">
                <li>
                  <a
                    href="/solutions/money-transfers"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-700 transition"
                  >
                    <p className="font-medium">Money transfers</p>
                    <p className="text-xs text-slate-500">
                      Send internationally to 100+ countries
                    </p>
                  </a>
                </li>

                <li>
                  <a
                    href="/solutions/currency-exchange"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-700 transition"
                  >
                    <p className="font-medium">All currency exchange</p>
                    <p className="text-xs text-slate-500">
                      Exchange from USD seamlessly
                    </p>
                  </a>
                </li>

                <li>
                  <a
                    href="/solutions/mobile-topups"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-700 transition"
                  >
                    <p className="font-medium">Mobile top-ups</p>
                    <p className="text-xs text-slate-500">
                      Buy phone plans overseas
                    </p>
                  </a>
                </li>

                <li>
                  <a
                    href="/solutions/esim"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-blue-700 transition"
                  >
                    <p className="font-medium">eSIM</p>
                    <p className="text-xs text-slate-500">
                      Stay connected globally
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a href="/company" className="hover:text-blue-700 transition">
            Company
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/download-app"
            className="text-sm font-medium text-slate-800 hover:text-blue-700 transition"
          >
            Sign in
          </a>
          <a
            href="/register"
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-medium text-white hover:bg-blue-800 transition"
          >
            Get started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <FiMenu className="h-6 w-6 text-slate-700" />
        </button>
      </div>

      {/* Mobile Menu (UNCHANGED) */}
      {open && (
        <div className="fixed inset-y-0 right-0 z-50 w-72 bg-white/90 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
          <div className="flex h-20 items-center justify-between px-6 border-b border-slate-200">
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          <div className="flex flex-col justify-between h-[calc(100%-5rem)] px-6 py-6">
            <nav className="flex flex-col gap-5 text-slate-800">
              <a href="/" className="hover:text-blue-700 transition">
                Home
              </a>
              <a href="/products" className="hover:text-blue-700 transition">
                Products
              </a>
              <a href="/solutions" className="hover:text-blue-700 transition">
                Solutions
              </a>
              <a href="/company" className="hover:text-blue-700 transition">
                Company
              </a>
            </nav>

            <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col gap-3">
              <a
                href="/download-app"
                className="block w-full text-center rounded-full border border-slate-300 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 transition"
              >
                Download
              </a>
              <a
                href="/register"
                className="block w-full text-center rounded-full bg-blue-700 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
