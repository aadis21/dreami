// import React from 'react';
// import { Container , Typography } from '@mui/material';

// const HowItWorks = () => {
//   return (
//     <Container>
//     <div className="flex flex-col gap-10 px-4 py-10 mt-2.5 @container">
//       <div className="flex flex-col gap-4">
//         <h1 className="text-[#ff5722] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
//           How Dreamifys Works
//         </h1>
//         <Typography
//           variant="body1"
//           sx={{
           
//             color: "#181511",
//             fontSize: { xs: "1rem", sm: "1.2rem" },
//             mb: 5,
//           }}
//         >
//           With Dreamifys, you can find a job that's right for you. Our platform makes it easy to search for jobs in your city and explore companies that are hiring.
//         </Typography>
//       </div>
//       <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
//         <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e1db] bg-white p-4 flex-col">
//           <div className="text-[#181511]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
//             </svg>
//           </div>
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[#181511] text-base font-bold leading-tight">Find the perfect job</h2>
//             <p className="text-[#8a7660] text-sm font-normal leading-normal">Search for jobs based on location, salary, and more</p>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e1db] bg-white p-4 flex-col">
//           <div className="text-[#181511]" data-icon="Briefcase" data-size="24px" data-weight="regular">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
//             </svg>
//           </div>
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[#181511] text-base font-bold leading-tight">Explore companies</h2>
//             <p className="text-[#8a7660] text-sm font-normal leading-normal">Learn about companies and the job roles they are hiring for</p>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e1db] bg-white p-4 flex-col">
//           <div className="text-[#181511]" data-icon="MapPin" data-size="24px" data-weight="regular">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
//             </svg>
//           </div>
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[#181511] text-base font-bold leading-tight">Discover your city</h2>
//             <p className="text-[#8a7660] text-sm font-normal leading-normal">Find job openings in your area</p>
//           </div>
//         </div>
//         <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e1db] bg-white p-4 flex-col">
//           <div className="text-[#181511]" data-icon="Heart" data-size="24px" data-weight="regular">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//               <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
//             </svg>
//           </div>
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[#181511] text-base font-bold leading-tight">Scheudle interview</h2>
//             <p className="text-[#8a7660] text-sm font-normal leading-normal">Schedule an interview with the company</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </Container>
//   );
// };

// export default HowItWorks;


import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container>
      <div className="flex flex-col gap-10 px-4 py-10 mt-2.5 @container">
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <h1 className="text-[#ff5722] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            How Dreamifys Works
          </h1>
          <Typography
            variant="body1"
            sx={{
              color: "#181511",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              mb: 5,
            }}
          >
            With Dreamifys, you can find a job that's right for you. Our platform makes it easy to search for jobs in your city and explore companies that are hiring.
          </Typography>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              ),
              title: "Find the perfect job",
              desc: "Search for jobs based on location, salary, and more",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                </svg>
              ),
              title: "Explore companies",
              desc: "Learn about companies and the job roles they are hiring for",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
                </svg>
              ),
              title: "Discover your city",
              desc: "Find job openings in your area",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                </svg>
              ),
              title: "Schedule interview",
              desc: "Schedule an interview with the company",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-1 gap-3 rounded-lg border border-[#e6e1db] bg-white p-4 flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="text-[#181511]">{item.icon}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#181511] text-base font-bold leading-tight">{item.title}</h2>
                <p className="text-[#8a7660] text-sm font-normal leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
