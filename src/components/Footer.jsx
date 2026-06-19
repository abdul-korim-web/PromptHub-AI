import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Terminal, Globe, Heart } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    explore: [
      { name: "All Prompts", href: "/prompts" },
      { name: "Midjourney Studio", href: "/prompts?tool=midjourney" },
      { name: "ChatGPT Models", href: "/prompts?tool=chatgpt" },
      { name: "Claude Architectures", href: "/prompts?tool=claude" },
    ],
    community: [
      { name: "Leaderboard", href: "#" },
      { name: "Top Creators", href: "#" },
      { name: "Submission Guidelines", href: "#" },
      { name: "Discussions", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "License Agreements", href: "#" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 xl:gap-12 pb-12 border-b border-gray-100 dark:border-white/5">
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                PromptHub
                <span className="text-blue-600 dark:text-cyan-400">.AI</span>
              </span>
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              The elite marketplace for engineering optimized system prompts,
              multi-model pipelines, and automated creative matrices.
            </p>

            <div className="flex items-center gap-1.5 mt-2">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-gray-400 hover:text-blue-500 dark:hover:text-cyan-400"
              >
                <FaTwitter className="w-4 h-4" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-4 h-4" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-500"
              >
                <FaLinkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Explore Index
              </h3>
              <ul className="space-y-2.5 w-full">
                {footerNavigation.explore.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Community Hub
              </h3>
              <ul className="space-y-2.5 w-full">
                {footerNavigation.community.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Platform Rules
              </h3>
              <ul className="space-y-2.5 w-full">
                {footerNavigation.legal.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-gray-500 font-medium">
          <p>© {currentYear} PromptHub AI Marketplace. All rights reserved.</p>

          <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 px-3 py-1 rounded-full">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline mx-0.5 animate-pulse" />
            <span>for Web Automation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
