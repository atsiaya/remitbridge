"use client";

import Link from "next/link";
import {
  ArrowRight,
  Home,
  MessageSquareOff,
  LifeBuoy,
  ChevronLeft,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <MessageSquareOff className="h-4 w-4" />
              Page unavailable
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-7xl">
              This page
              <br />
              is not available
              <br />
              right now.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              The page you’re looking for may have been moved, removed, or is temporarily unavailable.
              You can return home or continue exploring the platform.
            </p>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
              >
                <Home className="h-5 w-5" />
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <ChevronLeft className="h-5 w-5" />
                Go Back
              </button>
            </div>

            {/* SUPPORT */}
            <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <LifeBuoy className="h-10 w-10 rounded-2xl bg-blue-50 p-2 text-blue-600" />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Need help?
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    If you believe this page should be accessible, contact support
                    or try again later.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">
            
            <div className="w-full max-w-md rounded-[36px] border border-gray-100 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
              
              {/* HEADER */}
              <div className="text-center">
                <p className="text-sm text-gray-500">Status</p>
                <h2 className="mt-1 text-3xl font-bold text-gray-900">
                  Unavailable
                </h2>
              </div>

              {/* ICON */}
              <div className="my-10 flex justify-center">
                <div className="relative flex h-52 w-52 items-center justify-center">
                  <div className="absolute h-full w-full rounded-full bg-blue-50" />
                  <div className="absolute h-40 w-40 rounded-full border border-dashed border-blue-200" />

                  <div className="relative z-10 rounded-3xl bg-white p-6 shadow-lg">
                    <MessageSquareOff className="h-14 w-14 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="space-y-4">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-900">
                    What happened?
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    This page is either missing, moved, or not yet published.
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-900">
                    What you can do
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Return to the homepage or continue navigating available sections.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-black/90"
              >
                Back to Platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}