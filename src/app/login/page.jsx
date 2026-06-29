"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Envelope, 
 Lock, 
  Eye, 
  EyeClosed, 
  ArrowRight,
  CircleExclamation
} from "@gravity-ui/icons";
import { authClient } from "../../../lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashbord",
    });

    setLoading(false);

    if (authError) {
      setError(authError.message || "Invalid email or password. Please try again.");
    } else {
      router.push("/dashbord");
    }
  };


  const handleSocialLogin = async (provider) => {
    setError("");
    await authClient.signIn.social({
      provider,
      callbackURL: "/dashbord",
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-[#090d16] px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
        

        <div className="text-center space-y-1.5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-950 dark:text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            Log in to manage your AI prompts and dashboard.
          </p>
        </div>


        {error && (
          <div className="flex items-start gap-2 p-3 text-xs font-semibold rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 animate-fade-in">
            <CircleExclamation className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Email Address</label>
            <div className="relative">
              <Envelope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white outline-none focus:border-rose-500 transition font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Password</label>
              <Link 
                href="/forgot-password" 
                className="text-[11px] font-bold text-rose-500 hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl border border-gray-200 dark:border-white/10 bg-transparent text-gray-900 dark:text-white outline-none focus:border-rose-500 transition font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                {showPassword ? <EyeClosed className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-600/50 text-white font-bold text-xs py-3 rounded-xl shadow-sm shadow-rose-500/10 transition flex items-center justify-center gap-2 group cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
          </button>
        </form>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-gray-200 dark:border-white/5"></div>
          <span className="flex-shrink mx-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">Or continue with</span>
          <div className="flex-grow border-t border-gray-200 dark:border-white/5"></div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/50 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.92 1 12 1 7.35 1 3.37 3.68 1.44 7.6l3.77 2.92C6.1 7.24 8.83 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.44h6.46c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.71-4.94 3.71-8.55z"/>
              <path fill="#FBBC05" d="M5.21 14.88c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28L1.44 7.4C.52 9.24 0 11.31 0 13.5s.52 4.26 1.44 6.1l3.77-2.72z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.03.69-2.35 1.1-4.26 1.1-3.17 0-5.9-2.2-6.79-5.48L1.44 15.56C3.37 19.48 7.35 22 12 23z"/>
            </svg>
            Google
          </button>

         
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="font-bold text-rose-500 hover:underline">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}