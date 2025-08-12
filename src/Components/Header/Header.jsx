import React, { useState, useEffect } from "react";
import { RxDownload } from "react-icons/rx";
import logo from "../../assets/amol-logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { Github, Linkedin, Mail, Phone, Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", section: "hero" },
    { label: "About", link: "/about-me" },
    { label: "Skills", section: "skills" },
    { label: "Experience", section: "experience" },
    { label: "Education", section: "education" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (item) => {
  if (item.link) {
    if (item.link === "/about-me") {
      // Always navigate to /about-me
      if (location.pathname !== "/about-me") {
        navigate("/about-me");
        setIsMenuOpen(false);
      }
      // No scrolling on about-me route
      return;
    }

    if (location.pathname !== item.link) {
      navigate(item.link);
      setIsMenuOpen(false);
    }

    // For Home ("/"), if section exists and already on home, scroll
    if (item.link === "/" && item.section && location.pathname === "/") {
      scrollToSection(item.section);
    }
  } else if (item.section) {
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${item.section}`);
      setIsMenuOpen(false);
    } else {
      scrollToSection(item.section);
    }
  }
};


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "top-2" : "top-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="backdrop-blur-md bg-white/10 border border-white/20 rounded-4xl lg:rounded-full p-2 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 pl-1">
              <Link to={"/"}>
                <img src={logo} alt="" className="w-[100px]" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-3 rounded-full font-semibold text-[#111111] bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] hover:opacity-90 flex items-center gap-1.5 tracking-wider cursor-pointer">
                <span>Download CV</span>{" "}
                <span>
                  <RxDownload />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <button className="px-6 py-3 rounded-full font-semibold text-[#111111] bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] hover:opacity-90 flex items-center gap-1.5 tracking-wider cursor-pointer">
                  <span>Download CV</span>{" "}
                  <span>
                    <RxDownload />
                  </span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
