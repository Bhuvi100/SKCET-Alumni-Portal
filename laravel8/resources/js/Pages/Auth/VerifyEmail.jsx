import React, { useEffect } from "react";
import GuestLayout from "../../Layouts/GuestLayout";
import PrimaryButton from "../../Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputError from "../../Components/InputError";

export default function VerifyEmail({ status, message }) {
    const { post, processing } = useForm();

    useEffect(() => {
        if (status && message) {
            alert(message);
        }
    }, [status, message]);

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            {/*<Head title="Email Verification" />*/}

            {/*<div className="mb-4 text-sm text-gray-600">*/}
            {/*    Thanks for signing up! Before getting started, could you verify your email address by clicking on the*/}
            {/*    link we just emailed to you? If you didn't receive the email, we will gladly send you another.*/}
            {/*</div>*/}

            {/*{status === 'verification-link-sent' && (*/}
            {/*    <div className="mb-4 font-medium text-sm text-green-600">*/}
            {/*        A new verification link has been sent to the email address you provided during registration.*/}
            {/*    </div>*/}
            {/*)}*/}

            {/*<form onSubmit={submit}>*/}
            {/*    <div className="mt-4 flex items-center justify-between">*/}
            {/*        <PrimaryButton processing={processing}>Resend Verification Email</PrimaryButton>*/}

            {/*        <Link*/}
            {/*            href={route('logout')}*/}
            {/*            method="post"*/}
            {/*            as="button"*/}
            {/*            className="underline text-sm text-gray-600 hover:text-gray-900"*/}
            {/*        >*/}
            {/*            Log Out*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</form>*/}

            <div className="h-full">
                <Head>
                    <title>Verify Email</title>
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
                                                    <p className="mb-4">
                                                        Thanks for signing up!
                                                        Before getting started,
                                                        could you verify your
                                                        email address by
                                                        clicking on the link we
                                                        just emailed to you? If
                                                        you didn't receive the
                                                        email, we will gladly
                                                        send you another.
                                                    </p>

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
                                                                : "Resend Verification Email"}
                                                        </button>

                                                        <Link
                                                            href={route(
                                                                "logout"
                                                            )}
                                                            method="post"
                                                            as="button"
                                                            className="inline-block px-6 py-2.5 underline bg-danger text-sm text-gray-600 hover:text-gray-900"
                                                        >
                                                            Log Out
                                                        </Link>
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
