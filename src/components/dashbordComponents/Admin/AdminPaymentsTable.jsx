"use client";

import React, { useState } from "react";
import { 
  Magnifier, 
  ArrowDownToLine,
  CircleCheck, 
  CircleExclamation, 
  Clock 
} from "@gravity-ui/icons";

export default function AdminPaymentsTable() {

  const [payments] = useState([
    { id: "TXN-984321", creator: "Rahat Khan", promptTitle: "Midjourney V6 Portrait", amount: "$29.00", method: "Stripe", status: "success", date: "22 June, 2026" },
    { id: "TXN-231455", creator: "Asif Zubayer", promptTitle: "Next.js 15 Boilerplate", amount: "$49.00", method: "PayPal", status: "success", date: "21 June, 2026" },
    { id: "TXN-887431", creator: "Sabbir Ahmed", promptTitle: "Crypto Trading Bot Script", amount: "$15.00", method: "Stripe", status: "pending", date: "20 June, 2026" },
    { id: "TXN-094322", creator: "Mim Sultana", promptTitle: "SEO Article Writer", amount: "$19.00", method: "Apple Pay", status: "failed", date: "18 June, 2026" },
  ]);


  const renderStatusBadge = (status) => {
    switch (status) {
      case "success":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CircleCheck className="w-3.5 h-3.5" /> Success
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <CircleExclamation className="w-3.5 h-3.5" /> Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Clock className="w-3.5 h-3.5" /> Pending
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-4">
      

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">All Payments Ledger</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Track marketplace incoming revenue, transaction gateways, and order logs.</p>
        </div>
        

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Magnifier className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search Txn ID, creator..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-900 dark:text-white outline-none focus:border-rose-500 transition"
            />
          </div>

          <button 
            type="button"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            <ArrowDownToLine className="w-4 h-4" /> Export
          </button>
        </div>
      </div>


      <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/70 dark:bg-slate-900/50 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Transaction ID</th>
                <th className="py-3.5 px-4">Buyer/Creator</th>
                <th className="py-3.5 px-4">Prompt Resource</th>
                <th className="py-3.5 px-4">Gateway</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-xs text-gray-700 dark:text-gray-300">
              {payments.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  

                  <td className="py-3.5 px-4 font-mono font-bold text-gray-900 dark:text-white">
                    {p.id}
                  </td>


                  <td className="py-3.5 px-4 font-medium text-gray-600 dark:text-gray-300">
                    {p.creator}
                  </td>


                  <td className="py-3.5 px-4 max-w-[180px] truncate text-gray-500 dark:text-gray-400 font-medium">
                    {p.promptTitle}
                  </td>


                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 font-bold">
                      {p.method}
                    </span>
                  </td>


                  <td className="py-3.5 px-4 font-mono font-bold text-gray-900 dark:text-white">
                    {p.amount}
                  </td>


                  <td className="py-3.5 px-4 text-gray-400">
                    {p.date}
                  </td>

        
                  <td className="py-3.5 px-4 text-center">
                    {renderStatusBadge(p.status)}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}