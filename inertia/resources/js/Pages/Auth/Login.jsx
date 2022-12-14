import React, { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({
    status,
    message,
    canResetPassword,
    is_authenticated,
    email_not_found,
    email_not_signed,
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const [emailNotFound, setEmailNotFound] = useState(
        errors.email === email_not_found
    );

    const [emailNotSigned, setEmailNotSigned] = useState(
        errors.email === email_not_signed
    );

    useEffect(() => {
        setEmailNotSigned(false);
        setEmailNotFound(false);
        return () => {
            reset("password");
        };
    }, []);

    useEffect(() => {
        if (status && message) {
            alert(message);
        }
    }, [status, message]);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

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

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head>
                <title>Login</title>
            </Head>
            <section class="min-h-screen h-full gradient-form bg-gray-200 grid place-items-center">
                <div class="container py-12 px-6 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="xl:w-10/12">
                            <div class="block bg-white shadow-lg rounded-lg">
                                <div class="lg:flex lg:flex-wrap g-0">
                                    <div class="lg:w-6/12 px-4 md:px-0">
                                        <div class="md:p-12 md:mx-6">
                                            <div class="text-center">
                                                <img
                                                    class="mx-auto w-48"
                                                    src="https://www.padhaishala.com/logo-img/121-skcet-coimbatore.jpg"
                                                    alt="logo"
                                                />
                                                <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                                                    Once Again Welcome To SKCET
                                                    Family !
                                                </h4>
                                            </div>
                                            <form onSubmit={submit}>
                                                <p class="mb-4">
                                                    Please login to your account
                                                </p>
                                                <div>
                                                    <div class="mb-4">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="email"
                                                            placeholder="Email"
                                                            isFocused={true}
                                                            onChange={
                                                                onHandleChange
                                                            }
                                                            onBlur={(e) => {
                                                                checkEmail(e);
                                                            }}
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.email
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                    {!(
                                                        emailNotFound ||
                                                        emailNotSigned
                                                    ) ? (
                                                        <div class="mb-4">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                id="password"
                                                                placeholder="Password"
                                                                isFocused={true}
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
                                                    ) : emailNotFound ? (
                                                        <div>
                                                            <div className="text-center pt-1 mb-12 pb-1">
                                                                <Link
                                                                    href={route(
                                                                        "register"
                                                                    )}
                                                                    className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                                    data-mdb-ripple="true"
                                                                    data-mdb-ripple-color="light"
                                                                    style={{
                                                                        background:
                                                                            "linear-gradient(to right, #2A2A72, #009FFD)",
                                                                    }}
                                                                >
                                                                    Register
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div className="text-center pt-1 mb-12 pb-1">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        post(
                                                                            route(
                                                                                "register.complete_mail"
                                                                            )
                                                                        );
                                                                    }}
                                                                    className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                                    data-mdb-ripple="true"
                                                                    data-mdb-ripple-color="light"
                                                                    style={{
                                                                        background:
                                                                            "linear-gradient(to right, #2A2A72, #009FFD)",
                                                                    }}
                                                                >
                                                                    Send Profile
                                                                    Completion
                                                                    Mail
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {!(
                                                    emailNotFound ||
                                                    emailNotSigned
                                                ) ? (
                                                    <div>
                                                        <div className="block mt-4">
                                                            <label className="flex items-center">
                                                                <Checkbox
                                                                    name="remember"
                                                                    value={
                                                                        data.remember
                                                                    }
                                                                    handleChange={
                                                                        onHandleChange
                                                                    }
                                                                />

                                                                <span className="ml-2 text-sm text-gray-600">
                                                                    Remember me
                                                                </span>
                                                            </label>
                                                        </div>

                                                        <div class="text-center pt-1 mb-12 pb-1">
                                                            <button
                                                                class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
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
                                                                    ? "Logging in...."
                                                                    : "Log in"}
                                                            </button>
                                                            <Link
                                                                class="text-gray-500"
                                                                href={route(
                                                                    "password.request"
                                                                )}
                                                            >
                                                                Forgot password?
                                                            </Link>
                                                        </div>

                                                        <div class="flex items-center justify-between pb-6">
                                                            <p class="mb-0 mr-2">
                                                                Not a part of
                                                                our community
                                                                yet ?{" "}
                                                                <Link
                                                                    class="text-gray-500"
                                                                    href={route(
                                                                        "register"
                                                                    )}
                                                                >
                                                                    Join Now
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
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
        </GuestLayout>
    );
}
