import React from "react";
import GlareHover from "../../Animation/GlareHover";
import GlareEffect from "../../Animation/GlareHover";
import { LuHand } from "react-icons/lu";
import ProfileCard from "../../Animation/ProfileCard";
import amolProfile from "../../assets/amol-profile.png"

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center px-4 py-20 gap-8">
      <div className="lg:w-[69%] ">
        <p className=" text-white nunito-font relative mb-8">
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
          <div className="flex-grow border-t border-[#252525] w-1/4"></div>
          <span className="text-[#ababab] w-3/4">
            Passionate Frontend Web Developer specializing in React, JavaScript,
            Tailwind CSS, and Firebase. Expanding into full-stack MERN
            development through real-world projects. Skilled in responsive
            design, authentication, and API integration. Seeking opportunities
            to grow, contribute, and build impactful web solutions in
            collaborative, forward-thinking teams.
          </span>
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
