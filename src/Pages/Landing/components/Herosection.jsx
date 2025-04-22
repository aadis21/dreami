
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import CustumButton from "../../Global/Button/Button";
import { useNavigate } from "react-router-dom";
import video from '../../../assets/video/Intro.mp4';

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: {xs:'70vh',md:'100vh'},
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 2,
    
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Overlay to make text readable */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)", // Dark overlay
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Typography
        variant="body2"
        sx={{
          background: "linear-gradient(45deg, rgb(255, 0, 212), rgb(255, 102, 0), rgb(145, 255, 0))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem" },
          mb: 1,
        }}
      >
        Restricted by opportunities?
      </Typography>
      <Typography
        width={{ xs: "100%", md: "55%" }}
        variant="h4"
        sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "2rem", md: "4.5rem" } }}
      >
        Get the tech career you deserve.
      </Typography>
      <Typography variant="body1" fontSize={{ xs: "1rem", md: "1.3rem" }} sx={{ opacity: 0.8, mb: 3 }}>
        Structured courses that get you there faster with confidence.
      </Typography>
      <Box>
        <CustumButton text="Explore Courses" onClick={() => navigate("/courses")} />
      </Box>
    </Box>
  );
};

export default Herosection;


// import React from "react";
// import { Box, Typography } from "@mui/material";
// import CustumButton from "../../Global/Button/Button";
// import { useNavigate } from "react-router-dom";
// import video from "../../../assets/video/Intro.mp4";

// const Herosection = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: { xs: "70vh", md: "100vh" }, // 50vh on mobile, 100vh on larger screens
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         px: { xs: 2, sm: 4, md: 6 },
//         color: "white",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Video */}
//       <Box
//         component="video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: -1,
//         }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </Box>

//       {/* Dark Overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0,0,0,0.6)", // Improves text visibility
//           zIndex: -1,
//         }}
//       />

//       {/* Text Content */}
//       <Typography
//         variant="body2"
//         sx={{
//           background: "linear-gradient(45deg, rgb(255, 0, 212), rgb(255, 102, 0), rgb(145, 255, 0))",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           fontWeight: "bold",
//           fontSize: { xs: "1.0rem", sm: "1.3rem", md: "1.6rem" },
//           mb: 1,
//         }}
//       >
//         Restricted by opportunities?
//       </Typography>

//       <Typography
//         width={{ xs: "100%", md: "60%" }}
//         variant="h4"
//         sx={{
//           fontWeight: "bold",
//           fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
//           mb: 1,
//         }}
//       >
//         Get the tech career you deserve.
//       </Typography>

//       <Typography
//         variant="body1"
//         sx={{
//           fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
//           opacity: 0.8,
//           mb: 3,
//           width: { xs: "90%", sm: "80%", md: "60%" },
//         }}
//       >
//         Structured courses that get you there faster with confidence.
//       </Typography>

//       {/* Call to Action Button */}
//       <Box>
//         <CustumButton text="Explore Courses" onClick={() => navigate("/courses")} />
//       </Box>
//     </Box>
//   );
// };

// export default Herosection;
