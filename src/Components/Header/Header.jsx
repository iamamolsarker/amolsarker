import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Download, Menu, X } from "lucide-react";
import { RxDownload } from "react-icons/rx";
import logo from "../../assets/amol-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   const menuItems = [
//     { label: "Home", section: "hero" },
//     { label: "About", section: "about" },
//     { label: "Skills", section: "skills" },
//     { label: "Experience", section: "experience" },
//     { label: "Education", section: "education" },
//     { label: "Projects", section: "projects" },
//     { label: "Contact", section: "contact" },
//   ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "top-2" : "top-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="backdrop-blur-md bg-white/10 border border-white/20 rounded-4xl lg:rounded-full px-6 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="" className="w-[140px]" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                >
                  {item.label}
                </button>
              ))} */}
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
                {/* {menuItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                ))} */}
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
