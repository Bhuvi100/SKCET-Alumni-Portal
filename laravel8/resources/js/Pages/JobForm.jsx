import React from "react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const JobForm = () => {
    const { data, setData, errors, post } = useForm({
        job_title: "",
        company: "",
        workPlace_type: "",
        employment_type: "",
        job_location: "",
        experience: "",
        skills: "",
        tools: "",
        job_description: "",
        link: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("jobSubmit"), {
            onSuccess: (res) => {
                alert("Success");
            },
        });
    }

    return (
        <div id="bg" class="pt-6">
            <div class="max-w-2xl  mx-auto bg-white p-5 rounded-lg shadow-inner border-solid border-2 border-gray-100">
                <div
                    class="font-lg mb-2 mt-5"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h4 class="text-2xl font-semibold mt-4 mb-4 pb-1">
                        JOB
                        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
                            OPPORTUNITIES
                        </span>
                    </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
                        <div>
                            <label
                                for="job_title"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Job Title
                            </label>
                            <input
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                name="job_title"
                                id="job_title"
                                value={data.job_title}
                                onChange={(e) =>
                                    setData("job_title", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                for="company"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Company
                            </label>
                            <input
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                name="company"
                                id="company"
                                value={data.company}
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                for="workPlace_type"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                WorkPlace Type
                            </label>
                            <select
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                name="workPlace_type"
                                id="workPlace_type"
                                value={data.workPlace_type}
                                onChange={(e) =>
                                    setData("workPlace_type", e.target.value)
                                }
                                required={true}
                            >
                                <option value="" selected>
                                    Select Type
                                </option>
                                <option value="On-Site">On-Site</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="job_location"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Job Location
                            </label>
                            <input
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                name="job_location"
                                id="job_location"
                                value={data.job_location}
                                onChange={(e) =>
                                    setData("job_location", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                for="employment_type"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Employment Type
                            </label>
                            <select
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                name="employment_type"
                                id="employment_type"
                                value={data.employment_type}
                                onChange={(e) =>
                                    setData("employment_type", e.target.value)
                                }
                                required={true}
                            >
                                <option value="" selected>
                                    Select Type
                                </option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="experience"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Experience
                            </label>
                            <input
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                name="experience"
                                id="experience"
                                value={data.experience}
                                onChange={(e) =>
                                    setData("experience", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                for="skills"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Skills
                            </label>
                            <input
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                name="skills"
                                id="skills"
                                value={data.skills}
                                onChange={(e) =>
                                    setData("skills", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                for="tools"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Tools
                            </label>
                            <input
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                name="tools"
                                id="tools"
                                value={data.tools}
                                onChange={(e) =>
                                    setData("tools", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="job_description"
                            class="block mb-2 text-black dark:text-gray-900"
                        >
                            Job Description
                        </label>
                        <input
                            type="text"
                            class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            name="job_description"
                            id="job_description"
                            value={data.job_description}
                            onChange={(e) =>
                                setData("job_description", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label
                            for="link"
                            class="block mt-2 mb-2 text-black dark:text-gray-900"
                        >
                            Link
                        </label>
                        <input
                            type="text"
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required
                            name="link"
                            id="link"
                            value={data.link}
                            onChange={(e) => setData("link", e.target.value)}
                        />
                    </div>
                    <br />
                    <div class="flex items-center justify-center">
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center"
                            style={{
                                background:
                                    "linear-gradient(to right, #2A2A72, #009FFD)",
                            }}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobForm;
