import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Container } from "@mui/material";

const data = [
  { feature: "Real work experience", Dreamify: "✔" },
  { feature: "True, project-based learning", Dreamify: "✔" },
  { feature: "Live sessions & mentorship", Dreamify: "✔" },
  { feature: "Job-ready portfolio", Dreamify: "✔" },
  { feature: "Externship with top companies", Dreamify: "✔" },
  { feature: "Career guidance", Dreamify: "✔" },
  { feature: "Assured Referrals", Dreamify: "✔" },
];

const ComparisonTable = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography sx={{ my: { xs: 2, md: 4 } }} variant="h4" fontWeight="bold" gutterBottom>
        Why Choose Dreamify
      </Typography>
      <Container maxWidth="md">
        <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow sx={{ backgroundColor: "#ff5722" }}>
                <TableCell sx={{ fontWeight: "bold", color: "white" }}>Feature</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "white" }}>Dreamifys</TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody >
              {data.map((row, index) => (
                <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? "#F7FAF9" : "white" }}>
                  <TableCell >{row.feature}</TableCell>
                  <TableCell align="center" sx={{ color: row.Dreamify === "✔" ? "green" : "red", backgroundColor: "white" }}>
                    {row.Dreamify}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ComparisonTable;
