import React, {useEffect, useState} from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Country from "../../Components/Country";
import InfoForm from "./InfoForm";
import { useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";

function Register() {
    const [next, setNext] = useState(0);
    const [resetPage, setResetPage] = useState(false)

    const [error, setError] = useState({
        password: "",
        password_confirmation: "",
    });

    const { data, setData, post, processing, reset, errors } = useForm({
        email: "",
        password: "",
        name: "",
        designation: "",
        city_state: "",
        password_confirmation: "",
        phone: "",
        organization: "",
        organization_email: "",
        department: "",
        batch_from: "",
        batch_to: "",
        areas_of_expertise: "",
        category: "",
        country: "India",
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
        validateInput(e);
    };

    function submit(e) {
        e.preventDefault();

        if (data.country === undefined || data.country === null) {
            setData("country", "India");
        }

        setResetPage(false)

        post(route("register"));
    }

    const checkEmail = (e) => {
        post(route("validate_email"), {
            onSuccess: (e) => {
                setEmailNotFound(false);
                setEmailNotSigned(false);
            },
            onError: (res) => {
                setEmailNotFound(false);
                setEmailNotSigned(false);
                if (res.email === email_not_found) {
                    setEmailNotFound(true);
                } else if (res.email === email_not_signed) {
                    setEmailNotSigned(true);
                }
            },
        });
    };

    const validateInput = (e) => {
        let { name, value } = e.target;
        setError((prev) => {
            const stateObj = {
                ...prev,
                [name]: "",
            };
            switch (name) {
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (
                        data.password_confirmation &&
                        value !== data.password_confirmation
                    ) {
                        stateObj["password_confirmation"] =
                            "Password does not match.";
                    } else {
                        stateObj[
                            "password_confirmation"
                        ] = data.password_confirmation
                            ? ""
                            : error.password_confirmation;
                    }
                    break;
                case "password_confirmation":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (data.password && value !== data.password) {
                        stateObj[name] = "Password does not match.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    };

    useEffect(() => {
        if (errors && Object.keys(errors).length && !resetPage) {
            setResetPage(true)
            setNext(0)
        }
    }, [errors])

    return (
        <div class="admin-bg pt-2 md:pt-6">
            {next === 0 ? (
                <div class="max-w-5xl mt-0 md:mt-24 mx-auto bg-white p-5 pt-0 md:pt-5 rounded-lg shadow-inner border-solid border-2 border-gray-100 ">
                    <div
                        class="font-lg mt-2"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h4 class="text-3xl font-semibold mt-4 mb-4 pb-1">
                            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
                                REGISTER
                            </span>
                        </h4>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setNext(1);
                        }}
                    >
                        <div class="flex justify-center items-center w-full mt-2">
                            <label
                                for="dropzone-file"
                                class="flex flex-col justify-center items-center bg-white rounded-full border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100  dark:hover:border-gray-500 dark:hover:bg--600"
                            >
                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg
                                        aria-hidden="true"
                                        class="mb-3 w-5 h-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        ></path>
                                    </svg>
                                    <p class="mb-2 text-sm dark:text-black">
                                        <span class="font-semibold">
                                            Set Profile Picture
                                        </span>
                                    </p>
                                    <p class="text-xs dark:text-black">
                                        (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    class="hidden"
                                    name="picture"
                                    accept=".jpg,.png,.jpeg"
                                    onChange={(e) => {
                                        setData("picture", e.target.files[0]);
                                    }}
                                />
                            </label>
                        </div>
                        <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
                            <div>
                                <label
                                    for="Full Name"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                    required
                                    name="name"
                                    onChange={onInputChange}
                                    value={data.name}
                                />
                                <InputError
                                    message={errors.name}
                                    class="mt-2"
                                />
                            </div>
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                    required
                                    autoComplete="on"
                                    name="email"
                                    onChange={onInputChange}
                                    value={data.email}
                                />
                                <InputError
                                    message={errors.email}
                                    class="mt-2"
                                />
                            </div>
                            <div>
                                <label
                                    for="Mob"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Phone Number
                                </label>
                                <div class="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring">
                                    <PhoneInput
                                        defaultCountry="IN"
                                        name="phone"
                                        onChange={(val) =>
                                            setData("phone", val)
                                        }
                                        value={data.phone}
                                        required={true}
                                    />
                                    <InputError
                                        message={errors.phone}
                                        class="mt-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="job"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    class="block w-full px-4 py-4 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                    required
                                    name="designation"
                                    onChange={onInputChange}
                                    value={data.designation}
                                />
                                <InputError
                                    message={errors.designation}
                                    class="mt-2"
                                />
                            </div>
                        </div>
                        <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
                            <div>
                                <label
                                    for="city"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    City and State
                                </label>
                                <input
                                    type="text"
                                    class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    name="city_state"
                                    onChange={onInputChange}
                                    value={data.city_state}
                                />
                                <InputError
                                    message={errors.city_state}
                                    class="mt-2"
                                />
                            </div>
                            <div>
                                <label
                                    for="ad1"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Country
                                </label>
                                <div class="mt-2.5">
                                    <Country
                                        name="country"
                                        onChange={setData}
                                        value={
                                            data.country !== undefined
                                                ? data.country
                                                : "India"
                                        }
                                    />
                                    <InputError
                                        message={errors.country}
                                        class="mt-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="pass"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                    defaultValue={""}
                                    class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                                <InputError
                                    message={
                                        error.password
                                            ? error.password
                                            : errors.country
                                    }
                                    class="mt-2"
                                />
                            </div>
                            <div>
                                <label
                                    for="con_pass"
                                    class="block mb-2 text-black dark:text-gray-900"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    defaultValue={""}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                    class="bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                                <InputError
                                    message={
                                        error.password_confirmation
                                            ? error.password_confirmation
                                            : errors.password_confirmation
                                    }
                                    class="mt-2"
                                />
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <button
                                type={"submit"}
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <InfoForm
                    next={setNext}
                    data={data}
                    submit={submit}
                    onInputChange={onInputChange}
                    errors={errors}
                    processing={processing}
                />
            )}
        </div>
    );
}
export default Register;
