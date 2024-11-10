// src/app/projects/nest-biwako-reservation/page.tsx

import { Work } from "@/data/works";
import { works } from "@/data/works";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NestBiwakoReservation = () => {
  const work = works.find((w) => w.path === "/projects/nest-biwako-reservation") as Work;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <AnimatedContent work={work} />
        <div className="text-center mt-8 mb-12">
          <Button asChild variant="outline">
            <Link href="/home">ホームに戻る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NestBiwakoReservation;