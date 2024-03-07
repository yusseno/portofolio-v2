import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";

const Layout = () => {
    return (
        <div className="overflow-hidden">
            {/* <Header />
            <Home />
            <About /> */}
            <Experience />
        </div>
    )
};

export default Layout;