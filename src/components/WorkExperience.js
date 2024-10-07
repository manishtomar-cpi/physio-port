"use client";

import { useState } from 'react';

export default function WorkExperience() {
    const experiences = [
        {
          company: 'Saroj Super Speciality Hospital',
          role: 'Physiotherapist',
          duration: 'Feb 2023 - Jul 2023',
          location: 'New Delhi, Delhi, India',
          points: [
            'Provided physiotherapy services to in-patients and ICU patients.',
            'Specialized in chest physiotherapy for ICU patients, aiding in lung function improvement.',
            'Collaborated with a multidisciplinary team to develop comprehensive rehabilitation plans.',
            'Conducted bedside physiotherapy sessions for post-operative patients.',
            'Educated patients and families on exercises post-discharge.',
            'Implemented early mobilisation protocols in the ICU.',
            'Worked effectively in a high-pressure environment.',
          ],
        },
        {
          company: 'Valor Sports Specific Speed Clinic',
          role: 'Physiotherapist',
          duration: 'Mar 2022 - Feb 2023',
          location: 'Jaipur, Rajasthan, India',
          points: [
            'Specialized in treating athletes with sports-related injuries.',
            'Treated athletes including runners, football players, cricketers, and basketball players.',
            'Designed individualized rehabilitation programs to improve recovery time.',
            'Utilized advanced therapeutic modalities: ultrasound therapy, taping, and sports massage.',
            'Collaborated with sports coaches and trainers.',
            'Provided on-site physiotherapy support during sports events.',
            'Helped athletes return to peak physical condition.',
          ],
        },
        {
          company: 'Apollo Hospitals',
          role: 'Physiotherapy Intern',
          duration: 'Sep 2021 - Mar 2022',
          location: 'Navi Mumbai, Maharashtra, India',
          points: [
            'Treated patients individually under supervision.',
            'Focused on musculoskeletal and post-operative rehabilitation.',
            'Learned advanced therapeutic techniques, such as laser therapy for pain management.',
            'Received positive feedback from patients and senior staff.',
            'Developed clinical reasoning and problem-solving abilities.',
            'Gained expertise in holistic treatment plans involving manual therapy and electrotherapy.',
          ],
        },
        {
          company: 'SRI SATYA SAI HOSPITAL',
          role: 'Clinical Observer',
          duration: 'Jan 2018 - Jan 2019',
          location: 'Bengaluru, Karnataka, India',
          points: [
            'Worked as a clinical observer during second year of Bachelor\'s.',
            'Gained hands-on exposure to various physiotherapy approaches.',
            'Learned effective strategies for patient assessment.',
            'Observed and participated in rehabilitation of diverse cases.',
            'Developed communication skills with patients.',
            'Enhanced knowledge of therapeutic modalities and rehabilitation techniques.',
          ],
        },
      ];

  return (
    <div className="px-4 sm:px-5 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8">
        Work Experience
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 h-full bg-gray-200"></div>

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ experience, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 !== 0;

  return (
    <div
      className={`mt-8 flex items-start ${
        isLeft ? 'flex-row-reverse' : ''
      } relative`}
    >
      {/* Timeline Indicator */}
      <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
        {/* Dot */}
        <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
        {/* Line */}
        <div className="flex-1 w-0.5 bg-gray-200"></div>
      </div>

      {/* Card Content */}
      <div
        className={`w-full sm:w-5/12 ${
          isLeft ? 'sm:mr-8 sm:ml-auto' : 'sm:ml-8'
        } bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 ${
          isLeft ? 'mr-4' : 'ml-4'
        }`}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {experience.role}
        </h3>
        <p className="text-gray-600 font-medium mb-2">{experience.company}</p>
        <p className="text-gray-500 text-sm mb-4">
          {experience.duration} | {experience.location}
        </p>

        {/* Points with View More/Less */}
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-[96px]'
          }`}
        >
          <ul className="list-disc list-inside text-gray-700">
            {experience.points.map((point, idx) => (
              <li key={idx} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {experience.points.length > 2 && (
          <button
            className="mt-2 text-blue-600 hover:underline focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
    </div>
  );
}
