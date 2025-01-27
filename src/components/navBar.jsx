import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeimg from "../assets/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import profile from "../assets/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import projimg from "../assets/icons8-projects-50.png";
import descimg from "../assets/description_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import phoeniximg from "../assets/icons8-phoenix-96.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location=useLocation();

  // NavBar options component filler array
  const dat=[
    {
      name: "Home",
      path: '/',
      img: homeimg,
      alt: "home",
    },
    {
      name: "About",
      path: '/about',
      img: profile,
      alt: "about",
    },
    {
      name: "Projects",
      path: '/project',
      img: projimg,
      alt: "projects",
    },
    {
      name: "Resume",
      path: '/resume',
      img: descimg,
      alt: "resume",
    },
    ];


  return (
    <nav className="bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* NAVBAR LOGO */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={phoeniximg}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Portfolio
          </span>
        </div>
        {/* THIS SECTION ENDS */}

        {/* NAVBAR MENU-BUTTON FOR SMALL SCREEN */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={menuOpen}
          >

            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />

            </svg>
          </button>
        </div>
        {/* THIS SECTION ENDS */}


        {/* NAVBAR OPTIONS */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? "" : "hidden"}`}>
          <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">

            {dat.map((item) => (
                <Link
                  to={item.path}
                  className={`block flex items-center py-2 px-3 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 ${(location.pathname === item.path) ? 'text-orange-400' : ''}`}
                  aria-current="page"
                  onClick={() => setMenuOpen(false)}
                >
                  <img src={item.img} alt={item.alt} className="w-5 h-5 mr-1" />
                  {item.name}
                </Link>
            ))}

          </div>
        </div>
        {/* THIS SECTION ENDS */}

      </div>
    </nav>
  );
}
