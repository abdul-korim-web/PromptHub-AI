"use client";

import React, { useState } from "react";
import { 
  ShieldExclamation, 
  TrashBin, 
  Envelope, 
  Eye, 
  Magnifier,
  CircleInfo
} from "@gravity-ui/icons";

export default function AdminReportedPrompts() {
 
  const [reports, setReports] = useState([
    { id: 1, title: "Jailbreak Token Script for Claude AI", creator: "Zayan Malik", reporter: "Asif69", reason: "Policy Violation / Jailbreak attempt", date: "Today" },
    { id: 2, title: "NSFW Photorealistic Character Generator", creator: "Mim Sultana", reporter: "UnknownUser", reason: "Adult content / Inappropriate output", date: "Yesterday" },
    { id: 3, title: "Scraping Hook for Private Government Portals", creator: "Sabbir Ahmed", reporter: "DevOps_Hulk", reason: "Malicious activities / Hacking tool", date: "20 June, 2026" },
  ]);


  const handleRemovePrompt = (id, title) => {
    if (confirm(`Are you sure you want to completely REMOVE the prompt "${title}" from the marketplace?`)) {
      setReports(reports.filter(r => r.id !== id));
      alert("Prompt has been removed and the report resolved.");
    }
  };


  const handleWarnCreator = (creator) => {
    alert(`An official compliance warning notification has been issued to creator: "${creator}".`);
  };


  const handleDismissReport = (id) => {
    setReports(reports.filter(r => r.id !== id));
    alert("Report dismissed. Marked as Safe/Not harmful.");
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-4">
      
  
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <ShieldExclamation className="text-rose-500 w-5 h-5" />
            Reported Content & Compliance
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Review user flags, delete violation prompts, warn creators, or dismiss false positive reports.</p>
        </div>
        

        <div className="relative w-full sm:w-72">
          <Magnifier className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search reported items..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-900 dark:text-white outline-none focus:border-rose-500 transition"
          />
        </div>
      </div>


      <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/70 dark:bg-slate-900/50 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Flagged Prompt</th>
                <th className="py-3.5 px-4">Creator / Flagged By</th>
                <th className="py-3.5 px-4">Report Reason</th>
                <th className="py-3.5 px-4 text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-xs text-gray-700 dark:text-gray-300">
              {reports.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-10 text-center font-medium text-gray-400 dark:text-gray-500">
                    🎉 Inbox clear! No active prompt violations reported.
                  </td>
                </tr>
              ) : (
                reports.map((item) => (
                  <tr key={item.id} className="hover:bg-rose-500/[0.01] dark:hover:bg-rose-500/[0.02] transition-colors">
                    

                    <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white max-w-[220px]">
                      <div className="flex flex-col gap-0.5">
                        <span className="truncate block text-sm font-bold">{item.title}</span>
                        <span className="text-[10px] text-gray-400 font-normal">Flagged: {item.date}</span>
                      </div>
                    </td>

    
                    <td className="py-4 px-4 font-medium text-gray-600 dark:text-gray-300">
                      <div className="flex flex-col gap-0.5">
                        <span>By: <span className="text-gray-900 dark:text-white font-semibold">{item.creator}</span></span>
                        <span className="text-[11px] text-gray-400">Reporter: {item.reporter}</span>
                      </div>
                    </td>

       
                    <td className="py-4 px-4 max-w-[200px]">
                      <div className="inline-flex items-start gap-1.5 p-2 rounded-xl bg-rose-500/5 text-rose-600 dark:text-rose-400 font-medium leading-relaxed">
                        <CircleInfo className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span>{item.reason}</span>
                      </div>
                    </td>

      
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        
     
                        <button 
                          onClick={() => handleDismissReport(item.id)}
                          type="button"
                          className="px-3 py-1.5 text-[11px] font-bold rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition"
                        >
                          Dismiss
                        </button>

                        <button 
                          onClick={() => handleWarnCreator(item.creator)}
                          type="button"
                          title="Warn Creator via Email"
                          className="p-1.5 rounded-lg border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/20 text-amber-600 transition flex items-center gap-1 font-semibold"
                        >
                          <Envelope className="w-3.5 h-3.5" />
                          <span className="text-[11px] px-0.5">Warn</span>
                        </button>

                        <button 
                          onClick={() => handleRemovePrompt(item.id, item.title)}
                          type="button"
                          title="Delete Violation Prompt"
                          className="p-1.5 rounded-lg border border-rose-600 bg-rose-600 hover:bg-rose-700 text-white transition flex items-center gap-1 font-semibold"
                        >
                          <TrashBin className="w-3.5 h-3.5" />
                          <span className="text-[11px] px-0.5">Remove</span>
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}