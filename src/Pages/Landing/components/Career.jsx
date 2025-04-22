import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

const services = [
  {
    icon: "🎤",
    title: "1:1 Interview preparation (Mock Interviews)",
    description:
      "Before technical interview rounds with our hiring partners.",
  },
  {
    icon: "🧠",
    title: "Soft-Skills training",
    description:
      "Coupled with pre-training and post-training assessments.",
  },
  {
    icon: "📋",
    title: "Series of mock assessments",
    description:
      "Detailed interview prep sprints to ace top tech jobs.",
  },
  {
    icon: "📁",
    title: "Expert guidance to get your profile ready",
    description:
      "(GitHub, LinkedIn, Resume).",
  },
  {
    icon: "💼",
    title: "Access to a diverse set of job opportunities",
    description:
      "With 1000+ hiring partners.",
  },
];

function Career() {
  return (
    <Box sx={{ backgroundColor: "white", py: 6, textAlign: "center" }}>
      <Container>
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Prepare To Break Through  Into Top Tech Jobs <br /> In The Market
        </Typography>

        {/* Subheading */}
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto" mb={4}>
          All of our programs come with <strong>exclusive Career Services</strong> that will equip you to
          use your learnings and skills to ace your next interview or excel in your current role.
        </Typography>

        {/* Cards Section */}
        <Grid2 container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: "#E6F9F1",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "left",
                  boxShadow: 1,
                  height: "100%",
                }}
              >
                {/* Icon */}
                <Typography variant="h5" mb={1}>
                  {service.icon}
                </Typography>

                {/* Title & Description */}
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

export default Career;
