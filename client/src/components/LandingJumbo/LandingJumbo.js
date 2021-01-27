import React, { Component } from "react";


class LandingJumbo extends Component {
    render() {
        return (
            <div className="jumbotron mt-5 landingJumbo">
                <div className='col-sm-8 mx-auto jumboText'>
                    <h2 className='d-flex justify-content-center companyName'>
                        <div className="sidebar-brand-icon rotate-n-15 mr-2">
                            <i />
                        </div>
                        <div className="text-center">Walking Track Finder</div>
                    </h2>
                    <h3 className='text-center companySlogan'>Search to find a track near you!</h3>
                </div>
            </div>
        );
    }
}

export default LandingJumbo;