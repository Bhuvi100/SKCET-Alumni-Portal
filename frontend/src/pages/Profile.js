import HomeNav from "../components/HomeNav";
import AboutUser from "../components/Profile Components/AboutUser";
import Experience from "../components/Profile Components/Experience";
import ExtraInfo from "../components/Profile Components/ExtraInfo";
import UserInfo from "../components/Profile Components/UserInfo";
import UserPosts from "../components/UserPosts";

const arr = [1,2,3,4,5,6,7,8,9,0,1,1,2,2,,2,3,3,3,3,4,4,3,3,3,3,3]
export default function Profile(){
    return(
        <div className="w-full">
        <HomeNav />
            


<div class=" mt-28 bg-gray-100">

    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
          
            <div class="w-full md:w-3/12 md:mx-2">
             
                <UserInfo />  
          
                <div class="my-4"></div>
              
                <AboutUser />
             
            </div>
      
            <div class="w-full md:w-9/12 mx-2 h-64">
               
                <ExtraInfo />
               
                <div class="my-4"></div>

                <Experience />
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4 ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

                <div className="text-black text-2xl font-semibold">Your Posts
                
                </div>
                </div>
                <UserPosts />
               
                
        </div>
        </div>
    </div>
</div>
        </div>
    )
}