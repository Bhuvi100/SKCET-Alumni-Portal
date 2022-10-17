import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import Navbar from "./Navbar";

const IndexHeader = () => {
    return (
        <div
            class="leading-normal tracking-normal text-white gradient"
            style={{
                background: "linear-gradient(to right, #2A2A72, #009FFD)",
                fontFamily: "sans-serif",
            }}
        >
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div class="px-24 mb-11">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between flex-end">
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <p class="text-3xl tracking-loose w-full text-gray-100 font-bold rounded-full tracking-wider">
                            Relive & Reconnect
                        </p>
                        <h1 class="my-4 text-5xl font-bold leading-tight ">
                            Welcome to the Alumni Network of Sri Krishna College
                            Of Engineering & Technology
                        </h1>
                        <p class="leading-normal text-2xl tracking-loose w-full">
                            Not a part of our community yet ?
                        </p>
                        <Link
                            href="/register"
                            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            Join Today
                        </Link>
                    </div>
                    <div class="w-46 mt-7 mb-10">
                        <img
                            class="w-full md:w-3/4 z-50  ml-0 object-center"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            src="/assets/hero.png"
                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div class="relative -mt-20 lg:-mt-24">
                <svg
                    class="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g class="parallax">
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="0"
                            fill="rgba(255,255,255,0.7)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="3"
                            fill="rgba(255,255,255,0.5)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="5"
                            fill="rgba(255,255,255,0.3)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="7"
                            fill="#fff"
                        />
                    </g>
                </svg>
            </div>

            <section class="about" className="bg-white ">
                <div class="text-gray-900 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <p class="leading-relaxed text-lg">
                                We ventured to believe that the bond that former
                                Skcetians had with their professors and friends
                                would strengthen and become much deeper over
                                time.SKCET LinkUP has been given new life with
                                the purpose of increasing the influence of the
                                Skcet Alumni Community on many more lives.Former
                                Skcetians will now get information about the
                                Institution's triumphs, their fellow Skcetians'
                                accomplishments, new life milestones, industry
                                insights, employment opportunities, exciting
                                learning opportunities, and much more.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-gray-800 body-font">
                    <div class="container px-5 mx-auto">
                        <div class="flex flex-wrap m-4">
                            <div class="p-4 md:w-1/2 w-full">
                                <div class="h-full bg-gray-100 p-8 rounded">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#000"
                                        class="block w-5 h-5 text-gray-400 mb-4"
                                        viewBox="0 0 975.036 975.036"
                                    >
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">
                                        To produce Globally competitive
                                        Engineers with Social Responsibilities
                                        and High Ethical Values.
                                    </p>
                                    <div class="inline-flex items-center">
                                        <img
                                            alt="testimonial"
                                            src="/assets/Chairperson.jpg"
                                            class="w-36 h-36 rounded-full flex-shrink-0  object-center"
                                        />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900">
                                                Smt. S Malarvizhi , Chairperson
                                            </span>
                                            <span class="text-gray-500 text-sm">
                                                Sri Krishna Institutions
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/2 w-full">
                                <div class="h-full bg-gray-100 p-8 rounded">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#000"
                                        class="block w-5 h-5 text-gray-400 mb-4"
                                        viewBox="0 0 975.036 975.036"
                                    >
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p class="leading-relaxed mb-6">
                                        To focus on educational stewardship and
                                        create innovative connections in
                                        engineering and technology with
                                        unparalleled student learning
                                        experiences of Global significance.
                                    </p>
                                    <div class="inline-flex items-center">
                                        <img
                                            alt="testimonial"
                                            src="/assets/Principal.jpg"
                                            class="w-36 h-36 rounded-full flex-shrink-0 object-center"
                                        />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="title-font font-medium text-gray-900 ">
                                                Smt. J. Janet , Principal
                                            </span>
                                            <span class="text-gray-500 text-sm">
                                                Sri Krishna College Of
                                                Engineering & Technology
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
        </div>
    );
};

export default IndexHeader
