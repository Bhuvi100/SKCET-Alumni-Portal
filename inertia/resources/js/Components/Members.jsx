import React from 'react'
import Navbar from './Navbar'
import IndexFooter from './IndexFooter'

const Members = () => {
  return (
    <>
    <Navbar />
    <section className="text-black mt-12">
        <div class="max-w-screen-xl px-4 py-15 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto text-center">
           
            <h1 className={"mt-28 mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center"}>
            Members of
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300" >
              Governing Body
              </span>
              <div className=""></div>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">

          <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Chairperson.jpg" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Mrs. S. Malarvizhi
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              President
              </div>
            </div>

            <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Principal.jpg" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Dr. J. Janet 
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Treasurer
              </div>
            </div>

            <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Alumni-Images/Shobana.jpeg" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Mrs. K. Shobana
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Vice President
              </div>
            </div>

            <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Alumni-Images/Thamarai.jpeg" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Mr. S. Thamarai Kannan
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Secretary
              </div>
            </div>

            <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Alumni-Images/Vignesh.jpg" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Mr. S. S. Vignesh
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Executive Committee Member
              </div>
            </div>

            <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Alumni-Images/pranab.jfif" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Mr. Pranab Shreedhar
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Executive Committee Member
              </div>
            </div>

            <div className=" h-80 w-96 transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/user.png" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Dr. S. Karthik
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Executive Committee Member
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="text-black mt-12">
        <div class="max-w-screen-xl px-4 py-15 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto text-center">
           
            <h1 className={"mt-28 mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center"}>
            Faculty
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300" >
              Coordinators
              </span>
              <div className=""></div>
            </h1>
          </div>

          <div className="flex align-center justify-center flex-row mx-12">

          

           
      
            

            <div className=" h-90 w-96 m-5  transition shadow-xl rounded-lg hover:shadow-blue-500/10 ">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Alumni-Images/Jayasudha.jfif" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Dr.Jayasudha Subburaj
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Placement coordinator and Alumni coordinator
              </div>
            </div>

            <div className=" h-90 w-96 m-5 transition shadow-xl rounded-lg hover:shadow-blue-500/10 p-3">
            <img className="mx-auto mt-6 rounded-full" src="/assets/Alumni-Images/Ramya.jfif" alt="First slide" style={{'width':'180px','height':'170px'}}/>
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
              Dr. K. C. Ramya
              </h3>
              <div className="m-1 font-base text-center font-medium" >
              Professor and Head/Department of EEE and Alumni coordinator
              </div>
            </div>
          </div>
        </div>
      </section>
      {//eee 2005
      //Pranab cse 2012
    }
      
    
    </>
  )
}

export default Members
