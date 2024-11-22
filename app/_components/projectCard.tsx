// components/ProjectCard.jsx
interface   ProjectCardProps {
    projectName: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    imageUrl: string;
    }

import React from "react";

export default function ProjectCard({
  projectName,
  description,
  techStack,
  liveLink,
  githubLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 overflow-hidden">
      {/* Content Section (2/3) */}
      <div className="flex flex-col w-full md:w-2/3 p-6">
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-gray-100">
            {projectName}
          </h3>
          <p className="mt-4 text-gray-400 text-justify">{description}</p>

          <p className="mt-4 text-gray-500">
            <strong>Tech Stack:</strong> {techStack.join(", ")}
          </p>
        </div>

        {/* Button Container */}
        <div className="mt-6 flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-500 font-bold text-gray-900 rounded hover:bg-teal-600 transition-colors duration-200"
          >
            View on GitHub
          </a>
          {/* <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-sky-500 font-bold text-gray-900 rounded hover:bg-sky-600 transition-colors duration-200"
          >
            See Live
          </a> */}
        </div>
      </div>

      {/* Image Section (1/3) */}
      <div className="w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={projectName}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}