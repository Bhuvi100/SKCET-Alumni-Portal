import React from 'react'

const StarAlumni = () => {

  function Card(){
   const arr = new Array()
    for(let i=0; i<4;i++){
      arr.push(
        
      <div class="flex-initial-w-96 rounded-md overflow-hidden shadow-xl mt-5 mr-5 ml-5" >
      <img class="h-80 w-96 p-5"  src="/assets/user.png" alt=""/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-1 text-center">Name {i}</div>
        <p class="text-gray-700 mb-1 text-base text-center">
          Designation
        </p>
        <p class="text-gray-700 text-base text-center">
          Department, Batch
        </p>
      
      </div>
    </div>)
      
    }
    return <div  className="flex flex-row">{arr.map((a) => a)}</div>
  }
  return (
    <div id={"initiatives"}>
      <section className="text-black mt-12">
        <div class="max-w-screen-xl px-4 py-15 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto text-center">
           
            <h1 className={" mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center"}>
                Notable
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300" >
                Alumni
              </span>
              <div className=""></div>
            </h1>
          </div>

        <marquee id="mq-scroll" behavior="scroll" direction="rtl" onMouseOver={() => {
          document.getElementById("mq-scroll").stop();
        }} onMouseOut={() => {
          document.getElementById("mq-scroll").start();
        }}>
          

          {
            Card()
          }
                      
                      

              

          
          </marquee>
          
        </div>
      </section>
    </div>
  )
}

export default StarAlumni
