import React from "react";
import { Card, Avatar } from "@heroui/react";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function CustomerReviews() {

  const reviews = [
    {
      id: "r1",
      name: "Tanjim Nahid",
      role: "Senior Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop",
      rating: 5,
      reviewText: "The Next.js API route prompts saved me literally hours of infrastructure design. The strict Zod validation schema wrappers work flawlessly out of the box. Essential for modern full-stack devs.",
      verifiedPurchase: true,
    },
    {
      id: "r2",
      name: "Sarah Jenkins",
      role: "SaaS Product Marketer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
      rating: 5,
      reviewText: "I was skeptical about AI copy until I copied the AIDA landing page structural framework prompt from PromptHub. Our sign-up conversion rate bumped up by 14% on the new feature release page!",
      verifiedPurchase: true,
    },
    {
      id: "r3",
      name: "Rahat Chowdhury",
      role: "Digital Artist & Creative Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
      rating: 5,
      reviewText: "Finding hyper-realistic lighting properties for Midjourney v6 is usually a game of trial and error. The studio portrait blueprints here are absolute masterclasses in prompt architecture.",
      verifiedPurchase: true,
    },
  ];


  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
    ));
  };

  return (
    <section className="bg-gray-50 dark:bg-[#080d1a] py-20 transition-colors duration-300 border-t border-b border-gray-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
    
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            Real Community Impact
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors">
            Vetted by Developers, Creators, and Innovators
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
            See how engineering teams and modern builders use our prompt matrices to eliminate repetitive work cycles entirely.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm flex flex-col justify-between relative overflow-hidden"
            >

              <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100 dark:text-gray-800/40 pointer-events-none -z-0 transform rotate-180" />

              <div className="relative z-10 flex-grow">

                <div className="flex items-center gap-0.5 mb-4">
                  {renderStars(review.rating)}
                </div>

                <Card.Content className="p-0 mb-6">
                  <Card.Description className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed font-normal">
                    "{review.reviewText}"
                  </Card.Description>
                </Card.Content>
              </div>

              <Card.Footer className="p-0 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between w-full relative z-10 bg-transparent">
                <Card.Header className="p-0 flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/5 shrink-0">
                    <Avatar.Image src={review.avatar} alt={review.name} />
                    <Avatar.Fallback className="bg-indigo-600 text-white font-bold text-xs">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </Avatar.Fallback>
                  </Avatar>

                  <div className="flex flex-col items-start overflow-hidden">
                    <Card.Title className="text-sm font-bold text-gray-900 dark:text-white tracking-tight truncate">
                      {review.name}
                    </Card.Title>
                    <span className="text-xs text-gray-400 dark:text-gray-500 truncate">
                      {review.role}
                    </span>
                  </div>
                </Card.Header>

                {review.verifiedPurchase && (
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400/80 uppercase tracking-wider shrink-0 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                )}
              </Card.Footer>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}