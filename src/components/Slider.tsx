// src/components/Slider.tsx

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface SliderProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Slider: React.FC<SliderProps> = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="min-w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="cursor-pointer"
                onClick={() => onProjectClick(project)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* ナビゲーションボタン */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Slider;
