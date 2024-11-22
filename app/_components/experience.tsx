// components/ExperienceSection.jsx
"use client"
import JobExperience from "./jobExpComp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="experience" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Professional Experience
        </h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative border-l border-green-500 pl-8"
        >
          {/* <motion.div variants={itemVariants}>
            <JobExperience
              title="Senior Graphic Design Specialist"
              date="2019 - Present"
              company="Experion"
              location="New York, NY"
              responsibilities={[
                "Lead in the design, development, and implementation of graphic, layout, and production communication materials.",
                "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
                "Supervise the assessment of all graphic materials to ensure quality and accuracy of the design.",
                "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.",
              ]}
            />
          </motion.div> */}

          <motion.div variants={itemVariants}>
            <JobExperience
              title="Full-stack Web Developer Intern"
              date="May 2023 - July 2023"
              company="Department of Health & Family Welfare — Govt. of West Bengal"
              location="On-site"
              responsibilities={[
                "REST API Development: Built scalable APIs for managing data of 1,000+ users, enabling seamless integration.",
                "Performance Optimization: Enhanced data retrieval speed by 30% through query optimization & Redis caching.",
                "Streamlined Workflows: Designed & deployed features reducing manual data entry & reporting effort by 25%.",
                "Tech-stack: Angular, Java Spring Boot, MongoDB, SQL Server, REST APIs, Redis.",
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
