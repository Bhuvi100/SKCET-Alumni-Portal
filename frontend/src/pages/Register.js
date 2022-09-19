import React, { useState } from 'react';


function Register() {
    const [input, setInput] = useState({
        password: '',
        confirmPassword: ''
      });
    
      const [error, setError] = useState({
        password: '',
        confirmPassword: ''
      })
    
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
    
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
    
          switch (name) {
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
    
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password does not match.";
              }
              break;
    
            default:
              break;
          }
    
          return stateObj;
        });
      }
    
  return (
    <div id="bg">
  
     <div class="max-w-2xl mx-auto bg-slate-200 p-5 mt-5">
   <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
        <h3 class="text-lg text-white">Welcome to SKCET Alumini Portal</h3>
      </div>
	<form >
        
<div class="flex justify-center items-center w-full mt-3">
    <label for="dropzone-file" class="flex flex-col justify-center items-center bg-white rounded-full border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100  dark:hover:border-gray-500 dark:hover:bg--600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm dark:text-black"><span class="font-semibold">Set Profile Picture</span></p>
            <p class="text-xs dark:text-black">(MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden"/>
    </label>
</div> 
    <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
        <div>
            <label for="Full Name" class="block mb-2 text-black font-bold">Full Name</label>
            <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label for="email" class="block mb-2 text-black font-bold">Email</label>
            <input type="email" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
         <div>
            <label for="Mob" class="block mb-2 text-black font-bold">Mobile Number</label>
            <input type="tel" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
         <div>
            <label for="job" class="block mb-2 text-black font-bold">Job Title</label>
            <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
          <div>
            <label for="dept" class="block mb-2 text-black font-bold">Department</label>
            <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
  <option selected>Choose the department</option>
  <option >B.Tech Artificial Intelligence and Data Science</option>
  <option >B.E. Civil Engineering</option>
  <option >B.E. Computer Science and Engineering</option>
  <option > B.E. Computer Science and Engineering (Cyber Security) </option>
  <option >B.E. Computer Science and Design</option>
  <option > B.E. Electrical and Electronics Engineering</option>
  <option >B.E. Electronics and Communication Engineering</option>
  <option >B.E. Mechanical Engineering</option>
  <option >B.E. Mechatronics Engineering</option>
  <option >B.Tech Information Technology</option>
  <option > B.Tech Computer Science and Business Systems (Powered by TCS)</option>
  <option > M.Tech. Computer Science and Engineering (Powered by Virtusa)</option>

</select>           </div>
         <div>
            <label for="batch" class="block mb-2 text-black font-bold">Batch</label>
            <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        </div>
        <div>
        <label for="loc" class="block mb-2 text-black font-bold">Location</label>
            <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
        <div>
            <label for="pass" class="block mb-2 text-black font-bold">Password</label>
            <input type="password"  name="password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput} class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
               {error.password && <span className='err'>{error.password}</span>}

        </div>
        <div>
            <label for="con_pass" class="block mb-2 text-black font-bold">Confirm Password</label>
            <input type="password"  name="confirmPassword"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput} class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
               {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
 </div>
    </div>
    <div class="flex items-center justify-center">
    <a href="/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</a>
    </div>
</form>
</div>
    </div>
   );
 }
export default Register;
