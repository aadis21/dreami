
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./Protectedroutes";

// Main Pages
import Landing from "../Pages/Landing/Landing";
import About from "../Pages/About/About";
import Jobs from "../Pages/Jobs/Jobs";
import Contact from "../Pages/Contact/Contact";
import Courses from "../Pages/Courses/Courses";
import Signin from "../Pages/Sign/Signin";

// Dynamic Course Page
import CourseDetails from "../Pages/Courses/CourseDetailsPage";

// Admin
import Dashboard from "../Pages/admin/AdminDashboard";

export default function Approutes() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/signin" element={<Signin />} />

      {/* Dynamic Course Route */}
      <Route path="/:slug" element={<CourseDetails />} />
      <Route path="/courses/:slug" element={<CourseDetails />} />

      {/* Protected Dashboard Route */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
