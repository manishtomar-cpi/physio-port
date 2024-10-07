"use client";

import { useState } from 'react';
import Image from 'next/image';

// Import arrow icons (you can use any icon library or SVGs)
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import images
import chestPhysiotherapy from '../assets/skills/Chest-Physiotherapy.jpg';
import communication from '../assets/skills/Communication.png';
import criticalCarePhysiotherapy from '../assets/skills/Critical-Care-Physiotherapy.webp';
import earlyMobilization from '../assets/skills/Early-Mobilization.jpg';
import electronicHealthRecords from '../assets/skills/Electronic-Health-Records.jpg';
import electrotherapy from '../assets/skills/Electrotherapy.webp';
import inpatientCare from '../assets/skills/In-patient-Care.jpg';
import intensiveCareUnit from '../assets/skills/Intensive-Care-Unit.webp';
import manualTherapy from '../assets/skills/Manual-Therapy.webp';
import musculoskeletalRehabilitation from '../assets/skills/Musculoskeletal-Rehabilitation.jpg';
import neurologicalPhysiotherapy from '../assets/skills/Neurological-Physiotherapy.jpg';
import outpatientClinics from '../assets/skills/Outpatient-Clinics.jpg';
import patientDataManagement from '../assets/skills/Patient-Data-Management.png';
import postSurgicalRecovery from '../assets/skills/Post-Surgical-Recovery.jpg';
import problemSolving from '../assets/skills/Problem-Solving.png';
import sportsInjury from '../assets/skills/sports-injury.png';
import timeManagement from '../assets/skills/time-managment.png';
import ultrasoundTherapy from '../assets/skills/Ultrasound-Therapy.jpg';

export default function Skills() {
    // Skills data
    const categories = [
      {
        title: 'Physiotherapy Specialties',
        skills: [
          {
            name: 'Musculoskeletal Rehabilitation',
            image: musculoskeletalRehabilitation,
          },
          {
            name: 'Post-Surgical Recovery',
            image: postSurgicalRecovery,
          },
          {
            name: 'Critical Care Physiotherapy',
            image: criticalCarePhysiotherapy,
          },
          {
            name: 'Chest Physiotherapy',
            image: chestPhysiotherapy,
          },
          {
            name: 'Neurological Physiotherapy',
            image: neurologicalPhysiotherapy,
          },
        ],
      },
      {
        title: 'Therapeutic Techniques',
        skills: [
          {
            name: 'Manual Therapy',
            image: manualTherapy,
          },
          {
            name: 'Electrotherapy',
            image: electrotherapy,
          },
          {
            name: 'Ultrasound Therapy',
            image: ultrasoundTherapy,
          },
          {
            name: 'Early Mobilization',
            image: earlyMobilization,
          },
          {
            name: 'Sports Injury Rehabilitation',
            image: sportsInjury,
          },
        ],
      },
      {
        title: 'Healthcare IT Tools',
        skills: [
          {
            name: 'Electronic Health Records (EHR)',
            image: electronicHealthRecords,
          },
          {
            name: 'Patient Data Management',
            image: patientDataManagement,
          },
        ],
      },
      {
        title: 'Clinical Settings',
        skills: [
          {
            name: 'In-patient Care',
            image: inpatientCare,
          },
          {
            name: 'Intensive Care Unit (ICU)',
            image: intensiveCareUnit,
          },
          {
            name: 'Outpatient Clinics',
            image: outpatientClinics,
          },
          {
            name: 'Sports Clinics',
            image: sportsInjury,
          },
        ],
      },
      {
        title: 'Soft Skills',
        skills: [
          {
            name: 'Communication',
            image: communication,
          },
          {
            name: 'Problem Solving',
            image: problemSolving,
          },
          {
            name: 'Time Management',
            image: timeManagement,
          },
        ],
      },
    ];
  
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handlePrevCategory = () => {
        setCurrentCategoryIndex((prevIndex) =>
          prevIndex === 0 ? categories.length - 1 : prevIndex - 1
        );
      };

      const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) =>
          prevIndex === categories.length - 1 ? 0 : prevIndex + 1
        );
      };

      return (
        <div className="relative px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">Skills</h2>
          
          {/* Arrow buttons */}
          {categories.length > 1 && (
            <>
              <button
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-0 text-blue-600 hover:text-blue-800 focus:outline-none"
                onClick={handlePrevCategory}
                aria-label="Previous Category"
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-0 text-blue-600 hover:text-blue-800 focus:outline-none"
                onClick={handleNextCategory}
                aria-label="Next Category"
              >
                <FaArrowRight size={24} />
              </button>
            </>
          )}
    
          {/* Categories Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentCategoryIndex * 100}%)`,
              }}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ flexBasis: '100%' }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-left">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="w-40 bg-white shadow-md rounded-lg p-4 text-center"
                      >
                        <div className="mb-2">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={80}
                            height={80}
                            className="object-contain mx-auto"
                          />
                        </div>
                        <h4 className="text-base font-semibold text-gray-800 break-words">
                          {skill.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }