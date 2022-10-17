import React from 'react'
import Posts from './Posts'
import TrendingPosts from './TrendingPosts'
import UserPosts from './UserPosts'

const Dashboard = () => {
  return (
    <div style = {{marginTop : "7rem"}}>
      <div class="flex flex-col flex-1">
        
        <main class="pb-16 overflow-y-auto">
  <div class="block md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 ">
   <div class="col-span-2">
      <div class="pt-10">
        <Posts /> 
  </div>
  
  
              <div class=" mt-5">
      <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 mb-5 bg-slate-200">
            <TrendingPosts />
     </div>
            <UserPosts />        
              </div>
        
  <div class="py-5 ">  
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div class="h-full flex flex-col justify-center space-y-4">
                <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span>NEWSSSSSSSS Lorem ipsum dolor sitt provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
              </div>
            </div>
  
            <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600"> <span class="font-serif">"</span>NEWSSSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
               
              </div>
            </div>
            <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600"> <span class="font-serif">"</span> NEWSSSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
               
              </div>
            </div>
          </div>
      </div>
  </div>
  <section class="text-gray-600 body-font">
  <div class="container p-2 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Success Story</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk .</p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                  <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"/>
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                      <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Success Story</h1>
                      <p class="leading-relaxed mb-3">Photo booth fam kinfolk .</p>
                      <div class="flex items-center flex-wrap ">
                        <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</button>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog"/>
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                      <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Success Story</h1>
                      <p class="leading-relaxed mb-3">Photo booth fam kinfolk .</p>
                      <div class="flex items-center flex-wrap ">
                        <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                       
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
  
  
  
   </div>
    <div class="hidden md:block lg:block py-8 rounded-lg sticky h-4 ml-4 mr-4 mt-2">
    <div class="max-w-2xl mx-auto">
    <form>   
          <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg dark:bg-white" placeholder="Search...." />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
      </form>
  </div>
    <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-2">
      <div class="flex items-center justify-center">
    <h2 class="text-black text-lg font-semibold">Job Offers</h2>
      </div>
     
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" class="" alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" class="w-32 " alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png" class="w-32 " alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png" class="w-32 " alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg" class="w-32" alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg" class="w-32" alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg" class="w-20" alt=""/>
              </div>
              <div class="p-4">
                  <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png" class="w-24" alt=""/>
              </div>
          </div>
      <div class="flex items-center justify-center">
    <a  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href = "/jobs">View Openings</a>
      </div>
  </div>
  
  
  <a href="#" class="mt-3 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Mentorship Program</h5>
      <p class="font-medium">Be a mentor to provide support and feedback or Register as a mentee to seek help and career guidance from your alumni.</p>
      <div class="flex items-center justify-center">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register as Mentor/Mentee</button>
      </div>
  </a>
  
  <div class="max-w-2xl mx-auto mt-3">
    <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 border-gray-200">
      <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold leading-none text-black">Suggestions</h3>
     </div>
     <div class="flow-root">
          <ul role="list">
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-black truncate">
                              20EUMT076 SRIRAM.K
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-700">
                              Student at Sri Krishna College of 
                          </p>
                      </div>
                  </div>
              </li>
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-black truncate">
                          20EUMT083 VARUN 
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-700">
                              Student at Sri Krishna College of 
                          </p>
                      </div>
                  </div>
              </li>
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-black truncate">
                          VASUDEVAN 
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-700">
                              Student at Sri Krishna College of 
                          </p>
                      </div>
                  </div>
              </li>
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-black truncate">
                          Elango C 
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-700">
                              Student at Sri Krishna College of 
                          </p>
                      </div>
                  </div>
              </li>
              <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-black truncate">
                              Poorva Santhiya
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-700">
                              Student at Sri Krishna College of 
                          </p>
                      </div>
                  </div>
              </li>
             
          </ul>
     </div>
  </div>
  </div>
  
  
  <div class="flex flex-col items-center justify-center mt-3">
   <div class="w-full max-w-md px-7 py-5 mx-auto bg-white rounded-2xl shadow-md border border-gray-100">
         <span class="text-center font-bold">
  
          <h2 class="text-blue-600">
              Popular Members
          </h2>
      </span>
          <div class="flex flex-col mt-2">
              <div class="flex">
                  <ul class="flex items-center justify-center space-x-2">
                      <li class="flex flex-col items-center space-y-2">
                          <div class="story-ring flex justify-center items-center
                                  bg-gradient-to-tl from-yellow-200 to-orange-500 
                                  rounded-full relative cursor-pointer
                                  hover:from-orange-300 hover:to-red-400
                                  transition-all duration-150 delay-100">
                              <a class="block bg-white p-1 rounded-full" href="#">
                                  <img class="w-16 rounded-full"
                                      src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                              </a>
  
                              <button class="absolute transition duration-500 bg-white
                                      h-8 w-8 rounded-full text-white border-2 
                                      border-white flex justify-center items-center opacity-80
                                      hover:opacity-60">
                              </button>
  
                              <i class="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                          </div>
                          <span class="story-text font-medium">
                              You
                          </span>
                      </li>
                      <li class="flex flex-col items-center space-y-2">
                          <div class="story-ring flex justify-center items-center
                                  bg-gradient-to-tl from-yellow-200 to-orange-500 
                                  rounded-full relative cursor-pointer
                                  hover:from-orange-300 hover:to-red-400
                                  transition-all duration-150 delay-100">
                              <a class="block bg-white p-1 rounded-full" href="#">
                                  <img class="w-16 rounded-full"
                                      src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                              </a>
                          </div>
                          <span class="story-text">
                              jett
                          </span>
                      </li>
                      <li class="flex flex-col items-center space-y-2">
                          <div class="story-ring flex justify-center items-center
                                  bg-gradient-to-tl from-yellow-200 to-orange-500 
                                  rounded-full relative cursor-pointer
                                  hover:from-orange-300 hover:to-red-400
                                  transition-all duration-150 delay-100">
                              <a class="block bg-white p-1 rounded-full" href="#">
                                  <img class="w-16 rounded-full"
                                      src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                              </a>
                          </div>
                          <span class="story-text">
                              sky
                          </span>
                      </li>
                      <li class="flex flex-col items-center space-y-2">
                          <div class="story-ring flex justify-center items-center
                                  bg-gradient-to-tl from-yellow-200 to-orange-500 
                                  rounded-full relative cursor-pointer
                                  hover:from-orange-300 hover:to-red-400
                                  transition-all duration-150 delay-100">
                              <a class="block bg-white p-1 rounded-full" href="#">
                                  <img class="w-16 rounded-full"
                                      src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                              </a>
                          </div>
                          <span class="story-text">
                              omen
                          </span>
                      </li>
                      <li class="flex flex-col items-center space-y-2">
                          <div class="story-ring flex justify-center items-center
                                  bg-gradient-to-tl from-yellow-200 to-orange-500 
                                  rounded-full relative cursor-pointer
                                  hover:from-orange-300 hover:to-red-400
                                  transition-all duration-150 delay-100 
                                  hover:animate-pulse">
                              <a class="block bg-white p-1 rounded-full" href="#">
                                  <img class="w-16 rounded-full"
                                      src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"/>
                              </a>
                          </div>
                          <span class="story-text">
                              sage
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  
  
  
  
    </div>
  </div>
          </main>
        </div>
    </div>
  )
}

export default Dashboard
