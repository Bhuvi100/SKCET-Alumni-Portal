import React from 'react'
import "../App.css"
import { useState } from 'react';
const QueriesForm = () => {

  

  return (
    <div id="bg">
  
    <div class="max-w-2xl  mx-auto bg-slate-200 p-5 mt-5">
  <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2 mt-5" style = {{display : "flex", justifyContent : "center" ,alignItems : "center"}}>
       <h3 class="text-lg text-white">General Queries</h3>
     </div>
 <form >
       
 
   <div >
       <div>
           <label for="Full Name" class="block mb-2 text-black font-bold"> Name</label>
           <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
       </div>
       
        <div>
           <label for="Mob" class="block mb-2 text-black font-bold">Mobile Number</label>
           <input type="tel" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
       </div>
       <div>
           <label for="email" class="block mb-2 text-black font-bold">Subject</label>
           <input type="email" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
       </div>
        <div>
           <label for="job" class="block mb-2 text-black font-bold">Query</label>
           <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 mb-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post your queries..."></textarea>
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

export default QueriesForm