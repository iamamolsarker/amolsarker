import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import AboutSection from '../Components/AboutSection/AboutSection';
import { useLocation, useNavigate } from 'react-router';

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
            
        </div>
    );
};

export default Home;