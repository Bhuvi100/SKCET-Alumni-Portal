import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import HomeNav from "../Components/HomeNav";

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="bg-gray-300">
            <div className="flex">
                <HomeNav auth={auth}/>
                
                {
                    window.innerWidth>700 && <SideBar />
                }
                <main className="w-full md:m-3  md:ml-80  mt-24" >
                    {children}
                </main>
               
                
            </div>
        </div>
    );
}
