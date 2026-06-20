"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, Chip } from "@heroui/react";

import {
  ShieldCheck,
  CircleCheck,
  ArrowLeft,
  LayoutCellsLarge,
  Key,
  Flame,
  CreditCard,
} from "@gravity-ui/icons";

export default function PaymentPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const benefits = [
    {
      title: "Unlimited Premium Prompts",
      desc: "Unlock execution strings across all system frameworks instantly.",
    },
    {
      title: "No-Blur Production Code",
      desc: "Instantly copy optimized production code payloads with zero restrictions.",
    },
    {
      title: "Direct Review Privileges",
      desc: "Rate blueprints, post logs, and collaborate directly with architects.",
    },
    {
      title: "Advanced Sandbox Environments",
      desc: "Test verified multi-model pipeline structures seamlessly.",
    },
  ];

  const handleStripeCheckout = async () => {
    setIsProcessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const mockTransaction = {
        transactionId: `ch_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        email: "authenticated_user@demo.com",
        amount: 5.0,
        date: new Date().toISOString().split("T")[0],
      };

      alert(
        `🎉 Payment Successful!\n\n` +
          `Transaction ID: ${mockTransaction.transactionId}\n` +
          `User Profile Status Updated: PREMIUM ENFORCED\n\n` +
          `Redirecting you back to your prompt pipeline...`,
      );
      router.back();
    } catch (error) {
      console.error("Payment pipeline error:", error);
      alert("❌ Transaction failed. Please check balance properties.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030712] py-12 md:py-20 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />{" "}
          Return to Prompt Pipeline
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Chip
                  size="sm"
                  color="warning"
                  className="font-black text-[10px] uppercase tracking-widest dark:text-green-400 text-black"
                >
                  Lifetime Pass
                </Chip>
                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> PromptHub Ecosystem
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
                Upgrade to Premium Engine Access
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Gain runtime clearance to the elite marketplace tier. Extract
                high-efficiency system blueprints curated to minimize token
                overhead.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-white/5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <CircleCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                      {benefit.title}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-normal">
                      {benefit.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-gray-100/50 dark:bg-gray-900/40 p-3 rounded-xl border border-gray-200 dark:border-white/5 mt-6">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-500 shrink-0" />
              <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                Payments secured natively via Stripe matching banking compliance
                standards.
              </span>
            </div>
          </div>

          <Card className="md:col-span-5 p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-lg flex flex-col justify-between rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="border-b border-gray-100 dark:border-white/5 pb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Selected Plan
                </h3>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mt-1">
                  Premium Unlock
                </h2>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1 text-gray-900 dark:text-white">
                  <span className="text-4xl font-black tracking-tight">
                    $5.00
                  </span>
                  <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                    / One-Time
                  </span>
                </div>
                <p className="text-[11px] font-medium text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/5 inline-block px-2 py-0.5 rounded-md">
                  No monthly renewals or hidden recurring invoices
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-white/5 space-y-2.5 text-xs font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Clearance Tier</span>
                  <span className="text-gray-900 dark:text-white font-bold">
                    All-Access Matrix
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Setup Processing</span>
                  <span className="text-emerald-500 font-bold">Free</span>
                </div>
                <div className="border-t border-gray-200 dark:border-white/5 pt-2.5 flex items-center justify-between text-sm font-bold">
                  <span className="text-gray-900 dark:text-white">
                    Total Charge
                  </span>
                  <span className="text-blue-600 dark:text-cyan-400">
                    $5.00
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                color="primary"
                className="w-full font-black rounded-xl shadow-md bg-blue-600 dark:bg-blue-500 flex items-center justify-center gap-2"
                onClick={handleStripeCheckout}
                isLoading={isProcessing}
                endContent={!isProcessing && <CreditCard className="w-4 h-4" />}
              >
                {isProcessing ? "Verifying Transaction..." : "Pay with Stripe"}
              </Button>

              <p className="text-[10px] text-center text-gray-400 dark:text-gray-500 mt-3 px-2">
                By processing this transaction you acquire full operational
                authorization attributes over the system catalog.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
