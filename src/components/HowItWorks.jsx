import React from "react";
import { Card } from "@heroui/react";
import { Search, Terminal, Sliders, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5 text-blue-500" />,
      title: "Discover Blueprint Frameworks",
      description: "Filter our audited index by target LLM models, processing categorizations, or specialized developer difficulty metrics."
    },
    {
      step: "02",
      icon: <Terminal className="w-5 h-5 text-purple-500" />,
      title: "Analyze Internal Contexts",
      description: "Review detailed prompt content, copy usage weights, system variables, and creator-provided expected outputs."
    },
    {
      step: "03",
      icon: <Sliders className="w-5 h-5 text-amber-500" />,
      title: "Inject Live Variables",
      description: "Instantly copy the structured system loop syntax directly into ChatGPT, Claude, Midjourney, or internal API routes."
    },
    {
      step: "04",
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      title: "Scale Your Output Results",
      description: "Eliminate hallucinations, capture pristine predictable structural syntax configurations, and maximize token efficiency."
    }
  ];

  return (
    <section className="bg-white dark:bg-[#030712] py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            Workflow Architecture
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors">
            From Zero to Optimized System Output
          </h2>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
            Stop guessing random phrases. Deploy predictable engineering models in four streamlined integration layers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((item, index) => (
            <Card 
              key={index}
              className="p-6 border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#0f172a] shadow-none hover:bg-white dark:hover:bg-[#131d35] hover:border-gray-200 dark:hover:border-white/10 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >

              <div className="absolute -top-3 -right-2 text-7xl font-black text-gray-200/40 dark:text-gray-800/20 select-none pointer-events-none font-mono">
                {item.step}
              </div>


              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 mb-6 shadow-sm relative z-10">
                {item.icon}
              </div>

              <Card.Header className="p-0 flex flex-col items-start gap-1 relative z-10">
                <Card.Title className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {item.title}
                </Card.Title>
              </Card.Header>

              <Card.Content className="p-0 mt-2 relative z-10 flex-grow">
                <Card.Description className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}