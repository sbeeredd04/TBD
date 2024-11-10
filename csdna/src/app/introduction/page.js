"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDna, FaMoon, FaSun, FaMapPin } from "react-icons/fa";
import { FloatingNav } from "../components/floating-navbar";
import Link from "next/link";

export default function IntroductionPage() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Introduction", link: "/introduction" },
    { name: "Projects", link: "/projects" },
    { name: "Experiments", link: "/experiments" },
    { name: "Results", link: "/results" },
    { name: "Team", link: "/team" },
  ];

  const links = [
    { label: "Background", href: "#background", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Problem", href: "#problem", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Our Solution", href: "#solution", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Goals of the Project", href: "#goals", icon: <FaMapPin className="h-3 w-3" /> },
  ];

  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  // Initial theme setting based on user's system preference or saved preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme ? savedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Sidebar */}
      <motion.div
        className={`h-screen px-6 py-6 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 border-light dark:border-dark ${
          open ? "w-[340px]" : "w-[90px]"
        }`}
        animate={{ width: open ? "340px" : "90px" }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Logo */}
        <Link href="/" className="font-normal flex items-center justify-center space-x-2 text-sm text-black dark:text-white py-2">
          <FaDna className="text-primaryBlue h-7 w-7" />
          {open && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-lg">
              Cargo Sorting DNA
            </motion.span>
          )}
        </Link>

        {/* Sidebar Links */}
        <div className="mt-10 flex flex-col gap-4 items-center">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-200 group"
            >
              {link.icon}
              {open && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-black dark:text-white group-hover:translate-x-1 transition duration-150"
                >
                  {link.label}
                </motion.span>
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Button at Bottom of Sidebar */}
        <div className="mt-auto mb-6 flex justify-center">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-4 py-3 px-5 text-primaryBlue text-xl rounded-full border-light dark:border-dark hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-200 shadow-light dark:shadow-dark"
          >
            {theme === "light" ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
            {open && <span className="text-base">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>}
          </button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 py-8 max-h-screen overflow-y-auto">
        {/* Floating Navbar */}
        <FloatingNav navItems={navItems} />

        {/* Content Area */}
        <div className="mt-10 space-y-8 text-gray-800 dark:text-gray-200 border-light dark:border-dark p-6 rounded-lg shadow-light dark:shadow-dark">
          <h2 id="background" className="text-3xl font-bold text-primaryBlue">Background</h2>
          <p className="text-lg leading-relaxed">
            The discovery of DNA revolutionized our understanding of how organisms grow and inherit traits. Beyond its biological roles, DNA has shown tremendous potential as a building material for nanostructures. The field of DNA nanotechnology leverages DNA's ability to form predictable and stable structures, enabling scientists to engineer machines on a molecular scale. These nanomachines, particularly DNA robots, are tailored to perform highly specific tasks, opening new avenues in precision engineering and molecular biology.
          </p>

          <h2 id="problem" className="text-3xl font-bold text-primaryBlue">Problem</h2>
          <p className="text-lg leading-relaxed">
            Although DNA robots are a breakthrough in nanotechnology, their application has been limited by basic design constraints. These initial models lack advanced capabilities, restricting their movements and precision. Such limitations prevent them from performing intricate tasks required in complex environments, which is essential for applications like precise medical therapies or detailed micro-manufacturing processes. This shortfall affects their practical deployment in sectors where high accuracy and adaptability are crucial.
          </p>

          <h2 id="solution" className="text-3xl font-bold text-primaryBlue">Our Solution</h2>
          <p className="text-lg leading-relaxed">
            Addressing these limitations, our team, the _____________________, has developed a new generation of DNA robots that showcase significantly improved mobility and functionality. These advanced robots are designed to handle intricate tasks with greater efficiency and accuracy. We have also integrated state-of-the-art imaging technologies that allow us to observe these robots in action. This innovation not only helps in fine-tuning their operations but also paves the way for scaling their applications from theoretical models to practical uses.
          </p>

          <h2 id="goals" className="text-3xl font-bold text-primaryBlue">Goals of the Project</h2>
          <p className="text-lg leading-relaxed">
            Our project is committed to pushing the boundaries of DNA robot capabilities and demonstrating their practicality in real-world settings. Our specific objectives include:
            <ul className="list-disc pl-6 mt-2">
              <li>Enhancing the DNA robots' design to improve their ability to sort and transport nano-sized cargo with high precision and speed.</li>
              <li>Employing advanced imaging systems to monitor the robots, providing insights that help optimize their performance in real time.</li>
              <li>Investigating the potential of these robots in medical fields, particularly for delivering medication directly to targeted cells, thereby increasing treatment efficacy and reducing side effects.</li>
              <li>Demonstrating the effectiveness of these robots in industrial applications, ensuring they can operate efficiently outside of laboratory conditions.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
