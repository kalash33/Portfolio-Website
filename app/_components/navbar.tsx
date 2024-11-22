// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-black bg-opacity-80 shadow-lg");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20 ${navbarBg} transition duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-green-400"
            >
              {"<hackerx33 />"}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#skills"
                className="text-white hover:text-green-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-white hover:text-green-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-white hover:text-green-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-green-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
