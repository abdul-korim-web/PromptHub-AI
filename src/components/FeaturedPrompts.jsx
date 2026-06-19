import React from "react";

import PromptCard from "./PromptCard";

export default function FeaturedPrompts() {

  const user = null; 


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

 

  return (
    <section className="bg-white dark:bg-[#030712] py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors">
            Featured Marketplace Prompts
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 dark:text-gray-400">
            Vetted, high-efficiency system templates curated to accelerate automation and output accuracy.
          </p>
        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoPrompts.map((prompt) => {
            return (
              <PromptCard prompt={prompt} key={prompt._id}/>
            );
          })}
        </div>

      </div>
    </section>
  );
}