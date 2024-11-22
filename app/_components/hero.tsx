"use client";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["a Developer", "a Hacker", "an Engineer", "an Innovator"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/photo.JPG"
          alt="Profile Photo"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="opacity-50"
        />
      </div>
      <motion.div
        className="relative z-10 text-left max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Kalash Poddar
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mt-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          I&apos;m {text}
          <span className="text-green-500">|</span>
        </motion.p>
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          {/* <a href="#" className="text-4xl hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-4xl hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          <a href="https://github.com/kalash33" target="_blank" className="text-4xl hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/kalash33" target="_blank" className="text-4xl hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
