import React from "react";

const Experience = ({ user }) => {
    return (
        <div>
            <div class="bg-white p-1 shadow-sm rounded-sm md:w-30">
                <div class="grid grid-cols-3">
                    <div className="p-2">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="">
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
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </span>
                            <span class="tracking-wide text-xl">
                                Experience
                            </span>
                            {/* <button className="bg-gray">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-20">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg></button> */}
                        </div>
                        <ul class="list-inside space-y-2 ml-6 mb-3">
                            <li>
                                <div class="text-blue-600 text-lg font-semibold">
                                    {user.designation}
                                </div>
                                <div class="text-gray-600 text-sm">
                                    {user.organization}
                                </div>
                            </li>
                            {/*<li>*/}
                            {/*    <div class="text-blue-600 text-lg font-semibold">*/}
                            {/*        Owner at Her Company Inc.*/}
                            {/*    </div>*/}
                            {/*    <div class="text-gray-600 text-xs">*/}
                            {/*        March 2020 - Now*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <div class="text-blue-600 text-lg font-semibold">*/}
                            {/*        Owner at Her Company Inc.*/}
                            {/*    </div>*/}
                            {/*    <div class="text-gray-600 text-xs">*/}
                            {/*        March 2020 - Now*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <div class="text-blue-600 text-lg font-semibold">*/}
                            {/*        Owner at Her Company Inc.*/}
                            {/*    </div>*/}
                            {/*    <div class="text-gray-600 text-xs">*/}
                            {/*        March 2020 - Now*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="p-2">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="text-green-500">
                                <svg
                                    class="h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        fill="#fff"
                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                            </span>
                            <span class="tracking-wide text-xl">Education</span>
                        </div>
                        <ul class="list-inside space-y-2">
                            <li>
                                <div class="text-blue-600 text-lg font-semibold">
                                    {user.department}
                                </div>
                                <div class="text-gray-600 text-xs">
                                    {user.batch_from} to {user.batch_to}
                                </div>
                            </li>
                            {/*<li>*/}
                            {/*    <div class="text-blue-600 text-lg font-semibold">*/}
                            {/*        Bachelors Degreen in LPU*/}
                            {/*    </div>*/}
                            {/*    <div class="text-gray-600 text-xs">*/}
                            {/*        March 2020 - Now*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="p-2">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="text-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </span>
                            <span class="tracking-wide text-xl">Expertise</span>
                        </div>
                        <ul class="list-inside space-y-2 ml-3">
                            <li>
                                <div class="text-grey-600 text-lg font-normal">
                                    <strong>{user.areas_of_expertise}</strong>
                                </div>
                            </li>
                            {/*<li>*/}
                            {/*    <div class="text-grey-600 text-lg font-normal">*/}
                            {/*        Logical Thinking*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;