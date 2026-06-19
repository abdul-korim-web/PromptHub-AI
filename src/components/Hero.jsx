
import { Button, Input, Kbd } from "@heroui/react";
import { Search, Sparkles, Terminal, ArrowRight } from "lucide-react";

export default function Hero() {



  const trendingTags = [
    "Midjourney Logo v6",
    "SEO Blog Writer",
    "SaaS Landing Page copy",
    "Python Automation Script",
    "Claude Code Architect"
  ];



  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#030712] py-20 lg:py-32 transition-colors duration-300">
      

      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl dark:from-blue-600/10 dark:to-indigo-600/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        

        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur-md mb-6 animate__animated animate__fadeInDown">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>The Ultimate Community-Driven Prompt Marketplace</span>
        </div>


        <h1 className="mx-auto max-w-4xl font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 dark:text-white leading-tight">
          Supercharge Your Workflow with <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
            High-Performance AI Prompts
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Discover, copy, and optimize vetted prompts for ChatGPT, Midjourney, Claude, and Gemini. Automate daily routines, maximize creative output, and eliminate blank-page syndrome instantly.
        </p>

        <div className="mx-auto mt-10 max-w-2xl flex  justify-center ">
          <form  className="flex flex-col sm:flex-row items-center gap-2 ">
            <Input
              
              size="lg"
              radius="full"
            
              placeholder="Search prompts by title, AI tool, or tags..."
            />
            

            <Button
              type="submit"
              size="lg"
              radius="full"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 shadow-lg shadow-blue-500/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              Explore Now
            </Button>
          </form>
        </div>

       
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            <Terminal className="w-3.5 h-3.5" /> Trending:
          </span>
          
          {trendingTags.map((tag, index) => (
            <button
              key={index}
             
              className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 border border-gray-200/50 dark:border-white/5 transition-all duration-300"
            >
              #{tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}