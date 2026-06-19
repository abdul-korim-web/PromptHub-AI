import React from "react";
import { Card } from "@heroui/react";
import { ShieldCheck, Zap, Users, Code2, Award, RefreshCw } from "lucide-react";

export default function WhyChooseUs() {
  // Meaningful value propositions for an AI Prompt Marketplace
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Admin-Vetted Quality",
      description: "Every submission undergoes rigorous human and automated testing. No broken tokens, no filler content—just elite prompts.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Instant Production Workflows",
      description: "One-click copy setups optimized natively for ChatGPT, Claude, Midjourney, and Gemini to kill blank-page syndrome.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Creator-First Ecosystem",
      description: "Share your engineering breakthroughs, track internal copy metrics, and build your authority within the global LLM community.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "Multi-Model Flexibility",
      description: "Categorized directly by difficulty metrics (Beginner to Pro) and model specializations for seamless pipeline routing.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Advanced System Contexts",
      description: "Vetted blueprints mapping robust API parameters, programmatic Zod validation structures, and complex marketing loops.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-rose-500" />,
      title: "Always Synchronized",
      description: "Prompts are constantly updated by authors to match the latest version modifications of cutting-edge AI models.",
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-[#080d1a] py-20 transition-colors duration-300 border-t border-b border-gray-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            The PromptHub Advantage
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors">
            Engineered to Eliminate AI Friction
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Stop guessing random phrases. Access structured, production-ready system patterns built to optimize throughput, accuracy, and creative freedom.
          </p>
        </div>

    
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm hover:scale-[1.02] transition-all duration-300"
            >
      
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 mb-5 shadow-inner">
                {benefit.icon}
              </div>


              <Card.Header className="p-0 flex flex-col items-start gap-1">
                <Card.Title className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {benefit.title}
                </Card.Title>
              </Card.Header>


              <Card.Content className="p-0 mt-2 flex-grow">
                <Card.Description className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}