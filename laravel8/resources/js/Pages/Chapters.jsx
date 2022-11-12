import { Head } from "@inertiajs/inertia-react";
import Posts from "../Components/Posts";
import TrendingPosts from "../Components/TrendingPosts";
import UserPosts from "../Components/UserPosts";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Chapters
                </h2>
            }
        >
            <Head title="Chapters" />
            <div>
                <div className="flex flex-col flex-1">
                    <main className="pb-16 overflow-y-auto">
                        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-3 ">
                            <div className="col-span-2">
                                <div className="flex flex-row mt-5 justify-center">
                                    <div className="container mr-4 mt-10 px-6 text-gray-500 md:px-12 xl:px-0 mb-5 ">
                                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                                            <img
                                                className="w-full"
                                                src="/assets/ski_logo.png"
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    Coimbatore Chapter
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Voluptatibus quia,
                                                    nulla! Maiores et
                                                    perferendis eaque,
                                                    exercitationem praesentium
                                                    nihil.
                                                </p>
                                            </div>
                                            {/*<div className="px-6 pt-4 pb-2">*/}
                                            {/*    <span*/}
                                            {/*        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>*/}
                                            {/*    <span*/}
                                            {/*        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>*/}
                                            {/*    <span*/}
                                            {/*        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                    <div className="container mr-4 mt-10 px-6 text-gray-500 md:px-12 xl:px-0 mb-5 ">
                                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                                            <img
                                                className="w-full"
                                                src="/assets/ski_logo.png"
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    Chennai Chapter
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Voluptatibus quia,
                                                    nulla! Maiores et
                                                    perferendis eaque,
                                                    exercitationem praesentium
                                                    nihil.
                                                </p>
                                            </div>
                                            {/*<div className="px-6 pt-4 pb-2">*/}
                                            {/*    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
                                            {/*        #photography*/}
                                            {/*    </span>*/}
                                            {/*    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
                                            {/*        #travel*/}
                                            {/*    </span>*/}
                                            {/*    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
                                            {/*        #winter*/}
                                            {/*    </span>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                    <div className="container mt-10 px-6 text-gray-500 md:px-12 xl:px-0 mb-5 ">
                                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                                            <img
                                                className="w-full"
                                                src="/assets/ski_logo.png"
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    Bangalore Chapter
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Voluptatibus quia,
                                                    nulla! Maiores et
                                                    perferendis eaque,
                                                    exercitationem praesentium
                                                    nihil.
                                                </p>
                                            </div>
                                            {/*<div className="px-6 pt-4 pb-2">*/}
                                            {/*    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
                                            {/*        #photography*/}
                                            {/*    </span>*/}
                                            {/*    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
                                            {/*        #travel*/}
                                            {/*    </span>*/}
                                            {/*    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">*/}
                                            {/*        #winter*/}
                                            {/*    </span>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
