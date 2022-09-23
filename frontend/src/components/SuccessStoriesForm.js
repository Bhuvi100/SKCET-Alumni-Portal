import React from 'react'
import { useState } from 'react';
const SuccessStoriesForm = () => {

  

  return (
    <div id="bg"class="pt-12">
  
  <div class="max-w-2xl  mx-auto bg-white p-5 rounded-lg shadow-inner border-solid border-2 border-gray-100">
  <div class="font-lg mb-2 mt-5" style = {{display : "flex", justifyContent : "center" ,alignItems : "center"}}>
  <h4 class="text-2xl font-semibold mt-4 mb-4 pb-1">SUCCESS
         <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">STORIES</span>
    </h4>
  </div>
  <form >
 
   <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
       <div>
           <label for="Full Name" class="block mb-2 text-black dark:text-gray-900"> Name</label>
           <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
       </div>
       
        <div>
           <label for="Mob" class="block mb-2 text-black dark:text-gray-900">Mobile Number</label>
           <input type="tel" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
       </div>
       <div>
           <label for="email" class="block mb-2 text-black dark:text-gray-900">Achievement Title</label>
           <input type="email" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
       </div>
        <div>
           <label for="job" class="block mb-2 text-black dark:text-gray-900">Description</label>
           <textarea id="message" rows="4" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" placeholder="Your message..."></textarea>
       </div>
         <div>
           <label for="dept" class="block mb-2 text-black dark:text-gray-900">Category</label>
           <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
 <option selected>Choose Category</option>
 <option >National</option>
 <option >International</option>


</select>           </div>


<div>
       <label for="loc" class="block mb-2 text-black dark:text-gray-900">Date of Achievement</label>
           <input type="date" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
     
       </div>

       <div>
           <label for="dept" class="block mb-2 text-black dark:text-gray-900">Videos</label>
           <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />       
           </div>


<div>
       <label for="loc" class="block mb-2 text-black dark:text-gray-900">Snapshots</label>
           <input type="file" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" />
     
       </div>
      
       </div>

       
      
       <div>
       
     
       </div>
       
       <div class="flex items-center justify-center">
         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center" style={{ background: "linear-gradient(to right, #2A2A72, #009FFD)" }}>SUBMIT</button>
      </div>
</form>
</div>
   </div>
  )
}

export default SuccessStoriesForm