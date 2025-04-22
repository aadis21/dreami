// import React from 'react'
// import { Typography } from '@mui/material'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from 'react'


// export default function Team() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }) // once: true prevents repeat animations
//   }, [])
  
//   return (
//     <>


//       <div className="px-40 flex flex-1 justify-center py-5">
//         <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//           <div className="@container">
//             <div className="@[480px]:p-4">
            
//             </div>
//           </div>
  
//           <Typography
//                 variant="h4"
//                 fontWeight={900}
//                 sx={{
//                  // textAlign: "center",
//                   color: "black",
//                   fontSize: { xs: "1.5rem", sm: "2rem", md: "3.3rem" },
//                   mb: 4, 
//                 }}
//                 gutterBottom
//               >
//                 OUR TEAM
//               </Typography>
//           <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/d615a908-4c4b-4eb9-a1d2-26ad74ee8c44.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Ravi
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   Founder &amp; CEO
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/6cef6c51-7525-403c-b377-d382a8c24891.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Kara
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   Director of Marketing
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/replicate/44054395-3f26-4fc6-b930-e2ca89e11e0c.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Tara
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   VP of Product
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/31c7dddb-31d0-4de3-861c-aa07de73a2d4.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Liam
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   CTO
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/719c118b-04dc-4357-a99f-ec0858303178.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Alex
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   CFO
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/7171a5ac-675c-403d-b7fc-e77f1fb96036.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Zoe
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   Head of People
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/f27e4263-9798-4458-b164-16f49ac6de43.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Jaden
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   Head of Design
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 pb-3">
//               <div
//                 className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                 style={{
//                   backgroundImage:
//                     'url("https://cdn.usegalileo.ai/sdxl10/fc75d3e8-5474-4863-ac0a-55efe668c738.png")'
//                 }}
//               />
//               <div>
//                 <p className="text-[#0d151c] text-base font-medium leading-normal">
//                   Sofia
//                 </p>
//                 <p className="text-[#49779c] text-sm font-normal leading-normal">
//                   Head of Curriculum
//                 </p>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
//             What our students say
//           </h2>
//           <div className="flex gap-3 p-3 flex-wrap pr-4">
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Career Growth
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Coding Skills
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Job Offers
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Life Changing
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Online Learning
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Professional Development
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Tech Industry
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Tech Skills
//               </p>
//             </div>
//             <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] pl-4 pr-4">
//               <p className="text-[#0d151c] text-sm font-medium leading-normal">
//                 Web Development
//               </p>
//             </div>
//           </div>
//           <div className="flex px-4 py-3 justify-end">
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4" />
        </div>

        <Typography
          variant="h4"
          fontWeight={900}
          sx={{
            color: "black",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3.3rem" },
            mb: 4,
          }}
          gutterBottom
          data-aos="fade-up"
        >
          OUR TEAM
        </Typography>

        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
        >
          {[
            { name: 'Ravi', title: 'Founder & CEO', img: 'https://cdn.usegalileo.ai/sdxl10/d615a908-4c4b-4eb9-a1d2-26ad74ee8c44.png' },
            { name: 'Kara', title: 'Director of Marketing', img: 'https://cdn.usegalileo.ai/sdxl10/6cef6c51-7525-403c-b377-d382a8c24891.png' },
            { name: 'Tara', title: 'VP of Product', img: 'https://cdn.usegalileo.ai/replicate/44054395-3f26-4fc6-b930-e2ca89e11e0c.png' },
            { name: 'Liam', title: 'CTO', img: 'https://cdn.usegalileo.ai/sdxl10/31c7dddb-31d0-4de3-861c-aa07de73a2d4.png' },
            { name: 'Alex', title: 'CFO', img: 'https://cdn.usegalileo.ai/sdxl10/719c118b-04dc-4357-a99f-ec0858303178.png' },
            { name: 'Zoe', title: 'Head of People', img: 'https://cdn.usegalileo.ai/sdxl10/7171a5ac-675c-403d-b7fc-e77f1fb96036.png' },
            { name: 'Jaden', title: 'Head of Design', img: 'https://cdn.usegalileo.ai/sdxl10/f27e4263-9798-4458-b164-16f49ac6de43.png' },
            { name: 'Sofia', title: 'Head of Curriculum', img: 'https://cdn.usegalileo.ai/sdxl10/fc75d3e8-5474-4863-ac0a-55efe668c738.png' },
          ].map((member, idx) => (
            <div
              key={member.name}
              className="flex flex-col gap-3 pb-3"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url("${member.img}")` }}
              />
              <div>
                <p className="text-[#0d151c] text-base font-medium leading-normal">
                  {member.name}
                </p>
                <p className="text-[#49779c] text-sm font-normal leading-normal">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2
          className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          data-aos="fade-up"
        >
          What our students say
        </h2>

        <div className="flex gap-3 p-3 flex-wrap pr-4" data-aos="fade-up">
          {[
            'Career Growth',
            'Coding Skills',
            'Job Offers',
            'Life Changing',
            'Online Learning',
            'Professional Development',
            'Tech Industry',
            'Tech Skills',
            'Web Development',
          ].map((tag, idx) => (
            <div
              key={idx}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7eef4] px-4"
              data-aos="zoom-in"
              data-aos-delay={idx * 50}
            >
              <p className="text-[#0d151c] text-sm font-medium leading-normal">
                {tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
