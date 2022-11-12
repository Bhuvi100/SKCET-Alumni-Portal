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
                    Events
                </h2>
            }
        >
            <Head title="Events" />
            <div>
            <div class="bg-white p-3 shadow-sm rounded-sm mt-8">
                <div class="flex flex-column md:flex-row items-center space-x-2 font-semibold text-gray-900 leading-8" style = {{width : "80vw", height : "100vh"}}>

               
                                            <img
                                                className="w-50 h-50"
                                                style = {{width : "70vw", height : "70vh"}}
                                                src="/assets/invitation.jfif"
                                                alt="Sunset in the mountains"
                                            />
                                            <div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-4xl mb-4">
                                                    Alumni Meeting
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                As the branches of a tree, each one of us grow in different directions, yet our roots remain as one.

One such cherished root is our home, SKCET, where not only skilled engineers but good citizens are born.
Our home, SKCET has been constantly developing since the day it was rooted and shines brighter day by day. 
So are the children of SKCET. We introduce you, SKCET's LinkUp, Reconnect and Relive, the official and indigenous Alumni Network of SKCET where we could stay connected to cherish the memories and to create new ones. 

                                                </p>
                                            </div>

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
              
                       
          
            </div>
        </AuthenticatedLayout>
    );
}
