import React from "react";
import { 
  Magnifier, 
  Copy, 
  Eye, 
  EyeClosed, 
  Pencil, 
  TrashBin,
  CircleCheck,
  Clock,
  CircleExclamation
} from "@gravity-ui/icons";
 
import { fetchCreatorPrompts } from "@/actions/creatorAction/fetchCreatorPrompts";
import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";
import { DeleteCreatorPromptModal } from "./Modal/DeleteCreatorPrompt";

export default async function CreatorPrompts() {
  const tokenData = await auth.api.getToken({
     headers: await headers()
  })
  const token = tokenData?.token;
 


  const response = await fetchCreatorPrompts(token);
  

  const prompts = response?.success ? response.data : [];

  const renderStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CircleCheck className="w-3.5 h-3.5" /> Approved
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <CircleExclamation className="w-3.5 h-3.5" /> Rejected
          </span>
        );
      default: 
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Clock className="w-3.5 h-3.5" /> Pending Review
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">My Prompts</h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">Manage, track performance, and check approval states.</p>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">Tootal Prompts: <span>{prompts?.length}</span> </p>

        </div>

        <div className="relative w-full md:w-72">
          <Magnifier className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search your prompts..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 outline-none transition"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4">
        {prompts.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-gray-400">
            No prompts found.
          </div>
        ) : (
          prompts.map((prompt) => (
            <div 
              key={prompt._id}
              className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:border-gray-200 dark:hover:border-white/20 transition"
            >
 
              <div className="space-y-2 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  {renderStatusBadge(prompt.status)}
                  
                  <span className="text-[11px] font-bold bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-md uppercase">
                    {prompt.aiTool || prompt.tool}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {prompt.createdAt ? new Date(prompt.createdAt).toLocaleDateString() : prompt.date}
                  </span>
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-snug">
                  {prompt.title}
                </h3>
                
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Category: <span className="text-gray-600 dark:text-gray-300 font-medium capitalize">{prompt.category}</span>
                </p>
              </div>


              <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-white/5">
                
                <div className="flex items-center gap-5">
     
                  <div className="text-left md:text-center">
                    <div className="flex items-center md:justify-center gap-1.5 text-gray-700 dark:text-gray-300">
                      <Copy className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-sm font-bold font-mono">{prompt.copyCount || 0}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">Copies</p>
                  </div>

                  <div className="text-left md:text-center">
                    <div className="flex items-center md:justify-center gap-1.5 text-gray-700 dark:text-gray-300">
                      {prompt.visibility === "public" ? (
                        <Eye className="w-4 h-4 text-blue-500" />
                      ) : (
                        <EyeClosed className="w-4 h-4 text-gray-400" />
                      )}
                      <span className="text-xs font-semibold capitalize">{prompt.visibility}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">Visibility</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    title="Edit Prompt"
                    className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  
                  <DeleteCreatorPromptModal token={token} promptId={prompt?._id}/>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
}