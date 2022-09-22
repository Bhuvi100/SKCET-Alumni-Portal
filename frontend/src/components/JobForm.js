import React from 'react'

const JobForm = () => {
  return (
    <div id="bg" class="pt-6">
    <div class="max-w-2xl mx-auto bg-slate-200 p-5">
      <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2 mt-5">
         <h3 class="text-lg text-white">Job Opportunities Form</h3>
      </div>
      <form >
         <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
               <label for="title" class="block mb-2 text-black font-bold">Job Title</label>
               <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
               <label for="company" class="block mb-2 text-black font-bold">Company</label>
               <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
                <label for="workplace" class="block mb-2 text-black font-bold">WorkPlace Type</label>
                <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
                  <option selected>Select Type</option>
                  <option >On-Site</option>
                  <option>Hybrid</option>
                  <option>Remote</option>
                </select>
            </div>
            <div>
               <label for="location" class="block mb-2 text-black font-bold">Job Location</label>
               <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
                <label for="workplace" class="block mb-2 text-black font-bold">Employment Type</label>
                <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
                  <option selected>Select Type</option>
                  <option >Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                  <option>Temporary</option>
                  <option>Volunteer</option>
                  <option>Internship</option>
                </select>
            </div>
            <div>
                <label for="experience" class="block mb-2 text-black font-bold">Experience</label>
                <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
                <label for="skills" class="block mb-2 text-black font-bold">Skills</label>
                <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
                <label for="description" class="block mb-2 text-black font-bold">Tools</label>
                <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
         </div>
         <div>
                <label for="description" class="block mb-2 text-black font-bold">Job Description</label>
                <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
         <div class="flex items-center justify-center">
                <a href="/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Submit</a>
        </div>
      </form>
    </div>
    </div>
  )
}

export default JobForm