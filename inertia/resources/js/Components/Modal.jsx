import React from 'react'
import { useState,useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { Link } from "@inertiajs/inertia-react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
// import axios from '../utils/axios';
import axios from '@/utils/axios';

const Modal = (props) => {
   
    const { data, setData, setDefaults, errors, post, reset, transform } = useForm({
        title: props.data.title,
        description:props.data.description
     });
     
     function handleSubmit(e) {
      e.preventDefault();

    
       console.log(props.data.title)
       console.log(props.data.pid);
        
        post(route('updatePost',`${props.data.id}`, {
          onSuccess: (res) => {
            console.log(
              "sucessfull"
            );
        onFinish: () => props.setShowModal(false);
    
          }
        }));
        console.log(pid);
        
      }
  return (
    <div>
        

        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}



        <form onSubmit={handleSubmit} >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
            
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update post
                  </h3>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)
                    }>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    </span>
                  </button> */}
                </div>
                {/*body*/}
                {}
                    <div class="editor mx-auto w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl ">
                        <input class="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false"  placeholder="Title" type="text"
                        name="title"
                        onChange={(e) => {
                          setData("title", e.target.value)
                          console.log(dtitle + ddescription) }
                         }
                         defaultValue={props.data.title}
                      
                        />
                        <textarea class="w-96 bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here" 
                        name="description" defaultValue ={props.data.description}
                        onChange={(e) =>
                          setData("description", e.target.value)
                         }
                         ></textarea>
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
                    type="button" onClick={() => props.setShowModal(false)}>Close </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit" 
                    >Save Changes </button>
                </div>
              </div>
       </form>


            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    
    </div>
  )
}

export default Modal