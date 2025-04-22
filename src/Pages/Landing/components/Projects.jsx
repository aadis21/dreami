// import React from "react";
// import { Box, Typography, Container, Chip } from "@mui/material";
// import Grid2 from "@mui/material/Grid2";
// import Two from "../../../assets/Landing/CardTwo.png";
// import Four from "../../../assets/Landing/CardFour.png";
// import Six from "../../../assets/Landing/CardSix.png";

// const projects = [
//   {
//     badge: "Independent Project",
//     badgeColor: "success",
//     image: Two,
//     title: "Build an OTT platform like Netflix Engineers",
//     description: "Build a highly responsive, seamless video streaming service.",
//     techStack: ["React JS", "Node JS", "Rest API", "Express JS"],
//   },
//   {
//     badge: "Guided Project",
//     badgeColor: "primary",
//     image: Four,
//     title: "Work like Backend Developers at Zomato",
//     description:
//       "Build a high-scale distributed web backend for a food ordering app.",
//     techStack: ["MongoDB", "Java", "Spring Boot", "Redis"],
//   },
//   {
//     badge: "Independent Project",
//     badgeColor: "success",
//     image: Six,
//     title: "Experience building a Google News-like app",
//     description:
//       "Build a fully functional news aggregator like Google News.",
//     techStack: ["HTML", "CSS", "Rest APIs", "Bootstrap"],
//   },
// ];

// function Projects() {
//   return (
//     <Box sx={{ backgroundColor: "white", py: 6, textAlign: "center" }}>
//       <Container>
//         {/* Heading */}
//         <Typography variant="h3" fontWeight="bold" gutterBottom>
//           Modern Work Experience-Based Learning Approach
//         </Typography>
//         <Typography
//           variant="body1"
//           color="text.secondary"
//           maxWidth="md"
//           mx="auto"
//           mb={4}
//         >
//           At Dreamify, you learn and grow exactly how you would on a real job. You will start from the
//           fundamentals, receive support from our mentors and community, and{" "}
//           <strong>build your way to the top</strong> through professional work-like Full-stack and
//           Backend web development projects.
//         </Typography>

//         {/* Project Cards */}

//         <Grid2 container spacing={3} justifyContent="center">
//           {projects.map((project, index) => (
//             <Grid2 key={index} size={{ xs: 12, sm: 6, md: 3.5 }}>
//               <Box
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: 2,
//                   p: 3,
//                   textAlign: "center",
//                   boxShadow: 2,
//                   height: "100%", // Ensures equal height cards
//                 }}
//               >
//                 {/* Badge */}
//                 <Chip label={project.badge} color={project.badgeColor} sx={{ fontWeight: "bold", mb: 2 }} />

//                 {/* Image */}
//                 <Box
//                   component="img"
//                   src={project.image}
//                   alt={project.title}
//                   sx={{ width: "100%", maxHeight: 150, objectFit: "contain", mb: 2 }}
//                 />

//                 {/* Title & Description */}
//                 <Typography variant="h6" fontWeight="bold">
//                   {project.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" mb={2}>
//                   {project.description}
//                 </Typography>

//                 {/* Tech Stack */}
//                 <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
//                   {project.techStack.map((tech, idx) => (
//                     <Chip key={idx} label={tech} variant="outlined" />
//                   ))}
//                 </Box>
//               </Box>
//             </Grid2>
//           ))}
//         </Grid2>
//       </Container>
//     </Box>
//   );
// }

// export default Projects;
import React from "react";
import { Box, Typography, Container, Chip, Grid } from "@mui/material";
import Two from "../../../assets/Landing/CardTwo.png";
import Four from "../../../assets/Landing/CardFour.png";
import Six from "../../../assets/Landing/CardSix.png";
import aos from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    badge: "Independent Project",
    badgeColor: "success",
    image: Two,
    title: "Build an OTT platform like Netflix Engineers",
    description: "Build a highly responsive, seamless video streaming service.",
    techStack: ["React JS", "Node JS", "Rest API", "Express JS"],
  },
  {
    badge: "Guided Project",
    badgeColor: "primary",
    image: Four,
    title: "Work like Backend Developers at Zomato",
    description:
      "Build a high-scale distributed web backend for a food ordering app.",
    techStack: ["MongoDB", "Java", "Spring Boot", "Redis"],
  },
  {
    badge: "Independent Project",
    badgeColor: "success",
    image: Six,
    title: "Experience building a Google News-like app",
    description: "Build a fully functional news aggregator like Google News.",
    techStack: ["HTML", "CSS", "Rest APIs", "Bootstrap"],
  },
];

function Projects() {
  return (
    <Box sx={{ backgroundColor: "white", py: 6, textAlign: "center" }}>
      <Container>
        <div data-aos="fade-up" data-aos-duration="1000">
        {/* Heading */}
        <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, py: { xs: 1, md: 2 } }} variant="h4" fontWeight="bold" gutterBottom>
          Modern Work Experience-Based Learning Approach
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          mb={4}
        >
          At Dreamifys , you learn and grow exactly how you would on a real job. You will start from the
          fundamentals, receive support from our mentors and community, and
          <strong> build your way to the top</strong> through professional work-like Full-stack and
          Backend web development projects.
        </Typography>

        {/* Project Cards */}
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                  boxShadow: 2,
                  height: "100%", // Ensures equal height cards
                }}
              >
                {/* Badge */}
                <Chip label={project.badge} color={project.badgeColor} sx={{ backgroundColor: 'orange', fontWeight: "bold", mb: 2 }} />

                {/* Image */}
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{ width: "100%", maxHeight: 150, objectFit: "contain", mb: 2 }}
                />

                {/* Title & Description */}
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {project.description}
                </Typography>

                {/* Tech Stack */}
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
                  {project.techStack.map((tech, idx) => (
                    <Chip key={idx} label={tech} variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Projects;
