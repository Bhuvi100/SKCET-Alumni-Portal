import React from 'react';
import SuccessStories from '../components/SuccessStories';
import Logo from "../logo.png";
import SideBar from '../components/SideBar';
import Dashboard from '../components/Dashboard';



function Home() {
  
  return (
    
<div class="bg-slate-200" >
    <div class="flex h-screen bg-slate-200">

<SideBar/>
<Dashboard />
      
     
    </div>

   
</div>

   );
 }
export default Home;
