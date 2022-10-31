import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class = "mx-10">
     <div className="px-8 py-2 mx-auto sm:max-w-xl md:max-w-full sm:px-12  md:px-24 lg:px-5 fixed w-full z-30 top-0 text-white" id="header"  style={{  background: "linear-gradient(to right, #2A2A72, #009FFD)", position:"fixed" , top:"0" , left:"0" , width : "100vw"}}>
        <div className="relative flex items-center justify-between">
        <div class="pl-4 flex items-center" >
          <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
            LinkUP
          </a>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            {/* <li class="mr-3">
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/members">Members</a>
            </li> */}
            <li class="mr-3">
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/gallery">Gallery</a>
            </li>
            <li class="dropdown">
              <button class="dropbtn">Services</button>
              <div class="dropdown-content">
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/generalQuery">General Queries</a>
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/mediumofinstruction">Medium of Instruction Form</a>
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="https://www.skcet.ac.in/pdf/coe/APPLICATION_FOR_TRANSCRIPTS_2021.pdf" target="blank">Academic Transcript Form</a>
              </div>
            </li>

            <li class="mr-3">
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/objectives">Objectives</a>
            </li>

            <div class="dropdown">
              <button class="dropbtn">Giving Back
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/mentorForm">Mentor</a>
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/guestspeaker">Guest Speaker</a>
              <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/job">Job Opportunities</a>
              
              </div>
            </div>
          </ul>
          <a
            href = "/login"
            id="navAction"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Login
          </a>
          
        </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div
                    style={{ fontFamily: "Montserrat" }}
                    className="flex items-center justify-between mb-4"
                  >
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Link Up
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/objectives"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                         Objectives
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Us  
                        </a>
                      </li>
                      <li>
                        <a
                          href="/queries"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          General Queries Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="/transcriptform"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Academic Transcript Form
                        </a>
                      </li>

                      <li>
                        <a
                          href="/mediumofinstruction"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Medium of Instruction Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded flex items-center justify-center"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar