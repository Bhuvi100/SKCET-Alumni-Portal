import{u,a as e,j as t}from"./app.97712f0c.js";const b=c=>{const{data:i,setData:r,errors:n,post:s}=u({excelFile:null});function o(l){l.preventDefault(),s(route("uploadUsers",{onSuccess:a=>{console.log("sucessfull")}}))}return e("div",{id:"bg",children:t("div",{class:"max-w-2xl mx-auto bg-slate-200 p-5 mt-5",children:[e("div",{class:"flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2",children:e("h3",{class:"text-lg text-white",children:"User data import"})}),t("form",{onSubmit:o,children:[t("div",{children:[e("label",{for:"ExcelFile",class:"block mb-2 text-black font-bold",children:"Upload Excel File "}),e("input",{name:"ExcelFile",type:"file",class:"bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:l=>r("excelFile",l.target.files[0])})]}),e("div",{class:"flex items-center justify-center",children:e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})})]})]})})};export{b as default};
