import{a as e,j as o}from"./app.97712f0c.js";import{A as d}from"./AuthenticatedLayout.2297b464.js";import{C as l}from"./Country.e2279fa4.js";import{I as s}from"./InputError.f23b55fb.js";const p=({user:r,auth:i,errors:t})=>e(d,{auth:i,errors:t,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Profile"}),children:o("form",{style:{margin:"5rem"},className:"m-5 p-5 border border-gray-300",children:[e("div",{children:o("div",{class:"md:grid md:grid-cols-3 md:gap-6",children:[e("div",{class:"md:col-span-1",children:o("div",{class:"px-4 sm:px-0",children:[e("h3",{class:"text-lg font-medium leading-6 text-gray-900 mb-7",children:"Profile"}),e("div",{class:"image overflow-hidden",children:e("img",{class:"h-96 w-auto mb-4 mx-auto",src:"/assets/Alumni-Images/2.jpg",alt:"Not available"})})]})}),e("div",{class:"mt-5 md:col-span-2 md:mt-0",children:e("form",{action:"@/Pages/Profile/UpdateProfile#",method:"POST",children:o("div",{class:"overflow-hidden shadow sm:rounded-md",children:[o("div",{class:"bg-white px-4 py-5 sm:p-6",children:[o("div",{class:"grid grid-cols-6 gap-6",children:[o("div",{class:"col-span-6 sm:col-span-3",children:[e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700",children:"Name"}),e("input",{type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"})]}),o("div",{children:[e("label",{htmlFor:"ad1",className:"block mb-2 text-black dark:text-gray-900",children:"Country"}),o("div",{className:"mt-2.5",children:[e(l,{name:"country",onChange:setData,value:data.country!==void 0?data.country:"India"}),e(s,{message:t.country,class:"mt-2"})]})]}),o("div",{class:"col-span-6 sm:col-span-3 lg:col-span-3",children:[e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700",children:"Phone Number"}),e("input",{type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"})]}),o("div",{class:"col-span-6 sm:col-span-3 lg:col-span-3",children:[e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700",children:"City & State"}),e("input",{type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"})]})]}),o("div",{children:[e("label",{class:"block text-sm font-medium text-gray-700 mt-4",children:"Profile photo"}),e("div",{class:"mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6",children:o("div",{class:"space-y-1 text-center",children:[e("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),o("div",{class:"flex text-sm text-gray-600",children:[o("label",{for:"file-upload",class:"relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",children:[e("span",{children:"Upload a file"}),e("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only"})]}),e("p",{class:"pl-1",children:"or drag and drop"})]}),e("p",{class:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})]}),e("div",{class:"bg-gray-50 px-4 py-3 text-right sm:px-6",children:e("button",{type:"submit",class:"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Save"})})]})})})]})}),e("div",{class:"hidden sm:block","aria-hidden":"true",children:e("div",{class:"py-5",children:e("div",{class:"border-t border-gray-200"})})}),e("div",{class:"mt-10 sm:mt-0",children:o("div",{class:"md:grid md:grid-cols-3 md:gap-6",children:[e("div",{class:"md:col-span-1",children:e("div",{class:"px-4 sm:px-0",children:e("h3",{class:"text-lg font-medium leading-6 text-gray-900",children:"Professional Information"})})}),e("div",{class:"mt-5 md:col-span-2 md:mt-0",children:e("form",{action:"@/Pages/Profile/UpdateProfile#",method:"POST",children:o("div",{class:"shadow sm:overflow-hidden sm:rounded-md",children:[o("div",{class:"space-y-6 bg-white px-4 py-5 sm:p-6",children:[o("div",{class:"col-span-6 sm:col-span-3 lg:col-span-2",children:[e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700",children:"Organization Name"}),e("input",{type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"})]}),e("div",{children:o("div",{class:"col-span-6 sm:col-span-3 lg:col-span-2",children:[e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700",children:"Organization Email"}),e("input",{type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"})]})}),o("div",{class:"col-span-6 sm:col-span-3 lg:col-span-3",children:[e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700",children:"Designation"}),e("input",{type:"text",name:"postal-code",id:"postal-code",autocomplete:"postal-code",class:"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"})]}),o("div",{children:[e("label",{for:"expertise",class:"block  mt-2 mb-2 text-black dark:text-gray-900",children:"Select the Area of Expertise"}),o("select",{class:"block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring",children:[e("option",{selected:!0,children:"Select the Area of Expertise"}),e("option",{children:"AI/ML"}),e("option",{children:"Cyber Security"}),e("option",{children:"Devops"}),e("option",{children:"AR / VR"}),e("option",{children:"IOT"}),e("option",{children:"Robotics"}),e("option",{children:"CAD"}),e("option",{children:"Design & Architecture"})]})]}),o("div",{children:[e("label",{for:"dept",class:"block  mt-2 mb-2 text-black dark:text-gray-900",children:"Categories"}),o("select",{class:"block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring",children:[e("option",{selected:!0,children:"Select an option"}),e("option",{children:"Engineering"}),e("option",{children:"Information Technology"}),e("option",{children:"Entrepreneurs"}),e("option",{children:"Others"})]})]})]}),e("div",{class:"bg-gray-50 px-4 py-3 text-right sm:px-6",children:e("button",{type:"submit",class:"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Save"})})]})})})]})})]})});export{p as default};
