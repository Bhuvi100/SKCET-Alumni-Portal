import React from 'react'

const MentorForm = () => {
  return (
    <div id="bg" class="pt-12">
    <div class="max-w-2xl  mx-auto bg-white p-5 rounded-lg shadow-inner border-solid border-2 border-gray-100">
      <div class="font-lg mb-2 mt-5" style = {{display : "flex", justifyContent : "center" ,alignItems : "center"}}>
      <h4 class="text-2xl font-semibold mt-4 mb-4 pb-1">GENERAL
         <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">QUERIES</span>
      </h4>
      </div>
      <form >
         <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
               <label for="name" class="block mb-2 text-black dark:text-gray-900">Full Name</label>
               <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
               <label for="email" class="block mb-2 text-black dark:text-gray-900">Email</label>
               <input type="email" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
               <label for="mobile" class="block mb-2 text-black dark:text-gray-900">Mobile Number</label>
               <input type="tel" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label for="method" class="block mb-2 text-black dark:text-gray-900">Method Of Guidance</label>
                <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                  <option selected>Select Method</option>
                  <option >In Person</option>
                  <option>Virtual</option>
                </select>
            </div>
            <div>
               <label for="department" class="block mb-2 text-black dark:text-gray-900">Department</label>
               <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                  <option selected>Choose the department</option>
                  <option>B.Tech Artificial Intelligence and Data Science</option>
                  <option>B.E. Civil Engineering</option>
                  <option>B.E. Computer Science and Engineering</option>
                  <option>B.E. Computer Science and Engineering (Cyber Security) </option>
                  <option>B.E. Computer Science and Design</option>
                  <option>B.E. Electrical and Electronics Engineering</option>
                  <option>B.E. Electronics and Communication Engineering</option>
                  <option>B.E. Mechanical Engineering</option>
                  <option>B.E. Mechatronics Engineering</option>
                  <option>B.Tech Information Technology</option>
                  <option>B.Tech Computer Science and Business Systems (Powered by TCS)</option>
                  <option>M.Tech. Computer Science and Engineering (Powered by Virtusa)</option>
               </select>
            </div>
            <div>
               <label for="expertise" class="block mb-2 text-black dark:text-gray-900">Area Of Expertise</label>
               <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
         </div>
         <div>
            <label for="experience" class="block mb-2 text-black dark:text-gray-900">Briefly describe prior experience you have with mentoring. </label>
            <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
         </div>
         <div>
            <label for="concern" class="block mb-2 text-black dark:text-gray-900">Do you have any specific concerns you'd want us to be aware of?</label>
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

export default MentorForm