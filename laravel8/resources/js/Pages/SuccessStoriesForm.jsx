import React from "react";
import "../../css/app.css";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
const SuccessStoriesForm = (props) => {
    const { data, setData, errors, post } = useForm({
        achievement: "",
        description: "",
        category: "",
        date_of_achievement: "",
        video_url: "",
        snapshot: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("successStorySubmit"), {
            onSuccess: (res) => {
                alert('Success');
            },
        }),
            {
                forceFormData: true,
            };
    }

    return (
        <div id="bg">
            <div class="bg-white max-w-2xl mx-auto p-10 mt-5">
                <div class="flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2">
                    <h3 class="text-lg text-white">
                        Share your Success Stories
                    </h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
                        <div>
                            <label
                                for="name"
                                class="block mb-2 text-black font-bold"
                            >
                                {" "}
                                Name
                            </label>
                            <input required={true}
                                name="name"
                                type="text"
                                placeholder={props.auth.name}
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled
                            />
                        </div>

                        <div>
                            <label
                                for="phone"
                                class="block mb-2 text-black font-bold"
                            >
                                Mobile Number
                            </label>
                            <input required={true}
                                name="phone"
                                type="tel"
                                placeholder={props.auth.phone}
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled
                            />
                        </div>

                        <div>
                            <label
                                for="achievement"
                                class="block mb-2 text-black font-bold"
                            >
                                Achievement Title
                            </label>
                            <input required={true}
                                name="achievement"
                                type="text"
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.achievement}
                                onChange={(e) =>
                                    setData("achievement", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label
                                for="description"
                                class="block mb-2 text-black font-bold"
                            >
                                Description
                            </label>
                            <textarea
                                required={true}
                                name="description"
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            ></textarea>
                        </div>
                        <div>
                            <label
                                for="category"
                                class="block mb-2 text-black font-bold"
                            >
                                Category
                            </label>
                            <select
                                required
                                name="category"
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg  block w-full p-2.5 "
                                value={data.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                            >
                                <option value="">Choose Category</option>
                                <option value="National">National</option>
                                <option value="International">
                                    International
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                for="date_of_achievement"
                                class="block mb-2 text-black font-bold"
                            >
                                Date of Achievement
                            </label>
                            <input required={true}
                                name="date_of_achievement"
                                type="date"
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.date_of_achievement}
                                onChange={(e) =>
                                    setData(
                                        "date_of_achievement",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div>
                            <label
                                for="video_url"
                                class="block mb-2 text-black font-bold"
                            >
                                Videos
                            </label>
                            <input required={true}
                                name="video_url"
                                type="text"
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.video_url}
                                onChange={(e) =>
                                    setData("video_url", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label
                                for="snapshot"
                                class="block mb-2 text-black font-bold"
                            >
                                Snapshots
                            </label>
                            <input required={true}
                                name="snapshot"
                                type="file"
                                class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                //value={data.snapshot}
                                onChange={(e) =>
                                    setData("snapshot", e.target.files[0])
                                }
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-center">
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SuccessStoriesForm
