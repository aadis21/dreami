import React, { useState } from 'react';
import logo from '../../../assets/Logo/logo2.png';
import { Link } from 'react-router-dom';
import Model from '../Model/Model'
import Form from '../Form/form';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav style={{ backgroundColor: "#121212", borderBottom: '5px solid orange' }} className=" fixed w-full z-50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-11" alt="Dreamifys Logo" />
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="#">
              <Model text='Book a free demo' form={<Form />} />
            </Link>
            {/* <Link to="/signin">
              <button type="button" className="text-white bg-orange-500 focus:ring-4 mx-1.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                Admin
              </button>
            </Link> */}

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
            <ul style={{ backgroundColor: "#121212" }} className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">
                  Placements
                </Link>
              </li>


              <li>
                < Link to="/about" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ height: "60px" }}></div>
    </>
  );
}
