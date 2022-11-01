import React, { useState } from "react";
import SideBar from "@/Components/SideBar";
import HomeNav from "@/Components/HomeNav";

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="bg-slate-200">
            <div className="flex">
                <HomeNav/>
                <SideBar />
                <main className="w-full ml-8 mt-24">
                    {children}
                </main>
            </div>
        </div>
    );
}
