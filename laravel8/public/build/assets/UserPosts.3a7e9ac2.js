import{d as S,u as j,a as e,j as t,F as E,r as l}from"./app.97712f0c.js";function M(){return S.defaults.headers.common={Accept:"application/json"},S}const A=r=>{const{data:f,setData:i,setDefaults:p,errors:g,post:c,reset:b,transform:d}=j({title:r.data.title,description:r.data.description});function u(a){a.preventDefault(),console.log(r.data.title),console.log(r.data.pid),c(route("updatePost",`${r.data.id}`,{onSuccess:w=>{console.log("sucessfull")}})),console.log(pid)}return e("div",{children:t(E,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",children:e("form",{onSubmit:u,children:t("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[e("div",{className:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",children:e("h3",{className:"text-3xl font-semibold",children:"Update post"})}),t("div",{class:"editor mx-auto w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl ",children:[e("input",{class:"title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none",spellcheck:"false",placeholder:"Title",type:"text",name:"title",onChange:a=>{i("title",a.target.value),console.log(dtitle+ddescription)},defaultValue:r.data.title}),e("textarea",{class:"w-96 bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none",spellcheck:"false",placeholder:"Describe everything about this post here",name:"description",defaultValue:r.data.description,onChange:a=>i("description",a.target.value)})]}),e("div",{class:"icons flex text-gray-500 m-2",children:t("label",{children:[e("svg",{class:"mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})}),e("input",{type:"file",accept:".png, .jpg, .jpeg",class:"hidden"})]})}),t("div",{className:"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",children:[e("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>r.setShowModal(!1),children:"Close "}),e("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"submit",children:"Save Changes "})]})]})})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})})},G=r=>{const[f,i]=l.exports.useState([]),[p,g]=l.exports.useState([]),[c,b]=l.exports.useState(0),[d,u]=l.exports.useState(!1),[a,w]=l.exports.useState(!1),[N,v]=l.exports.useState(!1),[m,B]=l.exports.useState(0),[D,H]=l.exports.useState(0),[z,y]=l.exports.useState("none"),[P,L]=l.exports.useState(!1);l.exports.useState(""),l.exports.useState("");const{data:U,setData:h,errors:q,post:V}=j({comment_id:null,description:""});function k(o){o.preventDefault(),V(route("addComment",`${m}`),{onSuccess:n=>{C(m),console.log("sucessfull")},onError:()=>{console.log("error")},onFinish:()=>{console.log("finished")}})}l.exports.useEffect(()=>{M().get("http://127.0.0.1:8000/Posts").then(o=>{console.log(o.data),g(o.data.posts)})},[]);const C=o=>{u(!d),B(o),M().get(`http://127.0.0.1:8000/getComment/${o}`).then(n=>{i(n.data),console.log("heloo"),console.log(n.data)}),console.log(o)};return t("div",{children:[N!==!1&&e(A,{data:c,setShowModal:v}),p.map((o,n)=>t("div",{class:"bg-white shadow rounded-lg pb-4 mt-7",children:[t("div",{class:"flex flex-row px-2 py-2 mx-3",children:[e("div",{class:"w-auto h-auto rounded-full border-2 border-green-500",children:e("img",{class:"w-12 h-12 object-cover rounded-full shadow cursor-pointer",alt:"User avatar",src:o.user.picture_url})}),t("div",{class:"flex flex-col mb-2 ml-4 mt-1",children:[t("div",{class:"flex text-blue-700 text-sm font-semibold",children:[o.user.name,t("div",{className:"ml-5 text-gray-600 text-sm mr-1 cursor-pointer",children:[o.user.designation," at"," "+o.user.organization]})]}),t("div",{class:"flex w-full",children:[e("div",{class:"text-gray-400 font-thin text-xs",children:o.created_at}),e("div",{onClick:()=>{b(o),v(n)},className:"ml-4 -mt-1",children:e("small",{children:"Edit"})})]})]})]}),e("div",{class:"border-b border-gray-100 p-4"}),e("div",{class:"text-gray-600 font-semibold mt-2  mb-2 mx-3 px-2",children:o.title}),e("div",{class:"text-gray-500 text-sm mb-6 mx-3 px-2",children:o.description}),t("div",{class:"flex w-full border-t border-gray-100",children:[t("div",{class:"mx-4 mt-2 flex flex-row",children:[e("span",{className:"transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"14px",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})})}),e("span",{className:"transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer",onClick:()=>{w(!a),y(a?"blue":"none")},children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:z,viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"blue",className:"w-6 h-6",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"})})})]}),t("div",{class:"mt-3 mx-5 flex flex-row text-xs",children:[t("button",{class:"flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center",onClick:()=>C(o.id),children:["Comments:",t("div",{class:"ml-1 text-gray-400 text-ms",children:[" ","0"]})]}),t("div",{class:"flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center",children:["Likes"," ",t("div",{class:"ml-1 text-gray-400 text-ms",children:[" ","0"]})]})]})]}),d&&o.id==m&&f.map(s=>e("section",{class:"relative flex items-center justify-center p-3 antialiased bg-white bg-gray-100 min-w-screen",children:e("div",{class:"container px-0 mx-auto sm:px-5",children:t("div",{class:"flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 ",children:[t("div",{class:"flex flex-row ",children:[e("img",{class:"object-cover w-12 h-12 border-2 border-gray-300 rounded-full",alt:"Noob master's avatar",src:"https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"}),t("div",{class:"flex-col mt-1",children:[t("div",{class:"flex items-center flex-1 px-4 font-bold leading-tight",children:[s.user.name,e("span",{class:"ml-2 text-xs font-normal text-gray-500",children:"2 weeks ago"})]}),e("div",{class:"flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600",children:s.description}),e("button",{class:"inline-flex items-center px-1 pt-2 ml-1 flex-column",onClick:()=>{L(!0),h("comment_id",s.id),H(s.id),console.log(D)},children:e("svg",{class:"w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900",viewBox:"0 0 95 78",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z","fill-rule":"nonzero"})})})]})]}),s.replies.map(x=>t("div",{children:[e("hr",{class:"my-2 ml-16 border-gray-200"}),t("div",{class:"flex flex-row pt-1 md-10 md:ml-16",children:[e("img",{class:"w-12 h-12 border-2 border-gray-300 rounded-full",alt:"Emily's avatar",src:"https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"}),t("div",{class:"flex-col mt-1",children:[t("div",{class:"flex items-center flex-1 px-4 font-bold leading-tight",children:[s.user.name,e("span",{class:"ml-2 text-xs font-normal text-gray-500",children:"5 days ago"})]}),e("div",{class:"flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600",children:x.description})]})]})]})),P&&U.comment_id===s.id&&t("form",{class:"relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400",onSubmit:k,children:[e("img",{class:"w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer",alt:"User avatar",src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}),e("span",{class:"absolute inset-y-0 right-0 flex items-center pr-6",children:e("button",{type:"submit",class:"p-1 focus:outline-none focus:shadow-none hover:text-blue-500",children:t("svg",{class:"ml-1",viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[e("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})}),e("input",{type:"text",name:"description",class:"w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue",placeholder:"Post a comment...",autocomplete:"off",onChange:x=>h("description",x.target.value)})]})]})})})),t("form",{onSubmit:k,class:"relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400",children:[e("img",{class:"w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer",alt:"User avatar",src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}),e("span",{class:"absolute inset-y-0 right-0 flex items-center pr-6",children:e("button",{type:"submit",class:"p-1 focus:outline-none focus:shadow-none hover:text-blue-500",children:t("svg",{class:"ml-1",viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[e("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})}),e("input",{type:"text",name:"description",class:"w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue",placeholder:"Post a comment...",autocomplete:"off",onChange:s=>h("description",s.target.value)})]})]}))]})},W=G;export{W as U};