import React, { useEffect } from "react";
import GuestLayout from "../../Layouts/GuestLayout";
import InputError from "../../Components/InputError";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.update"));
    };

    return (
        <GuestLayout>
            <div className="h-full">
                <Head>
                    <title>Reset Password</title>
                </Head>
                <section className="min-h-screen h-full gradient-form bg-gray-200 grid place-items-center">
                    <div className="container py-12 px-6 h-full">
                        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div className="xl:w-10/12">
                                <div className="block bg-white shadow-lg rounded-lg">
                                    <div className="lg:flex lg:flex-wrap g-0">
                                        <div className="lg:w-6/12 px-4 md:px-0">
                                            <div className="md:p-12 md:mx-6">
                                                <div className="text-center">
                                                    <img
                                                        className="mx-auto w-48"
                                                        src="https://www.padhaishala.com/logo-img/121-skcet-coimbatore.jpg"
                                                        alt="logo"
                                                    />
                                                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                                                        Once Again Welcome To
                                                        SKCET Family !
                                                    </h4>
                                                </div>
                                                <form onSubmit={submit}>
                                                    <div>
                                                        <label
                                                            htmlFor={"email"}
                                                            className="mb-4"
                                                        >
                                                            Please enter your
                                                            email:
                                                        </label>
                                                        <div>
                                                            <div className="mb-4">
                                                                <input
                                                                    type="text"
                                                                    autoComplete="email"
                                                                    name="email"
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                    id="email"
                                                                    placeholder="Email"
                                                                    isFocused={
                                                                        true
                                                                    }
                                                                    onChange={
                                                                        onHandleChange
                                                                    }
                                                                />
                                                                <InputError
                                                                    message={
                                                                        errors.email
                                                                    }
                                                                    className="mt-2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label
                                                            htmlFor="password"
                                                            className="mb-4"
                                                        >
                                                            Please enter your
                                                            new password:
                                                        </label>
                                                        <div>
                                                            <div className="mb-4">
                                                                <input
                                                                    autoComplete="new-password"
                                                                    type="password"
                                                                    name="password"
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                    id="password"
                                                                    placeholder="Password"
                                                                    isFocused={
                                                                        true
                                                                    }
                                                                    onChange={
                                                                        onHandleChange
                                                                    }
                                                                />
                                                                <InputError
                                                                    message={
                                                                        errors.password
                                                                    }
                                                                    className="mt-2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label
                                                            htmlFor="password_confirmation"
                                                            className="mb-4"
                                                        >
                                                            Please confirm your
                                                            new password:
                                                        </label>
                                                        <div>
                                                            <div className="mb-4">
                                                                <input
                                                                    autoComplete="new-password"
                                                                    type="password"
                                                                    name="password_confirmation"
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                    id="password_confirmation"
                                                                    placeholder="Password Confirmation"
                                                                    isFocused={
                                                                        true
                                                                    }
                                                                    onChange={
                                                                        onHandleChange
                                                                    }
                                                                />
                                                                <InputError
                                                                    message={
                                                                        errors.password_confirmation
                                                                    }
                                                                    className="mt-2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="text-center pt-1 mb-12 pb-1">
                                                        <button
                                                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                            disabled={
                                                                processing
                                                            }
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(to right, #2A2A72, #009FFD)",
                                                            }}
                                                        >
                                                            {processing
                                                                ? "Loading.."
                                                                : "Reset Password"}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, #2A2A72, #009FFD)",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
