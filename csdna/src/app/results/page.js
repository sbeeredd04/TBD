"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapPin, FaDna, FaMoon, FaSun, FaArrowUp } from "react-icons/fa";
import { FloatingNav } from "../components/floating-navbar";
import Link from "next/link";

export default function ResultsPage() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Introduction", link: "/introduction" },
    { name: "Projects", link: "/projects" },
    { name: "Experiments", link: "/experiments" },
    { name: "Results", link: "/results" },
    { name: "Team", link: "/team" },
  ];

  const links = [
    { label: "Introduction to Results", href: "#introduction-to-results", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Observations from Experiments", href: "#observations-from-experiments", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Integration of Robot", href: "#integration-of-robot", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Quantitative Analysis", href: "#quantitative-analysis", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Control Experiments", href: "#control-experiments", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Advanced Analysis", href: "#advanced-analysis", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Future Directions", href: "#future-directions", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Conclusion", href: "#conclusion", icon: <FaMapPin className="h-3 w-3" /> },
  ];

  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = systemPrefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
        <Link href="/" className="font-normal flex items-center justify-center space-x-2 text-sm text-black dark:text-white py-2">
          <FaDna className="text-primaryBlue h-7 w-7" />
          {open && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-lg">
              Results Overview
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

        {/* Theme Toggle Button */}
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
        <div className="mt-10 space-y-20 text-gray-800 dark:text-gray-200 border-light dark:border-dark p-6 rounded-lg shadow-light dark:shadow-dark">
          
          {/* Introduction to Results */}
          <div className="mx-10 mb-10">
            <h2 id="introduction-to-results" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Introduction to Results</h2>
            <p className="text-lg leading-relaxed mb-6">
              Brief overview of the experimental goals and the significance of the observed results. Summary of iterative improvements made on the csDNA origami design to enhance imaging quality and functionality.
            </p>
          </div>

          {/* Observations from Experiments */}
          <div className="mx-10 mb-10">
            <h2 id="observations-from-experiments" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Observations from Experiments</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Addition of Poly-T's & Loop Cover</h3>
            <p className="text-lg leading-relaxed mb-6">
              Description of the initial problem with csDNA aggregation and the effects of introducing poly-T sequences and a loop cover to reduce aggregation.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Grid Adjustment from 5nm to 20nm</h3>
            <p className="text-lg leading-relaxed mb-6">
              Rationale for increasing the distance between fiduciary markers. Comparative results of DNA-PAINT imaging before and after adjustments.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Grid Adjustment Results]</div>
          </div>

          {/* Integration of Robot into csDNA */}
          <div className="mx-10 mb-10">
            <h2 id="integration-of-robot" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Integration of Robot into csDNA</h2>
            <p className="text-lg leading-relaxed mb-6">
              Details on the integration process of the robot with the csDNA and observations on robot binding efficiency and the distribution of robots on the origami.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Robot Integration]</div>
          </div>

          {/* Quantitative Analysis of Robot Movement */}
          <div className="mx-10 mb-10">
            <h2 id="quantitative-analysis" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Quantitative Analysis of Robot Movement</h2>
            <p className="text-lg leading-relaxed mb-6">
              Detailed description of the method used for tracking and analyzing robot movement, with statistical analysis of robot displacement, focusing on movement patterns and efficiency towards goals.
            </p>
          </div>

          {/* Control Experiments and Their Insights */}
          <div className="mx-10 mb-10">
            <h2 id="control-experiments" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Control Experiments and Their Insights</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Track and Goal Population Control</h3>
            <p className="text-lg leading-relaxed mb-6">
              Evaluation of the attachment efficacy of track and goal strands over time.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">No Trigger Control</h3>
            <p className="text-lg leading-relaxed mb-6">
              Assessment of premature robot movement and the effectiveness of inhibition strategies, with insights derived from control experiments regarding stability and functionality.
            </p>
          </div>

          {/* Advanced Analysis Techniques */}
          <div className="mx-10 mb-10">
            <h2 id="advanced-analysis" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Advanced Analysis Techniques</h2>
            <p className="text-lg leading-relaxed mb-6">
              Application of image analysis and K-means clustering to evaluate robot movement, along with statistical tools to understand the distribution and behavior of robots on the origami.
            </p>
          </div>

          {/* Future Directions and Experimentation */}
          <div className="mx-10 mb-10">
            <h2 id="future-directions" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Future Directions and Experimentation</h2>
            <p className="text-lg leading-relaxed mb-6">
              Discussion on the implications of the current findings for future csDNA robot applications, and proposed modifications to the experimental design or robot algorithm to enhance performance and application scope.
            </p>
          </div>

          {/* Conclusion of Results */}
          <div className="mx-10 mb-10">
            <h2 id="conclusion" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Conclusion of Results</h2>
            <p className="text-lg leading-relaxed mb-6">
              Summary of key findings from the experimental results, reflecting on the success of the experimental design and its potential impact on future studies in nanotechnology and robotics.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primaryBlue text-white rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            <FaArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
