import React from 'react'

const Mentorship = () => {
  return (
    <div>
    <a href="#" class="mt-3 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Mentorship Program</h5>
        <p class="font-medium">Be a mentor to provide support and feedback or Register as a mentee to seek help and career guidance from your alumni.</p>
        <div class="flex items-center justify-center">
      <a href="/mentorForm" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register as Mentor/Mentee</a>
        </div>
    </a>
    </div>
  )
}

export default Mentorship
