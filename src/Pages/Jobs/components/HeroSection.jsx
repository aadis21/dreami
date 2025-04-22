import React from 'react';
import { Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col text-center justify-center align-center  gap-2 pt-16">
          <Typography variant="h5" fontWeight={900} sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.0rem" } }} gutterBottom>
            Connecting You to Jobs in Your City
          </Typography>
          <h2 className="text-orange text-xl font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            We provide job opportunities and placements in the nearest cities to help you grow your career.
            
            At Dreamifys, we believe that everyone should have access to job opportunities no matter where they are. That's why we're dedicated to helping job seekers find the perfect role in their city. Whether you're looking for a job in tech, healthcare, or any other industry, we can help you connect with local employers. Our mission is to make the job search process as simple and stress-free as possible, so you can focus on finding a job you love. With Job Connect, you can explore jobs in your city, learn about the companies that are hiring, and apply for roles that match your skills and experience. We're here to help you take the next step in your career.
          </h2>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;