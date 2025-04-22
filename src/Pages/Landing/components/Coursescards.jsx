import React, { useState, useEffect } from 'react'
import { CardBody, CardContainer, CardItem } from "../../Global/aceternity/ui/3d-card";
import { Typography, Grid, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Coursescards() {

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
      <Box sx={{ color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, mx: { xs: 2, md: 4 }, my: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#ff5722", fontSize: { xs: "2rem", md: "3.3rem" }, my: { xs: 2, md: 4 } }}
          gutterBottom
        >
          OUR COURSES
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
          {/* {courses.map((courses, index) => (
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
                    translateZ="60"
                    className="bg-orange-500   w-full  px-4 py-2 rounded-lg text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 cursor-pointer">
                    View Details
                  </button>
                </CardBody>
              </CardContainer>
            </Grid>
          ))} */}
          {courses.slice(0, 6).map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardContainer className="inter-var">
                
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-3xl font-bold dark:text-white">
                    {course.course_name}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {course.subtitle}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <button
                    onClick={() => navigate(course.slug)}
                    translateZ="60"
                    className="bg-orange-500 w-full px-4 py-2 rounded-lg text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 cursor-pointer"
                  >
                    View Details
                  </button>
                </CardBody>
              </CardContainer>
            </Grid>
          ))}

        </Box>
      </Box>
    </>
  )
}
