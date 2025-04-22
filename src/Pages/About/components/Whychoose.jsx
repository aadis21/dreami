import { Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export default function WhyChoose() {
  const steps = [
    {
      number: "01.",
      title: "Research",
      description:
        "We love numbers! We collect data and insights, analyze them then take the time to learn about your objectives, ask the right questions to understand your business.",
    },
    {
      number: "02.",
      title: "Strategy",
      description:
        "Solutions are born from proper research, hard work, and strong strategy. We build data-driven roadmaps for every project to pave the way to success.",
    },
    {
      number: "03.",
      title: "Design",
      description:
        "We design the right solution for your business. We craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.",
    },
    {
      number: "04.",
      title: "Development",
      description:
        "We build the right solution for your business. Our intuitive and user-friendly interfaces are easy to use and maintain.",
    },
    {
      number: "05.",
      title: "Deployment",
      description:
        "We deploy scalable and secure solutions tailored for your business, ensuring smooth operation and easy maintenance.",
    },
  ];

  return (
    <Container>
      <div className=" font-sans p-8 text-gray-700 flex flex-col items-center justify-center ">
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{
            textAlign: "center",
            color: "black",
            fontSize: { xs: "1.5rem", sm: "1rem", md: "2.3rem" },
            mb: 4,
          }}
          gutterBottom
        >
          Learn by doing with our practical approach to tech education
        </Typography>

        

        <ul className="flex flex-wrap justify-center sm:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex p-4 bg-yellow-100 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="px-4 text-5xl font-extralight text-orange-500">
                {step.number}
              </div>
              <div>
                <div className="text-xl font-bold text-orange-600">{step.title}</div>
                <p className="max-w-xs py-2 text-sm text-gray-700">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
