import React from 'react'
import { useState } from 'react'
const Modal = () => {
   const [showModal, setShowModal] =useState(false)
  const [pid,setPid] = useState(0)
  const [liked,setLiked] = useState('none')
  const arr = [{"id" : 1, "description" : "Heloo 1", "title" : "OPost1 "},{"id" : 2,  "description" : "Heloo 2", "title" : "OPost2 "}]
  const ara = [
    {"id":6,"user_id":1,"post_id":2,"comment_id":null,"description":"wooow nice post",replies : [{"id":7,"user_id":1,"post_id":2,"comment_id":6,"description":"yup good one","created_at":null,"updated_at":null},{"id":8,"user_id":1,"post_id":2,"comment_id":6,"description":"ohh","created_at":null,"updated_at":null},],"created_at":null,"updated_at":null},
    {"id":123,"user_id":1,"post_id":2,"comment_id":null,"description":"wooow 2nd nice post","created_at":null,"updated_at":null},
  {"id":10,"user_id":1,"post_id":2,"comment_id":9,"description":"not bad", replies : [{"id":7,"user_id":1,"post_id":2,"comment_id":6,"description":"yup good one","created_at":null,"updated_at":null},{"id":8,"user_id":1,"post_id":2,"comment_id":6,"description":"ohh","created_at":null,"updated_at":null},],"created_at":null,"updated_at":null},
  {"id":11,"user_id":1,"post_id":2,"comment_id":null,"description":"wooow nice post", replies : [{"id":7,"user_id":1,"post_id":2,"comment_id":6,"description":"yup good one","created_at":null,"updated_at":null},{"id":8,"user_id":1,"post_id":2,"comment_id":6,"description":"ohh","created_at":null,"updated_at":null},{"id":8,"user_id":1,"post_id":2,"comment_id":6,"description":"ohh Great","created_at":null,"updated_at":null},],"created_at":null,"updated_at":null},
]

  return (
    <div>
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
                        <input class="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" defaultValue={arr[showModal].title} placeholder="Title" type="text"/>
                        <textarea class="w-96 bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here" >{arr[showModal].description}</textarea>
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
    </div>
  )
}

export default Modal