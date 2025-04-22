//this for slugs
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Coursedetails from './CourseDetails/Coursedetails';  // Import your existing Coursedetails component

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  // Fetch course details based on slug
  useEffect(() => {
    axios.get(`${BASE_URL}/api/course/read`)
      .then(res => {
        const foundCourse = res.data.find(course => course.slug === slug);
        setCourse(foundCourse);
      })
      .catch(err => {
        console.error("Error fetching course details", err);
      });
  }, [slug]);

  // Loading state
  if (!course) return <div>Loading...</div>;

  // Pass course data as props to your Coursedetails component
  return (
    <Coursedetails
      Course={course.title}
      details={course.subtitle}
      img={course.image}
      coursename={course.course_name}
      courseDescription={course.description}
      listone={course.listone}
      listtwo={course.listtwo}
      listthree={course.listthree}
    />
  );
}
