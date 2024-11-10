"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapPin, FaDna, FaMoon, FaSun,FaArrowUp } from "react-icons/fa"; // FaMapPin for bullet points
import { FloatingNav } from "../components/floating-navbar";
import Link from "next/link";

export default function ProjectPage() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Introduction", link: "/introduction" },
    { name: "Projects", link: "/projects" },
    { name: "Experiments", link: "/experiments" },
    { name: "Results", link: "/results" },
    { name: "Team", link: "/team" },
  ];

  const links = [
    { label: "DNA Paint", href: "#dna-paint", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "DNA Structure", href: "#dna-structure", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Design Introduction", href: "#design-introduction", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "CADNANO", href: "#cadnano", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "OXDNA", href: "#oxdna", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Development", href: "#development", icon: <FaMapPin className="h-3 w-3" /> },
    { label: "Motion", href: "#motion", icon: <FaMapPin className="h-3 w-3" /> },
  ];

  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

  // Initial theme setting based on user's system preference
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = systemPrefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    // Show Back-to-Top button based on scroll position
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
              Project Overview
            </motion.span>
          )}
        </Link>

        {/* Sidebar Links */}
        <div className="mt-10 flex flex-col gap-4 items-center">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex items-center justify-center ga py-2 px-3 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-200 group"
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
        <div className="mt-10 space-y-20 text-gray-800 dark:text-gray-200 border-light dark:border-dark p-6 rounded-lg shadow-light dark:shadow-dark">
        
        <div className="mx-10 mb-10">
          <h2 id="dna-paint" className="text-3xl font-bold text-primaryBlue mt-8 mb-4 ">DNA Paint</h2>
            <p className="text-lg leading-relaxed mb-6"> 
                While conventional methods of imaging DNA origami, such as the use of AFM microscopy, have allowed us to view our structures as they form on the nanoscale, we decided to use DNA-PAINT, a novel imaging technique. A key limiting factor in super-resolution microscopy is the diffraction limit, which is the point at which two individual points can no longer be distinguished from each other. Through the use of short oligonucleotides conjugated to fluorophores, DNA-PAINT is capable of bypassing this diffraction limit, thus offering higher resolution, on the scale of 1nm.
            </p>
            <p className="text-lg leading-relaxed mb-6">
                Achieving imaging through DNA-PAINT requires the use of a docking strand, which is located on the strands of interest, and imager strands, which are shorter strands containing fluorescent dyes. The choice of dye depends solely on the user; for our project, we decided to use the Cy3b dye, with an excitation wavelength of 560 nm and an emission wavelength of 572 nm. DNA-PAINT relies on the transient binding of these imager strands to their respective docking strands. Upon flowing in these imager strands in excess to the origami, they freely spread throughout the sample, locating their complementary strands.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for DNA Structure - Figure 1]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 1: Schematic representation of the two possible states during DNA-PAINT. Imager strands are flowed in, and bind to their complementary docking strands for a short period of time. Image made in BioRender.</p>
        </div>

        <div className="mx-10 mb-10">
            <h2 id="dna-structure" className="text-3xl font-bold text-primaryBlue mt-8 mb-4  mt-4">DNA Structure</h2>
            <p className="text-lg leading-relaxed mb-6">
                During the period in which the imager strands bind to the dockings, the microscope collects the photons emitted as a result of the binding. In this way, we can achieve high localization with regard to the location of each docking strand in the origami. For our csDNA, we decided to have 7 fiduciary markers arranged around the origami track, thereby allowing us to locate our individual origami. We also added a docking strand to the robot itself to track its motion during the random walk.
            </p>

            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for DNA Structure - Figure 2]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 2: A The layout of fiduciary markers on our csDNA. We wanted to ensure that each fiduciary marker was at least 20nm apart from the next, allowing us to clearly distinguish the individual markers. We also kept the bottom of the origami empty so that we could prevent symmetry in the structure, allowing us to know the orientation of the origami at any point. B DNA-PAINT image of the 20nm grid. Fiduciary markers are arranged in a 4x3 manner. Using DNA-PAINT, every fiduciary marker is clearly visible. Image made in BioRender.</p>
        </div>

        <div className="mx-10 mb-10">
            <h2 id="design-introduction" className="text-3xl font-bold text-primaryBlue mt-8 mb-4  mt-4">Design Introduction</h2>
            <p className="text-lg leading-relaxed mb-6">
            In 2006, Paul Rothemund first demonstrated his scaffold method of DNA origami, in which he took a single DNA strand and folded it into a desired shape. In the 17 years that have passed, scientists have continued to develop structures with possible applications across medicine and optics. Here, we discuss the process of designing DNA origami, from designing a structure to outputting it for testing in a lab setting.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Design Introduction - Figure 3]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 3: The first row shows diagrams of the desired structures. The colors indicate the index of each base pair in the folding process, with red being the first bases to fold while purple is the last. The second row shows AFM images captured by Paul Rothemund. The remarkable specificity and programmability of DNA is the reason we selected it as the medium for our project. Images taken from Rothemund, 2006.</p>
        </div>

        <div className="mx-10 mb-10">
            <h2 id="cadnano" className="text-3xl font-bold text-primaryBlue mt-8 mb-4  mt-4">CADNANO</h2>
            <p className="text-lg leading-relaxed mb-6">
                In order to construct our csDNA for its eventual construction and imaging, we used caDNAno, an open-source software package created by Shawn Douglas and co-workers in 2009. CaDNAno (www.cadnano.org) presents the user with an intuitive interface intended to ease the process of constructing DNA origami. Users arrange DNA helices on a hexagonal or square lattice. Scaffold strands on the path panel may then be extended or shortened to achieve the desired dimensions, and they are then linked by crossovers to ensure a continuous and cohesive structure.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for CADNANO - Figure 4]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 4: a The slice panel of caDNAno. Users may arrange double helices on a honeycomb or square lattice. b The path panel, where users may edit their scaffold and staple strand arrangements. Upon designing the structure of their choice, caDNAno will generate sequences for all strands in the design based on the inputted M13 sequence.</p>

            <p className="text-lg leading-relaxed mb-6">
            To fold the scaffold strand in the desired manner, staple strands can be added. These staple strands have an optimal length of 18 to 49 base pairs; a significant departure from this length may lead to a failure when attempting to fold the origami. Base pair insertions and deletions can also be made to control the flexibility and bending ability of the structure. Upon arriving at the desired arrangement of scaffold and staple strands, the design is completed with the addition of the M13mp18 strand, which allows caDNAno to determine the complementary staple strand sequences for optimal binding and folding. In this manner, we constructed our csDNA origami, the track on which our robot will move.
            </p>

            <p className="text-lg leading-relaxed mb-6">
            Once the design is completed in caDNAno, the user may output all the sequences of the staple and scaffold strands. These sequences are then used when ordering strands, thereby allowing the user to eventually anneal and image their origami in a lab.
            </p>
        </div>

        <div className="mx-10 mb-10">
            <h2 id="oxdna" className="text-3xl font-bold text-primaryBlue mt-8 mb-4  mt-4">OXDNA</h2>
            <p className="text-lg leading-relaxed mb-6">
            While caDNAno allows the user to create their 3D DNA origami, it is often beneficial to be able to visualize the structure as it is intended to form on a 3D plane. Hence, we also employed the use of oxDNA, a modeling software for DNA nanotechnology. oxDNA requires users to input configuration and topology files from caDNAno, and can interpret them to produce simulations and 3D visualizations of the origami structure. In order to better visualize our csDNA, we decided to input it into oxDNA.
            </p>
        </div>

        <div className="mx-10 mb-10">

            <h2 id="development" className="text-3xl font-bold text-primaryBlue mt-8 mb-4  mt-4">Development</h2>
            <p className="text-lg leading-relaxed mb-6">
            Constructing our own cargo-sorting robot required constant development and tweaks to our initial design. Our chart below reflects the various iterations of our csDNA, each of which helped bring us to where we are today.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Development - Figure 5]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 5: A flowchart representing the various iterations of our csDNA design throughout our process. Initially, our fiduciary markers were located at a 5nm distance apart from each other, which we increased fourfold to achieve clearer imaging. We also included 20nm grids in our imaging as a benchmark for the quality of the csDNA images. To limit aggregation between individual origami, we introduced polyTs and a loop cover. Image made in BioRender.</p>

        </div>

        <div className="mx-10 mb-10">
            <h2 id="motion" className="text-3xl font-bold text-primaryBlue mt-8 mb-4 mt-4">Motion</h2>
            <p className="text-lg leading-relaxed mb-6">
            The DNA robot itself was a single-stranded DNA of length 53 nucleotides, segmented into 6 sections. From base to top, the robot had a docking strand, foot #1, a leg, foot #2, an arm, and a hand. Each section consisted of a distinct DNA sequence to ensure highly targeted binding when the robot encountered strands complementary to its own “body parts”. Through the creation of unique parts, each with a specific purpose, we were able to ensure that the robot could carry out tasks in the desired manner. For instance, the leg and feet of the robot facilitated its movement, while the arm and hand provided a mechanism for the robot to pick up and drop cargo. In this manner, the entirety of the robot served crucial roles in the process of sorting cargo.
            </p>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Motion - Figure 6]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 6: Schematic of the structure of the robot. The robot itself is a single-stranded DNA. It consists of five different sections, thus permitting it to have a wide range of capabilities, including motion and picking up cargo. The sequence of the robot is designed specifically to be able to bind to the track types, as well as pick up the cargo strands. Image made in BioRender.</p>
            
                <p className="text-lg leading-relaxed mb-6">
                Prior to the addition of the robot to the system, the robot was inhibited to the start staple. This was necessary to confirm that only one robot would bind to a given origami track, thus preventing the binding of multiple robots on a single origami. The inhibitor strand possessed a hand, arm, and a foot complement, thereby binding to relevant parts of the robot. On the addition of a trigger strand, complementary to the inhibitor, into the system, the inhibitor dissociated to the trigger, thus permitting the robot to begin its motion along the track.
                </p>

            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Motion - Figure 7]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 7: Schematic of the structure of the robot. The robot itself is a single-stranded DNA. It consists of five different sections, thus permitting it to have a wide range of capabilities, including motion and picking up cargo. The sequence of the robot is designed specifically to be able to bind to the track types, as well as pick up the cargo strands. Image made in BioRender.</p>
            
            <p className="text-lg leading-relaxed mb-6">
            In order to facilitate the constant movement of the robot, it was necessary to construct two different track types. The track types differed solely in terms of the position of the feet and legs; track type #1 had a leg* and foot*, respectively, while track type #2 had a foot* followed by a leg*. The tracks were laid out along the origami such that they constantly alternated. By having different arrangements of the legs and feet, the tracks allowed the robot to seamlessly transition between the two track types and continue its random walk without obstruction.
            </p>

            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Motion - Figure 8]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 8: a Map of the track upon which the robot traverses. The robot begins its random walk at the start staple and continuously travels along the two track types until reaching its goal destination. b Each track type has a leg complementary to the robot. They each have one foot, yet the two feet correspond to different ones on the robot. By designing the track types this way, we could ensure the robot would never be stationary at one point for an extended period of time. Image made in BioRender.</p>

            <p className="text-lg leading-relaxed mb-6">
            The motion of the robot can be compared to that of a domino chain reaction; by pushing the top of one, the rest of the domino is compelled to follow. The diagram above represents the robot’s motion by demonstrating how it moves from one track type to another. Initially, foot #1 and the leg are bound to their complements, while foot #2 remains free. However, foot #2 begins to bind to its complement on the second track type, and the leg and foot #1 are compelled to follow. Essentially, by constantly having one foot of the robot unbound, we were able to allow the robot to constantly continue its random walk. The robot will be fully incapacitated once it reaches the goal strand, where all its feet and its leg will be bound to their respective complements, creating a stable complex.
            </p>

            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Motion - Figure 9]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 9: Diagram showing how the robot transitions between the two different track types. Initially, the robot is bound to track type one, with its leg and foot 1 bound to their complements. Foot 2 begins to bind to its complement on the second track type, and the rest of the robot is compelled to follow. In this manner, the robot continuously switches between the two track types, continuing its random walk. Image made in BioRender.</p>

                <p className="text-lg leading-relaxed mb-6">
                As outlined earlier, the robot was designed with the purpose of transporting cargo across the DNA origami track. The cargo is a single-stranded DNA partitioned into four parts - the cargo identifier, an arm* complement, a hand* complement, and a goal attacher*. The identifier allows the cargo to be recognized by the goal, while the arm* and hand* allow the cargo to be picked up by the robot. The goal attacher’s role is to bind the cargo to the goal strand. When the robot meets cargo during its random walk, the hand and the arm of the robot bind to their complements on the cargo, and the robot is now bound with cargo. The robot continues with its walk until it bumps into the designated cargo goal strand. Hence, the cargo’s hand*, arm*, and identifier bind to the goal strand, indicating that the cargo has been deposited at the desired strand. The cargo is designed such that it has the capacity to carry molecules, augmenting its potential for use in drug delivery in medicine and other related fields.            
                </p>

            <div className="mt-4 bg-gray-200 dark:bg-gray-700 w-full h-60 flex items-center justify-center">[Image Placeholder for Motion - Figure 10]</div>
            <p className="text-sm italic mb-10 mt-4">Figure 10: Diagram showing the mechanism by which the robot picks up cargo. While the robot remains bound to one of the two track types, its arm and hand begin to bind to that of the cargo. Thus, the single-stranded cargo is bound to the robot. The robot continues with its random walk until it can deliver the cargo to the goal strand, which has a complement to the cargo identifier as well. Image made in BioRender.</p>
        
        </div>

        </div>

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
