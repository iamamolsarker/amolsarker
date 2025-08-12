import React from "react";
import "../../Pages/home.css";
import DecryptText from "../../Animation/DecryptText";
import { RxDownload } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import GlareHover from "../../Animation/GlareHover";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section id="hero" className="hero-bg min-h-[750px] md:min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="py-20 flex flex-col justify-center items-center gap-6 text-center max-w-screen-lg w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient">
          <DecryptText text="Amol Sarker" speed={50} />
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-4">
          Frontend Web Developer | React • JavaScript • Firebase • Tailwind CSS
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl px-4">
          I build fast, responsive, and user-friendly web interfaces using
          modern frontend technologies. Currently focused on React, while
          expanding into full-stack development with the MERN stack.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
          <Link to={"https://drive.google.com/uc?export=download&id=1fXHiVk-3FmvMM4KSRDLwG7sECdjxQefi"} target="_blank" rel="noopener noreferrer" download className="px-6 py-3 rounded-full font-semibold text-[#111111] bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] hover:opacity-90 flex items-center gap-2 tracking-wider cursor-pointer">
            <span>Download CV</span>
            <RxDownload />
          </Link>
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.5}
            glareAngle={-40}
            glareSize={350}
            transitionDuration={2000}
            delay={2500}
          >
            <Link to={"/projects"} className="relative inline-block text-[#111111] font-semibold rounded-full bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] border-2 border-transparent cursor-pointer">
              <span className="flex items-center gap-2 bg-[#111] text-white rounded-full px-6 py-2.5 tracking-wider">
                Projects <FaReact className="animate-spin-slow" />
              </span>
            </Link>
          </GlareHover>
        </div>
      </div>
    </section>
  );
};

export default Hero;
