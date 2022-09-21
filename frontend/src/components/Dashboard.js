import React from 'react'

const Dashboard = () => {
  return (
    <div style = {{marginTop : "7rem"}}>
      <div class="flex flex-col flex-1">
        
        <main class="pb-16 overflow-y-auto">
  <div class="block md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 ">
   <div class="col-span-2">
      <div class="pt-10">
  <form class="bg-white shadow rounded-lg mb-5 p-4 w-full md:w-full">
    <h2 class="mb-1 font-medium ">Start a post</h2>
              <textarea name="message" placeholder="Type something..." class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"></textarea>
              <footer class="flex justify-between mt-2">
                  <div class="flex gap-2">
                      <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                      </span>
                      <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </span>
                      <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
                      </span>
                  </div>
                  <button class="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg                 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
  ">Post
                      <svg class="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
              </footer>
          </form>
  </div>
  
  
  <section class="max-w-4xl mx-auto sm:px-6 lg:px-4 bg-white">
     
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div>
                  <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
              </div>
              <div class="text-center">
                  <p class="text-xl text-gray-700 font-bold mb-2">Star Alumini</p>
                  <p class="text-base text-gray-400 font-normal">Software Engineer</p>
              </div>
          </div>
          <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
              <div>
                  <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
              </div>
              <div class="text-center">
                  <p class="text-xl text-gray-700 font-bold mb-2">Star Alumini </p>
                  <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
              </div>
          </div>
          <div class="w-full bg-white rounded-lg flex flex-col justify-center items-center">
              <div >
                  <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo"/>
              </div>
              <div class="text-center">
                  <p class="text-xl text-gray-700 font-bold mb-2">Star Alumini</p>
                  <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
          </div>
        
        
      </div>
  </section>
  
              <div class=" mt-5">
      <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 mb-5 bg-slate-200">
          <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
              <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 h-64">
                  <div class=" space-y-4">
                      <h3 class="text-2xl font-semibold text-blue-700">Trending Post</h3>
                      <p >Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur us.</p>
                      <a href="#" class="block font-medium text-blue-600">Know more</a>
                  </div>
              </div>
              <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 h-64">
                  <div class=" space-y-4">
                      <h3 class="text-2xl font-semibold text-blue-700">Trending Post</h3>
                      <p >Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur us.</p>
                      <a href="#" class="block font-medium text-blue-600">Know more</a>
                  </div>
              </div>
              <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 h-64">
                  <div class=" space-y-4">
                      <h3 class="text-2xl font-semibold text-blue-700">Trending Post</h3>
                      <p >Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur us.</p>
                      <a href="#" class="block font-medium text-blue-600">Know more</a>
                  </div>
              </div>
          </div>
      </div>
                 
              </div>
          <div class="bg-white shadow rounded-lg pb-4 mt-7">
                  <div class="flex flex-row px-2 py-3 mx-3">
                      <div class="w-auto h-auto rounded-full border-2 border-green-500">
                          <img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"/>
                      </div>
                      <div class="flex flex-col mb-2 ml-4 mt-1">
                          <div class="flex text-gray-600 text-sm font-semibold"><span class="flex-1 flex-shrink-0">Sara_Lauren</span>
                          <span class="mx-1 flex-1 flex-shrink-0"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="21. Verified" id="_21._Verified"><path d="M22.51,13.76a3,3,0,0,1,0-3.52l.76-1.05a1,1,0,0,0,.14-.9,1.018,1.018,0,0,0-.64-.64l-1.23-.4A2.987,2.987,0,0,1,19.47,4.4V3.1a1,1,0,0,0-1.31-.95l-1.24.4a3,3,0,0,1-3.35-1.09L12.81.41a1.036,1.036,0,0,0-1.62,0l-.76,1.05A3,3,0,0,1,7.08,2.55l-1.24-.4a1,1,0,0,0-1.31.95V4.4A2.987,2.987,0,0,1,2.46,7.25l-1.23.4a1.018,1.018,0,0,0-.64.64,1,1,0,0,0,.14.9l.76,1.05a3,3,0,0,1,0,3.52L.73,14.81a1,1,0,0,0-.14.9,1.018,1.018,0,0,0,.64.64l1.23.4A2.987,2.987,0,0,1,4.53,19.6v1.3a1,1,0,0,0,1.31.95l1.23-.4a2.994,2.994,0,0,1,3.36,1.09l.76,1.05a1.005,1.005,0,0,0,1.62,0l.76-1.05a3,3,0,0,1,3.36-1.09l1.23.4a1,1,0,0,0,1.31-.95V19.6a2.987,2.987,0,0,1,2.07-2.85l1.23-.4a1.018,1.018,0,0,0,.64-.64,1,1,0,0,0-.14-.9Zm-5.8-3.053-5,5a1,1,0,0,1-1.414,0l-3-3a1,1,0,1,1,1.414-1.414L11,13.586l4.293-4.293a1,1,0,0,1,1.414,1.414Z"/></g></svg></span></div>
                          <div class="flex w-full mt-1">
                              <div class="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                  UX Design
                              </div>
                              <div class="text-gray-400 font-thin text-xs">
                                  • 1 day ago
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="border-b border-gray-100 p-4"></div>
        
                  <div class="text-gray-600 font-semibold  mb-2 mx-3 px-2">User's Random Post</div>
                  <div class="text-gray-500 text-sm mb-6 mx-3 px-2">Love and gratitude to both The Prime Minister, The Honorable Mia Amor Mottley and our President, Her Excellency The Most Honorable Dame Sandra Mason for trusting me with this honor!</div>
                  <div class="flex justify-start mb-4 border-t border-gray-100">
                      <div class="flex w-full mt-1 pt-2 pl-5">
                          <img class="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                          <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                          <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt=""/>
                          <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                      </div>
                      <div class="flex justify-end w-full mt-1 pt-2 pr-5">
                          <span class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                              </svg>
                          </span>
                          <span class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                              <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                              </svg>
                          </span>
                      </div>
                  </div>
                  <div class="flex w-full border-t border-gray-100">
                      <div class="mt-3 mx-5 flex flex-row text-xs">
                          <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div class="ml-1 text-gray-400 text-ms"> 30</div></div>
                          <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div class="ml-1 text-gray-400 text-ms"> 60k</div></div>
                      </div>
                  </div>
                  <div class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                      <img class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
                      <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                          <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                          <svg class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
  
                          </button>
                      </span>
                       <input type="search" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" placeholder="Post a comment..." autocomplete="off"/>
                  </div>
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
