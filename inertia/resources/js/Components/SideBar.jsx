import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import route from "../../../vendor/tightenco/ziggy/src/js";
import React from 'react';

export default function SideBar(props) {
    const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 700);
    return (
        <div>
            <div className="fixed mr-3 top-8 lg:top-40 left-4">
                <div className="">
                    {window.innerWidth < 700 && (
                        <button
                            type="button"
                            class="text-white hover:bg-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 "
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                            </svg>
                        </button>
                    )}
                </div>
                {showSidebar && (
                    <div
                        class={`z-20 w-60 overflow-y-auto md:block flex-shrink-0 bg-slate-200 ml-4 mt-4 flex-row flex-nowrap overflow-hidden shadow-xl transition-all duration-300 ${
                            showSidebar
                                ? "fixed left-0 shadow-sm -mt-1 bg-gray-50 rounded-xl"
                                : "left-0 hidden"
                        } `}
                    >
                        <div
                            class={`w-56 md:mt-6 ${showSidebar ? "mt-0" : ""}`}
                            aria-label=""
                        >
                            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
                                <div class="p-2 flex justify-center ">
                                    <a
                                        href={route("dashboard")}
                                        class={
                                            "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-blue-600 " +
                                            (route("dashboard") ===
                                            window.location.href
                                                ? "bg-blue-100"
                                                : "")
                                        }
                                    >
                                        <img
                                            src="/assets/ski_logo.png"
                                            class="h-24 w-24"
                                        />
                                    </a>
                                </div>
                                <ul class="space-y-2">
                                    <li class="mt-4">
                                        <a
                                            href={route("dashboard")}
                                            class={
                                                "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-blue-600 " +
                                                (route("dashboard") ===
                                                window.location.href
                                                    ? "bg-blue-100"
                                                    : "")
                                            }
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-6 h-6 text-grey-500 transition duration-75 "
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                            </svg>
                                            <span class="ml-3">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/successStory"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="flex-shrink-0 w-6 h-6 text-grey-500 transition duration-75 group-hover:text-white dark:group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                            </svg>
                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                Add Success Stories
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/chapters"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                Chapters
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/construction"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                                <path
                                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                Memories
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/construction"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                Giving Back
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/construction"
                                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                                    clipRule="evenodd"
                                                />
                                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                            </svg>

                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                            Clubs
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/events"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>

                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                Events
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/construction"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>

                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                Chat
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/queries"
                                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>

                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                General Queries
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/profile"
                                            class={
                                                "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-blue-600 " +
                                                (route("profile") ===
                                                window.location.href
                                                    ? "bg-blue-100"
                                                    : "")
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>

                                            <span class="flex-1 ml-3 whitespace-nowrap">
                                                Profile
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            
                                            href = {"auth/logout"}
                                            method="post"
                                            as="button"
                                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black hover:text-white hover:bg-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>

                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                Logout
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

