// import React from 'react';
// import Header from '../../Global/Header/Header';
// import { Typography, Box } from '@mui/material';
// import bg from '../../../assets/bg/bg.svg'
// import RequestCall from '../../Global/Form/RequestCall';

// export default function Coursedetails({ Course, details, img, coursename, courseDescription, listone, listtwo, listthree }) {
//   return (
//     <>
//       <Header title={Course} subtitle={details} imageSection={<img className='rounded-2xl mb-9 ' src={img} alt={Course} />} />
//       <Box sx={{ textAlign: "center", mt: { xs: 5, md: 7 }, px: { xs: 2, md: 4 } }}>
//         <Typography
//           variant="h4"
//           fontWeight={900}
//           sx={{
//             color: "#ff5722",
//             fontSize: { xs: "1.5rem", sm: "2rem", md: "3.3rem" }, // Responsive font size
//             mb: 3, // Adds spacing below
//           }}
//           gutterBottom
//         >
//           WHAT IS {coursename}
//         </Typography>

//         <Typography
//           variant="h6"
//           fontWeight={500}
//           sx={{
//             color: "black",
//             fontSize: { xs: "0.8rem", sm: "1.1rem", md: "1.3rem" },
//             textAlign: "center",
//             maxWidth: "90%",
//             margin: "0 auto",
//             p: { xs: 2, md: 4 },
//           }}
//           gutterBottom
//         >
//           {courseDescription}
//         </Typography>
//       </Box>

//       {/* table */}
//       <Typography
//         variant="h4" text align="center"
//         fontWeight={900}
//         sx={{
//           color: "#ff5722",
//           fontSize: { xs: "1.5rem", sm: "2rem", md: "3.3rem" }, // Responsive font size
//           mb: 3, // Adds spacing below
//         }}
//         gutterBottom
//       >
//         OUR COURSE OFFERS YOU
//       </Typography>
//       <div style={{
//         backgroundImage: `url(${bg})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         // backgroundColor:''
//       }} className="p-6 min-h-screen">
//         <div className="max-w-4xl mx-auto">
//           {/* Career Options */}
//           <section className="mb-6">
//             <h2 className="text-xl font-bold mb-2 ">Career Options</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded shadow">
//               {listone.map((option, index) => (
//                 <div key={index} className="p-2 border text-center">{listone}</div>
//               ))}
//             </div>
//           </section>

//           {/* Course Content */}
//           <section className="mb-6">
//             <h2 className="text-xl font-bold mb-2">Course Content</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded shadow">
//               {listtwo.map((content, index) => (
//                 <div key={index} className="p-2 border text-center">{listtwo}</div>
//               ))}
//             </div>
//           </section>

//           {/* Software Covered */}
//           <section>
//             <h2 className="text-xl font-bold mb-2">Software Covered</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded shadow">
//               {listthree.map((listthree, index) => (
//                 <div key={index} className="p-2 border text-center">{listthree}</div>
//               ))} 
//             </div>
//           </section>
//         </div>
//       </div>
//       <RequestCall />
//     </>
//   );
// }


import React from 'react';
import Header from '../../Global/Header/Header';
import { Typography, Box } from '@mui/material';
import bg from '../../../assets/bg/bg.svg';
import RequestCall from '../../Global/Form/RequestCall';


export default function Coursedetails({ Course, details, img, coursename, courseDescription, listone, listtwo, listthree }) {

 
  return (
    <>
      <Header title={Course} subtitle={details} imageSection={<img className="rounded-2xl mb-9" src={img} alt={Course} />} />

      <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 }, px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{
            color: '#ff5722',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '3.3rem' },
            mb: 3,
          }}
          gutterBottom
        >
          WHAT IS {coursename}
        </Typography>

        <Typography
          variant="h6"
          fontWeight={500}
          sx={{
            color: 'black',
            fontSize: { xs: '0.8rem', sm: '1.1rem', md: '1.3rem' },
            textAlign: 'center',
            maxWidth: '90%',
            margin: '0 auto',
            p: { xs: 2, md: 4 },
          }}
          gutterBottom
        >
          {courseDescription}
        </Typography>
      </Box>

      {/* Table Section */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={900}
        sx={{
          color: '#ff5722',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '3.3rem' },
          mb: 3,
        }}
        gutterBottom
      >
        OUR COURSE OFFERS YOU
      </Typography>

      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="p-6 min-h-screen"
      >
        <div className="max-w-4xl mx-auto">
          {/* Career Options */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Career Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded shadow">
              {listone.map((option, index) => (
                <div key={index} className="p-2 border text-center">
                  {option}
                </div>
              ))}
            </div>
          </section>

          {/* Course Content */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Course Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded shadow">
              {listtwo.map((content, index) => (
                <div key={index} className="p-2 border text-center">
                  {content}
                </div>
              ))}
            </div>
          </section>

          {/* Software Covered */}
          <section>
            <h2 className="text-xl font-bold mb-2">Software Covered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white p-4 rounded shadow">
              {listthree.map((software, index) => (
                <div key={index} className="p-2 border text-center">
                  {software}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <RequestCall />
    </>
  );
}

