import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function academictranscript() {
  return(
    <><div id="d-wrapper">
      <div class="zig-zag-bottom">
        <h1>PROCEDURE FOR APPLYING FOR TRANSCRIPTS :</h1>
      </div>
    </div><div class="px-5 mt-3 h-32">
        <div class="relative">
          <ul class="rounded-md shadow-md bg-slate-200 absolute left-0 right-0 -bottom-18 mt-3 p-3">
            <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              FORMS
            </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  Candidates shall download the application form for issue of Transcripts and submit the duly filled in application form in the Office of the Controller of Examinations.</p></div>
            </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  The application form should be submitted along with the required number of Photocopies of the grade sheets / consolidated grade sheets / provisional certificate / degree certificate and rank certificate to the office of Controller of Examinations.</p>      </div>
            </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  The candidate may either come in person or send an authorized person for collecting the Transcript Copies.The authorized person should submit authorization letter, Photo ID proof.</p>         </div></li>

            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  Copies of grade sheets taken in colour photo copiers will not be attested.
                </p>    </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  The fee for issuing transcript is (Rupees Five Hundred Only)  500/- per set should be paid in college office and the photocopy of the fee paid receipt should be enclosed along with the application form.</p>    </div>     </li>

            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  Per set means :
                </p>   <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                  <p class="text-gray-600 mt-1 font-regular text-sm">

                    One photocopy of individual grade sheets.
                  </p>    <p class="text-gray-600 mt-1 font-regular text-sm">

                    One photocopy of consolidated grade sheet.
                  </p>   <p class="text-gray-600 mt-1 font-regular text-sm">

                    One photocopy of provisional certificate.
                  </p>   <p class="text-gray-600 mt-1 font-regular text-sm">

                    One photocopy of degree certificate.
                  </p>   <p class="text-gray-600 mt-1 font-regular text-sm">

                    One photocopy of rank certificate.
                  </p>   </div>   </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  The Transcripts, after attestation, will be placed in sealed covers and handed over in person to the candidate/authorized person after acknowledging receipt of the Transcript Covers. The candidates shall make their own arrangements for sending the transcripts covers to Foreign Universities.
                </p>    </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  The attestation will be done only for the grade sheets issued by the Controller of Examinations, Sri Krishna College of Technology.Other grade sheets will not be attested.</p>    </div>     </li>
            <li class="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              Check List for Applying for Transcripts:
            </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  Duly filled in application form.
                </p>    </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">

                  Required number of photocopy of certificates (both front & back side).</p>    </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">
                  Photocopy of fee paid receipt ₹  500/- per set.
                </p>    </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">
                  Transcript covers for sealing the transcript copies – (self-adhesive covers shall be preferred).
                </p>    </div>     </li>
            <li class="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg">
              <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </div>
              <div class="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                <p class="text-gray-600 mt-1 font-regular text-sm">
                  If transcripts are to be received through authorized person – authorization letter and ID proof to be submitted at the time of receiving the transcripts.
                </p>    </div>     </li>
            <div class="inline-flex  items-center justify-center w-full">
              <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                Download Application
              </button>
            </div>
          </ul>
        </div>
      </div></> 
   );
 }
export default academictranscript;
