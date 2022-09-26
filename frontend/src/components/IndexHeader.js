import React, { useState , useEffect } from 'react';
import {Link } from "react-router-dom"
import "../App.css"
import Navbar from './Navbar';
/*import UntitledDesign from './../assets/Untitled design.png';
import Chairperson from './../assets/Chairperson.jpg';
import Principal from './../assets/Principal.jpg';*/


const IndexHeader = () => {
  return (
    <div class="leading-normal tracking-normal text-white gradient" style={{ background: "linear-gradient(to right, #2A2A72, #009FFD)", fontFamily:"sans-serif" }}>
    <Navbar />
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">Lorem Ipsum</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Not a part of our community yet ?
          </p>
          <Link to = "/register" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Join Today 
          </Link>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50 p-10 ml-0 md:ml-40 " src="/assets/design.png" />
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="relative -mt-20 lg:-mt-24">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>

    <section class="bg-white border-b py-8 place-items-center">
      <div class="container max-w-5xl mx-auto m-8 content-center">
      <div class="max-w-lg mx-auto text-center">
           <h1 className=" mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center text-black">
             SKCET
             <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300" >
               LinkUP
             </span>
           </h1>
         </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-gray-600 ml-10 mb-8">
               To produce Globally competitive Engineers with Social Responsibilities and High Ethical Values.
            </h3>
            <p class="text-3xl text-gray-800 font-bold leading-none mb-3 ml-10">
                Smt. S Malarvizhi , Chairperson
              <br />
              <br />
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img class=" object-fill h-48 w-48 rounded-full shadow-2xl ml-20"   src="/assets/Chairperson.jpg" />
          </div>
        </div>
        <br />
        <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-gray-600 ml-10 mb-8">
                To focus on educational stewardship and create innovative connections in engineering and technology with unparalleled student learning experiences of Global significance.
            </h3>
              <p class="text-3xl text-gray-800 font-bold leading-none mb-3 ml-10">
                Smt. J. Janet ,Principal
                <br />
                <br />
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <img class="object-fill h-48 w-48 rounded-full shadow-2xl ml-20"  src="/assets/Principal.jpg"/>
            </div>
          </div>
        </div>
    </section>
  </div>
  )
}

export default IndexHeader
