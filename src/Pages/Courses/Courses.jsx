import React, { use, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Global/Header/Header';
import Form from '../Global/Form/form';
import Offerings from './components/Card';
import Testimonials from './components/Testimonials';
import courses from '../../assets/Header/Courses.png';
import Admissionssection from './components/AdmissionsSection';
import VideoCarousel from '../Global/videoCrousal/Videocrousal';
import { Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import aos from 'aos'
import 'aos/dist/aos.css'



export default function Courses() {
  useEffect(() => {
    aos.init({ duration: 1000, easing: 'ease-in-out' });
  })


  return (
    <>
      <Outlet />
      <Header
        title="COURSES"
        subtitle="Our company offers industry-focused courses in Full-Stack Development, Frontend, Backend, UI/UX Design, and Data Structures & Algorithms, providing hands-on learning with real-world projects to enhance career growth in technology. 🚀"
        imageSection={<img src={courses} alt="courses" />}
      />
      <Typography
        variant="h4"
        fontWeight={900}

        sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, my: { xs: 2, md: 4 } }}
      >
        STUDENT WORK
      </Typography>


      <p className="font-serif text-[1.05rem] sm:text-lg md:text-xl lg:text-2xl text-gray-800 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 leading-relaxed tracking-wide">
        We believe in the power of storytelling.
        <br className="hidden sm:block" />
        "Shoot bold. Edit smart. Tell unforgettable stories."
      </p>
      <div data-aos='fade-up'>
        <VideoCarousel /></div>
      <div data-aos='zoom-in' className='py-5'>
        <p className="font-serif text-[1.05rem] sm:text-lg md:text-xl lg:text-2xl text-gray-800 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 leading-relaxed tracking-wide">
          These stunning filmmaking and immersive gaming videos were crafted by our incredibly creative students — under the mentorship of seasoned professionals from the heart of the industry.
          <br className="hidden sm:block" />
          Ready to turn your passion into a career? Join us to explore, create, and launch your journey — from concept to screen, guided by the best minds in the field.
          <br className="hidden " /> <br className="hidden sm:block" /><br className="hidden sm:block" />
          We Offer more......
        </p>
      </div>
      <Offerings />
      <div data-aos='fade-up'>
        <Testimonials />
      </div>
      <Admissionssection />
    </>
  );
}
