import React from 'react'
import '../../css/app.css'
import { useState } from 'react';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const MentorForm = (props) => {

  const { data, setData, errors, post } = useForm({

    excelFile : null,
});

function handleSubmit(e) {
   e.preventDefault();
   post(route("uploadUsers", {
     onSuccess: (res) => {
       console.log(
         "sucessfull"
       );
     }
   }));
}


  return (
    <div id="bg">
    <div class="max-w-2xl mx-auto bg-slate-200 p-5 mt-5">
      <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
         <h3 class="text-lg text-white">User data import</h3>
      </div>
      <form onSubmit={handleSubmit} >
                    <div>
                    <label for="ExcelFile" class="block mb-2 text-black font-bold">Upload Excel File </label>
                        <input name="ExcelFile" type="file" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            //value={data.ExcelFile}
                            onChange={(e) =>
                                setData("excelFile", e.target.files[0])
                            }
                            />
                    
                    </div>
      
         <div class="flex items-center justify-center">
               <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
         </div>
      </form>
    </div>
    </div>
  )
}

export default MentorForm