import React from 'react'
import reactImg from "../reactImg.png"
import Navbar from './Navbar';
import HomeNav from '../components/HomeNav';

const JobOpportunities = () => {
  return (
    <div>
      <HomeNav />
       <div className="px-4 mt-36  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
       <h1 className={"mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center"}>
              Job
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
                Opportunities
              </span>
              <div className=""></div>
            </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <div class="relative mx-auto w-full">
        <div class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div class="shadow p-4 rounded-lg bg-white">
          <div class="mt-4">
            <h2 class="font-medium text-lg md:text-xl text-gray-800 line-clamp-1" title="New York">
            React Developer
            </h2>
            <p class="mt-2 text-base text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
            Third Storage Inc.,
            </p>
          </div>

          <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-8">
            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span class="mt-2 xl:mt-0 text-base font-medium">
              Workplace Type
              <br />
              <span class="mt-2 xl:mt-0 text-base font-normal">
              On-Site
            </span>
            </span>
            </p>
            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span class="mt-2 xl:mt-0 text-base font-medium">
              Location
              <br />
              <span class="mt-2 xl:mt-0 text-base font-normal">
              Banglore
            </span>
            </span>
            </p>
            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span class="mt-2 xl:mt-0 text-base font-medium">
              Employement Type
              <br />
              <span class="mt-2 xl:mt-0 text-base font-normal">
              Student Intern
            </span>
            </span>
            </p>
            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span class="mt-2 xl:mt-0 text-base font-medium">
              Experience
              <br />
              <span class="mt-2 xl:mt-0 text-base font-normal">
              Not Required
            </span>
            </span>
            </p>
            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span class="mt-2 xl:mt-0 text-base font-medium">
              Salary
              <br />
              <span class="mt-2 xl:mt-0 text-base font-normal">
              Not Disclosed
            </span>
            </span>
            </p>
          </div>
          <div>
          <p class="mt-5 text-gray-800">
            <span class="mt-2 xl:mt-0 text-base font-normal">
            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.
            </span>
            </p>
          </div>

          <div class="grid grid-cols-2 mt-8">
            <div class="flex items-center">
            <a href='https://www.w3schools.com/tags/att_href.asp#:~:text=For%20and%20%3Carea,often%20a%20style%20sheet%20file).' target="_blank">
            <button type="button" class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Info</button>
            </a>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default JobOpportunities