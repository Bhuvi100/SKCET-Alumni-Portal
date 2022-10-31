import Members from "@/Components/Members";
import React from "react";
import IndexFooter from "../Components/IndexFooter";
import IndexHeader from "../Components/IndexHeader";
import StarAlumni from "../Components/StarAlumni";
import SuccessStories from "../Components/SuccessStories";

const Landing = () => {
    return (
        <div>
            <IndexHeader />      
            <Members />
            <StarAlumni />
            <IndexFooter />
        </div>
    );
};

export default Landing;
