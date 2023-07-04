import "react-phone-number-input/style.css";
import InputError from "@/Components/InputError";

function InfoForm(props) {
    function year(input) {
        const d = new Date();
        let years = [];
        for (let i = 1998; i <= d.getFullYear(); i++) {
            years.push(i);
        }
        
        return (
            <select
                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                required={true}
                name={"batch_" + input}
                onChange={props.onInputChange}
                value={props.data["batch_" + input]}
            >
                <option value="">Choose a year</option>
                {years.map((year) => (
                    <option value={year}>{year}</option>
                ))}{" "}
            </select>
        );
    }

    return (
        <div class="admin-bg pt-2 bg-right md:pt-6">
            <div class="max-w-2xl mx-auto md:mt-16 mx-auto bg-white p-5 pt-0 md:pt-5 rounded-lg shadow-inner border-solid border-2 border-gray-100 ">
                <div class="grid grid-cols-3 grid-rows-1">
                    <button
                        onClick={() => props.next(0)}
                        class="text-black bg-transparent  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto text-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 -mt-5 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </button>
                    <div
                        class="font-lg mt-2"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h4 class="text-3xl font-semibold  mb-4 pb-1">
                            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
                                REGISTER
                            </span>
                        </h4>
                    </div>
                    <div></div>
                </div>
                <form onSubmit={props.submit}>
                    <div>
                        <label
                            for="org"
                            class="block mb-2 text-black dark:text-gray-900"
                        >
                            Organization Name
                        </label>
                        <input
                            type="text"
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required
                            name="organization"
                            onChange={props.onInputChange}
                            value={props.data.organization}
                        />
                        <InputError
                            message={props.errors.organization}
                            class="mt-2"
                        />
                    </div>
                    <div>
                        <label
                            for="org"
                            class="block mt-2 mb-2 text-black dark:text-gray-900"
                        >
                            Organization-Email
                        </label>
                        <input
                            type="email"
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required
                            name="organization_email"
                            onChange={props.onInputChange}
                            value={props.data.organization_email}
                        />
                        <InputError
                            message={props.errors.organization_email}
                            class="mt-2"
                        />
                    </div>
                    <div>
                        <label
                            for="dept"
                            class="block mt-2 mb-2 text-black dark:text-gray-900"
                        >
                            Department
                        </label>
                        <select
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required={true}
                            name="department"
                            onChange={props.onInputChange}
                            value={props.data.department}
                        >
                            <option value="">Choose the department</option>
                            <option
                                value={
                                    "B.Tech Artificial Intelligence and Data Science"
                                }
                            >
                                B.Tech Artificial Intelligence and Data Science
                            </option>
                            <option value={"B.E. Civil Engineering"}>
                                B.E. Civil Engineering
                            </option>
                            <option
                                value={"B.E. Computer Science and Engineering"}
                            >
                                B.E. Computer Science and Engineering
                            </option>
                            <option
                                value={
                                    "B.E. Computer Science and Engineering (Cyber Security)"
                                }
                            >
                                B.E. Computer Science and Engineering (Cyber
                                Security)
                            </option>
                            <option value={"B.E. Computer Science and Design"}>
                                B.E. Computer Science and Design
                            </option>
                            <option
                                value={
                                    "B.E. Electrical and Electronics Engineering"
                                }
                            >
                                B.E. Electrical and Electronics Engineering
                            </option>
                            <option
                                value={
                                    "B.E. Electronics and Communication Engineering"
                                }
                            >
                                B.E. Electronics and Communication Engineering
                            </option>
                            <option value={"B.E. Mechanical Engineering"}>
                                B.E. Mechanical Engineering
                            </option>
                            <option value={"B.E. Mechatronics Engineering"}>
                                B.E. Mechatronics Engineering
                            </option>
                            <option value={"B.Tech Information Technology"}>
                                B.Tech Information Technology
                            </option>
                            <option
                                value={
                                    "B.Tech Computer Science and Business Systems (Powered by TCS)"
                                }
                            >
                                {" "}
                                B.Tech Computer Science and Business Systems
                                (Powered by TCS)
                            </option>
                            <option
                                value={
                                    "M.Tech. Computer Science and Engineering (Powered by Virtusa)"
                                }
                            >
                                M.Tech. Computer Science and Engineering
                                (Powered by Virtusa)
                            </option>
                        </select>
                        <InputError
                            message={props.errors.department}
                            class="mt-2"
                        />
                    </div>
                    <div>
                        <label
                            for="dept"
                            class="block mt-2 mb-2 text-black dark:text-gray-900"
                        >
                            Batch From
                        </label>
                        {year("from")}
                        <InputError
                            message={props.errors.batch_from}
                            class="mt-2"
                        />
                    </div>
                    <div>
                        <label
                            for="dept"
                            class="block mt-2 mb-2 text-black dark:text-gray-900"
                        >
                            Batch To
                        </label>
                        {year("to")}
                        <InputError
                            message={props.errors.batch_to}
                            class="mt-2"
                        />
                    </div>
                    <div>
                        <label
                            for="dept"
                            class="block mt-2 mb-2 text-black dark:text-gray-900"
                        >
                            Area of Expertise
                        </label>
                        <select
                            class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            required={true}
                            name="areas_of_expertise"
                            onChange={props.onInputChange}
                            value={props.data.areas_of_expertise}
                        >
                            <option value={""}>
                                Select an area of expertise
                            </option>
                            <option value="AI/ML">AI/ML</option>
                            <option value="Cyber Security">
                                Cyber Security
                            </option>
                            <option value="Devops">Devops</option>
                            <option value="AR / VR">AR / VR</option>
                            <option value="IOT">IOT</option>
                            <option value="Robotics">Robotics</option>
                            <option value="CAD">CAD</option>
                            <option value="Design & Architecture">
                                Design & Architecture
                            </option>
                        </select>
                        <InputError
                            message={props.errors.areas_of_expertise}
                            class="mt-2"
                        />
                    </div>
                    <div>
                        <div>
                            <label
                                for="dept"
                                class="block  mt-2 mb-2 text-black dark:text-gray-900"
                            >
                                Category
                            </label>
                            <select
                                class="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                                required={true}
                                name="category"
                                onChange={props.onInputChange}
                                value={props.data.category}
                            >
                                <option value="">Select a category</option>
                                <option value={"Employed"}>Employed</option>
                                <option value={"Unemployed"}>Unemployed</option>
                                <option value={"Freelancer"}>Freelancer</option>
                                <option value={"Entrepreneurs"}>
                                    Entrepreneurs
                                </option>
                                <option value={"Others"}>Others</option>
                            </select>
                            <InputError
                                message={props.errors.category}
                                class="mt-2"
                            />
                        </div>
                    </div>
                    <br />
                    <div class="flex justify-center items-center pt-5 pb-6">
                        <button
                            type="submit"
                            disabled={props.processing}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center"
                            style={{
                                background:
                                    "linear-gradient(to right, #2A2A72, #009FFD)",
                            }}
                        >
                            {props.completeProfile ? (props.processing ?  "Submitting...." : "Complete Profile") : (props.processing ?  "Registering...." : "Register")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InfoForm;
