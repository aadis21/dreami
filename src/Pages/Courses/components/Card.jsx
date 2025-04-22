// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
// import Animation from '../../../assets/courses/Animation.jpg';
// import Vfx from '../../../assets/courses/vfx.jpg';
// import film from '../../../assets/courses/filmmaking.jpg';
// import Graphics from '../../../assets/courses/graphics.png';
// import web from '../../../assets/courses/Development.png';
// import uiux from '../../../assets/courses/uiux.jpg';
// import video from '../../../assets/courses/videoeditor.png';
// import digital from '../../../assets/courses/digitalmaketing.webp';


// const offerings = [
//   {
//     title: "Animation", description: "The Advanced Program in 3D Animation is an immersive and comprehensive training course designed to equip participants.", image: `${Animation}`, path: "/animation"
//   },
//   { title: "VFX", image: `${Vfx}`, path: "/vfx", description: "The Advanced Program in VFX trains participant and CGI effects, preparing them for careers in films, television, gaming, and digital media. " },
//   { title: "Film Making", image: `${film}`, path: "/film-making", description: "The Advanced Filmmaking Program teaches scriptwriting, cinematography, directing, and editing to create compelling visual stories." },
//   { title: "Graphics", image: `${Graphics}`, path: "/graphics", description: "The Advanced Graphic Design Program covers branding, typography, and digital design to create stunning visuals for print, web, and media." },
//   { title: "Web Development", image: `${web}`, path: "/web-development", description: "The Advanced Web Development Program covers front-end and back-end technologies to build dynamic, responsive websites." },
//   { title: "Video Editing", image: `${video}`, path: "/video-editing", description: "The Advanced Video Editing Program teaches cutting, transitions, effects, and color correction to create professional-quality videos for films." },
//   { title: "UI/UX", image: `${uiux}`, path: "/ui-ux", description: "The Advanced UI/UX Design Program covers user research, and design principles to create intuitive and engaging digital experiences." },
//   { title: "Digital Marketing", image: `${digital}`, path: "/digital-marketing", description: "The Advanced Digital Marketing Program covers SEO, social media, content marketing, and analytics to drive online growth and engagement." },
//   // { title: "Digital Marketing", image: `${digital}`, path: "/digital-marketing", description: "The Advanced Digital Marketing Program covers SEO, social media, content marketing, and analytics to drive online growth and engagement." }
// ];

// function Offerings() {
//   const navigate = useNavigate(); 

//   return (
//     <Container maxWidth="lg" sx={{ textAlign: "center", py: 4 }}>
//       <Typography
//         variant="h4"
//         fontWeight={900}
//         sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, my: { xs: 2, md: 4 } }}
//         gutterBottom
//       >
//         OUR OFFERINGS
//       </Typography>

//       <Grid container spacing={2} justifyContent="center">
//         {offerings.map((offering, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>

//             <Card
//               sx={{
//                 backgroundColor: "#121212",
//                 borderRadius: "20px", 
//                 overflow: "hidden",
//                 textAlign: "center",
//                 border: "3px solid orange",
//                 position: "relative",
//               }}
//             >
//               {/* Image with Gradient Overlay */}
//               <div style={{ position: "relative" }}>
//                 <img
//                   src={offering.image}
//                   style={{

//                     height: "250px",
//                     width: "100%",
//                     objectFit: "cover",
//                     display: "block",
//                   }}
//                   alt={offering.title}
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background:
//                       "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9))",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "flex-end",
//                     alignItems: "center",
//                     padding: "20px",
//                     color: "white",
//                   }}
//                 >
//                   <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff5722" }}>
//                     {offering.title.toUpperCase()}
//                   </Typography>
//                   <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" mt={1}>
//                     {offering.description}
//                   </Typography>
//                 </div>
//               </div>

//               {/* Button Section */}
//               <CardContent sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     width: "90%",
//                     borderRadius: "25px",
//                     backgroundColor: "#ff5722",
//                     color: "white",
//                     fontWeight: "bold",
//                     textTransform: "none",
//                     padding: "10px",
//                   }}
//                   onClick={() => navigate(offering.path)}
//                 >
//                   View Program
//                 </Button>
//               </CardContent>
//             </Card>

//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Offerings;


import React, { useState, useEffect } from 'react'
import { CardBody, CardContainer, CardItem } from "../../Global/aceternity/ui/3d-card";
import { Typography, Grid, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Offerings() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/course/read`)
      .then(response => {
        setCourses(response.data);
        setLoading(false);
        const data = response.data;

      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses.');
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();

  return (

    <>

      <Box sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, mx: { xs: 2, md: 4 }, my: { xs: 2, md: 4 }, mt: { xs: 2, md: 4 } }}>
        {/*  <Typography 
        variant="h4"
        fontWeight={900}
        sx={{ display: "flex",p: { xs: 2, md: 4 }, color: "#ff5722", fontSize: { xs: "1rem", md: "2.2rem" }, my: { xs: 2, md: 4 } }}
        gutterBottom
      >
        OUR COURSES
      </Typography> */}

        <Box >
          <div className='flex flex-wrap justify-center gap-1' data-aos="fade-up" data-aos-duration="1000"> {courses.map((courses, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>

              <CardContainer className="inter-var">
                <CardBody
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className=" text-3xl font-bold  dark:text-white">
                    {courses.course_name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {courses.subtitle}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={courses.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail" />
                  </CardItem>
                  <button as="button" onClick={() => navigate(courses.slug)}
                    //translateZ="60"
                    className="bg-orange-500   w-full  px-4 py-2 rounded-lg text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 cursor-pointer">
                    View Details
                  </button>
                </CardBody>
              </CardContainer>
            </Grid>
          ))} </div>
        </Box>
      </Box>
    </>
  )
}
