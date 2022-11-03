import React from 'react'
import '../../css/app.css'
import { useState } from 'react';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const MentorForm = (props) => {

  const { data, setData, errors, post } = useForm({
   // name: "",
   // phone: "",
   method_of_guidance: "",
   department: "",
   area_of_expertise: "",
   mentor_experience: "",
   specific_concern: "",
});

function handleSubmit(e) {
   e.preventDefault();
   post(route("mentorFormSubmit"), {
     onSuccess: (res) => {
       console.log(
         "sucessfull"
       );
     }
   });
}


  return (
    <div id="bg">
    <div class="max-w-2xl mx-auto bg-slate-200 p-5 mt-5">
      <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
         <h3 class="text-lg text-white">Mentor Form</h3>
      </div>
      <form onSubmit={handleSubmit} >
         <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
               <label for="name" class="block mb-2 text-black font-bold">Full Name</label>
               <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
               <label for="email" class="block mb-2 text-black font-bold">Email</label>
               <input type="email" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
               <label for="mobile" class="block mb-2 text-black font-bold">Mobile Number</label>
               <input type="tel" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="method_of_guidance" class="block mb-2 text-black font-bold">Method Of Guidance</label>
                <select name="method_of_guidance" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 "
                value={data.method_of_guidance}
                onChange={(e) =>
                    setData("method_of_guidance", e.target.value)
                }
                >
                  <option selected>Select Method</option>
                  <option value="In_Person">In Person</option>
                  <option value="Virtual">Virtual</option>
                </select>
            </div>
            <div>
               <label for="department" class="block mb-2 text-black font-bold">Department</label>
               <select name="department" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 "
               value={data.department}
               onChange={(e) =>
                   setData("department", e.target.value)
               }
               >
                  <option selected>Choose the department</option>
                  <option value="B.Tech Artificial Intelligence and Data Science">B.Tech Artificial Intelligence and Data Science</option>
                  <option value="B.E. Civil Engineering">B.E. Civil Engineering</option>
                  <option value="B.E. Computer Science and Engineering">B.E. Computer Science and Engineering</option>
                  <option value="B.E. Computer Science and Engineering (Cyber Security) ">B.E. Computer Science and Engineering (Cyber Security) </option>
                  <option value="B.E. Computer Science and Design">B.E. Computer Science and Design</option>
                  <option value="B.E. Electrical and Electronics Engineering">B.E. Electrical and Electronics Engineering</option>
                  <option value="B.E. Electronics and Communication Engineering">B.E. Electronics and Communication Engineering</option>
                  <option value="B.E. Mechanical Engineering">B.E. Mechanical Engineering</option>
                  <option value="B.E. Mechatronics Engineering">B.E. Mechatronics Engineering</option>
                  <option value="B.Tech Information Technology">B.Tech Information Technology</option>
                  <option value="B.Tech Computer Science and Business Systems (Powered by TCS)">B.Tech Computer Science and Business Systems (Powered by TCS)</option>
                  <option value="M.Tech. Computer Science and Engineering (Powered by Virtusa)">M.Tech. Computer Science and Engineering (Powered by Virtusa)</option>
               </select>
            </div>
            <div>
               <label for="expertise" class="block mb-2 text-black font-bold">Area Of Expertise</label>
               <input name="area_of_expertise" type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                value={data.area_of_expertise}
                onChange={(e) =>
                    setData("area_of_expertise", e.target.value)
                }
                />
            </div>
         </div>
         <div>
            <label for="experience" class="block mb-2 text-black font-bold">Briefly describe prior experience you have with mentoring. </label>
            <input name="mentor_experience" type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            value={data.mentor_experience}
            onChange={(e) =>
                setData("mentor_experience", e.target.value)
            }
            />
         </div>
         <div>
            <label for="specific_concern" class="block mt-5 mb-2 text-black font-bold">Do you have any specific concerns you'd want us to be aware of?</label>
            <input name="specific_concern" type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            value={data.specific_concern}
            onChange={(e) =>
                setData("specific_concern", e.target.value)
            }
            />
         </div>
         <div class="flex items-center mt-4 justify-center">
               <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
         </div>
      </form>
    </div>
    </div>
  )
}

export default MentorForm
