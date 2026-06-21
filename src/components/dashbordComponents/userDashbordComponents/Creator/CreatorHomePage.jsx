"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const analyticsData = [
  { month: "Jan", copies: 45, prompts: 2 },
  { month: "Feb", copies: 80, prompts: 4 },
  { month: "Mar", copies: 65, prompts: 5 },
  { month: "Apr", copies: 120, prompts: 7 },
  { month: "May", copies: 190, prompts: 10 },
  { month: "Jun", copies: 231, prompts: 12 },
];

export default function CreatorHomePage() {
  const summaryCards = [
    {
      label: "Total Prompts",
      count: "12",
      icon: "gravity-ui:layers",
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      label: "Total Copies",
      count: "231",
      icon: "gravity-ui:copy",
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      label: "Total Bookmarks",
      count: "48",
      icon: "gravity-ui:bookmark",
      color: "text-purple-500 bg-purple-500/10",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Icon icon="gravity-ui:chart-line" className="text-blue-600" />
          Creator Dashboard Analytics
        </h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Real-time insights into your prompt performance and community growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {summaryCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-5 shadow-sm flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl ${card.color}`}>
              <Icon icon={card.icon} className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">{card.label}</p>
              <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mt-0.5">
                {card.count}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-4 md:p-5 shadow-sm space-y-3">
          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100">
              Total Copies Trend
            </h3>
            <p className="text-[11px] text-gray-400">
              Monthly breakdown of how many times your prompts were copied.
            </p>
          </div>

          <div className="w-full h-[260px] md:h-[300px] text-xs font-medium">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={analyticsData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorCopies" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="rgba(255,255,255,0.05)"
                />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="copies"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCopies)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-4 md:p-5 shadow-sm space-y-3">
          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100">
              Prompt Growth
            </h3>
            <p className="text-[11px] text-gray-400">
              Cumulative total of newly added prompts marketplace wide.
            </p>
          </div>

          <div className="w-full h-[260px] md:h-[300px] text-xs font-medium">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={analyticsData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="rgba(255,255,255,0.05)"
                />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                />
                <Bar
                  dataKey="prompts"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
