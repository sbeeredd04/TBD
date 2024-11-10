"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDna, FaDoorOpen, FaYoutube, FaMoon, FaSun } from "react-icons/fa";
import { FloatingNav } from "./components/floating-navbar";
import Link from "next/link";

export default function HomePage() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Introduction", link: "/introduction" },
    { name: "Projects", link: "/projects" },
    { name: "Experiments", link: "/experiments" },
    { name: "Results", link: "/results" },
    { name: "Team", link: "/team" },
  ];

  const links = [
    {
      label: "Welcome",
      href: "#",
      icon: <FaDoorOpen className="text-primaryBlue h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Video",
      href: "#",
      icon: <FaYoutube className="text-primaryBlue h-5 w-5 flex-shrink-0" />,
    },
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
      <div className="flex-1 px-6 py-8">
        {/* Floating Navbar */}
        <FloatingNav navItems={navItems} />

        {/* Content Area */}
        <div className="mt-20 space-y-8 text-gray-800 dark:text-gray-200 border-light dark:border-dark p-6 rounded-lg shadow-light dark:shadow-dark">
          <h2 className="text-3xl font-bold text-primaryBlue">Introduction</h2>
          <p className="text-lg leading-relaxed">
            When DNA was first discovered, its only function was providing organisms the genetic material to develop,
            survive, and reproduce. However, further research revealed that the structure and microscopic size of DNA
            makes it possible to use it as a building block to engineer nano-structures. Since the emergence of DNA
            nanotechnology, scientists have continually pushed the boundaries of what can be achieved at the nanoscale.
            DNA, with its well-known programmability and unique physical properties, has paved the way for the creation
            of sophisticated nanomachines. Among these innovations are DNA robots, capable of performing highly specific
            tasks.
          </p>
          <p className="text-lg leading-relaxed">
            Our team, the _____________________, has focused on advancing the development of these robots. While earlier
            models of DNA robots were designed with limited functionality in terms of movement and task execution, our
            design aims to improve upon this by incorporating enhanced movement and cargo sorting capabilities. Our goal
            is to refine and test this DNA robot design to boost the efficiency and speed of the cargo sorting process.
            Additionally, we will be utilizing image-capturing techniques, previously unused in this context, to gather
            data and further improve our model. Ultimately, we believe that continuously developing these DNA robots
            can unlock new applications.
          </p>
        </div>
      </div>
    </div>
  );
}
