// import React, { useEffect } from 'react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/inertia-react';

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     useEffect(() => {
//         return () => {
//             reset('password', 'password_confirmation');
//         };
//     }, []);

//     const onHandleChange = (event) => {
//         setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
//     };

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel forInput="name" value="Name" />

//                     <TextInput
//                         type="text"
//                         name="name"
//                         value={data.name}
//                         className="mt-1 block w-full"
//                         autoComplete="name"
//                         isFocused={true}
//                         handleChange={onHandleChange}
//                         required
//                     />

//                     <InputError message={errors.name} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel forInput="email" value="Email" />

//                     <TextInput
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         handleChange={onHandleChange}
//                         required
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel forInput="password" value="Password" />

//                     <TextInput
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         handleChange={onHandleChange}
//                         required
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel forInput="password_confirmation" value="Confirm Password" />

//                     <TextInput
//                         type="password"
//                         name="password_confirmation"
//                         value={data.password_confirmation}
//                         className="mt-1 block w-full"
//                         handleChange={onHandleChange}
//                         required
//                     />

//                     <InputError message={errors.password_confirmation} className="mt-2" />
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
//                         Already registered?
//                     </Link>

//                     <PrimaryButton className="ml-4" processing={processing}>
//                         Register
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


import React, { useState , useEffect } from 'react';
import "../../../css/app.css"

import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

// import logo from './logo.svg';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Country from '@/Components/Country';
//import { Link } from 'react-router-dom';
//import Home from './Home';

function Register() {


    // const [input, setInput] = useState({
    //     password: '',
    //     confirmPassword: ''
    //   });
    
    //   const [error, setError] = useState({
    //     password: '',
    //     confirmPassword: ''
    //   })
    
    //   const onInputChange = e => {
    //     const { name, value } = e.target;
    //     setInput(prev => ({
    //       ...prev,
    //       [name]: value
    //     }));
    //     validateInput(e);
    //   }
    
    //   const validateInput = e => {
    //     let { name, value } = e.target;
    //     setError(prev => {
    //       const stateObj = { ...prev, [name]: "" };
    
    //       switch (name) {
    //         case "password":
    //           if (!value) {
    //             stateObj[name] = "Please enter Password.";
    //           } else if (input.confirmPassword && value !== input.confirmPassword) {
    //             stateObj["confirmPassword"] = "Password does not match.";
    //           } else {
    //             stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
    //           }
    //           break;
    
    //         case "confirmPassword":
    //           if (!value) {
    //             stateObj[name] = "Please enter Confirm Password.";
    //           } else if (input.password && value !== input.password) {
    //             stateObj[name] = "Password does not match.";
    //           }
    //           break;
    
    //         default:
    //           break;
    //       }
    
    //       return stateObj;
    //     });
    //   }
    
      const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
 
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

   const [value, setValue] = useState()

   return(
    <div id='bg'>
      
      <div class="max-w-2xl mx-auto bg-slate-200 p-5 mt-5">
     <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
          <h3 class="text-lg text-white">Welcome to SKCET Alumini Portal</h3>
        </div>
    <form onSubmit={submit}>
          
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
              {/* <label for="Full Name" class="block mb-2 text-black font-bold">Full Name</label>
              <input type="text" name="name" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>  */}
              <InputLabel forInput="name" value="Name" />
  
                       <TextInput
                           type="text"
                           name="name"
                         
                           className="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           autoComplete="name"
                           isFocused={true}
                           handleChange={onHandleChange}
                           required
                       />
  
                       <InputError message={errors.name} className="mt-2" />
          </div>
          <div>
              {/* <label for="email" class="block mb-2 text-black font-bold">Email</label>
              <input type="email" name="email" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/> */}
               <InputLabel forInput="email" value="Email" />
  
                          <TextInput
                              type="email"
                              name="email"
                            
                              className="mt-1 block w-full"x
                              autoComplete="username"
                              handleChange={onHandleChange}
                              required
                          />
          </div>
           <div>
              <label for="Mob" class="block mb-2 text-black font-bold">Phone Number</label>
              <div class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <PhoneInput
        defaultCountry="IN"
        value={value}
        onChange={setValue} />
        </div>          </div>
           <div>
              <label for="job" class="block mb-2 text-black font-bold">Designation</label>
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
              <label for="dept" class="block mb-2 text-black font-bold">Batch</label>
              <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
    <option selected>Select Batch Year</option>
    <option >A</option>
    <option >B</option>
    <option >C</option>
    <option > D</option>
    <option >E</option>
    <option >F</option>
    <option >G</option>
    <option >H</option>
    <option >I</option>
    <option >J</option>
    <option >K</option>
    <option >L</option>
  
  </select>           </div>
  </div>
        
  <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-4">
   <div>
              <label for="dept" class="block mb-2 text-black font-bold">Gender</label>
              <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
    <option selected>Select the Gender</option>
    <option >Male</option>
    <option >Female</option>
  
  </select>           </div>
    <div>
          <div>
              <label for="dept" class="block mb-2 text-black font-bold">Club</label>
              <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
    <option selected>Select the Club</option>
    <option >AI/ML</option>
    <option >Cyber Security</option>
    <option >Devops</option>
    <option >AR / VR</option>
    <option >IOT</option>
    <option >Robotics</option>
    <option >CAD</option>
    <option >Design & Architecture</option>
  
        </select>           </div>
     
          </div>
          </div>
         <div class="grid gap-6 lg:grid-cols-3  mt-2 mb-4">
    <div> <label for="ad1" class="block mb-2 text-black font-bold">Country</label>
    <div class="mt-2.5">
   <Country/>
    </div>
    </div>
     <div>
     <label for="dept" class="block mb-2 text-black font-bold">State</label>
              <select class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 ">
    <option selected>Select State</option>
    <option >Andhra Pradesh</option>
    <option >Arunachal Pradesh</option>
    <option >Assam</option>
    <option >Bihar</option>
    <option >Chhattisgarh</option>
    <option >Goa</option>
    <option >Gujarat</option>
    <option >Haryana</option>
    <option >Himachal Pradesh</option>
    <option >Jammu and Kashmir</option>
    <option >Jharkhand</option>
    <option >Karnataka</option>
    <option >Kerala</option>
    <option >Madhya Pradesh</option>
    <option >Maharashtra</option>
    <option >Manipur</option>
    <option >Meghalaya</option>
    <option >Mizoram</option>
    <option >Nagaland</option>
    <option >Odisha</option>
    <option >Punjab</option>
    <option >Rajasthan</option>
    <option >Sikkim</option>
    <option >Tamil Nadu</option>
    <option >Telangana</option>
    <option >Tripura</option>
    <option >Uttar Pradesh</option>
    <option >Uttarakhand</option>
    <option >West Bengal</option>
    <option >Andaman and Nicobar Islands</option>
    <option >Chandigarh</option>
    <option >Dadra and Nagar Haveli</option>
    <option >Daman and Diu</option>
    <option >Delhi</option>
    <option >Ladakh</option>
    <option >Lakshadweep</option>
    <option >Puducherry</option>
  
  </select>     
       </div>
    <div> 
      <label for="ad1" class="block mb-2 text-black font-bold">City</label>
              <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
      </div>
  </div>
          <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
              <div>
              <label for="ad1" class="block mb-2 text-black font-bold">Address line 1</label>
              <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  
          </div>
          <div>
              <label for="ad2" class="block mb-2 text-black font-bold">Address line 2</label>
              <input type="text" class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
   </div>
          <div>
          <InputLabel forInput="password" value="Password" />
  
                      <TextInput
                          type="password"
                          name="password"
                         
                          className="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          autoComplete="new-password"
                          handleChange={onHandleChange}
                          required
                      />
               {/*  <label for="pass" class="block mb-2 text-black font-bold">Password</label>
              <input type="password"  name="password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput} class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                 {error.password && <span className='err'>{error.password}</span>}   */}
  
          </div>
          <div>
  
          <InputLabel forInput="password_confirmation" value="Confirm Password" />
  
                      <TextInput
                          type="password"
                          name="password_confirmation"
                      
                          className="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          handleChange={onHandleChange}
                          required
                      />
             {/* <label for="con_pass" class="block mb-2 text-black font-bold">Confirm Password</label>
              <input type="password"  name="password_confirmation"
            value={input.confirmPassword}
            onChange={onInputChange}
             onBlur={validateInput} class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}
  
  
              
   </div>
      </div>
      {/* <div class="flex items-center justify-center">
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div> */}
  
      <PrimaryButton className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" processing={processing}>
                          Register
      </PrimaryButton>
  </form>
  </div>
    </div>
     );
   }
  export default Register;