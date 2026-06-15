"use client";
import Image from "next/image";

export default function DownloadAppPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-32 px-6 sm:px-12 lg:px-24 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Download the RemitBridge App</h1>
        <p className="text-slate-600 mb-12 text-lg">
          Send and receive money globally, Pay with escrow, and track transactions instantly.
          
        </p>

        {/* Download Icons as Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Android */}
          <a
            href="https://play.google.com/store/apps/details?id=com.remitbridge.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 transition rounded-2xl p-6 shadow-lg flex items-center justify-center"
          >
            <Image
              src="/icons/android.svg"
              alt="Android"
              width={64}
              height={64}
              className="invert"
            />
          </a>

          {/* iOS */}
          <a
            href="https://apps.apple.com/app/remitbridge/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 transition rounded-2xl p-6 shadow-lg flex items-center justify-center"
          >
            <Image
              src="/icons/ios.svg"
              alt="iOS"
              width={64}
              height={64}
              className="invert"
            />
          </a>
        </div>

        {/* QR Code Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center gap-6 max-w-sm mx-auto">
          <Image
            src="/images/app-qr-code.png"
            alt="Scan to download RemitBridge app"
            width={200}
            height={200}
            className="rounded-xl"
          />
          <p className="text-center text-slate-600 text-base">
            Scan the QR code with your mobile device to <a href="/debug-apk/app-release.apk">download</a> the app instantly.
          </p>
        </div>

        {/* Optional Info */}
        <p className="mt-12 text-center text-sm text-slate-500">
          By downloading, you agree to our{" "}
          <a href="/privacy-policy" className="text-blue-700 hover:underline">
            Privacy Policy
          </a>{"/privacy-policy "}
          and{" "}
          <a href="/terms-of-service" className="text-blue-700 hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </main>
  );
}
