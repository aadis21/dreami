import React, { useEffect } from 'react';
import Form from "./form";
import { Container, Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import phone from '../../../assets/bg/mobile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RequestCall() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      offset: 100, // offset before triggering animation
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff6f3", pb: { xs: 5, md: 0 } }}>
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Image Grid */}
          <Grid
            item
            xs={12}
            md={6}
            display={{ xs: 'none', md: 'block' }}
            data-aos="zoom-out" // Animation trigger for image
          >
            <img
              src={phone}
              alt="phone"
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          </Grid>

          {/* Form Grid */}
          <Grid
            item
            xs={12}
            md={6}
            data-aos="zoom-in" // Animation trigger for form
          >
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 5, maxWidth: "100%", mx: 'auto' }}>
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 'bold', mt: 1, textAlign: 'center' }}
                data-aos="fade-up" // Animation trigger for text
              >
                Have questions?
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 'bold', mb: 3, textAlign: 'center' }}
                data-aos="fade-up" // Animation trigger for text
              >
                Request a call from our counselors.
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form btntext='Request callback' />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default RequestCall;
