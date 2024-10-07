"use client";

import Image from 'next/image';

// import patientDataManagementImage from '../assets/Patient-Data-Management.jpg';
import comprehensiveMusculoskeletalRehabilitationImage from '../assets/Comprehensive-Musculoskeletal-Rehabilitation.jpg';
import postSurgicalRecoveryImage from '../assets/Post-Surgical-Recovery.png';
import sportsInjuryManagementImage from '../assets/Sports-Injury-Management.png';
import neurologicalRehabilitationImage from '../assets/Neurological-Rehabilitation.png';
import electronicHealthRecordsImage from '../assets/Patient-Data-Management.jpg';

export default function SkillsHighlight() {
  // Services data
  const services = [
   
    {
      name: 'Comprehensive Musculoskeletal Rehabilitation',
      image: comprehensiveMusculoskeletalRehabilitationImage,
    },
    {
      name: 'Post-Surgical Recovery Programs',
      image: postSurgicalRecoveryImage,
    },
    {
      name: 'Sports Injury Management',
      image: sportsInjuryManagementImage,
    },
    {
      name: 'Neurological Rehabilitation',
      image: neurologicalRehabilitationImage,
    },
    {
      name: 'Electronic Health Records (EHR)',
      image: electronicHealthRecordsImage,
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-12 -mt-2">
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">
        Skills Highlight
      </h2> */}
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="w-64 bg-white shadow-md rounded-lg p-4 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                {service.name}
              </h3>
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
