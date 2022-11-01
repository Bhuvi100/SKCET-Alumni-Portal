import React from 'react'
import IndexFooter from './IndexFooter'
import Navbar from './Navbar'

const Gallery = () => {
  return (
    <div>
      <div>
        <Navbar />
        <h1 class="mt-28 text-center font-bold py-10 text-3xl italic">Capture it,
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
        Remember it !
        </span>
        </h1>

        <div class="container lg:px-32 px-4 py-8 mx-auto items-center ">
          <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-4">
            <div class="w-full row-span-2">
              <img
                src="/assets/Gallery/0.jpeg"
                class="h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full col-span-2 row-span-2">
              <img
                src="/assets/Gallery/2.jpeg"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full ">
              <img
                src="/assets/Gallery/3.jpeg"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full">
              <img
                src="/assets/Gallery/4.jpeg"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full col-span-2 row-span-2">
              <img
                src="/assets/Gallery/1.jpeg"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
           
            <div class="w-full">
              <img
                src="assets/Gallery/6.jpeg"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
          </div>
        </div>
        <IndexFooter />
        </div>
    </div>
  )
}

export default Gallery
