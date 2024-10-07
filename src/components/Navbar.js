"use client";
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationLinks = [
    { name: 'Introduction', href: '#introduction' },
    { name: 'Skills Highlight', href: '#skills-highlight' },
    { name: 'Work Experience', href: '#work-experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Availability', href: '#availability' },
    { name: 'Contact', href: '#contact' },
  ];

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
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 13H5v-2h14v2z"
              />
            ) : (
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
          sidebarOpen ? 'left-0' : '-left-full'
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
                  className="text-gray-800 hover:text-blue-600"
                  onClick={() => setSidebarOpen(false)}
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
