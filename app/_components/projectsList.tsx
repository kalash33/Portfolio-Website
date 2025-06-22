// components/ProjectList.jsx
"use client";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Slightly longer duration for a smoother effect
        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smooth easing
        when: "beforeChildren",
        staggerChildren: 0.25, // Adjusted stagger for a smoother flow
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const projectData = [
    {
      name: "EdgeFit Coach - On-Device AI Posture Assistant",
      description:
        "EdgeFit Coach is an AI-powered real-time posture monitoring and coaching platform built during the Qualcomm Edge AI Hackathon 2025. Fully on-device with MediaPipe, FastAPI, and custom LLMs, it delivers posture detection, personalized feedback, motivational coaching, and privacy-preserving fitness analytics. Optimized for Snapdragon X Elite Copilot+ PCs, it ensures low-latency inference, full data security, and cross-platform deployment without cloud dependency.",
      techStack: [
        "FastAPI",
        "Python",
        "MediaPipe",
        "LLM",
        "ONNX Runtime",
        "Streamlit",
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/kalash33/EdgeFit-Coach",
      imageUrl: "/proj3.png",
    },
    {
      name: "Social Media Monitoring Tool",
      description:
        "This Social Media Monitoring (SMM) tool was developed during the Goa Police Hackathon 2024 to assist law enforcement in monitoring platforms such as Instagram and X (formerly Twitter). It identifies harmful content, including fake news, hoaxes, and other illegal activities, and presents actionable insights on a user-friendly dashboard.",
      techStack: ["NextJS", "Python", "TypeScript", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/kalash33/Social-Media-Monitor",
      imageUrl: "/proj1.webp",
    },
    {
      name: "Chat Meet Application",
      description:
        "Chat Meet Application is a real-time chat application that enables users to communicate through text messages, make video calls, and share screens. The main goal of this project is to provide a seamless and interactive communication platform for users to connect with each other remotely. The application is designed to be easy to use and efficient, ensuring a smooth experience for all users.",
      techStack: ["Java", "Spring Boot", "Angular", "MongoDB", "Redis"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/kalash33/Chat_Meet_App",
      imageUrl: "/proj2.webp",
    },
    // Add more projects here
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mx-auto py-12 bg-zinc-950"
    >
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-12">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full max-w-5xl mx-auto"
            variants={cardVariants}
          >
            <ProjectCard
              projectName={project.name}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
