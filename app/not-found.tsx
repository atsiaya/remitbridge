"use client";

import Link from "next/link";
import { ArrowRight, Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFF7D6,transparent_35%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Search className="h-4 w-4" />
              Error 404
            </div>

            <h1 className="mt-8 text-6xl font-black tracking-tight md:text-8xl">
              Page not
              <br />
              found.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              The page you are looking for may have been moved,
              deleted, or never existed. Continue exploring our
              platform or return to the homepage.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-medium text-white transition hover:bg-black/90"
              >
                <Home className="h-4 w-4" />
                Go Home
              </Link>

              <Link
                href="/markets"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-medium transition hover:bg-gray-50"
              >
                Explore Markets
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="rounded-[32px] border bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Request Status
                  </p>

                  <h2 className="text-3xl font-bold">
                    Resource Unavailable
                  </h2>
                </div>

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
                  404
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border p-5">
                  <p className="font-medium">
                    Requested resource could not be found.
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Verify the URL or navigate using the
                    platform menu.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="font-medium">
                    Platform Status
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-600">
                      All systems operational
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">
                    Need assistance?
                  </p>

                  <p className="mt-2 text-sm">
                    Contact support or visit our help
                    center for guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-6 -top-6 hidden rounded-3xl border bg-white p-5 shadow-xl lg:block">
              <p className="text-sm text-gray-500">
                Platform Status
              </p>

              <h3 className="text-3xl font-black text-green-600">
                Online
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}