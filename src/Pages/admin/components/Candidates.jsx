import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress, Button } from "@mui/material";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Candidte() {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/candidate/read`);
        const data = await response.json();

        if (response.ok) {
          setCandidates(data);
        } else {
          console.error("Failed to fetch candidates");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="warning" />
        </div>
      ) : candidates.length > 0 ? (
        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#ff5722" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate._id}>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.email}</TableCell>
                  <TableCell>{candidate.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" color="error" textAlign="center">
          No candidates found.
        </Typography>
      )}
    </div>
  );
}
