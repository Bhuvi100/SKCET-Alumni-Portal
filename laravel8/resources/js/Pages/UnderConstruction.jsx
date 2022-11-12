import React from 'react'
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import "../../css/app.css"
const UnderConstruction = (props) => {
  return (
    
    <div >
      <AuthenticatedLayout
     
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                     Under Construction
                </h2>
            }
        >
     <main class="h-screen w-full flex md:mt-8 flex-col justify-center items-center "  style={{
                    background: "linear-gradient(to right, #2A2A72, #009FFD)",
                }}>

<div class="p-2 flex justify-center items-center">
                                    <a
                                        href={route("dashboard")}
                                        class={
                                            "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-blue-600 " +
                                            (route("dashboard") ===
                                            window.location.href
                                                ? "bg-blue-100"
                                                : "")
                                        }
                                    >
                                        <img
                                            src="/assets/ski_logo.png"
                                            class="h-40 w-40"
                                        />
                                    </a>
                                </div>
	<h1 class="md:text-7xl text-3xl mx-auto font-extrabold text-white tracking-widest">	Site under construction</h1>
	
  <a href = "/dashboard" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Go Home 
          </a>
</main>
</AuthenticatedLayout>
    </div>
  )
}

export default UnderConstruction