import { Work } from "@/data/works";
import { works } from "@/data/works";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui/button";

export default function InterviewAISystem() {
  const work = works.find((w) => w.path === "/projects/interview-ai-system") as Work;

  return (
    <div className="container mx-auto max-w-[820px] mt-5 px-4 md:px-0">
      <AnimatedContent work={work} />
      <div className="text-center mt-8 mb-12">
        <Button asChild variant="outline">
          <Link href="/home">ホームに戻る</Link>
        </Button>
      </div>
    </div>
  );
}