import React from "react";
import { LuFan } from "react-icons/lu";
import fiverrLogo from "../../assets/skills/fiverr-icon.webp"

const MyExperience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 py-20 space-y-15"
    >
      <div className="flex gap-10">
        <div className="space-y-4 w-4/12">
          <p className=" text-white relative">
            <span className="inline-block text-2xl absolute animate-spin-slow">
              <LuFan color="#D4FE1A" />
            </span>
            <span className="pl-8">My Work History</span>
          </p>
          <h2 className="text-6xl text-white text-pretty">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg">
            Helping global clients achieve success through my expertise.
          </p>
        </div>
        <div className="w-8/12">
          <div className="flex items-center gap-4">
            <div className="w-14">
                <img src={fiverrLogo} alt="" className="w-full"/>
            </div>
            <div className=" flex-1">
            <h2 className="text-2xl">Freelance Web Developer – <span className="text-gradient">WordPress & Elementor Expert</span></h2>
            
            <div className="flex justify-between items-center">
                <p className="text-lg"><span className="text-[#D4FE1A]">Fiverr</span> (Remote – Global Clients)</p>
            <p>Dec 2018 - Present</p>
          </div>
            </div>
          </div>
            <ul className="mt-5 text-[#ababab] space-y-5 list-disc pl-5">
              <li>
                Delivered 200+ responsive, SEO-friendly websites for global
                clients using WordPress, Elementor Pro, and Crocoblock.
              </li>
              <li>
                Specialized in dynamic content with JetEngine, JetSmartFilters,
                and custom post types for complex, scalable site structures.
              </li>
              <li>
                Collaborated with non-technical clients to gather requirements
                and deliver high-quality solutions under tight deadlines.
              </li>
              <li>
                Gained extensive experience in user experience thinking, and
                frontend layout structuring — now transitioning into custom
                coding with HTML, CSS, JavaScript, and React js.
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
