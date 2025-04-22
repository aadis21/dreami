import React from "react";
import { Box, Typography, Button, Container, Grid, Card, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "Aman Aujla",
    text: "First I am very thankful to you to give me this opportunity to understand graphics designing and digital marketing in the real way. It’s a very creative course I really learn a lot from this course. Amazing. Thanks a lot.",
    avatar: "/path-to-avatar/aman.jpg",
  },
  {
    name: "Kanishka Jain",
    text: "A really good institute for digital marketing. Faculty is really good and experienced. This institute focuses only on practical it best. A really good institute for digital marketing. Faculty is really good and experienced. ",
    avatar: "/path-to-avatar/kanishka.jpg",
  },
];

function Testimonials() {
  return (
    <Box sx={{ backgroundColor: "#121212", py: { xs: 3, md: 4 }, }}>
      <Container maxWidth="md" sx={{ backgroundColor: "#121212", textAlign: "center", py: 4 }}>
        <Typography variant="h5" sx={{ color: "#ff5722", my: { xs: 2, md: 4 } }} gutterBottom>
          OUR TESTIMONIALS
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, my: { xs: 2, md: 4 } }} color="#ff5722" gutterBottom>
          WHAT OUR TRAINEES ARE SAYING
        </Typography>
        <Typography variant="body1" color="gray" maxWidth="md" mx="auto" mb={4}>
          We have trained more than 26000+ Animation aspirants so far. Here’s what they feel about Brilliko, our trainers, the quality of our courses, and their learning with us.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ p: 3, borderRadius: 3, backgroundColor: "white", textAlign: "left" }}>
                <Typography variant="body1" color="black" mb={2}>
                  “{testimonial.text}”
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;