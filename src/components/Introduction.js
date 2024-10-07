"use client";

import { useState } from 'react';
import Image from 'next/image';
import physioImage from '../assets/sports-physiotherapy-illustration_23-2150076877.png';

export default function Introduction() {
  const [isExpanded, setIsExpanded] = useState(false);

  const introductionText =
    'Experienced physiotherapist with over two years in hospital and clinical settings, specializing in musculoskeletal physiotherapy, in-patient care, and ICU critical care. Proficient in developing tailored rehabilitation programs and utilizing healthcare IT systems, including EHR and physiotherapy software, to optimize patient assessment and recovery. Skilled in advanced therapeutic techniques and multidisciplinary collaboration to deliver evidence-based care that enhances patient outcomes and mobility.';

  const previewText = introductionText.slice(0, 100);

  return (
    <div className="px-1 sm:px-5 lg:px-5 mt-2">
      {/* Container adjusted */}
      <div className="max-w-3xl lg:max-w-none lg:ml-0">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-1 mt-1">
          Hi, I&apos;m Dr. Virta
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-8">
        I&apos;m a Physiotherapist
        </h2>

        {/* Image */}
        <div className="mb-8">
          <Image
            src={physioImage}
            alt="Physiotherapy Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Introduction Text with View More/Less */}
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
          {isExpanded ? introductionText : `${previewText}...`}
        </p>
        <button
          className="mt-1 text-blue-600 hover:underline focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
}
