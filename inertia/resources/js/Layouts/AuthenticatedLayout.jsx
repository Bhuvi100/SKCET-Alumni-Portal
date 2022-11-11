import React, { useState } from "react";
import SideBar from "@/Components/SideBar";
import HomeNav from "@/Components/HomeNav";

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="">
            <div className="flex">
                <HomeNav user={auth}/>
                
                {
                    window.innerWidth>700 && <SideBar />
                }
                <main className="w-full m-2 md:ml-80 mt-24">
                    {children}
                </main>
               
                
            </div>
        </div>
    );
}
