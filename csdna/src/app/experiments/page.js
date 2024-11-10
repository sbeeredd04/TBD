"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapPin, FaDna, FaMoon, FaSun, FaArrowUp } from "react-icons/fa";
import { FloatingNav } from "../components/floating-navbar";
import Link from "next/link";
import ControlExperiments from "./ControlExperiments";

export default function ExperimentsPage() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Introduction", link: "/introduction" },
    { name: "Projects", link: "/projects" },
    { name: "Experiments", link: "/experiments" },
    { name: "Results", link: "/results" },
    { name: "Team", link: "/team" },
  ];

  const links = [
    { label: "Introduction", href: "#introduction", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Synthesis and Preparation", href: "#synthesis-preparation", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Experimental Protocols", href: "#experimental-protocols", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Control Experiments", href: "#control-experiments", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Integration and Functionality", href: "#integration-functionality", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Advanced Protocols", href: "#advanced-protocols", icon: <FaMapPin className="h-3 w-3" /> },
  ];

  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
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
    localStorage.setItem("theme", newTheme); // Persist theme in localStorage
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
              Experiment Overview
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

          {/* Introduction */}
            <div className="mx-10 mb-10">
            <h2 id="introduction" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed mb-6">
                At the core of our project lies the synthesis and manipulation of DNA origami, a cutting-edge technology that allows for the precise folding of DNA to create nanoscale shapes and structures. This technology not only pushes the boundaries of molecular biology and engineering but also opens up vast possibilities for applications in drug delivery, biosensing, and nanorobotics. 
            </p>
            <p className="text-lg leading-relaxed mb-6">
                The meticulous process of constructing cargo sorting DNA (csDNA) origami is central to our experiments. Through this intricate practice, we aim to integrate programmable robots into these structures, enhancing their functionality and applicability in targeted medical therapies and advanced material science. Our lab is dedicated to refining these techniques, continually improving the stability and precision of the origami, and exploring the potential of these tiny yet complex assemblies.
            </p>
            <p className="text-lg leading-relaxed mb-6">
                This section outlines our foundational methods and protocols, setting the stage for a deeper dive into the specific experiments designed to test and expand the capabilities of our csDNA origami models. From the initial synthesis of DNA strands to the final applications of the assembled structures, each step is crucial for ensuring the success of our ambitious scientific endeavors.
            </p>
            </div>


          {/* Synthesis and Preparation */}
            <div className="mx-10 mb-10">
            <h2 id="synthesis-preparation" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Synthesis and Preparation</h2>

            <div className="section-content">
                <h3 className="text-2xl font-semibold mt-6 mb-2">Aliquoting Strands</h3>
                <p className="text-lg leading-relaxed mb-6">
                We source high-quality, unpurified DNA strands from Integrated DNA Technologies (IDT). These strands are stored at -20°C until required for experiments, ensuring their integrity and viability for synthesis.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">Annealing Protocol</h3>
                <p className="text-lg leading-relaxed mb-6">
                The annealing process involves careful temperature control to ensure proper folding of DNA origami. Here are the steps and ratios used:
                </p>
                <div className="table-container">
                <table className="table-auto border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-gray-600">Component</th>
                        <th className="border border-gray-300 px-4 py-2 text-gray-600">Ratio</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">M13 scaffold</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Staple strands</td>
                        <td className="border border-gray-300 px-4 py-2">10</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Fiduciary markers</td>
                        <td className="border border-gray-300 px-4 py-2">62.5</td>
                    </tr>
                    </tbody>
                </table>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-2">Purification Protocol</h3>
                <p className="text-lg leading-relaxed mb-6">
                Following annealing, our csDNA and robot were purified using PEG purification. 100 μl of the origami was spun with 100 μl of PEG 8000, pH 8 at 10,000 RPM for 30 minutes. 180 μl of supernatant was removed, and 90 μl of 1X TAE and 90 μl of PEG 8000 were added and spun again. This was repeated 3 times to purify our solution.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">Nanodrop Analysis</h3>
                <p className="text-lg leading-relaxed mb-6">
                The concentration of our csDNA and robot-inhibitor complex was measured using a spectrophotometer (Nanodrop 2000, ThermoFisher Scientific). 2 μl of our sample was loaded, and the concentration was recorded 3 times to achieve a reliable reading. After determining the concentration of the csDNA, it was diluted to 0.2 nM n Buffer B+.                
                </p>
            </div>
            </div>


          {/* Experimental Protocols */}
          <div className="mx-10 mb-10">
            <h2 id="experimental-protocols" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Experimental Protocols</h2>

            {/* Flow Protocol Section */}
            <div className="flow-protocol mb-10">
                <h3 className="text-2xl font-semibold mt-6">Flow Protocol</h3>
                <p className="text-lg leading-relaxed">
                In preparation for imaging, we establish a flow chamber on a glass slide to accommodate the DNA origami. The process involves the sequential addition of reagents to ensure proper adherence and visibility of the origami:
                </p>
                
                {/* Grid layout for tables */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 mb-6">
                    {/* Table 1: Biotin */}
                    <div className="table-container mx-auto mt-2 mb-4">
                        <table className="w-4/5 min-w-full divide-y divide-gray-300 text-center border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th colSpan="2" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider border">Biotin</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="border px-4 py-2">BSA-B</td>
                                    <td className="border px-4 py-2">2 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Buffer A+</td>
                                    <td className="border px-4 py-2">18 microliter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table 2: Streptavidin */}
                    <div className="table-container mx-auto mt-2 mb-4">
                        <table className="w-4/5 min-w-full divide-y divide-gray-300 text-center border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th colSpan="2" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider border">Streptavidin</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="border px-4 py-2">Streptavidin</td>
                                    <td className="border px-4 py-2">1 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Buffer A+</td>
                                    <td className="border px-4 py-2">19 microliter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table 3: R1 Mix */}
                    <div className="table-container mx-auto mt-2 mb-4">
                        <table className="w-4/5 min-w-full divide-y divide-gray-300 text-center border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th colSpan="2" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider border">R1 Mix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="border px-4 py-2">R1</td>
                                    <td className="border px-4 py-2">5 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Buffer B+</td>
                                    <td className="border px-4 py-2">20 microliter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table 4: Imager */}
                    <div className="table-container mx-auto mt-2 mb-4">
                        <table className="w-4/5 min-w-full divide-y divide-gray-300 text-center border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th colSpan="2" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider border">Imager</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="border px-4 py-2">R1 Mix</td>
                                    <td className="border px-4 py-2">1 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">PCA</td>
                                    <td className="border px-4 py-2">4 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">PCD</td>
                                    <td className="border px-4 py-2">2 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">TQ</td>
                                    <td className="border px-4 py-2">2 microliter</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Buffer B+</td>
                                    <td className="border px-4 py-2">191 microliter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Additional Protocols */}
                <div className="text-lg leading-relaxed mt-6">
                <p>In order to image our DNA origami, we had to create a flow chamber to allow the origami to sit on our glass slide. The steps are as follows:</p>

                {/* Table Container */}
                <div className="table-container w-3/5 mt-4 mb-6 mx-auto text-center">
                    <table className="w-3/5 min-w-full divide-y divide-gray-300 text-center border mx-auto">
                        <thead>
                            <tr>
                                <th colSpan="2" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Flow Table</th>
                            </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="border px-4 py-2">Biotin</td>
                            <td className="border px-4 py-2">20 μl</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="border px-4 py-2">2 min</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Buffer A+</td>
                            <td className="border px-4 py-2">40 μl</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Streptavidin</td>
                            <td className="border px-4 py-2">20 μl</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="border px-4 py-2">2 min</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Buffer A+</td>
                            <td className="border px-4 py-2">40 μl</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Buffer B+</td>
                            <td className="border px-4 py-2">40 μl</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Origami</td>
                            <td className="border px-4 py-2">20 μl</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="border px-4 py-2">3 min</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Buffer B+</td>
                            <td className="border px-4 py-2">40 μl</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Imager</td>
                            <td className="border px-4 py-2">20 μl</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="border px-4 py-2">Seal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <p>Following these steps, the origami is prepared and aligned for imaging. This detailed process ensures the precise placement and visibility of the DNA origami under the microscope.</p>
                </div>


            </div>

            {/* Imaging Protocol Section */}
            <div className="imaging-protocol mb-10">
                <h3 className="text-2xl font-semibold mt-6">Imaging Protocol</h3>
                <p className="text-lg leading-relaxed">
                To visualize our DNA origami samples, we utilize Total Internal Reflection Fluorescence (TIRF) microscopy with specific settings to enhance the visibility of our target structures:
                </p>
                <div className="table-container w-3/5 mt-4 mb-6 mx-auto text-center">
                    <table className="w-3/5 min-w-full divide-y divide-gray-300 text-center border mx-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Parameter</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="border px-4 py-2">Illumination Angle</td>
                                <td className="border px-4 py-2">54°</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Exposure</td>
                                <td className="border px-4 py-2">50.00 ms</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">No. of frames (Z-stack)</td>
                                <td className="border px-4 py-2">30,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Channel Wavelength</td>
                                <td className="border px-4 py-2">532 nm</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Channel Intensity</td>
                                <td className="border px-4 py-2">50%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-lg leading-relaxed mt-4">
                These settings are tailored to capture single-color DNA-PAINT using the green channel, corresponding to the Cy3B dye used in our experiments. This sophisticated setup allows for detailed imaging of the intricate structures formed by our DNA origami.
                </p>
            </div>
            </div>


          {/* Control Experiments and Modifications */}
          <div className="mx-10 mb-10">
            <h2 id="control-experiments" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">
                Control Experiments and Modifications
            </h2>
            <p className="text-lg leading-relaxed mb-6">
                Overview of various control experiments designed to test the stability and functionality of the DNA origami structures. Below are the details of each experiment and their specific protocols:
            </p>
            <ControlExperiments />
            </div>


          {/* Integration and Functionality */}
            <div className="mx-10 mb-10">
                <h2 id="integration-functionality" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Integration and Functionality</h2>
                
                {/* Robot Integration */}
                <h3 className="text-2xl font-semibold mt-6 mb-2">Robot Integration</h3>
                <p className="text-lg leading-relaxed mb-6">
                    The integration of robots into DNA origami involves careful coordination of nanoscale interactions. Each robot is designed to attach to specific sites on the origami structure through a series of programmed molecular interactions. This precise design allows for the robots to perform predetermined tasks, such as cargo transport or molecular assembly. Recent experiments have focused on enhancing this integration by improving the binding efficiency and responsiveness of the robots to environmental triggers.
                </p>
                
                {/* Stability and Functionality Tests */}
                <h3 className="text-2xl font-semibold mt-6 mb-2">Stability and Functionality Tests</h3>
                <p className="text-lg leading-relaxed mb-6">
                    Stability and functionality tests are crucial in evaluating the performance of DNA origami structures post-integration. These tests include temperature range assessments, where the structures are exposed to various temperatures to observe their resilience. Additionally, functionality tests are conducted under different ionic strengths to simulate various biological environments. These experiments help in determining the robustness of the origami structures and their ability to maintain integrity and functionality under diverse conditions.
                </p>
            </div>


          {/* Advanced Protocols and Future Directions */}
        <div className="mx-10 mb-10">
            <h2 id="advanced-protocols" className="text-3xl font-bold text-primaryBlue mt-8 mb-4">Advanced Protocols and Future Directions</h2>
            
            {/* Future Experiments */}
            <h3 className="text-2xl font-semibold mt-6 mb-2">Future Experiments</h3>
            <p className="text-lg leading-relaxed mb-6">
                As we continue to refine our DNA origami techniques, future experiments will focus on several innovative avenues. We plan to develop autonomous robotic systems that can operate independently within a biological environment. These systems will be designed to seek out and repair cellular structures or deliver targeted therapeutic agents directly to disease sites. Another exciting direction involves the integration of sensory capabilities into the DNA robots, enabling them to respond to environmental cues with high precision. These advancements will be critical in moving from experimental models to real-world biomedical applications.
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
