import React from "react";
import { Button } from "@heroui/react";
import { Mail, Sparkles, ArrowRight } from "lucide-react";

export default function JoinNewsletter() {
  return (
    <section className="bg-gray-50 dark:bg-[#080d1a] py-20 transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 dark:from-[#0f172a] dark:to-[#1e1b4b] p-8 md:p-12 shadow-xl border border-blue-500/10 dark:border-white/5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-400/20 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl flex-grow">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full mb-4">
              <Sparkles className="w-3 h-3" /> Stay Ahead of the LLM Curve
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Get Weekly Vetted Prompt Blueprints
            </h3>
            <p className="mt-3 text-sm sm:text-base text-blue-100 dark:text-gray-400 max-w-lg leading-relaxed">
              Join 12,000+ prompt engineers, developer teams, and digital
              creators receiving high-efficiency automation templates directly
              in their inbox.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto shrink-0 max-w-sm flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-2.5">
            <div className="relative flex items-center flex-grow">
              <Mail className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none z-10" />
              <input
                type="email"
                placeholder="Enter your engineer email"
                required
                className="w-full sm:w-64 md:w-full lg:w-60 pl-10 pr-4 py-2.5 rounded-xl text-sm border-0 focus:ring-2 focus:ring-cyan-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 shadow-inner outline-none transition-all"
              />
            </div>

            <Button
              size="md"
              color="primary"
              className="font-bold bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-md hover:opacity-90 rounded-xl"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
