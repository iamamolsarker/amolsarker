import React from "react";
import { LuHand } from "react-icons/lu";
import ProfileCard from "../../Animation/ProfileCard";
import amolProfile from "../../assets/amol-profile.png";

const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto flex  px-4 py-20 mt-20 gap-8">
      <div className="lg:w-[69%] ">
        <p className=" text-white relative mb-8">
          <span className="inline-block text-2xl absolute wave">
            <LuHand color="#D4FE1A" />
          </span>
          <span className="pl-8 text-lg">Hi! I am Amol Sarker</span>
        </p>
        <h2 className="text-4xl text-white text-pretty">
          A passionate Web Developer dedicated to{" "}
          <span className="text-gradient">
            building impactful web solutions.
          </span>
        </h2>
        <div className=" my-4">
          <p className="text-lg text-[#ababab]">
            I am a non-CSE Business Graduate who is truly passionate about the
            Tech Industry. I always had a dream of becoming a tech professional,
            but due to a lack of proper guidance, I chose Business Studies
            instead of Science. I thought I would become a banker someday.
            <br />
            <br />
            After completing my graduation in Business, I made a bold decision
            and enrolled in a short course on WordPress. Since then, I have
            worked as a freelance web developer for the last six years.
            Throughout this journey, I have learned how to communicate
            effectively with clients and manage deadlines efficiently, working
            with clients from all over the world.
            <br />
            <br />
            Later, I realized the need to upskill myself with a proper
            programming language. So, I joined a bootcamp where I learned new
            technologies like JavaScript, React, Node.js, Express, MongoDB,
            Firebase Auth, and JWT. I have gained in-depth knowledge of each
            topic and built several real-world projects that solve actual
            problems.
            <br />
            <br />
            Now, I am confident in building effective solutions for businesses.
            I have the mindset to continuously learn and update myself in this
            ever-changing field, always striving to stay relevant and capable of
            delivering impactful results.
          </p>
        </div>
      </div>
      <div className="lg:w-[31%] relaive">
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
          className="!sticky top-40"
        />
      </div>
    </section>
  );
};

export default AboutMe;
