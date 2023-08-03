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
                <div className="flex flex-row flex-1">
                    <main className="pb-16 overflow-y-auto mt-16">
                        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-3 grid-cols-1 grid-rows-1 md:grid-rows-3 gap-10">
                            <div className="col-span-2">
                                <div className="flex flex-col md:flex-row mt-5 justify-center">
                                    <div className="container mr-4 mt-10 px-6 text-gray-500 md:px-12 xl:px-0 mb-5 ">
                                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                                            <img
                                                className="w-full h-4/5"
                                                src="/assets/Coimbatore.jpg"
                                                alt="Coimbatore Chapter"
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    Coimbatore Chapter
                                                </div>
                                                <p className="text-gray-700 text-xl">
                                                    Being the Hometown of Sri
                                                    Krishna Family, Coimbatore
                                                    chapter plays a major role
                                                    in SKCET's Alumni Network.
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
                                                className="w-full h-4/5"
                                                src="/assets/Chennai.jpeg"
                                                alt="Chennai Chapter"
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    Chennai Chapter
                                                </div>
                                                <p className="text-gray-700 text-xl">
                                                    As the Capital city and the
                                                    largest city of Tamilnadu,
                                                    Chennai chapter is dedicated
                                                    for those who are living in
                                                    Chennai.
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
                                                className="w-full h-4/5"
                                                src="/assets/Bangalore.jpeg"
                                                alt="Bangalore Chapter"
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    Bangalore Chapter
                                                </div>
                                                <p className="text-gray-700 text-xl">
                                                    As the center of India's
                                                    high-tech industry,
                                                    Bangalore Chapter is catered
                                                    to alumni residing in
                                                    Bangalore.
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