"use client";

import React, { useState } from "react";
import { 
  Check, 
  Xmark, 
  TrashBin, 
  Star, 
  StarFill, 
  Magnifier, 
  CircleInfo, 
  ArrowUpRight 
} from "@gravity-ui/icons";

export default function AdminPromptsTable() {

  const [prompts, setPrompts] = useState([
    { id: 1, title: "Midjourney V6 Photorealistic Portrait", creator: "Rahat Khan", tool: "Midjourney", status: "pending", isFeatured: false },
    { id: 2, title: "Next.js 15 Clean Architecture Boilerplate", creator: "Asif Zubayer", tool: "ChatGPT", status: "approved", isFeatured: true },
    { id: 3, title: "Crypto Trading Assistant Bot Script", creator: "Sabbir Ahmed", tool: "Claude AI", status: "pending", isFeatured: false },
    { id: 4, title: "Automated Bulk Email Campaign Writer", creator: "Tanvir Hossain", tool: "ChatGPT", status: "rejected", isFeatured: false, feedback: "Violates anti-spam guidelines." }
  ]);

  // Modal State Management
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedPromptId, setSelectedPromptId] = useState(null);
  const [rejectionFeedback, setRejectionFeedback] = useState("");

  // ১. Approve Action
  const handleApprove = (id) => {
    setPrompts(prompts.map(p => p.id === id ? { ...p, status: "approved" } : p));
  };

  // ২. Trigger Reject Modal
  const openRejectModal = (id) => {
    setSelectedPromptId(id);
    setRejectionFeedback("");
    setIsRejectModalOpen(true);
  };


  const handleRejectSubmit = (e) => {
    e.preventDefault();
    if (!rejectionFeedback.trim()) return;

    setPrompts(prompts.map(p => 
      p.id === selectedPromptId 
        ? { ...p, status: "rejected", feedback: rejectionFeedback } 
        : p
    ));
    setIsRejectModalOpen(false);
  };


  const handleToggleFeature = (id) => {
    setPrompts(prompts.map(p => p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
  };


  const handleDelete = (id) => {
    if(confirm("Are you sure you want to delete this prompt permanently?")) {
      setPrompts(prompts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-4">
      
  
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">All Prompt Submissions</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Review, approve, feature, or reject marketplace prompts.</p>
        </div>
        
        <div className="relative w-full sm:w-72">
          <Magnifier className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search prompts or creators..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-900 dark:text-white outline-none focus:border-rose-500 transition"
          />
        </div>
      </div>


      <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/70 dark:bg-slate-900/50 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Prompt Title</th>
                <th className="py-3 px-4">Creator</th>
                <th className="py-3 px-4">AI Tool</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-xs text-gray-700 dark:text-gray-300">
              {prompts.map((prompt) => (
                <tr key={prompt.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  
      
                  <td className="py-3.5 px-4 font-medium text-gray-900 dark:text-white max-w-[240px]">
                    <div className="flex flex-col gap-0.5">
                      <span className="truncate block font-semibold">{prompt.title}</span>
                      {prompt.status === "rejected" && prompt.feedback && (
                        <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-0.5">
                          <CircleInfo className="w-3 h-3" /> Feedback: "{prompt.feedback}"
                        </span>
                      )}
                    </div>
                  </td>


                  <td className="py-3.5 px-4 text-gray-500 dark:text-gray-400 font-medium">
                    {prompt.creator}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-gray-100 dark:bg-white/10 font-bold text-gray-600 dark:text-gray-400">
                      {prompt.tool}
                    </span>
                  </td>

     
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide
                      ${prompt.status === "approved" ? "bg-emerald-500/10 text-emerald-600" : ""}
                      ${prompt.status === "pending" ? "bg-amber-500/10 text-amber-600" : ""}
                      ${prompt.status === "rejected" ? "bg-rose-500/10 text-rose-600" : ""}
                    `}>
                      {prompt.status}
                    </span>
                  </td>

       
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      
       
                      <button 
                        onClick={() => handleToggleFeature(prompt.id)}
                        title={prompt.isFeatured ? "Unfeature Prompt" : "Feature Prompt"}
                        className={`p-1.5 rounded-lg border transition ${prompt.isFeatured ? "bg-amber-500/10 border-amber-500/30 text-amber-500" : "border-gray-200 dark:border-white/10 text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"}`}
                      >
                        {prompt.isFeatured ? <StarFill className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5" />}
                      </button>

                      {prompt.status !== "approved" && (
                        <button 
                          onClick={() => handleApprove(prompt.id)}
                          title="Approve & Publish"
                          className="p-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-600 transition"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      )}

         
                      {prompt.status !== "rejected" && (
                        <button 
                          onClick={() => openRejectModal(prompt.id)}
                          title="Reject Submission"
                          className="p-1.5 rounded-lg border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/20 text-rose-500 transition"
                        >
                          <Xmark className="w-3.5 h-3.5" />
                        </button>
                      )}

    
                      <button 
                        onClick={() => handleDelete(prompt.id)}
                        title="Delete Prompt"
                        className="p-1.5 rounded-lg border border-transparent text-gray-400 hover:text-rose-500 hover:bg-rose-500/5 transition"
                      >
                        <TrashBin className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {isRejectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl max-w-md w-full p-5 shadow-xl space-y-4">
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Provide Rejection Feedback</h3>
              <p className="text-xs text-gray-400 mt-0.5">Explain to the creator why this prompt does not meet the marketplace guidelines.</p>
            </div>
            
            <form onSubmit={handleRejectSubmit} className="space-y-4">
              <textarea 
                required
                rows={4}
                value={rejectionFeedback}
                onChange={(e) => setRejectionFeedback(e.target.value)}
                placeholder="e.g., Prompt output contains broken syntax, or fails to deliver intended structure. Please improve prompt rules..."
                className="w-full text-xs p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-gray-900 dark:text-white focus:border-rose-500 outline-none transition resize-none"
              />

              <div className="flex justify-end gap-2.5">
                <button 
                  type="button"
                  onClick={() => setIsRejectModalOpen(false)}
                  className="px-4 py-2 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-sm shadow-rose-500/10 transition"
                >
                  Reject Prompt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}