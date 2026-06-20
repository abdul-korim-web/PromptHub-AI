"use client";

import React, { useState } from "react";
import {
  Plus,
  Folder,
  Bookmark,
  Star,
  Person,
  ArrowRightFromSquare,
} from "@gravity-ui/icons";
import { Avatar, Chip } from "@heroui/react";
import Link from "next/link";

export function UserSilder() {
  const [activeTab, setActiveTab] = useState("My Prompts");

  // 🛠️ ডাইনামিক নেভিগেশনের জন্য path প্রোপার্টি অ্যাড করা হয়েছে
  const navItems = [
    { icon: Plus, label: "Add Prompt", count: null, path: "add-prompt" },
    { icon: Folder, label: "My Prompts", count: 12, path: "my-prompts" },
    { icon: Bookmark, label: "Saved Prompts", count: 48, path: "saved-prompts" },
    { icon: Star, label: "My Reviews", count: 7, path: "my-reviews" },
    { icon: Person, label: "Profile", count: null, path: "profile" },
  ];

  return (
    <>
  
      <div
        className="
          lg:hidden 
          fixed 
          bottom-0 
          left-0 
          right-0 
          z-50 
          bg-white 
          dark:bg-[#0f172a] 
          border-t 
          border-gray-200 
          dark:border-white/10 
          shadow-[0_-4px_12px_rgba(0,0,0,0.05)]
          px-2
          py-2
          flex 
          items-center 
          justify-around
        "
      >
        {navItems.map((item) => {
          const active = activeTab === item.label;
          return (
            <Link
              key={item.label}
              href={`/dashbord/${item.path}`}
          
              className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                flex-1 
                py-1 
                relative
                transition-all
                ${active ? "text-blue-600 dark:text-blue-500 scale-105" : "text-gray-500 dark:text-gray-400"}
              `}
            >
              <div className="relative p-1">
                <item.icon className="w-5 h-5" />
                {item.count && (
                  <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[8px] font-bold font-mono px-1 rounded-full min-w-[14px] text-center">
                    {item.count}
                  </span>
                )}
              </div>

              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                {item.label.split(" ")[0]}
              </span>
            </Link>
          );
        })}
      </div>


      <div className="lg:hidden h-20" />


      <aside
        className="
          hidden
          lg:flex
          flex-col
          w-[280px]
          min-h-screen
          sticky
          top-0
          p-5
          bg-white
          dark:bg-[#0f172a]
          border
          border-gray-200
          dark:border-white/10
          rounded-2xl
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            pb-5
            border-b
            border-gray-200
            dark:border-white/10
          "
        >
          <Avatar
            className="w-11 h-11 rounded-xl"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
          />
          <div>
            <h3 className="text-sm font-bold dark:text-white">Alex Rivera</h3>
            <Chip
              size="sm"
              className="text-[10px] bg-amber-500/10 text-amber-500 font-bold"
            >
              Premium
            </Chip>
          </div>
        </div>

        <div className="mt-5">
          <nav className="flex flex-col gap-2 w-full">
            {navItems.map((item) => {
              const active = activeTab === item.label;
              return (
                <Link
                  key={item.label}
                   href={`/dashbord/${item.path}`}
                
                  className={`
                    flex
                    items-center
                    justify-between
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    transition
                    ${
                      active
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/10"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>

                  {item.count && (
                    <span
                      className={`
                        text-[10px]
                        px-2
                        py-1
                        rounded-full
                        font-mono
                        ${active ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}
                      `}
                    >
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

      
        <button
          className="
            mt-auto
            flex
            items-center
            gap-3
            px-4
            py-3
            text-rose-500
            font-bold
            hover:bg-rose-500/5
            rounded-xl
            transition
          "
        >
          <ArrowRightFromSquare className="w-4 h-4" />
          Sign Out
        </button>
      </aside>
    </>
  );
}