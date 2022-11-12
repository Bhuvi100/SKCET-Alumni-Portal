import React from "react";

const ExtraInfo = ({ user }) => {
    return (
        <div>
            <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg
                            class="h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </span>
                    <span class="tracking-wide text-xl">About</span>
                </div>
                <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-base ml-3 mt-2">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Name</div>
                            <div class="px-4 py-2">{user.name}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                                Member Since
                            </div>
                            <div className="px-4 py-2">{user.created_at}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">
                                <a
                                    className="text-blue-800"
                                    href={"mailto:" + user.email}
                                >
                                    {user.email}
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">
                                Contact No.
                            </div>
                            <div class="px-4 py-2"><a
                                className="text-blue-800"
                                href={"tel:" + user.phone}
                            >{user.phone}</a></div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Location</div>
                            <div class="px-4 py-2">{user.city_state}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Country</div>
                            <div class="px-4 py-2">{user.country}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">
                                Organization / Company
                            </div>
                            <div class="px-4 py-2">{user.organization}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">
                                Designation
                            </div>
                            <div class="px-4 py-2">{user.designation}</div>
                        </div>
                    </div>
                </div>
                {/* <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button> */}
            </div>
        </div>
    );
};

export default ExtraInfo;
