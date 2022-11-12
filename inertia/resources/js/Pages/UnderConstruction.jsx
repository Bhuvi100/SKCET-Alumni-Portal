import React from 'react'

import "../../css/app.css"
const UnderConstruction = () => {
  return (
    <div >
     <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">	Site under construction</h1>
	
	<button class="mt-5 ">
      <a
        class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block text-lg px-8 py-3 bg-[#1A2238] border border-current">
          <a href="/dashboard">Go Home</a>
        </span>
      </a>
    </button>
</main>
    </div>
  )
}

export default UnderConstruction