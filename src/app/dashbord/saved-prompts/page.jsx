"use client";

import React from "react";
import { Avatar, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const savedPrompts = [
  {
    id: 1,
    title: "Ultimate Midjourney V6 Logo Generator with Hyper-Realistic Textures",
    category: "Design & Art",
    aiTool: "Midjourney",
    author: "Alex Rivera",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
  },
  {
    id: 2,
    title: "SEO Optimized Blog Post Writer with Conversion Hooks & Meta Data",
    category: "Copywriting",
    aiTool: "ChatGPT",
    author: "Kate Moore",
    authorImage: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg",
  },
  {
    id: 3,
    title: "Next.js 15 Turbopack Setup Script & Multi-Environment Configuration",
    category: "Coding & Dev",
    aiTool: "Claude AI",
    author: "John Smith",
    authorImage: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
  },
];

export default function SavedPrompts() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">

      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Icon icon="gravity-ui:bookmark" className="text-blue-600" />
          Saved Prompts
        </h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage and access your bookmarked prompts easily.
        </p>
      </div>

  
      <div className="flex flex-col gap-4">
        {savedPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="
              bg-white dark:bg-[#0f172a] 
              border border-gray-100 dark:border-white/10 
              rounded-2xl p-4 md:p-5 
              shadow-sm hover:shadow-md transition-all duration-200
              flex flex-col md:flex-row 
              md:items-center justify-between 
              gap-4 md:gap-6
            "
          >
   
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">

                <Chip 
                  size="sm" 
                  variant="flat" 
                  color="secondary"
                  className="font-semibold text-[11px]"
                >
                  {prompt.aiTool}
                </Chip>
      
                <Chip 
                  size="sm" 
                  variant="soft" 
                  color="primary"
                  className="font-medium text-[11px]"
                >
                  {prompt.category}
                </Chip>
              </div>


              <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 leading-snug line-clamp-2 md:line-clamp-1">
                {prompt.title}
              </h3>


              <div className="flex items-center gap-2 pt-1">
                <Avatar size="sm" className="w-5 h-5 md:w-6 md:h-6">
                  <Avatar.Image src={prompt.authorImage} />
                  <Avatar.Fallback>{prompt.author[0]}</Avatar.Fallback>
                </Avatar>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  by <span className="font-medium text-gray-700 dark:text-gray-300">{prompt.author}</span>
                </span>
              </div>
            </div>


            <div 
              className="
                flex items-center gap-2 
                pt-3 md:pt-0 
                border-t border-gray-100 dark:border-white/5 md:border-none 
                justify-end md:justify-start
              "
            >
  
              <Button 
                size="sm" 
                variant="flat"
                className="
                  flex-1 md:flex-initial 
                  bg-blue-50 dark:bg-blue-500/10 
                  text-blue-600 dark:text-blue-400 
                  font-bold px-4 h-9 rounded-xl
                  hover:bg-blue-100 dark:hover:bg-blue-500/20
                "
              >
                <Icon className="size-4 mr-1.5" icon="gravity-ui:eye" />
                View Details
              </Button>
              
        
              <Button 
                isIconOnly 
                size="sm" 
                variant="light"
                className="
                  text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 
                  h-9 w-9 min-w-9 rounded-xl
                "
                title="Remove Bookmark"
              >
                <Icon className="size-4" icon="gravity-ui:trash-bin" />
              </Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}