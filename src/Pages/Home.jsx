import React, { useEffect } from 'react';
import Hero from '../Components/Hero/Hero';
import AboutSection from '../Components/AboutSection/AboutSection';
import { useLocation, useNavigate } from 'react-router';
import MyExperience from '../Components/MyExperience/MyExperience';
import { SkillCardSection } from '../Components/SkillCardSection/SkillCardSection';
import MyProjectsSection from '../Components/MyProjectsSection/MyProjectsSection';
import ContactSection from '../Components/ContactSection/ContactSection';

const Home = () => {
    const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("scrollTo");

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Optional: Clean the URL after scrolling to avoid repeated scrolling on reload
        params.delete("scrollTo");
        navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
      }
    }
  }, [location.search, navigate, location.pathname]);
    return (
        <div>
            
            <Hero/>
            <AboutSection/>
            <SkillCardSection/>
            <MyExperience/>
            <MyProjectsSection/>
            <ContactSection/>
        </div>
    );
};

export default Home;