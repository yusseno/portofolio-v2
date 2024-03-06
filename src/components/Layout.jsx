import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

const Layout = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Home />
            <About />
        </div>
    )
};

export default Layout;