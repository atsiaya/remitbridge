"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ---------- Username availability check ---------- */
  useEffect(() => {
    if (!form.username) {
      setUsernameTaken(null);
      return;
    }

    const checkUsername = async () => {
      setCheckingUsername(true);

      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", form.username)
        .maybeSingle();

      setUsernameTaken(!!data);
      setCheckingUsername(false);
    };

    const timeout = setTimeout(checkUsername, 400);
    return () => clearTimeout(timeout);
  }, [form.username]);

  /* ---------- Register user ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        f_name: form.firstName,
        l_name: form.lastName,
        username: form.username,
        phone: form.phone,
        email: form.email,
      });

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }
    }

    setSuccess(true);
    setLoading(false);
  };

 return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ===== VISUAL SECTION ===== */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://res.cloudinary.com/dbmlsgjof/image/upload/v1768124083/phone_rzukxx.svg"
            alt="RemitBridge mobile preview"
            className="w-full max-w-sm"
            loading="lazy"
          />
        </motion.div>

        {/* ===== FORM CARD ===== */}
        <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-xl shadow-sm px-6 py-7">
          <h1 className="text-xl font-semibold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-xs text-slate-600">
            Access global payments in minutes
          </p>

          {error && (
            <div className="mt-3 rounded-md border border-red-200 bg-red-50 px-2 py-1.5 text-xs text-red-700">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-3 rounded-md border border-green-200 bg-green-50 px-2 py-1.5 text-xs text-green-700">
              Account created. Check your email.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-0.5">
                <label className="text-[11px] font-medium text-slate-700">
                  First name
                </label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-medium text-slate-700">
                  Last name
                </label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Username */}
            <div className="space-y-0.5">
              <label className="text-[11px] font-medium text-slate-700">
                Username
              </label>
              <input
                name="username"
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
              />

              {checkingUsername && (
                <p className="text-[11px] text-slate-500">
                  Checking availability…
                </p>
              )}
              {usernameTaken === true && (
                <p className="text-[11px] text-red-600">
                  Username already taken
                </p>
              )}
              {usernameTaken === false && (
                <p className="text-[11px] text-green-600">
                  Username available
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-0.5">
              <label className="text-[11px] font-medium text-slate-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div className="space-y-0.5">
              <label className="text-[11px] font-medium text-slate-700">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
              />
            </div>

            {/* Password */}
            <div className="space-y-0.5">
              <label className="text-[11px] font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-3 w-full rounded-full bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );


}
