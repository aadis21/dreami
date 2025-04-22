// import React from 'react';
// import Container from '@mui/material/Container';

// const CitiesWeServe = () => {
//   const cities = [
//     { name: 'Chandigarh', image: 'https://cdn.usegalileo.ai/sdxl10/82422027-ba3f-4773-8c4b-e8374d759633.png' },
//     { name: 'Panchkula', image: 'https://cdn.usegalileo.ai/sdxl10/368348f6-427f-4ccb-bedf-550048422f8c.png' },
//     { name: 'Mohali', image: 'https://cdn.usegalileo.ai/sdxl10/a881a88e-7bd0-4b3d-be5a-d7a3917fd4a8.png' },

//   ];

//   return (
//     <Container>
//       <div className="flex flex-col gap-10 px-4 py-10 @container">
//       <h1 className="text-[#ff5722] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
//         Cities We Serve
//         </h1>
//         <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
//           {cities.map((city, index) => (
//             <div key={index} className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
//                 style={{ backgroundImage: `url(${city.image})` }}
//               ></div>
//               <p className="text-[#181511] text-base font-medium leading-normal">{city.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       </Container >

//       );
// };

//       export default CitiesWeServe;

import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CitiesWeServe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      //once: true,     // only animate once when scrolling down
    });
  }, []);

  const cities = [
    { name: 'Chandigarh', image: 'https://cdn.usegalileo.ai/sdxl10/82422027-ba3f-4773-8c4b-e8374d759633.png' },
    { name: 'Panchkula', image: 'https://cdn.usegalileo.ai/sdxl10/368348f6-427f-4ccb-bedf-550048422f8c.png' },
    { name: 'Mohali', image: 'https://cdn.usegalileo.ai/sdxl10/a881a88e-7bd0-4b3d-be5a-d7a3917fd4a8.png' },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <h1
          className="text-[#ff5722] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          data-aos="fade-up"
        >
          Cities We Serve
        </h1>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 pb-3"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: `url(${city.image})` }}
              ></div>
              <p className="text-[#181511] text-base font-medium leading-normal">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CitiesWeServe;
