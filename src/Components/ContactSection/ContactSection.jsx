import React from "react";
import { LuFan, LuMailOpen } from "react-icons/lu";
import { Link } from "react-router";
import GlareHover from "../../Animation/GlareHover";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-20  space-y-15">
      <div className="space-y-3">
        <p className=" text-white text-center relative">
          <span className="inline-block text-2xl absolute animate-spin-slow">
            <LuFan color="#D4FE1A" />
          </span>
          <span className="pl-8">Contact me</span>
        </p>
        <h2 className="text-6xl text-white text-center leading-normal">
          Let's <span className="text-gradient">Connect</span> with me
        </h2>
        <p className="text-center text-lg">
          Let’s connect and create something amazing together!
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.5}
          glareAngle={-40}
          glareSize={350}
          transitionDuration={2000}
          delay={2500}
        >
          <Link
            to={"mailto:amolsarker16@gmail.com"}
            rel="noopener noreferrer"
            className="relative inline-block text-[#111111] font-semibold rounded-full bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] border-2 border-transparent cursor-pointer"
          >
            <span className="flex items-center gap-2 bg-[#111] text-white rounded-full px-6 py-2.5 tracking-wider">
              <LuMailOpen /> Email me
            </span>
          </Link>
        </GlareHover>
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.5}
          glareAngle={-40}
          glareSize={350}
          transitionDuration={2000}
          delay={2500}
        >
          <Link
            to={"tel:+8801683586860"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-[#111111] font-semibold rounded-full bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] border-2 border-transparent cursor-pointer"
          >
            <span className="flex items-center gap-2 bg-[#111] text-white rounded-full px-6 py-2.5 tracking-wider">
              <FaWhatsapp /> Call me
            </span>
          </Link>
        </GlareHover>
      </div>
    </section>
  );
};

export default ContactSection;
