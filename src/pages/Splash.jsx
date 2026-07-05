import React from "react";
import { portfolioData } from "../data";

const Splash = () => {
    return (
        <div className="splash-container">
            <div className="splash-logo">&lt;{portfolioData.nickname}/&gt;</div>
            <div className="splash-bar-wrap">
                <div className="splash-bar" />
            </div>
        </div>
    );
};

export default Splash;
