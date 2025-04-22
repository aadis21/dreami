import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Pages/Global/Loader/Loader";

const BASE_URL = "http://localhost:4040";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/admin/dashboard`, {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          setAuth(true);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          setAuth(false);
          localStorage.removeItem("isAuthenticated");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setAuth(false);
        localStorage.removeItem("isAuthenticated");
      }
    };

    checkAuth();
  }, []);

  if (auth === null) return <Loader />;
  return auth ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
