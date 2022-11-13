import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import HomeNav from "../Components/HomeNav";
import { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";

export default function Authenticated({ auth, header, children }) {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{header.props.children}</title>
            </Head>
            <div className="flex">
                <HomeNav auth={auth} />
                {window.innerWidth > 700 && <SideBar />}
                <main className="w-full md:ml-80 mt-24">{children}</main>
            </div>
        </div>
    );
}
