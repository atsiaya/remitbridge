"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { buttonClasses } from "@/components/ui";

const interestOptions = [
  { id: "wallet", label: "USD wallet" },
  { id: "remittance", label: "Sending money" },
  { id: "cards", label: "Virtual cards" },
];

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm({
  variant = "full",
  tone = "light",
}: {
  variant?: "full" | "compact";
  tone?: "light" | "dark";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const dark = tone === "dark";
  const full = variant === "full";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          country: data.get("country") || undefined,
          interests: data.getAll("interests"),
          website: data.get("website"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Try again in a moment.");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setMessage("We couldn't reach the server. Check your connection and try again.");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className={`flex items-start gap-3 rounded-2xl p-5 text-left ${
          dark ? "bg-paper/10" : "bg-sun-soft"
        }`}
      >
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sun text-ink">
          <Check className="size-4" aria-hidden="true" />
        </span>
        <p className={dark ? "text-paper" : "text-ink"}>
          <span className="block font-medium">You&apos;re on the list.</span>
          <span className={`block text-[15px] ${dark ? "text-paper/70" : "text-muted"}`}>
            We&apos;ll email you when early access opens in your region.
          </span>
        </p>
      </div>
    );
  }

  const field = dark
    ? "bg-paper/10 text-paper placeholder:text-paper/50 border-paper/20 focus:border-paper/60"
    : "bg-paper text-ink placeholder:text-muted border-line focus:border-ink";

  return (
    <form onSubmit={onSubmit} noValidate={false} className="text-left">
      {/* Honeypot: hidden from people, tempting for bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={full ? "space-y-5" : "flex flex-col gap-3 sm:flex-row"}>
        <div className={full ? "" : "flex-1"}>
          <label
            htmlFor={`email-${variant}`}
            className={full ? "mb-2 block text-sm font-medium" : "sr-only"}
          >
            Email address
          </label>
          <input
            id={`email-${variant}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`h-12 w-full rounded-full border px-5 text-base outline-none transition-colors ${field}`}
          />
        </div>

        {full ? (
          <>
            <div>
              <label htmlFor="country" className="mb-2 block text-sm font-medium">
                Where do you live? <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country-name"
                placeholder="Country"
                className={`h-12 w-full rounded-full border px-5 text-base outline-none transition-colors ${field}`}
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-medium">
                What are you interested in? <span className="font-normal text-muted">(optional)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((option) => (
                  <label
                    key={option.id}
                    className="cursor-pointer rounded-full border border-line px-4 py-2 text-[15px] transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2"
                  >
                    <input
                      type="checkbox"
                      name="interests"
                      value={option.id}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClasses(dark ? "sun" : "primary", "lg", full ? "w-full" : "")}
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>

      {status === "error" ? (
        <p role="alert" className={`mt-3 text-sm ${dark ? "text-sun" : "text-red-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
