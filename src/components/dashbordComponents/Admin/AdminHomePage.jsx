"use client";

import React from "react";
import { 
  Persons, 
  Layers, 
  Star, 
  Copy, 
   CircleDollar,           
  ChartAreaStacked 
} from "@gravity-ui/icons";
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
  Legend
} from "recharts";


const adminMetricsData = [
  { month: "Jan", users: 400, prompts: 120, copies: 1100, reviews: 90, revenue: 450 },
  { month: "Feb", users: 600, prompts: 190, copies: 1800, reviews: 140, revenue: 890 },
  { month: "Mar", users: 900, prompts: 240, copies: 2400, reviews: 210, revenue: 1420 },
  { month: "Apr", users: 1400, prompts: 310, copies: 3900, reviews: 350, revenue: 2300 },
  { month: "May", users: 2100, prompts: 420, copies: 5200, reviews: 480, revenue: 3850 },
  { month: "Jun", users: 2800, prompts: 560, copies: 6800, reviews: 620, revenue: 5400 },
];

export default function AdminHomePage() {

  const summaryCards = [
    { label: "Total Revenue", count: "$5,400", icon: CircleDollar, color: "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20" },
    { label: "Total Users", count: "2,800", icon: Persons, color: "text-blue-500 bg-blue-500/10" },
    { label: "Total Prompts", count: "560", icon: Layers, color: "text-purple-500 bg-purple-500/10" },
    { label: "Total Reviews", count: "620", icon: Star, color: "text-amber-500 bg-amber-500/10" },
    { label: "Total Copies", count: "6,800", icon: Copy, color: "text-rose-500 bg-rose-500/10" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-6">
      

      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <ChartAreaStacked className="text-rose-600 w-6 h-6" />
          System Analytics Overview
        </h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Monitor platform revenue streams, user onboarding, and core content engagement dynamics.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {summaryCards.map((card, i) => (
          <div 
            key={i} 
            className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-4 md:p-5 shadow-sm flex items-center gap-3 hover:border-rose-500/10 transition"
          >
            <div className={`p-3 rounded-xl ${card.color}`}>
              <card.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium whitespace-nowrap">{card.label}</p>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-0.5">{card.count}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        

        <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-4 md:p-5 shadow-sm space-y-3">
          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100">Revenue Stream & User Growth</h3>
            <p className="text-[11px] text-gray-400">Cumulative financial progress and user registration flow.</p>
          </div>
          
          <div className="w-full h-[260px] md:h-[300px] text-xs font-medium">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={adminMetricsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(15, 23, 42, 0.95)", 
                    borderRadius: "12px", 
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff"
                  }} 
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Area name="Revenue ($)" type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area name="Total Users" type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} fill="none" strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-4 md:p-5 shadow-sm space-y-3">
          <div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100">Engagement & Product Activity</h3>
            <p className="text-[11px] text-gray-400">Comparing prompt utilization counts against total peer reviews.</p>
          </div>

          <div className="w-full h-[260px] md:h-[300px] text-xs font-medium">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adminMetricsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(15, 23, 42, 0.95)", 
                    borderRadius: "12px", 
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff"
                  }} 
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar name="Total Copies" dataKey="copies" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={14} />
                <Bar name="Total Prompts" dataKey="prompts" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}