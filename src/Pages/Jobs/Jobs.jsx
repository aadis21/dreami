import React from "react";
import Header from "../Global/Header/Header";
import Job from "../../assets/Header/jobs.png";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/About";
import CitiesWeServe from "./components/CitiesWeServe";
import RequestCall from "../Global/Form/RequestCall";
import SuccessStories from "./components/SuccessStories";

export default function Jobs() {
  return (
    <>
      <Header
        title="EXPLORE JOBS"
        subtitle="Discover exciting job opportunities with our extensive network of hiring partners. We connect skilled professionals with top companies, ensuring the right fit for career growth and success. "
        imageSection={<img src={Job} alt="job" />}
      />
      <HeroSection />
      <HowItWorks />
      <AboutUs />
      <CitiesWeServe />
      <SuccessStories /> 
      <RequestCall/>
      
    
    </>
  );
}
