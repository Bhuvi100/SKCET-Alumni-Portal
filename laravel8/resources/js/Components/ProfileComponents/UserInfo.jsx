import React from "react";
import { Link } from "@inertiajs/inertia-react";

const UserInfo = ({ user }) => {
    return (
        <div class="bg-white border-t-4 border-blue-400 shadow-lg md:h-50 w-full m-3 p-4 sm:h-50 w-full">
            <div class="lg:image overflow-hidden md:h-30 ">
                <img
                    class="h-96 w-auto mb-4 mx-auto sm:w-50"
                    src={user.picture_url}
                    alt="Profile Picture"
                />
            </div>

            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {user.name}
            </h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">
                {user.designation} at {user.organization}
            </h3>

            {/*<p class="text-sm text-gray-500 hover:text-gray-600 leading-6">*/}
            {/*    Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
            {/*    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur*/}
            {/*    non deserunt*/}
            {/*</p>*/}
            <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                {/*<li class="flex items-center py-3">*/}
                {/*    <span>Status</span>*/}
                {/*    <span class="ml-auto">*/}
                {/*        <span class="bg-blue-500 py-1 px-2 rounded text-white text-sm">*/}
                {/*            Active*/}
                {/*        </span>*/}
                {/*    </span>*/}
                {/*</li>*/}
                <li class="flex items-center py-3">
                    <span>Member since </span>
                    <span class="ml-auto">{user.created_at}</span>
                </li>
            </ul>
            <div className="flex justify-center">
                <Link
                    href={`/profile/${user.id}/`}
                    className="text-white bg-black m-4 p-3 rounded"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default UserInfo;
