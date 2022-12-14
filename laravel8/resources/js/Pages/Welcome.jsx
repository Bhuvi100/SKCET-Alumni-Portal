import Members from "../Components/Members";
import React from "react";
import IndexFooter from "../Components/IndexFooter";
import IndexHeader from "../Components/IndexHeader";
import StarAlumni from "../Components/StarAlumni";
import { Head } from "@inertiajs/inertia-react";

const Landing = () => {
    return (
        <div>
            <Head>
                <title>LinkUP | SKCET's Official Alumni Network</title>
            </Head>
            <IndexHeader />
            <Members />
            <StarAlumni />
            <IndexFooter />
        </div>
    );
};

export default Landing;
