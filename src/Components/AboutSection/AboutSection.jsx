import React from "react";
import GlareHover from "../../Animation/GlareHover";
import GlareEffect from "../../Animation/GlareHover";
import { LuHand } from "react-icons/lu";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div>
        <p className=" text-white nunito-font relative mb-8">
          <span className="inline-block text-2xl absolute wave">
            <LuHand color="#D4FE1A" />
          </span>
          <span className="pl-8 text-lg">Hi! I am Amol Sarker</span>
        </p>
        <h2 className="text-6xl text-white text-pretty lg:w-3/4">A passionate Web Developer dedicated to<span className="text-gradient">building impactful web solutions.</span></h2>
      </div>
      <div>

      </div>
    </div>
  );
};

export default AboutSection;
