import React from "react";
import PromptCard from "./PromptCard";


const fetchPrompts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/creator/prompt/topprompts`,
      {
        cache: "no-store",
      }
    );
    

    const data = await res.json();
    return data.data || [];

  } catch (error) {
    console.log(error);
    return [];
  }
};


export default async function FeaturedPrompts() {

  const prompts = await fetchPrompts();


  return (
    <section className="bg-white dark:bg-[#030712] py-16 transition-colors duration-300">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Marketplace Prompts
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 dark:text-gray-400">
            Vetted, high-efficiency system templates curated to accelerate automation.
          </p>
        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {
            prompts.map((prompt)=>(
              <PromptCard
                key={prompt._id}
                prompt={prompt}
              />
            ))
          }

        </div>


      </div>

    </section>
  );
}