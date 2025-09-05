import React from 'react';
import { LuCodeXml, LuFan, LuGlobe } from 'react-icons/lu';
import project1 from '../../assets/projectMockup/SportSync-Project-Mockup-for-personal-website.avif'
import project2 from '../../assets/projectMockup/TaskMarket-Project-Mockup-for-personal-website.avif'
import project3 from '../../assets/projectMockup/EduBridge-Project-Mockup-for-personal-website.avif'
import project4 from '../../assets/projectMockup/Infinityt-Project-Mockup-for-personal-website.avif'
import { Link } from 'react-router';

const Projects = () => {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 py-20 mt-20 space-y-15">
              <div className="space-y-3 ">
                <p className=" text-white  relative">
                  <span className="inline-block text-2xl absolute animate-spin-slow">
                    <LuFan color="#D4FE1A" />
                  </span>
                  <span className="pl-8">My Works</span>
                </p>
                <h2 className="text-6xl text-white  leading-normal">
                  My Selected <span className="text-gradient">Projects</span>
                </h2>
                <p className=" text-lg">
                  Selected works demonstrating my skills in full-stack web development.
                </p>
              </div>
              <div className='grid grid-cols-2 gap-8'>
                <div className='gradient-border '>
                    <img src={project1} alt="" className='rounded-t-[15px]'/>
                    <div className='p-6 space-y-3'>
                        <h2 className='text-2xl text-gradient'>SportSync | An Athletic Event Booking Platform</h2>
                    <p className='text-[#ababab]'>sportSync is an Athletic Event Booking Platform that connects athletes and sports lovers with local athletic events. Users can browse upcoming competitions, book their favorite events, and manage their own or hosted events. The project is a full-stack web application built with React, Firebase Authentication, Express, and MongoDB.</p>
                    <div className='flex items-center gap-5'>
                        <Link to={'https://sport-sync-ass-11.web.app/'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#ababab] hover:text-[#D4FE1A]'><LuGlobe/> Live Site</Link>
                        <Link to={'https://github.com/iamamolsarker/SportSync-A-Sport-Booking-Event-Website'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#ababab] hover:text-[#39EEBE]'><LuCodeXml /> Code</Link>
                    </div>
                    </div>
                </div>
                <div className='gradient-border '>
                    <img src={project2} alt="" className='rounded-t-[15px]'/>
                    <div className='p-6 space-y-3'>
                        <h2 className='text-2xl text-gradient'>Task Market | A Freelance Marketplace</h2>
                    <p className='text-[#ababab]'>Task Market is a Freelance Marketplace that connects clients and freelancers worldwide. Users can post projects, browse skilled professionals, hire talent, and manage ongoing tasks. The platform is a full-stack web application built with React, Firebase Authentication, Express, and MongoDB.</p>
                    <div className='flex items-center gap-5'>
                        <Link to={'https://task-market.surge.sh/'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#ababab] hover:text-[#D4FE1A]'><LuGlobe/> Live Site</Link>
                        <Link to={'https://github.com/iamamolsarker/Task-Market'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#ababab] hover:text-[#39EEBE]'><LuCodeXml /> Code</Link>
                    </div>
                    </div>
                </div>
                <div className='gradient-border '>
                    <img src={project3} alt="" className='rounded-t-[15px]'/>
                    <div className='p-6 space-y-3'>
                        <h2 className='text-2xl text-gradient'>EduBridge | Education Platform</h2>
                    <p className='text-[#ababab]'>EduBridge is an Education Platform that connects learners and educators globally. Users can explore courses, enroll in classes, track progress, and engage with instructors. The platform is a full-stack web application built with React, Firebase Authentication, Express, and MongoDB.</p>
                    <div className='flex items-center gap-5'>
                        <Link to={'https://edubridge-97121.web.app/'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#ababab] hover:text-[#D4FE1A]'><LuGlobe/> Live Site</Link>
                        
                    </div>
                    </div>
                </div>
                <div className='gradient-border '>
                    <img src={project4} alt="" className='rounded-t-[15px]'/>
                    <div className='p-6 space-y-3'>
                        <h2 className='text-2xl text-gradient'>Infinity Software Solutions</h2>
                    <p className='text-[#ababab]'>Infinity Software Solutions is a tech company delivering custom software and IT services. Clients can request tailored solutions, manage projects, and collaborate with expert developers. The platform supports end-to-end software development and deployment, built using Wordpress, Elementor pro.</p>
                    <div className='flex items-center gap-5'>
                        <Link to={'https://infinity-software.ch/'} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#ababab] hover:text-[#D4FE1A]'><LuGlobe/> Live Site</Link>
                        
                    </div>
                    </div>
                </div>
                
              </div>
            </section>
    );
};

export default Projects;