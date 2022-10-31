import React from 'react'

const JobForm = () => {
  return (
    <div id="bg" class="pt-6">
    <div class="max-w-2xl  mx-auto bg-white p-5 rounded-lg shadow-inner border-solid border-2 border-gray-100">
      <div class="font-lg mb-2 mt-5" style = {{display : "flex", justifyContent : "center" ,alignItems : "center"}}>
      <h4 class="text-2xl font-semibold mt-4 mb-4 pb-1">JOB
         <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">OPPORTUNITIES</span>
      </h4>
      </div>
      <form >
         <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
               <label for="title" class="block mb-2 text-black dark:text-gray-900">Job Title</label>
               <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
               <label for="company" class="block mb-2 text-black dark:text-gray-900">Company</label>
               <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label for="workplace" class="block mb-2 text-black dark:text-gray-900">WorkPlace Type</label>
                <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                  <option selected>Select Type</option>
                  <option >On-Site</option>
                  <option>Hybrid</option>
                  <option>Remote</option>
                </select>
            </div>
            <div>
               <label for="location" class="block mb-2 text-black dark:text-gray-900">Job Location</label>
               <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label for="workplace" class="block mb-2 text-black dark:text-gray-900">Employment Type</label>
                <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
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
                <label for="experience" class="block mb-2 text-black dark:text-gray-900">Experience</label>
                <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label for="skills" class="block mb-2 text-black dark:text-gray-900">Skills</label>
                <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label for="description" class="block mb-2 text-black dark:text-gray-900">Tools</label>
                <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
         </div>
         <div>
                <label for="description" class="block mb-2 text-black dark:text-gray-900">Job Description</label>
                <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
                <label for="description" class="block mt-2 mb-2 text-black dark:text-gray-900">Link</label>
                <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
        <br />
        <div class="flex items-center justify-center">
         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center" style={{ background: "linear-gradient(to right, #2A2A72, #009FFD)" }}>SUBMIT</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default JobForm
