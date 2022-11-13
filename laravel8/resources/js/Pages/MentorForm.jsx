import React from "react";
import "../../css/app.css";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const MentorForm = (props) => {
    const { data, setData, errors, post } = useForm({
        // name: "",
        // phone: "",
        method_of_guidance: "",
        department: "",
        area_of_expertise: "",
        mentor_experience: "",
        specific_concern: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("mentorFormSubmit"), {
            onSuccess: (res) => {
                alert("Successful");
            },
        });
    }

    return (
        <div id="bg" class="pt-12">
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
                        MENTOR
                        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
                            FORM
                        </span>
                    </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
                        <div>
                            <label
                                for="name"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Full Name
                            </label>
                            <input required={true}
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Email
                            </label>
                            <input required={true}
                                type="email"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                for="mobile"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Mobile Number
                            </label>
                            <input required={true}
                                type="tel"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label
                                for="method_of_guidance"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Method Of Guidance
                            </label>
                            <select
                                required={true}
                                name="method_of_guidance"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                value={data.method_of_guidance}
                                onChange={(e) =>
                                    setData(
                                        "method_of_guidance",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="" selected>Select Method</option>
                                <option value="In_Person">In Person</option>
                                <option value="Virtual">Virtual</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="department"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Department
                            </label>
                            <select
                                required={true}
                                name="department"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring "
                                value={data.department}
                                onChange={(e) =>
                                    setData("department", e.target.value)
                                }
                            >
                                <option value="" selected>Choose the department</option>
                                <option value="B.Tech Artificial Intelligence and Data Science">
                                    B.Tech Artificial Intelligence and Data
                                    Science
                                </option>
                                <option value="B.E. Civil Engineering">
                                    B.E. Civil Engineering
                                </option>
                                <option value="B.E. Computer Science and Engineering">
                                    B.E. Computer Science and Engineering
                                </option>
                                <option value="B.E. Computer Science and Engineering (Cyber Security) ">
                                    B.E. Computer Science and Engineering (Cyber
                                    Security){" "}
                                </option>
                                <option value="B.E. Computer Science and Design">
                                    B.E. Computer Science and Design
                                </option>
                                <option value="B.E. Electrical and Electronics Engineering">
                                    B.E. Electrical and Electronics Engineering
                                </option>
                                <option value="B.E. Electronics and Communication Engineering">
                                    B.E. Electronics and Communication
                                    Engineering
                                </option>
                                <option value="B.E. Mechanical Engineering">
                                    B.E. Mechanical Engineering
                                </option>
                                <option value="B.E. Mechatronics Engineering">
                                    B.E. Mechatronics Engineering
                                </option>
                                <option value="B.Tech Information Technology">
                                    B.Tech Information Technology
                                </option>
                                <option value="B.Tech Computer Science and Business Systems (Powered by TCS)">
                                    B.Tech Computer Science and Business Systems
                                    (Powered by TCS)
                                </option>
                                <option value="M.Tech. Computer Science and Engineering (Powered by Virtusa)">
                                    M.Tech. Computer Science and Engineering
                                    (Powered by Virtusa)
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                for="expertise"
                                class="block mb-2 text-black dark:text-gray-900"
                            >
                                Area Of Expertise
                            </label>
                            <input required={true}
                                name="area_of_expertise"
                                type="text"
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required
                                value={data.area_of_expertise}
                                onChange={(e) =>
                                    setData("area_of_expertise", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="experience"
                            class="block mb-2 text-black dark:text-gray-900"
                        >
                            Briefly describe prior experience you have with
                            mentoring.{" "}
                        </label>
                        <input required={true}
                            name="mentor_experience"
                            type="text"
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required
                            value={data.mentor_experience}
                            onChange={(e) =>
                                setData("mentor_experience", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label
                            for="specific_concern"
                            class="block mt-5 mb-2 text-black dark:text-gray-900"
                        >
                            Do you have any specific concerns you'd want us to
                            be aware of?
                        </label>
                        <input required={true}
                            name="specific_concern"
                            type="text"
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required
                            value={data.specific_concern}
                            onChange={(e) =>
                                setData("specific_concern", e.target.value)
                            }
                        />
                    </div>
                    <div class="flex items-center mt-4 justify-center">
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center mt-2"
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

export default MentorForm
