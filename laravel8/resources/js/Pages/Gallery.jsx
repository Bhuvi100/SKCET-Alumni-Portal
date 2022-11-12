import React from 'react'
import IndexFooter from '../Components/IndexFooter'
import Navbar from '../Components/Navbar'

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
                alt="Photo by Claudio Schwarz on Unsplash"
                class="h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full col-span-2 row-span-2">
              <img
                src="/assets/Gallery/1.jpeg"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full ">
              <img
                src="/assets/Gallery/2.jpeg"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full">
              <img
                src="/assets/Gallery/3.jpeg"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full col-span-2 row-span-2">
              <img
                src="/assets/Gallery/4.jpeg"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
           
            <div class="w-full col-span-2">
              <img
                src="/assets/Gallery/5.jpeg"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            <div class="w-full">
              <img
                src="/assets/Gallery/6.jpeg"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div>
            {/* <div class="w-full">
              <img
                src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                class="inset-0 h-full w-full object-cover object-center rounded opacity-100 scale-100 hover:scale-105 ease-in duration-300"/>
            </div> */}
          </div>
        </div>
        <IndexFooter />
        </div>
    </div>
  )
}

export default Gallery
