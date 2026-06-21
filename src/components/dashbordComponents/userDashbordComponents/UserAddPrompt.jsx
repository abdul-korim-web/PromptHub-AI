import React from "react";
import { 
  ArrowUpToLine, 
  Eye, 
  EyeClosed, 
  CircleInfo 
} from "@gravity-ui/icons";

export default function UserAddPrompt() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
      
   
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Prompt</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Share your engineered prompt with the community.</p>
        
    
        <div className="mt-4 flex gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 dark:text-amber-400 text-xs leading-relaxed">
          <CircleInfo className="w-5 h-5 flex-shrink-0" />
          <div>
            <span className="font-bold">Submission Policy:</span> All newly submitted prompts are automatically marked as <span className="font-bold underline">pending</span> and remain hidden from the marketplace until reviewed by an admin. Admins can either approve the prompt, or reject it if it does not meet platform guidelines.
          </div>
        </div>
      </div>


      <form className="space-y-6">
        
       
        <div>
          <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">
            Prompt Title <span className="text-rose-500">*</span>
          </label>
          <input 
            type="text"
            name="title"
            required
            placeholder="e.g., Ultimate Midjourney V6 Logo Generator" 
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">
            Prompt Description <span className="text-rose-500">*</span>
          </label>
          <textarea 
            name="description"
            required
            placeholder="Describe what this prompt does, how to use it, and what parameters work best..." 
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white min-h-[100px] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-y"
          />
        </div>

        <div>
          <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">
            Prompt Content <span className="text-rose-500">*</span>
          </label>
          <textarea 
            name="content"
            required
            placeholder="Paste your exact prompt here. Use [brackets] for user variables..." 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-slate-900 text-sm font-mono text-gray-900 dark:text-white min-h-[140px] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-y"
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          

          <div>
            <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Category</label>
            <select 
              name="category" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
            >
              <option value="">Select Category</option>
              <option value="marketing">Marketing</option>
              <option value="coding">Coding & Dev</option>
              <option value="design">Design & Art</option>
              <option value="writing">Copywriting</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">AI Tool</label>
            <select 
              name="aiTool" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
            >
              <option value="">Select AI Tool</option>
              <option value="chatgpt">ChatGPT</option>
              <option value="midjourney">Midjourney</option>
              <option value="claude">Claude AI</option>
              <option value="stable-diffusion">Stable Diffusion</option>
            </select>
          </div>

  
          <div>
            <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Difficulty Level</label>
            <select 
              name="difficulty" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
            >
              <option value="beginner">🔰 Beginner</option>
              <option value="intermediate">⚙️ Intermediate</option>
              <option value="pro">🔥 Pro</option>
            </select>
          </div>

        </div>

        <div>
          <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Tags</label>
          <div className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 flex flex-wrap gap-2 items-center min-h-[46px]">
            <span className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg">AI</span>
            <span className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg">Logo</span>
            <input 
              type="text"
              name="tags_placeholder"
              placeholder="Add more tags..."
              className="flex-1 bg-transparent border-none outline-none text-sm px-1 min-w-[120px] text-gray-900 dark:text-white"
            />
          </div>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
          <div>
            <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Thumbnail Image</label>
            <div className="relative border-2 border-dashed border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-colors rounded-xl h-[160px] flex flex-col items-center justify-center bg-gray-50/50 dark:bg-slate-900/30 overflow-hidden cursor-pointer">
              <div className="text-center p-4">
                <ArrowUpToLine className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Click to upload thumbnail</p>
                <p className="text-xs text-gray-400 mt-1">Supports PNG, JPG (Max 2MB)</p>
              </div>
              <input 
                type="file" 
                name="thumbnail"
                accept="image/*" 
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

  
          <div>
            <label className="text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Visibility</label>
            <div className="grid grid-cols-2 gap-4 h-[160px]">
              

              <label className="border border-blue-600 bg-blue-500/5 dark:bg-blue-500/10 rounded-xl p-4 flex flex-col justify-between cursor-pointer relative transition">
                <input type="radio" name="visibility" value="public" defaultChecked className="absolute top-4 right-4 accent-blue-600" />
                <Eye className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Public</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Visible to marketplace</p>
                </div>
              </label>

              <label className="border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 relative transition">
                <input type="radio" name="visibility" value="private" className="absolute top-4 right-4 accent-blue-600" />
                <EyeClosed className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Private</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Only visible to you</p>
                </div>
              </label>

            </div>
          </div>

        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex justify-end gap-3">
          <button 
            type="button" 
            className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition"
          >
            Submit Prompt
          </button>
        </div>

      </form>
    </div>
  );
}