import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL =  import.meta.env.VITE_API_BASE_URL; 

export default function Signin({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid response from server");
      }

      if (res.ok) {
        onLogin && onLogin(data);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError(error.message || "Network error or invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      {/* Left Side Image */}
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="/path/to/image.jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Login Form */}
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
           Admin Login
          </h1>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <form className="mt-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-orange-500 hover:bg-orange-400 focus:bg-orange-500 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

        
        </div>
      </div>
    </section>
  );
}
