"use client";

import React from "react";
import { Work } from "@/data/works";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { CarouselApi } from "@/components/ui/carousel";

interface WorksSliderProps {
  works: Work[];
  setApi: (api: CarouselApi) => void;
}

const WorksSlider: React.FC<WorksSliderProps> = ({ works, setApi }) => {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {works.map((work: Work, index: number) => (
            <CarouselItem key={index} className="w-full md:w-1/2 lg:w-1/3">
              <Link href={work.path}>
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                      <div className="p-12 space-y-6 bg-gray-100 h-full flex flex-col justify-center">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-emerald-800">
                            {work.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {work.description}
                          </p>
                        </div>
                      </div>
                      <div className="relative h-[450px] overflow-hidden rounded-l-2xl">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <CarouselPrevious className="-ml-12 bg-white/80 hover:bg-white" />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <CarouselNext className="-mr-12 bg-white/80 hover:bg-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default WorksSlider;

