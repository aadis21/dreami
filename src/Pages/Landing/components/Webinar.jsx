import React, { useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import aos from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: "📘",
    title: "Learn by Working like Tech Professionals",
    description:
      "Learn Full Stack Development, Backend Development, QA Automation through an immersive project-based curriculum focused on practical developer skills and real-world scenarios.",
  },
  {
    icon: "💼",
    title: "Gain Work-ex on Problems Given by Real Tech Companies",
    description:
      "Gain the work experience of building professional software products for India’s top tech companies like CRED, Payment, Jumbotail, Vicara, and others.",
  },
  {
    icon: "🎤",
    title: "Learn From Seasoned Industry Professionals in Real Time",
    description:
      "Participate in activity-based live working sessions facilitated by industry mentors from companies like Microsoft, Flipkart, Nilenso.",
  },
  {
    icon: "🚀",
    title: "Get career support to break through into ambitious roles",
    description:
      "Be prepared for every interview and exciting development jobs with structured planning and personalized guidance & support from Dreamify career coaches.",
  },
  {
    icon: "🛠️",
    title: "Build a GitHub portfolio that impresses recruiters",
    description:
      "Go beyond just certificates with a Dreamify verified project portfolio on GitHub and impress any recruiter at a product-based company with your skills and experience.",
  },
  {
    icon: "🎯",
    title: "Stand out at interviews with real proof of work",
    description:
      "Validate your learnings and let your skills shine with a work experience certificate that makes you stand out at interviews.",
  },
];

function Webinar() {

  return (
    <Box sx={{ py: 10, textAlign: "center" }}>
      <Container>
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          An All-Round Effective Way To Supercharge Your Tech Career
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto" mb={4}>
          <strong>Hands-on, work experience-based learning</strong> is at the heart of everything you do at Dreamify.
          Build software projects like the top 1% Tech Professionals and
          <strong> learn all the skills</strong> you need to <strong>land the best</strong> Fullstack/Backend
          Developers or SDET Jobs.
        </Typography>

        {/* Cards Section */}

        <Grid2 data-aos="fade-up" container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "left",
                  boxShadow: 2,
                  height: "100%",
                  border: "1px solid orange",
                }}
              >
                {/* Icon */}
                <Typography variant="h5" mb={1}>
                  {feature.icon}
                </Typography>

                {/* Title & Description */}
                <Typography variant="h6" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>

        {/* Call to Action Button */}

      </Container>
    </Box>
  );
}

export default Webinar;
