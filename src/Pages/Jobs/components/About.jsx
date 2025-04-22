import React from 'react';
import { Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container >
      <div className="flex flex-col gap-10 px-4 py-10 @container">
      <h1 className="text-[#ff5722] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
      Dreamifys Placemets
        </h1>
        <p className="text-[#181511] text-xl font-normal leading-normal ">
          At Dreamifys, we believe that everyone should have access to job opportunities no matter where they are. That's why we're dedicated to helping job seekers find the
          perfect role in their city. Whether you're looking for a job in tech, healthcare, or any other industry, we can help you connect with local employers. Our mission is
          to make the job search process as simple and stress-free as possible, so you can focus on finding a job you love. With Job Connect, you can explore jobs in your city,
          learn about the companies that are hiring, and apply for roles that match your skills and experience. We're here to help you take the next step in your career.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;