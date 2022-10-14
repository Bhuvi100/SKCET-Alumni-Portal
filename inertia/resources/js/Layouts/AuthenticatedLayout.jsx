import React, { useState } from "react";
import SideBar from "@/Components/SideBar";

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="bg-slate-200">
            <div className="flex">
                <SideBar />
                <main>{children}</main>
            </div>
        </div>
    );
}
