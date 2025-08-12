import React from "react";
import GlareHover from "../../Animation/GlareHover";
import GlareEffect from "../../Animation/GlareHover";
import { LuHand } from "react-icons/lu";
import ProfileCard from "../../Animation/ProfileCard";
import amolProfile from "../../assets/amol-profile.png"
import AnimatedButton from "../../Animation/AnimatedButton";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center px-4 py-20 gap-8">
      <div className="lg:w-[69%] ">
        <p className=" text-white relative mb-8">
          <span className="inline-block text-2xl absolute wave">
            <LuHand color="#D4FE1A" />
          </span>
          <span className="pl-8 text-lg">Hi! I am Amol Sarker</span>
        </p>
        <h2 className="text-6xl text-white text-pretty">
          A passionate Web Developer dedicated to{" "}
          <span className="text-gradient">
            building impactful web solutions.
          </span>
        </h2>
        <div className="flex items-center my-4 gap-10">
          <div className="flex-grow border-t border-[#343434] w-1/4"></div>
          <div className="w-3/4">
            <p className="text-[#ababab]">With six years of freelance experience in Wordpress as a Elementor Expert, I have worked with different tools like Custom post type, ACF, JetEngine. Now I have grown into a Frontend Web Developer exploring backend technologies skilled in JavaScript, React, Node.js, Express, and MongoDB. I focus on creating clean, responsive, and scalable applications that solve real problems and deliver measurable results for businesses worldwide.</p>
            <AnimatedButton link="/about-me" mainText="Know me better" hoverText="About Me" className="mt-6"/>
          </div>
          
        </div>
      </div>
      <div className="lg:w-[31%]">
        <ProfileCard
          name="Amol Sarker"
          title="Frontend Web Developer"
          handle="iamamolsarker"
          status="Online"
          contactText="Contact Me"
          avatarUrl={amolProfile}
          showUserInfo={true}
          enableTilt={false}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
};

export default AboutSection;
