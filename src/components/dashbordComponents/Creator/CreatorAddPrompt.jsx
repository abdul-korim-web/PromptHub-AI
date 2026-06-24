"use client";

import React, { useState } from "react";
import { 
  ArrowUpToLine, 
  Eye, 
  EyeClosed, 
  CircleInfo 
} from "@gravity-ui/icons";
import { addPromptsAction } from "@/actions/creatorAction/addPromptsAction";
import { authClient } from "../../../../lib/auth-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "@/uploadImage/uploadImage";

export function CreatorAddPrompt() {
  const [loading, setLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState("");


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size should be less than 2MB");
        return;
      }
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    const content = formData.get("content");
    const category = formData.get("category");
    const aiTool = formData.get("aiTool");
    const difficultyLevel = formData.get("difficultyLevel");
    const visibility = formData.get("form-visibility");
    const imageData = formData.get("image");
    console.log(imageData)

    try {
      const {data: tokenData} = await authClient.token()
      const token = tokenData?.token
      
      let image = "";
      if (imageData && imageData.size > 0) {
        image = await uploadImage(imageData)
      }
      
      const result = await addPromptsAction(token, {
        title,
        description,
        content,
        category,
        aiTool,
        difficultyLevel,
        visibility,
        image
      })

      console.log(result)
      if (result?.success) {
        toast.success(result?.message || "Prompt submitted successfully! 🎉");
        e.target.reset();
        setImagePreview(""); 
      } else {
        toast.error(result?.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Create New Prompt</h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Share your engineered prompt with the marketplace.</p>
        

        <div className="mt-4 flex gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-600 dark:text-amber-400 text-xs md:text-sm leading-relaxed">
          <CircleInfo className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Submission Policy:</span> All newly submitted prompts are automatically marked as <span className="font-bold underline">pending</span> and remain hidden from the marketplace until reviewed by an admin. Admins can either approve the prompt, or reject it if it does not meet platform guidelines.
          </div>
        </div>
      </div>


      <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-5 md:p-6 shadow-sm space-y-6">
        

        <div>
          <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">
            Prompt Title <span className="text-rose-500">*</span>
          </label>
          <input 
            type="text"
            name="title"
            placeholder="e.g., Ultimate Midjourney V6 Logo Generator" 
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>


        <div>
          <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">
            Prompt Description <span className="text-rose-500">*</span>
          </label>
          <textarea 
            name="description"
            placeholder="Describe what this prompt does, how to use it, and what parameters work best..." 
            required
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
          />
        </div>

        <div>
          <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">
            Prompt Content <span className="text-rose-500">*</span>
          </label>
          <textarea 
            name="content"
            placeholder="Paste your exact prompt here. Use [brackets] for user variables..." 
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-slate-900 text-sm font-mono text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          

          <div>
            <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Category</label>
            <select name="category" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition cursor-pointer">
              <option value="">Select Category</option>
              <option value="marketing">Marketing</option>
              <option value="coding">Coding & Dev</option>
              <option value="design">Design & Art</option>
              <option value="writing">Copywriting</option>
            </select>
          </div>

      
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">AI Tool</label>
            <select name="aiTool" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition cursor-pointer">
              <option value="">Select AI Tool</option>
              <option value="chatgpt">ChatGPT</option>
              <option value="midjourney">Midjourney</option>
              <option value="claude">Claude AI</option>
              <option value="stable-diffusion">Stable Diffusion</option>
            </select>
          </div>


          <div>
            <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Difficulty Level</label>
            <select name="difficultyLevel" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none transition cursor-pointer">
              <option value="beginner">🔰 Beginner</option>
              <option value="intermediate">⚙️ Intermediate</option>
              <option value="pro">🔥 Pro</option>
            </select>
          </div>

        </div>


        <div>
          <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Tags</label>
          <div className="w-full p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 flex flex-wrap gap-2 items-center min-h-[46px]">
            <span className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-lg">AI</span>
            <span className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-lg">Logo</span>
            <input 
              type="text"
              placeholder="Type and add tags..."
              className="flex-1 bg-transparent border-none outline-none text-sm px-1 min-w-[120px] text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          

          <div>
            <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Thumbnail Image</label>
            <div className="relative border-2 border-dashed border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-colors rounded-xl h-[140px] flex flex-col items-center justify-center bg-gray-50/50 dark:bg-slate-900/30 overflow-hidden cursor-pointer">
              
             
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4">
                  <ArrowUpToLine className="w-7 h-7 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Upload prompt thumbnail</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Supports PNG, JPG (Max 2MB)</p>
                </div>
              )}
              
              <input 
                name="image"
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="text-xs md:text-sm font-semibold mb-1.5 block text-gray-700 dark:text-gray-200">Visibility</label>
            <div className="grid grid-cols-2 gap-3 h-[140px]">
              

              <label className="border border-blue-600 bg-blue-500/5 dark:bg-blue-500/10 rounded-xl p-4 flex flex-col justify-between cursor-pointer relative transition">
                <input type="radio" name="form-visibility" value="public" defaultChecked className="absolute top-4 right-4 accent-blue-600" />
                <Eye className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">Public</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Visible to everyone</p>
                </div>
              </label>

              <label className="border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 relative transition">
                <input type="radio" name="form-visibility" value="private" className="absolute top-4 right-4 accent-blue-600" />
                <EyeClosed className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">Private</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Only visible to you</p>
                </div>
              </label>

            </div>
          </div>

        </div>


        <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-end gap-3">
          <button 
            type="button" 
            disabled={loading}
            className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold shadow-sm shadow-blue-500/10 transition disabled:opacity-70 flex items-center gap-2"
          >
            {loading ? "Submitting..." : "Submit Prompt"}
          </button>
        </div>

      </form>
    </div>
  );
}