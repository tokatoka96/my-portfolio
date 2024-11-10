// src/components/ProjectCard.tsx

import React from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClose: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]">
        <button
          className="text-gray-500 hover:text-gray-700 float-right"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.summary}</p>
        <h3 className="text-xl font-semibold mb-2">担当内容</h3>
        <ul className="list-disc list-inside mb-4">
          {project.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">使用技術</h3>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
