import React from 'react'
import "../../css/app.css"
const UnderConstruction = () => {
  return (
    <div>
      <main>
	<div class="book">
		<div class="book-cover">
			<div>
				<h1 className='heading'>SKCET LinkUp</h1>
				<div class="separator"></div>
        <div class=" mt-2 p-2 flex justify-center ">
                                    <a
                                        href="#"
                                        class="relative flex flex-row items-center h-11 focus:outline-none transparent pr-6 mt-4 ml-6"
                                    >
                                        <img
                                            src="/assets/ski_logo.png"
                                            class="h-24 w-24"
                                        />
                                    </a>
                                </div>
				<h2></h2>
			</div>
		</div>
		<div class="book-content">
			
      <h1 class = "flex justify-center items-center h-full text-3xl">This page is currently under construction</h1>

		</div>
	</div>
</main>
    </div>
  )
}

export default UnderConstruction