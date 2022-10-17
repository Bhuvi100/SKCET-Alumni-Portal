import React from 'react'
import { useState } from 'react'

const UserPosts = () => {

  const [com,setCom] = useState(false)
  const [showModal, setShowModal] =useState(false)
  
  return (
    <div>
        <div class="bg-white shadow rounded-lg pb-4 mt-7">
                  <div class="flex flex-row px-2 py-3 mx-3">
                      <div class="w-auto h-auto rounded-full border-2 border-green-500">
                          <img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"/>
                      </div>
                      <div class="flex flex-col mb-2 ml-4 mt-1">
                          <div class="flex text-gray-600 text-sm font-semibold"><span class="flex-1 flex-shrink-0">Sara_Lauren</span>
                          <span class="mx-1 flex-1 flex-shrink-0"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="21. Verified" id="_21._Verified"><path d="M22.51,13.76a3,3,0,0,1,0-3.52l.76-1.05a1,1,0,0,0,.14-.9,1.018,1.018,0,0,0-.64-.64l-1.23-.4A2.987,2.987,0,0,1,19.47,4.4V3.1a1,1,0,0,0-1.31-.95l-1.24.4a3,3,0,0,1-3.35-1.09L12.81.41a1.036,1.036,0,0,0-1.62,0l-.76,1.05A3,3,0,0,1,7.08,2.55l-1.24-.4a1,1,0,0,0-1.31.95V4.4A2.987,2.987,0,0,1,2.46,7.25l-1.23.4a1.018,1.018,0,0,0-.64.64,1,1,0,0,0,.14.9l.76,1.05a3,3,0,0,1,0,3.52L.73,14.81a1,1,0,0,0-.14.9,1.018,1.018,0,0,0,.64.64l1.23.4A2.987,2.987,0,0,1,4.53,19.6v1.3a1,1,0,0,0,1.31.95l1.23-.4a2.994,2.994,0,0,1,3.36,1.09l.76,1.05a1.005,1.005,0,0,0,1.62,0l.76-1.05a3,3,0,0,1,3.36-1.09l1.23.4a1,1,0,0,0,1.31-.95V19.6a2.987,2.987,0,0,1,2.07-2.85l1.23-.4a1.018,1.018,0,0,0,.64-.64,1,1,0,0,0-.14-.9Zm-5.8-3.053-5,5a1,1,0,0,1-1.414,0l-3-3a1,1,0,1,1,1.414-1.414L11,13.586l4.293-4.293a1,1,0,0,1,1.414,1.414Z"/></g></svg></span>
                          <button onClick={() => setShowModal(true) }><small>Edit</small></button>
                          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create a post
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    </span>
                  </button>
                </div>
                {/*body*/}
                    <div class="editor mx-auto w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl ">
                        <input class="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" value="User's Random Post" placeholder="Title" type="text"/>
                        <textarea class="w-96 bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here" value="Love and gratitude to both The Prime Minister, The Honorable Mia Amor Mottley and our President, Her Excellency The Most Honorable Dame Sandra Mason for trusting me with this honor!"></textarea>
                    </div>

                    <div class="icons flex text-gray-500 m-2">
                        <label>
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                        <input type="file" accept=".png, .jpg, .jpeg" class="hidden"></input>
                        </label>
                    </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => setShowModal(false)}>Close </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => setShowModal(false)}>Save Changes </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                          </div>
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
                          <button class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center" onClick = {() => setCom(!com)}>Comments:<div class="ml-1 text-gray-400 text-ms"> 30</div></button>
                          <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div class="ml-1 text-gray-400 text-ms"> 60k</div></div>
                      </div>
                  </div>
                  {com && <section class="relative flex items-center justify-center p-3 antialiased bg-white bg-gray-100 min-w-screen">
    <div class="container px-0 mx-auto sm:px-5">

        <div
            class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 ">
            <div class="flex flex-row " >
                <img class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full" alt="Noob master's avatar"
                    src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                <div class="flex-col mt-1">
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">Noob master
                        <span class="ml-2 text-xs font-normal text-gray-500">2 weeks ago</span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Wow!!! how you did you
                        create this?
                    </div>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                            viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                fill-rule="nonzero" />
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <hr class="my-2 ml-16 border-gray-200" />
            <div class="flex flex-row pt-1 md-10 md:ml-16">
                <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Emily's avatar"
                    src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                <div class="flex-col mt-1" >
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">Emily
                        <span class="ml-2 text-xs font-normal text-gray-500">5 days ago</span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">I created it using
                        TailwindCSS
                    </div>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                            viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                fill-rule="nonzero" />
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div
            class="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200">
            <div class="flex flex-row md-10">
                <img class="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                <div class="flex-col mt-1">
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                        <span class="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have
                        to learn more about Tailwind.
                    </div>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                            viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                fill-rule="nonzero" />
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>
</section>
}
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
    </div>
  )
}

export default UserPosts