import React  from "react"
import Alumni from "../components/Alumni"
import IndexFooter from "../components/IndexFooter"
import IndexHeader from "../components/IndexHeader"
import StarAlumni from "../components/StarAlumni"
import SuccessStories from "../components/SuccessStories"

const Landing = () => {
    return (
    <div>
        <IndexHeader />
        {/* <StarAlumni /> */}
        <Alumni />
        {/* <SuccessStories /> */}
        <IndexFooter />
    </div>
    )
}

export default Landing