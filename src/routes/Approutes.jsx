// import React, { useState, useEffect } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import ProtectedRoute from "./Protectedroutes"; // Ensure correct file name

// // Main Pages
// import Landing from "../Pages/Landing/Landing";
// import About from "../Pages/About/About";
// import Jobs from "../Pages/Jobs/Jobs";
// import Contact from "../Pages/Contact/Contact";
// import Courses from "../Pages/Courses/Courses";
// import Signin from "../Pages/Sign/Signin"; // Fixed typo "Singin" -> "Signin"

// // Course Details Components
// import Animation from "../Pages/Courses/CourseDetails/components/Animation";
// import VFX from "../Pages/Courses/CourseDetails/components/Vfx";
// import Filmmaking from "../Pages/Courses/CourseDetails/components/Filmmaking";
// import Graphics from "../Pages/Courses/CourseDetails/components/Graphics";
// import Webdev from "../Pages/Courses/CourseDetails/components/Webdev";
// import Videoeditor from "../Pages/Courses/CourseDetails/components/Videoeditor";
// import Uiux from "../Pages/Courses/CourseDetails/components/Uiux";
// import Digitalmarketing from "../Pages/Courses/CourseDetails/components/Digitalmarketing";
// import Dashboard from "../Pages/admin/AdminDashboard";

// export default function Approutes() {
//   return (
//     <Routes>
//       {/* Main Pages */}
//       <Route path="/" element={<Landing />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/jobs" element={<Jobs />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/courses" element={<Courses />} />

//       {/* Course Routes */}
//       <Route path="/animation" element={<Animation />} />
//       <Route path="/vfx" element={<VFX />} />
//       <Route path="/film-making" element={<Filmmaking />} />
//       <Route path="/graphics" element={<Graphics />} />
//       <Route path="/web-development" element={<Webdev />} />
//       <Route path="/video-editing" element={<Videoeditor />} />
//       <Route path="/ui-ux" element={<Uiux />} />
//       <Route path="/digital-marketing" element={<Digitalmarketing />} />

//       <Route path="/signin" element={<Signin />} />

//       {/* Protected Dashboard Route */}
//       <Route path="/dashboard" element={<ProtectedRoute />}>
//         <Route index element={<Dashboard />} />
//       </Route>

//       {/* Redirect unknown routes */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// }



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
