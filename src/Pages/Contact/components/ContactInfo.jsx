// import React from "react";
// import { Phone, LocationOn, Email } from "@mui/icons-material";
// import { Box, Typography, Grid, Paper, Container } from "@mui/material";

// const ContactInfo = () => {
//   const contactDetails = [
//     {
//       icon: <Phone sx={{ fontSize: 50, color: "orange" }} />,
//       title: "Phone",
//       details: ["+91 3245 67890", "+91 1234 56789"],
//     },
//     {
//       icon: <LocationOn sx={{ fontSize: 50, color: "orange" }} />,
//       title: "Address",
//       details: ["Global IT Park,", "Delhi NH-22, Zirakpur,", "Chandigarh, India"],
//     },
//     {
//       icon: <Email sx={{ fontSize: 50, color: "orange" }} />,
//       title: "Email",
//       details: ["Request for Proposal", "@gmail.com"],
//     },
//   ];

//   return (
//     <Container>
//       <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}>
//         {contactDetails.map((item, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Paper
//               elevation={4}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 textAlign: "center",
//                 padding: 4,
//                 borderRadius: "12px",
//                 border: "2px solid orange",
//                 transition: "all 0.3s ease-in-out",
//                 height: "100%", // Ensures all boxes have equal height
//                 justifyContent: "space-between", // Distributes content evenly
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: "0 8px 20px rgba(255, 165, 0, 0.5)",
//                   borderColor: "#ff9800",
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   padding: 2,
//                   border: "2px solid orange",
//                   borderRadius: "12px",
//                   transition: "all 0.3s ease-in-out",
//                   // "&:hover": {
//                   //   backgroundColor: "orange",
//                   //   color: "white",
//                  // },
//                 }}
//               >
//                 {item.icon}
//               </Box>
//               <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: "#333" }}>
//                 {item.title}
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 {item.details.map((line, i) => (
//                   <span key={i} className="block">
//                     {line}
//                   </span>
//                 ))}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ContactInfo;

import React, { useEffect } from "react";
import { Phone, LocationOn, Email } from "@mui/icons-material";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone sx={{ fontSize: 50, color: "orange" }} />,
      title: "Phone",
      details: ["+91 3245 67890", "+91 1234 56789"],
    },
    {
      icon: <LocationOn sx={{ fontSize: 50, color: "orange" }} />,
      title: "Address",
      details: ["Global IT Park,", "Delhi NH-22, Zirakpur,", "Chandigarh, India"],
    },
    {
      icon: <Email sx={{ fontSize: 50, color: "orange" }} />,
      title: "Email",
      details: ["Request for Proposal", "@gmail.com"],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      offset: 100, // Offset trigger
    });
  }, []);

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}>
        {contactDetails.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} data-aos="fade-up">
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: 4,
                borderRadius: "12px",
                border: "2px solid orange",
                transition: "all 0.3s ease-in-out",
                height: "100%", // Ensures all boxes have equal height
                justifyContent: "space-between", // Distributes content evenly
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(255, 165, 0, 0.5)",
                  borderColor: "#ff9800",
                },
              }}
            >
              <Box
                sx={{
                  padding: 2,
                  border: "2px solid orange",
                  borderRadius: "12px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: "#333" }}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.details.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactInfo;

