import React from 'react'

const GuestSpeakerForm = () => {
  return (
    <div id="bg">
    <div class="max-w-2xl mx-auto bg-slate-200 p-5 mt-5">
      <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
         <h3 class="text-lg text-white">Guest Speaker Form</h3>
      </div>
      <form >
         <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
               <label for="name" class="block mb-2 text-black font-bold">Full Name</label>
               <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
               <label for="email" class="block mb-2 text-black font-bold">Email</label>
               <input type="email" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
               <label for="mobile" class="block mb-2 text-black font-bold">Mobile Number</label>
               <input type="tel" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
                <label for="method" class="block mb-2 text-black font-bold">Orientation Approach</label>
                <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
                  <option selected>Orientation Approach</option>
                  <option >Guest Speaker</option>
                  <option>Workshops</option>
                </select>
            </div>
            
            <div>
               <label for="expertise" class="block mb-2 text-black font-bold">Availability From</label>
               <input type="date" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>

            <div>
               <label for="expertise" class="block mb-2 text-black font-bold">Availability To</label>
               <input type="date" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>

            
      
         </div>

         <div>
            <label for="experience" class="block mb-2 text-black font-bold">Expected Audience </label>
            <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
         </div>

         <div>
            <label for="concern" class="block mt-5 mb-2 text-black font-bold">Do you have any specific concerns you'd want us to be aware of?</label>
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

export default GuestSpeakerForm