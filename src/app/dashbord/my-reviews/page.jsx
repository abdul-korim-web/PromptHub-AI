"use client";

import React from "react";
import { Avatar, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const myReviews = [
  {
    id: 1,
    promptTitle: "Ultimate Midjourney V6 Logo Generator with Hyper-Realistic Textures",
    aiTool: "Midjourney",
    rating: 5,
    comment: "This prompt is an absolute lifesaver! The logo details and lighting grids match exactly what I needed for my client projects. Highly recommended!",
    date: "June 18, 2026",
  },
  {
    id: 2,
    promptTitle: "SEO Optimized Blog Post Writer with Conversion Hooks & Meta Data",
    aiTool: "ChatGPT",
    rating: 4,
    comment: "Really solid structure for copywriting. I just had to tweak the tone slightly to fit my niche, but the outline generation is top-tier.",
    date: "May 24, 2026",
  },
  {
    id: 3,
    promptTitle: "Next.js 15 Turbopack Setup Script & Multi-Environment Configuration",
    aiTool: "Claude AI",
    rating: 3,
    comment: "Good script, but I faced a slight configuration issue with my local Tailwind setup. Got it working eventually. Thanks!",
    date: "April 12, 2026",
  },
];

export default function MyReviews() {

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon
        key={index}
        icon="gravity-ui:star-fill"
        className={`w-4 h-4 ${
          index < rating ? "text-amber-500" : "text-gray-200 dark:text-gray-700"
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">

      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Icon icon="gravity-ui:star" className="text-amber-500" />
          My Reviews
        </h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Track and manage all the reviews and ratings you have submitted.
        </p>
      </div>


      <div className="flex flex-col gap-4">
        {myReviews.map((review) => (
          <div
            key={review.id}
            className="
              bg-white dark:bg-[#0f172a] 
              border border-gray-100 dark:border-white/10 
              rounded-2xl p-4 md:p-5 
              shadow-sm hover:shadow-md transition-all duration-200
              flex flex-col justify-between gap-4
            "
          >

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Chip size="sm" variant="flat" color="secondary" className="font-semibold text-[10px]">
                  {review.aiTool}
                </Chip>
                <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 line-clamp-1">
                  {review.promptTitle}
                </h3>
              </div>
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                {review.date}
              </span>
            </div>


            <div className="flex items-center gap-1 bg-gray-50 dark:bg-white/5 w-fit px-2 py-1 rounded-lg">
              {renderStars(review.rating)}
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 ml-1">
                {review.rating}.0
              </span>
            </div>

            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed bg-gray-50/50 dark:bg-slate-900/30 p-3 rounded-xl border border-gray-50 dark:border-white/5">
              "{review.comment}"
            </p>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-50 dark:border-white/5">
              <Button
                size="sm"
                variant="light"
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-xl h-8"
              >
                View Prompt
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 h-8 w-8 min-w-8 rounded-xl"
                title="Delete Review"
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