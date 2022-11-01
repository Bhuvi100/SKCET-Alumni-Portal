import React from "react";
import { useState } from "react";

const HomeNav = ({ auth }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div class="mb-4">
            <div
                className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full sm:px-12  md:px-24 lg:px-5 fixed w-full z-30 top-0 text-white"
                id="header"
                style={{
                    background: "linear-gradient(to right, #2A2A72, #009FFD)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100vw",
                }}
            >
                <div className="relative flex items-center justify-between">
                    <div class="pl-4 flex items-center">
                        <a
                            href="#"
                            class="relative flex flex-row items-center h-11 focus:outline-none transparent pr-6 mt-4 ml-6"
                        >
                            <img src="/assets/ski_logo.png" class="h-24 w-24" />
                        </a>
                    </div>
                    <div
                        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                        id="nav-content"
                    >
                        <li class="ml-50 mr-3 lg:flex justify-between flex-1 items-center">
                            <h1
                                class="text-white text-center"
                                style={{ fontSize: "2rem", fontWeight: "bold" }}
                            >
                                Link Up
                            </h1>
                        </li>

                        <ul class="list-reset lg:flex justify-end flex-1 items-center">
                            <li>
                                <h1 class="text-white mr-3">User 1</h1>
                            </li>

                            <li>
                                {" "}
                                <img
                                    src={auth?.picture_url}
                                    className="rounded-full h-25 w-10 mr-3"
                                />
                            </li>
                        </ul>
                        <a
                            href="/login"
                            id="navAction"
                            class="mx-auto lg:mx-0 hover:underline bg-red-300 text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNav
