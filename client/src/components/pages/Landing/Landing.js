import React from "react";
import "./style.css";
import LandingJumbo from "../../LandingJumbo/LandingJumbo";
// import Footer from "../../Footer/footer";
import SearchResults from "../../Results/results";
import DisplayMap from "../../map/map";


function Landing() {

    return (
        <div className="container-fluid p-0 m-0">
            <div className="d-flex justify-content-center backgroundImg">
                <LandingJumbo />
            </div>
            < DisplayMap />
            < SearchResults
            />
        </div>

    );
}


export default Landing;