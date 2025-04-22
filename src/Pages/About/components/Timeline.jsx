import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { Business, Groups, PersonPin, Description, CheckCircle } from "@mui/icons-material";

const timelineData = [
  { icon: <Groups />, leftText: "", rightText: "Candidates Lined Up For Interview" },
  { icon: <PersonPin />, leftText: "Candidates Selected", rightText: "" },
  { icon: <Description />, leftText: "", rightText: "Offer Letter Handed By ConsultaHinos" },
  { icon: <CheckCircle />, leftText: "Checks On DOJ And Background", rightText: "" },
  { icon: <Business />, leftText: "", rightText: "Collaborative Induction & Compliance" },
];

const CustomTimeline = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      timelineRefs.current.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100; // Trigger 100px before fully in view
          if (isVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount to check initial visibility

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 0", // Increased padding
        maxWidth: "1000px", // Wider container
        margin: "0 auto",
      }}
    >
          <Typography
                variant="h4"
                fontWeight={900}
                sx={{
                  textAlign: "center",
                  color: "#ff5722",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3.3rem" },
                  mb: 4, 
                }}
                gutterBottom
              >
                WHAT IS - WHAT WE DO
              </Typography>
      {timelineData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (timelineRefs.current[index] = el)} // Assign ref to each timeline item
          style={{
            display: "flex",
            alignItems: "center",
           // marginBottom: "40px", // More spacing between items
            width: "100%",
            opacity: 0, // Start hidden for animation
            transform: "translateY(50px)", // Start 50px below for slide-up effect
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out", // Smooth animation
          }}
        >
          {/* Left Text */}
          <div
            style={{
              flex: 1,
              textAlign: "right",
              paddingRight: "30px", // More padding
              fontWeight: 700, // Bolder text
              color: "#333",
              fontSize: "20px", // Bigger text
              minWidth: "0",
              wordWrap: "break-word",
            }}
          >
            {item.leftText}
          </div>

          {/* Timeline Icon */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: 60, // Larger icon
                height: 60,
                backgroundColor: "orange",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                boxShadow: "0 6px 14px rgba(255, 165, 0, 0.5)", // Stronger shadow
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)"; // Larger hover effect
                e.currentTarget.style.backgroundColor = "#ff8c00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "orange";
              }}
            >
              {item.icon}
            </div>

            {/* Connector Line (Not shown for the last item) */}
            {index !== timelineData.length - 1 && (
              <div
                style={{
                  height: 70, // Longer line
                  width: 4, // Thicker line
                  backgroundColor: "orange",
                  margin: "10px 0",
                }}
              />
            )}
          </div>

          {/* Right Text */}
          <div
            style={{
              flex: 1,
              textAlign: "left",
              paddingLeft: "30px", // More padding
              fontWeight: 700, // Bolder text
              color: "#333",
              fontSize: "20px", // Bigger text
              minWidth: "0",
              wordWrap: "break-word",
            }}
          >
            {item.rightText}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomTimeline;