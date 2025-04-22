// // import React, { useEffect } from 'react';
// // import Grid from "@mui/material/Grid";
// // import { Typography, Box, Container } from "@mui/material";
// // import Wave from '../../../assets/Header/wave.png';
// // import CustomButton from '../Button/Button';
// // import aos from 'aos';
// // import 'aos/dist/aos.css';

// // export default function Header({ title, subtitle, imageSection }) {
// //   useEffect(() => {
// //     aos.init({ duration: 1000, easing: 'ease-in-out' });
// //   }, []);

// //   return (
// //     <div data-aos="fade-down">
// //       <Box sx={{ position: "relative", minHeight: "100%", backgroundColor: "#121212", color: "#fff",  paddingBottom: "130px", justifyContent: "center", alignContent: "center", display: "flex", flexDirection: "column", pt: { xs: 7, md: 7 } }}>
// //         {/* <Container sx={{ paddingBottom: "100px" }}> */}
// //           <Grid container spacing={4} alignItems="center" justifyContent="center" flexDirection={{ xs: "column-reverse", sm: "row" }}>

// //             {/* Image Section (Dynamically Passed via Props) */}
// //             {/* hide in mobile */}
// //             <Grid item xs={12} md={5} sx={{ display: { xs: "none", sm: "block" } }}>
// //               {imageSection}

// //             </Grid>

// //             {/* Info Section */}
// //             <Grid item xs={12} md={5}>
// //               <Typography variant="h4" fontWeight={900} sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" } }} gutterBottom>
// //                 {title}
// //               </Typography>
// //               <Typography variant="body1" gutterBottom>
// //                 {subtitle}
// //               </Typography>
// //               <Box mt={2} display="flex" gap={2}>

// //               </Box>
// //             </Grid>

// //           </Grid>
// //         {/* </Container> */}

// //         {/* Wave Image Stays at Bottom */}
// //         <Box
// //           component="img"
// //           src={Wave}
// //           alt="Wave Banner"
// //           sx={{
// //             position: "absolute",
// //             bottom: 0,
// //             left: 0,
// //             width: "100%",
// //             height: "auto"
// //           }}
// //         />
// //       </Box>
// //     </div>
// //   );
// // }


// import React, { useEffect } from 'react';
// import { Grid, Typography, Box, Container, Button } from '@mui/material';
// import Wave from '../../../assets/Header/wave.png';
// import aos from 'aos';
// import 'aos/dist/aos.css';

// export default function Header({ title, subtitle, imageSection, ctaLabel = "Get Started", onCtaClick }) {
//   useEffect(() => {
//     aos.init({ duration: 1000, easing: 'ease-in-out' });
//   }, []);

//   return (
//     <Box
//       data-aos="fade-down"
//       sx={{
//         position: "relative",
//         backgroundColor: "#121212",
//         color: "#fff",
//         pb: "130px",
//         pt: { xs: 8, md: 12 },
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid
//           container
//           spacing={6}
//           alignItems="center"
//           justifyContent="space-between"
//           flexDirection={{ xs: "column-reverse", md: "row" }}
//         >
//           {/* Text Section */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontWeight: 800,
//                 fontSize: { xs: "2.5rem", md: "3.8rem" },
//                 color: "#FF5722",
//                 mb: 2,
//                 lineHeight: 1.2,
//               }}
//             >
//               {title}
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: { xs: "1rem", md: "1.2rem" },
//                 lineHeight: 1.6,
//                 color: "#ccc",
//                 mb: 3,
//               }}
//             >
//               {subtitle}
//             </Typography>

//             {ctaLabel && (
//               <Button
//                 variant="contained"
//                 onClick={onCtaClick}
//                 size="large"
//                 sx={{
//                   backgroundColor: "#FF5722",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   px: 4,
//                   py: 1.5,
//                   borderRadius: "30px",
//                   '&:hover': {
//                     backgroundColor: "#e64a19",
//                   },
//                 }}
//               >
//                 {ctaLabel}
//               </Button>
//             )}
//           </Grid>

//           {/* Image Section */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mb: { xs: 4, md: 0 },
//             }}
//           >
//             {imageSection}
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Decorative Wave at Bottom */}
//       <Box
//         component="img"
//         src={Wave}
//         alt="Wave Banner"
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "100%",
//           zIndex: 0,
//         }}
//       />
//     </Box>
//   );
// }


import React, { useEffect } from 'react';
import { Grid, Typography, Box, Container, Button } from '@mui/material';
import Wave from '../../../assets/Header/wave.png';
import aos from 'aos';
import 'aos/dist/aos.css';

export default function Header({
  title,
  subtitle,
  imageSection,
  ctaLabel = "Get Started",
  onCtaClick
}) {
  useEffect(() => {
    aos.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <Box
      data-aos="fade-down"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)",
        color: "#fff",
        pb: "130px",
        pt: { xs: 8, md: 12 },
       // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "3.5rem" },
                color: "#FF5722",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.6,
                color: "#ccc",
                mb: 3,
              }}
            >
              {subtitle}
            </Typography>

            {/* {ctaLabel && (
              <Button
                variant="contained"
                onClick={onCtaClick}
                size="large"
                sx={{
                  backgroundColor: "#FF5722",
                  color: "#fff",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  '&:hover': {
                    backgroundColor: "#e64a19",
                  },
                }}
              >
                {ctaLabel}
              </Button>
            )} */}
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
               maxWidth: { xs: "80%", sm: "70%", md: "100%" },
                maxHeight: { xs: 250, sm: 350, md: 400 },
                width: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              {imageSection}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative Wave at Bottom */}
      <Box
        component="img"
        src={Wave}
        alt="Wave Banner"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      />
    </Box>
  );
}
