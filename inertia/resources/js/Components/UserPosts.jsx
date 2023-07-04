import React from "react";
import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
// import axios from '../utils/axios';
import axios from "@/utils/axios";
import Modal from "./Modal";

const UserPosts = (props) => {
    const [comment, setComment] = useState([]);
    const [postdata, setPostdata] = useState([]);
    const [pid, setPid] = useState(0);
    const [com, setCom] = useState(false);
    const [tr, setTr] = useState(false);
    const [showMod, setShowMod] = useState(false);
    const [postid, setPostid] = useState(0);
    const [likeid, setLikeid] = useState(0);
    const [commentid, setCommentid] = useState(0);
    const [liked, setLiked] = useState("none");
    const [rep, setRep] = useState(false);
    const [dtitle, setDtitle] = useState("");
    const [ddescription, setDdescription] = useState("");

    const { data, setData, errors, post } = useForm({
        comment_id: null,
        description: "",
    });
    
    const handleLikes = (post_id) => {
        setTr(!tr);
        setPostid(post_id);
        console.log(postid);
        post(route("addlike", `${post_id}`), {
            onSuccess: (res) => {
                GetLikes(post_id);
                console.log("sucessfull");
            },
            onError: () => {
                console.log("error");
            },
            onFinish: () => {
                console.log("finished");
            },
        });
        
        tr ? setLiked("blue") : setLiked("none");
    }

    function handleSubmitCommentsAndReply( post_id) {
        //e.preventDefault();
        console.log(post_id)
        post(route("addComment", `${post_id}`), {
            onSuccess: (res) => {
                GetComments(post_id);
                console.log("sucessfull");
            },
            onError: () => {
                console.log("error");
            },
            onFinish: () => {
                console.log("finished");
            },
        });
    }

    function handleSubmitLikes( post_id) {
        
        post(route("likes", `${post_id}`), {
            onSuccess: (res) => {
                GetComments(post_id);
                console.log("sucessfull");
            },
            onError: () => {
                console.log("error");
            },
            onFinish: () => {
                console.log("finished");
            },
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

 

    const GetComments = (post_id) => {
        console.log(post_id);
        setCom(!com);
        setPostid(post_id);
        axios()
            .get(`http://127.0.0.1:8000/getComment/${post_id}`)
            .then((response) => {
                setComment(response.data);
                console.log("heloo");
                console.log(response.data);
            });
        console.log(post_id);
    };

    return (
        <div className="mr-3">
            {showMod !== false && (
                <Modal data={pid} setShowModal={setShowMod} />
            )}
       {console.log(props.post)}
            {props.post && props.post.data.map((posts, index) => (
                <div class="bg-white shadow rounded-lg pb-4 mt-7">
                    <div class="flex flex-row px-2 py-2 mx-3">
                        <div class="w-auto h-auto rounded-full border-2 border-green-500">
                            <img
                                class="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                                alt="User avatar"
                                src={posts.user.picture_url}
                            />
                        </div>
                        <div class="flex flex-col mb-2 ml-4 mt-1">
                            <div class="flex text-blue-700 text-sm font-semibold">
                                {posts.user.name}
                                <div className="ml-3 text-gray-600 text-sm mr-1 cursor-pointer">
                                    {posts.user.designation} at
                                    {" " + posts.user.organization}
                                </div>
                            </div>
                            <div class="flex w-full">
                                <div class="text-gray-400 font-thin text-xs">
                                    {posts.created_at}
                                </div>
                                <div
                                    onClick={() => {
                                        setPid(posts);
                                        setShowMod(index);
                                    }}
                                    className="ml-4 -mt-1"
                                >
                                    <small>Edit</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-gray-100 p-4"></div>

                    <div class="text-gray-600 font-semibold mt-2  mb-2 mx-3 px-2">
                        {posts.title}
                    </div>
                    <div class="text-gray-500 text-sm mb-6 mx-3 px-2">
                        {posts.description}
                       
                    </div>
                    <div class="flex w-full border-t border-gray-100">
                        <div class="mx-4 mt-2 flex flex-row"><span
                            className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="14px"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    ></path>
                                </svg>
                            </span>
                            <span
                                className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer"
                                onClick={() => {handleLikes(posts.id)}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={liked}
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="blue"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                    />
                                </svg>
                            </span></div>
                        <div class="mt-3 mx-5 flex flex-row text-xs">
                        
                            <button
                                class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"
                                onClick={() => { GetComments(posts.id)} }
                            >
                                Comments:
                                <div class="ml-1 text-gray-400 text-ms">
                                    {" "}
                                    0
                                </div>
                            </button>
                            <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                                Likes{" "}
                                <div class="ml-1 text-gray-400 text-ms">
                                    {" "}
                                    {posts.likes ? posts.likes:0} {posts.liked_by_user? 1:0}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  comment section */}

                    {com &&
                        posts.id == postid &&
                        comment.map((obj) => (
                            <section class="relative flex items-center justify-center p-3 antialiased bg-white bg-gray-100 min-w-screen">
                                <div class="container px-0 mx-auto sm:px-5">
                                    <div class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 ">
                                        <div class="flex flex-row ">
                                            <img
                                                class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                                                alt="Noob master's avatar"
                                                src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                                            />
                                            <div class="flex-col mt-1">
                                                <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                                                    {obj.user.name}
                                                    <span class="ml-2 text-xs font-normal text-gray-500">
                                                        2 weeks ago
                                                    </span>
                                                </div>
                                                <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                                    {obj.description}
                                                </div>
                                                <button
                                                    class="inline-flex items-center px-1 pt-2 ml-1 flex-column"
                                                    onClick={() => {
                                                        setRep(true);
                                                        setData(
                                                            "comment_id",
                                                            obj.id
                                                        );
                                                        setCommentid(obj.id);
                                                        console.log(commentid);
                                                    }}
                                                >
                                                    <svg
                                                        class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                                        viewBox="0 0 95 78"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                                            fill-rule="nonzero"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        {obj.replies.map((reply) => (
                                            <div>
                                                <hr class="my-2 ml-16 border-gray-200" />
                                                <div class="flex flex-row pt-1 md-10 md:ml-16">
                                                    <img
                                                        class="w-12 h-12 border-2 border-gray-300 rounded-full"
                                                        alt="Emily's avatar"
                                                        src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                                                    />
                                                    <div class="flex-col mt-1">
                                                        <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                                                            {obj.user.name}
                                                            <span class="ml-2 text-xs font-normal text-gray-500">
                                                                5 days ago
                                                            </span>
                                                        </div>
                                                        <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                                            {reply.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {rep && data.comment_id === obj.id && (
                                            <form
                                                class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
                                                onSubmit={
                                                    (e) => 
                                                    handleSubmitCommentsAndReply(posts.id)
                                                }
                                            >
                                                <img
                                                    class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                                                    alt="User avatar"
                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                                                />
                                                <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                                                    <button
                                                        type="submit"
                                                        class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                                                    >
                                                        <svg
                                                            class="ml-1"
                                                            viewBox="0 0 24 24"
                                                            width="16"
                                                            height="16"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            fill="none"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        >
                                                            <line
                                                                x1="22"
                                                                y1="2"
                                                                x2="11"
                                                                y2="13"
                                                            ></line>
                                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                        </svg>
                                                    </button>
                                                </span>

                                                {/* <input type="hidden" id="comment_id" name="comment_id" value={obj.id} /> */}
                                                <input
                                                    type="text"
                                                    name="description"
                                                    class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                                                    placeholder="Post a comment..."
                                                    autocomplete="off"
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </section>
                        ))}

                    <form
                        onSubmit={(e) => {e.preventDefault(),handleSubmitCommentsAndReply(posts.id)}}
                        class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
                    >
                        <img
                            class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                            alt="User avatar"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                        />
                        <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                            <button
                                type="submit"
                                class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                            >
                                <svg
                                    class="ml-1"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </span>

                        <input
                            type="text"
                            name="description"
                            class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                            placeholder="Post a comment..."
                            autocomplete="off"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                    </form>
                </div>
            ))}
        </div>
    );
};

export default UserPosts;