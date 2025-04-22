import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Phone, Email } from "@mui/icons-material";
import { Instagram, Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import logo from "../../../assets/Logo/logo2.png";

export default function Footer() {
  return (
    <Box
      textAlign="center"
      sx={{
        bgcolor: "#121212",
        color: "white",
        py: 4,
        pt: 10,
        mt: 5,
        borderTop: "10px solid orange",
        // borderTopLeftRadius: "100px ",  
        // borderTopRightRadius: "100px", 
        position: "relative"
      }}
    >

      <Container maxWidth="lg">
        <Grid container spacing={4}  >
          {/* LOGO & CONTACT */}
          <Grid item xs={12} md={3} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }
          }}>
            <Typography variant="h6" fontWeight="bold">
              <img src={logo} alt="dreamifys" />
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>Contact us</Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">1800-123-3598</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">contact@jas.com</Typography>
            </Box>
          </Grid>

          {/* Dreamfys  Section */}
          <Grid item xs={12} md={3}>
            {/* <Typography variant="h6" fontWeight="bold">
              Dreamifys
            </Typography> */}
            {["Careers", "Privacy policy", "Terms & conditions"].map((item) => (
              <Typography key={item} variant="body2" sx={{ mt: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Products Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Products
            </Typography>
            {["Job Bootcamp", "Placements"].map((item) => (
              <Typography key={item} variant="body2" sx={{ mt: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Community Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Community
            </Typography>
            {["Hire from us"].map((item) => (
              <Typography key={item} variant="body2" sx={{ mt: 1 }}>
                <Link href="#" color="inherit" underline="none">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center" mt={4} borderTop="1px solid gray" pt={2}>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <YouTube />
          </IconButton>
        </Box>

        {/* Copyright Section */}
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">Copyright © Dreamifys Pvt. Ltd.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
