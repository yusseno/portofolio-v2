import React from "react";
import Header from "./Header";
import Home from "./Home";


const Layout = () => {
    return (
        <div className="scroll-smooth overflow-hidden">
            <Header />
            <Home />
        </div>
    )
};

export default Layout;