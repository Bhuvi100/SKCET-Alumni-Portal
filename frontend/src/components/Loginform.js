import React from 'react'

const Loginform = () => {
  return (
    
    <div>
        <section class="h-full grid place-items-center">
        <div class="container py-12 px-6 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="xl:w-10/12">
                <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                    <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-8 md:mx-4">
                        <div class="text-center">
                        <img
                            class="mx-auto w-48"
                            src="/assets/reg-logo.png"
                            alt="logo"
                        />
                        <h4 class="text-xl font-semibold mt-8 mb-6 pb-1">Once Again Welcome To SKCET Family !</h4>
                        </div>
                        <form>
                        <p class="mb-4">Please login to your account</p>
                        <div class="mb-4">
                            <input
                            type="email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            />
                        </div>
                        <div class="mb-4">
                            <input
                            type="password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            />
                        </div>
                        <div class="text-center pt-1 mb-6 pb-1">
                            <a
                            href = "/home"
                            class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{ background: "linear-gradient(to right, #2A2A72, #009FFD)" }}
                
                            >
                            Log in
                            </a>
                            <a class="text-gray-500" href="#!">Forgot password?</a>
                        </div>
                        <div class="flex items-center justify-between pb-3">
                            <p class="mr-2">Not a part of our community yet ? <a class="text-gray-500" href='#!'>Join Now</a></p>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div
                    class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{ background: "linear-gradient(to right, #2A2A72, #009FFD)" }}
                    > 
                    {/* <div class="text-white px-4 py-6 md:p-12 md:mx-6"> */}
                        {/* <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                        <p class="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        </p> */}
                    {/* </div> */}
                    {/* <img
                            class="mx-auto"
                            src="https://www.skcet.ac.in/images/Alumni/backimg.png"
                            alt="logo"
                        /> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    
    </div>
  )
}

export default Loginform
