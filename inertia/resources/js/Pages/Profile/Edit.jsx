import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Country from "@/Components/Country";
import InputError from "@/Components/InputError";

const Edit = ({ user, auth, errors }) => {
    let data;
    let setData;
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Profile
                </h2>
            }
        >
            <form
                style={{ margin: "5rem" }}
                className="m-5 p-5 border border-gray-300"
            >
                <div>
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900 mb-7">
                                    Profile
                                </h3>
                                <div class="image overflow-hidden">
                                    <img
                                        class="h-96 w-auto mb-4 mx-auto"
                                        src="/assets/Alumni-Images/2.jpg"
                                        alt="Not available"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form
                                action="@/Pages/Profile/UpdateProfile#"
                                method="POST"
                            >
                                <div class="overflow-hidden shadow sm:rounded-md">
                                    <div class="bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-6 sm:col-span-3">
                                                <label
                                                    for="first-name"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autocomplete="given-name"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className = "col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="ad1"
                                                    className="block mb-2 text-black dark:text-gray-900"
                                                >
                                                    Country
                                                </label>
                                                <div className="mt-2.5">
                                                    <Country
                                                        name="country"
                                                        onChange={setData}
                                                        value={
                                                            data !== undefined
                                                                ? data
                                                                : "India"
                                                        }
                                                    />
                                                    <InputError
                                                        message={errors.country}
                                                        class="mt-2"
                                                    />
                                                </div>
                                            </div>
                                            

                                           

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    for="postal-code"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autocomplete="postal-code"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                                <label
                                                    for="postal-code"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                    City & State
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autocomplete="postal-code"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mt-4">
                                                Profile photo
                                            </label>
                                            <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div class="space-y-1 text-center">
                                                    <svg
                                                        class="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600">
                                                        <label
                                                            for="file-upload"
                                                            class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>
                                                                Upload a file
                                                            </span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                class="sr-only"
                                                            />
                                                        </label>
                                                        <p class="pl-1">
                                                            or drag and drop
                                                        </p>
                                                    </div>
                                                    <p class="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">
                                    Professional Information
                                </h3>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form
                                action="@/Pages/Profile/UpdateProfile#"
                                method="POST"
                            >
                                <div class="shadow sm:overflow-hidden sm:rounded-md">
                                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                for="postal-code"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Organization Name
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autocomplete="postal-code"
                                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    for="postal-code"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                    Organization Email
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autocomplete="postal-code"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <label
                                                for="postal-code"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Designation
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autocomplete="postal-code"
                                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                for="expertise"
                                                class="block  mt-2 mb-2 text-black dark:text-gray-900"
                                            >
                                                Select the Area of Expertise
                                            </label>
                                            <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                                                <option selected>
                                                    Select the Area of Expertise
                                                </option>
                                                <option>AI/ML</option>
                                                <option>Cyber Security</option>
                                                <option>Devops</option>
                                                <option>AR / VR</option>
                                                <option>IOT</option>
                                                <option>Robotics</option>
                                                <option>CAD</option>
                                                <option>
                                                    Design & Architecture
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                for="dept"
                                                class="block  mt-2 mb-2 text-black dark:text-gray-900"
                                            >
                                                Categories
                                            </label>
                                            <select class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                                                <option selected>
                                                    Select an option
                                                </option>
                                                <option>Engineering</option>
                                                <option>
                                                    Information Technology
                                                </option>
                                                <option>Entrepreneurs</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Edit;
