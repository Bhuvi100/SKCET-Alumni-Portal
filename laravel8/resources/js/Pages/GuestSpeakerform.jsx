import React from 'react'
import { useState } from 'react';
import { Inertia } from "@inertiajs/inertia";
import {Head, InertiaLink, useForm} from "@inertiajs/inertia-react";

const GuestSpeakerForm = ({auth}) => {


   const { data, setData, errors, post } = useForm({
      orientation_type: "",
      expected_audience: "",
      specific_concern: "",
      availabilityFrom: "",
      availabilityTo: "",
   });
   
   function handleSubmit(e) {
      e.preventDefault();
      post(route("guestspeakerSubmit"), {
        onSuccess: (res) => {
          console.log(
            "sucessfull"
          );
        }
      });
   }

  return (
    <div id="bg"  class="pt-12">
        <Head>
            <title>Guest Speaker | LinkUP</title>
        </Head>
    <div class="max-w-2xl  mx-auto bg-white p-5 rounded-lg shadow-inner border-solid border-2 border-gray-100">
      <div class="font-lg mb-2 mt-5" style = {{display : "flex", justifyContent : "center" ,alignItems : "center"}}>
      <h4 class="text-2xl font-semibold mt-4 mb-4 pb-1">GUEST
         <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">SPEAKER</span>
      </h4>
      </div>
      <form  onSubmit={handleSubmit}>
         <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
               <label for="name" class="block mb-2 text-black dark:text-gray-900">Full Name</label>
               <input type="text" value={auth.name} class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
               <label for="email" class="block mb-2 text-black dark:text-gray-900">Email</label>
               <input type="email" value={auth.email}  class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
               <label for="mobile" class="block mb-2 text-black dark:text-gray-900">Mobile Number</label>
               <input type="tel"  value={auth.phone}  class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label for="orientation_type" class="block mb-2 text-black dark:text-gray-900">Orientation Approach</label>
                <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring "
                  name='orientation_type'
                  id ='orientation_type'
                  value={data.orientation_type}
                  onChange={(e) =>
                          setData("orientation_type", e.target.value)
                      }
                >
                  <option selected >Orientation Approach</option>
                  <option value="Guest Speaker">Guest Speaker</option>
                  <option value="Workshops">Workshops</option>
                </select>
            </div>
            
            <div>
               <label for="availabilityFrom" class="block mb-2 text-black dark:text-gray-900">Availability From</label>
               <input type="date" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required
               name='availabilityFrom'
               id ='availabilityFrom'
               value={data.availabilityFrom}
               onChange={(e) =>
                       setData("availabilityFrom", e.target.value)
                   }
               />
            </div>

            <div>
               <label for="availabilityTo" class="block mb-2 text-black dark:text-gray-900">Availability To</label>
               <input type="date" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required
               name='availabilityTo'
               id ='availabilityTo'
               value={data.availabilityTo}
               onChange={(e) =>
                       setData("availabilityTo", e.target.value)
                   }
                   />
            </div>

            
      
         </div>

         <div>
            <label for="expected_audience" class="block mb-2 text-black dark:text-gray-900">Expected Audience </label>
            <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required
             name='expected_audience'
             id ='expected_audience'
             value={data.expected_audience}
             onChange={(e) =>
                     setData("expected_audience", e.target.value)
                 }/>

         </div>

         <div>
            <label for="specific_concern" class="block mb-2 text-black dark:text-gray-900">Do you have any specific concerns you'd want us to be aware of?</label>
            <input type="text" class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" required
             name='specific_concern'
             id ='specific_concern'
             value={data.specific_concern}
             onChange={(e) =>
                     setData("specific_concern", e.target.value)
                 }/>

         </div>
         <br />
         <div class="flex items-center justify-center">
         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center" style={{ background: "linear-gradient(to right, #2A2A72, #009FFD)" }}>SUBMIT</button>
      </div>        
      </form>
    </div>
    </div>
  )
}

export default GuestSpeakerForm
