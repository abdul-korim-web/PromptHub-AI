import React from "react";
import { Card, Avatar, Chip, Button } from "@heroui/react";
import { Trophy, ShieldCheck, Star, ArrowUpRight, Zap } from "lucide-react";

export default function TopCreators() {

  const creators = [
    {
      rank: 1,
      name: "Alex Rivera",
      handle: "@alex_prompt_eng",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop",
      specialty: "Midjourney Pro",
      totalPrompts: 48,
      totalCopies: "14.2k",
      isVerified: true,
    },
    {
      rank: 2,
      name: "Sajib Ahmed",
      handle: "@sajib_ai",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
      specialty: "Full-Stack Dev Ops",
      totalPrompts: 35,
      totalCopies: "9.8k",
      isVerified: true,
    },
    {
      rank: 3,
      name: "Elena Rostova",
      handle: "@elena_writes",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop",
      specialty: "SaaS Copywriting",
      totalPrompts: 29,
      totalCopies: "7.4k",
      isVerified: false,
    },
    {
      rank: 4,
      name: "Marcus Vance",
      handle: "@mv_automation",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
      specialty: "Python Scripts",
      totalPrompts: 22,
      totalCopies: "5.1k",
      isVerified: true,
    },
  ];

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return (
          <Chip
            size="sm"
            className="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold"
          >
            <Trophy className="w-3 h-3 inline mr-1" /> 1st
          </Chip>
        );
      case 2:
        return (
          <Chip
            size="sm"
            className="bg-slate-400/10 text-slate-400 border border-slate-400/20 font-bold"
          >
            2nd
          </Chip>
        );
      case 3:
        return (
          <Chip
            size="sm"
            className="bg-amber-700/10 text-amber-700 border border-amber-700/20 font-bold"
          >
            3rd
          </Chip>
        );
      default:
        return (
          <span className="text-xs font-semibold text-gray-400 pl-2">
            #{rank}
          </span>
        );
    }
  };

  return (
    <section className="bg-white dark:bg-[#030712] py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors">
              Top Platform Architects
            </h2>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-xl">
              Meet the elite prompt engineers building production-vetted
              automations and viral visual matrices.
            </p>
          </div>

          <Button
            size="md"
            variant="flat"
            color="primary"
            className="font-semibold self-start md:self-end"
            endContent={<ArrowUpRight className="w-4 h-4" />}
          >
            View Leaderboard
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => (
            <Card
              key={creator.rank}
              className="p-5 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm hover:border-blue-500/30 dark:hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10">
                {getRankBadge(creator.rank)}
              </div>

              <Card.Header className="p-0 flex items-center gap-3.5">
                <Avatar className="w-14 h-14 rounded-xl border border-gray-100 dark:border-white/5 shrink-0">
                  <Avatar.Image src={creator.avatar} alt={creator.name} />
                  <Avatar.Fallback className="bg-blue-600 text-white font-bold">
                    {creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar.Fallback>
                </Avatar>

                <div className="flex flex-col items-start overflow-hidden">
                  <div className="flex items-center gap-1 max-w-full">
                    <Card.Title className="text-base font-bold text-gray-900 dark:text-white tracking-tight truncate">
                      {creator.name}
                    </Card.Title>
                    {creator.isVerified && (
                      <ShieldCheck
                        className="w-4 h-4 text-blue-500 shrink-0"
                        title="Vetted Engineer"
                      />
                    )}
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 truncate w-full">
                    {creator.handle}
                  </span>
                </div>
              </Card.Header>

              <Card.Content className="p-0 mt-4 flex-grow">
                <Card.Description className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-md inline-flex items-center gap-1">
                  <Zap className="w-3 h-3" /> {creator.specialty}
                </Card.Description>
              </Card.Content>

              <Card.Footer className="p-0 mt-5 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-gray-500 dark:text-gray-400">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                    {creator.totalPrompts}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-1">
                    Prompts
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-sm font-bold text-gray-900 dark:text-white leading-none flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />{" "}
                    {creator.totalCopies}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-1">
                    Total Uses
                  </span>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
