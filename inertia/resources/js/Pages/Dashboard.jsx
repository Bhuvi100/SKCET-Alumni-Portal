import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

import Posts from "@/Components/Posts";
import Mentorship from "@/Components/Mentorship";
import Suggestions from "@/Components/Suggestions";
import TrendingPosts from "@/Components/TrendingPosts";
import UserPosts from "@/Components/UserPosts";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div>
                <div class="flex flex-col flex-1 ">
                    <main class="pb-16 overflow-y-auto">
                        <div class="block md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 ">
                            <div class="col-span-2">
                                <div class="pt-10">
                                    <Posts />
                                </div>

                                <div class=" mt-5">
                                    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 mb-5 bg-slate-200">
                                        <TrendingPosts />
                                    </div>
                                    <UserPosts />
                                </div>
                            </div>
                            <div class="hidden md:block lg:block py-8 rounded-lg sticky h-4 ml-4 mr-4 mt-2">
                                <div class="max-w-2xl mx-auto">
                                    <form>
                                        <div class="relative">
                                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg
                                                    class="w-5 h-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="search"
                                                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg dark:bg-white"
                                                placeholder="Search...."
                                            />
                                            <button
                                                type="submit"
                                                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="p-6 max-w-2xl mx-auto mt-3 bg-white rounded-lg border border-gray-200 shadow-md mt-2">
                                    <div class="flex items-center justify-center">
                                        <h2 class="text-black text-lg font-semibold">
                                            Job Offers
                                        </h2>
                                    </div>

                                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
                                                class=""
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
                                                class="w-32 "
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
                                                class="w-32 "
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
                                                class="w-32 "
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
                                                class="w-32"
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
                                                class="w-32"
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
                                                class="w-20"
                                                alt=""
                                            />
                                        </div>
                                        <div class="p-4">
                                            <img
                                                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
                                                class="w-24"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <a
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                            href="/jobs"
                                        >
                                            View Openings
                                        </a>
                                    </div>
                                </div>
                                <Mentorship />
                                <Suggestions />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
