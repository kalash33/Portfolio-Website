"use client";
import SkillsCard from "./skillcard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="skills"
      className="py-12 bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Skills
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={cardVariants} className="flex">
            <SkillsCard
              title="Languages"
              skills={["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL", "Bash"]}
            />
          </motion.div>
          <motion.div variants={cardVariants} className="flex">
            <SkillsCard
              title="Frameworks"
              skills={["NodeJS", "React", "Angular", "NextJS", "Flask", "Spring Boot"]}
            />
          </motion.div>
          <motion.div variants={cardVariants} className="flex">
            <SkillsCard
              title="Tools"
              skills={["MongoDB", "Azure", "MySQL", "Docker", "Postman", "Jenkins", "Kubernetes"]}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
