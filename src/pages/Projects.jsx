import React from "react";
import autoimg from '../assets/autonixPortfolio.png';
import mernimg from '../assets/Screenshot 2024-06-11 144104.png';
import calcimg from '../assets/Screenshot 2025-01-17 110722.png'
import portimg from '../assets/Screenshot 2025-01-17 110642.png'
import ticimg from '../assets/Screenshot 2025-01-17 111631.png'
import tiximg from '../assets/Screenshot 2025-01-17 112447.png'

const prjData = [
  {
    name:'Autonix',
    desc:'A web app offering a automobile spare parts and 24/7 service booking, built for convenience and reliability.',
    code:'https://github.com/lakshya-3804/AutonixRouting.git',
    tech:'JavaScript, ReactJS, HTML , CSS, Tailwind CSS',
    img:autoimg
  },
  {
    name:'MERN-Auth',
    desc:'A full-stack web application for user authentication, featuring sign-up, login, and profile access, built with the MERN stack.',
    code:'https://github.com/lakshya-3804/MERNAuth.git',
    tech:'JavaScript, ReactJS, Tailwind CSS, ExpressJS, MongoDB, JWT, Redux',
    img:mernimg
  },
  {
    name:'Tixly',
    desc:'A versatile platform for booking bus, train, flight, and movie tickets, offering a seamless and user-friendly experience.',
    code:'https://github.com/lakshya-3804/Tixly.git',
    tech:'JavaScript, ReactJS, Tailwind CSS, ExpressJS, MongoDB, JWT, Redux',
    img:tiximg
  },
  {
    name:'Portfolio',
    desc:'A responsive website showcasing my skills, projects, and experience, built using modern web technologies.',
    code:'https://github.com/lakshya-3804/Portfolio.git',
    tech:'ReactJS , JavaScript , Tailwind CSS , HTML',
    img:portimg
  },
  {
    name:'Tic-Tac-Toe',
    desc:'This is a 2-player game of Tic-Tac-Toe. Maintains score.',
    code:'https://github.com/lakshya-3804/Tic-Tac-Toe.git',
    tech:'ReactJS , JavaScript , CSS , HTML',
    img:ticimg
  },
  {
    name:'Calculator',
    desc:'This was my first project in web dev. It is a simple calculator which can perform basic arithmetic operations.',
    code:'https://github.com/lakshya-3804/Calculator.git',
    tech:'HTML , CSS , JavaScript',
    img:calcimg
  }
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-3xl md:text-5xl mt-10">My Projects</h2>
      <div className="flex flex-wrap text-gray-100 mt-10 gap-x-10 gap-y-10 p-10 justify-evenly">
      {prjData.map((item) => (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 h-full sm:h-[500px] sm:w-[350px] pb-2 " >

          <img className="rounded-t-lg h-[40%] w-[100%]" src={item.img} alt={item.name} />

          <div className="p-5 flex flex-col sm:justify-between h-[60%] w-[100%] items-start">

            <h3 className="mb-2 text-[20px] sm:text-2xl font-bold tracking-tight text-white"> {item.name} </h3>
            <p className="mb-3 font-normal text-gray-400 text-[12px] sm:text-[16px]"> {item.desc} </p>
            <p className="mb-3 text-[12px] sm:text-[16px] font-normal text-gray-200"> Tech Stack - {item.tech} </p>

            <a href={item.code} target="_blank" className="inline-flex items-center px-3 py-2 text-[12px] md:text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
