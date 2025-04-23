import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${BASE_URL}/api/candidate/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Candidate registered successfully!🥳");
        setFormData({ name: "", email: "", phone: "" }); 
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Grid
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          backgroundColor: "#fff",
          color: "#000",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Book a <span style={{ color: "#ff5722" }}>Free Demo</span> to know more
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          variant="outlined"
          margin="normal"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          type="tel"
          variant="outlined"
          margin="normal"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "#ff5722", mt: 2 }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Continue booking Demo →"}
        </Button>

        {message && (
          <Typography  variant="body2" color="error" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Grid>
    </div>
  );
}
