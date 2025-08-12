import React from "react";
import logo from "../../assets/amol-logo.png";
import { Link } from "react-router";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 mb-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl lg:rounded-xl p-4 shadow-2xl ">
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <Link to={"/"}>
            <img src={logo} alt="" className="w-[100px]" />
          </Link>
          </div>
          <div className="flex gap-3 text-xl justify-center items-center w-1/3">
            <a
              href="https://www.linkedin.com/in/iamamolsarker/"
              target="_blank"
            >
              <BiLogoLinkedin />
            </a>
            <a href="https://github.com/iamamolsarker" target="_blank">
              <BiLogoGithub />
            </a>
            <a href="https://x.com/iamamolsarker/" target="_blank">
              <RiTwitterXFill />
            </a>
          </div>
          <div className="w-1/3">
            <p className="text-sm text-[#ababab] text-right">
            Website Designed with ❤️ by Amol Sarker
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
