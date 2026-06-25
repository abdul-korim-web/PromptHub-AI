import React from "react";
import { Button } from "@heroui/react";

import { Magnifier, Sliders, ChevronDown } from "@gravity-ui/icons";
import PromptCard from "@/components/PromptCard";
import { fetchAllPrompts } from "@/actions/fetchAllPrompts";

export default async function AllPromptsPage() {
const fetchPrompts = await fetchAllPrompts()
const prompts =await fetchPrompts?.data
console.log('prompts', prompts)

  const demoPrompts = [
    {
      _id: "p1",
      promptTitle: "Advanced Midjourney v6 Photorealistic Portrait Studio",
      promptDescription: "Generates high-end studio lighting portraits with deep cinematic focus and hyper-detailed skin textures.",
      category: "Graphics & Design",
      aiTool: "Midjourney",
      tags: ["Photography", "Studio", "Cinematic"],
      difficultyLevel: "Pro",
      thumbnailImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop",
      copyCount: 142
    },
    {
      _id: "p2",
      promptTitle: "SaaS Landing Page High-Converting Copywriter",
      promptDescription: "A precise multi-step framework to write complete AIDA structured product landing pages that drive leads.",
      category: "Marketing & Copywriting",
      aiTool: "ChatGPT",
      tags: ["SaaS", "Copywriting", "Conversion"],
      difficultyLevel: "Intermediate",
      thumbnailImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop",
      copyCount: 95
    },
    {
      _id: "p3",
      promptTitle: "Automated Python Web Scraper Blueprint",
      promptDescription: "Generates clean, production-ready Python web scraping scripts using BeautifulSoup with proxy rotation logic.",
      category: "Software Engineering",
      aiTool: "Claude AI",
      tags: ["Python", "Scraping", "Automation"],
      difficultyLevel: "Intermediate",
      thumbnailImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop",
      copyCount: 204
    },
    {
      _id: "p4",
      promptTitle: "SEO Optimization Master Article Outline Generator",
      promptDescription: "Create strict semantic HTML article outlines that perfectly structure content to rank on the first page of Google.",
      category: "SEO & Blogging",
      aiTool: "Gemini",
      tags: ["SEO", "Content Marketing", "Blogging"],
      difficultyLevel: "Beginner",
      thumbnailImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop",
      copyCount: 48
    },
    {
      _id: "p5",
      promptTitle: "Full-Stack Next.js API Route Architecture",
      promptDescription: "Build modular, structured api routes with Zod verification validation models inside the modern app router.",
      category: "Web Development",
      aiTool: "Claude AI",
      tags: ["Next.js", "API", "Zod"],
      difficultyLevel: "Pro",
      thumbnailImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop",
      copyCount: 110
    },
    {
      _id: "p6",
      promptTitle: "AI Social Media Content Matrix Creator",
      promptDescription: "Generate a complete 30-day conceptual scheduling framework for Linkedin and X branding arrays instantly.",
      category: "Social Media",
      aiTool: "ChatGPT",
      tags: ["Linkedin", "Branding", "Strategy"],
      difficultyLevel: "Beginner",
      thumbnailImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop",
      copyCount: 77
    }
  ];
  

  const categories = [
    "All Categories",
    "Graphics & Design",
    "Marketing & Copywriting",
    "Software Engineering",
    "Data Science",
    "Productivity & Automation"
  ];

  const aiTools = ["All Models", "ChatGPT", "Claude AI", "Midjourney", "Stable Diffusion"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030712] transition-colors duration-300">
      

      <section className="bg-white dark:bg-[#080d1a] border-b border-gray-200 dark:border-white/5 py-12 md:py-16 flex flex-col">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center ">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Explore System Blueprints
          </h1>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-2xl">
            Discover verified, high-efficiency prompt matrices curated to streamline production pipelines and maximize your model tokens.
          </p>

          <div className="mt-8 max-w-3xl flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex items-center flex-grow">
              <Magnifier className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none z-10" />
              <input
                type="text"
                placeholder="Search by keywords, tags, category or AI tools..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl text-sm border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white placeholder-gray-400 outline-none shadow-inner transition-all"
              />
            </div>
            <Button
              size="lg"
              className="font-bold bg-blue-600 dark:bg-blue-500 text-white shadow-md rounded-2xl px-8"
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8 items-start">
          
          <aside className="hidden lg:block lg:col-span-1 space-y-6 sticky top-[10%] bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-500" /> Filters
              </h2>
              <button className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline">
                Clear all
              </button>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((cat, i) => (
                  <label key={i} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    <input type="radio" name="category" defaultChecked={i === 0} className="w-4 h-4 rounded border-gray-300 dark:border-white/10 text-blue-600 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">AI Engine Model</h3>
              <div className="space-y-2">
                {aiTools.map((tool, i) => (
                  <label key={i} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    <input type="checkbox" defaultChecked={i === 0} className="w-4 h-4 rounded border-gray-300 dark:border-white/10 text-blue-600 focus:ring-blue-500 bg-gray-50 dark:bg-gray-900" />
                    <span>{tool}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-3 space-y-6">
            
   
            <div className="flex items-center justify-between bg-white dark:bg-[#0f172a] p-4 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm gap-4 ">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Showing <span className="font-bold text-gray-900 dark:text-white">48</span> premium prompts
              </p>
              
              <div className="flex items-center gap-3">
     
                <div className="relative inline-flex items-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span>Sort by: Most Copied</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1.5 text-gray-400" />
                </div>
                
             
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {prompts.map((prompt) => (
                <PromptCard key={prompt?._id} prompt={prompt}/>
              ))}
            </div>

          </section>

        </div>
      </main>

    </div>
  );
}