import React from 'react'
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const Posts = () => {

  const { data, setData, errors, post } = useForm({
    title: "",
    description: "",
 });
 
 function handleSubmit(e) {
    e.preventDefault();
    post(route("addPost"), {
      onSuccess: (res) => {
        console.log(
          "sucessfull"
        );
      }
    });
 }

  return (
    <div>
      <form class="bg-white shadow rounded-lg mb-5 p-4 w-full md:w-full"  onSubmit={handleSubmit}>
    
    <h2 class="mb-1 font-medium mb-3">Start a post</h2>
    <input type = "text" name = "title" placeholder = "Enter Title" class=" focus:outline-none  w-full rounded-lg p-2 mb-3 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" 
                onChange={(e) =>
                  setData("title", e.target.value)
              }
    />
              <textarea name="description" placeholder="Type something..." class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                  onChange={(e) =>
                    setData("description", e.target.value)
                } 
                  ></textarea>
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
                  <button type="submit" class="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg                 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
  ">Post
                      <svg class="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
              </footer>
          </form>
    </div>
  )
}

export default Posts