import React  from "react"
import Alumni from "../components/Alumni"
import IndexFooter from "../components/IndexFooter"
import IndexHeader from "../components/IndexHeader"
import Members from "../components/Members"
import StarAlumni from "../components/StarAlumni"
import SuccessStories from "../components/SuccessStories"

const Landing = () => {
    return (
    <div>
        <IndexHeader />
        <Members />
        <StarAlumni />
        <IndexFooter />
    </div>
    )
}

export default Landing
