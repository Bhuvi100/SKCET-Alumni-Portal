import React from 'react';
import SuccessStories from '../components/SuccessStories';
import Logo from "../logo.png";
import SideBar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import HomeNav from '../components/HomeNav';



function Home() {
  
  return (
    
<div >
    <div class="flex">
<HomeNav />
<div ><SideBar /></div>

<Dashboard />
      
     
    </div>

   
</div>

   );
 }
export default Home;