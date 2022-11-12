import React from 'react'

import "../../css/app.css"
const UnderConstruction = () => {
  return (
    <div >
     <main class="h-screen w-full flex flex-col justify-center items-center "  style={{
                    background: "linear-gradient(to right, #2A2A72, #009FFD)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100vw",
                }}>
	<h1 class="text-9xl font-extrabold text-white tracking-widest">	Site under construction</h1>
	
  <a href = "/dashboard" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Go Home 
          </a>
</main>
    </div>
  )
}

export default UnderConstruction