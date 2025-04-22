import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";

const Admissionssection = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 7 }}>
      <Typography variant="h5" fontWeight="bold">
        For Admissions & Career Counselling
      </Typography>
      <Typography variant="h3" fontWeight="bold" sx={{ my: 1 }}>
        TOLL FREE : 18005725501
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        If you would like to take a tour of our facilities and experience the atmosphere first-hand through a free demo lesson. <br />
        For queries, feedback & assistance.
      </Typography>
  
    </Container>
  );
};

export default Admissionssection;
