import React from 'react'
import { useState } from 'react';
const SuccessStoriesForm = () => {

  

  return (
    <div id="bg">
  
    <div class="max-w-2xl mx-auto bg-slate-200 p-5 mt-5">
  <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
       <h3 class="text-lg text-white">Share your Success Stories</h3>
     </div>
 <form >
       
 
   <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
       <div>
           <label for="Full Name" class="block mb-2 text-black font-bold"> Name</label>
           <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
       </div>
       
        <div>
           <label for="Mob" class="block mb-2 text-black font-bold">Mobile Number</label>
           <input type="tel" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
       </div>
       <div>
           <label for="email" class="block mb-2 text-black font-bold">Achievement Title</label>
           <input type="email" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
       </div>
        <div>
           <label for="job" class="block mb-2 text-black font-bold">Description</label>
           <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
       </div>
         <div>
           <label for="dept" class="block mb-2 text-black font-bold">Category</label>
           <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
 <option selected>Choose Category</option>
 <option >National</option>
 <option >International</option>


</select>           </div>


<div>
       <label for="loc" class="block mb-2 text-black font-bold">Date of Achievement</label>
           <input type="date" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
     
       </div>

       <div>
           <label for="dept" class="block mb-2 text-black font-bold">Videos</label>
           <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />       
           </div>


<div>
       <label for="loc" class="block mb-2 text-black font-bold">Snapshots</label>
           <input type="file" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
     
       </div>
      
       </div>

       
      
       <div>
       
     
       </div>
       
   <div class="flex items-center justify-center">
   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
   </div>
</form>
</div>
   </div>
  )
}

export default SuccessStoriesForm