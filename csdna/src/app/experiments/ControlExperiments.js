import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Using FontAwesome for icons

const ControlExperiments = () => {
  const [activeExperiment, setActiveExperiment] = useState(null);

  const experiments = [
    {
      id: 'trackPopulation',
      title: "Track Population Control Experiment",
      purpose: "This experiment determines how many track strands successfully attach to the DNA origami structure, ensuring precise construction.",
      protocol: "Robots are annealed with origami. After 14 hours of incubation with track strands TT1 and TT2, along with the goal, the attachment and alignment are assessed."
    },
    {
      id: 'goalPopulation',
      title: "Goal Population Control Experiment",
      purpose: "This experiment evaluates the successful attachment of goals to their designated locations on the origami, crucial for the structure's functionality.",
      protocol: "After adding goals to the specified track locations, the origami is inspected to verify correct and stable binding."
    },
    {
      id: 'noTrigger',
      title: "No Trigger Control Experiment",
      purpose: "This control ensures that the robots do not initiate movement or dissociate from their start positions without specific trigger activation.",
      protocol: "Monitoring occurs at both 8 and 14 hours to detect any premature movement or detachment, indicating a malfunction."
    },
    {
      id: 'robotMovement',
      title: "Robot Movement Experiment",
      purpose: "This experiment tracks the robot's movement along the origami tracks to verify that it behaves as expected under test conditions.",
      protocol: "The robot's movement is closely monitored to observe its behavior along the tracks and its interactions with goal strands."
    }
  ];

  const toggleDropdown = (id) => {
    setActiveExperiment(activeExperiment === id ? null : id);
  };

  return (
    <div className="mx-10 mb-10">
      {experiments.map((exp) => (
        <div key={exp.id} className="py-4">
          <button
            className="flex items-center w-full text-xl font-bold text-left space-x-4 px-4"
            onClick={() => toggleDropdown(exp.id)}
          >
            {activeExperiment === exp.id ? (
              <FaChevronDown className="transition-transform duration-300" />
            ) : (
              <FaChevronRight className="transition-transform duration-300" />
            )}
            <span>{exp.title}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeExperiment === exp.id ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="px-8 py-4">
              <h4 className="text-lg font-semibold">Purpose</h4>
              <p className="text-gray-700 mb-4">{exp.purpose}</p>
              <h4 className="text-lg font-semibold">Protocol</h4>
              <p className="text-gray-600">{exp.protocol}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ControlExperiments;