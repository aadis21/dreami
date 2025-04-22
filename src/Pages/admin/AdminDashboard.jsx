// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Tabs,
//   Tab,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import Candidate from "./components/Candidates"; 

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// function AdminDashboard() {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     course_name: "",
//     description: "",
//     listone: "",
//     listtwo: "",
//     listthree: "",
//     image: null,
//   });
//   const [editId, setEditId] = useState(null);
//   const [tabValue, setTabValue] = useState(0);
//   const [alert, setAlert] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [imageError, setImageError] = useState(null);

//   const handleLogout = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/admin/logout`, {
//         method: "POST",
//         credentials: "include",
//       });

//       if (!response.ok) {
//         throw new Error("Logout failed");
//       }
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/course/read`);
//       setCourses(res.data);
//     } catch (err) {
//       setAlert({
//         open: true,
//         message: "Failed to load courses",
//         severity: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate image dimensions
//       const img = new Image();
//       img.onload = () => {
//         if (img.width !== 1200 || img.height !== 630) {
//           setImageError(
//             "Image must be exactly 1200x630 pixels. Please upload a different image."
//           );
//           setImagePreview(null);
//           setFormData((prev) => ({ ...prev, image: null }));
//         } else {
//           setImageError(null);
//           setFormData((prev) => ({ ...prev, image: file }));
//           setImagePreview(URL.createObjectURL(file));
//         }
//       };
//       img.onerror = () => {
//         setImageError("Failed to load image. Please try again.");
//         setImagePreview(null);
//         setFormData((prev) => ({ ...prev, image: null }));
//       };
//       img.src = URL.createObjectURL(file);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/admin/logout`, {
//         method: "POST",
//         credentials: "include",
//       });

//       if (!response.ok) {
//         throw new Error("Logout failed");
//       }
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/course/read`);
//       setCourses(res.data);
//     } catch (err) {
//       setAlert({
//         open: true,
//         message: "Failed to load courses",
//         severity: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData((prev) => ({ ...prev, image: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const courseData = {
//       ...formData,
//       listone: formData.listone
//         .split(",")
//         .map((item) => item.trim())
//         .filter((item) => item),
//       listtwo: formData.listtwo
//         .split(",")
//         .map((item) => item.trim())
//         .filter((item) => item),
//       listthree: formData.listthree
//         .split(",")
//         .map((item) => item.trim())
//         .filter((item) => item),
//     };

//     const data = new FormData();
//     // Append non-list fields
//     data.append("title", courseData.title);
//     data.append("subtitle", courseData.subtitle);
//     data.append("course_name", courseData.course_name);
//     data.append("description", courseData.description);
//     if (courseData.image) {
//       data.append("image", courseData.image);
//     }
//     // Append list fields as arrays
//     courseData.listone.forEach((item, index) => {
//       data.append(`listone[${index}]`, item);
//     });
//     courseData.listtwo.forEach((item, index) => {
//       data.append(`listtwo[${index}]`, item);
//     });
//     courseData.listthree.forEach((item, index) => {
//       data.append(`listthree[${index}]`, item);
//     });

//     try {
//       if (editId) {
//         await axios.put(`${BASE_URL}/api/course/update/${editId}`, data);
//         setAlert({
//           open: true,
//           message: "Course updated successfully",
//           severity: "success",
//         });
//       } else {
//         await axios.post(`${BASE_URL}/api/course/add`, data);
//         setAlert({
//           open: true,
//           message: "Course added successfully",
//           severity: "success",
//         });
//       }
//       fetchCourses();
//       setFormData({
//         title: "",
//         subtitle: "",
//         course_name: "",
//         description: "",
//         listone: "",
//         listtwo: "",
//         listthree: "",
//         image: null,
//       });
//       setEditId(null);
//       setTabValue(0);
//     } catch (err) {
//       setAlert({
//         open: true,
//         message: "Error submitting form",
//         severity: "error",
//       });
//     }
//   };

//   const handleEdit = (course) => {
//     setEditId(course._id);
//     setFormData({
//       title: course.title || "",
//       subtitle: course.subtitle || "",
//       course_name: course.course_name || "",
//       description: course.description || "",
//       listone: Array.isArray(course.listone) ? course.listone.join(", ") : "",
//       listtwo: Array.isArray(course.listtwo) ? course.listtwo.join(", ") : "",
//       listthree: Array.isArray(course.listthree) ? course.listthree.join(", ") : "",
//       image: null,
//     });
//     setTabValue(1);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/api/course/delete/${id}`);
//       setAlert({
//         open: true,
//         message: "Course deleted",
//         severity: "info",
//       });
//       fetchCourses();
//     } catch (err) {
//       setAlert({
//         open: true,
//         message: "Failed to delete course",
//         severity: "error",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Box className="container mx-auto p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <Typography variant="h4" className="font-bold text-orange-500">
//             Admin Dashboard
//           </Typography>
//           <Button
//             variant="contained"
//             className="bg-orange-600 hover:bg-orange-700"
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </div>
//         <hr className="border-orange-500 mb-6" />

//         {/* Tabs */}
//         <Tabs
//           value={tabValue}
//           onChange={(e, newValue) => setTabValue(newValue)}
//           className="mb-6"
//           sx={{
//             "& .MuiTabs-indicator": { backgroundColor: "#f97316" },
//             "& .MuiTab-root": {
//               color: "#fff",
//               "&.Mui-selected": { color: "#f97316" },
//             },
//           }}
//         >
//           <Tab label="View Courses" />
//           <Tab label={editId ? "Edit Course" : "Add Course"} />
//           <Tab label="View Data" />
//         </Tabs>

//         {/* View Courses Tab */}
//         {tabValue === 0 && (
//           <div className="mt-6">
//             <Grid container spacing={3}>
//               {Array.isArray(courses) &&
//                 courses.map((course) => (
//                   <Grid item xs={12} sm={6} md={4} key={course._id}>
//                     <Card className="bg-gray-900 border border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transition-shadow">
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={course.image}
//                         alt={course.title}
//                         className="object-cover"
//                       />
//                       <CardContent>
//                         <Typography
//                           variant="h6"
//                           className="text-orange-500 font-semibold"
//                         >
//                           {course.title}
//                         </Typography>
//                         <Typography className="text-gray-300">
//                           {course.subtitle}
//                         </Typography>
//                       </CardContent>
//                       <CardActions className="justify-between">
//                         <Button
//                           size="small"
//                           className="text-orange-500 hover:text-orange-600"
//                           onClick={() => handleEdit(course)}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           size="small"
//                           className="text-red-500 hover:text-red-600"
//                           onClick={() => handleDelete(course._id)}
//                         >
//                           Delete
//                         </Button>
//                       </CardActions>
//                     </Card>
//                   </Grid>
//                 ))}
//             </Grid>
//           </div>
//         )}

//         {/* Add/Edit Course Tab */}
//         {/* {tabValue === 1 && (
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             className="mt-6 mx-auto bg-gray-900 p-6 rounded-lg border border-orange-500"
//           >
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Subtitle"
//                   name="subtitle"
//                   value={formData.subtitle}
//                   onChange={handleChange}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Course Name"
//                   name="course_name"
//                   value={formData.course_name}
//                   onChange={handleChange}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   multiline
//                   rows={4}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   fullWidth
//                   label="Career Options (comma-separated)"
//                   name="listone"
//                   value={formData.listone}
//                   onChange={handleChange}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   fullWidth
//                   label="Course Content (comma-separated)"
//                   name="listtwo"
//                   value={formData.listtwo}
//                   onChange={handleChange}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   fullWidth
//                   label="Software Covered (comma-separated)"
//                   name="listthree"
//                   value={formData.listthree}
//                   onChange={handleChange}
//                   className="bg-gray-800 text-white"
//                   InputLabelProps={{ style: { color: "#f97316" } }}
//                   InputProps={{ style: { color: "#fff" } }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#f97316" },
//                       "&:hover fieldset": { borderColor: "#ea580c" },
//                       "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                     },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   variant="outlined"
//                   component="label"
//                   className="border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600"
//                 >
//                   Upload Image
//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     hidden
//                     onChange={handleChange}
//                   />
//                 </Button>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   variant="contained"
//                   type="submit"
//                   className="bg-orange-600 hover:bg-orange-700 w-full"
//                 >
//                   {editId ? "Update" : "Add"} Course
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         )} */}

// {tabValue === 1 && (
//   <Box
//     component="form"
//     onSubmit={handleSubmit}
//     className="mt-6 mx-auto bg-gray-900 p-6 rounded-lg border border-orange-500"
//   >
//     <Grid container spacing={3}>
//       {/* Left Side: Form Fields */}
//       <Grid item xs={12} md={8}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Subtitle"
//               name="subtitle"
//               value={formData.subtitle}
//               onChange={handleChange}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Course Name"
//               name="course_name"
//               value={formData.course_name}
//               onChange={handleChange}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               multiline
//               rows={4}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Career Options (comma-separated)"
//               name="listone"
//               value={formData.listone}
//               onChange={handleChange}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Course Content (comma-separated)"
//               name="listtwo"
//               value={formData.listtwo}
//               onChange={handleChange}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               label="Software Covered (comma-separated)"
//               name="listthree"
//               value={formData.listthree}
//               onChange={handleChange}
//               className="bg-gray-800 text-white"
//               InputLabelProps={{ style: { color: "#f97316" } }}
//               InputProps={{ style: { color: "#fff" } }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#f97316" },
//                   "&:hover fieldset": { borderColor: "#ea580c" },
//                   "&.Mui-focused fieldset": { borderColor: "#ea580c" },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="outlined"
//               component="label"
//               className="border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600"
//             >
//               Upload Image
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 hidden
//                 onChange={handleImageChange}
//               />
//             </Button>
//             <Typography variant="body2" className="text-gray-400 mt-2">
//               Please upload an image with dimensions 1200x630 pixels (width: 1200px, height: 630px).
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               type="submit"
//               className="bg-orange-600 hover:bg-orange-700 w-full"
//               disabled={imageError}
//             >
//               {editId ? "Update" : "Add"} Course
//             </Button>
//             {imageError && (
//               <Typography variant="body2" className="text-red-500 mt-2">
//                 {imageError}
//               </Typography>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* Right Side: Image Preview */}
//       <Grid item xs={12} md={4}>
//         <Box className="bg-gray-800 p-4 rounded-lg border border-orange-500 h-full">
//           <Typography variant="h6" className="text-orange-500 mb-4">
//             Image Preview
//           </Typography>
//           {imagePreview ? (
//             <CardMedia
//               component="img"
//               image={imagePreview}
//               alt="Uploaded image preview"
//               className="object-contain w-full h-64 rounded"
//             />
//           ) : editId && formData.imageUrl ? (
//             <CardMedia
//               component="img"
//               image={formData.imageUrl}
//               alt="Existing course image"
//               className="object-contain w-full h-64 rounded"
//             />
//           ) : (
//             <Typography variant="body2" className="text-gray-400">
//               No image selected
//             </Typography>
//           )}
//         </Box>
//       </Grid>
//     </Grid>
//   </Box>
// )}

//         {/* View Data Tab */}
//         {tabValue === 2 && (
//           <div className="mt-6">
//             <Candidate />
//           </div>
//         )}

//         {/* Snackbar for Alerts */}
//         <Snackbar
//           open={alert.open}
//           autoHideDuration={3000}
//           onClose={() => setAlert({ ...alert, open: false })}
//           anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         >
//           <Alert
//             onClose={() => setAlert({ ...alert, open: false })}
//             severity={alert.severity}
//             sx={{ width: "100%", backgroundColor: "#1f2937", color: "#fff" }}
//           >
//             {alert.message}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </div>
//   );
// }

// export default AdminDashboard;


import { useEffect, useState } from "react";
import axios from "axios";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Snackbar,
  Alert,
} from "@mui/material";
import Candidate from "./components/Candidates"; // Adjust path as needed

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    course_name: "",
    description: "",
    listone: "",
    listtwo: "",
    listthree: "",
    image: null,
    imageUrl: "", // Store existing image URL when editing
  });
  const [editId, setEditId] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/course/read`);
      setCourses(res.data);
    } catch (err) {
      setAlert({
        open: true,
        message: "Failed to load courses",
        severity: "error",
      });
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width > 1200 || img.height > 630) {
          setImageError(
            "Image must not exceed 1200x630 pixels. Please upload a different image."
          );
          setImagePreview(null);
          setFormData((prev) => ({ ...prev, image: null }));
        } else {
          setImageError(null);
          setFormData((prev) => ({ ...prev, image: file }));
          setImagePreview(URL.createObjectURL(file));
        }
      };
      img.onerror = () => {
        setImageError("Failed to load image. Please try again.");
        setImagePreview(null);
        setFormData((prev) => ({ ...prev, image: null }));
      };
      img.src = URL.createObjectURL(file);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      ...formData,
      listone: formData.listone
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
      listtwo: formData.listtwo
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
      listthree: formData.listthree
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item),
    };

    const data = new FormData();
    data.append("title", courseData.title);
    data.append("subtitle", courseData.subtitle);
    data.append("course_name", courseData.course_name);
    data.append("description", courseData.description);
    if (courseData.image) {
      data.append("image", courseData.image);
    }
    courseData.listone.forEach((item, index) => {
      data.append(`listone[${index}]`, item);
    });
    courseData.listtwo.forEach((item, index) => {
      data.append(`listtwo[${index}]`, item);
    });
    courseData.listthree.forEach((item, index) => {
      data.append(`listthree[${index}]`, item);
    });

    try {
      if (editId) {
        await axios.put(`${BASE_URL}/api/course/update/${editId}`, data);
        setAlert({
          open: true,
          message: "Course updated successfully",
          severity: "success",
        });
      } else {
        await axios.post(`${BASE_URL}/api/course/add`, data);
        setAlert({
          open: true,
          message: "Course added successfully",
          severity: "success",
        });
      }
      fetchCourses();
      setFormData({
        title: "",
        subtitle: "",
        course_name: "",
        description: "",
        listone: "",
        listtwo: "",
        listthree: "",
        image: null,
        imageUrl: "",
      });
      setEditId(null);
      setTabValue(0);
      setImagePreview(null);
      setImageError(null);
    } catch (err) {
      setAlert({
        open: true,
        message: "Error submitting form",
        severity: "error",
      });
    }
  };

  const handleEdit = (course) => {
    setEditId(course._id);
    setFormData({
      title: course.title || "",
      subtitle: course.subtitle || "",
      course_name: course.course_name || "",
      description: course.description || "",
      listone: Array.isArray(course.listone)
        ? course.listone[0]?.includes(",")
          ? course.listone[0]
          : course.listone.join(", ")
        : "",
      listtwo: Array.isArray(course.listtwo)
        ? course.listtwo[0]?.includes(",")
          ? course.listtwo[0]
          : course.listtwo.join(", ")
        : "",
      listthree: Array.isArray(course.listthree)
        ? course.listthree[0]?.includes(",")
          ? course.listthree[0]
          : course.listthree.join(", ")
        : "",
      image: null,
      imageUrl: course.image || "",
    });
    setImagePreview(null);
    setImageError(null);
    setTabValue(1);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/course/delete/${id}`);
      setAlert({
        open: true,
        message: "Course deleted",
        severity: "info",
      });
      fetchCourses();
    } catch (err) {
      setAlert({
        open: true,
        message: "Failed to delete course",
        severity: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Box className="container mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Typography variant="h4" className="font-bold text-orange-500">
            Admin Dashboard
          </Typography>
          <Button
            variant="contained"
            className="bg-orange-600 hover:bg-orange-700"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <hr className="border-orange-500 mb-6" />

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          className="mb-6"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#f97316" },
            "& .MuiTab-root": {
              color: "#fff",
              "&.Mui-selected": { color: "#f97316" },
            },
          }}
        >
          <Tab label="View Courses" />
          <Tab label={editId ? "Edit Course" : "Add Course"} />
          <Tab label="View Data" />
        </Tabs>

        {/* View Courses Tab */}
        {tabValue === 0 && (
          <div className="mt-6">
            <Grid container spacing={3}>
              {Array.isArray(courses) &&
                courses.map((course) => (
                  <Grid item xs={12} sm={6} md={4} key={course._id}>
                    <Card className="bg-gray-900 border border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transition-shadow">
                      <CardMedia
                        component="img"
                        height="140"
                        image={course.image}
                        alt={course.title}
                        className="object-cover"
                      />
  <CardContent>
                        <Typography
                          variant="h6"
                          className="text-orange-500 font-semibold"
                        >
                          {course.title}
                        </Typography>
                        <Typography className="text-gray-300">
                          {course.subtitle}
                        </Typography>
                      </CardContent>
                      <CardActions className="justify-between">
                        <Button
                          size="small"
                          className="text-orange-500 hover:text-orange-600"
                          onClick={() => handleEdit(course)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => handleDelete(course._id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </div>
        )}

        {/* Add/Edit Course Tab */}
        {tabValue === 1 && (
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="mt-6 mx-auto bg-gray-900 p-6 rounded-lg border border-orange-500"
           >
            <Grid container spacing={3}>
              {/* Left Side: Form Fields */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subtitle"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleChange}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Course Name"
                      name="course_name"
                      value={formData.course_name}
                      onChange={handleChange}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Career Options (comma-separated)"
                      name="listone"
                      value={formData.listone}
                      onChange={handleChange}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Course Content (comma-separated)"
                      name="listtwo"
                      value={formData.listtwo}
                      onChange={handleChange}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Software Covered (comma-separated)"
                      name="listthree"
                      value={formData.listthree}
                      onChange={handleChange}
                      className="bg-gray-800 text-white"
                      InputLabelProps={{ style: { color: "#f97316" } }}
                      InputProps={{ style: { color: "#fff" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#f97316" },
                          "&:hover fieldset": { borderColor: "#ea580c" },
                          "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      component="label"
                      className="border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600"
                    >
                      Upload Image
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                      />
                    </Button>
                    <Typography variant="body2" className="text-gray-400 mt-2">
                      Please upload an image with dimensions 1200x630 pixels (width: 1200px, height: 630px).
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      className="bg-orange-600 hover:bg-orange-700 w-full"
                      disabled={imageError}
                    >
                      {editId ? "Update" : "Add"} Course
                    </Button>
                    {imageError && (
                      <Typography variant="body2" className="text-red-500 mt-2">
                        {imageError}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              {/* Right Side: Image Preview */}
              <Grid item xs={12} md={4}>
                <Box className="bg-gray-800 p-4 rounded-lg border border-orange-500 h-full">
                  <Typography variant="h6" className="text-orange-500 mb-4">
                    Image Preview
                  </Typography>
                  {imagePreview ? (
                    <CardMedia
                      component="img"
                      image={imagePreview}
                      alt="Uploaded image preview"
                      className="object-contain w-full h-64 rounded"
                    />
                  ) : editId && formData.imageUrl ? (
                    <CardMedia
                      component="img"
                      image={formData.imageUrl}
                      alt="Existing course image"
                      className="object-contain w-full h-64 rounded"
                    />
                  ) : (
                    <Typography variant="body2" className="text-gray-400">
                      No image selected
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* View Data Tab */}
        {tabValue === 2 && (
          <div className="mt-6">
            <Candidate />
          </div>
        )}

        {/* Snackbar for Alerts */}
        <Snackbar
          open={alert.open}
          autoHideDuration={3000}
          onClose={() => setAlert({ ...alert, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setAlert({ ...alert, open: false })}
            severity={alert.severity}
            sx={{ width: "100%", backgroundColor: "#1f2937", color: "#fff" }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}

export default AdminDashboard;
