import React from 'react'

const Posts = () => {
  
  return (
    <div>
      <form class="bg-white shadow rounded-lg mb-5 p-4 w-full md:w-full">
    <h2 class="mb-1 font-medium mb-3">Start a post</h2>
    <input type = "text" name = "head" placeholder = "Enter Title" class=" focus:outline-none  w-full rounded-lg p-2 mb-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" />
              <textarea name="message" placeholder="Type something..." class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"></textarea>
              <footer class="flex justify-between mt-2">
                  <div class="flex gap-2">
                   
                          <label class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                          <input type="file" accept=".png, .jpg, .jpeg" class="hidden"></input>
                          </label>
                      
                          <label class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          <input type="file" accept=".png, .jpg, .jpeg" class="hidden"></input>
                      </label>
                      <span>
                      
                        <label >
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                        <input type="file" accept=".png, .jpg, .jpeg" class="hidden"></input>
                        </label>
                   
                      </span>
                  </div>
                  <button class="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg                 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
  ">Post
                      <svg class="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
              </footer>
          </form>
    </div>
  )
}

export default Posts