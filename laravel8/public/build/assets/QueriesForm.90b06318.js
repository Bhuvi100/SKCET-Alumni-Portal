import{u as n,a as e,j as t}from"./app.97712f0c.js";const c=()=>{const{data:l,setData:u,errors:a,post:o}=n({name:"",phone:"",subject:"",query:""});function s(r){r.preventDefault(),o(route("generalQuerySubmit"),{onSuccess:b=>{console.log("sucessfull")}})}return e("div",{id:"bg",children:t("div",{class:"max-w-2xl  mx-auto bg-slate-200 p-5 mt-5",children:[e("div",{class:"flex flex-col justify-center items-center h-12 text-3xl font-extrabold bg-blue-600 mb-2 mt-5",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e("h3",{class:"text-lg text-white",children:"General Queries"})}),t("form",{onSubmit:s,children:[t("div",{children:[t("div",{children:[e("label",{for:"name",class:"block mb-2 text-black font-bold",children:" Name"}),e("input",{type:"text",name:"name",value:l.name,onChange:r=>u("name",r.target.value),class:"bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0}),e("span",{className:"text-red-600",children:a.name})]}),t("div",{children:[e("label",{for:"Mob",class:"block mb-2 text-black font-bold",children:"Mobile Number"}),e("input",{type:"text",name:"phone",value:l.phone,onChange:r=>u("phone",r.target.value),class:"bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0}),e("span",{className:"text-red-600",children:a.phone})]}),t("div",{children:[e("label",{for:"subject",class:"block mb-2 text-black font-bold",children:"Subject"}),e("input",{type:"text",name:"subject",value:l.subject,onChange:r=>u("subject",r.target.value),class:"bg-white border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0}),e("span",{className:"text-red-600",children:a.subject})]}),t("div",{children:[e("label",{for:"job",class:"block mb-2 text-black font-bold",children:"Query"}),e("textarea",{id:"message",rows:"4",name:"query",value:l.query,onChange:r=>u("query",r.target.value),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 mb-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Post your queries..."}),e("span",{className:"text-red-600",children:a.query})]})]}),e("div",{}),e("div",{class:"flex items-center justify-center",children:e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})})]})]})})};export{c as default};
