import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Y-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const styleNav = "mb-2 lg:mb-0 lg:ml-3 lg:mr-3 hover:text-[#64FFDA]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const shouldShow = currentScrollPos < prevScrollPos || currentScrollPos < 100;

    setIsScrolled(shouldShow);
    setPrevScrollPos(currentScrollPos);

    if (currentScrollPos > prevScrollPos) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isScrolled, setIsScrolled] = useState(true);

  const headerStyle = {
    position: isScrolled ? "fixed" : "absolute",
    width: "100%",
    zIndex: 1000,
    transition: "all 0.3s ease",
  };

  return (
    <nav style={headerStyle} className="lg:flex font-mono lg:bg-[#09192F] text-slate-200 pt-0lg:flex lg:px-16 lg:pt-8">
      <div className="flex items-center bg-[#09192F] justify-between p-6">
        <div className="">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none focus:text-white">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <ul className={`${isMenuOpen ? 'text-center pt-4 backdrop-blur-md h-screen inset-y-0' : 'hidden' } lg:flex lg:items-center pt-10 lg:pt-0 lg:ml-auto`}>
        <li className={styleNav}>
          <Link to="/about">About</Link>
        </li>
        <li className={styleNav}>
          <Link to="/experience">Experience</Link>
        </li>
        <li className={styleNav}>
          <Link to="/work">Work</Link>
        </li>
        <li className={styleNav}>
          <Link to="/project">Project</Link>
        </li>
        <li className={`${styleNav} m-auto w-fit px-4 lg:my-0 lg:mr-10 border-[1px] rounded-md border-[#64FFDA] text-[#64FFDA]`}>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;