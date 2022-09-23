import React, { useState } from 'react';
import logo from './logo.svg';
import trans from '../src/trans.jpeg';
import './App.css';

function academictranscript() {
  return(
 <><div id="d-wrapper">
      <div class="zig-zag-bottom">
        <h1>ACADEMIC TRANSCRIPTS  </h1>
      </div>
    </div>
    <section class="bg-white ">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src={trans} alt=""/>
        <img class="w-full hidden dark:block" src={trans} alt=""/>
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black">Procedure for Applying Academic Transcript</h2>
            <p class="mb-6 font-light text-black md:text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
            <a href="https://www.skcet.ac.in/pdf/coe/Transcripts.pdf" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Link</button>
            </a>
        </div>
    </div>
</section>
  </> 
   );
 }
export default academictranscript;
