import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Project from "./Project"
import Contact from "./Contact";
import Sosial_media from "./Social_media";

const Layout = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Home />
            <About />
            <Experience />
            <Work />
            <Project />
            <Contact />
            <Sosial_media />
        </div>
    )
};

export default Layout;