import React, { useState } from 'react';
import profimg from "../assets/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; 
import eduimg from "../assets/icons8-education-50.png";
import skillimg from "../assets/icons8-skills-50.png";
import projimg from "../assets/icons8-projects-50.png";
import achimg from "../assets/icons8-achievement-50.png";
import dataObj from './ResumeData';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const tabItems = [
    { name: 'Profile', icon: profimg },
    { name: 'Education', icon: eduimg},
    { name: 'Skills', icon: skillimg },
    { name: 'Projects', icon: projimg },
    { name: 'Achievements', icon: achimg },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
    <h1 className='mt-10 text-center text-[50px]'>Resume</h1>

    <div className="w-[80%] min-h-[400px] m-auto mt-10">
      {/* Dropdown for small screens */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full text-left inline-flex items-center justify-between px-4 py-3 bg-gray-50 text-gray-500 rounded-lg dark:bg-gray-800 dark:text-gray-400"
        >
          {activeTab}
          <svg
            className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {isDropdownOpen && (
          <ul className="mt-2 space-y-3 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg">
            {tabItems.map((tab) => (
              <li key={tab.name}>
                <button
                  onClick={() => handleTabClick(tab.name)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg ${
                    activeTab === tab.name
                      ? 'text-white bg-blue-700 dark:bg-blue-600'
                      : 'text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  <img src={tab.icon} alt={`${tab.name} icon`} className="w-5 me-2" />
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-10 p-6 bg-gray-900/90 backdrop-blur-sm border border-white/30 shadow-md text-medium text-gray-500 rounded-lg w-full">
          {dataObj[activeTab].content}
        </div>
      </div>

      {/* Tabs for md and larger screens */}
      <div className="hidden md:flex w-full min-h-[400px]">
        {/* Tab Options */}
        <ul className="flex-column space-y space-y-3 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          {tabItems.map((tab) => (
            <li key={tab.name}>
              <button
                onClick={() => handleTabClick(tab.name)}
                className={`inline-flex items-center pl-4 pr-6 py-3 rounded-lg w-full ${
                  activeTab === tab.name
                    ? 'text-white bg-blue-700'
                    : 'text-gray-300 hover:text-gray-900 bg-gray-50 hover:bg-gray-600 bg-gray-800'
                }`}
              >
                <img src={tab.icon} alt={`${tab.name} icon`} className="w-5 me-2" />
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Tab Content */}
        <div className="p-6 bg-gray-900/90 backdrop-blur-sm border border-white/30 shadow-md text-medium text-gray-300 rounded-lg w-full">
          {dataObj[activeTab].content}
        </div>
        {/* ends */}

      </div>

    </div>
    </>
  );
};

export default Resume;
