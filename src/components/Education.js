"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? education.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === education.length - 1 ? 0 : prevIndex + 1
    );
  };

  const education = [
    {
      degree: "Master's Degree, Physiotherapy",
      university: "Cardiff University",
      duration: "Sep 2023 - Mar 2025",
      location: "Cardiff, UK",
      points: [
        "Musculoskeletal Physiotherapy (MSK): Comprehensive understanding and hands-on experience in MSK assessment and treatment.",
        "Kinesiology: Explored biomechanics and physiological processes behind human movement.",
        "Pain Management: Developed knowledge of pain mechanisms and strategies for effective treatment.",
        "Patient Education: Focused on educating patients about recovery processes and preventive care.",
        "Research Methodologies: Engaged in research projects, gaining skills in evidence-based practice.",
      ],
    },
    {
      degree: "Bachelor's Degree, Physiotherapy",
      university: "Garden City University",
      duration: "Aug 2017 - Jul 2022",
      location: "Bangalore, India",
      points: [
        "Internship: Completed a 6-month internship at Apollo Hospitals, focusing on musculoskeletal and post-surgical rehabilitation.",
        "Organizational Skills: Developed excellent organizational skills through patient management.",
        "Research Projects: Participated in research projects focused on physiotherapy techniques and outcomes.",
      ],
    },
  ];

  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 text-left">
        Education
      </h2>

      {education.length > 1 && (
          <>
            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 focus:outline-none z-0"
              onClick={handlePrev}
              aria-label="Previous Degree"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 focus:outline-none z-10"
              onClick={handleNext}
              aria-label="Next Degree"
            >
              <FaArrowRight size={24} />
            </button>
          </>
        )}

      {/* Education Content */}
      <div className="overflow-hidden relative">
        {/* Main Education Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ flexBasis: "100%" }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 text-left">
                {edu.university}
              </h3>
              <p className="text-lg font-medium text-gray-600 text-left mb-2">
                {edu.degree}
              </p>
              <p className="text-sm font-medium text-gray-500 text-left mb-2">
                {edu.duration}
              </p>
              <p className="text-sm font-medium text-gray-500 text-left mb-3">
                {edu.location}
              </p>
              
              <EducationDetails points={edu.points} />
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
      
      </div>
    </div>
  );
}

function EducationDetails({ points }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <ul className="list-disc list-inside text-gray-700 text-left">
        {isExpanded
          ? points.map((point, idx) => (
              <li key={idx} className="mb-2">
                {point}
              </li>
            ))
          : points.slice(0, 2).map((point, idx) => (
              <li key={idx} className="mb-2">
                {point}
              </li>
            ))}
      </ul>
      {points.length > 2 && (
        <button
          className="mt-2 text-blue-600 hover:underline focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
}
