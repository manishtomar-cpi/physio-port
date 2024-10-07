"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Introduction");

  const navigationLinks = [
    { name: "Introduction", href: "#introduction" },
    { name: "Skills Highlight", href: "#skills-highlight" },
    { name: "Work Experience", href: "#work-experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Availability", href: "#availability" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      navigationLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.name);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div className="sm:hidden flex items-center justify-between bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-20">
        <div className="font-bold text-xl text-blue-600">Dr. Virta</div>
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {sidebarOpen ? (
              // Cross icon when sidebar is open
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              // Hamburger icon when sidebar is closed
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          sidebarOpen ? "left-0" : "-left-full"
        } sm:left-0 h-full w-64 bg-white shadow-md z-30 transition-all duration-300`}
      >
        <div className="p-4">
          <div className="font-bold text-2xl text-blue-600 mb-8 sm:block hidden">
            Dr. Virta
          </div>
          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                    activeSection === link.name
                      ? "bg-blue-100 text-blue-600 font-bold"
                      : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                  onClick={() => {
                    setSidebarOpen(false);
                    setActiveSection(link.name);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
