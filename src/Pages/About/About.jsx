import React from 'react'
import Header from '../Global/Header/Header';
import about from '../../assets/Header/aboutus.png';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../Global/aceternity/ui/text-reveal-card";
import WhyChoose from './components/Whychoose';
import CourseTimeline from './components/Timeline';
import Team from './components/Team';
import Verify from './components/Verify';
//import AppleCardsCarouselDemo from './components/Animatedcards';
export default function About() {
  return (

    <>
      <Header title="ABOUT US" subtitle="We are a technology-driven company dedicated to empowering individuals with industry-relevant skills. Our expert-led courses in web development, UI/UX design, and programming ensure hands-on learning. Additionally, we provide placement support to help learners secure job opportunities and build successful careers in the tech industry. 🚀" imageSection={<img src={about} alt="about" />} />

      
       <WhyChoose />
      <Verify/>
      {/* <CourseTimeline /> */}
      <Team/>
    </>
  )
}
