"use client";

import Image from 'next/image';
import checkedIcon from '../assets/checked.png'; // Adjust the path if needed

export default function Availability() {
  return (
    <div className="px-4 sm:px-8 lg:px-12 mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">Availability</h2>
      
      <div className="flex items-start gap-4">
        {/* Image */}
        <div className="w-12 h-12 flex-shrink-0">
          <Image src={checkedIcon} alt="Checked Icon" width={48} height={48} />
        </div>

        {/* Availability Information */}
        <div className="text-gray-700">
          <p className="mb-4">
            As an international student, I am currently available for up to <strong>20 hours per week</strong> until March, due to visa restrictions. During this period, I am open to working in administrative roles or roles that align with my skills, across the UK.
          </p>

          <p className="mb-4">
            After March, I will be fully available to work <strong>full-time</strong>, anywhere in the UK.
          </p>

          <p className="font-semibold">
            For more details, please fill in the contact form below or send me a message on LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
}
