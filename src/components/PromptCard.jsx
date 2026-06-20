import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { Layers, Copy, Eye } from "lucide-react";
import Image from "next/image";
const PromptCard = ({ prompt }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "warning";
      case "Pro":
        return "danger";
      default:
        return "default";
    }
  };
  return (
    <Card className="border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-sm hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
      <div className="relative overflow-hidden h-48 w-full z-0">
        <Image
          fill
          alt={prompt.promptTitle}
          className="object-cover w-full h-48 rounded-none scale-105"
          src={prompt.thumbnailImage}
        />

        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <Chip
            size="sm"
            variant="shadow"
            color={getDifficultyColor(prompt.difficultyLevel)}
          >
            {prompt.difficultyLevel}
          </Chip>
          <Chip
            size="sm"
            className="bg-black/60 backdrop-blur-md text-white border-none"
          >
            {prompt.aiTool}
          </Chip>
        </div>
      </div>

      <Card.Header className="px-5 pt-5 pb-1 flex flex-col items-start gap-1">
        <p className="text-xs font-semibold uppercase text-blue-600 dark:text-cyan-400 flex items-center gap-1">
          <Layers className="w-3 h-3" /> {prompt.category}
        </p>
        <Card.Title className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
          {prompt.promptTitle}
        </Card.Title>
      </Card.Header>

      <Card.Content className="px-5 py-2 flex-grow">
        <Card.Description className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
          {prompt.promptDescription}
        </Card.Description>

        <div className="mt-4 flex flex-wrap gap-1">
          {prompt.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded"
            >
              #{t}
            </span>
          ))}
        </div>
      </Card.Content>

      <Card.Footer className="p-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/20">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <Copy className="w-3.5 h-3.5" />
          <span>{prompt.copyCount} copies</span>
        </div>

        <Link
          href={`/prompts/${prompt?._id}`}
          size="sm"
          color="primary"
          variant="flat"
          className="font-semibold rounded-lg"
        >
          View Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default PromptCard;
